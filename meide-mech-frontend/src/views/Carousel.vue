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

.main-header {
  position: relative;
  left: 0px;
  top: 0px;
  z-index: 999;
  width: 100%;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

/*Sticky Header*/

.sticky-header {
  position: fixed;
  opacity: 0;
  visibility: hidden;
  left: 0px;
  top: 0px;
  width: 100%;
  padding: 0px 0px;
  background: #ffffff;
  z-index: 0;
  border-bottom: 1px solid #e0e0e0;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.sticky-header .logo {
  padding: 15px 0px 15px;
}

.fixed-header .sticky-header {
  z-index: 999;
  opacity: 1;
  visibility: visible;
  -ms-animation-name: fadeInDown;
  -moz-animation-name: fadeInDown;
  -op-animation-name: fadeInDown;
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -ms-animation-duration: 500ms;
  -moz-animation-duration: 500ms;
  -op-animation-duration: 500ms;
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
  -ms-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -op-animation-timing-function: linear;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -ms-animation-iteration-count: 1;
  -moz-animation-iteration-count: 1;
  -op-animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.main-header .header-upper {
  position: relative;
  background: #ffffff;
  z-index: 5;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  border-bottom: 1px solid #f3f3f3;
}

.main-header .header-upper .logo img {
  position: relative;
  display: inline-block;
  max-width: 100%;
}

.main-header .logo-outer {
  position: relative;
  z-index: 25;
  /*padding: 33px 0px;*/
  padding: 0px 0px;
}

.main-header .logo-outer .logo img {
  position: relative;
  display: inline-block;
  max-width: 100%;
}

.logo-outer-mobile img {
  width: 50px;
  margin: 10px;
  display: none;
}

.main-header .header-upper .upper-right {
  position: relative;
  padding-top: 35px;
}

.main-header .info-box {
  position: relative;
  float: left;
  min-height: 56px;
  margin-left: 35px;
  font-size: 13px;
  color: #777777;
  text-transform: uppercase;
  padding: 0px 0px 20px 45px;
}

.main-header .info-box .icon-box {
  position: absolute;
  left: 0px;
  color: #042038;
  font-size: 32px;
  text-align: left;
  line-height: 1.2em;
  -moz-transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
}

.main-header .info-box li {
  position: relative;
  line-height: 20px;
  color: #848484;
  font-size: 16px;
  margin-bottom: 3px;
  font-weight: 300;
  text-transform: capitalize;
}

.main-header .info-box strong {
  font-weight: 500;
  color: #222222;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
}

.main-header .header-lower {
  position: relative;
  top: 0px;
  width: 100%;
  z-index: 5;
  background: #042038;
}

.main-header .nav-outer {
  position: relative;
  /*padding-right:210px;*/
}

.main-menu {
  position: relative;
}

.main-menu .navbar-collapse {
  padding: 0px;
}

.main-menu .navigation {
  position: relative;
  margin: 0px;
}

.main-menu .navigation>li {
  position: relative;
  float: left;
  margin-right: 0px;
}

.main-header .sticky-header .main-menu .navigation>li {
  margin: 0px;
  border: 0px;
}

.main-menu .navigation>li>a {
  position: relative;
  display: block;
  font-size: 14px;
  color: #ffffff;
  line-height: 30px;
  font-weight: 600;
  opacity: 1;
  text-transform: uppercase;
  padding: 19px 20px 21px 24px;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  font-family: 'Montserrat', sans-serif;
}

.main-menu .navigation>li>a:after {
  position: absolute;
  content: '';
  left: 0px;
  bottom: 0px;
  width: 0%;
  height: 3px;
  background-color: #e9e8e8;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.main-menu .navigation>li>a:after {
  position: absolute;
  content: '';
  left: 0px;
  bottom: 0px;
  width: 0%;
  height: 3px;
  background-color: #e31528;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.main-menu .navigation>li.current>a:after,
.main-menu .navigation>li:hover>a:after {
  width: 100%;
}

.main-menu .navigation>li.dropdown a {
  padding-right: 24px;
}

.main-menu .navigation>li:last-child>a {
  background: none;
}

.main-header .sticky-header .main-menu .navigation>li>a {
  color: #181818;
  padding: 15px 15px !important;
  line-height: 30px;
  font-size: 14px;
  font-weight: 600;
  min-height: 0px;
  background: none;
  border: 0px;
}

.main-header .main-menu .navigation>li.dropdown>a:before {
  font-family: 'FontAwesome';
  content: "\f107";
  position: absolute;
  right: 10px;
  font-size: 14px;
  line-height: 32px;
}

.sticky-header .main-menu .navigation>li>a:before {
  display: none;
}

.main-menu .navigation>li:hover>a,
.main-menu .navigation>li.current>a,
.main-menu .navigation>li.current-menu-item>a {
  opacity: 1;
  border-color: #e31528;
}

.main-header .sticky-header .main-menu .navigation>li:hover>a,
.main-header .sticky-header .main-menu .navigation>li.current>a,
.main-header .sticky-header .main-menu .navigation>li.current-menu-item>a {
  background: #e31528;
  color: #ffffff !important;
  opacity: 1;
}

.main-menu .navigation>li:hover>a:after {
  opacity: 1;
}

.main-menu .navigation>li>ul {
  position: absolute;
  left: 0px;
  top: 100%;
  width: 250px;
  padding: 0px;
  z-index: 100;
  display: none;
  background: #ffffff;
  border-bottom: 2px solid #e31528;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  -webkit-box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
  -ms-box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
  -o-box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
}

.main-menu .navigation>li>ul.from-right {
  left: auto;
  right: 0px;
}

.main-menu .navigation>li>ul>li {
  position: relative;
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
}

.main-menu .navigation>li>ul>li:last-child {
  border-bottom: none;
}

.main-menu .navigation>li>ul>li>a {
  position: relative;
  display: block;
  padding: 14px 20px;
  line-height: 24px;
  font-weight: 600;
  font-size: 14px;
  color: #252525;
  font-family: 'Montserrat', sans-serif;
  text-transform: capitalize;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.main-menu .navigation>li>ul>li>a:before {
  position: absolute;
  content: '\f105';
  font-size: 15px;
  right: 20px;
  color: #fff;
  font-family: FontAwesome;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.main-menu .navigation>li>ul>li:hover>a {
  color: #ffffff;
  background-color: #e31528;
}

.main-menu .navigation>li>ul>li:hover>a:before {
  border-color: #ffffff;
}

.main-menu .navigation>li>ul>li>ul {
  position: absolute;
  left: 100%;
  top: 0px;
  width: 250px;
  padding: 0px;
  z-index: 100;
  display: none;
  background: #1c1c1c;
  border-top: 2px solid #e31528;
  -webkit-box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
  -ms-box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
  -o-box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
}

.main-menu .navigation>li>ul>li>ul>li {
  position: relative;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.main-menu .navigation>li>ul>li>ul>li:last-child {
  border-bottom: none;
}

.main-menu .navigation>li>ul>li>ul>li>a {
  position: relative;
  display: block;
  padding: 14px 20px;
  line-height: 24px;
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
  text-align: left;
  text-transform: capitalize;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.main-menu .navigation>li>ul>li>ul>li>a:before {
  content: '';
  position: absolute;
  left: 0px;
  top: 50%;
  height: 16px;
  margin-top: -8px;
  border-left: 2px solid #e31528;
}

.main-menu .navigation>li>ul>li>ul>li>a:hover {
  color: #ffffff;
  background-color: #e31528;
}

.main-menu .navigation>li>ul>li>ul>li:hover>a:before {
  border-color: #ffffff;
}

.main-menu .navigation>li.dropdown:hover>ul {
  visibility: visible;
  opacity: 1;
  top: 100%;
}

.main-menu .navigation li>ul>li.dropdown:hover>ul {
  visibility: visible;
  opacity: 1;
  left: 100%;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.main-menu .navbar-collapse>ul li.dropdown .dropdown-btn {
  position: absolute;
  right: 10px;
  top: 6px;
  width: 34px;
  height: 30px;
  border: 1px solid #ffffff;
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  cursor: pointer;
  z-index: 5;
  display: none;
}

.main-header .outer-box {
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 12;
}

.header-top-one {
  position: relative;
  background-color: #f7f7f7;
}

.header-top-one .top-left {
  position: relative;
  float: left;
}

.header-top-one .top-left ul li {
  position: relative;
  margin-right: 25px;
  font-size: 14px;
  color: #afafb5;
  font-weight: 500;
  padding: 11px 0px;
  display: inline-block;
}

.header-top-one .top-left ul li a {
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.70);
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.header-top-one .top-right {
  position: relative;
  float: right;
}

.header-top-one .top-right>ul>li {
  position: relative;
  margin-right: 25px;
  font-size: 14px;
  color: #bbbbbb;
  padding: 9px 0px 12px;
  display: inline-block;
}

.header-top-one .top-right>ul>li:last-child {
  margin-right: 0px;
}

.header-top-one .top-right>ul>li>a {
  font-size: 14px;
  font-weight: 400;
  background: inherit;
  color: #afafb5;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.header-top-one .top-right .social-links {
  padding-right: 10px;
}

.header-top-one .top-right .social-links:after {
  position: absolute;
  content: '';
  right: -8px;
  top: 4px;
  width: 2px;
  height: 40px;
  /* background:url(../images/icons/seperater.png) right top no-repeat; */
}

.header-top-one .top-right .social-links a {
  display: inline-block;
  margin-left: 15px;
  line-height: 30px;
  color: #afafb5;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.header-top-one .language .dropdown-menu {
  width: 180px;
  padding: 0px;
  margin-top: 6px;
  background-color: #222222;
  border-top: 3px solid #eb5310;
}

.header-top-one li.language {
  top: -2px;
  padding-right: 8px;
  line-height: 1.4em;
}

.header-top-one li.language a {
  border: 0px;
  padding: 0px;
  background: none;
}

.header-top-one li.language a:hover {
  background: none;
}

.header-top-one .language .dropdown-menu>li {
  padding: 0px !important;
  margin: 0px !important;
  float: none;
  display: block !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.20);
}

.header-top-one .language .dropdown-menu>li>a {
  padding: 10px 20px !important;
  color: #ffffff;
  text-align: left;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.header-top-one .language .dropdown-menu>li>a:focus {
  background: none;
}

.header-top-one .language .dropdown-menu>li>a:hover {
  color: #ffffff;
  background: none;
  background-color: #eb5310;
}

.main-header .header-lower .search-box-outer {
  position: relative;
  min-width: 70px;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 25px;
  padding-bottom: 24px;
  background: #e31528;
}

.main-header .header-lower .search-box-btn {
  position: relative;
  display: block;
  width: 100%;
  font-size: 16px;
  color: #ffffff;
  line-height: 20px !important;
  padding: 0px;
  margin: 0px;
  cursor: pointer;
  background: none;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.main-header .header-lower .search-box-outer .dropdown-menu {
  top: 40px;
  right: 0px;
  padding: 0px;
  width: 280px;
  border-radius: 0px;
  border-top: 3px solid #e31528;
}

.main-header .header-lower .search-box-outer .dropdown-menu>li {
  padding: 0px;
  border: none;
  background: none;
}

.main-header .header-lower .search-panel .form-container {
  padding: 25px 20px;
}

.main-header .header-lower .search-panel .form-group {
  position: relative;
  margin: 0px;
}

.main-header .header-lower .search-panel input[type="text"],
.main-header .header-lower .search-panel input[type="search"],
.main-header .header-lower .search-panel input[type="password"],
.main-header .header-lower .search-panel select {
  display: block;
  width: 100%;
  height: 40px;
  color: #000000;
  line-height: 24px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 7px 40px 7px 15px;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.main-header .header-lower .search-panel input:focus,
.main-header .header-lower .search-panel select:focus {
  border-color: #e31528;
}

.main-header .header-lower .search-panel .search-btn {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 40px;
  height: 40px;
  text-align: center;
  color: #555555;
  font-size: 12px;
  background: none;
  cursor: pointer;
}

/*search box btn*/

.main-header .search-box-btn {
  position: relative;
  font-size: 14px;
  top: 50%;
  margin-top: 0px;
  line-height: 38px;
  color: #ffffff;
  cursor: pointer;
  background: none;
}

.main-header .search-box-outer .dropdown-menu {
  top: 70px;
  padding: 0px;
  width: 280px;
  border-radius: 0px;
  border-top: 3px solid #eb5310;
}

.main-header .search-panel .form-container {
  padding: 25px 20px;
}

.main-header .search-panel .form-group {
  position: relative;
  margin: 0px;
}

.main-header .search-panel input[type="text"],
.main-header .search-panel input[type="search"],
.main-header .search-panel input[type="password"],
.main-header .search-panel select {
  display: block;
  width: 100%;
  line-height: 24px;
  padding: 7px 40px 7px 15px;
  height: 40px;
  border: 1px solid #e0e0e0;
  background: #ffffff;
}

.main-header .search-panel input:focus,
.main-header .search-panel select:focus {
  border-color: #eb5310;
}

.main-header .search-panel .search-btn {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 40px;
  height: 40px;
  text-align: center;
  color: #555555;
  font-size: 12px;
  background: none;
  cursor: pointer;
}

.header-top-two {
  position: relative;
  padding: 11px 0px;
  background-color: #0c2e49;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.header-top-two .top-left {
  float: left;
}

.header-top-two .top-right {
  float: right;
}

.header-top-two .top-left ul li {
  position: relative;
  padding-right: 15px;
  margin-right: 15px;
  font-size: 16px;
  color: #c3c3c3;
  font-weight: 300;
  display: inline-block;
}

.header-top-two .top-left ul li:after {
  position: absolute;
  content: '';
  right: -4px;
  top: -5px;
  width: 2px;
  height: 40px;
}

.header-top-two .top-left ul li:last-child::after {
  display: none;
}

.header-top-two .top-left ul li .social-links a {
  margin-right: 12px;
  color: #c3c3c3;
}

.header-top-two .top-left ul li .social-links a:last-child {
  margin-right: 0px;
}

.header-top-two .top-left ul li .icon {
  color: #e31528;
  font-size: 16px;
  margin-right: 8px;
}

.header-top-two li.language {
  position: relative;
  padding-right: 8px;
  line-height: 1.4em;
  display: inline-block;
}

.header-top-two li.language a {
  position: relative;
  color: #e9e9e9;
  background: none;
  border-radius: 0px;
  padding: 4px 15px 4px 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.header-top-two li.language a:hover {
  background: none;
}

.header-top-two .language .dropdown-menu>li {
  padding: 0px !important;
  margin: 0px !important;
  float: none;
  display: block !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.20);
}

.header-top-two .language .dropdown-menu>li>a {
  padding: 10px 20px !important;
  color: #ffffff;
  text-align: left;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.header-top-two .language .dropdown-menu>li>a:hover {
  color: #ffffff;
  background-color: #eb5310;
}

.header-top-two .language .dropdown-menu {
  width: 180px;
  padding: 0px;
  margin-top: 10px;
  background-color: #222222;
  border-top: 3px solid #eb5310;
}

.header-style-two .header-upper {
  background-color: #e31528 !important;
  border: 0px;
}

.main-header.header-style-two .header-lower {
  background: #fff;
}


.header-style-two .header-upper .info-box {
  margin-right: 0px;
  padding-right: 15px;
}

.header-style-two .header-upper .info-box:last-child {
  padding-left: 0px;
  padding-right: 0px;
}

.header-style-two .header-upper .info-box .btn-style-one {
  padding: 10px 20px;
}

.header-style-two .header-upper .info-box:first-child:after {
  position: absolute;
  content: '';
  right: -12px;
  top: 0px;
  width: 1px;
  height: 45px;
  background-color: #ffffff00;
}

.header-style-two .header-upper .info-box .icon-box {
  top: 6px;
  font-size: 26px;
  color: #ffffff;
}

.header-style-two .header-upper .info-box strong {
  color: #ffffff;
  font-size: 18px;
}

.header-style-two .main-menu .navigation>li>a {
  padding: 22px 26px 24px 15px;
  color: #252525;
}

.header-style-two .main-menu .navigation>li>a:after {
  left: 0px;
  bottom: 0px;
  top: auto;
  height: 5px;
}

.header-style-two .nav-outer {
  padding-right: 270px;
}

.header-style-two .search-box {
  position: relative;
  max-width: 270px;
  width: 100%;
  padding: 15px 0px;
}

.header-style-two .search-box .form-group {
  position: relative;
  margin: 0px;
}

.header-style-two .search-box .form-group input[type="text"],
.header-style-two .search-box .form-group input[type="search"] {
  position: relative;
  line-height: 23px;
  padding: 10px 50px 10px 20px;
  border: 1px solid #eeeeee;
  background: none;
  display: block;
  font-size: 16px;
  width: 100%;
  height: 45px;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.header-style-two .search-box .form-group input:focus {
  border-color: #e31528;
}

.search-box .form-group button {
  position: absolute;
  right: 0px;
  top: 0px;
  height: 45px;
  width: 60px;
  display: block;
  font-size: 16px;
  color: #8c8c8c;
  line-height: 100%;
  font-weight: normal;
  background: none;
}

.main-header.header-style-two .info-box li {
  color: #ffffff;
}

/* header style two */

.header-style-three {
  position: absolute;
}

.header-style-three .logo-outer {
  padding: 6px 0px;
}

.header-style-three .header-upper {
  border: 0px;
  background: none;
}

.header-style-three .header-upper .upper-right {
  padding-top: 0px;
}

.header-style-three .main-menu .navigation>li {
  margin-right: 25px;
}

.header-style-three .main-menu .navigation>li:last-child {
  margin-right: 0px;
}

.header-style-three .main-menu .navigation>li:last-child a {
  padding-right: 0px;
}

.header-style-three .main-menu .navigation>li>a {
  color: #ffffff;
  padding-left: 0px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.header-style-three .main-menu .navigation>li>a:after,
.header-style-four .main-menu .navigation>li>a:after,
.header-style-four .main-menu .navigation>li.home>a:before {
  display: none;
}

/*Header Top Three*/

.header-top-three {
  position: relative;
}

.header-top-three .top-right {
  position: relative;
  float: right;
  padding: 12px 0px 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.20);
}

.header-top-three .top-right ul {
  position: relative;
}

.header-top-three .top-right ul li {
  position: relative;
  color: #ffffff;
  font-size: 16px;
  padding-left: 25px;
  margin-left: 20px;
  margin-bottom: 6px;
  display: inline-block;
}

.header-top-three .top-right ul li .icon {
  position: absolute;
  left: 0px;
  top: 0px;
  color: #042038;
}

/*Header Top Four*/

.header-top-four {
  position: relative;
  padding: 10px 0px;
  background-color: #f4f4f4;
}

.header-top-four .top-left {
  position: relative;
  float: left;
}

.header-top-four .top-left ul li {
  position: relative;
  color: #848484;
  font-size: 16px;
  padding-right: 15px;
  margin-right: 12px;
  display: inline-block;
}

.header-top-four .top-left ul li:last-child {
  padding-right: 0px;
  margin-right: 0px;
  background: none;
}

.header-top-four .top-left ul li .icon {
  color: #042038;
  margin-right: 8px;
}

.header-top-four .top-right {
  position: relative;
  float: right;
}

.header-top-four .top-right li {
  color: #848484;
  font-size: 16px;
}

.header-top-four .top-right li .social-links {
  display: inline-block;
}

.header-top-four .top-right li .social-links a {
  margin-left: 15px;
  color: #848484;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.header-top-four .top-right li .social-links a:hover {
  color: #042038;
}

.header-style-four .info-box {
  padding-left: 55px;
}

.header-style-four .info-box .icon-box {
  color: #303030;
  font-size: 26px;
  padding-top: 8px;
  padding-right: 15px;
  padding-bottom: 8px;
  border-right: 1px solid #eeeeee;
}

.header-style-four .info-box:last-child {
  padding-left: 0px;
}

.header-style-four .info-box strong {
  font-weight: 400;
  font-size: 16px;
  margin-top: 2px;
  display: inline-block;
}

.header-style-four .search-box {
  position: relative;
  max-width: 170px;
  width: 100%;
}

.header-style-four .search-box .form-group {
  position: relative;
  margin: 0px;
}

.header-style-four .search-box .form-group input[type="text"],
.header-style-four .search-box .form-group input[type="search"] {
  position: relative;
  line-height: 22px;
  padding: 10px 50px 10px 10px;
  border: 1px solid #eeeeee;
  background: none;
  display: block;
  font-size: 14px;
  width: 100%;
  height: 44px;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.header-style-four .search-box .form-group input:focus {
  border-color: #e31528;
}

.header-style-four .search-box .form-group button {
  position: absolute;
  right: 0px;
  top: 0px;
  height: 44px;
  width: 40px;
  display: block;
  font-size: 14px;
  color: #8c8c8c;
  line-height: 100%;
  font-weight: normal;
  background: none;
}

.header-style-four .header-lower {
  background-color: transparent;
  margin-bottom: -70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.header-style-four .main-menu .navigation>li.home>a {
  font-size: 23px;
  color: #042038 !important;
  padding-right: 23px !important;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
}

.header-style-four .main-menu .navigation>li>a {
  color: #ffffff;
  padding: 21px 21px 19px 24px;
}

.header-style-four .main-menu .navigation>li.dropdown a {
  padding-right: 32px;
}

.header-style-four .main-menu .navigation>li.dropdown>a:before {
  right: 15px;
}

.header-style-four .main-menu .navigation>li a:hover,
.header-style-four .main-menu .navigation>li.current>a {
  color: #ffffff;
}

.header-style-four .outer-box .btn-style-one {
  padding: 23px 48px;
  background: transparent;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.30);
}

/*Social Icon One*/

.social-icon-one {
  position: relative;
}

.social-icon-one li {
  position: relative;
  margin-left: 20px;
  display: inline-block;
}

.social-icon-one li a {
  position: relative;
  color: #dedede;
  font-size: 16px;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.social-icon-one li a:hover {
  color: #ffffff;
}

/*Social Icon Two*/

.social-icon-two {
  position: relative;
}

.social-icon-two li {
  position: relative;
  margin: 0px 7px;
  display: inline-block;
}

.social-icon-two li a {
  position: relative;
  width: 40px;
  height: 40px;
  color: #ffffff;
  font-size: 16px;
  line-height: 38px;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  background: none;
  border: 1px solid #ffffff;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.social-icon-two li a:hover {
  color: #e31528;
  border-color: #ffffff;
  background-color: #ffffff;
}

/*Social Icon Three*/

.social-icon-three {
  position: relative;
}

.social-icon-three li {
  position: relative;
  margin-right: 10px;
  display: inline-block;
}

.social-icon-three li a {
  position: relative;
  width: 38px;
  height: 38px;
  color: #848484;
  font-size: 16px;
  line-height: 38px;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  background: #f4f4f4;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.social-icon-three li a:hover {
  color: #ffffff;
  background-color: #e31528;
}

/*Social Icon Four*/

.social-icon-four {
  position: relative;
}

.social-icon-four li {
  position: relative;
  margin-right: 10px;
  display: inline-block;
}

.social-icon-four li a {
  position: relative;
  color: #9a9a9a;
  font-size: 16px;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.social-icon-four li a:hover {
  color: #e31528;
}

/*Custom Select*/

.form-group .ui-selectmenu-button.ui-button {
  width: 100%;
  font-size: 14px;
  font-style: normal;
  height: 50px;
  padding: 10px 20px;
  line-height: 30px;
  color: #333333;
  border-radius: 0px;
  border: 1px solid #e5e5e5;
  background: #ffffff;
}

.form-group .ui-button .ui-icon {
  background: none;
  position: relative;
  top: 3px;
  text-indent: 0px;
  color: #333333;
}

.form-group .ui-button .ui-icon:before {
  font-family: 'FontAwesome';
  content: "\f107";
  position: absolute;
  right: 0px;
  top: 2px !important;
  top: 13px;
  width: 10px;
  height: 20px;
  display: block;
  color: #333333;
  line-height: 20px;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  z-index: 5;
}

.ui-widget.ui-widget-content {
  border: 1px solid #e0e0e0;
  font-family: 'Montserrat', sans-serif;
}

.ui-menu .ui-menu-item {
  font-size: 14px;
  border-bottom: 1px solid #e0e0e0;
}

.ui-menu .ui-menu-item:last-child {
  border: none;
}

.ui-state-active,
.ui-widget-content .ui-state-active {
  background-color: #e31528;
}

.ui-menu .ui-menu-item-wrapper {
  position: relative;
  display: block;
  padding: 8px 20px;
  font-size: 14px;
  line-height: 24px;
}

.ui-menu-item:hover {
  background-color: #17519d;
}

.main-slider {
  position: relative;
  z-index: 10;
}

.main-slider .tp-caption {
  z-index: 5 !important;
}

.main-slider .tp-dottedoverlay {
  background: rgba(0, 0, 0, 0.40) !important;
}

.main-slider .tparrows.gyges {
  width: 60px;
  height: 60px;
  line-height: 60px;
  background-color: rgba(255, 255, 255, 0.20);
  border-radius: 50px;
}

.main-slider .tparrows.gyges:before {
  line-height: 60px;
}

.main-slider .tparrows.gyges:hover {
  background-color: #e31528;
}

.main-slider h2 {
  position: relative;
  color: #ffffff;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2em;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.50);
}

.main-slider h2:before {
  position: absolute;
  content: '';
  width: 70px;
  height: 1px;
  left: 0px;
  bottom: -1px;
  z-index: 10;
  background-color: #e31528;
}

.main-slider h2.dark-text {
  position: relative;
  color: #022222;
}

.main-slider h2.text-center:before {
  left: 50%;
  margin-left: -35px;
}

.main-slider .text {
  position: relative;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.7em;
}

.main-slider .text.dark-text {
  color: #022222;
  font-size: 16px;
}

.main-slider .dark-heading {
  position: relative;
  color: #022222;
  font-size: 60px;
  border: 0px;
  padding: 0px;
  line-height: 1.2em;
}

.main-slider .dark-heading:after {
  display: none;
}

.main-slider .white-heading {
  position: relative;
  color: #ffffff;
  border: 0px;
  padding: 0px;
  line-height: 1.2em;
}

.main-slider .white-heading:after {
  display: none;
}

.main-slider h4 {
  position: relative;
  font-size: 36px;
  font-weight: 400;
  color: #ffffff;
}

.main-slider h1 {
  position: relative;
  font-size: 72px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2em;
  text-transform: uppercase;
}

.slider-content {
  position: relative;
  padding: 35px 30px;
  background-color: rgba(0, 0, 0, 0.60);
}

.slider-content h3 {
  position: relative;
  color: #ffffff;
  font-size: 30px;
  line-height: 1.4em;
  font-weight: 700;
  padding-bottom: 18px;
  margin-bottom: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.20);
}

.slider-content h3:after {
  position: absolute;
  content: '';
  width: 70px;
  height: 1px;
  left: 0px;
  bottom: -1px;
  z-index: 10;
  background-color: #e31528;
}

.slider-content .content-text {
  position: relative;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 25px;
}

.main-slider .tp-bannertimer,
.main-slider .tp-bullets {
  display: none !important;
}

.fancybox-next span,
.fancybox-prev span {
  background-image: none !important;
  width: 44px !important;
  height: 44px !important;
  line-height: 44px !important;
  text-align: center;
}

.fancybox-next span:before,
.fancybox-prev span:before {
  content: '';
  position: absolute;
  font-family: 'FontAwesome';
  left: 0px;
  top: 0px;
  font-size: 12px;
  width: 44px !important;
  height: 44px !important;
  line-height: 44px !important;
  background-color: rgba(28, 28, 28, 0.40) !important;
  color: #ffffff;
  visibility: visible;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
}

.fancybox-next span:before {
  content: '\f178';
}

.fancybox-prev span:before {
  content: '\f177';
}

.fancybox-next:hover span:before,
.fancybox-prev:hover span:before {
  background-color: #ffffff !important;
  color: #000000;
}

.fancybox-type-image .fancybox-close {
  right: 0px;
  top: 0px;
  width: 45px;
  height: 45px;
  background-color: rgba(17, 17, 17, 0.50) !important;
}

.fancybox-type-image .fancybox-close:hover {
  background-color: #000000 !important;
}

.fancybox-type-image .fancybox-skin {
  padding: 0px !important;
}
</style>
