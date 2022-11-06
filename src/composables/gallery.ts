import { firestore, storage } from "@/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  getDoc,
  updateDoc,
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
interface publicImageData {
  id: string;
  order: number;
  description: string;
  uploadedBy: string;
}

interface GalleryImage {
  name: string;
  bucket: string;
  fullPath: string;
  url: string;
  order: number;
  description: string;
  uploadedBy: string;
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
    //save additional data in firestore
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

const updateGalleryImage = async (
  id: number,
  image: GalleryImage
): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    updateDoc(doc(firestore, `/galleries/${id}/public-images/${image.name}`), {
      description: image.description,
      order: image.order,
      uploadedBy: image.uploadedBy,
    })
      .then(() => {
        resolve();
      })
      .catch((e) => {
        console.log(e);
        reject();
      });
  });
};

const getGalleryImages = async (id: string): Promise<void | GalleryImage[]> => {
  return new Promise<void | GalleryImage[]>((resolve, reject) => {
    listAll(ref(storage, `galleries/${id}/`))
      .then(async (data: ListResult) => {
        const images: GalleryImage[] = [];
        const itemData: {
          name: string;
          bucket: string;
          fullPath: string;
          url: string;
        }[] = [];
        for (let i = 0; i < data.items.length; i++) {
          const item: StorageReference = data.items[i];
          await getDownloadURL(item).then((url) => {
            itemData.push({
              name: item.name,
              bucket: item.bucket,
              fullPath: item.fullPath,
              url,
            });
          });
        }
        const galleryPublicImages = await getGalleryPublicImages(id);

        itemData.forEach((img) => {
          const publicData: publicImageData = galleryPublicImages!.find(
            (obj) => obj.id === img.name
          )!;

          images.push({
            name: img.name,
            bucket: img.bucket,
            fullPath: img.fullPath,
            url: img.url,
            order: publicData.order,
            description: publicData.description,
            uploadedBy: publicData.uploadedBy,
          });
        });
        resolve(images);
      })
      .catch((e) => {
        console.log(e);
        reject();
      });
  });
};

const getGalleryPublicImages = async (
  id: string
): Promise<void | publicImageData[]> => {
  return new Promise<void | publicImageData[]>((resolve, reject) => {
    getDocs(collection(firestore, `/galleries/${id}/public-images`))
      .then((data) => {
        const d: publicImageData[] = [];
        data.docs.forEach((item) => {
          const computedData = item.data();
          d.push({
            id: item.id,
            order: computedData.order,
            description: computedData.description,
            uploadedBy: computedData.uploadedBy,
          });
        });
        resolve(d);
      })
      .catch((e) => {
        console.log(e);
        reject();
      });
  });
};

const getGallery = async (id: string): Promise<void | Gallery> => {
  return new Promise<void | Gallery>((resolve, reject) => {
    getDoc(doc(firestore, "galleries", id))
      .then((data) => {
        resolve(data.data() as Gallery);
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
  getGallery,
  getGalleries,
  Gallery,
  GalleryImage,
  getGalleryImages,
  updateGalleryImage,
  uploadGalleryImages,
};
