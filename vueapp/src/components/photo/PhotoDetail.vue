<template>
<div class="img" :style="{background:`url(static/img/${$route.params.photoIndex}.jpg) center/contain no-repeat`}" >  
<v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight" @tap="tap">   
</v-touch>
</div>
</template>

<script>
    export default {
        data(){
            return {
                photoIndex: 0
            };
        },
        created(){
            this.photoIndex = this.$route.params.index;
        },
        methods:{
            onSwipeLeft(){
                this.photoIndex--;
                if(this.photoIndex == -1){
                    this.photoIndex = this.$store.state.photoList.length -1;

                }
            },
            onSwipeRight(){
                this.photoIndex++;
                if(this.photoIndex === this.$store.state.photoList.length){
                    this.nowIndex = 0;
                }
            },
            tap(){
                this.$router.go(-1);
            }
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