<template>
    <div class="panel panel-white">
        <label for="tweetArea">Tweet</label>
        <textarea name="tweetArea" id="tweetArea" :maxlength="maxLength" v-model="currentTweet"></textarea>
        <button class="btn right leader-1" @click.prevent="saveTweet">Submit</button>
        <div class="font-size--1 avenir-light text-left">
            Characters remaining : <span>{{remaining}}</span>
        </div>
        <div class="alert alert-red is-active" v-if="remaining<0">Tweet exceeds the maximum limit and can't be saved</div>
    </div>
    <div class="panel panel-white">
      <tweet-list :tweets="tweets" />
    </div>
</template>

<script>
import TweetList from './TweetList.vue'
import storage from '../api/storage.js'
import memory from '../api/memory.js'

const store = storage.available ? storage : memory;

export default {
    name: 'TwitterBox',
    components: { TweetList },
    data(){
        return {
            currentTweet:'',
            maxLength: 280,
            tweets: []
        }
    },
    computed:{
        remaining(){
            return this.maxLength - this.currentTweet.length
        }
    },
    methods:{
        saveTweet(evt){
            if(!this.exceeds){
                storage.append('tweets', this.currentTweet, '|')
                this.tweets.unshift(this.currentTweet)
                this.currentTweet = ''
            }
        }
    },
    mounted(){
        this.tweets = store.get('tweets')?.split('|').reverse() ?? []
    }
}
</script>

<style>

</style>
