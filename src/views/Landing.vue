<template>
  <v-container fluid>
    <v-row class=" d-md-flex">
      <div class="gradient">
        <div class="text text-center" :data-value="designation" @mouseover="randomLetters" @mouseleave="changeBack">
          {{ designation }}
        </div>
      </div>
    </v-row>
    <v-container>
      <v-row class=" d-md-flex pb-7">
        <!-- <div class="main-row"> -->
        <v-col cols="12" sm="12" md="6">
          <div class="name-info">
            <app-profile-pic />
            <div class="bio">
              <h1>Madhurjya Bora</h1>
              <div>I'm a full stack developer based in Assam, India</div>
            </div>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="" cols="12" sm="12" md="6">
          <div class="d-sm-flex d-md-none justify-start"><v-btn depressed :href="resume" target="_blank"
              rel="noopener noreferrer">Resume</v-btn></div>
          <div class="d-none d-md-flex  my-7 justify-end"><v-btn depressed :href="resume" target="_blank"
              rel="noopener noreferrer">Resume</v-btn></div>
        </v-col>
        <!-- </div> -->
      </v-row>
    </v-container>
    <v-container class="about-section">
      <v-row class="d-md-flex">
        <v-col cols="12" sm="12" md="4">
          <div class="d-flex flex-start font-weight-bold">About Me</div>
        </v-col>
        <v-col cols="12" sm="12" md="8">
          <div>
            <div>{{ aboutme }}</div>
            <!-- <div class="my-info"> -->
            <v-container>
              <v-row class="my-info">
                <v-col cols="12" sm="12" md="3" class="d-flex flex-column">
                  <div>Location</div>
                  <div class="sub-info"><v-icon class="sub-info home-icon">{{ "mdi-earth" }}</v-icon>Assam, India</div>
                </v-col>
                <v-col cols="12" sm="12" md="3" class="d-flex flex-column">
                  <div>Github</div>
                  <a href="https://github.com/madhurjyabora1" target="_blank" rel="noopener noreferrer">
                    <div class="sub-info">@madhurjyabora1</div>
                  </a>
                </v-col>
                <v-col cols="12" sm="12" md="3" class="d-flex flex-column">
                  <div>LinkedIn</div>
                  <a href="https://www.linkedin.com/in/madhurjya-bora-51a35a163/" target="_blank"
                    rel="noopener noreferrer">
                    <div class="sub-info" href="https://www.linkedin.com/in/madhurjya-bora-51a35a163/" target="_blank"
                      rel="noopener noreferrer">madhurjyabora</div>
                  </a>
                </v-col>
                <v-col cols="12" sm="12" md="3" class="d-flex flex-column">
                  <div>Email</div>
                  <div class="sub-info" href="mailto:mrbora10@gmail.com" target="_blank" rel="noopener noreferrer">
                    mrbora10@gmail.com</div>
                </v-col>
              </v-row>
            </v-container>
            <!-- </div> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
    <app-experience />
    <app-project />
    <app-skills />
    <app-certifications />
  </v-container>
</template>

<script>
import AppProfilePic from "@/components/ProfilePic.vue";
import AppExperience from '@/components/Experience.vue'
import AppProject from '@/components/Project.vue'
import AppSkills from '@/components/Skills.vue'
import AppCertifications from '@/components/Certifications.vue'
export default {
  components: {
    AppProfilePic,
    AppExperience,
    AppProject,
    AppSkills,
    AppCertifications
  },
  data() {
    return {
      letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      interval: null,
      resume: 'https://res.cloudinary.com/dq0ah9hmq/image/upload/v1676984686/madhurjya_resume_cuycmm.pdf',
      showInstoried: false,
      showCSuite: false,
      designation: "FRONTENDDEVELOPER",
      aboutme:
        "I'm a frontend developer based in India. I've worked with vue and reactjs to build numerous webapps like social media website and so on",
    };
  },
  methods: {
    changeBack() {
      if (this.designation === "BACKEND-DEVELOPER") {
        this.designation = "FRONTENDDEVELOPER";
      } else this.designation = "BACKEND-DEVELOPER";
    },
    randomLetters(event) {
      let iteration = 0;

      clearInterval(this.interval);

      this.interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return this.letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(this.interval);
        }

        iteration += 1 / 3;
      }, 30);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");

.gradient {
  width: 100%;
  height: 50vh;
  background-image: linear-gradient(to right top,
      #fce4fa,
      #f8daf6,
      #f3cff1,
      #efc5ed,
      #eabbe9,
      #e9aee8,
      #e7a1e6,
      #e594e5,
      #e67fe6,
      #e669e6,
      #e64de6,
      #e524e5);
  display: grid;
  place-items: center;
}

.text {
  font-family: "Space Mono", monospace;
  font-size: clamp(1rem, 4vw, 4rem);
  color: white;
  padding: 0rem clamp(1rem, 2vw, 3rem);
  border-radius: clamp(0.4rem, 0.75vw, 1rem);
}

.text:hover {
  background-color: white;
  color: black;
}

.name-info {
  display: flex;
  flex-direction: row;
}

.bio {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 10px
}

.main-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

@media (max-width: 480px) {

  .name-info {
    display: flex;
    flex-direction: column;
  }

  .bio {
    margin-top: 15px;
    margin-left: 0px
  }
}

.about-section {
  border-top: 1px solid #e6eaea;
  padding-top: 30px;
}

.my-info {
  margin-top: 30px;
  background: #fce4fa;
  color: #df2edf;
  border-radius: 5px;
}

.sub-info {
  color: #d80bd8;
  font-weight: 700;
}

.home-icon {
  font-size: 18px;
  margin-top: -4px
}
</style>