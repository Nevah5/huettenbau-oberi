import { firestore } from "@/firebase"
import { addDoc, collection, deleteDoc, doc, DocumentData, getDocs, query, QueryDocumentSnapshot, setDoc } from "firebase/firestore"

interface externalLink {
  id: string,
  link: string,
  code: string
}

const getExternalLinks = (): Promise<void | externalLink[]> => {
  return new Promise<void | externalLink[]>((resolve, reject) => {
    getDocs(query(collection(firestore, "external-links")))
    .then((data) => {
      const links: externalLink[] = [];
      data.docs.forEach((docSnapshot: QueryDocumentSnapshot<DocumentData>) => {
        links.push({id: docSnapshot.id,...docSnapshot.data()} as externalLink)
      })
      resolve(links)
    })
    .catch((e) => {
      console.log(e);
      reject()
    })
  })
}

const updateExternalLink = (newLink: externalLink): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    setDoc(doc(firestore, "external-links", newLink.id), {link: newLink.link, code: newLink.code})
    .then(() => resolve())
    .catch((e) => {
      console.log(e);
      reject(e)
    })
  })
}

const deleteExternalLink = (link: externalLink): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    deleteDoc(doc(firestore, "external-links", link.id))
    .then(() => resolve())
    .catch((e) => {
      console.log(e);
      reject()
    })
  })
}

const addExternalLink = (link: string): Promise<void | externalLink> => {
  return new Promise<void | externalLink>((resolve, reject) => {
    const code = (Math.random() + 1).toString(36).substring(2); //https://stackoverflow.com/a/8084248/16029189
    const doc = {link, code};
    addDoc(collection(firestore, "external-links"), doc)
    .then((data) => {
      resolve({id: data.id, ...doc})
    })
    .catch((e) => {
      console.log(e);
      reject()
    })
  })
}

export {
  externalLink,
  getExternalLinks,
  updateExternalLink,
  deleteExternalLink,
  addExternalLink
}