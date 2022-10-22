import { firestore } from "@/firebase"
import { getDoc, doc } from "firebase/firestore"

interface adminConfig {
  users?: string[]
}

const getAdminUsers = async (): Promise<adminConfig | void> => {
  return new Promise<adminConfig | void>((resolve, reject) => {
    getDoc(doc(firestore, "configs", "admins"))
    .then((data) => {
      resolve(data.data() as adminConfig)
    })
    .catch((e) => {
      console.log(e);
      reject()
    })
  })
}

export {
  getAdminUsers
}