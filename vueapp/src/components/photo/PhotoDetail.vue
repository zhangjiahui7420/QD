<template>
<div class="img" :style="{background:`url(static/img/${$route.params.photoIndex}.jpg) center/contain no-repeat`}" >
    
</div>    
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {

            }
        },
        created(){
            console.log(this.$route.params.photoIndex)
        }

    }
</script>

<style scope>
.img{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    
}
</style>