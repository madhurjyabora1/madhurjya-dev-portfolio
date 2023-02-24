<template>
  <div class="container">
    <div class="text-wrapper">
      <p>FRONTEND DEVELOPER</p>
      <p>BACKEND DEVELOPER</p>
      <p>FULLSTACK DEVELOPER</p>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import SplitTextJS from "split-text-js";
export default {
  mounted() {
    this.animateText();
  },
  methods: {
    animateText() {
      const titles = gsap.utils.toArray("p");
      let mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 480px)",
          isDesktop: "(min-width: 481px)",
        },
        (context) => {
          let { isMobile} = context.conditions;
          const tl = gsap.timeline({ repeat: -1 });
          titles.forEach((title) => {
            const splitTitle = new SplitTextJS(title);
            tl.from(
              splitTitle.chars,
              {
                opacity: 0,
                y: isMobile ? 15 : 40,
                rotateX: -90,
                stagger: 0.02,
              },
              "<"
            ).to(
              splitTitle.chars,
              {
                opacity: 0,
                y: isMobile ? -15 : -40,
                rotateX: 90,
                stagger: 0.02,
              },
              "<1"
            );
          });
        }
      );
    },
  },
};
</script>

<style scoped>
p {
  font-size: 3rem;
  text-align: center;
  color: white;
  margin: 0px;
  line-height: 0;
}
p:nth-of-type(3) {
  color: yellow;
}

@media (max-width: 480px) {
  p {
    font-size: 1rem;
  }
}
</style>