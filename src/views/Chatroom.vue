<template>
    <div class="container">
        <Navbar />
        <Chat />
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import Chat from '@/components/Chat.vue';
import { watch } from 'vue';

import { useRouter } from 'vue-router';

const { user } = getUser();
const router = useRouter();

watch(user, () => {
    if (!user.value) {
        router.push('/');
    }
})

</script>

<style></style>