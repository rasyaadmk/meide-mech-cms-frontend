<template>
  <ion-page>
    <ion-content>
      <section class="product-section-list" id="product-list" @click="setOpen(false)">
        <div class="row clearfix bgbg" style="margin: 0">
          <div class="col-sm-12 col-md-12 col-lg-12" style="
              padding: 0px;
              background-color: #e31528 !important;
              background: url('assets/images/batik.svg');
            ">
            <div class="container" style="background-color: #fff; padding: 10px">
              <div class="row clearfix" style="padding: 20px">
                <!--Sidebar Side-->
                <div class="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
                  <aside class="sidebar default-sidebar">
                    <!--Blog Category Widget-->
                    <div class="sidebar-widget sidebar-blog-category">
                      <div class="sidebar-title">
                        <h2>Categories</h2>
                      </div>

                      <ion-accordion-group :multiple="true" :value="['first', 'third']">
                        <ion-accordion value="first">
                          <ion-item slot="header" color="light">
                            <ion-label> VALVE</ion-label>
                          </ion-item>
                          <div class="ion-padding" slot="content">
                            Alarm Valve
                          </div>
                          <div class="ion-padding" slot="content">
                            Ball Valve
                          </div>
                          <div class="ion-padding" slot="content">
                            Copper end water test valve
                          </div>
                          <div class="ion-padding" slot="content">Hydrant</div>
                          <div class="ion-padding" slot="content">
                            Gate Valve
                          </div>
                          <div class="ion-padding" slot="content">
                            Butterfly Valve
                          </div>
                          <div class="ion-padding" slot="content">
                            Check Valve
                          </div>
                          <div class="ion-padding" slot="content">Strainer</div>
                          <div class="ion-padding" slot="content">
                            Air Valve
                          </div>
                          <div class="ion-padding" slot="content">
                            Globe Valve
                          </div>
                          <div class="ion-padding" slot="content">
                            Balance Valve
                          </div>
                          <div class="ion-padding" slot="content">
                            Hydraulic Control Valve
                          </div>
                          <div class="ion-padding" slot="content">
                            Flexible Rubber Joint
                          </div>
                        </ion-accordion>
                      </ion-accordion-group>
                    </div>
                  </aside>
                </div>

                <!--Content Side-->
                <div class="content-side col-lg-9 col-md-8 col-sm-12 col-xs-12" style="padding: 0">
                  <div class="search-box">
                    <div class="search-box-product">
                      <form method="post" action="https://danslacuisinededede.com/brixals/email.php">
                        <div class="form-group">
                          <input type="search" name="search-field-product" value="" placeholder="Search..." required />
                          <button type="submit">
                            <span class="icon fa fa-search" aria-hidden="true">
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="row">
                      <div class="col-md-10 col-md-10 col-sm-10 col-xs-10">
                        <div class="breadcrumb-list-product">
                          Menampilkan 1 - 10 barang dari total 20 untuk "VALVE /
                          Alarm Valve"
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="our-product">
                    <!-- Backdrop -->
                    <div class="backdrop"></div>
                    <!-- [END] - Backdrop -->
                    <div class="row clearfix our-product-row-item">
                      <!--Shop Item-->
                      <div class="product-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div class="inner-box imgZoom">
                          <div class="image">
                            <img src="/assets/images/example-1.png" alt="" @click="setOpen(true)" />
                            <ion-modal :is-open="isOpen">
                              <ion-content>
                                <div class="modal-content">
                                  <div class="modal-body">
                                    <div class="shop-single">
                                      <div class="product-details">
                                        <div class="basic-details">
                                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                                            @click="setOpen(false)">
                                            <span aria-hidden="true">&times;</span>
                                          </button>
                                          <div class="row clearfix">
                                            <div class="image-column col-md-5 col-sm-6 col-xs-12">
                                              <!-- <figure class="image-box"><a href="assets/front/images/resource/products/13.jpg" class="lightbox-image" title="Image Caption Here"><img src="assets/front/images/resource/products/13.jpg" alt=""></a></figure> -->
                                              <section class="product-page">
                                                <div class="thumbnails">
                                                  <div class="thumb active">
                                                    <a href="assets/images/example-1.png">
                                                      <img src="assets/images/example-1.png"
                                                        alt="thumb-air-force-right-side">
                                                    </a>
                                                  </div>
                                                  <div class="thumb">
                                                    <a href="assets/images/example-2.png">
                                                      <img src="assets/images/example-2.png"
                                                        alt="thumb-air-force-left-side">
                                                    </a>
                                                  </div>
                                                  <div class="thumb">
                                                    <a href="assets/images/example-3.png">
                                                      <img src="assets/images/example-3.png"
                                                        alt="thumb-air-force-bottom-side">
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
                                                  The main function of the zone control valve is to control the water
                                                  supply in a certain
                                                  area. It has the functions of preventing backflow, pressure detection,
                                                  and drainage test.
                                                  It is composed of butterfly valve, check valve, water flow indicator,
                                                  pressure gauge and
                                                  connecting pipes.
                                                </p>
                                              </div>
                                              <div class="button" style="text-align: center;margin-top: 45px;">
                                                <button type="button"
                                                  class="theme-btn btn-style-one add-to-cart mr-2">Contact</button>
                                                <button type="button"
                                                  class="theme-btn btn-style-one add-to-cart">Feedback</button>
                                              </div>
                                            </div>
                                            <div class="info-column col-md-12 col-sm-12 col-xs-12">
                                              <div class="products-info">
                                                <!--Product Info Tabs-->
                                                <div class="product-info-tabs">
                                                  <!--Product Tabs-->
                                                  <nav>
                                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                      <button class="nav-link active" id="nav-home-tab"
                                                        data-toggle="tab" data-target="#nav-home" type="button"
                                                        role="tab" aria-controls="nav-home" aria-selected="true"
                                                        style="color: black;">Description</button>
                                                      <button class="nav-link" id="nav-profile-tab" data-toggle="tab"
                                                        data-target="#nav-profile" type="button" role="tab"
                                                        aria-controls="nav-profile" aria-selected="false"
                                                        style="color: black;">Specification</button>
                                                      <button class="nav-link" id="nav-contact-tab" data-toggle="tab"
                                                        data-target="#nav-contact" type="button" role="tab"
                                                        aria-controls="nav-contact" aria-selected="false"
                                                        style="color: black;">Dimension</button>

                                                    </div>
                                                  </nav>
                                                  <div class="tab-content" id="nav-tabContent">
                                                    <div class="tab-pane fade show active mt-3" id="nav-home" role="tabpanel"
                                                      aria-labelledby="nav-home-tab">
                                                      <p>The main function of the zone control valve is to control the
                                                        water supply in
                                                        a certain area. It has the functions of preventing backflow,
                                                        pressure
                                                        detection, and drainage test. It is composed of butterfly valve,
                                                        check valve,
                                                        water flow indicator, pressure gauge and connecting pipes.<br>
                                                        The main function of the zone control valve is to control the
                                                        water supply in
                                                        a certain area. It has the functions of preventing backflow,
                                                        pressure
                                                        detection, and drainage test. It is composed of butterfly valve,
                                                        check valve,
                                                        water flow indicator, pressure gauge and connecting pipes.</p>
                                                    </div>
                                                    <div class="tab-pane fade mt-3" id="nav-profile" role="tabpanel"
                                                      aria-labelledby="nav-profile-tab">
                                                      <div class="tab" id="prod-specification">
                                                        <ul>
                                                          <li>1. Valve Body:ASTM A536,65-45-12</li>
                                                          <li>2. Floating Ball : AISI 304</li>
                                                          <li>3. Stem: AISI 304</li>
                                                          <li>4. Gasket:EPDM</li>
                                                          <li>5. Guide Sleeve: H62</li>
                                                          <li>6. Guide Sleeve: H62</li>
                                                          <li>7. Draft Hood: ASTM A536,65-45-12</li>
                                                          <li>9. Epoxy Coating Color: Body RAL5005</li>
                                                          <li>10. Pressure Rating: 300PSI</li>
                                                          <li>11. Certification:NO</li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                    <div class="tab-pane fade mt-3" id="nav-contact" role="tabpanel"
                                                      aria-labelledby="nav-contact-tab">
                                                      <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                          <thead>
                                                            <tr>
                                                              <th scope="col" colspan="2" class="text-center">Size</th>
                                                              <th scope="col" class="text-center">Unit Weight</th>
                                                              <th scope="col" class="text-center" rowspan="2">PCS/CTN
                                                              </th>
                                                              <th scope="col" class="text-center" rowspan="2">CTN
                                                                QTY/PLT</th>
                                                              <th scope="col" class="text-center" rowspan="2">Crate or
                                                                PLT QTY / 20" Container</th>
                                                            </tr>
                                                            <tr>
                                                              <th scope="col" class="text-center">Inch</th>
                                                              <th scope="col" class="text-center">MM</th>
                                                              <th scope="col" class="text-center">KGS</th>
                                                            </tr>
                                                          </thead>
                                                          <tbody>
                                                            <tr>
                                                              <td class="text-center">2"</td>
                                                              <td class="text-center">2"</td>
                                                              <td class="text-center">14,86</td>
                                                              <td class="text-center">1</td>
                                                              <td class="text-center">54</td>
                                                              <td class="text-center">20</td>
                                                            </tr>
                                                            <tr>
                                                              <td class="text-center">21/2"</td>
                                                              <td class="text-center">65</td>
                                                              <td class="text-center">16,42</td>
                                                              <td class="text-center">TBC</td>
                                                              <td class="text-center">TBC</td>
                                                              <td class="text-center">TBC</td>
                                                            </tr>
                                                            <tr>
                                                              <td class="text-center">3"</td>
                                                              <td class="text-center">80</td>
                                                              <td class="text-center">21,76</td>
                                                              <td class="text-center">TBC</td>
                                                              <td class="text-center">TBC</td>
                                                              <td class="text-center">TBC</td>
                                                            </tr>
                                                            <tr>
                                                              <td class="text-center">2"</td>
                                                              <td class="text-center">2"</td>
                                                              <td class="text-center">14,86</td>
                                                              <td class="text-center">1</td>
                                                              <td class="text-center">54</td>
                                                              <td class="text-center">20</td>
                                                            </tr>
                                                            <tr>
                                                              <td class="text-center">21/2"</td>
                                                              <td class="text-center">65</td>
                                                              <td class="text-center">16,42</td>
                                                              <td class="text-center">TBC</td>
                                                              <td class="text-center">TBC</td>
                                                              <td class="text-center">TBC</td>
                                                            </tr>
                                                            <tr>
                                                              <td class="text-center">3"</td>
                                                              <td class="text-center">80</td>
                                                              <td class="text-center">21,76</td>
                                                              <td class="text-center">TBC</td>
                                                              <td class="text-center">TBC</td>
                                                              <td class="text-center">TBC</td>
                                                            </tr>
                                                            <tr>
                                                              <td class="text-center">2"</td>
                                                              <td class="text-center">2"</td>
                                                              <td class="text-center">14,86</td>
                                                              <td class="text-center">1</td>
                                                              <td class="text-center">54</td>
                                                              <td class="text-center">20</td>
                                                            </tr>
                                                            <tr>
                                                              <td class="text-center">21/2"</td>
                                                              <td class="text-center">65</td>
                                                              <td class="text-center">16,42</td>
                                                              <td class="text-center">TBC</td>
                                                              <td class="text-center">TBC</td>
                                                              <td class="text-center">TBC</td>
                                                            </tr>
                                                            <tr>
                                                              <td class="text-center">3"</td>
                                                              <td class="text-center">80</td>
                                                              <td class="text-center">21,76</td>
                                                              <td class="text-center">TBC</td>
                                                              <td class="text-center">TBC</td>
                                                              <td class="text-center">TBC</td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
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
                                                <div
                                                  class="row clearfix related-products-caraousel owl-carousel owl-theme"
                                                  style="padding-left: 20px;">
                                                  <!--Shop Item-->
                                                  <swiper :slides-per-view="5" :space-between="10" @swiper="onSwiper"
                                                    @slideChange="onSlideChange" :loop="true" :autoplay="{
                                                      delay: 100,
                                                      disableOnInteraction: false,
                                                    }">
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
                                                                    <a href="#" class="prod-title">GROOVED WET ALARM
                                                                      CHECK VALVE, FIG#
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
                                                                    <a href="#" class="prod-title">GROOVED WET ALARM
                                                                      CHECK VALVE, FIG#
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
                                                                    <a href="#" class="prod-title">GROOVED WET ALARM
                                                                      CHECK VALVE, FIG#
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
                                                                    <a href="#" class="prod-title">GROOVED WET ALARM
                                                                      CHECK VALVE, FIG#
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
                                                                    <a href="#" class="prod-title">GROOVED WET ALARM
                                                                      CHECK VALVE, FIG#
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
                                                                    <a href="#" class="prod-title">GROOVED WET ALARM
                                                                      CHECK VALVE, FIG#
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
                                                                    <a href="#" class="prod-title">GROOVED WET ALARM
                                                                      CHECK VALVE, FIG#
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
                            <div class="tag-outer">
                              <div class="product-tag">New</div>
                            </div>
                          </div>
                          <div class="lower-content">
                            <div class="clearfix_">
                              <div class="pull-left">
                                <h5>
                                  <a href="javascript:void(0);" onclick="popupDetailProduct();"
                                    class="prod-title">GROOVED WET ALARM CHECK VALVE, FIG#
                                    ZSFZ8X9</a>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="button btn-load-more-product-list" style="text-align: center">
                      <button type="button" class="theme-btn btn-style-load-more-product add-to-cart">
                        Load More
                      </button>
                      <div class="content-loader" style="text-align: center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Product List Section-->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonModal,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from "swiper";

