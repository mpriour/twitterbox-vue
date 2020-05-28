<template>
    <ul class="list-plain">
        <li v-for="(tweet, i) in tweets" :key="`tweet-${i}`">
            <p class="text-left panel panel-black">{{tweet}}</p>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TweetList',
    props: ['tweets'],
}
</script>

<style>

</style>
