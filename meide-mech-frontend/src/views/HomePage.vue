<template>
  <ion-page>
    <ion-content>
      <nav class="navbar navbar-light justify-content-center montserrat"
        style="background: url('assets/images/batik.svg'); background-color: #e31528;">
        <a href="home" class="navbar-brand d-none d-xl-block" style="background-color: white; margin-right: 600px;">
          <img src="assets/images/logo-new.png">
        </a>
        <div class="row mt-2">
          <img src="assets/figma_assets/certified.svg" alt="" style="width: 26px; margin: 0px 16px 14px;">
          <ul class="navbar-text text-white mr-4">
            <li style="font-size: 18px; font-weight: 500;">Certified Company</li>
            <li style="font-weight: 300;">ISO 9001:2005</li>
          </ul>
          <div class="vertical-line"></div>
          <img src="assets/figma_assets/trophy.svg" alt="" style="width: 26px; margin: 0px 16px 14px;">
          <ul class="navbar-text text-white">
            <li style="font-size: 18px; font-weight: 500;">Best Product</li>
            <li style="font-weight: 300;">Service Provider</li>
          </ul>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 montserrat"
        style="font-size: 14px; font-weight: 600;">
        <a class="navbar-brand d-md-inline d-lg-none" href="#">
          <img src="assets/images/logo-new.png" style="width: 50px;">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav" style="margin-right: 800px;">
            <li class="nav-item active">
              <div class="dropdown">
                <a class="nav-link dropdown-toggle active" href="#" role="button" data-toggle="dropdown"
                  aria-expanded="false">HOME</a>
                <div class="dropdown-menu dropdown-menu-center">
                  <a class="dropdown-item" href="#">HOME 1</a>
                  <a class="dropdown-item" href="#">HOME 2</a>
                </div>
              </div>
            </li>
            <li class="nav-item active">
              <a class="nav-link text-nowrap" href="#">ABOUT US</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">PRODUCT</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link text-nowrap" href="$">CONTACT US</a>
            </li>
          </ul>
        </div>
      </nav>

      <ion-grid>
                <ion-row>
                    <swiper style="height: 650px;">
                        <swiper-slide>
                            <div class="container-fluid p-0">
                                <div class="background1">
                                    <div class="container text-white text-left carousel-text montserrat">
                                        <span style="font-size: 48px; font-weight: bold;">GROOVED FITTINGS</span><br><br><br>
                                        <span style="font-size: 18px">Excellent quality, the first choice for global customers.</span><br><br>
                                        <a href="#" class="theme-btn btn-style-one" style="transition: none 0s ease 0s; text-align: inherit; line-height: 24px; border-width: 2px; margin: 0px; padding: 13px 48px; letter-spacing: 0px; font-weight: 500; font-size: 16px;">LEARN MORE</a>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="container-fluid p-0">
                                <div class="background2">
                                    <div class="container text-white text-left carousel-text montserrat">
                                        <span style="font-size: 48px; font-weight: bold;">VALVES FOR FIRE PROTECTION</span><br><br><br>
                                        <span style="font-size: 18px">One stop supplier for fire protection valve products.</span><br><br>
                                        <a href="#" class="theme-btn btn-style-one" style="transition: none 0s ease 0s; text-align: inherit; line-height: 24px; border-width: 2px; margin: 0px; padding: 13px 48px; letter-spacing: 0px; font-weight: 500; font-size: 16px;">LEARN MORE</a>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="container-fluid p-0">
                                <div class="background3">
                                    <div class="container text-white text-left carousel-text montserrat">
                                        <span style="font-size: 48px; font-weight: bold;">VALVES FOR WATER WORKS</span><br><br><br>
                                        <span style="font-size: 18px">All in house production. Reliable quality assurance.</span><br><br>
                                        <a href="#" class="theme-btn btn-style-one" style="transition: none 0s ease 0s; text-align: inherit; line-height: 24px; border-width: 2px; margin: 0px; padding: 13px 48px; letter-spacing: 0px; font-weight: 500; font-size: 16px;">LEARN MORE</a>
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

export default defineComponent({
    name: 'CarouselSection',
    components: { Swiper, SwiperSlide, IonContent, IonPage }
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
