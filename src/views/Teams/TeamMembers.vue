<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Status</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in teamMembers" :key="member.email">
          <td>{{ member.status }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
        </tr>
      </tbody>
    </table>

  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
 
  const teamMembers = ref([
      { status: 'Active', name: 'John Doe', email: 'john.doe@example.com' },
      { status: 'Inactive', name: 'Jane Doe', email: 'jane.doe@example.com' },
      { status: 'Active', name: 'Bob Smith', email: 'bob.smith@example.com' },
      { status: 'Active', name: 'Alice Johnson', email: 'alice.johnson@example.com' },
      { status: 'Inactive', name: 'Charlie Brown', email: 'charlie.brown@example.com' },
    ]);
   
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
  