<template>
  <entry-box />
  <div class="panel panel-white">
      <tweet-list />
  </div>
</template>

<script>
import EntryBox from './EntryBox.vue'
import TweetList from './TweetList.vue'
export default {
  name: 'TwitterBox',
  components:{
      EntryBox, TweetList
  }
}
</script>
