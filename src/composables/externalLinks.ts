import { firestore } from "@/firebase"
import { addDoc, collection, deleteDoc, doc, DocumentData, getDocs, query, QueryDocumentSnapshot, setDoc, where, QueryConstraint } from "firebase/firestore"

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

const isExternalLinkValid = (link: string, code: string): Promise<void | boolean> => {
  return new Promise<void | boolean>((resolve, reject) => {
    const queryConstraints: QueryConstraint[] = [
      where("link", "==", link),
      where("code", "==", code),
    ]
    getDocs(query(collection(firestore, "external-links"), ...queryConstraints))
    .then((data) => resolve(data.docs.length >= 1))
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
    const code = generateCode();
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

const generateCode = (): string => {
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";
  for (let i = 0; i < 15; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  return text;
}

export {
  externalLink,
  isExternalLinkValid,
  getExternalLinks,
  updateExternalLink,
  deleteExternalLink,
  addExternalLink
}