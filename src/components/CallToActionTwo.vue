<template>
  <section class="cta-two">
    <div class="container">
      <img src="/assets/images/mocs/cta-moc-2-1.png" class="cta-two__moc" alt="Awesome Image" />
      <div class="row">
        <div class="col-lg-6">
          <div class="cta-two__content">
            <i class="cta-two__icon dimon-icon-data"></i>
            <div class="block-title text-left">
              <h2 class="block-title__title">Interact with <span>Customers</span> <br> on Single Platform.</h2><!-- /.block-title__title -->
            </div><!-- /.block-title -->
            <div class="cta-two__text">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem Ipsum is simply dummy text of the printing laborum perspiciatis unde.</p>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit lorem ipsum anim id est.</p>
            </div><!-- /.cta-two__text -->
            <a href="/home" class="banner-two__btn thm-btn">
              <span>Get Started</span>
            </a>
          </div><!-- /.cta-two__content -->
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>

<script>
    export default {
      name: "CallToActionTwo"
    }
</script>

<style scoped>
.cta-two {
  position: relative;
  overflow: hidden;
  padding: 100px 0;
}

.cta-two__moc {
  transform: translate(-10px,100px) !important;
}

.cta-two__content {
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

.block-title__title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
}

.cta-two__text p {
  margin-bottom: 20px;
}

.list-unstyled {
  padding-left: 0;
}

.list-unstyled li {
  list-style: ntwo;
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
}

.list-unstyled li i {
  position: absolute;
  left: 0;
}

.thm-btn {
  display: inline-block;
  padding: 10px 30px;
  color:black;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.thm-btn:hover {
  color: #fff;
}
.thm-btn:hover:before {
  -webkit-transform: scaleX(0);
          transform: scaleX(0);
}

</style>

