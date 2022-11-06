import { firestore } from "@/firebase";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";

interface navbarSub {
  display: string;
  link: string;
  order: number;
}

interface navbarItem {
  id: string;
  display: string;
  link?: string;
  order: number;
  sub?: navbarSub[];
}

const getNavbarData = async () => {
  const res = await getDocs(
    query(collection(firestore, "navbar"), orderBy("order", "asc"))
  );
  const data = res.docs.map((doc) => {
    return { id: doc.id, ...doc.data() } as navbarItem;
  });
  data.forEach((d) => {
    d.sub?.sort((a, b) => {
      return a.order - b.order;
    });
  });
  return data as navbarItem[];
};

const updateNavbarDocument = (
  docId: string,
  newValue: navbarItem
): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    setDoc(doc(firestore, "navbar", docId), {
      display: newValue.display,
      link: newValue.link,
      order: newValue.order,
      sub: newValue.sub,
    })
      .then(() => resolve())
      .catch((e) => {
        console.log(e);
        reject();
      });
  });
};

export { navbarSub, navbarItem, getNavbarData, updateNavbarDocument };
