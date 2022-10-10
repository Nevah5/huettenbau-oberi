import { firestore } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

const getNavbarData = async () => {
  const res = await getDocs(collection(firestore, "navbar"))
  const data = res.docs.map(doc => {
    return { id: doc.id, ...doc.data() }
  })
}

export {
  getNavbarData
}