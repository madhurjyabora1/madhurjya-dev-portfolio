<template>
  <div class="profile-pic"><img src="https://res.cloudinary.com/dq0ah9hmq/image/upload/v1676985695/me_i8aiis.jpg" class="image-class">
  </div>
</template>

<script>

export default {
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.profile-pic{
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background: white;
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
@media (max-width: 480px) {
  .image-class{
    height: 185px;
    width: 185px;
    top: calc(50% - (185px / 2)); 
    left: calc(50% - (185px / 2)); 
}
.profile-pic{
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background: white;
    margin-top: -45px;
    position: relative;
} 
}
</style>