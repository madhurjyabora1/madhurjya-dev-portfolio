<template>
    <v-container class="about-section">
        <v-row class="d-md-flex">
            <v-col cols="12" sm="12" md="4">
                <div class="d-flex flex-start font-weight-bold">Projects</div>
            </v-col>
            <v-col cols="12" sm="12" md="8">
                <v-row>
                    <v-col v-for="item in projects" :key="item.name" cols="12" sm="12" md="6">
                        <v-card elevation="0" outlined>
                            <v-img :src="item.src" class="white--text align-end img-class" height="228px"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                                <v-card-title>{{ item.name }}</v-card-title>
                            </v-img>
                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn plain class="mr-3" :href="item.link" target="_blank" rel="noopener noreferrer">
                                    Visit<v-icon>mdi-arrow-top-right</v-icon>
                                </v-btn>
                            </v-card-actions>
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
            projects: [{
                src: 'https://res.cloudinary.com/dq0ah9hmq/image/upload/v1709316947/website_admfyy.png',
                name: 'Crybabyst4re',
                link: 'https://crybabyst4re.com'
            },
            {
                src: 'https://res.cloudinary.com/dq0ah9hmq/image/upload/v1676986003/web1_yd3fmm.png',
                name: 'Snapxot',
                link: 'https://snapxot.com'
            }]
        }
    }
}
</script>
<style scoped>
.about-section {
    border-top: 1px solid #e6eaea;
    padding-top: 30px;
}

</style>