<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <section class="company-profile">
          <div class="row" style="margin-top: 50px;">
            <div class="col-8">
              <div class="row">
                <h3 id="comp-profile">COMPANY PROFILE</h3>
              </div>
              <div style="display: flex; margin-left: -15px; margin-top: -5px;">
                <hr style="border-color: red; width: 10%;">
                <hr style="width: 90%;">
              </div>
              <div class="row" style="margin-top: 35px;">
                <div class="col-5">
                  <img src="/assets/images/about.jpg" alt="" style="margin-left: -10px;">
                </div>
                <div class="col">
                  <h5 id="comp-detail-title">USER-CENTERED,QUALITY-ORIENTED</h5>
                  <p id="comp-detail">The world's leading manufacturer and solution specialist for fluid transfer
                    products.
                    Founded in 1961,
                    Meide Group has developed into a modern and diversified multinational enterprise group focusing on
                    fluid
                    transportation products and services. The sales are located in more than 130 countries and regions
                    around the world, and the products and services have been successfully applied in water, fire, gas,
                    HVAC, irrigation and other fields as well as in major landmark projects around the world, such as
                    Burj
                    Khalifa in Dubai and New World Trade Center in New York.Shanghai Tower, West-East Power Transmission
                    UHV
                    transmission lines, Beijing-Shanghai high-speed rail and municipal, medical, clean workshops, urban
                    housing, etc.</p>
                  <br>
                  <a href="" id="read-more-btn">Read
                    More</a>
                </div>
              </div>
            </div>
            <div class="col justify-content-center text-center">
              <div id="border-three-icons">
                <div class="row justify-content-center">
                  <div class="col-4">
                    <img src="/assets/figma_assets/fire.svg" alt="" style="height: 75%;">
                  </div>
                  <div class="col-8 text-left" style="margin-top: 5px;">
                    <h5 id="title-right">Fire</h5>
                    <p id="text-right">Reduce Instalation time and labor costs.</p>
                  </div>
                </div>
                <br>
                <div class="row justify-content-center">
                  <div class="col-4">
                    <img src="/assets/figma_assets/irrigation.svg" alt="" style="height: 75px;">
                  </div>
                  <div class="col-8 text-left" style="margin-top: 5px;">
                    <h5 id="title-right">Irrigation</h5>
                    <p id="text-right">Saving water and power resource, reduce the failure rate and improve the
                      efficiency
                      of the water.</p>
                  </div>
                </div>
                <br>
                <div class="row justify-content-center">
                  <div class="col-4">
                    <img src="/assets/figma_assets/water_treatment.svg" alt="" style="height: 75%;">
                  </div>
                  <div class="col-8 text-left" style="margin-top: 5px;">
                    <h5 id="title-right">Water Treatment</h5>
                    <p id="text-right">Explain to you how all Water treatment.</p>
                  </div>
                </div>
                <br>
              </div>
            </div>
          </div>
        </section>
        <section class="why-choose-us">
          <div class="row" style="margin-top: 50px; margin-bottom: 50px;">
            <div class="col-6">
              <div class="row">
                <h5 id="why-choose">Why Choose Us</h5>
                <p id="text-choose">Don't spend time and money on beautiful landscaping if you have not taken water and
                  irrigation issues.</p>
              </div>
              <div class="row">
                <div class="col-1">
                  <img src="/assets/figma_assets/Check.svg" alt="">
                </div>
                <div class="col">
                  <p id="li-choose">Complete specifications, distributed to more than 130 countries and regions</p>
                </div>
              </div>
              <div class="row">
                <div class="col-1">
                  <img src="/assets/figma_assets/Check.svg" alt="">
                </div>
                <div class="col">
                  <p id="li-choose">Excellent quality, the first choice for global customers</p>
                </div>
              </div>
              <div class="row">
                <div class="col-1">
                  <img src="/assets/figma_assets/Check.svg" alt="">
                </div>
                <div class="col">
                  <p id="li-choose">The pioneer of double compression technology in China</p>
                </div>
              </div>
              <div class="row">
                <div class="col-1">
                  <img src="/assets/figma_assets/Check.svg" alt="">
                </div>
                <div class="col">
                  <p id="li-choose">All in house production. Reliable quality assurance</p>
                </div>
              </div>
              <div class="row">
                <div class="col-1">
                  <img src="/assets/figma_assets/Check.svg" alt="">
                </div>
                <div class="col">
                  <p id="li-choose">Intelligent manufacturing of Meide. High quality benefits power grid</p>
                </div>
                <br>
              </div>
            </div>
            <div class="col">
              <img src="/assets/images/page-title-bg.jpg" alt="">
            </div>
          </div>
        </section>
      </div>
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
}
  from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CompanyProfile',
  components: {
    IonContent,
    // IonHeader,
    IonPage,
    // IonTitle,
    // IonToolbar
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Raleway:wght@400;500&display=swap');

#why-choose {
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  color: #777777;
  font-weight: 400;
}

#text-choose {
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  color: #777777;
}

#li-choose {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  color: #777777;
}

#read-more-btn {
  background-color: rgba(227, 21, 40, 1);
  padding: 17px 48px;
  color: white;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
}

#border-three-icons {
  border: solid;
  padding: 40px 20px 20px;
  border-width: 1px;
  border-color: #e4e4e4;
}

#comp-profile,
#comp-detail-title {
  font-family: 'Montserrat', sans-serif;
}

#comp-profile {
  font-weight: 600;
}

#comp-detail-title {
  font-weight: 500;
  font-size: 21px;
}

#comp-detail {
  font-family: 'Raleway', sans-serif;
  color: rgba(132, 132, 132, 1);
}

#title-right {
  font-family: 'Montserrat', sans-serif;
}

#text-right {
  font-family: 'Raleway', sans-serif;
  color: rgba(132, 132, 132, 1);
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
