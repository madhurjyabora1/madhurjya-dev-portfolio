<template>
    <v-container class="about-section">
        <v-row>
            <v-col cols="12" sm="12" md="4" class="font-weight-bold">Skills</v-col>
            <v-col cols="12" sm="12" md="8">
                <div  class="d-flex flex-row flex-wrap">
                <v-chip class="ma-2" label v-for="item in skills" :key="item" color="pink"
      text-color="white">
                    {{ item }}
                </v-chip>
            </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            skills: ['Javascript', 'Node', 'HTML', 'CSS', 'Express', 'Graphql', 'Vue', 'React']
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