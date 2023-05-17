<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.displayName }}</td>
          <td>{{ user.online ? 'Online' : 'Offline' }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { getFirestore, collection, onSnapshot } from 'firebase/firestore'

export default {
  setup() {
    const db = getFirestore()
    const users = ref([])

    let unsubscribe = () => {}

    onMounted(() => {
      const usersCollection = collection(db, 'users')
      unsubscribe = onSnapshot(usersCollection, (snapshot) => {
        users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      })
    })

    onUnmounted(() => {
      // Detach the listener when the component is unmounted
      unsubscribe()
    })

    return { users }
  },
}
</script>

  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #4CAF50;
    color: white;
  }
  </style>
  