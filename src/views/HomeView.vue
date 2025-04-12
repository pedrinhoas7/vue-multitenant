<script setup lang="ts">
import List from '../components/Property/List.vue';
import { analytics } from '../../firebase';
import { logEvent } from 'firebase/analytics';

//TODO: analytics add to active envents to rollout
logEvent(analytics, 'screen_view', {
  screen_name: 'Home',
});

</script>

<template>
  <List/>
</template>
