<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" required placeholder="email" v-model="email" />
        <input type="password" required placeholder="password" v-model="password" />
        <button type="submit">Log in</button>
    </form>
    <div class="error">
        {{error}}
    </div>

</template>

<script setup>

import { ref , defineEmits} from 'vue'

import useLogin from '@/composables/useLogin'


const email = ref('')
const password = ref('')

const {error, login} = useLogin()
const emit = defineEmits(['login'])

const handleSubmit = async() => {
    await login(email.value, password.value)
   emit('login')
}

</script>

<style scoped></style>