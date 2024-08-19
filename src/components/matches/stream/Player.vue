<template>
  <!-- <div ref="twitchVideo" /> -->
  <iframe 
    class="rounded"
    src="https://player.twitch.tv/?video=1925395346&parent=http://localhost:3003/" 
    frameborder="0" 
    allowfullscreen="true" 
    muted="true" 
    scrolling="no" 
    height="400" 
    width="100%" />
</template>

<script setup lang="ts">
// import { onMounted } from "vue";

// onMounted(() => {
//   const options = {
//     width: '100%',
//     height: 480,
//     channel: "dallas",
//   };
//   // you might need to pass an ID string as a first argument..
//   this.player = new Twitch.Player(this.$refs.twitchVideo, options);
//   this.player.setVolume(0.5);
// });
</script>
