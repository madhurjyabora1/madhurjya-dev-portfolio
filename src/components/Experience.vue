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
                                        I'm a thing. But, like most politicians, he promised
                                        more than he could deliver. You won't have time for
                                        sleeping, soldier, not with all the bed making you'll be
                                        doing. Then we'll go with that data file! Hey, you add a
                                        one and two zeros to that or we walk! You're going to do
                                        his laundry? I've got to find a way to escape.
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
import instoried from '@/assets/instoried.jpg';
import csuite from '@/assets/csuite.png';
export default {
    data() {
        return {
            showInstoried: false,
            showCSuite: false,
            experience: [{
                company: 'C-Suite Circle',
                designation: "Full-Stack Developer",
                logo: csuite,
                show: false,
                time: 'Aug, 2020 - Present',
                cardText: "hasodfhaldk"
            },
            {
                company: 'Instoried',
                designation: "Front end Developer",
                logo: instoried,
                show: false,
                time: 'Sept, 2019 - Aug, 2020',
                cardText: "asdfiosjdaf"
            }],
            isOpen: [],
        };
    },
    methods: {
        toggleOpen(i) {
            const index = this.isOpen.findIndex(x => x === i)
            if (index !== -1) this.isOpen.splice(index, 1)
            else this.isOpen.push(i)
        }
    }
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