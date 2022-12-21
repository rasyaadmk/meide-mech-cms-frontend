<template>
  <ion-page>
    <ion-content>
      <!--Main Footer-->
      <footer class="main-footer-two">
        <div class="auto-container">
          <!-- info section -->
          <div class="info-section">
            <div class="row">
              <div class="left-column col-md-4 col-sm-12">
                <div class="inner-box">
                  <div class="icon-box">
                    <span class="flaticon-phone"></span>
                  </div>
                  <h4>Call Center</h4>
                  <h2>+44 567 89012</h2>
                </div>
              </div>
              <div class="right-column col-md-8 col-sm-12">
                <div class="clearfix">
                  <div class="pull-left"><h4>Newsletter Subscribe</h4></div>
                  <div class="pull-left form-column">
                    <form action="#" class="subscribe-form">
                      <input type="email" placeholder="Email Address ..." />
                      <button class="thm-btn btn-style-one">
                        Subscribe Us
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Widgets Section-->
          <div class="widgets-section">
            <div class="row clearfix">
              <!--Big Column-->
              <div class="big-column col-md-6 col-sm-12 col-xs-12">
                <div class="row clearfix">
                  <!--Footer Column-->
                  <div class="footer-column col-md-6 col-sm-6 col-xs-12">
                    <div class="footer-widget-two logo-widget">
                      <div class="footer-logo">
                        <figure>
                          <a href="index-2.html"
                            ><img src="assets/images/logo-new.png" alt=""
                          /></a>
                        </figure>
                      </div>
                      <div class="widget-content">
                        <div class="text">
                          The world's leading manufacturer and solution
                          specialist for fluid transfer products.
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Footer Column-->
                  <div class="footer-column col-md-6 col-sm-6 col-xs-12">
                    <div class="footer-widget-two links-widget-two">
                      <h2>Usefull links</h2>
                      <ul class="links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Projects</a></li>
                        <li><a href="#">Client Reviews</a></li>
                        <li><a href="#">Private Policy</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!--Big Column-->
              <div class="big-column col-md-6 col-sm-12 col-xs-12">
                <div class="row clearfix">
                  <!--Footer Column-->
                  <div class="footer-column col-md-6 col-sm-6 col-xs-12">
                    <div class="footer-widget-two links-widget-two">
                      <h2>SOLUTION</h2>
                      <ul class="links">
                        <li><a href="#">Grooved Coupling</a></li>
                        <li><a href="#">Check Valve</a></li>
                      </ul>
                    </div>
                  </div>

                  <!--Footer Column-->
                  <div class="footer-column col-md-6 col-sm-6 col-xs-12">
                    <div class="footer-widget-two working-hour-widget">
                      <h2>Working Hours</h2>
                      <ul>
                        <li>
                          Mon to Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                          &nbsp;&nbsp;&nbsp;&nbsp; 09 am - 06 pm
                        </li>
                        <li>
                          Satday
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10 am - 04 pm
                        </li>
                        <li>
                          Sunday
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          :
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <span class="theme_color">Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Footer Bottom-->
        <div class="footer-bottom">
          <div class="auto-container">
            <div class="row clearfix">
              <div class="column col-md-6 col-sm-12 col-xs-12">
                <div class="copyright">
                  Copyright © 2022
                  <a class="theme_color" href="#">Medeimech</a>, All Right
                  Reserved
                </div>
              </div>
              <!--Social Column-->
              <div class="social-column col-md-6 col-sm-12 col-xs-12">
                <ul class="social-icon-two">
                  <li>
                    <a href="#"><span class="fa fa-facebook"></span></a>
                  </li>
                  <li>
                    <a href="#"><span class="fa fa-twitter"></span></a>
                  </li>
                  <li>
                    <a href="#"><span class="fa fa-skype"></span></a>
                  </li>
                  <li>
                    <a href="#"><span class="fa fa-linkedin"></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!--Main Footer-->
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
  name: "FooterSection",
  components: {
    IonContent,
    // IonHeader,
    IonPage,
    // IonTitle,
    // IonToolbar
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

input,
button,
select,
textarea {
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

.main-footer {
  position: relative;
}

.main-footer:before {
  position: absolute;
  content: "";
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba(24, 78, 157, 0.95);
}

.main-footer .widgets-section {
  position: relative;
  padding: 80px 0px 30px;
}

.main-footer .footer-column {
  position: relative;
  margin-bottom: 40px;
}

.main-footer .logo-widget .footer-logo {
  position: relative;
  margin-bottom: 30px;
}

.main-footer .logo-widget .text {
  position: relative;
  color: #dedede;
  font-size: 16px;
  letter-spacing: -0.02px;
  line-height: 1.7em;
  margin-bottom: 25px;
}

.footer-widget h2 {
  position: relative;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-widget h2:before {
  position: absolute;
  content: "";
  left: 0px;
  bottom: -1px;
  width: 70px;
  height: 1px;
  background-color: #e31528;
}

.contact-widget .contact-email {
  position: relative;
  color: #e31528;
  font-size: 16px;
  line-height: 1.4em;
  display: inline-block;
  margin-top: 15px;
}

.main-footer .footer-bottom {
  position: relative;
  padding: 22px 0px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.main-footer .footer-bottom .copyright {
  position: relative;
  color: #afafb5;
  font-size: 16px;
  font-weight: 400;
}

.main-footer .footer-bottom .social-column {
  text-align: right;
}

.main-footer-two {
  position: relative;
  background: #121c25;
}

.main-footer-two .widgets-section {
  position: relative;
  padding: 80px 0px 0px;
}

.main-footer-two .footer-column {
  position: relative;
  margin-bottom: 40px;
}

.main-footer-two .logo-widget .footer-logo {
  position: relative;
  margin-bottom: 30px;
}

.main-footer-two .logo-widget .text {
  position: relative;
  color: #848484;
  font-size: 16px;
  line-height: 1.7em;
  margin-bottom: 15px;
}

.main-footer-two .logo-widget ul li {
  color: #848484;
  font-size: 16px;
  margin-bottom: 5px;
}

.main-footer-two .logo-widget ul li i {
  color: #e31528;
  margin-right: 10px;
}

.main-footer-two .logo-widget ul li {
  color: #848484;
  font-size: 16px;
  margin-bottom: 5px;
}

.main-footer-two .logo-widget ul li span {
  color: #e31528;
  font-weight: 500;
}

.footer-widget-two h2 {
  position: relative;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-widget-two h2:before {
  position: absolute;
  content: "";
  left: 0px;
  bottom: -1px;
  width: 70px;
  height: 1px;
  background-color: #e31528;
}

/*Link Widget*/

.links-widget-two .links {
  position: relative;
}

@media (min-width: 992px) {
  .links-widget-two {
    padding-left: 50px;
  }
}

.links-widget-two .links li {
  position: relative;
  margin-bottom: 7px;
}

.links-widget-two .links li a {
  position: relative;
  color: #848484;
  font-size: 16px;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.links-widget-two .links li a:hover {
  color: #ffffff;
}

.links-widget-two .links li a:before {
  position: absolute;
  content: "";
}

.contact-widget-two .contact-email {
  position: relative;
  color: #e31528;
  font-size: 16px;
  line-height: 1.4em;
  display: inline-block;
  margin-top: 15px;
}
/* working-hour-widget */

.working-hour-widget {
  position: relative;
}

.working-hour-widget ul li {
  color: #848484;
  font-size: 16px;
  margin-bottom: 5px;
}

.working-hour-widget {
  position: relative;
}

.working-hour-widget .discount {
  position: relative;
  border: 2px dashed #353e45;
  padding: 25px 20px 10px;
  margin-top: 26px;
  text-align: center;
}

.working-hour-widget .discount h4 {
  color: #fff;
  font-size: 22px;
}

.working-hour-widget .discount h4 span {
  font-size: 36px;
  color: #e31528;
}

.working-hour-widget .discount p {
  color: #e31528;
}

/*footer-bottom*/
.main-footer-two .footer-bottom {
  position: relative;
  padding: 22px 0px;
  background: #0b151e;
}

.main-footer-two .footer-bottom .copyright {
  position: relative;
  color: #afafb5;
  font-size: 16px;
  font-weight: 400;
  margin-top: 6px;
}

.main-footer-two .footer-bottom .social-column {
  text-align: right;
}

.info-section {
  position: relative;
  padding: 0 30px;
  padding-top: 30px;
  background: #19232c;
  z-index: 10;
  -webkit-animation-name: floating;
  -webkit-animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
  -moz-animation-name: floating;
  -moz-animation-duration: 3s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: ease-in-out;
}

.info-section .left-column .inner-box {
  position: relative;
  padding-left: 65px;
  border-right: 1px solid #2a343c;
}

.info-section .left-column .icon-box {
  position: absolute;
  left: 0;
  font-size: 50px;
  color: #e31528;
  top: 17px;
}

.info-section .left-column h4 {
  color: #fff;
}

.info-section .left-column h2 {
  color: #e31528;
}

.info-section .right-column {
  margin-top: 9px;
}

.info-section .right-column h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  margin: 9px 0;
  margin-right: 30px;
}

.info-section .right-column h4:before {
  position: absolute;
  content: "\f118";
  font-family: Flaticon;
  font-size: 80px;
  font-style: normal;
  margin-left: 20px;
  left: -23px;
  z-index: -1;
  color: #202a33;
}

.info-section .form-column {
  width: 67%;
}

.info-section input {
  width: calc(100% - 215px);
  height: 50px;
  padding: 0 15px;
  border: 1px solid rgba(244, 244, 244, 0.07);
  background: transparent;
  margin-bottom: 36px;
}

.info-section .btn-style-one {
  width: auto;
  padding: 11px 44px;
  margin-left: 20px;
  margin-bottom: 20px;
}

.info-section .social-icon-three {
  margin-bottom: 36px;
}

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
  font-family: "Raleway", sans-serif;
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
  font-family: "Raleway", sans-serif;
  border: 2px solid rgba(255, 255, 255, 0.5);
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
  font-family: "Raleway", sans-serif;
}

.btn-style-three:hover {
  background: #e31528;
  color: #ffffff;
  border-color: #e31528;
}

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

.styled-form {
  position: relative;
}

.styled-form .form-group {
  position: relative;
  margin-bottom: 25px;
  font-size: 14px;
  color: #9e9e9e;
}

.checkout-section .styled-form .form-group {
  position: relative;
  margin-bottom: 20px;
}

.styled-form .form-group .check-box {
  line-height: 24px;
  font-size: 15px;
  font-weight: normal;
  padding-top: 5px;
  color: #1f1f1f;
}

.styled-form .form-group .check-box label {
  position: relative;
  top: -1px;
  font-weight: normal;
  padding: 0px;
  font-size: 15px;
  cursor: pointer;
}

.styled-form .pull-left label,
.styled-form .pull-right label {
  cursor: pointer;
  font-weight: 400;
}

.styled-form .form-group .adon-icon {
  position: absolute;
  top: 50%;
  margin-top: -10px;
  right: 10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 15px;
  color: #999999;
  z-index: 2;
}

.styled-form .form-group .field-label {
  display: block;
  color: #1f1f1f;
  text-transform: capitalize;
  font-size: 16px;
  margin-bottom: 7px;
  font-weight: 400;
}

.styled-form select {
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;

  cursor: pointer;
}

.styled-form select option {
  text-indent: 20px;
}

.styled-form textarea {
  resize: none;
  height: 110px;
}

.styled-form input:focus,
.styled-form select:focus,
.styled-form textarea:focus {
  border-color: #e31528;
}

.styled-form .form-group .theme-btn {
  min-width: 150px;
  text-align: center;
  padding: 10px 30px;
}

.styled-form .forgot {
  font-size: 14px;
}

.social-links-two a {
  position: relative;
  display: inline-block;
  font-size: 14px;
  width: 42px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  color: #ffffff;
  background: #e31528;
  margin: 0px 0px 0px 15px;
  transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
}

.social-links-two a:hover {
  opacity: 0.8;
}

.social-links-two .facebook {
  background: #3b5998;
}

.social-links-two .twitter {
  background: #33ccfe;
}

.social-links-two .google-plus {
  background: #dd4b39;
}

.padd-top-5 {
  padding-top: 5px;
}

.padd-top-10 {
  padding-top: 10px;
}

.padd-top-15 {
  padding-top: 15px;
}

.video-image-box .image {
  position: relative;
}

.video-image-box img {
  display: block;
  width: 100%;
}

.video-image-box .image .overlay-link {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  display: flex;
  height: 100%;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  color: #48c7ec;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
}

.video-image-box .image .overlay-link:hover {
  background: rgba(0, 0, 0, 0.3);
}

.video-image-box .image .overlay-link .icon {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -30px;
  margin-left: -30px;
  width: 60px;
  background: #fff;
  height: 60px;
  border-radius: 50%;
  line-height: 60px;
  font-size: 29px;
  color: #e31528;
  padding-left: 5px;
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

/*.imgZoom:hover #prod-title {
	color:#e31528;
}*/

/* Accordion styles */
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 10px 15px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.3s;
  font-weight: 500;
}

.accordion-active,
.accordion:hover {
  background-color: #e31528;
  color: #fff;
}

.accordion:after {
  content: "\002B";
  color: #777;
  font-size: 30px;
  float: right;
  margin-left: 5px;
}

.accordion-active:after {
  content: "\2212";
  color: #fff;
}

.accordion:hover:after {
  color: #fff;
}

.accordion-panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
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

.our-product::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 25px;
  background-clip: padding-box;
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

.thumb {
  opacity: 0.7;
  margin: 0 0.25rem 0.25rem 0;
  width: 120px;
  transition: opacity 0.25s ease-out;
}

.thumb:hover,
.thumb.active {
  opacity: 1;
  border: 1px solid #e31528;
}

.zoom {
  display: inline-block;
  height: 100%;
}

.modal-dialog {
  width: 1250px;
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

.scroll-to-top {
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 48px;
  height: 48px;
  color: #ffffff;
  font-size: 13px;
  text-transform: uppercase;
  line-height: 48px;
  text-align: center;
  z-index: 99999;
  cursor: pointer;
  border-radius: 3px;
  background: #1c1c1c;
  display: none;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}
.theme_color {
  color: #e31528;
}

/*Social Icon Two*/

.social-icon-two {
  position: relative;
}

.social-icon-two li {
  position: relative;
  margin: 0px 7px;
  display: inline-block;
}

.social-icon-two li a {
  position: relative;
  width: 40px;
  height: 40px;
  color: #ffffff;
  font-size: 16px;
  line-height: 38px;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  background: none;
  border: 1px solid #ffffff;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.social-icon-two li a:hover {
  color: #e31528;
  border-color: #ffffff;
  background-color: #ffffff;
}

/*Custom Select*/

.form-group .ui-selectmenu-button.ui-button {
  width: 100%;
  font-size: 14px;
  font-style: normal;
  height: 50px;
  padding: 10px 20px;
  line-height: 30px;
  color: #333333;
  border-radius: 0px;
  border: 1px solid #e5e5e5;
  background: #ffffff;
}

.form-group .ui-button .ui-icon {
  background: none;
  position: relative;
  top: 3px;
  text-indent: 0px;
  color: #333333;
}

.form-group .ui-button .ui-icon:before {
  font-family: "FontAwesome";
  content: "\f107";
  position: absolute;
  right: 0px;
  top: 2px !important;
  top: 13px;
  width: 10px;
  height: 20px;
  display: block;
  color: #333333;
  line-height: 20px;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  z-index: 5;
}

.ui-widget.ui-widget-content {
  border: 1px solid #e0e0e0;
  font-family: "Montserrat", sans-serif;
}

.ui-menu .ui-menu-item {
  font-size: 14px;
  border-bottom: 1px solid #e0e0e0;
}

.ui-menu .ui-menu-item:last-child {
  border: none;
}

.ui-state-active,
.ui-widget-content .ui-state-active {
  background-color: #e31528;
}

.ui-menu .ui-menu-item-wrapper {
  position: relative;
  display: block;
  padding: 8px 20px;
  font-size: 14px;
  line-height: 24px;
}

.ui-menu-item:hover {
  background-color: #17519d;
}
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

/*subscribe form style three*/

.subscribe-form-three {
  position: relative;
}

@media (min-width: 992px) {
  .subscribe-form-three {
  }
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
</style>
