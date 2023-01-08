
<template>
  <ion-page>
    <ion-content class="ion-padding">
      <button id="open-modal-kufuq" class="btn primary-btn">SADAS</button>
      <ion-modal ref="modal" trigger="open-modal-kufuq">
        <ion-content>
          <div class="modal-content">
            <div class="modal-body">
              <div class="shop-single">
                <div class="product-details">
                  <div class="basic-details">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="row clearfix">
                      <div class="image-column col-md-5 col-sm-6 col-xs-12">
                        <!-- <figure class="image-box"><a href="assets/front/images/resource/products/13.jpg" class="lightbox-image" title="Image Caption Here"><img src="assets/front/images/resource/products/13.jpg" alt=""></a></figure> -->
                        <section class="product-page">
                          <div class="thumbnails">
                            <div class="thumb active">
                              <a href="assets/images/example-1.png">
                                <img src="assets/images/example-1.png" alt="thumb-air-force-right-side">
                              </a>
                            </div>
                            <div class="thumb">
                              <a href="assets/images/example-2.png">
                                <img src="assets/images/example-2.png" alt="thumb-air-force-left-side">
                              </a>
                            </div>
                            <div class="thumb">
                              <a href="assets/images/example-3.png">
                                <img src="assets/images/example-3.png" alt="thumb-air-force-bottom-side">
                              </a>
                            </div>
                          </div>
                          <div class="img-display-zoom">
                            <span class="zoom">
                              <img src="assets/images/example-1.png" alt="">
                            </span>
                          </div>
                        </section>
                      </div>
                      <div class="info-column col-md-7 col-sm-6 col-xs-12">
                        <div class="details-header">
                          <h4>ZFGP4X Compound High Speed Air Bleeding Valve</h4>
                        </div>
                        <div class="text">
                          <p>
                            The main function of the zone control valve is to control the water supply in a certain
                            area. It has the functions of preventing backflow, pressure detection, and drainage test.
                            It is composed of butterfly valve, check valve, water flow indicator, pressure gauge and
                            connecting pipes.
                          </p>
                        </div>
                        <div class="button" style="text-align: center;margin-top: 45px;">
                          <button type="button" class="theme-btn btn-style-one add-to-cart mr-2">Contact</button>
                          <button type="button" class="theme-btn btn-style-one add-to-cart">Feedback</button>
                        </div>
                      </div>
                      <div class="info-column col-md-12 col-sm-12 col-xs-12">
                        <div class="products-info">
                          <!--Product Info Tabs-->
                          <div class="product-info-tabs">
                            <!--Product Tabs-->
                            <div class="prod-tabs tabs-box">
                              <!--Tab Btns-->
                              <ul class="tab-btns tab-buttons clearfix">
                                <li data-tab="#prod-details" class="tab-btn active-btn">Description</li>
                                <li data-tab="#prod-specification" class="tab-btn">Specification</li>
                                <li data-tab="#prod-dimension" class="tab-btn">Dimension</li>
                              </ul>
                              <!--Tabs Container-->
                              <div class="tabs-content" style="padding: 15px;">
                                <!--Tab / Active Tab-->
                                <div class="tab active-tab" id="prod-details">
                                  <div class="content">
                                    <div class="p">
                                      <p>
                                        The main function of the zone control valve is to control the water supply in
                                        a certain area. It has the functions of preventing backflow, pressure
                                        detection, and drainage test. It is composed of butterfly valve, check valve,
                                        water flow indicator, pressure gauge and connecting pipes.<br>
                                        The main function of the zone control valve is to control the water supply in
                                        a certain area. It has the functions of preventing backflow, pressure
                                        detection, and drainage test. It is composed of butterfly valve, check valve,
                                        water flow indicator, pressure gauge and connecting pipes.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--End Product Info Tabs-->
                        </div>
                      </div>

                      <div class="info-column col-md-12 col-sm-12 col-xs-12">
                        <!--Related Products-->
                        <div class="related-products">
                          <div class="sec-title">
                            <h2>Related Products</h2>
                          </div>
                          <div class="row clearfix related-products-caraousel owl-carousel owl-theme"
                            style="padding-left: 20px;">
                            <!--Shop Item-->
                            <swiper :slides-per-view="5" :space-between="10" @swiper="onSwiper"
                              @slideChange="onSlideChange">
                              <swiper-slide>
                                <div class="product-item">
                                  <div class="inner-box imgZoom">
                                    <a href="#">
                                      <div class="image">
                                        <img src="assets/images/example-1.png" alt="" />
                                        <div class="tag-outer">
                                          <div class="product-tag">New</div>
                                        </div>
                                      </div>
                                      <div class="lower-content">
                                        <div class="clearfix_">
                                          <div class="pull-left">
                                            <h5>
                                              <a href="#" class="prod-title">GROOVED WET ALARM CHECK VALVE, FIG#
                                                ZSFZ8X9</a>
                                            </h5>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide>
                                <div class="product-item">
                                  <div class="inner-box imgZoom">
                                    <a href="#">
                                      <div class="image">
                                        <img src="assets/images/example-1.png" alt="" />
                                        <div class="tag-outer">
                                          <div class="product-tag">New</div>
                                        </div>
                                      </div>
                                      <div class="lower-content">
                                        <div class="clearfix_">
                                          <div class="pull-left">
                                            <h5>
                                              <a href="#" class="prod-title">GROOVED WET ALARM CHECK VALVE, FIG#
                                                ZSFZ8X9</a>
                                            </h5>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide>
                                <div class="product-item">
                                  <div class="inner-box imgZoom">
                                    <a href="#">
                                      <div class="image">
                                        <img src="assets/images/example-1.png" alt="" />
                                        <div class="tag-outer">
                                          <div class="product-tag">New</div>
                                        </div>
                                      </div>
                                      <div class="lower-content">
                                        <div class="clearfix_">
                                          <div class="pull-left">
                                            <h5>
                                              <a href="#" class="prod-title">GROOVED WET ALARM CHECK VALVE, FIG#
                                                ZSFZ8X9</a>
                                            </h5>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide>
                                <div class="product-item">
                                  <div class="inner-box imgZoom">
                                    <a href="#">
                                      <div class="image">
                                        <img src="assets/images/example-1.png" alt="" />
                                        <div class="tag-outer">
                                          <div class="product-tag">New</div>
                                        </div>
                                      </div>
                                      <div class="lower-content">
                                        <div class="clearfix_">
                                          <div class="pull-left">
                                            <h5>
                                              <a href="#" class="prod-title">GROOVED WET ALARM CHECK VALVE, FIG#
                                                ZSFZ8X9</a>
                                            </h5>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide>
                                <div class="product-item">
                                  <div class="inner-box imgZoom">
                                    <a href="#">
                                      <div class="image">
                                        <img src="assets/images/example-1.png" alt="" />
                                        <div class="tag-outer">
                                          <div class="product-tag">New</div>
                                        </div>
                                      </div>
                                      <div class="lower-content">
                                        <div class="clearfix_">
                                          <div class="pull-left">
                                            <h5>
                                              <a href="#" class="prod-title">GROOVED WET ALARM CHECK VALVE, FIG#
                                                ZSFZ8X9</a>
                                            </h5>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide>
                                <div class="product-item">
                                  <div class="inner-box imgZoom">
                                    <a href="#">
                                      <div class="image">
                                        <img src="assets/images/example-1.png" alt="" />
                                        <div class="tag-outer">
                                          <div class="product-tag">New</div>
                                        </div>
                                      </div>
                                      <div class="lower-content">
                                        <div class="clearfix_">
                                          <div class="pull-left">
                                            <h5>
                                              <a href="#" class="prod-title">GROOVED WET ALARM CHECK VALVE, FIG#
                                                ZSFZ8X9</a>
                                            </h5>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide>
                                <div class="product-item">
                                  <div class="inner-box imgZoom">
                                    <a href="#">
                                      <div class="image">
                                        <img src="assets/images/example-1.png" alt="" />
                                        <div class="tag-outer">
                                          <div class="product-tag">New</div>
                                        </div>
                                      </div>
                                      <div class="lower-content">
                                        <div class="clearfix_">
                                          <div class="pull-left">
                                            <h5>
                                              <a href="#" class="prod-title">GROOVED WET ALARM CHECK VALVE, FIG#
                                                ZSFZ8X9</a>
                                            </h5>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </swiper-slide>
                            </swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  // IonButtons,
  // IonButton,
  IonModal,
  // IonSegment,
  // IonSegmentButton,
  // IonHeader,
  IonContent,
  IonPage,
  // IonToolbar,
  // IonTitle,
  // IonItem,
  // IonList,
  // IonAvatar,
  // IonImg,
  // IonLabel
} from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineComponent } from 'vue';

