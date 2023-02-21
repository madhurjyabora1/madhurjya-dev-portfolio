<template>
    <v-container class="about-section">
        <v-row>
            <v-col cols="12" sm="12" md="4" class="font-weight-bold">Certifications</v-col>
            <v-col cols="12" sm="12" md="8">
                <v-row>
                    <v-col v-for="item in certificate" :key="item.name" cols="12" sm="12" md="6">
                        <v-card class="card-class" :key="item.name" elevation="0" outlined :href="item.link" target="_blank" rel="noopener noreferrer">
                            <v-card-title>{{ item.name }}<v-icon >{{"mdi-arrow-top-right"}}</v-icon></v-card-title>
                            <v-card-subtitle>{{ item.expires }}</v-card-subtitle>
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
            certificate: [{
                name: 'FinOps Certified Practitioner',
                expires: 'Feb 2024',
                link: 'https://verify.skilljar.com/c/5bg8zzkecvr3'
            },
        ]
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