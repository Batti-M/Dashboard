import { ref } from 'vue'
import { auth,db } from '../firebase/config'
import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'


const error = ref(null)




const signup = async(email, password, displayName) => {
    error.value = null

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if (!res) {
            throw new Error('Could not complete the signup')
        }
        await updateProfile(auth.currentUser, { displayName })
        error.value = null

        // Create new user document in Firestore
        await setDoc(doc(db, 'users', res.user.uid), {
            displayName: displayName,
            email: email,
            online: true // Initially set the user as online
        })

        console.log(res.user)
        return res
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useSignup = () => {
    return { error, signup }
    }


export default useSignup