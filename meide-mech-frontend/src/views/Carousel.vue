<template>
    <ion-page>
        <ion-content>
            <ion-grid>
                <ion-row>
                    <swiper>
                        <swiper-slide>
                            <img src="assets/images/image-new-1.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="assets/images/image-new-2.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="assets/images/image-new-3.jpg" alt="">
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
  