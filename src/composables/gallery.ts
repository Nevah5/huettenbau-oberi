import { firestore, storage } from "@/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  addDoc,
} from "firebase/firestore";
import {
  listAll,
  ListResult,
  StorageReference,
  ref,
  getDownloadURL,
  UploadTask,
  uploadBytesResumable,
} from "firebase/storage";
import { loggedInUser } from "./account";

interface Gallery {
  id: string;
  createdUid: string;
  theme: string;
}

interface GalleryImage {
  name: string;
  bucket: string;
  fullPath: string;
  url: string;
}

const uploadGalleryImages = async (
  id: string,
  files: FileList
): Promise<void | UploadTask[]> => {
  return new Promise<void | UploadTask[]>((resolve) => {
    const taskList: UploadTask[] = [];
    for (let i = 0; i < files.length; i++) {
      const storageRef: StorageReference = ref(
        storage,
        `galleries/${id}/${files.item(i)?.name}`
      );
      const task = uploadBytesResumable(storageRef, files.item(i)!);
      taskList.push(task);
    }
    resolve(taskList);
    for (let i = 0; i < files.length; i++) {
      setDoc(
        // eslint-disable-next-line
        doc(firestore, `galleries/${id}/public-images`, files.item(i)?.name!),
        {
          order: 0,
          uploadedBy: loggedInUser()?.uid,
          description: "",
        }
      );
    }
  });
};

const getGalleryImages = async (id: string): Promise<void | GalleryImage[]> => {
  return new Promise<void | GalleryImage[]>((resolve, reject) => {
    listAll(ref(storage, `galleries/${id}/`))
      .then(async (data: ListResult) => {
        const images: GalleryImage[] = [];
        for (let i = 0; i < data.items.length; i++) {
          const item: StorageReference = data.items[i];
          await getDownloadURL(item).then((url) => {
            images.push({
              name: item.name,
              bucket: item.bucket,
              fullPath: item.fullPath,
              url,
            });
          });
        }
        resolve(images);
      })
      .catch((e) => {
        console.log(e);
        reject();
      });
  });
};

const getGalleries = async (): Promise<void | Gallery[]> => {
  return new Promise<void | Gallery[]>((resolve, reject) => {
    getDocs(query(collection(firestore, "galleries")))
      .then((data) => {
        const docs = data.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(docs as Gallery[]);
      })
      .catch((e) => {
        console.log(e);
        reject();
      });
  });
};

const addGallery = (gallery: Gallery): Promise<void | string> => {
  return new Promise<void | string>((resolve, reject) => {
    setDoc(doc(firestore, "galleries", gallery.id), {
      createdUid: gallery.createdUid,
      theme: gallery.theme,
    })
      .then(() => resolve())
      .catch((e) => {
        console.log(e);
        reject();
      });
  });
};

export {
  addGallery,
  getGalleries,
  Gallery,
  GalleryImage,
  getGalleryImages,
  uploadGalleryImages,
};
