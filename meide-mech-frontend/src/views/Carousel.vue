<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <swiper :slides-per-view="1" :space-between="10" :autoplay="{ delay: 2500, disableOnInteraction: false, }" :pagination="{ clickable: true, }" :navigation="true" :modules="modules" style="height: 650px;">
              <swiper-slide v-for="post in posts" v-bind:key="post.id">
                <div class="container-fluid p-0">
                  <div class="background1 img-fluid" v-bind:style="{ backgroundImage: 'url(' + post.images + ')' }">
                    <div class="container text-white text-left carousel-text montserrat">
                      <span style="font-size: 48px; font-weight: bold;">{{ post.title }}</span><br><br><br>
                      <span style="font-size: 18px">{{ post.description }}</span><br><br>
                      <a v-bind:href="post.link" class="theme-btn btn-style-one" style="transition: none 0s ease 0s; text-align: inherit; line-height: 24px; border-width: 2px; margin: 0px; padding: 13px 48px; letter-spacing: 0px; font-weight: 500; font-size: 16px;">LEARN MORE</a>
                    </div>
                  </div>
                </div>
              </swiper-slide>
          </swiper>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage } from '@ionic/vue';

import 'swiper/css';
import 'swiper/css/bundle';
import '@ionic/vue/css/ionic-swiper.css';
import axios from 'axios';

import { Autoplay, Pagination, Navigation } from "swiper";

export default defineComponent({
  name: 'CarouselSection',
  components: { Swiper, SwiperSlide, IonContent, IonPage },

  mounted() {
    this.fetchPosts();
  },
  data: function () {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      axios
        .get("http://localhost:8080/api/getCarousel")
        .then((response) => {
          this.posts = response.data;
          console.log(response.data)
        }).catch(function (error) {
          console.log(error);
        })
    }
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');

.carousel-text {
  transform: translate(-300px, 250px);
  padding-right: 0px;
  width: 550px;
}

.background1 {
  background-image: url(../../public/assets/images/image-new-1.jpg);
  background-size: cover;
  height: 800px;
}

.background2 {
  background-image: url(../../public/assets/images/image-new-2.jpg);
  background-size: cover;
  height: 800px;
}

.background3 {
  background-image: url(../../public/assets/images/image-new-3.jpg);
  background-size: cover;
  height: 800px;
}

.montserrat {
  font-family: Montserrat, sans-serif;
}

.vertical-line {
  border-left: 1px solid white;
  height: 45px;
  margin: 14px;
}

#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
