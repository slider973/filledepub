import firebase_app from "./config";
import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addData(collectionName, id, data, subCollection = null, subId = null) {
    let result = null;
    let error = null;

    try {
        if (subCollection) {
            if (subId) {
                // Si un sous-id est fourni, utilisez-le pour créer un document avec cet identifiant
                const documentPath = doc(db, collectionName, id, subCollection, subId);
                result = await setDoc(documentPath, data, {
                    merge: true,
                });
            } else {
                // Si aucun sous-id n'est fourni, créez un nouveau document avec un identifiant généré automatiquement
                const collectionRef = collection(db, collectionName, id, subCollection);
                result = await addDoc(collectionRef, data);
                console.dir( result)
            }
        } else {
            // Sinon, utilisez le chemin vers la collection principale
            const documentPath = doc(db, collectionName, id);
            result = await setDoc(documentPath, data, {
                merge: true,
            });
        }
    } catch (e) {
        error = e;
        throw error
    }

    return { result, error };
}
