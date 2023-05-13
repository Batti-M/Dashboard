import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, addDoc } from 'firebase/firestore'

const useCollection = (collectionName) => {
    const error = ref(null);

    const addNewDocument = async (doc) => {
        try{
            await addDoc(collection(db, collectionName), doc)
        }
        catch(error){
            console.error('error adding document', error)
        }
    }

    return {error,addNewDocument}
}

export default useCollection;