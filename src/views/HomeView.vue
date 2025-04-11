<script setup lang="ts">
import List from '../components/Property/List.vue';
import { analytics } from '../../firebase';
import { logEvent } from 'firebase/analytics';

logEvent(analytics, 'screen_view', {
  screen_name: 'Home',
});

</script>

<template>
  <List/>
</template>
