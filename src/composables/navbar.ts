import { firestore } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

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
  const res = await getDocs(query(collection(firestore, "navbar"), orderBy("order", "asc")))
  const data = res.docs.map(doc => {
    return { id: doc.id, ...doc.data() }
  })
  return (data as navbarItem[]);
}

export {
  navbarItem,
  getNavbarData
}