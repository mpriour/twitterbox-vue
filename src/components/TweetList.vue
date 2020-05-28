<template>
    <ul class="list-plain">
        <li v-for="(tweet, i) in tweets" :key="`tweet-${i}`">
            <p>{{tweet}}</p>
        </li>
    </ul>
</template>

<script>
import storage from '../api/storage.js'
import memory from '../api/memory.js'
debugger;
const store = storage.available ? storage : memory;

export default {
    data(){
        return {
            tweets: []
        }
    },
    mounted(){
        this.tweets = store.get('tweets').split('|')
    }
}
</script>

<style>

</style>
