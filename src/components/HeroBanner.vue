<script>
export default{
    inject:['company']
}
</script>

<template>
    <div class="hero-banner position-relative" style="background: url('https://i.ytimg.com/vi/raeuNeDrx9Y/maxresdefault.jpg');">
        <div class="container position-relative" style="z-index: 3;">
            <div class="row">
                <transition
                    enter-active-class="animate__animated animate__fadeInDown"
                    appear
                >
                    <div class="col-12 col-md-6">
                        <h5 class="intro mb-0">Новогодние елки вместе с</h5>
                        <img :src="company.logo" :alt="company.name" class="img-fluid">
                        <p class="blogger bold">Купите билет заранее, чтобы попасть в школу магии и волшебства Деда Мороза!</p>
                    </div>
                </transition>
                
                <div class="col-12 col-md-6 d-none">
                    right section
                </div>
            </div>
        </div>
        <div class="overlay"></div>
        <div class="b-shadow"></div>
    </div>
</template>

<style lang="sass">
.hero-banner
    min-height: 550px
    display: flex
    align-items: center
    background-position: center !important
    background-size: cover !important
    background-repeat: no-repeat !important
    overflow: hidden
    color: $color-white
    p
        font-size: 22px
    .overlay
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(0, 55, 132, .3)
        z-index: 0
    .b-shadow
        position: absolute
        bottom: -50px
        left: 0
        width: 100%
        height: 50px
        box-shadow: $nav-shadow
        transform: rotate(180deg)
        z-index: 1
</style>