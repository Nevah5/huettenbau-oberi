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

export {
  getGalleries,
  Gallery
}