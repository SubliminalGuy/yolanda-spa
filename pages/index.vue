<template>

  <div class="hero-container flex-none items-start inline-flex justify-start flex-col flex w-full ">
  
    <div class="bgimage flex-none bg-cover bg-no-repeat items-center inline-flex justify-center flex-col flex w-full">
      <div class="layer flex-none items-center inline-flex justify-center bg-opacity-50 bg-white w-full">
        <div class="flex-none py-48 space-y-4 px-24 text-center flex-col flex items-center inline-flex justify-center mx-auto w-full max-w-5xl">
          <h1 class="text-gray-900 bg-transparent tracking-tight font-semibold text-5xl font-sans">
            Be The Change You Want To See In The World
          </h1>
          <nuxt-link to="/sign-up">
          <button class="flex-none rounded text-white w-auto py-2 px-8 text-center font-light bg-blue-800 shadow-md">
            Join Us!
          </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  name: 'LandingPage',
  data: function () {
            return {
                bgImageList: [['https://res.cloudinary.com/subguy/image/upload/c_scale,q_60,w_3000/v1602054788/left-together/truck-help_pfqxqk.jpg', "top"], ['https://res.cloudinary.com/subguy/image/upload/c_scale,q_60,w_3000/v1602054798/left-together/blm-protest_qojvad.jpg', "center"],
                 ['https://res.cloudinary.com/subguy/image/upload/c_scale,q_50,w_3000/v1602054932/left-together/coding_wh.jpg', "center"], ['https://res.cloudinary.com/subguy/image/upload/c_scale,q_60,w_3000/v1602054876/left-together/artistic_hehdjr.jpg', "center"]]
                
                
            }
        },
  mounted() {
    this.chooseBackground()
  },
  
  methods: {
            chooseBackground: function () {
              const backContainer = document.querySelector(".bgimage")
              const randomNumber = Math.floor(Math.random() * Math.floor(4));
              const backgroundUrl = this.bgImageList[randomNumber][0]
              const bgPosition = this.bgImageList[randomNumber][1]
              //console.log(bgPosition)
              backContainer.style.backgroundImage = `url(${backgroundUrl})`;
              backContainer.style.backgroundPosition = `${bgPosition}`
              }
            },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-container, .layer {
    min-height: 700px;
    max-height: auto;
}










</style>

