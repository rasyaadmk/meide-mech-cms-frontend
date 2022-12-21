<template>
  <ion-page>
    <ion-content>
      <section class="about-section" id="about-us">
        <div class="auto-container px-3 px-md-5 px-lg-3">
          <div class="row clearfix">
            <!--Column-->
            <div class="about-column col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <!--Sec Title-->
              <div class="sec-title">
                <h2>COMPANY PROFILE</h2>
              </div>
              <div class="row clearfix">
                <div class="inner-image-column col-md-4 col-sm-5 col-xs-12">
                  <div class="image" v-for="post in posts" v-bind:key="post.id">
                    <div v-if="post.link === 'logok'">
                      <img v-bind:src="post.images">
                    </div>
                  </div>
                </div>
                <div class="inner-content-column col-md-8 col-sm-7 col-xs-12">
                  <div class="text">
                    <div>
                      <ul>
                        <li v-for="post in posts" v-bind:key="post.id">{{ post.link }}</li>
                      </ul>

                    </div>
                  </div>
                  <a href="about.html" class="theme-btn btn-style-one">Read More</a>
                </div>
              </div>
            </div>
            <!--Column-->
            <div class="quote-column col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div class="inner-column">
                <div class="services-block-seven">
                  <div class="inner-box">
                    <div class="icon-box">
                      <img src="/assets/figma_assets/fire.svg" alt="" style="height: 75px;">
                    </div>
                    <h3><a href="services-single.html">Fire</a></h3>
                    <div class="text">Reduce Instalation time and labor costs.</div>
                  </div>
                </div>
                <div class="services-block-seven">
                  <div class="inner-box">
                    <div class="icon-box">
                      <img src="/assets/figma_assets/irrigation.svg" alt="" style="height: 75px;">
                    </div>
                    <h3><a href="services-single.html">Irrigation</a></h3>
                    <div class="text">Saving water and power resource, reduce the failure rate and improve the
                      efficiency of the.</div>
                  </div>
                </div>
                <div class="services-block-seven">
                  <div class="inner-box">
                    <div class="icon-box">
                      <img src="/assets/figma_assets/water_treatment.svg" alt="" style="height: 75px;">
                    </div>
                    <h3><a href="services-single.html">Water Treatment</a></h3>
                    <div class="text">Explain to you how all Water treatment.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  // IonHeader,
  IonPage,
  // IonTitle,
  // IonToolbar
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from 'axios';

export default defineComponent({
  name: "ApiTest",
  components: {
    IonContent,
    // IonHeader,
    IonPage,
    // IonTitle,
    // IonToolbar
  },
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
        .get("http://localhost:8080/api/getpartners")
        .then((response) => {
          this.posts = response.data;
          console.log(response.data)
        }).catch(function (error) {
          console.log(error);
        })
    }
  }

  // data(){
  // 	return {
  // 		articles: []
  // 	}
  // },
  // async mounted(){
  // 	let response = await axios.get('https://api.sampleapis.com/coffee/hot')
  // 	this.articles = response.data
  // }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Raleway:wght@400;500&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Raleway:wght@400;500&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  font-size: 15px;
  color: #777777;
  line-height: 1.8em;
  font-weight: 400;
  background: #ffffff;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  -webkit-font-smoothing: antialiased;
  font-family: "Raleway", sans-serif;
}

.text {
  font-family: 'Raleway', sans-serif;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #e31528;
}

.no-padding {
  padding: 0px !important;
}

a:hover,
a:focus,
a:visited {
  text-decoration: none;
  outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  position: relative;
  font-weight: normal;
  margin: 0px;
  background: none;
  line-height: 1.6em;
  font-family: 'Montserrat', sans-serif;
}

p {
  position: relative;
  line-height: 1.8em;
}

.mar-bottom-30 {
  margin-bottom: 30px !important;
}

.mar-top-80 {
  margin-top: 80px !important;
}

.mar-top-50 {
  margin-top: 50px !important;
}

.strike-through {
  text-decoration: line-through;
}

.auto-container {
  position: static;
  max-width: 1200px;
  /*padding:0px 15px;*/
  padding: 0px 0px;
  margin: 0 auto;
}

.page-wrapper {
  position: relative;
  margin: 0 auto;
  width: 100%;
  min-width: 300px;
}

ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

