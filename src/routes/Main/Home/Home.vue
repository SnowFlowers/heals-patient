<template>
  <div class="main">
    <div class="swiper">
       <mt-swip :auto="2000">
        <mt-swipe-item v-for="item in items" :key="item.id">
          <a :href="item.href" rel="external nofollow" >
            <img :src="item.url" class="img"/>
            <span class="desc"></span>
          </a>
        </mt-swipe-item>
      </mt-swip>
    </div>
   
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import './Home.scss';

export default {
  components: {
    "mt-swip": Swipe,
    "mt-swipe-item": SwipeItem
  },
  data: () => {
    return {
      items: [
        {
          title: "你的名字",
          href: "http://google.com",
          url: "https://oss.5rs.me/oss/uploadfe/jpg/fc5db27c2db1e09c5c10f5c6704a56af.jpg?x-oss-process=image/resize,p_100"
        },
        {
          title: "我的名字",
          href: "http://baidu.com",
          url: "https://oss.5rs.me/oss/uploadfe/jpg/6bf182f3a8a866ef45518f0d634e72a1.jpg?x-oss-process=image/resize,p_100"
        }
      ]
    };
  }
};
</script>

<style>
  .swiper {
    width: 100%;
    height: 200px;
  }
</style>


