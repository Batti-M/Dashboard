import { ref, watchEffect } from "vue";
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
       
        console.log(err);
        error.value = err.message;
    });

        watchEffect((onInvalidate) => {
            onInvalidate(() => unsubscribe()); //onInvalidate is a function that runs when the component is unmounted
        });

   
    return { error, documents, unsubscribe };
}


export default getCollection;


