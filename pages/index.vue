<template>
  <div class="">
    <!-- Hero Section -->
    <section class="relative min-h-screen my-8 px-2 bg-red">
      <div
        class="flex max-w-full w-screen justify-center items-center h-screen"
      >
        <div class=" w-full md:mr-8 mr-0 h-full">
          <img
            class="w-full h-full max-w-full"
            src="../assets/envir.jpg"
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16" id="features" data-aos="zoom-in">
      <div class="mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg pb-8 shadow-md">
            <img
              src="../assets/business.jpg"
              alt="Feature 1"
              class="mb-4 mx-auto w-full"
            />
            <h3 class="font-bold mb-3 text-blue-700  px-4">WRM Digitalisation:
             
            </h3>
            <p class="text-gray-700 text-center px-8">
            </p>
            <p class="text-sm  cursor-pointer px-4"> Our professionals have
               a thorough understanding of the fundamental physical and mathematical
                concepts that control many engineering challenges.</p>
          </div>
          <div class="bg-white rounded-lg pb-8 shadow-md">
            <img
              src="../assets/customer.jpg"
              alt="Feature 2"
              class="mb-4 mx-auto w-full"
            />
            <h3 class="text-xl font-bold  text-blue-700  px-4">
              Integrated Asset Management :
            </h3>
            <p class="text-gray-700 text-center px-8">
              
            </p>
            <p class="text-sm cursor-pointer px-4">Our IAM services leverage latest 
              technology and digital oilfield solutions to improve 
              traditional asset management processes across the 
              value chain.</p>
          </div>

          <div class="bg-white rounded-lg pb-8 shadow-md">
            <img
              src="../assets/read.jpg"
              alt="Feature 1"
              class="mb-4 mx-auto w-full"
            />
            <h3 class="text-xl font-bold mb-2 text-blue-700  px-4">
             E & P Enterprise Planning
            </h3>
            <p class="text-gray-700 text-center px-8">
              
            </p>
            <p class="text-sm  cursor-pointer px-4">Quick and 
              seamless sensitivity on the impact of project addition/removal 
              on production, CAPEX, OPEX and overall business outlook</p>
          </div>
        </div>
      </div>
    </section>

 

    <!-- What we do Section -->
    <section
      class="testimonials text-white bg-blue-500 py-16"
      data-aos="fade-left"
    >
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-semibold text-center mb-4">
          Our Solutions
        </h2>
        <p class="text-2xl text-center">
          We are known as high-skilled marketplace and we see an acute pain
          point within that area,
        </p>
      </div>
    </section>

   
<section>
  <div class="">
    <h1 class="h1 text-xl font-bold">LATEST NEWS</h1>  
    <div class="flex w-full md:flex-row flex-col items-center p-6 py-8">
<div class="md:w-3/4 w-full md:mr-4 mr-0">
 

</div>

    </div>
 
  </div>
</section>
   
    <Footer/>
<div class="bg-gray-800 p-6 w-full flex items-center">
<p class="text-white">
  © Talk With CypherCrescent Experts
</p>
<i class="fas fa-twitter"></i>
<i class="fas fa-twitter"></i>
</div>  </div>
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