import 'swiper/css';
import 'swiper/css/bundle';
import '@ionic/vue/css/ionic-swiper.css';

export default defineComponent({
  name: 'ModalSection',
  components: {
    // IonButtons,
    // IonButton,
    IonModal,
    Swiper,
    SwiperSlide,
    // IonSegment,
    // IonSegmentButton,
    // IonHeader,
    IonContent,
    IonPage,
    // IonToolbar,
    // IonTitle,
    // IonItem,
    // IonList,
    // IonAvatar,
    // IonImg,
    // IonLabel
  }
  // methods: {
  //   dismiss() {
  //     this.$refs.modal.$el.dismiss();
  //   },
  // },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");

p, ul {
  font-family: 'Raleway', sans-serif;
}

#modal-desc {
  font-family: 'Raleway', sans-serif;
  color: #848484;
}

#modal-item-title {
  color: #222222;
}

#line-modal {}

ion-modal {
  /* margin-top: 10px; */
  --height: 95%;
  --width: 1250px;
  /* width: 2000px; */
  --border-radius: 10px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

ion-modal::part(backdrop) {
  background: rgb(0, 0, 0);
  opacity: 1;
}

ion-modal ion-toolbar {
  --background: rgb(14 116 144);
  --color: white;
}

h1 {
  padding: 20px;
}

.product-details .basic-details {
  position: relative;
  margin-bottom: 32px;
}

.product-details .image-column,
.product-details .info-column {
  margin-bottom: 20px;
}

.product-details .image-column .image-box img {
  position: relative;
  display: block;
  width: 100%;
  background-color: #f7f7f7;
}

.product-details .basic-details .details-header {
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eeeeee;
}

.product-details .basic-details .details-header h4 {
  font-size: 30px;
  font-weight: 400;
  margin: -5px 0px 5px;
  line-height: 1.4em;
  color: #222222;
}

.product-details .basic-details .details-header h4 a {
  color: #333333;
}

.product-details .basic-details .details-header .rating {
  font-size: 14px;
  color: #e31528;
  margin-bottom: 10px;
}

.product-details .basic-details .details-header .rating .fa {
  display: inline-block;
  margin-right: 2px;
}

.product-details .basic-details .details-header .rating .txt {
  font-size: 14px;
  padding-left: 10px;
  color: #777777;
}

.product-details .basic-details .reviews {
  display: inline-block;
  color: #848484;
  margin-left: 3px;
  font-size: 16px;
}

.product-details .basic-details .details-header .item-price {
  font-size: 24px;
  font-weight: 400;
  color: #e31528;
  line-height: 24px;
  letter-spacing: 1px;
}

.product-details .basic-details .prod-info {
  margin-bottom: 15px;
  line-height: 1.6em;
  font-size: 13px;
}

.product-details .basic-details .prod-info strong {
  font-weight: 700;
  color: #111111;
}

.product-details .basic-details .text {
  margin-bottom: 20px;
  color: #848484;
  font-size: 16px;
  line-height: 1.8em;
}

.product-details .basic-details .item-quantity .field-label {
  float: left;
  font-weight: 700;
  font-size: 14px;
  line-height: 32px;
  display: inline-block;
  padding-right: 20px;
}

.product-details .basic-details .quantity-spinner,
.cart-section input.quantity-spinner {
  line-height: 24px;
  padding: 10px 15px !important;
  height: 46px !important;
  box-shadow: none !important;
}

.product-details .basic-details .bootstrap-touchspin .input-group-btn-vertical>.btn,
.cart-section .bootstrap-touchspin .input-group-btn-vertical>.btn {
  padding: 11px 10px;
  background: #f4f5f6;
}

.product-details .bootstrap-touchspin .input-group-btn-vertical i,
.cart-section .bootstrap-touchspin .input-group-btn-vertical i {
  top: 6px;
}

.product-details .basic-details .item-quantity {
  position: relative;
  float: left;
  width: 85px;
  margin-bottom: 25px;
  margin-right: 20px;
}

.product-details .basic-details .item-quantity .field-label {
  float: left;
  font-weight: 700;
  font-size: 14px;
  line-height: 32px;
  display: inline-block;
  padding-right: 20px;
}

.product-details .basic-details .quantity-spinner,
.cart-table input.quantity-spinner {
  font-size: 18px;
  line-height: 24px;
  padding: 10px 15px !important;
  height: 54px !important;
  box-shadow: none !important;
  font-family: 'Montserrat', sans-serif;
}

.product-details .basic-details .bootstrap-touchspin .input-group-btn-vertical>.btn,
.cart-table .bootstrap-touchspin .input-group-btn-vertical>.btn {
  padding: 13px 10px;
  background: #f4f5f6;
  border-radius: 0px;
}

.product-details .bootstrap-touchspin .input-group-btn-vertical i,
.cart-table .bootstrap-touchspin .input-group-btn-vertical i {
  top: 8px;
}

.product-details .basic-details .add-to-cart {
  padding: 13px 37px;
}

.product-details .basic-details .expired {
  position: relative;
  color: #e31528;
  font-size: 16px;
  margin-bottom: 25px;
}

.prod-tabs {
  position: relative;
  margin-bottom: 50px;
}

.prod-tabs .tab-btns {
  position: relative;
  z-index: 1;
  border-bottom: 1px solid #eeeeee;
}

.prod-tabs .tab-btns .tab-btn {
  position: relative;
  top: 1px;
  display: block;
  float: left;
  margin-right: 5px;
  font-size: 16px;
  background: #f4f4f4;
  color: #222222;
  border: 1px solid #f4f4f4;
  text-transform: capitalize;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  padding: 12px 18px 10px;
  transition: all 500ms ease;
  border-radius: 5px 5px 0px 0px;
  font-family: 'Montserrat', sans-serif;
}

.prod-tabs .tab-btns .tab-btn.active-btn:after {
  position: absolute;
  content: '';
  left: 0px;
  bottom: -1px;
  width: 100%;
  height: 1px;
  background-color: #ffffff;
}

.prod-tabs .tab-btns .tab-btn:hover,
.prod-tabs .tab-btns .tab-btn.active-btn {
  color: #e31528;
  background: #ffffff;
}

.prod-tabs .tabs-content {
  position: relative;
}

.prod-tabs .tabs-content .tab {
  position: relative;
  padding: 25px 0px;
  display: none;
  border-top: 0px;
}

.prod-tabs .tabs-content .tab.active-tab {
  display: block;
}

.prod-tabs .tabs-content .tab p {
  font-size: 16px;
  line-height: 1.7em;
  color: rgba(18, 18, 26, 0.80);
  margin-bottom: 20px;
}

.prod-tabs .tabs-content .tab p:last-child {
  margin-bottom: 0px;
}

.prod-tabs .tabs-content .tab h3,
.prod-tabs .tabs-content .tab h4,
.prod-tabs .tabs-content .tab h5,
.prod-tabs .tabs-content .tab h6 {
  margin-bottom: 15px;
}

.prod-tabs .tabs-content .tab h4 {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #222222;
}

.prod-tabs .reviews-container {
  position: relative;
  padding-bottom: 1px;
}

.prod-tabs .tabs-content .tab .title {
  position: relative;
  color: #212121;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
}

.prod-tabs .reviews-container .review-box {
  position: relative;
  margin-bottom: 35px;
  padding-left: 120px;
  min-height: 130px;
  padding-bottom: 30px;
  border-bottom: 1px solid #f0f0f0;
}

.prod-tabs .reviews-container .rev-thumb {
  position: absolute;
  left: 0px;
  top: 5px;
  width: 100px;
  height: 100px;
  background: #ffffff;
  border-radius: 3px;
  margin-bottom: 20px;
}

.prod-tabs .reviews-container .rev-thumb img {
  display: block;
  width: 100%;
}

.prod-tabs .reviews-container .rev-content {
  position: relative;
  background: #ffffff;
}

.prod-tabs .reviews-container .rev-header {
  position: relative;
}

.prod-tabs .reviews-container .rev-header h4 {
  float: left;
  line-height: 30px;
  font-size: 19px;
  color: #222222;
  text-transform: capitalize;
  font-weight: 400;
  margin-bottom: 10px;
}

.prod-tabs .reviews-container .rev-header .rating {
  position: relative;
  float: left;
  margin-left: 20px;
  color: #e31528;
  line-height: 30px;
  font-size: 14px;
}

.prod-tabs .reviews-container .rev-header .rating .fa {
  margin-right: 3px;
}

.prod-tabs .reviews-container .rev-option {
  font-size: 14px;
  color: #9e9e9e;
}

.prod-tabs .reviews-container .rev-option a {
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
}

.prod-tabs .reviews-container .rev-text {
  font-size: 16px;
  color: #848484;
  line-height: 1.7em;
  margin-bottom: 5px;
}

.prod-tabs .reviews-container .reply {
  position: relative;
  color: #e31528;
  font-size: 16px;
  font-weight: 500;
}
</style>