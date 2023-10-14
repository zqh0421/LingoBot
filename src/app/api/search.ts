import {
  addDoc,
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";

import { useAppSelector } from "@/lib/hooks";
import { firestore } from "@/lib/firebase";

export async function addQuery(context: string, word: string, uid: string) {
  const docData = {
    context,
    word,
    createdAt: Date.now(),
    deleted: false,
    updatedAt: Date.now(),
    userId: uid,
  };
  const docRef = await addDoc(collection(firestore, "query"), docData);
  console.log("Document written with ID: ", docRef.id);
  return docRef.id;
}
