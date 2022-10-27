import { firestore } from "@/firebase"
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore"

interface Gallery {
  id: string,
  createdUid: string,
  theme: string,
}

const getGalleries = async (): Promise<void | Gallery[]> => {
  return new Promise<void | Gallery[]>((resolve, reject) => {
    getDocs(query(collection(firestore, "galleries")))
    .then((data) => {
      const docs = data.docs.map((doc) => {
        return {id: doc.id, ...doc.data()}
      });
      resolve(docs as Gallery[])
    })
    .catch((e) => {
      console.log(e);
      reject()
    })
  })
}

const addGallery = (gallery: Gallery): Promise<void | string> => {
  return new Promise<void | string>((resolve, reject) => {
    setDoc(doc(firestore, "galleries", gallery.id), {
      createdUid: gallery.createdUid,
      theme: gallery.theme
    })
    .then(() => resolve())
    .catch((e) => {
      console.log(e);
      reject()
    })
  })
}

export {
  addGallery,
  getGalleries,
  Gallery
}