import 'swiper/css';
import 'swiper/css/bundle';
import '@ionic/vue/css/ionic-swiper.css';

export default defineComponent({
  name: "CategoriesSection",
  components: {
    Swiper,
    SwiperSlide,
    IonContent,
    IonPage,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonModal
  },

  data() {
    return {
      isOpen: false,
    };
  },
  setup() {
    const onSwiper = () => {
      console.log();
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  methods: {
    setOpen(isOpen: boolean) {
      this.isOpen = isOpen;
    },
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

* {
  margin: 0px;
  padding: 0px;
  border: none;
  outline: none;
}

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

.nav-link {
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

.nav-link:active {
  color: #e31528;
  background: #ffffff;
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
  font-family: "Montserrat", sans-serif;
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

.bgbg {
  background-color: #e31628;
}

.form-group {
  font-family: "Raleway", sans-serif;
  color: #808080;
}

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
  border-bottom: 1px solid rgba(238, 238, 238, 0.5);
}

.sidebar-title h2:after {
  position: absolute;
  content: "";
  left: 0px;
  bottom: -1px;
  width: 45px;
  height: 1px;
  background-color: #e31528;
}

.blog-cat {
  position: relative;
}

.blog-cat li:hover {
  transform: scale(1.1);
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
  font-family: "Raleway", sans-serif;
}

.blog-cat li a:before {
  position: absolute;
  content: "\f114";
  left: 0px;
  top: 0px;
  font-family: "FontAwesome";
}

.blog-cat li a:after {
  position: absolute;
  content: "\f105";
  right: 0px;
  top: 0px;
  font-family: "FontAwesome";
}

.blog-cat li a:hover {
  color: #e31528;
}

.product-item {
  position: relative;
  margin-bottom: 35px;
}

.product-item .inner-box {
  position: relative;
  outline: 15px solid #ffffff;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.product-item .inner-box:before {
  content: "";
  position: absolute;
  left: -15px;
  right: -15px;
  bottom: -15px;
  top: -15px;
  opacity: 0;
  z-index: 10;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 0.6);
  -moz-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 0.6);
  box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 0.6);
}

.product-item .inner-box:hover::before {
  opacity: 1;
}

.product-item .inner-box:hover .image .overlay-box {
  opacity: 1;
}

.product-item .inner-box .image {
  position: relative;
  z-index: 11;
  text-align: center;
  background-color: #fff;
}

.product-item .inner-box .image .overlay-box {
  position: absolute;
  content: "";
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  text-align: center;
  background-color: rgb(227 21 40 / 0.85);
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.product-item .inner-box .image .overlay-box .cart-btn {
  position: relative;
  top: 46%;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 37px;
  display: inline-block;
  margin-top: -25px;
  border: 1px solid #ffffff;
}

.product-item .inner-box .image .tag-outer {
  position: absolute;
  left: 10px;
  top: 10px;
  overflow: hidden;
}

.product-item .inner-box .image .tag-outer .product-tag {
  position: relative;
  width: 96px;
  color: #ffffff;
  left: -36px;
  top: -24px;
  height: 64px;
  background-color: #e31528;
  font-weight: 400;
  line-height: 98px;
  text-align: center;
  font-size: 16px;
  text-transform: capitalize;
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  z-index: 9;
}

.product-item .inner-box .image img {
  max-width: 100%;
  padding: 20px 0px;
  display: inline-block;
}

.product-item .inner-box .lower-content {
  position: relative;
  z-index: 11;
  padding: 20px 0px 0px;
}

.product-item .inner-box .lower-content h5 {
  position: relative;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px;
}

.product-item .inner-box .lower-content h5 a {
  color: #222222;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.product-item .inner-box .lower-content h5 a:hover {
  color: #e31528;
}

.product-item .inner-box:hover .prod-title {
  color: #e31528;
}

.product-item .inner-box .lower-content .price {
  position: relative;
  color: #e31528;
  font-size: 18px;
  font-weight: 400;
}

.product-item .inner-box .lower-content .rating .fa {
  position: relative;
  display: inline-block;
  font-size: 12px;
  color: #e31528;
}

.imgZoom {
  overflow: hidden;
  -webkit-transform: rotate(0);
  transform: rotate(0);
}

.imgZoom img {
  -moz-transition: all 0.8s ease 0s;
  -ms-transition: all 0.8s ease 0s;
  -o-transition: all 0.8s ease 0s;
  -webkit-transition: all 0.8s ease 0s;
  transition: all 0.8s ease 0s;
}

.imgZoom:hover img {
  -moz-transform: scale(1.1, 1.1);
  -ms-transform: scale(1.1, 1.1);
  -o-transform: scale(1.1, 1.1);
  -webkit-transform: scale(1.1, 1.1);
  transform: scale(1.1, 1.1);
}

.blog-cat li:hover {
  transform: scale(1.1);
}

.our-product {
  height: 1570px;
  overflow-x: hidden;
}

.our-product::-webkit-scrollbar {
  width: 5px;
}

.our-product::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  border-radius: 25px;
}

.our-product::-webkit-scrollbar-thumb:hover {
  background: #ababab;
}

.search-box-product input[type="text"],
.search-box-product input[type="search"] {
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

input[name="search-field-product"]:valid {
  border-radius: 15px;
}

.search-box-product button[type="submit"] {
  background-color: #e31528;
  color: #fff;
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

.product-item {
  position: relative;
  margin-bottom: 35px;
}

.product-item .inner-box {
  position: relative;
  outline: 15px solid #ffffff;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.product-item .inner-box:before {
  content: "";
  position: absolute;
  left: -15px;
  right: -15px;
  bottom: -15px;
  top: -15px;
  opacity: 0;
  z-index: 10;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 0.6);
  -moz-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 0.6);
  box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 0.6);
}

.product-item .inner-box:hover::before {
  opacity: 1;
}

.product-item .inner-box:hover .image .overlay-box {
  opacity: 1;
}

.product-item .inner-box .image {
  position: relative;
  z-index: 11;
  text-align: center;
  background-color: #fff;
}

.product-item .inner-box .image .overlay-box {
  position: absolute;
  content: "";
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  text-align: center;
  background-color: rgb(227 21 40 / 0.85);
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.product-item .inner-box .image .overlay-box .cart-btn {
  position: relative;
  top: 46%;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 37px;
  display: inline-block;
  margin-top: -25px;
  border: 1px solid #ffffff;
}

.product-item .inner-box .image .tag-outer {
  position: absolute;
  left: 10px;
  top: 10px;
  overflow: hidden;
}

.product-item .inner-box .image .tag-outer .product-tag {
  position: relative;
  width: 96px;
  color: #ffffff;
  left: -36px;
  top: -24px;
  height: 64px;
  background-color: #e31528;
  font-weight: 400;
  line-height: 98px;
  text-align: center;
  font-size: 16px;
  text-transform: capitalize;
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  z-index: 9;
}

.product-item .inner-box .image img {
  max-width: 100%;
  padding: 20px 0px;
  display: inline-block;
}

.product-item .inner-box .lower-content {
  position: relative;
  z-index: 11;
  padding: 20px 0px 0px;
}

.product-item .inner-box .lower-content h5 {
  position: relative;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px;
}

.product-item .inner-box .lower-content h5 a {
  color: #222222;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.product-item .inner-box .lower-content h5 a:hover {
  color: #e31528;
}

.product-item .inner-box:hover .prod-title {
  color: #e31528;
}

.product-item .inner-box .lower-content .price {
  position: relative;
  color: #e31528;
  font-size: 18px;
  font-weight: 400;
}

.product-item .inner-box .lower-content .rating .fa {
  position: relative;
  display: inline-block;
  font-size: 12px;
  color: #e31528;
}

.search-box-product button[type="submit"]:hover span {
  transform: scale(1.2);
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.breadcrumb-list-product {
  padding: 0px 10px 5px;
  font-family: "Raleway", sans-serif;
  color: #808080;
}

.content-loader {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 90px;
  left: 0;
  right: 0;
  bottom: 30px;
}

.backdrop {
  background-color: #0000006b !important;
  position: absolute;
  z-index: 100;
  width: 100%;
  height: -webkit-fill-available;
  height: inherit;
  filter: brightness(100.5);
  display: none;
}

.option-box:hover {
  transform: scale(1.1);
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.category-product {
  position: relative;
  color: #ffffff;
  font-size: 12px;
}

.bread-crumb-product-list {
  padding: 18px 15px 17px !important;
}

#box {
  z-index: 100;
}

#box:hover {
  /*-webkit-animation: scaleme 1s;*/
}

@-webkit-keyframes scaleme {
  0% {
    -webkit-transform: scale(1);
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(3);
    opacity: 0;
    display: none;
  }
}

#box-sub {
  z-index: 100;
}

#box-sub:hover {
  /*-webkit-animation: scaleme 1s;*/
}

@-webkit-keyframes scaleme {
  0% {
    -webkit-transform: scale(1);
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(3);
    opacity: 0;
    display: none;
  }
}

.gallery-item-two .inner-box .content h3 a:hover {
  position: relative;
  color: #e31528;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

img {
  display: block;
  height: auto;
  max-width: 100%;
}

.product-page {
  display: flex;
}

.img-display-zoom {
  flex-grow: 1;
  max-width: 500px;
}

.zoom {
  display: inline-block;
  height: 100%;
}

.btn-style-load-more-product {
  position: relative;
  padding: 13px 48px;
  line-height: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  background-color: #e31528;
  border: 2px solid #e31528;
  text-transform: capitalize;
  font-family: "Raleway", sans-serif;
}

.btn-style-load-more-product:hover {
  color: #fff;
  transform: scale(1.1);
}
</style>
