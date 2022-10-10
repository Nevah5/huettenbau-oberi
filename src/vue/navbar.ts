import { firestore } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

interface navbarItem {
  id: string,
  display: string,
  link?: string,
  isExternal?: boolean,
  order: number,
  sub?: {
    display: string,
    link: string,
    isExternal: boolean,
    order: number
  }[]
}

const getNavbarData = async () => {
  const res = await getDocs(collection(firestore, "navbar"))
  const data = res.docs.map(doc => {
    return { id: doc.id, ...doc.data() }
  })
  return (data as navbarItem[]);
}

export {
  getNavbarData
}