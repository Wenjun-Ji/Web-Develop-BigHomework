<template>
  <div>
    <Header />
    <Banner />
    <Features />
    <Video />
    <CallToAction />
    <CallToActionTwo />
    <Testimonial />
    
    <Subscribe />
    <Footer />
  </div>
</template>
<script>
  import Header from "../components/Header.vue";
  import Banner from "../components/Banner.vue";
  import Features from "../components/Features.vue";
  import Video from "../components/Video.vue";
  import CallToAction from "../components/CallToAction.vue";
  import CallToActionTwo from "../components/CallToActionTwo.vue";

  import Testimonial from "../components/Testimonial.vue";

  import Subscribe from "../components/Subscribe.vue";
  import Footer from "../components/Footer.vue";
  export default {
    components: {
      Header,
      Banner,
      Features,
      Video,
      CallToAction,
      CallToActionTwo,

      Testimonial,

      Subscribe,
      Footer,

    }
  }
</script>
