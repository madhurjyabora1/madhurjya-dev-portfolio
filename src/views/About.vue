<template>
    <div>
        <v-container fluid>
            <v-row class=" d-md-flex">
                <div class="gradient">
                    <h1 class="text text-center white--text lighten">
                        About Me
                    </h1>
                </div>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <p>
                        Hi there, I'm Madhurjya, a frontend developer with a passion for creating intuitive and engaging
                        user
                        experiences. I've been working in web development for 3 and half years, with a focus on
                        frontend technologies.
                    </p>
                    <p>
                        After starting my career working with React for a year, I discovered Vue and was immediately drawn
                        to its simplicity and flexibility. For the past 2 and a half years, I've been honing my skills with
                        Vue, using it to build everything from simple landing pages to complex web applications.
                    </p>
                    <p>
                        While I love working on the frontend, I also have experience with backend development using Node.js,
                        Express, and GraphQL. This experience has given me a more comprehensive understanding of the
                        development process and allowed me to build more robust and scalable applications.
                    </p>
                    <p>
                        One of the things I enjoy most about working in web development is the constant learning and
                        evolution of the field. I'm always looking for new technologies and techniques to add to my toolkit,
                        whether it's a new frontend framework or a new approach to testing and deployment.
                    </p>
                    <p>
                        Outside of work, my hobby is photography. I love exploring new places, capturing unique
                        perspectives, and
                        telling stories through my photos. Photography is a creative outlet for me that allows me to unwind
                        and
                        express my artistic side.
                    </p>
                    <p>
                        In my free time, I also enjoy exploring the outdoors, reading books, and tinkering with
                        personal
                        programming projects.
                        Thank you for taking the time to learn a little bit about me. I'm always open to connecting with
                        others
                        who
                        share similar interests, so feel free to reach out!
                        <v-btn href="mailto:mrbora10@gmail.com" tile target="_blank" rel="noopener noreferrer" elevation="1"
                            small>Email Me<v-icon right>
                                mdi-pencil
                            </v-icon></v-btn>
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
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
</style>