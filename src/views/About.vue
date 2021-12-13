<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup>
import { ref, onValue } from 'firebase/database';
import database from '@/firebase/config';

const userInfo = ref(database, 'users/n1JqbMEyGtSUwQBySpKdpDs3Twc2');

onValue(userInfo, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
</script>
