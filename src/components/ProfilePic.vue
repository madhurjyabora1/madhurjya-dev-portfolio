<template>
  <div class="profile-pic"><img src="https://picsum.photos/300/300" class="image-class"></div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile-pic{
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background: white;
    /* border: 1px solid black; */
    margin-top: -35px;
    position: relative;
}
.image-class{
    height: 190px;
    width: 190px;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - (190px / 2)); 
    left: calc(50% - (190px / 2)); 
    margin: 0 auto;
}
</style>