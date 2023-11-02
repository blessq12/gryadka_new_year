<script>
export default{
    inject:['company']
}
</script>

<template>
    <nav>
        <div class="container">
            <div class="row align-items-center g-0">
                <div class="col-6 col-lg-4">
                    <div class="nav-logo">
                        <img :src="company.logo" :alt="company.name" class="img-fluid">
                    </div>
                </div>
                <div class="d-none col-lg-4 d-lg-flex justify-content-center">
                    <div class="nav-phone">
                        <p class="mb-0"><i class="fa fa-phone mx-2"></i> {{ company.phone }}</p>
                    </div>
                </div>
                <div class="col-6 col-lg-4">
                    <ul class="nav-buttons">
                        <li>
                            <a :href="company.waLink + '?text=Новогодние каникулы'" target="_blank">
                                <i class="fa fa-whatsapp"></i>
                            </a>
                        </li>
                        <li>
                            <a :href="company.tgLink" target="_blank">
                                <i class="fa fa-telegram"></i>
                            </a>
                        </li>
                        <li>
                            <a :href="company.vkLink" target="_blank">
                                <i class="fa fa-vk"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="sass">
nav
    padding: 16px 0
    background: $color-main
    font-size: 22px
    color: $color-white
    box-shadow: $nav-shadow
    position: sticky
    top: 0
    z-index: 10
    .nav-logo
        display: flex
        line-height: 1
        align-items: center
        img
            width: auto
            max-height: 60px
    .nav-buttons
        list-style: none
        padding: 0
        margin: 0
        display: flex
        align-items: center
        justify-content: end
        li
            background: $color-secondary
            border-radius: $default-radius
            margin: 6px
            padding: 2px 12px
            display: flex
            align-items: center
            justify-content: center
            cursor: pointer
            &:first
                margin-left: 0
            &:last-child
                margin-right: 0
            a
                color: $color-main
                text-decoration: none
</style>