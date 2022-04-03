import Vue from 'vue';
import VueRouter from 'vue-router';
import RouteList from 'Router/path';

Vue.use(VueRouter)

class Path extends VueRouter {
  constructor(){
    super({
        mode: 'history',
        routes: RouteList,
        scrollBehavior (to, from, savedPosition) {
            if (savedPosition) {
              return savedPosition
            } else {
              return { x: 0, y: 0 }
            }
          }
    })

    this.beforeEach(this.handleBeforeRouteToEach.bind(this));
  }

  async handleBeforeRouteToEach(to, from, next){
    next()
  }
}

export default new Path
