import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'


const getCollection = (collectionName) => {
    const error = ref(null);
    const documents = ref(null);

    let collectionQuery = query(collection(db, collectionName), orderBy('createdAt'));
    const unsubscribe = onSnapshot(collectionQuery, (snapshot) => {
        let results = [];
        snapshot.docs.forEach(doc => {
            doc.data().createdAt && results.push({...doc.data(), id: doc.id});
        });
        documents.value = results;
        error.value = null;
    }, (err) => {
        // This is where you handle errors.
        console.log(err);
        error.value = err.message;
    });

    // Be sure to return the unsubscribe function so you can stop listening to updates when you're done.
    return { error, documents, unsubscribe };
}


export default getCollection;


