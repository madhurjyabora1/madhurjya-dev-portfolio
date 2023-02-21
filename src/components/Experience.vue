<template>
    <v-container class="about-section">
        <v-row class="d-md-flex">
            <v-col cols="12" sm="12" md="4">
                <div class="d-flex flex-start font-weight-bold">Experience</div>
            </v-col>
            <v-col cols="12" sm="12" md="8">
                <v-row>
                    <v-col v-for="item in experience" :key="item.name" cols="12" sm="12" md="6">
                        <v-card class="card-class" elevation="0" outlined>
                            <v-card-text class="d-flex flex-row px-3 py-3">
                                <v-avatar size="53" class="mr-2">
                                    <img :src="item.logo" alt="John">
                                </v-avatar>
                                <div class="d-flex flex-column">
                                    <h3 class="font-weight-bold">{{item.designation}}</h3>
                                    <div>{{item.company}}</div>
                                </div>
                            </v-card-text>
                            <v-card-text>{{ item.time }}</v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn plain @click.stop="item.show = !item.show">
                                    View More <v-icon>{{
                                        item.show ? "mdi-chevron-up" : "mdi-chevron-down"
                                    }}</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-expand-transition>
                                <div v-show="item.show">
                                    <v-card-text>
                                        <ul v-for="point in item.cardText" :key="point">
                                            <li>{{point}}</li>
                                        </ul>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            showInstoried: false,
            showCSuite: false,
            experience: [{
                company: 'C-Suite Circle',
                designation: "Full-Stack Developer",
                logo: 'https://res.cloudinary.com/dq0ah9hmq/image/upload/v1676985989/csuite_lrdmnq.png',
                show: false,
                time: 'Aug, 2020 - Present',
                cardText: [
                    "Developed mobile and desktop versions of social media website which has over million active users using vuejs and graphql.",
                    "Worked on an ecommerce website and made new features for their dashboard and internal tools using vuejs and vuex",
                    "Designed and developed components using Storybook for an in- house UI library to use in all the organization projects",
                    "Documented the components of the UI library in Zeroheight.",
                    "Helped build a dashboard for the organization’s cloud products",
                    "Wrote queries and mutations in typegraphql for a static site service in AWS S3",
                    "Developed landing page in nuxt",
                    "Technology stack: Vuejs, Vue-router, Vuex, Nuxt, Graphql,Typegraphql, Apollo, Storybook"
                ]
            },
            {
                company: 'Instoried',
                designation: "Front end Developer",
                logo: 'https://res.cloudinary.com/dq0ah9hmq/image/upload/v1676985988/instoried_itleva.jpg',
                show: false,
                time: 'Sept, 2019 - Aug, 2020',
                cardText: [
                    "Worked as a frontend developer and help develop two webapps.",
                    "Designed and developed the chrome extension.",
                    "Implemented secure user authorization.",
                    "Technology stack: React.js, React-Router, Material-UI, Styled Component, D3.js."
                ]
            }],
        };
    },
}
</script>

<style scoped>
.card-class {
    width: 100%
}

.experience-section {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between
}

.about-section {
    border-top: 1px solid #e6eaea;
    padding-top: 30px;
}
</style>