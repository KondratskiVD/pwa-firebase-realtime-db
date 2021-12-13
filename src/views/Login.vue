<template>
  <form @submit="logIn">
    <input type="text" placeholder="email" v-model="email">
    <input type="text" placeholder="password" v-model="password">
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { loginApi } from '@/firebase/auth';

const email = ref('kondratella1633937v@gmail.com');
const password = ref('123123');
const logIn = async () => {
  const userData = await loginApi(email.value, password.value);
  console.log(userData);
};
</script>
