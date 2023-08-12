<template>
  <div class="">
    <!-- Hero Section -->
    <section class="relative min-h-screen my-8 ">
      <div
        class="flex h-screen w-screen  items-center"
      >
   <img class="w-full h-full" src="../public/pic1.jpg" alt="">
   <div class="absolute top-1/3 font-mono sm:w-1/3 w-full p-4 left-9 text-white bg-opacity-50 bg-white">
<h1 class="text-3xl font-bold">About Us</h1>
<p class="text-2xl mt-2">We are a global group of energy and
 petrochemical companies with more
 than 90,000 employees in more than
 70 countries. We use advanced technologies 
and take an innovative approach to help
 build a sustainable energy future.</p>
   </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16" id="features" data-aos="zoom-in">
      <div class="mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    

          <div class="bg-white" v-for="(item, i) in 6" :key="i">
            <img
              src="../assets/image5.png"
              alt="Feature 1"
              class="mb-4 mx-auto w-full"
            />
            <h3 class="text-xl font-bold mb-2  text-center px-8">
              Industry
            </h3>
            <p class="text-gray-700 text-center px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
          </div>
        </div>
      </div>
    </section>



    <!-- What we do Section -->
    <section
      class="testimonials text-white px-6 justify-between  py-16 flex flex-col md:flex-row"
      data-aos="fade-left"
    >
      <div class=" md:w-1/2 w-full mx-auto px-4 flex flex-col  justify-center bg-blue-500">
        <h2 class=" font-semibold mb-4">
          THA
        </h2>
        <p class=" ">
          The Triple Helix concept refers to a collaborative model of innovation 
that involves three key actors: academia, industry, and government. 
This framework recognizes the interdependence and interaction
between these three sectors in driving economic growth, innovation, 
and societal development.
        </p>
      </div>
      <div class="md:w-1/2 w-full md:ml-6 ml-0 mt-4 md:mt-0">
        <img src="../assets/coin.png"/>
      </div>
    </section>

  <!-- Features Section -->
  <section class="py-16" id="features" data-aos="zoom-in">
      <div class="mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    

          <div class="bg-white" v-for="(item, i) in 3" :key="i">
            <img
              src="../assets/image5.png"
              alt="Feature 1"
              class="mb-4 mx-auto w-full"
            />
            <h3 class="text-xl font-bold mb-2  text-center px-8">
              Industry
            </h3>
            <p class="text-gray-700 text-center px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat consectetur ullamcorper.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer Section -->
    <Footer/>
 </div>
</template>
<script>
export default {};
</script>
<style scoped>
img {
  max-width: 100%;
}

.features {
  background-color: #f8f8f8;
}
.feature {
  transition: transform 0.5s ease;
}
.feature:hover {
  transform: translateX(-5px);
}
.feature {
  text-align: center;
}

.testimonial {
  background-color: #f8f8f8;
}

.faq-item {
  border: 2px solid #e5e5e5;
}

.contact {
  background-image: url("path/to/contact-background.jpg");
  background-size: cover;
  background-position: center;
}

.form-input {
  border: 2px solid #e5e5e5;
  padding: 8px;
}

.form-textarea {
  border: 2px solid #e5e5e5;
  padding: 8px;
  height: 120px;
}


@-webkit-keyframes uparrow {
  0% {
    -webkit-transform: translateX(0);
    opacity: 0.4;
  }
  100% {
    -webkit-transform: translateX(-0.4em);
    opacity: 0.9;
  }
}

.up {
  -webkit-animation: uparrow 0.6s infinite alternate ease-in-out;
  /* border-bottom:2em solid #00b6f1; */
}
.h1 {
    overflow: hidden;
    text-align: center;
    font-weight: 700;
    font-size: x-large;
}
.h1:before,
.h1:after {
    background-color: #000;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 30%;
}
.h1:before {
    right: 0.5em;
    margin-left: -30%;
}
.h1:after {
    left: 0.5em;
    margin-right: -30%;
}
</style>
