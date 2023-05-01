import firebase_app from "./config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function getDocument(collection, id) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        console.log("getDocument: ", docRef)
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
