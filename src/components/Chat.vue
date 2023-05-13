<template>
    <form >
        <textarea placeholder="type a message" v-model="message" @keydown.enter.prevent="handleSubmit">

        </textarea>
        <div class="error">
            {{ error }}
        </div>
    </form>
    <ChatWindow />

</template>

<script setup>
import { ref } from 'vue';
import getUser from '@/composables/getUser';
import { serverTimestamp } from 'firebase/firestore';
import useCollection from '@/composables/useCollection';
import ChatWindow from '@/components/ChatWindow.vue';

const {error, addNewDocument} = useCollection('messages');
const {user} = getUser();
const message = ref('');

const handleSubmit = async() => {

    const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: serverTimestamp()
    }
    await addNewDocument(chat);
    if(!error.value){
        message.value = '';
    }
    
}
</script>

<style scoped>
form{
    margin: 10px;
}
textarea{
    width: 100%;
    max-width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 6px;
    border: 0;
    border-radius: 20px;
   outline:none;
    font-family: inherit;
    resize: none;
}
</style>