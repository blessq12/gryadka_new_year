<script>
export default{
    emits:['popupToggle']
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title">
                        <h2 class="intro">наши программы нового года</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ul class="offer-list">
                        <li>
                            <div class="offer-item">
                                <div class="header">
                                    <h4 class="mb-0 intro">2490 руб</h4>
                                </div>
                                <div class="content">
                                    <p class="intro text-center">что входит</p>
                                    <ul>
                                        <li class="border-top border-bottom blogger">
                                            Новогодняя елка в Грядка сити на большой подгорной 87
                                        </li>
                                        <li class="border-bottom blogger">
                                            24 декабря в 10:00, 12:00 и 18:00 длительность 2,5 часа
                                        </li>
                                        <li class="border-bottom blogger">
                                            подарок - бокс
                                        </li>
                                        <li class="border-bottom blogger">
                                            фотосессия
                                        </li>
                                        <li class="border-bottom blogger">
                                            участие в игровой программе
                                        </li>
                                    </ul>
                                </div>
                                <div class="footer" @click="$emit('popupToggle', { offer: 1, price: 2490})">
                                    записаться
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="offer-item">
                                <div class="header">
                                    <h4 class="mb-0 intro">от 900 руб</h4>
                                </div>
                                <div class="content">
                                    <p class="intro text-center">что входит</p>
                                    <ul>
                                        <li class="border-top border-bottom blogger">
                                            Новогодняя елка для класса при бронировании свободных дат на большой подгорной 87
                                        </li>
                                        <li class="border-bottom blogger">
                                            Длительность 2 часа
                                        </li>
                                        <li class="border-bottom blogger">
                                            Программы под ключ
                                        </li>
                                        <li class="border-bottom blogger">
                                            наполняемость по бюджету и пожеланиям к празднику
                                        </li>
                                    </ul>
                                </div>
                                <div class="footer" @click="$emit('popupToggle', { offer: 2, price: 900})">
                                    записаться
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="offer-item">
                                <div class="header">
                                    <h4 class="mb-0 intro">от 500 руб</h4>
                                </div>
                                <div class="content">
                                    <p class="intro text-center">что входит</p>
                                    <ul>
                                        <li class="border-top border-bottom">
                                            Выездные новогодние праздники
                                        </li>
                                        <li class="border-top border-bottom">
                                            Мы организовываем праздники в школах и детских садах, на базах отдыха, на улице и даже дома!
                                        </li>
                                    </ul>
                                </div>
                                <div class="footer" @click="$emit('popupToggle', { offer: 3, price: 500})">
                                    записаться
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="sass">
.section-title
    margin-bottom: 40px
.offer-list
    list-style: none
    padding: 0
    margin: 0
    display: flex
    overflow: hidden
    overflow-x: scroll
    &::-webkit-scrollbar
        display: none
    li
        padding: 6px
        @media (min-width: 768px)
            width: 33.333%
        &:first-child
            padding-left: 0
        &:last-child
            padding-right: 0
        .offer-item
            min-width: 300px
            ul
                li
                    width: 100% !important
            .header
                background: $color-main
                height: 60px
                color: $color-white
                display: flex
                align-items: center
                justify-content: center
                box-shadow: $nav-shadow
            .content
                padding: 24px 0
                width: 100% !important
                display: block
                ul
                    list-style: none
                    padding: 0
                    margin: 0
            .footer
                height: 60px
                background: $color-main
                display: flex
                align-items: center
                justify-content: center
                font-family: 'Intro'
                color: $color-white
                cursor: pointer
</style>