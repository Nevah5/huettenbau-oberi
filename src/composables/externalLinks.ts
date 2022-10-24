import { firestore } from "@/firebase"
import { collection, doc, DocumentData, getDocs, query, QueryDocumentSnapshot, setDoc } from "firebase/firestore"

interface link {
  id: string,
  link: string,
  code: string
}

const getExternalLinks = (): Promise<void | link[]> => {
  return new Promise<void | link[]>((resolve, reject) => {
    getDocs(query(collection(firestore, "external-links")))
    .then((data) => {
      const links: link[] = [];
      data.docs.forEach((docSnapshot: QueryDocumentSnapshot<DocumentData>) => {
        links.push({id: docSnapshot.id,...docSnapshot.data()} as link)
      })
      resolve(links)
    })
    .catch((e) => {
      console.log(e);
      reject()
    })
  })
}

const updateExternalLink = (newLink: link): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    setDoc(doc(firestore, "external-links", newLink.id), {link: newLink.link, code: newLink.code})
    .then(() => resolve())
    .catch((e) => {
      console.log(e);
      reject(e)
    })
  })
}

export {
  link,
  getExternalLinks,
  updateExternalLink
}