import { firestore } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

interface navbarSub{
  display: string,
  link: string,
  isExternal: boolean,
  order: number
}

interface navbarItem {
  id: string,
  display: string,
  link?: string,
  order: number,
  sub?: navbarSub[]
}

const getNavbarData = async () => {
  const res = await getDocs(query(collection(firestore, "navbar"), orderBy("order", "asc")))
  const data = res.docs.map(doc => {
    return { id: doc.id, ...doc.data() } as navbarItem
  })
  data.forEach(d => {
    d.sub?.sort((a, b) => {
      return a.order - b.order
    })
  });
  return (data as navbarItem[]);
}

export {
  navbarItem,
  getNavbarData
}