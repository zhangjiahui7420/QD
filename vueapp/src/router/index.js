import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import Music from '@/components/music/Music'
import Photo from '@/components/photo/Photo'
import Book from '@/components/book/Book'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie
    },{
      path: '/music',
      name: 'Music',
      component: Music,
      beforeEnter(to, from, next){
        from.name === null ? next('/') : next();
      }
    },{
      path: '/photo',
      name: 'Photo',
      component: Photo,
      beforeEnter(to, from, next){
        from.name === null ? next('/') : next();
      }
    },{
      path: '/book',
      name: 'Book',
      component: Book,
      beforeEnter(to, from, next){
        from.name === null ? next('/') : next();
      }
    },
  ]
})
