<template>
  <section class="cta-one" id="cta">
    <img src="/assets/images/background/cta-one-bg.png" class="cta-one__bg" alt="Awesome Image" />
    <div class="container">
      <img src="/assets/images/mocs/cta-moc-1-1.png" class="cta-one__moc" alt="Awesome Image" />
      <div class="row justify-content-lg-end">
        <div class="col-lg-6">
          <div class="cta-one__content">
            <i class="cta-one__icon dimon-icon-data1"></i>
            <div class="block-title text-left">
              <h2 class="block-title__title">The Development History of<br><span> Defending Radish</span></h2><!-- /.block-title__title -->
            </div><!-- /.block-title -->
            <div class="cta-one__text">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div><!-- /.cta-one__text -->
            <ul class="list-unstyled">
              <li><i class="fa fa-check"></i>Refresing to get such a personal touch.</li>
              <li><i class="fa fa-check"></i>Duis aute irure dolor in reprehenderit in voluptate.</li>
              <li><i class="fa fa-check"></i>Velit esse cillum dolore eu fugiat nulla pariatur.</li>
            </ul><!-- /.list-unstyled -->
            <a href="/home" class="banner-two__btn thm-btn">
              <span>Get Started</span>
            </a>

          </div><!-- /.cta-one__content -->
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>

<script>
    export default {
      name: "CallToAction"
    }
</script>

<style scoped>
.cta-one {
  position: relative;
  overflow: hidden;
  padding: 100px 0;
}

.cta-one__moc {
  transform: translate(115px,100px) !important;
}


.cta-one__content {
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

.cta-one__text p {
  margin-bottom: 20px;
}

.list-unstyled {
  padding-left: 0;
}

.list-unstyled li {
  list-style: none;
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
