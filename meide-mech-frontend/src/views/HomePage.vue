<template>
  <ion-page>
    <ion-content>
      <nav class="navbar navbar-light justify-content-center montserrat" style="background: url('assets/images/batik.svg'); background-color: #e31528;">
        <a href="home" class="navbar-brand d-md-none d-lg-block" style="background-color: white; margin-right: 800px;">
          <img src="assets/images/logo-new.png">
        </a>
        <div>
          <ul class="navbar-text text-white mr-5">
            <li class="font-weight-bold" style="font-size: 18px">Certified Company</li>
            <li>ISO 9001:2005</li>
          </ul>
          <ul class="navbar-text text-white">
            <li class="font-weight-bold" style="font-size: 18px">Best Product</li>
            <li>Service Provider</li>
          </ul>
        </div>
      </nav>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand d-md-inline d-lg-none" href="#">
          <img src="assets/images/logo-new.png" style="width: 50px;">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage
}
  from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonPage
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');

.montserrat {
  font-family: Montserrat, sans-serif;
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
