<template>
    <div class="panel panel-white">
        <label for="tweetArea">Tweet</label>
        <textarea name="tweetArea" id="tweetArea" cols="30" rows="10" v-model="currentTweet"></textarea>
        <button class="btn right" @click.prevent="saveTweet">Submit</button>
        <div class="font-size--1 avenir-light text-left">
            Characters remaining : <span>{{remaining}}</span>
        </div>
        <div class="alert alert-red is-active" v-if="exceeds">Tweet exceeds the maximum limit and can't be saved</div>
    </div>
</template>

<script>
import storage from '../api/storage.js'
import memory from '../api/memory.js'

const store = storage.available ? storage : memory;

export default {
    name: 'EntryBox',
    data(){
        return {
            currentTweet:'',
            maxLength: 280,
        }
    },
    computed:{
        remaining(){
            return this.maxLength - this.currentTweet.length
        },
        exceeds(){
            return this.maxLength - this.currentTweet.length < 0
        }
    },
    methods:{
        saveTweet(evt){
            if(!this.exceeds){
                storage.append('tweets', this.currentTweet, '|')
                this.currentTweet = ''
            }
        }
    }
}
</script>

<style>

</style>
