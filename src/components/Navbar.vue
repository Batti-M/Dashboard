<template>
    <nav v-if="user">
        <div>
            <p>Hey there {{  user.displayName }}</p>
            <p class="email">currently logged in as {{ user.email }}</p>
        </div>
        <button @click="handleClick">Log Out</button>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser';

const {logout,error} = useLogout();
const {user} = getUser();

const handleClick = async() => {
    await logout();
    if(!error.value){
       console.log('logged out')
    }
}

</script>

<style>
 nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>