<script>
export default{

}
</script>

<template>
    <div class="hero-banner position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    left sectioon
                </div>
                <div class="col-12 col-md-6">
                    right section
                </div>
            </div>
        </div>
        <div class="b-shadow"></div>
    </div>
</template>

<style lang="sass">
.hero-banner
    min-height: 500px
    display: flex
    align-items: center
    background: $color-white
    overflow: hidden
    .b-shadow
        position: absolute
        bottom: -50px
        left: 0
        width: 100%
        height: 50px
        box-shadow: $nav-shadow
        transform: rotate(180deg)
</style>