<template>
  <ion-page>
    <div class="container">
      <div class="row" style="margin-top: 50px;">
        <div class="col-8">
          <div class="row" style="margin-bottom: 35px;">
            <h3>Company Profile</h3>
          </div>
          <div class="row">
            <div class="col-5">
              <img src="/assets/images/about.jpg" alt="" style="margin-left: -10px;">
            </div>
            <div class="col">
              <h5>USER-CENTERED,QUALITY-ORIENTED</h5>
              <p>The world's leading manufacturer and solution specialist for fluid transfer products. Founded in 1961,
                Meide Group has developed into a modern and diversified multinational enterprise group focusing on fluid
                transportation products and services. The sales are located in more than 130 countries and regions
                around the world, and the products and services have been successfully applied in water, fire, gas,
                HVAC, irrigation and other fields as well as in major landmark projects around the world, such as Burj
                Khalifa in Dubai and New World Trade Center in New York.Shanghai Tower, West-East Power Transmission UHV
                transmission lines, Beijing-Shanghai high-speed rail and municipal, medical, clean workshops, urban
                housing, etc.</p>
                <br>
              <a href="" style="background-color: red; padding: 10px; color: white; text-decoration: none;">Read More</a>
            </div>
          </div>
        </div>
        <div class="col justify-content-center text-center">
          3 of 3
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import {
  // IonContent, 
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
    // IonContent,
    // IonHeader,
    IonPage,
    // IonTitle,
    // IonToolbar
  }
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
