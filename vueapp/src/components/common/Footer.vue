<template>
    <ul class="footer" :style="{backgroundColor:bgColor}">
        <li><router-link to="/">电影</router-link></li>
        <li><router-link to="/music">音乐</router-link></li>
        <li><router-link to="/book">书籍</router-link></li>
        <li><router-link to="/photo">照片</router-link></li>
    </ul>
</template>

<script>
export default{
    props:["bgColor"]
};
</script>

<style scoped>
.footer{
    height:1rem;
    position:fixed;
    bottom:0;
    width:100%;
    line-height:1rem;
    display:flex;   
}
.footer li{
    flex-grow: 1;
    text-align: center;
}
.footer li a{
    color:#ccc;
}
.footer li a.router-link-exact-active{
    color:#fff;
}
</style>