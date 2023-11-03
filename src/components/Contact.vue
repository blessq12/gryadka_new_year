<script>
export default{
    name: 'Contact',
    inject: [ 'company' ]
}
</script>

<template>
<section>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title">
                    <h2 class="intro">Контакты</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-12 mb-5 mb-lg-0">
                <ul class="contact-list">
                    <li>
                        <a :href="company.map_link" target="_blank">
                            <i class="fa fa-map-marker"></i>
                            {{ company.address }}
                        </a>
                    </li>
                    <li>
                        <a :href="'tel:' + company.phone">
                            <i class="fa fa-phone"></i>
                            {{ company.phone }}
                        </a>
                    </li>
                    <li>
                        <a :href="company.waLink" target="_blank">
                            <i class="fa fa-whatsapp"></i>
                            Написать в WhatsApp
                        </a>
                    </li>
                    <li>
                        <a :href="company.tgLink" target="_blank">
                            <i class="fa fa-telegram"></i>
                            Написать в Telegram
                        </a>
                    </li>
                    <li>
                        <a :href="company.vkLink" target="_blank">
                            <i class="fa fa-vk"></i>
                            Сообщество Вконтакте
                        </a>
                    </li>
                    <li>
                        <a :href="'mailto:'+company.email">
                            <i class="fa fa-envelope"></i>
                            Написать на Email
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-12">
                <div class="map-wrap px-0 px-md-0 px-lg-5 text-center">
                    <img src="/images/map.jpg" :alt="company.name" class="img-fluid rounded">
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style lang="sass">
.contact-list
    list-style: none
    padding: 0
    margin: 0
    li
        padding: 24px 12px
        border-bottom: 1px solid $color-main
        transition: all .3s
        &:first-child
            border-top: 1px solid $color-main
        &:hover
            background-color: $color-main
            a
                color: $color-white
        a
            color: $color-black
            font-size: 22px 
            text-decoration: none
            font-family: 'blogger'
            font-weight: bold
            transition: all .3s
            i
                font-size: 32px
                margin-right: 12px
        
</style>