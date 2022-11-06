import { firestore } from "@/firebase"
import { getDoc, doc, setDoc } from "firebase/firestore"

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

const updateAdminUsers = async (newAdminUsers: adminConfig): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    setDoc(doc(firestore, "configs", "admins"), newAdminUsers)
    .then(() => resolve())
    .catch((e) => {
      console.log(e);
      reject()
    })
  })
}

export {
  adminConfig,
  getAdminUsers,
  updateAdminUsers
}