<script>
export default{
    inject:['company']
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <img :src="company.logo" :alt="company.name" class="img-fluid" style="max-height: 40px;">
                </div>
                <div class="col-12 text-center mt-3 text-light border-top border-light pt-3">
                    Разработано <a href="//wa.me/79833409040">CODA</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="sass">
footer
    padding: 24px 0
    background: $color-main
</style>
