<template>
    <ion-page>
        <ion-content>
            <ion-grid>
                <ion-row>
                    <swiper>
                        <swiper-slide>
                            <div class="container-fluid p-0">
                                <div class="background1">
                                    <div class="font-weight-bold text-white">
                                        <span style="font-size: 48px">GROOVED FITTINGS</span><br>
                                        <span style="font-size: 18px">Excellent quality, the first choice for global customers.</span>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="container-fluid p-0">
                                <div class="background2">
                                    <div class="font-weight-bold text-white">
                                        <span style="font-size: 48px">VALVES FOR FIRE PROTECTION</span><br>
                                        <span style="font-size: 18px">One stop supplier for fire protection valve products.</span>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="container-fluid p-0">
                                <div class="background3">
                                    <div class="font-weight-bold text-white">
                                        <span style="font-size: 48px">VALVES FOR WATER WORKS</span><br>
                                        <span style="font-size: 18px">All in house production. Reliable quality assurance.</span>
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
  