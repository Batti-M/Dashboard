<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" required placeholder="display name" v-model="displayName" />
        <input type="email" required placeholder="email" v-model="email" />
        <input type="password" required placeholder="password" v-model="password" />
        <div class="error">
            {{error}}
        </div>
        <button type="submit">Sign up</button>
    </form>
    <div v-if="loggedIn">
        <p> Welcome {{displayName}}!</p>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import useSignup from '@/composables/useSignup'


const displayName = ref('')
const email = ref('')
const password = ref('')
const loggedIn = ref(false)
const emit = defineEmits(['signup'])

const {error, signup} = useSignup()

const handleSubmit = async() => {
   await signup(email.value, password.value, displayName.value)
    if(!error.value){
         emit('signup')
    }
}

</script>

<style scoped>
</style>