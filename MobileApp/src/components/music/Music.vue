<template>
    <ul>
        <li class="music" v-for="item in musicAlbums" :key="item.id">
            <router-link :to="'/musicAlbums/' + item.id">
            <img :src="item.bg">
            </router-link>
        </li>
    </ul>
</template>

<script>
import axios from 'axios'
export default {
        created() {
            axios.get('/static/data/musiclist.json').then(res =>{
                                
                this.musicAlbums = res.data.albums;
                console.log(res)
            })
        },
        data() {
            return {
                musicAlbums: []
            }
        } 
};
</script>

<style scoped>
.music{
    width: 50%;
    float: left;
}
.music img{
    width: 100%;
}
</style>