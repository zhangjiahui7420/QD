<template>
    <div>
        <ul class="list">
            <li @click="getDetail(movie.id)" v-for=" movie in movieList " :key="movie.id" class="movie">
                <div class="movie-img">
                    <img :src="movie.img">
                </div>
                <div class="movie-info">
                    <p class="movie-name">{{ movie.nm}}
                    <div class="movie-xd">{{ movie.ver }}</div>
                    <div class="movie-grade">{{ movie.sc }}</div>
                    </p>
                    <p>{{ movie.cat }}</p>
                    <p>主演：{{ movie.star }}</p>
                    <p>{{ movie.rt }}</p>
                </div>
            </li>
        </ul>
        <div class="loading" v-show="isLoading">
            <img src="../../assets/img/doge.gif">
        </div>
        <div class="tip" v-show="end">
            <h3>没有新电影啦~</h3>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            movieList: [],
            isLoading: true,
            end: false,
        };
    },
   methods: {
       getMovieData() {
           axios.get(API_PROXY + `http://m.maoyan.com/movie/list.json?type=hot&offset=${
              this.movieList.length
            }&limit=10`)
            .then(res =>{
                let list = res.data.data.movies;
                console.log(res)
                if(list.length < 10){
                    this.end = true;
                }
                this.movieList = this.movieList.concat(list);
                this.isLoading = false;
            })
            .catch(res =>{
                alert("获取数据失败");
            });
        },
        getDetail(movieId) {
            this.$router.push(`/moviedetail/${movieId}`);
        }
    },
    created() {
           this.getMovieData();
    },
    mounted() {
        window.onscroll = () => {
            let scrollTop = document.documentElement.scrollTop;
            let clientHeight = document.documentElement.clientHeight;
            let scrollHeight = document.documentElement.scrollHeight;
            if(scrollTop + clientHeight == scrollHeight && !this.end){
                this.isLoading = true;
            }
        }
    } 
};
</script>

<style scoped>
.list {
    margin-top:1rem;
    padding: 0 0.1rem;
}
.movie {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 0.1rem;
}
.movie-img {
    width: 0;
    flex-grow: 1;
    margin-right: 0.1rem;
}
.movie-info {
    flex-grow: 2;
    width: 0;
}
.movie-name {
    font-weight: bolder;
}
.movie-grade {
    float: right;
    top: 0;
    color: yellow;
    font-size: 0.3rem;
}
.loading {
    text-align: center;
    position: fixed;
    bottom: 1rem;
    width:100%;
}
.tip{
    text-align: center;
    margin-bottom: 1rem;
}
</style>