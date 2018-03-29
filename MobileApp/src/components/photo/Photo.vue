<template>
    <ul class="photoList clearfix">
        <li class="photo" v-for="(photoList,index) in photoData" :key="index">
            <router-link :to="'/PhotoDetail/' + (index + 1)">
                <img :src="photoList.src">
            </router-link>
        </li>
    </ul>
</template>

<script>
import axios from 'axios';
export default {
   data(){
       return {
           photoData: []
       }
   },
    created(){
        axios.get('/static/data/photodata.json').then(res => {
            console.log(res)
            this.photoData = res.data.photoData;
        }).catch(res => {
            alert("获取图片失败");
        });  
    }
};
</script>

<style scoped>
.photo {
    width: 50%;
    float:left;
}
.photoList {
    margin:1rem 0;
}
.clearfix::after{
    content:'.';
    clear:both;
    display:block;
}
</style>