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
									<div class="image">
										<img src="/assets/images/about.jpg" alt="" />
									</div>
								</div>
								<div class="inner-content-column col-md-8 col-sm-7 col-xs-12">
									<div class="text">
										<h3>USER-CENTERED,QUALITY-ORIENTED</h3>
										<p>
											The world's leading manufacturer and solution specialist for fluid transfer products.
											Founded in 1961, Meide Group has developed into a modern and diversified multinational enterprise
											group focusing on fluid transportation products and services. The sales are located in more than
											130 countries and regions around the world, and the products and services have been successfully
											applied in water, fire, gas, HVAC, irrigation and other fields as well as in major landmark
											projects around the world, such as Burj Khalifa in Dubai and New World Trade Center in New
											York.Shanghai Tower, West-East Power Transmission UHV transmission lines, Beijing-Shanghai
											high-speed rail and municipal, medical, clean workshops, urban housing, etc.
										</p>
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

export default defineComponent({
	name: "ApiTest",
	components: {
		IonContent,
		// IonHeader,
		IonPage,
		// IonTitle,
		// IonToolbar
	},
});
</script>

<style scoped>
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


</style>