.theme-btn {
  display: inline-block;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.grey-bg {
  background-color: #f7f7f7 !important;
}

/*Btn Style One*/

.btn-style-one {
  position: relative;
  padding: 13px 48px;
  line-height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  background-color: #e31528;
  border: 2px solid #e31528;
  text-transform: capitalize;
  font-family: 'Raleway', sans-serif;
}

.btn-style-one:hover {
  color: #e31528;
  background: none;
}

/*Btn Style Two*/

.btn-style-two {
  position: relative;
  padding: 13px 37px;
  line-height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  font-family: 'Raleway', sans-serif;
  border: 2px solid rgba(255, 255, 255, 0.50);
}

.btn-style-two:hover {
  background: #e31528;
  color: #ffffff;
  border-color: #e31528;
}

/*Btn Style Three*/

.btn-style-three {
  position: relative;
  padding: 10px 39px;
  line-height: 24px;
  color: #222;
  font-size: 16px;
  font-weight: 500;
  border: 2px solid #dddddd;
  text-transform: capitalize;
  font-family: 'Raleway', sans-serif;
}

.btn-style-three:hover {
  background: #e31528;
  color: #ffffff;
  border-color: #e31528;
}

.owl-nav {
  display: flex;
  justify-content: space-evenly;
}

.owl-nav div {
  background: #e31528;
  color: #fff;
  padding: 15px;
  border-radius: 31px;
  width: 58px;
  text-align: center;
  font-size: 30px;
}

/*Btn Style Four*/

.btn-style-four {
  position: relative;
  padding: 10px 39px;
  line-height: 24px;
  color: #222222;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #eeeeee;
  text-transform: capitalize;
  font-family: 'Raleway', sans-serif;
}

.btn-style-four:hover {
  background: #e31528;
  color: #ffffff;
  border-color: #e31528;
}

.theme_color {
  color: #e31528;
}

img {
  display: inline-block;
  max-width: 100%;
}

.product-section {
  position: relative;
  padding: 75px 0px 50px;
}

.about-section {
  position: relative;
  padding: 75px 0px 50px;
}

.about-section .about-column {
  position: relative;
}

.about-section .about-column .inner-column {
  position: relative;
}

.about-section .about-column .inner-image-column {
  position: relative;
  margin-bottom: 30px;
}

@media only screen and (min-width: 992px) {
  .about-section .about-column .inner-image-column {
    width: 37.44444444%;
  }

  .about-section .about-column .inner-content-column {
    width: 61.66666666%;
  }
}

.about-section .about-column .inner-image-column .image {
  position: relative;
}

.about-section .about-column .inner-image-column .image img {
  position: relative;
  width: 100%;
}

.about-section .about-column .inner-content-column {
  position: relative;
  margin-bottom: 30px;
}

.about-section .about-column .inner-content-column .text {
  position: relative;
}

.about-section .about-column .inner-content-column .text p {
  position: relative;
  color: #848484;
  font-size: 16px;
  line-height: 1.7em;
  margin-bottom: 19px;
}

.about-section .about-column .inner-content-column h3 {
  position: relative;
  color: #222222;
  font-size: 24px;
  margin-bottom: 10px;
}

.about-section .quote-column {
  position: relative;
}

.about-section .quote-column .inner-column {
  position: relative;
  padding: 40px 30px 10px;
  border: 1px solid #eeeeee;
}

.about-section .quote-column .form-group {
  margin-bottom: 30px;
}

.about-section .quote-column .form-group button {
  width: 100%;
}

/*** 

====================================================================
	Testimonail Section Two
====================================================================

***/

.testimonial-section-two {
  position: relative;
  padding: 80px 0px 80px;
}

.testimonial-section-two.style-two .owl-dots,
.testimonial-section-two.style-two .owl-nav {
  display: none;
}

.testimonial-section-two.style-two .btn-style-four {
  margin-top: 50px;
}

.testimonial-block-two {
  position: relative;
  padding: 30px 0px;
}

.testimonial-block-two .inner-box {
  position: relative;
  padding: 0px 30px 20px;
  background-color: #ffffff;
}

.testimonial-block-two .inner-box {
  position: relative;
}

.testimonial-block-two .inner-box .quote-icon {
  position: relative;
  width: 70px;
  height: 70px;
  color: #e31528;
  line-height: 64px;
  font-size: 28px;
  text-align: center;
  border-radius: 50%;
  margin-top: -40px;
  display: inline-block;
  border: 4px solid #ffffff;
  background-color: #f7f7f7;
}

.testimonial-block-two .inner-box .text {
  position: relative;
  color: #848484;
  line-height: 1.8em;
  padding-left: 100px;
  margin-top: 15px;
}

.testimonial-block-two .inner-box .text span {
  position: absolute;
  color: #f4f4f4;
  font-size: 60px;
  left: 1px;
  top: 40px;
}

.testimonial-block-two .inner-box .lower-box {
  position: relative;
  padding-top: 22px;
}

.testimonial-block-two .inner-box .lower-box .author-info {
  position: relative;
}

.testimonial-block-two .inner-box .lower-box .author-info .author-inner {
  position: relative;
  padding-left: 100px;
  padding-top: 8px;
  min-height: 70px;
}

.testimonial-block-two .inner-box .lower-box .author-info .author-inner .image {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
}

.testimonial-block-two .inner-box .lower-box .author-info .author-inner h3 {
  position: relative;
  color: #222222;
  font-size: 18px;
}

.testimonial-block-two .inner-box .lower-box .author-info .author-inner .author-location {
  position: relative;
  color: #e31528;
  font-size: 16px;
}

.testimonial-block-two .inner-box .lower-box .rating {
  position: relative;
  padding: 2px 10px;
  display: inline-block;
  margin-top: 20px;
  border: 1px solid #eeeeee;
}

.testimonial-block-two .inner-box .lower-box .rating .fa {
  color: #ebce09;
  margin: 0px 2px;
}

.testimonial-block-two .inner-box:after {
  position: absolute;
  content: '';
  left: 30px;
  bottom: -25px;
  border-top: 25px solid #ffffff;
  border-right: 25px solid transparent;
}

.testimonial-section-two .owl-nav {
  display: none;
}

.testimonial-section-two .owl-dots {
  position: relative;
  text-align: center;
  margin-top: 40px;
}

.testimonial-section-two .owl-dots .owl-dot {
  position: relative;
  display: inline-block;
  margin: 0px 10px;
}

.testimonial-section-two .owl-dots .owl-dot span {
  position: relative;
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #e5e5e5;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.testimonial-section-two .owl-dots .owl-dot.active span,
.testimonial-section-two .owl-dots .owl-dot:hover span {
  background: #e31528;
  border-color: #e31528;
}

/*** 

====================================================================
	News Section Two
====================================================================

***/

.news-section-two {
  position: relative;
  padding: 80px 0px 40px;
}

.news-section-two .border-column {
  position: relative;
  border: 1px solid #f4f4f4;
}

.news-section-two .sec-title .sec-title-inner {
  position: relative;
  padding-right: 200px;
}

.news-section-two .sec-title .sec-title-inner .theme-btn {
  position: absolute;
  right: 0px;
  top: 0px;
}

.news-block-two {
  position: relative;
  margin-bottom: 40px;
}

.news-block-two .inner-box {
  position: relative;
}

.news-block-two .inner-box .image {
  position: relative;
}

.news-block-two .inner-box .image img {
  position: relative;
  width: 100%;
  display: block;
}

.news-block-two .inner-box .lower-content {
  position: relative;
  padding-top: 25px;
}

.news-block-two .inner-box .lower-content .category {
  position: relative;
  color: #222222;
  font-size: 16px;
  padding: 3px 18px;
  margin-bottom: 20px;
  display: inline-block;
  border: 1px solid #e31528;
}

.news-block-two .inner-box .lower-content h3 {
  position: relative;
  font-size: 18px;
  font-weight: 400;
}

.news-block-two .inner-box .lower-content h3 a {
  position: relative;
  color: #222222;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.news-block-two .inner-box .lower-content h3 a:hover {
  color: #e31528;
}

.news-block-two .inner-box .lower-content .post-info {
  position: relative;
}

.news-block-two .inner-box .lower-content .post-info li {
  position: relative;
  color: #848484;
  font-size: 16px;
  margin-right: 10px;
  padding-right: 10px;
  display: inline-block;
  line-height: 1em;
  border-right: 1px solid #cecece;
}

.news-block-two .inner-box .lower-content .post-info li:last-child {
  border: 0px;
  padding-right: 0px;
  margin-right: 0px;
}

.news-block-two .inner-box .lower-content .text {
  position: relative;
  color: #848484;
  font-size: 16px;
  line-height: 1.7em;
  margin-top: 10px;
}

/*News Block Three*/

.news-block-three {
  position: relative;
  margin-bottom: 10px;
}

.news-block-three .inner-box {
  position: relative;
  padding: 18px 18px 10px;
  border-bottom: 1px solid #eeeeee;
}

.news-block-three .inner-box .category {
  position: relative;
  color: #222222;
  font-size: 16px;
  padding: 3px 18px;
  margin-bottom: 16px;
  display: inline-block;
  border: 1px solid #e31528;
}

.news-block-three .inner-box h3 {
  position: relative;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 4px;
}

.news-block-three .inner-box h3 a {
  position: relative;
  color: #222222;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.news-block-three .inner-box h3 a:hover {
  color: #e31528;
}

.news-block-three .inner-box .post-info {
  position: relative;
}

.news-block-three .inner-box .post-info li {
  position: relative;
  color: #848484;
  font-size: 16px;
  margin-right: 10px;
  padding-right: 10px;
  display: inline-block;
  line-height: 1em;
  border-right: 1px solid #cecece;
}

.news-block-three .inner-box .post-info li:last-child {
  border: 0px;
  padding-right: 0px;
  margin-right: 0px;
}

.news-block-three .inner-box .text {
  position: relative;
  color: #848484;
  font-size: 16px;
  line-height: 1.7em;
  margin-top: 10px;
}

.news-block-three:last-child .inner-box {
  position: relative;
  border: 0px;
}

.clients-section-two {
  position: relative;
}

/*** 

====================================================================
	Client Section Two
====================================================================

***/

.clients-section-two {
  position: relative;
  padding: 75px 0px 80px;
}

.clients-section-two h2 {
  position: relative;
  color: #222222;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 40px;
}

.clients-section-two .owl-nav,
.clients-section-two .owl-dots {
  display: none;
}

.clients-section-two .image-box {
  text-align: center;
  border: 1px solid #eeeeee;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.clients-section-two .image-box:after {
  position: absolute;
  content: '';
  left: 4px;
  right: 4px;
  top: 4px;
  bottom: 4px;
  border: 1px solid #eeeeee;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.clients-section-two .image-box img {
  position: relative;
  padding: 8px 20px;
  width: auto;
  max-width: 100%;
  z-index: 1;
  display: inline-block;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.clients-section-two .image-box:hover,
.clients-section-two .image-box:hover:after {
  border-color: #e31528;
}

/*** 

====================================================================
	Call To Action Section
====================================================================

***/

.call-to-action-section-two {
  position: relative;
}

.call-to-action-section-two .inner-box {
  position: relative;
  padding: 22px 30px;
  margin-top: -50px;
  z-index: 10;
  background-attachment: fixed;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.call-to-action-section-two .inner-box:before {
  position: absolute;
  content: '';
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgb(24, 78, 157);
}

.call-to-action-section-two .text {
  position: relative;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  margin-top: 13px;
}

.call-to-action-section-two .btn-column {
  position: relative;
  text-align: right;
}

/*** 

====================================================================
	About Section
====================================================================

***/

.about-section .image-column {
  position: relative;
  margin-bottom: 40px;
}

.about-section .image-column .image {
  position: relative;
}

.about-section .image-column .image img {
  position: relative;
  width: 100%;
  display: block;
}

.about-section .content-column {
  position: relative;
}

.about-section .content-column h3 {
  position: relative;
  color: #222222;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4em;
  margin-bottom: 20px;
}

.about-section .content-column .text {
  position: relative;
  color: #848484;
  font-size: 16px;
  line-height: 1.6em;
  margin-bottom: 30px;
}

.about-section .content-column .info-list {
  position: relative;
  margin-bottom: 14px;
}

.about-section .content-column .info-list li {
  position: relative;
  width: 33.3333%;
  float: left;
  color: #222222;
  font-size: 16px;
  font-weight: 700;
  padding-left: 40px;
  line-height: 1.4em;
  margin-bottom: 15px;
  display: inline-block;
}

.about-section .content-column .info-list li .icon {
  position: absolute;
  left: 0px;
  top: 5px;
  font-weight: 400;
  font-size: 30px;
  color: #e31528;
  line-height: 1em;
}

.about-section .content-column .number-info {
  position: relative;
  margin-left: -25px;
}

.about-section .content-column .number-info .info-inner {
  position: relative;
  padding-left: 45px;
}

.about-section .content-column .number-info .info-inner .icon {
  position: absolute;
  left: 0px;
  top: 16px;
  color: #e31528;
  font-size: 30px;
  line-height: 1em;
}

.about-section .content-column .number-info .info-inner .text {
  position: relative;
  color: #e31528;
  font-size: 18px;
  font-weight: 500;
}

.about-section .content-column .number-info .info-inner .text span {
  display: block;
  font-size: 20px;
  color: #222222;
  font-family: 'Montserrat', sans-serif;
}

/*** 

====================================================================
	Services Section Two
====================================================================

***/

.services-section-two {
  position: relative;
  padding: 75px 0px 50px;
}

.services-section-two:before {
  position: absolute;
  content: '';
  left: 0px;
  top: -20px;
  width: 100%;
  height: 20px;
}

.services-block-four {
  position: relative;
  margin-bottom: 30px;
}

.services-block-four .inner-box {
  position: relative;
  padding: 25px 20px;
  border: 1px solid #e5e5e5;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.services-block-four .inner-box .content {
  position: relative;
  padding-left: 50px;
}

.services-block-four .inner-box .content .icon-box {
  position: absolute;
  left: 0px;
  top: 4px;
  color: #e31528;
  font-size: 36px;
  line-height: 1em;
}

.services-block-four .inner-box .content h3 {
  position: relative;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
}

.services-block-four .inner-box .content h3 a {
  position: relative;
  color: #222222;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.services-block-four .inner-box .content h3 a:hover {
  color: #e31528;
}

.services-block-four .inner-box .content .text {
  position: relative;
  color: #848484;
  font-size: 16px;
  line-height: 1.7em;
  margin-bottom: 10px;
}

.services-block-four .inner-box .content .read-more {
  position: relative;
  color: #222222;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.services-block-four .inner-box .content .read-more .arrow {
  position: relative;
  margin-left: 2px;
}

.services-block-four .inner-box .content .read-more:hover {
  color: #e31528;
}

.services-block-four .inner-box:hover {
  background-color: #ffffff;
}

/*Gallery Item Three*/

.gallery-item-three {
  position: relative;
}

.gallery-item-three .inner-box {
  position: relative;
  overflow: hidden;
}

.gallery-item-three .inner-box .image {
  position: relative;
}

.gallery-item-three .inner-box .image img {
  position: relative;
  width: 100%;
  display: block;
}

.gallery-item-three .inner-box .overlay-box {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  display: block;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.80);
  -webkit-transition: all 700ms ease;
  -ms-transition: all 700ms ease;
  -o-transition: all 700ms ease;
  transition: all 700ms ease;
  -webkit-transform: translate(-100%, 0%);
  -ms-transform: translate(-100%, 0%);
  -o-transform: translate(-100%, 0%);
  -moz-transform: translate(-100%, 0%);
  transform: translate(-100%, 0%);
}

.gallery-item-three .inner-box .overlay-box .option-box {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -26px;
  margin-top: -75px;
}

.gallery-item-three .inner-box .overlay-box .option-box .image-link {
  position: relative;
  font-size: 16px;
  color: #ffffff;
  width: 52px;
  height: 52px;
  line-height: 50px;
  text-align: center;
  display: inline-block;
  background: #e31528;
  border-radius: 50%;
  border: 1px solid #e31528;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.gallery-item-three .inner-box .overlay-box .option-box .image-link.lightbox-image {
  position: relative;
  left: -5px;
}

.gallery-item-three .inner-box .overlay-box .content {
  position: absolute;
  left: 0px;
  top: 50%;
  margin-top: -28px;
  padding-top: 30px;
  width: 100%;
  text-align: center;
}

.gallery-item-three .inner-box .overlay-box .content h3 {
  position: relative;
  font-size: 18px;
  font-weight: 400;
}

.gallery-item-three .inner-box .overlay-box .content h3 a {
  position: relative;
  color: #ffffff;
}

.gallery-item-three .inner-box .overlay-box .content .category {
  position: relative;
  color: #ffffff;
  font-size: 16px;
}

.gallery-item-three .inner-box:hover .overlay-box {
  opacity: 1;
  -webkit-transform: translate(0%);
  -ms-transform: translate(0%);
  -o-transform: translate(0%);
  -moz-transform: translate(0%);
  transform: translate(0%);
}

.gallery-item-three.mix {
  display: none;
}

/*Gallery Item Four*/

.project-section.fullwidth-galley.padd-bottom-50 {
  padding-bottom: 50px;
}

.project-section.fullwidth-galley.padd-bottom-80 {
  padding-bottom: 80px;
}

.gallery-item-four {
  position: relative;
}

.gallery-item-four .inner-box {
  position: relative;
  overflow: hidden;
  margin: 0 15px 30px;
}

.gallery-item-four .inner-box .image {
  position: relative;
}

.gallery-item-four .inner-box .image img {
  position: relative;
  width: 100%;
  display: block;
}

.gallery-item-four .inner-box .overlay-box {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  display: block;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.80);
  -webkit-transition: all 700ms ease;
  -ms-transition: all 700ms ease;
  -o-transition: all 700ms ease;
  transition: all 700ms ease;
  -webkit-transform: translate(-100%, 0%);
  -ms-transform: translate(-100%, 0%);
  -o-transform: translate(-100%, 0%);
  -moz-transform: translate(-100%, 0%);
  transform: translate(-100%, 0%);
}

.gallery-item-four .inner-box .overlay-box .option-box {
  position: absolute;
  left: 25px;
  bottom: 25px;
}

.gallery-item-four .inner-box .overlay-box .option-box .image-link {
  position: relative;
  font-size: 16px;
  color: #ffffff;
  width: 52px;
  height: 52px;
  line-height: 50px;
  text-align: center;
  display: inline-block;
  background: #e31528;
  border: 1px solid #e31528;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.gallery-item-four .inner-box .overlay-box .option-box .image-link.lightbox-image {
  position: relative;
  left: -5px;
}

.gallery-item-four .inner-box .overlay-box .content {
  position: absolute;
  left: 0px;
  top: 50%;
  margin-top: -28px;
  width: 100%;
  text-align: center;
}

.gallery-item-four .inner-box .overlay-box .content h3 {
  position: relative;
  font-size: 18px;
  font-weight: 400;
}

.gallery-item-four .inner-box .overlay-box .content h3 a {
  position: relative;
  color: #ffffff;
}

.gallery-item-four .inner-box .overlay-box .content .category {
  position: relative;
  color: #e31528;
  font-size: 16px;
}

.gallery-item-four .inner-box .overlay-box:before {
  position: absolute;
  content: '';
  border: 1px solid #747474;
  left: 10px;
  top: 10px;
  bottom: 10px;
  right: 10px;
}

.gallery-item-four .inner-box:hover .overlay-box {
  opacity: 1;
  -webkit-transform: translate(0%);
  -ms-transform: translate(0%);
  -o-transform: translate(0%);
  -moz-transform: translate(0%);
  transform: translate(0%);
}

.gallery-item-four.mix {
  display: none;
}

/*Gallery Item six*/

.project-section.fullwidth-galley.padd-bottom-50 {
  padding-bottom: 50px;
}

.gallery-item-six {
  position: relative;
}

.gallery-item-six .inner-box {
  position: relative;
  overflow: hidden;
  margin: 0 15px 30px;
}

.gallery-item-six .inner-box .image {
  position: relative;
}

.gallery-item-six .inner-box .image img {
  position: relative;
  width: 100%;
  display: block;
}

.gallery-item-six .inner-box .overlay-box {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  display: block;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.80);
  -webkit-transition: all 700ms ease;
  -ms-transition: all 700ms ease;
  -o-transition: all 700ms ease;
  transition: all 700ms ease;
  -webkit-transform: translate(-100%, 0%);
  -ms-transform: translate(-100%, 0%);
  -o-transform: translate(-100%, 0%);
  -moz-transform: translate(-100%, 0%);
  transform: translate(-100%, 0%);
}

.gallery-item-six .inner-box .overlay-box .option-box {
  position: absolute;
  left: 25px;
  bottom: 25px;
}

.gallery-item-six .inner-box .overlay-box .option-box .image-link {
  position: relative;
  font-size: 16px;
  color: #ffffff;
  width: 52px;
  height: 52px;
  line-height: 50px;
  text-align: center;
  display: inline-block;
  background: #e31528;
  border: 1px solid #e31528;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.gallery-item-six .inner-box .overlay-box .option-box .image-link.lightbox-image {
  position: relative;
  left: -5px;
}

.gallery-item-six .inner-box .overlay-box .content {
  position: absolute;
  left: 0px;
  top: 50%;
  margin-top: -28px;
  width: 100%;
  text-align: center;
}

.gallery-item-six .inner-box .overlay-box .content h3 {
  position: relative;
  font-size: 18px;
  font-weight: 400;
}

.project-section {
  position: relative;
  padding: 70px 0px 40px;
  background-color: #333;
}

.project-section.default-bg {
  background: #fff;
}

.project-section .sec-title.no-border h2 {
  border: none;
}

.project-section.fullwidth-galley {
  padding-bottom: 0px;
}

.project-section.fullwidth-galley .gallery-item-three {
  float: left;
  width: 20%;
}

.project-section.fullwidth-galley .gallery-item-four {
  float: left;
  width: 20%;
}

.project-section.fullwidth-galley .gallery-item-six {
  float: left;
  width: 25%;
}

.project-section.fullwidth-project-two .sec-title h2 {
  border: none;
}

.project-section.fullwidth-project-two .gallery-item-three {
  margin-bottom: 30px;
}

.project-tab {
  position: relative;
}

.project-tab .project-carousel .owl-nav,
.project-tab .project-carousel .owl-dots {
  display: none;
}

.project-tab .tabs-header {
  position: relative;
}

.project-tab .product-tab-btns {
  position: relative;
  text-align: right;
  padding-top: 20px;
}

.project-tab .product-tab-btns .p-tab-btn {
  position: relative;
  line-height: 24px;
  padding: 0px 0px;
  cursor: pointer;
  color: #96969f;
  font-weight: 400;
  font-size: 16px;
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 20px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.project-tab .product-tab-btns .p-tab-btn:hover,
.project-tab .product-tab-btns .p-tab-btn.active-btn {
  color: #e31528;
}

.project-tab .p-tabs-content {
  position: relative;
  display: block;
}

.project-tab .p-tab {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: auto;
  visibility: hidden;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  background-color: #2a2a33;
}

.project-tab .p-tab.active-tab {
  position: relative;
  visibility: visible;
  z-index: 5;
}

/*Gallery Item*/

.gallery-item {
  position: relative;
  margin-bottom: 40px;
}

.gallery-item .inner-box {
  position: relative;
  width: 100%;
  overflow: hidden;
  transition: all 0.9s ease;
  -moz-transition: all 0.9s ease;
  -webkit-transition: all 0.9s ease;
  -ms-transition: all 0.9s ease;
  -o-transition: all 0.9s ease;
}

.project-tab .gallery-item .inner-box {
  -webkit-transform: scaleX(0);
  -ms-transform: scaleX(0);
  -o-transform: scaleX(0);
  -moz-transform: scaleX(0);
  transform: scaleX(0);
}

.project-tab .active-tab .gallery-item .inner-box {
  -webkit-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  -moz-transform: scaleX(1);
  transform: scaleX(1);
}

.gallery-item .image-box {
  position: relative;
  display: block;
}

.gallery-item .image-box img {
  position: relative;
  display: block;
  width: 100%;
}

.gallery-item .overlay-box {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  color: #ffffff;
  text-align: center;
  background: rgba(42, 42, 51, 0.70);
  -webkit-transition: all 700ms ease;
  -ms-transition: all 700ms ease;
  -o-transition: all 700ms ease;
  transition: all 700ms ease;
  -webkit-transform: translate(-100%, 0%);
  -ms-transform: translate(-100%, 0%);
  -o-transform: translate(-100%, 0%);
  -moz-transform: translate(-100%, 0%);
  transform: translate(-100%, 0%);
}

.gallery-item .inner-box:hover .overlay-box {
  opacity: 1;
  -webkit-transform: translate(0%);
  -ms-transform: translate(0%);
  -o-transform: translate(0%);
  -moz-transform: translate(0%);
  transform: translate(0%);
}

.gallery-item .overlay-inner {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: table;
  vertical-align: middle;
  padding: 10px 0px;
}

.gallery-item .overlay-inner .content {
  position: relative;
  display: table-cell;
  vertical-align: middle;
}

.gallery-item .overlay-inner .image-link {
  position: relative;
  font-size: 16px;
  color: #ffffff;
  width: 42px;
  height: 42px;
  line-height: 38px;
  display: inline-block;
  border: 1px solid #ffffff;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.gallery-item .overlay-inner .image-link.lightbox-image {
  position: relative;
  left: -2px;
}

.gallery-item .overlay-inner .image-link {
  position: relative;
  left: 2px;
}

.gallery-item .overlay-inner .image-link .icon {
  position: relative;
}

.gallery-item .overlay-inner .image-link:hover {
  color: #666666;
  background-color: rgba(255, 255, 255, 1);
}

.gallery-item .inner-box h3 {
  position: relative;
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
}

.gallery-item .inner-box h3 a {
  position: relative;
  color: #ffffff;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.gallery-item .inner-box h3 a:hover {
  color: #e31528;
}

.gallery-item .inner-box .category {
  position: relative;
  color: #e31528;
  font-size: 16px;
  font-weight: 400;
}

/*Default Section*/

.default-section {
  position: relative;
  padding: 75px 0px 35px;
}

.default-section .about-column {
  position: relative;
  margin-bottom: 40px;
}

.default-section .about-column .sec-title,
.default-section .form-column .sec-title {
  margin-bottom: 60px;
}

.default-section .about-column .inner-column {
  position: relative;
}

.default-section .about-column .inner-column .image {
  position: relative;
  margin-bottom: 30px;
}

.default-section .about-column .inner-column .image img {
  position: relative;
  width: 100%;
  display: block;
}

.default-section .about-column .inner-column .about-info {
  position: relative;
  border: 1px solid #f3f3f3;
}

.default-section .about-column .inner-column .about-info li {
  position: relative;
  width: 33.333%;
  color: #e31528;
  font-size: 16px;
  font-weight: 700;
  float: left;
  line-height: 1.4em;
  padding: 15px 35px 15px 55px;
  border-right: 1px solid #f3f3f3;
}

.default-section .about-column .inner-column .about-info li .icon {
  position: absolute;
  left: 15px;
  color: #e31528;
  font-size: 30px;
  line-height: 1em;
  margin-top: 5px;
  font-weight: 400;
}

.default-section .about-column .inner-column .about-info li:last-child {
  border: 0px;
}

.default-section .about-column .inner-column .text {
  position: relative;
  color: #848484;
  font-size: 16px;
  line-height: 1.6em;
  margin-top: 20px;
}

.default-section .form-column {
  position: relative;
}

.default-section .form-column .inner-column {
  position: relative;
  padding: 40px 40px 20px;
  border: 1px solid #eeeeee;
}

/*Default Form*/

.default-form .form-group {
  margin-bottom: 20px;
}

.default-form input[type="text"],
.default-form input[type="email"],
.default-form input[type="password"],
.default-form select,
.default-form textarea {
  display: block;
  width: 100%;
  height: 50px;
  font-size: 16px;
  color: #848484;
  line-height: 26px;
  padding: 12px 15px;
  font-weight: 400;
  background: #ffffff;
  border: 1px solid #ececec;
  transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.default-form input:focus,
.default-form select:focus,
.default-form textarea:focus {
  border-color: #e31528;
}

.default-form textarea {
  height: 150px;
  resize: none;
  padding: 12px 15px;
}

.default-form .form-group .text {
  position: relative;
  color: #848484;
  font-size: 16px;
  line-height: 1.6em;
}

/*Default Form / Style Two*/

.default-form.style-two .form-group {
  margin-bottom: 30px;
}

.default-form.style-two input[type="text"],
.default-form.style-two input[type="email"],
.default-form.style-two input[type="text"],
.default-form.style-two select,
.default-form.style-two textarea {
  background: none;
  border-color: rgba(255, 255, 255, 0.10);
  color: #ffffff;
}

.default-form.style-two textarea {
  height: 210px;
  background: none;
}

.default-form.style-two .form-group .ui-selectmenu-button.ui-button {
  border-color: rgba(255, 255, 255, 0.10);
  color: #ffffff;
}

.default-form.style-two input::-webkit-input-placeholder,
.default-form.style-two textarea::-webkit-input-placeholder {
  color: #ffffff;
}

.default-form.style-two .form-group button {
  width: 100%;
}

.default-form.style-three .form-group {
  margin-bottom: 30px;
}

.default-form.style-three .form-group textarea {
  height: 130px;
}

.default-form.style-three .form-group button {
  margin-top: 10px;
}

/*Testimonial Section*/

.testimonial-section {
  position: relative;
  padding: 0px 0px 80px;
}

.testimonial-section .owl-nav {
  display: none;
}

.testimonial-section .owl-dots {
  position: relative;
  text-align: center;
}

.testimonial-section .owl-dots .owl-dot {
  position: relative;
  display: inline-block;
  margin: 0px 10px;
}

.testimonial-section .owl-dots .owl-dot span {
  position: relative;
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #efefef;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.testimonial-section .owl-dots .owl-dot.active span,
.testimonial-section .owl-dots .owl-dot:hover span {
  background: #e31528;
  border-color: #e31528;
}

/*Testimonial Block*/

.testimonial-block {
  position: relative;
  margin-bottom: 40px;
}

.testimonial-block .inner-box {
  position: relative;
  padding: 40px 40px;
  border: 1px solid #eeeeee;
}

.testimonial-block .inner-box .content {
  position: relative;
  padding-left: 100px;
}

.testimonial-block .inner-box .content .image {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 80px;
  height: 80px;
}

.testimonial-block .inner-box .content .rating {
  position: relative;
  border-radius: 50px;
  padding: 2px 15px;
  display: inline-block;
  margin-bottom: 5px;
  border: 2px solid #eeeeee;
}

.testimonial-block .inner-box .content .rating .fa {
  color: #ebce09;
  margin: 0px 2px;
}

.testimonial-block .inner-box .content h3 {
  position: relative;
  color: #222222;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
}

.testimonial-block .inner-box .content .designation {
  position: relative;
  color: #e31528;
  font-size: 16px;
}

.testimonial-block .inner-box .content .text {
  position: relative;
  font-size: 16px;
  color: #96969f;
  line-height: 1.6em;
  margin-top: 5px;
}

.gallery-item-six .inner-box .overlay-box .content h3 a {
  position: relative;
  color: #ffffff;
}

.gallery-item-six .inner-box .overlay-box .content .category {
  position: relative;
  color: #e31528;
  font-size: 16px;
}

.gallery-item-six .inner-box .overlay-box:before {
  position: absolute;
  content: '';
  border: 1px solid #747474;
  left: 10px;
  top: 10px;
  bottom: 10px;
  right: 10px;
}

.gallery-item-six .inner-box:hover .overlay-box {
  opacity: 1;
  -webkit-transform: translate(0%);
  -ms-transform: translate(0%);
  -o-transform: translate(0%);
  -moz-transform: translate(0%);
  transform: translate(0%);
}

.gallery-item-six.mix {
  display: none;
}

/*============ single gallery ============*/


.single-gallery {
  position: relative;
  padding: 80px 0 50px;
}

.single-gallery .img-box {
  position: relative;
  padding-bottom: 30px;
}


.single-gallery .share-project {
  padding-left: 140px;
  position: relative;
  margin-top: 15px;
}

.single-gallery .share-project .title {
  left: 0;
  position: absolute;
  top: 2px;
}

.single-gallery .share-project .title h5 {
  color: #303030;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
}

.single-gallery .share-project .social-share {
  padding-left: 40px;
}

.single-gallery .share-project .social-share ul li {
  display: inline-block;
  margin-right: 15px;
}

.single-gallery .share-project .social-share ul li a {
  color: #9a9a9a;
  font-size: 14px;
}

.single-gallery .share-project .social-share ul li a:hover {
  color: #ff5722;
  transition: .5s ease;
}

.single-gallery .project-info-list {
  overflow: hidden;
  margin: 0 -15px;
  margin-top: 20px;
}

.single-gallery .project-info-list li {
  border-bottom: 1px solid #f7f7f7;
  float: left;
  margin: 0 15px 15px;
  overflow: hidden;
  padding-bottom: 9px;
  width: 42%;
  padding-left: 29px;
  position: relative;
}

.single-gallery .project-info-list li .icon-holder {
  left: 0;
  position: absolute;
}

.single-gallery .project-info-list li .icon-holder i {
  font-size: 14px;
  color: #e31528;
}

.single-gallery .project-info-list li .text-holder {}

.single-gallery .project-info-list li .text-holder h5 {
  color: #252525;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  margin: 0 0 3px;
}

.single-gallery .project-info-list li .text-holder p {
  margin: 0;
}

/* project description */

.project-description {
  position: relative;
}

.project-description h3 {
  font-weight: 700;
  margin-bottom: 15px;
  color: #222;
}

.project-quote {
  position: relative;
  background: #f7f7f7;
  padding: 25px 70px 25px;
  border-left: 1px solid #e31528;
  margin-top: 30px;
  margin-bottom: 70px;
}

.project-quote:before {
  position: absolute;
  content: '';
  height: 120px;
  width: 1px;
  background: #e31528;
  top: 0;
  left: 3px;
}

.project-quote .quote-icon {
  position: absolute;
  left: 25px;
  top: 32px;
  color: #e6e6e6;
  font-size: 26px;
}

.project-quote .text {
  font-style: italic;
  color: #848484;
  font-size: 18px;
}

.project-quote h4 {
  color: #222;
  font-style: normal;
  margin-top: 10px;
}

.project-quote h4 span {
  color: #e31528;
  font-size: 16px;
}

/*** 

====================================================================
	Team Section
====================================================================

***/

.team-section {
  position: relative;
  padding: 80px 0px 40px;
}

.team-member {
  position: relative;
  margin-bottom: 40px;
  border: 1px solid #f4f4f4;
  padding: 10px;
}

.team-member .inner-box .social-icon-one {
  display: inline-block;
  border: 1px solid #f4f4f4;
  padding: 0px 5px 0px;
  top: -18px;
  z-index: 9;
  background: #fff;
}

.team-member .inner-box .social-icon-one:before {
  position: absolute;
  content: '';
  width: 40px;
  height: 40px;
  top: -3px;
  left: -18px;
  background: #fff;
  border: 1px solid #f4f4f4;
  transform: rotate(-45deg);
}

.team-member .inner-box .social-icon-one:after {
  position: absolute;
  content: '';
  width: 40px;
  height: 40px;
  top: -3px;
  right: -18px;
  background: #fff;
  border: 1px solid #f4f4f4;
  transform: rotate(-45deg);
}

.team-member .inner-box .social-icon-one li {
  margin: 0;
  padding: 5px 10px 3px;
  background: #fff;
  z-index: 9;
}

.team-member .inner-box .social-icon-one li a {
  font-size: 14px;
}

.team-member .inner-box .social-icon-one li a:hover {
  color: #e31528;
}

.team-member .inner-box .social-icon-one li a:before {
  position: absolute;
  content: '';
  background: #e0edf4;
  height: 10px;
  width: 1px;
  top: 3px;
  right: -13px;
}

.team-member .inner-box .social-icon-one li:last-child a:before {
  display: none;
}

.team-member .inner-box {
  position: relative;
}

.team-member .inner-box .image {
  position: relative;
  margin-bottom: 0px;
}

.team-member .inner-box .image img {
  position: relative;
  width: 100%;
  display: block;
}

.team-member .inner-box .image .overlay-box {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 600ms ease;
  -webkit-transition: all 600ms ease;
  -ms-transition: all 600ms ease;
  -o-transition: all 600ms ease;
}

.team-member .inner-box .image .overlay-box .social-icon-two {
  top: 50%;
  margin-top: -20px;
}

.team-member .inner-box:hover .overlay-box {
  opacity: 1;
}

.team-member .inner-box .lower-content {
  position: relative;
  text-align: center;
}

.team-member .inner-box .lower-content h3 {
  position: relative;
  font-size: 18px;
  font-weight: 400;
}

.team-member .inner-box .lower-content h3 a {
  position: relative;
  color: #222222;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.team-member .inner-box .lower-content h3 a:hover {
  color: #e31528;
}

.team-member .inner-box .lower-content .designation {
  position: relative;
  color: #e31528;
  font-size: 16px;
  margin-bottom: 6px;
}

.team-member .inner-box .lower-content .text {
  position: relative;
  color: #848484;
  font-size: 16px;
  line-height: 1.7em;
}

.team-member .inner-box .lower-content .mail {
  position: relative;
  margin-top: 10px;
  padding-top: 10px;
}

.team-member .inner-box .lower-content .mail:before {
  position: absolute;
  content: '';
  width: 70px;
  height: 1px;
  background: #f4f4f4;
  top: 0;
  left: 50%;
  margin-left: -35px;
}

.team-member .inner-box .lower-content .mail a {
  color: #848484;
}

.team-member .inner-box .lower-content .mail a i {
  margin-right: 5px;
}

.team-section .owl-dots {
  display: none;
}

.team-section .owl-nav {
  position: absolute;
  right: 0px;
  top: -90px;
}

.team-section .owl-nav .owl-prev,
.team-section .owl-nav .owl-next {
  display: inline-block;
  width: 40px;
  height: 40px;
  color: #eeeeee;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  margin-left: 10px;
  border: 1px solid #eeeeee;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.team-section .owl-nav .owl-prev:hover,
.team-section .owl-nav .owl-next:hover {
  color: #e31528;
  border-color: #e31528;
}

/*** 

====================================================================
	Call To Action Section Three
====================================================================

***/

.call-to-action-section {
  position: relative;
  padding: 22px 0px;
  background-attachment: fixed;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.call-to-action-section:before {
  position: absolute;
  content: '';
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgb(157 24 24 / 90%);
}

.call-to-action-section.style-two:before {
  background-color: rgba(253, 184, 33, 0.9);
}

.call-to-action-section .text {
  position: relative;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  margin-top: 15px;
}

.call-to-action-section .btn-column {
  position: relative;
  text-align: right;
}

.call-to-action-section .btn-column .theme-btn:hover,
.call-to-action-section-two .btn-column .theme-btn:hover {
  color: #e31528;
  background-color: #ffffff;
  border-color: #ffffff;
}

.call-to-action-section-three {
  position: relative;
  padding: 90px 0px;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.call-to-action-section-three:before {
  position: absolute;
  content: '';
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(24, 78, 157, 0.9);
}

.call-to-action-section-three .inner-box {
  position: relative;
  padding: 35px 0px;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.10);
}

.call-to-action-section-three .inner-box .text {
  position: relative;
  font-size: 30px;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.4em;
  font-family: 'Montserrat', sans-serif;
}

.testimonial-block-three {
  position: relative;
  padding-top: 40px;
}

.testimonial-block-three .inner-box {
  position: relative;
  border: 1px solid #eeeeee;
  padding-top: 32px;
}

.testimonial-block-three .inner-box .upper-box {
  position: relative;
  text-align: center;
}

.testimonial-block-three .inner-box .upper-box .image {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 22px;
  z-index: 9;
}

.testimonial-block-three .inner-box .upper-box .image img {
  position: relative;
  border-radius: 50%;
}

.testimonial-block-three .inner-box .upper-box .image:before {
  position: absolute;
  content: '';
  left: -5px;
  top: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  border: 1px solid #eeeeee;
  background-color: #ffffff;
}

.testimonial-block-three .inner-box .upper-box .quote {
  position: absolute;
  left: 0;
  top: 13px;
  right: 0;
  padding: 12px 20px;
  text-align: left;
  background: #f7f7f7;
  z-index: -9;
  color: #dedede;
  font-size: 30px;

}

.testimonial-block-three .inner-box .upper-box h3 {
  position: relative;
  color: #222222;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
}

.testimonial-block-three .inner-box .upper-box p {
  color: #e31528;
  font-size: 16px;
  margin-bottom: 10px;
}

.testimonial-block-three .inner-box .upper-box .text {
  position: relative;
  color: #848484;
  background: #f7f7f7;
  font-size: 16px;
  line-height: 1.7em;
  padding-bottom: 20px;
  padding-top: 20px;
}

.testimonial-block-three .inner-box .upper-box .text:before {
  position: absolute;
  content: '';
  height: 25px;
  width: 25px;
  background: #fff;
  left: 50%;
  margin-left: -12px;
  top: -12px;
  transform: rotate(-45deg);
}

.testimonial-block-three .inner-box .lower-box {
  position: relative;
  padding: 15px 20px;
  border-top: 1px solid #eeeeee;
}

.testimonial-block-three .inner-box .lower-box h3 {
  position: relative;
  color: #222222;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4em;
}

.testimonial-block-three .inner-box .lower-box .author-location {
  position: relative;
  color: #e31528;
  font-size: 16px;
}

.testimonial-block-three .inner-box .lower-box .rating {
  position: relative;
  padding: 2px 10px;
  display: inline-block;
  margin-top: 10px;
  border: 1px solid #eeeeee;
}

.testimonial-block-three .inner-box .lower-box .rating .fa {
  color: #ebce09;
  margin: 0px 2px;
}

/*** 

====================================================================
	Quote Section
====================================================================

***/

.quote-section {
  position: relative;
  padding: 80px 0px 80px;
  background-attachment: fixed;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.quote-section:before {
  position: absolute;
  content: '';
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba(24, 78, 157, 0.95);
}

.quote-section .quote-inner {
  position: relative;
  padding: 40px 40px;
  background-color: rgba(255, 255, 255, 0.10);
}

.quote-section .quote-inner .form-column {
  position: relative;
}

.quote-section .quote-inner .contact-column {
  position: relative;
}

.quote-section .quote-inner .contact-column .column-inner {
  position: relative;
  padding: 30px 30px;
  border: 1px solid rgba(255, 255, 255, 0.10);
}

.quote-section .quote-inner .contact-column .column-inner h2 {
  position: relative;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 12px;
}

/*** 

====================================================================
	Client Section
====================================================================

***/

.clients-section-three {
  position: relative;
  padding: 70px 0px 60px;
}

.clients-section-three .owl-nav,
.clients-section-three .owl-dots {
  display: none;
}

.clients-section-three .image-box {
  text-align: center;
}

.clients-section-three .image-box img {
  position: relative;
  width: auto;
  max-width: 100%;
  display: inline-block;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

/*** 

====================================================================
	Subscribe Section
====================================================================

***/

.subscribe-section {
  position: relative;
  padding: 80px 0px 60px;
}

.subscribe-section .sec-title {
  margin-bottom: 40px;
}

.subscribe-section .dark-text {
  position: relative;
  color: #848484;
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
}

/*Subscribe widget*/

.subscribe-form {
  position: relative;
}

.subscribe-form .form-group {
  position: relative;
  display: block;
  margin-bottom: 20px;
}

.subscribe-form .form-group input[type="text"],
.subscribe-form .form-group input[type="email"] {
  position: relative;
  display: block;
  width: 100%;
  line-height: 31px;
  padding: 12px 20px;
  height: 55px;
  font-size: 14px;
  background: #ffffff;
  color: #848484;
  border: 1px solid #eeeeee;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.subscribe-form .form-group input[type="text"]:focus,
.subscribe-form .form-group input[type="email"]:focus {
  border-color: #e31528;
}

.subscribe-form .form-group input[type="submit"],
.subscribe-form button {
  width: 100%;
}

/*subscribe form style two*/

.subscribe-form-two {
  position: relative;
  background: #f7f7f7;
  padding: 30px 30px 15px;
}

@media (min-width: 992px) {
  .subscribe-form-two {
    margin-top: -87px;
  }
}

.subscribe-form-two h4 {
  font-weight: 600;
  color: #222;
  margin-bottom: 15px;
}

.subscribe-form-two .form-group {
  position: relative;
  margin-top: 19px;
}

.subscribe-form-two input {
  position: relative;
  width: 100%;
  padding: 11px 20px;
  padding-right: 50px;
  border: 1px solid #f4f4f4;
}

.subscribe-form-two button {
  position: absolute;
  right: 0;
  border-left: 1px solid #f4f4f4;
  padding: 0 20px;
  background: transparent;
  top: 1px;
  color: #e31528;
  font-size: 16px;
  line-height: 49px;
}

.subscribe-form-two p {
  color: #e31528;
}

.sec-title {
  position: relative;
  margin-bottom: 55px;
}

.sec-title.small {
  margin-bottom: 40px;
}

.sec-title h2 {
  font-size: 30px;
  color: #222222;
  font-weight: 600;
  line-height: 1.1em;
  padding-bottom: 20px;
  border-bottom: 1px solid #f6f6f6;
}

.sec-title h2:before {
  position: absolute;
  content: '';
  left: 0px;
  bottom: -1px;
  width: 60px;
  height: 1px;
  background-color: #e31528;
}

.sec-title.light h2 {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.10);
}

.sec-title.grey-border h2 {
  border-color: rgba(229, 229, 229, 0.60);
}

.sec-title.centered {
  text-align: center;
}

.sec-title.centered h2:before {
  left: 50%;
  margin-left: -30px;
}

.sec-title.small h2 {
  font-size: 24px;
}


/*subscribe form style three*/

.subscribe-form-three {
  position: relative;
}

@media (min-width: 992px) {
  .subscribe-form-three {}
}

.subscribe-form-three h4 {
  font-weight: 600;
  color: #222;
  margin-bottom: 15px;
}

.subscribe-form-three .form-group {
  position: relative;
  margin-top: 19px;
  background: transparent;
}

.subscribe-form-three input {
  position: relative;
  width: 100%;
  padding: 11px 20px;
  padding-right: 50px;
  border: 1px solid rgba(244, 244, 244, 0.15);
  background: transparent;
}

.subscribe-form-three button {
  position: absolute;
  right: 0;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0 20px;
  background: transparent;
  top: 1px;
  color: #e31528;
  font-size: 16px;
  line-height: 49px;
}

.subscribe-form-three p {
  color: #e31528;
}



/*** 

====================================================================
	Featured Section
====================================================================

***/

.featured-section {
  position: relative;
}

.featured-section .outer-container {
  position: relative;
  margin-top: -110px;
  z-index: 10;
}

.featured-section .outer-container .row {
  margin: 0px -10px;
}

.featured-section .outer-container .featured-block {
  position: relative;
  padding: 0px 10px;
  margin-bottom: 30px;
}

.featured-block .inner-box {
  position: relative;
}

.featured-block .inner-box .image {
  position: relative;
  text-align: center;
}

.featured-block .inner-box .image:after {
  position: absolute;
  content: '';
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.80);
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.featured-block .inner-box .image img {
  position: relative;
  width: 100%;
  display: block;
}

.featured-block .inner-box:hover .image .icon-box {
  color: #ffffff;
  border-color: #e31528;
  background-color: #e31528;
  bottom: 50%;
}

.featured-block .inner-box .image .icon-box {
  position: absolute;
  width: 70px;
  height: 70px;
  bottom: 0%;
  left: 50%;
  margin-left: -35px;
  color: #e31528;
  line-height: 70px;
  border-radius: 50%;
  text-align: center;
  z-index: 9;
  font-size: 32px;
  margin-bottom: -35px;
  background-color: #ffffff;
  border: 1px solid #f1f1f1;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.featured-block .inner-box:hover .image:after {
  opacity: 1;
}

.featured-block .inner-box .lower-content {
  position: relative;
  text-align: center;
  padding: 10px 15px 0;
  border: 1px solid #eeeeee;
  overflow: hidden;
}

.featured-block .inner-box .lower-content .outer-box {
  position: relative;
  top: 39px;
  transition: .5s ease;
}

.featured-block .inner-box:hover .lower-content .outer-box {
  position: relative;
  top: 0;
  transition: .5s ease;
}



.featured-block .inner-box .lower-content h3 {
  position: relative;
  font-size: 18px;
  font-weight: 400;
}

.featured-block .inner-box .lower-content h3 a {
  color: #222222;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.featured-block .inner-box .lower-content h3 a:hover {
  color: #e31528;
}

.featured-block .inner-box .lower-content .title {
  position: relative;
  font-size: 16px;
  color: #e31528;
  margin-bottom: 5px;
}

.featured-block .inner-box .lower-content .text {
  position: relative;
  font-size: 16px;
  color: #848484;
  font-weight: 300;
}

.featured-block .inner-box .lower-content .readmore {
  color: #222;
  border: 1px solid #f4f4f4;
  padding: 5px 25px;
  display: inline-block;
  margin-top: 20px;
}

/*** 

====================================================================
	Services Section Three
====================================================================

***/

.services-section-three {
  position: relative;
  padding: 50px 0px 20px;
}

.services-block-five {
  position: relative;
  margin-bottom: 45px;
}

.services-block-five .inner-box {
  position: relative;
  padding-left: 100px;
}

.services-block-five .inner-box:hover .icon-box {
  color: #ffffff;
  background-color: #e31528;
}

.services-block-five .inner-box .icon-box {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 80px;
  height: 80px;
  font-size: 38px;
  line-height: 80px;
  text-align: center;
  border-radius: 50%;
  background-color: #f7f7f7;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.services-block-five .inner-box h3 {
  position: relative;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2em;
  margin-bottom: 15px;
}

.services-block-five .inner-box h3 a {
  color: #222222;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.services-block-five .inner-box h3 a:hover {
  color: #e31528;
}

.services-block-five .inner-box .text {
  position: relative;
  color: #848484;
  font-size: 16px;
}

/*** 

====================================================================
	Services Section Three
====================================================================

***/

.services-section-four {
  position: relative;
  padding: 80px 0px 20px;
  background: #f7f7f7;
}

.services-block-six {
  position: relative;
  margin-bottom: 45px;
}

.services-block-six .inner-box {
  position: relative;
  padding-left: 100px;
}

.services-block-six .inner-box:hover .icon-box {
  color: #ffffff;
  background-color: #e31528;
}

.services-block-six .inner-box .icon-box {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 80px;
  height: 80px;
  font-size: 38px;
  line-height: 80px;
  text-align: center;
  border-radius: 50%;
  background-color: #fff;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.services-block-six .inner-box h3 {
  position: relative;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2em;
  margin-bottom: 15px;
}

.services-block-six .inner-box h3 a {
  color: #222222;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.services-block-six .inner-box h3 a:hover {
  color: #e31528;
}

.services-block-six .inner-box .text {
  position: relative;
  color: #848484;
  font-size: 16px;
}

/* services block seven */

.services-block-seven {
  position: relative;
  margin-bottom: 45px;
}

.services-block-seven .inner-box {
  position: relative;
  padding-left: 100px;
}

.services-block-seven .inner-box:hover .icon-box {
  color: #ffffff;
  background-color: #e31528;
}

.services-block-seven .inner-box .icon-box {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 80px;
  color: #fff;
  height: 80px;
  font-size: 38px;
  line-height: 80px;
  text-align: center;
  border-radius: 50%;
  background-color: #e31528;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.services-block-seven .inner-box h3 {
  position: relative;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2em;
  margin-bottom: 15px;
}

.services-block-seven .inner-box h3 a {
  color: #222222;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.services-block-seven .inner-box h3 a:hover {
  color: #e31528;
}

.services-block-seven .inner-box .text {
  position: relative;
  color: #848484;
  font-size: 16px;
}




/*** 

====================================================================
	Testimonial Section Three
====================================================================

***/

.testimonial-section-three {
  position: relative;
  padding: 80px 0px 80px;
  /* background: url(../images/resource/bg-layer.jpg) repeat; */
}

.testimonial-section-three .testimonial-outer {
  max-width: 970px;
  margin: 0 auto;
}

.testimonial-section-three .testimonial-outer .quote-icon {
  position: relative;
  width: 60px;
  height: 60px;
  text-align: center;
  margin: 0 auto;
  border: 1px solid #e5e5e5;
  /* background: url(../images/icons/quote-icon.png) center center no-repeat; */
}

.testimonial-block-one {
  position: relative;
}

.testimonial-block-one .inner-box {
  position: relative;
  text-align: center;
}

.testimonial-block-one .inner-box .quote-icon {
  position: relative;
  color: #e2b13c;
  font-size: 28px;
  margin-bottom: 40px;
}

.testimonial-block-one .inner-box .text {
  position: relative;
  color: #848484;
  font-size: 16px;
  max-width: 770px;
  margin: 0 auto;
  margin-top: 40px;
  line-height: 1.8em;
  margin-bottom: 40px;
  font-weight: 400;
}

.clients-section {
  position: relative;
  padding: 80px 0px 80px;
  background-color: #042038;
}

.clients-section .owl-nav,
.clients-section .owl-dots {
  display: none;
}

.clients-section .image-box {
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.10);
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.clients-section .image-box img {
  position: relative;
  padding: 8px 20px;
  width: auto;
  max-width: 100%;
  display: inline-block;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.clients-section .image-box:hover {
  border-color: #e31528;
}

.clients-section-two {
  position: relative;
  padding: 75px 0px 80px;
}

.clients-section-two h2 {
  position: relative;
  color: #222222;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 40px;
}

.clients-section-two .owl-nav,
.clients-section-two .owl-dots {
  display: none;
}

.clients-section-two .image-box {
  text-align: center;
  border: 1px solid #eeeeee;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.clients-section-two .image-box:after {
  position: absolute;
  content: '';
  left: 4px;
  right: 4px;
  top: 4px;
  bottom: 4px;
  border: 1px solid #eeeeee;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.clients-section-two .image-box img {
  position: relative;
  padding: 8px 20px;
  width: auto;
  max-width: 100%;
  z-index: 1;
  display: inline-block;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
}

.clients-section-two .image-box:hover,
.clients-section-two .image-box:hover:after {
  border-color: #e31528;
}

/*** 

====================================================================
	Call To Action Section
====================================================================

***/

.call-to-action-section-two {
  position: relative;
}

.call-to-action-section-two .inner-box {
  position: relative;
  padding: 22px 30px;
  margin-top: -50px;
  z-index: 10;
  background-attachment: fixed;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.call-to-action-section-two .inner-box:before {
  position: absolute;
  content: '';
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgb(24, 78, 157);
}

.call-to-action-section-two .text {
  position: relative;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  margin-top: 13px;
}

.call-to-action-section-two .btn-column {
  position: relative;
  text-align: right;
}

.clients-section.style-two .image-box {
  border: 1px solid #e5e5e5;
}

.clients-section.style-two .image-box:hover {
  border-color: #e31528;
}

.testimonial-section-three .client-thumb-outer {
  position: relative;
  max-width: 550px;
  margin: 0 auto;
  overflow: hidden;
}

.testimonial-section-three .client-thumb-outer .owl-item {
  opacity: 0.4;
}

.testimonial-section-three .client-thumb-outer .owl-item.active {
  opacity: 1;
}

.testimonial-section-three .client-thumb-outer .owl-item.active .thumb-item .thumb-box {
  -o-transform: scale(1.0, 1.0);
  -ms-transform: scale(1.0, 1.0);
  -webkit-transform: scale(1.0, 1.0);
  transform: scale(1.0, 1.0);
}

.testimonial-section-three .client-thumb-outer .client-thumbs-carousel {
  position: relative;
  max-width: 150px;
  margin: 0 auto;
  text-align: center;
}

.testimonial-section-three .client-thumb-outer .client-thumbs-carousel .owl-stage-outer {
  overflow: visible;
}

.testimonial-section-three .client-thumbs-carousel .thumb-item .thumb-content {
  position: relative;
  text-align: center;
  margin-top: 25px;
  opacity: 0;
  margin-left: -30px;
  margin-right: -30px;
}

.testimonial-section-three .client-thumbs-carousel .thumb-item .thumb-content h3 {
  font-size: 18px;
  font-weight: 500;
  color: #222222;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-family: 'Montserrat', sans-serif;
}

.testimonial-section-three .client-thumbs-carousel .thumb-item .thumb-content .designation {
  color: #e31528;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: capitalize;
}

.testimonial-section-three .client-thumb-outer .thumb-item .thumb-box {
  width: 90px;
  height: 90px;
  cursor: pointer;
  border-radius: 50%;
  margin: 0 auto;
  -o-transform: scale(0.7, 0.7);
  -ms-transform: scale(0.7, 0.7);
  -webkit-transform: scale(0.7, 0.7);
  transform: scale(0.7, 0.7);
}

.testimonial-section-three .client-thumb-outer .client-thumbs-carousel .thumb-item img {
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}

.testimonial-section-three .owl-item.active .thumb-content {
  opacity: 1;
}

.testimonial-section-three .owl-nav {
  position: absolute;
  left: 0px;
  width: 100%;
  margin-top: 20px;
}

.testimonial-section-three .owl-nav .owl-prev,
.testimonial-section-three .owl-nav .owl-next {
  display: inline-block;
  color: #eeeeee;
  font-size: 32px;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 48px;
  border: 1px solid #eeeeee;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.testimonial-section-three .owl-nav .owl-prev:hover,
.testimonial-section-three .owl-nav .owl-next:hover {
  color: #e31528;
  border-color: #e31528;
}

.testimonial-section-three .owl-nav .owl-prev {
  position: absolute;
  left: 0px;
}

.testimonial-section-three .owl-nav .owl-next {
  position: absolute;
  right: 0px;
}

/*** 

====================================================================
	Full Width Section
====================================================================

***/

.full-width-section {
  position: relative;
}

.full-width-section .outer-box {
  position: relative;
  background-color: #f7f7f7;
}

.full-width-section .outer-box .content-column {
  position: relative;
  width: 50%;
  float: left;
  padding: 0px 30px 0px;
  background-size: cover;
}

.full-width-section .outer-box .content-column:before {
  position: absolute;
  content: '';
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba(0, 0, 0, 0.90);
}

.full-width-section .outer-box .content-column .content {
  position: relative;
  max-width: 550px;
  float: right;
  padding: 90px 15px 90px 15px;
}

.full-width-section .outer-box .content-column .content .sec-title {
  margin-bottom: 35px;
}

.full-width-section .outer-box .content-column .content .text {
  position: relative;
  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 40px;
}

.full-width-section .outer-box .form-column {
  position: absolute;
  float: right;
  width: 50%;
  right: 0px;
  top: 0px;
  height: 100%;
}

.full-width-section .outer-box .form-column .form-inner {
  position: relative;
  max-width: 580px;
  width: 100%;
  float: left;
  padding: 80px 15px 40px 70px;
}

/*** 

====================================================================
	Fact Counter style
====================================================================

***/

.fact-counter {
  position: relative;
}

.fact-counter:before {
  position: absolute;
  content: '';
  left: 45%;
  top: 0px;
  height: 100%;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.20);
}

.fact-counter:after {
  position: absolute;
  content: '';
  top: 50%;
  left: 0px;
  height: 1px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.20);
}

.fact-counter .column {
  position: relative;
  z-index: 5;
  padding-bottom: 45px;
  margin-bottom: 45px;
}

.fact-counter .column:nth-child(3),
.fact-counter .column:nth-child(4) {
  margin-bottom: 0px;
  padding-bottom: 0px;
}

.fact-counter .column .inner {
  position: relative;
  top: 0;
  text-align: left;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.fact-counter .count-outer {
  position: relative;
  font-size: 36px;
  line-height: 1em;
  font-weight: 500;
  margin: 0px 0px;
  padding-left: 55px;
  display: inline-block;
}

.fact-counter .count-outer .icon {
  position: absolute;
  left: 0px;
  top: 0px;
  color: #e31528;
  font-size: 40px;
}

.fact-counter .count-outer .plus-icon {
  position: relative;
  font-weight: 700;
  color: #ffffff;
  font-size: 36px;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
}

.fact-counter .count-outer .count-text {
  font-weight: 700;
  color: #ffffff;
  font-size: 36px;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
}

.fact-counter .column .counter-title {
  position: relative;
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  margin-top: 10px;
}

/*News Block Four*/

.news-block-four {
  position: relative;
}

.news-block-four:last-child .inner-box {
  position: relative;
  border: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
}

.news-block-four .inner-box {
  position: relative;
  padding-left: 126px;
  min-height: 120px;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid #eeeeee;
}

.news-block-four .inner-box .image {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100px;
  height: 95px;
}

.news-block-four .inner-box h3 {
  position: relative;
  font-size: 18px;
  line-height: 1.6em;
  font-family: 'Montserrat', sans-serif;
}

.news-block-four .inner-box h3 a {
  color: #222222;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.news-block-four .inner-box h3 a:hover {
  color: #e31528;
}

.news-block-four .inner-box .post-meta {
  position: relative;
  margin: 7px 0px 8px;
}

.news-block-four .inner-box .post-meta li {
  position: relative;
  color: #999999;
  font-size: 16px;
  padding-left: 20px;
  margin-right: 15px;
  display: inline-block;
}

.news-block-four .inner-box .post-meta li .icon {
  position: absolute;
  content: '';
  left: 0px;
  top: 0px;
  color: #e31528;
}

/*** 

====================================================================
	Page Title Style
====================================================================

***/

.page-title {
  position: relative;
  text-align: center;
  padding: 60px 0px 20px 0px;
  /* background: url(../images/resource/page-title-bg.jpg) repeat; */
}

.page-title h1 {
  position: relative;
  font-size: 36px;
  font-weight: 600;
  color: #222222;
  line-height: 1.5em;
  text-transform: capitalize;
}

.page-title .text {
  position: relative;
  color: #848484;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
}

.page-info {
  position: relative;
  color: #272727;
  z-index: 9;
  border-top: 1px solid #eeeeee;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.06);
}

.page-info h2 {
  font-size: 16px;
  color: #272727;
  line-height: 24px;
  font-weight: 700;
}

.page-info .bread-crumb {
  position: relative;
  font-size: 14px;
  padding: 18px 0px 17px;
}

.page-info .bread-crumb li {
  position: relative;
  display: inline-block;
  font-size: 14px;
  margin-right: 24px;
  color: #e31528;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;
  font-family: 'Montserrat', sans-serif;
}

.page-info .bread-crumb li:last-child {
  margin-right: 0px;
}

.page-info .bread-crumb li:after {
  content: '\f0da';
  font-family: 'FontAwesome';
  position: absolute;
  right: -21px;
  width: 10px;
  line-height: 24px;
  font-size: 16px;
  color: #222222;
}

.page-info .bread-crumb li:last-child:after {
  display: none;
}

.page-info .bread-crumb li a {
  color: #1a1a1a;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.page-info .bread-crumb li a:hover {
  color: #e31528;
}

/*** 

====================================================================
	Who We Are Section
====================================================================

***/

.who-we-are-section {
  position: relative;
  padding-top: 75px;
}

.who-we-are-section .column {
  margin-bottom: 30px;
}

.who-we-are-section .we-are-section {
  margin-bottom: 20px;
}

.who-we-are-section .we-are-section .sec-title {
  margin-bottom: 30px;
}

.who-we-are-section .we-are-section .column .text {
  color: #848484;
  font-size: 16px;
  margin-bottom: 15px;
}

.who-we-are-section .we-are-section .column .read-more {
  position: relative;
  font-weight: 500;
  font-size: 16px;
  color: #222222;
}

.who-we-are-section .we-are-section .column .image img {
  width: 100%;
  display: block;
}

.who-we-are-section .image-column .image {
  margin-top: 26px;
}

/*** 

====================================================================
	Featured Section Two
====================================================================

***/

.featured-section-two {
  position: relative;
  padding: 80px 0px 50px;
  background-attachment: fixed;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.featured-section-two:before {
  position: absolute;
  content: '';
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba(24, 78, 157, 0.95);
}

/*Featured Block Two*/

.featured-block-two {
  position: relative;
  margin-bottom: 30px;
}

.featured-block-two .inner-box {
  position: relative;
}

.featured-block-two .inner-box .icon-box {
  position: relative;
  padding: 22px 0px;
  text-align: center;
  color: #e31528;
  font-size: 60px;
  line-height: 1em;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.10);
}

.featured-block-two .inner-box h3 {
  position: relative;
  font-size: 20px;
  margin-bottom: 8px;
}

.featured-block-two .inner-box h3 a {
  color: #ffffff;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.featured-block-two .inner-box h3 a:hover {
  color: #e31528;
}

.featured-block-two .inner-box .text {
  position: relative;
  color: #ffffff;
  font-size: 15px;
  line-height: 1.8em;
}

/*** 

====================================================================
	Error Section
====================================================================

***/

.error-section {
  position: relative;
  padding: 130px 0px 130px;
  background-color: #f4f4f4;
}

.error-section .inner-section {
  position: relative;
  text-align: center;
}

.error-section .inner-section h1 {
  position: relative;
  color: #ffffff;
  font-size: 150px;
  line-height: 1em;
}

.error-section .inner-section h2 {
  position: relative;
  font-size: 20px;
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
}

.error-section .inner-section .text {
  position: relative;
  color: #e31528;
  font-size: 18px;
  margin-top: 6px;
  margin-bottom: 40px;
}

/*Search Box Widget*/

.error-search-form .form-group {
  position: relative;
  max-width: 430px;
  margin: 0 auto;
  width: 100%;
}

.error-search-form .form-group input[type="text"],
.error-search-form .form-group input[type="search"] {
  position: relative;
  line-height: 22px;
  background: none;
  display: block;
  font-size: 16px;
  width: 100%;
  height: 54px;
  border: 1px solid #eeeeee;
  background-color: #ffffff;
  padding: 10px 50px 10px 20px;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.error-search-form .form-group input:focus {
  border-color: #e31528;
}

.error-search-form .form-group button {
  position: absolute;
  right: 0px;
  top: 0px;
  height: 54px;
  width: 60px;
  display: block;
  font-size: 16px;
  color: #ffffff;
  line-height: 100%;
  background: #e31528;
  font-weight: normal;
}

/*** 

====================================================================
	Blog Section
====================================================================

***/

.blog-section {
  position: relative;
  padding: 80px 0px 80px;
}

/*** 

====================================================================
	Styled Pagination
====================================================================

***/

.blog-page .styled-pagination {
  position: relative;
  padding-top: 40px;
  border-top: 1px solid #eeeeee;
}

.styled-pagination ul {
  position: relative;
  display: inline-block;
}

.styled-pagination li {
  position: relative;
  display: block;
  float: left;
  margin: 0px 8px 8px 0px;
}

.styled-pagination li a {
  position: relative;
  display: inline-block;
  line-height: 32px;
  border-radius: 50%;
  padding: 9px 5px;
  height: 55px;
  font-size: 18px;
  min-width: 55px;
  color: #252525;
  font-weight: 400;
  text-align: center;
  background: none;
  border: 1px solid #eeeeee;
  text-transform: capitalize;
  transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
}

.styled-pagination li a.prev,
.styled-pagination li a.next {
  color: #9e9e9e;
  font-weight: 600;
  padding: 8px 20px;
  line-height: 36px;
  text-transform: uppercase;
  border: 2px solid #eeeeee;
  font-family: 'Montserrat', sans-serif;
}

.styled-pagination li a:hover,
.styled-pagination li a.active {
  color: #ffffff;
  border-color: #e31528;
  background-color: #e31528;
}

/*** 

====================================================================
	Sidebar Page Container
====================================================================

***/

.sidebar-page-container {
  position: relative;
  padding: 80px 0px 40px;
}

.sidebar-page-container .content-side,
.sidebar-page-container .sidebar-side {
  margin-bottom: 40px;
}

.sidebar-widget {
  position: relative;
  margin-bottom: 50px;
}

/*Search Box Widget*/

.sidebar .search-box .form-group {
  position: relative;
  margin: 0px;
}

.sidebar .search-box .form-group input[type="text"],
.sidebar .search-box .form-group input[type="search"] {
  position: relative;
  line-height: 28px;
  padding: 10px 50px 10px 20px;
  border: 1px solid #eeeeee;
  background: none;
  display: block;
  font-size: 16px;
  width: 100%;
  height: 50px;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.sidebar .search-box .form-group button {
  position: absolute;
  right: 0px;
  top: 0px;
  height: 50px;
  width: 50px;
  display: block;
  font-size: 16px;
  color: #222222;
  line-height: 100%;
  background: #f4f4f4;
  font-weight: normal;
}

/*Sidebar Title*/

.sidebar-title {
  position: relative;
  margin-bottom: 25px;
}

.sidebar-title h2 {
  font-size: 22px;
  color: #222222;
  font-weight: 400;
  line-height: 1.2em;
  padding-bottom: 15px;
  text-transform: capitalize;
  border-bottom: 1px solid rgba(238, 238, 238, 0.50)
}

.sidebar-title h2:after {
  position: absolute;
  content: '';
  left: 0px;
  bottom: -1px;
  width: 45px;
  height: 1px;
  background-color: #e31528;
}



/*Blog Category*/

.blog-cat {
  position: relative;
}

.blog-cat li {
  position: relative;
  margin-bottom: 15px;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.blog-cat li a {
  position: relative;
  font-size: 15px;
  font-weight: 400;
  display: block;
  padding-bottom: 15px;
  color: #848484;
  padding-left: 30px;
  border-bottom: 1px solid #eeeeee;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  font-family: 'Raleway', sans-serif;
}

.blog-cat li a:before {
  position: absolute;
  content: '\f114';
  left: 0px;
  top: 0px;
  font-family: 'FontAwesome';
}

.blog-cat li a:after {
  position: absolute;
  content: '\f105';
  right: 0px;
  top: 0px;
  font-family: 'FontAwesome';
}

.blog-cat li a:hover {
  color: #e31528;
}



/*Post Widget*/

.sidebar .popular-posts .post {
  position: relative;
  font-size: 14px;
  color: #666666;
  padding: 0px 0px;
  padding-left: 95px;
  min-height: 75px;
  margin-bottom: 40px;
}

.sidebar .popular-posts .post:last-child {
  margin-bottom: 0px;
}

.sidebar .popular-posts .post .post-thumb {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 75px;
}

.sidebar .popular-posts .post:hover .post-thumb img {
  opacity: 0.70;
}

.sidebar .popular-posts .post .post-thumb img {
  display: block;
  width: 100%;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.sidebar .popular-posts .post .text {
  position: relative;
  top: -4px;
  font-size: 16px;
  margin: 0px 0px 0px;
  font-weight: 400;
  color: #222222;
  line-height: 1.4em;
  text-transform: capitalize;
  font-family: 'Montserrat', sans-serif;
}

.sidebar .popular-posts .post .text a {
  color: #222222;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.sidebar .popular-posts .post a,
.sidebar .popular-posts .post a:hover {
  color: #e31528;
}

.sidebar .popular-posts .post-info {
  position: relative;
  font-size: 16px;
  color: #999999;
  padding-left: 22px;
  font-family: 'Raleway', sans-serif;
}

.sidebar .popular-posts .post-info:before {
  position: absolute;
  content: '\f073';
  left: 0px;
  top: 0px;
  color: #e31528;
  font-family: 'FontAwesome';
}

/*Popular Tags*/

.sidebar .popular-tags a {
  position: relative;
  display: inline-block;
  line-height: 24px;
  padding: 6px 18px 6px;
  margin: 0px 6px 10px 0px;
  color: #222222;
  text-align: center;
  font-size: 14px;
  text-transform: capitalize;
  background: #f4f4f4;
  transition: all 300ms ease;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
}

.sidebar .popular-tags a:hover {
  color: #ffffff;
  background-color: #e31528;
}

/*facebook like widget*/

.facebook-like-widget .image img {
  width: 100%;
  display: block;
}

.news-block-five {
  position: relative;
  margin-bottom: 60px;
}

.news-block-five .inner-box {
  position: relative;
}

.news-block-five .inner-box .image {
  position: relative;
}

.news-block-five .inner-box .image img {
  position: relative;
  width: 100%;
  display: block;
}

.news-block-five .inner-box .lower-content {
  position: relative;
  padding: 25px 30px;
  border: 1px solid #eeeeee;
}

.news-block-five .inner-box .lower-content h2 {
  position: relative;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.4em;
}

.news-block-five .inner-box .lower-content h2 a {
  color: #222222;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.news-block-five .inner-box .lower-content h2 a:hover {
  color: #e31528;
}

.news-block-five .inner-box .lower-content .post-meta {
  position: relative;
  margin: 7px 0px 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f6f6f6;
}

.news-block-five .inner-box .lower-content .post-meta:after {
  position: absolute;
  content: '';
  left: 0px;
  bottom: -1px;
  width: 70px;
  height: 1px;
  background-color: #e31528;
}

.news-block-five .inner-box .lower-content .post-meta li {
  position: relative;
  color: #999999;
  font-size: 16px;
  padding-left: 22px;
  margin-right: 15px;
  display: inline-block;
}

.news-block-five .inner-box .lower-content .post-meta li .icon {
  position: absolute;
  content: '';
  left: 0px;
  top: 0px;
  color: #e31528;
}

.news-block-five .inner-box .lower-content .text {
  position: relative;
  color: #848484;
  font-size: 16px;
  line-height: 1.7em;
  margin-bottom: 12px;
}

.news-block-five .inner-box .lower-content .read-more {
  position: relative;
  color: #e31528;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Raleway', sans-serif;
}

/*Blog Single*/

.blog-single {
  position: relative;
}

.blog-single .inner-box {
  position: relative;
}

.blog-single .inner-box .image {
  position: relative;
}

.blog-single .inner-box .image img {
  position: relative;
  width: 100%;
  display: block;
}

.blog-single .inner-box .lower-content {
  position: relative;
  padding: 25px 30px;
  border: 1px solid #eeeeee;
}

.blog-single .inner-box .lower-content h2 {
  position: relative;
  font-size: 26px;
  font-weight: 600;
  color: #222222;
  line-height: 1.4em;
}

.blog-single .inner-box .lower-content .post-meta {
  position: relative;
  margin: 7px 0px 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f6f6f6;
}

.blog-single .inner-box .lower-content .post-meta:after {
  position: absolute;
  content: '';
  left: 0px;
  bottom: -1px;
  width: 70px;
  height: 1px;
  background-color: #e31528;
}

.blog-single .inner-box .lower-content .post-meta li {
  position: relative;
  color: #999999;
  font-size: 16px;
  padding-left: 22px;
  margin-right: 15px;
  display: inline-block;
}

.blog-single .inner-box .lower-content .post-meta li .icon {
  position: absolute;
  content: '';
  left: 0px;
  top: 0px;
  color: #e31528;
}

.blog-single .inner-box .lower-content .text {
  position: relative;
  margin-bottom: 30px;
}

.blog-single .inner-box .lower-content .text p {
  position: relative;
  color: #848484;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7em;
  margin-bottom: 20px;
}

.blog-single .inner-box .lower-content .text blockquote {
  border-width: 3px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-style: italic;
  margin-left: 40px;
  font-size: 16px;
  border-color: #e31528;
  margin-top: 40px;
  margin-bottom: 40px;
}

/*Post Share Options*/

.post-share-options {
  position: relative;
  padding-top: 16px;
  border-top: 1px solid #f4f4f4;
}

.post-share-options .new-posts {
  position: relative;
  margin-top: 10px;
}

.post-share-options .new-posts a {
  position: relative;
  color: #222222;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.post-share-options .new-posts a.prev {
  padding-right: 14px;
  margin-right: 12px;
}

.post-share-options .new-posts a.prev:after {
  position: absolute;
  content: '';
  right: 0px;
  top: 0px;
  width: 1px;
  height: 24px;
  background-color: #eeeeee;
}

.post-share-options .new-posts a:hover {
  color: #e31528;
}

/*Author Box*/

.author-box {
  position: relative;
  margin-top: 40px;
  margin-bottom: 70px;
}

.author-box h2 {
  position: relative;
  color: #222222;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 40px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(238, 238, 238, 0.50);
}

.author-box h2:after {
  position: absolute;
  content: '';
  left: 0px;
  bottom: -1px;
  width: 70px;
  height: 1px;
  background-color: #e31528;
}

.author-box .author-comment {
  position: relative;
  padding: 30px 30px;
  background-color: #f7f7f7;
}

.author-box .author-comment .inner-box {
  position: relative;
  padding-left: 115px;
}

.author-box .author-comment .inner-box .image {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 85px;
}

.author-box .author-comment .inner-box h3 {
  position: relative;
  color: #222222;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
}

.author-box .author-comment .inner-box .text {
  position: relative;
  color: #848484;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6em;
  margin-bottom: 12px;
}

/*** 

====================================================================
	Comments Area
====================================================================

 ***/

.sidebar-page-container .comments-area {
  position: relative;
  margin-top: 0px;
  margin-bottom: 50px;
}

.sidebar-page-container .group-title {
  position: relative;
  margin-bottom: 40px;
}

.sidebar-page-container .group-title h2 {
  position: relative;
  font-size: 30px;
  color: #222222;
  font-weight: 600;
  padding-bottom: 12px;
  text-transform: capitalize;
  border-bottom: 1px solid rgba(238, 238, 238, 0.50)
}

.sidebar-page-container .group-title h2:after {
  position: absolute;
  content: '';
  left: 0px;
  bottom: -1px;
  width: 70px;
  height: 1px;
  background-color: #e31528;
}

.sidebar-page-container .comments-area .comment-box {
  position: relative;
  margin-bottom: 40px;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.sidebar-page-container .comments-area .comment-box:nth-child(1) {
  padding-top: 0px;
}

.sidebar-page-container .comments-area .comment-box:hover {
  border-color: #eb5310;
}

.sidebar-page-container .comments-area .comment {
  position: relative;
  font-size: 14px;
  min-height: 158px;
  padding: 0px 0px 0px 120px;
  border-bottom: 1px solid #eeeeee;
}

.sidebar-page-container .comments-area .comment .comment-inner {
  position: relative;
}

.sidebar-page-container .comments-area .comment .comment-inner .reply {
  position: relative;
  color: #e31528;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 20px;
  display: inline-block;
  text-transform: capitalize;
}

.sidebar-page-container .comments-area .comment .comment-inner .rating {
  position: relative;
  margin-left: 15px;
  display: inline-block;
}

.sidebar-page-container .comments-area .comment .comment-inner .rating .fa {
  display: inline-block;
  color: #e31528;
  margin-right: 2px;
}

.sidebar-page-container .comments-area .comment-box .author-thumb {
  position: absolute;
  left: 0px;
  top: 0px;
  margin-bottom: 20px;
}

.sidebar-page-container .comments-area .comment-box .author-thumb img {
  width: 100px;
  display: block;
}

.sidebar-page-container .comments-area .comment-info {
  position: relative;
  color: #222222;
  line-height: 24px;
  font-size: 18px;
  font-weight: 400;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
}

.sidebar-page-container .comments-area .comment-box .text {
  color: #848484;
  font-size: 16px;
  margin-top: 12px;
  font-weight: 400;
  line-height: 1.6em;
  margin-bottom: 10px;
}

/*Comment Form*/

.comment-form .group-title {
  margin-bottom: 20px;
}

.comment-form .rating-box {
  position: relative;
  margin-bottom: 20px;
}

.comment-form .rating-box .text {
  position: relative;
  font-size: 14px;
  color: #222222;
  margin-bottom: 10px;
}

.comment-form .rating-box .rating {
  position: relative;
  display: inline-block;
  margin-right: 20px;
}

.comment-form .rating-box .rating .fa {
  position: relative;
  margin-right: 2px;
  display: inline-block;
}

.comment-form .rating-box .rating a {
  position: relative;
  color: #e31528;
  font-size: 14px;
  display: inline-block;
}

.comment-form .form-group {
  position: relative;
  margin-bottom: 30px;
}

.comment-form .form-group:last-child {
  margin-bottom: 0px;
}

.comment-form .form-group input[type="text"],
.comment-form .form-group input[type="password"],
.comment-form .form-group input[type="tel"],
.comment-form .form-group input[type="email"],
.comment-form .form-group select {
  position: relative;
  display: block;
  width: 100%;
  line-height: 28px;
  padding: 10px 15px;
  border: 1px solid #eeeeee;
  height: 50px;
  color: #848484;
  font-weight: 300;
  background: #ffffff;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.comment-form .form-group input[type="text"]:focus,
.comment-form .form-group input[type="password"]:focus,
.comment-form .form-group input[type="tel"]:focus,
.comment-form .form-group input[type="email"]:focus,
.comment-form .form-group select:focus,
.comment-form .form-group textarea:focus {
  border-color: #e31528;
}

.comment-form .form-group textarea {
  position: relative;
  display: block;
  width: 100%;
  line-height: 26px;
  padding: 10px 15px;
  color: #848484;
  border: 1px solid #efefef;
  height: 105px;
  font-weight: 300;
  background: #ffffff;
  resize: none;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.comment-form button {
  position: relative;
  margin-top: 10px;
}

.comment-form input:focus,
.comment-form select:focus,
.comment-form textarea:focus {
  border-color: #f06529;
}

/*** 

====================================================================
	Comments Area
====================================================================

 ***/

.contact-section {
  position: relative;
  padding: 80px 0px 50px;
}

.contact-section .sec-title {
  margin-bottom: 40px;
}

.contact-section .sec-title h2 {
  margin-bottom: 20px;
}

.contact-section .sec-title .text {
  max-width: 790px;
}

.contact-section .info-column {
  position: relative;
}

.contact-section .info-column .image {
  position: relative;
  margin-bottom: 35px;
}

.contact-section .info-column .image img {
  position: relative;
  width: 100%;
  display: block;
}

.contact-section .form-column {
  position: relative;
}

.contact-section .form-column .inner-column {
  position: relative;
  padding-bottom: 30px;
}

.info-block {
  position: relative;
  margin-bottom: 35px;
}

.info-block .info-inner {
  position: relative;
  padding-left: 35px;
}

.info-block .info-inner .icon-box {
  position: absolute;
  left: 0px;
  top: 2px;
  line-height: 1em;
  color: #e31528;
  font-size: 26px;
}

.info-block .info-inner h3 {
  position: relative;
  color: #222222;
  font-size: 18px;
  font-weight: 400;
}

/*Contact Form*/

.contact-form h2 {
  position: relative;
}

.contact-form .form-group {
  margin-bottom: 30px;
}

.contact-form .form-group:last-child {
  margin-bottom: 0px;
  text-align: center;
  margin-top: 10px;
}

.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form input[type="password"],
.contact-form select,
.contact-form textarea {
  display: block;
  width: 100%;
  height: 55px;
  font-size: 16px;
  color: #848484;
  line-height: 30px;
  padding: 12px 25px;
  font-weight: 300;
  background-color: #ffffff;
  border: 1px solid #ececec;
  transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  border-color: #e31528;
}

.contact-form textarea {
  height: 150px;
  resize: none;
  padding: 12px 25px;
}

.contact-form button {
  padding: 11px 60px 11px;
  font-weight: 500;
}

.contact-form input.error,
.contact-form select.error,
.contact-form textarea.error {
  border-color: #ff0000 !important;
}

.contact-form label.error {
  display: block;
  line-height: 24px;
  padding: 5px 0px 0px;
  margin: 0px;
  text-transform: uppercase;
  font-size: 11px;
  color: #ff0000;
  font-weight: 500;
}

/*** 

====================================================================
	Map Section Style
====================================================================

***/

.map-data {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.8em;
}

.map-data h6 {
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5px;
  color: #121212;
}

.map-canvas {
  height: 450px;
}

.map-section .google-map {
  height: 550px;
}

.sidebar .view-all {
  position: relative;
  color: #222222;
  font-weight: 600;
  font-size: 14px;
  padding: 15px 20px;
  display: block;
  margin-bottom: 9px;
  background-color: #f7f7f7;
  font-family: 'Montserrat', sans-serif;
}

.sidebar .view-all .icon {
  float: right;
  color: #848484;
}

/*List Widget*/

.sidebar .sidebar-category .list {
  position: relative;
}

.sidebar .sidebar-category .list li {
  position: relative;
  line-height: 24px;
}

.sidebar .sidebar-category .list li:last-child {
  border-bottom: 0px;
}

.sidebar .sidebar-category .list li a {
  position: relative;
  color: #222222;
  font-weight: 600;
  font-size: 14px;
  padding: 15px 20px;
  display: block;
  margin-bottom: 2px;
  background-color: #f7f7f7;
  transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
}

.sidebar .sidebar-category .list li a:before {
  content: "\f0da";
  font-family: 'FontAwesome';
  font-size: 14px;
  right: 18px;
  color: #f7f7f7;
  line-height: 22px;
  position: absolute;
}

.sidebar .sidebar-category .list li a:hover,
.sidebar .sidebar-category .list li.current a {
  color: #ffffff;
  background-color: #e31528;
}

.sidebar .sidebar-category .list li.current a:before,
.sidebar .sidebar-category .list li a:hover::before {
  color: #ffffff;
}

/*Broucher Widget*/

.sidebar-brochure .brochure {
  position: relative;
  color: #222222;
  font-weight: 600;
  font-size: 14px;
  background: #f7f7f7;
  padding: 14px 20px;
  display: block;
  margin-bottom: 10px;
  padding-left: 50px;
  transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
}

.sidebar-brochure .brochure .icon {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 50px;
  height: 52px;
  line-height: 50px;
  font-size: 16px;
  margin-right: 8px;
  text-align: center;
  font-weight: 400;
  transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}

.sidebar-brochure .brochure:hover {
  color: #e31528;
  border-color: #e31528;
}

.sidebar-brochure .brochure:hover .icon {
  border-color: #e31528;
}

/*hour Widget*/

.hour-widget {
  position: relative;
  background: #f7f7f7;
  margin-bottom: 40px;
  padding: 12px 20px 0;
}

.hour-widget ul li {
  position: relative;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.hour-widget ul li span {
  position: absolute;
  right: 0;
  top: 0;
}

/*Locate Widget*/

.locate-widget {
  position: relative;
}

.locate-widget .inner-box {
  position: relative;
  overflow: hidden;
  padding: 15px 20px 15px;
  background: #f7f7f7;
  text-align: center;
}

.locate-widget .inner-box h3 {
  position: relative;
  color: #222222;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 15px;
  padding-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  border-bottom: 1px solid #eeeeee;
}

.locate-widget .inner-box .text {
  position: relative;
  color: #848484;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
}

.locate-widget .inner-box:before {
  position: absolute;
  content: "\f104";
  font-family: Flaticon;
  font-size: 60px;
  font-style: normal;
  margin-left: 20px;
  right: 0px;
  bottom: 20px;
  color: #eeeeee;
}

.locate-widget .inner-box h4 {
  color: #222;
  font-weight: 500;
}

.locate-widget .inner-box h4 span {
  color: #e31528;
  margin-right: 10px;
  font-size: 24px;
}

.locate-widget .inner-box .locate-link {
  position: relative;
  color: #222222;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}

.locate-widget .inner-box .locate-link:hover {
  color: #e31528;
}

.locate-widget .inner-box .large-icon {
  position: absolute;
  right: -10px;
  bottom: -10px;
  color: #f8f8f8;
  font-size: 80px;
  line-height: 1em;
}

.services-single {
  position: relative;
}

.services-single .inner-box {
  position: relative;
}

.services-single .inner-box .images-gallery {
  position: relative;
}

.services-single .inner-box .images-gallery .row {
  position: relative;
  margin: 0px -5px;
}

.services-single .inner-box .images-gallery .image-column {
  position: relative;
  padding: 0px 5px;
}

.services-single .inner-box .images-gallery .image-column .image {
  position: relative;
  margin-bottom: 10px;
}

.services-single .inner-box .images-gallery .image-column .image img {
  width: 100%;
  display: block;
}

.services-single .inner-box .lower-content {
  position: relative;
  margin-top: 20px;
}

.services-single .inner-box .lower-content .two-column {
  margin-bottom: 30px;
}

.services-single .inner-box .lower-content h2 {
  position: relative;
  color: #222222;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2em;
  padding-bottom: 15px;
  margin-bottom: 32px;
  border-bottom: 1px solid rgba(238, 238, 238, 0.50);
}

.services-single .inner-box .lower-content h2:before {
  position: absolute;
  content: '';
  left: 0px;
  bottom: -1px;
  width: 70px;
  height: 1px;
  background-color: #e31528;
}

.services-single .inner-box .lower-content .text {
  position: relative;
  color: #848484;
  font-size: 16px;
  line-height: 1.7em;
  margin-bottom: 35px;
}

.services-single .inner-box .lower-content .image {
  margin-bottom: 30px;
}

.services-single .inner-box .lower-content .image img {
  width: 100%;
  display: block;
}

.services-single .inner-box .lower-content .choose-section {
  margin-bottom: 40px;
}
</style>