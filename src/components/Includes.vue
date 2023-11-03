<script>
export default{
    emits:['popupToggle'],
    mounted(){
        this.tickerLeft()
        this.tickerRight()
    },
    inject:['company'],
    data:()=>({
        imageL:[
            {id: 1, image: '/images/ticker/1.jpg'},
            {id: 2, image: '/images/ticker/2.jpg'},
            {id: 3, image: '/images/ticker/3.jpg'},
            {id: 4, image: '/images/ticker/4.jpg'},
        ],
        imageR:[
            {id: 1, image: '/images/ticker/5.jpg'},
            {id: 2, image: '/images/ticker/6.jpg'},
            {id: 3, image: '/images/ticker/7.jpg'},
            {id: 4, image: '/images/ticker/8.jpg'},
            {id: 5, image: '/images/ticker/9.jpg'},
        ]
    }),
    methods:{
        tickerLeft(){
            let container = this.$refs.leftWrap,
                carousel = container.querySelector('.carousel'),
                list = carousel.querySelector('ul').cloneNode(true)
            carousel.prepend(list)
        },
        tickerRight(){
            let container = this.$refs.rightWrap,
                carousel = container.querySelector('.carousel'),
                list = carousel.querySelector('ul').cloneNode(true)
            carousel.prepend(list)
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row mb-4">
                <div class="col-12">
                    <div class="section-title">
                        <h2 class="intro">4 года Дед Мороз и Снегурочка</h2>
                        <p class="blogger bold">
                            посещают детский центр профессий и поздравляют детей от 4-13 лет.
                            В этом году мы подготовили волшебные встречу и задания школы магии, 
                            подарочные боксы, новогодний-мастер-класс и фотосессию.
                        </p>
                        <div class="separator"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-12 col-lg-6 mb-md-5 mb-5">
                    <h3 class="intro">Что ждет?</h3>
                    <p class="blogger">
                        Мы делимся на команды по возрастам для комфортного выполнения заданий в интерактивной программе
                        Каждый ребенок попадет на свой факультет.
                        Снегурочка проводит обучение волшебству любви, помощи, добрых слов и понимания.
                        Наши наставники помогут детям победить зло,  мысли сделать чистыми и бескорыстными, 
                        чтобы все силы доброго “Волшебства” в 2024 году были на его стороне!
                        А Дедушка Мороз поможет с верой в самого себя.
                        Каждый ребенок получит подарок, фотографии на память и добрые воспоминания.
                    </p>
                    <p class="blogger">
                        Мы разрабатывает интересные подарки! 
                        В наших боксах в этом году будет подарок “Мастер на все руки”, чтобы ребенок дома сделал памятное изделие и поел полезных сладостей! 
                        Подарки будут вручены также по возрастам.
                    </p>
                    <div class="d-flex">
                        <a :href=" 'tel:'+company.phone " class="btn btn-primary">
                            Забронировать место
                        </a>
                        <button type="button" href="" class="btn btn-outline-primary mx-2" @click="$emit('popupToggle', { offer: null, price: 'details'})">
                            Узнать подробнее
                        </button>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                    <div class="left-carousel-wrap" ref="leftWrap">
                        <div class="carousel">
                            <ul>
                                <li class="rounded" v-for="image in imageL" :key="image.id" :style="'background:url('+ image.image +')'"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="right-carousel-wrap" ref="rightWrap">
                        <div class="carousel">
                            <ul>
                                <li class="rounded" v-for="image in imageR" :key="image.id" :style="'background:url('+ image.image +')'"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="sass">
@keyframes left-scroll
    0%
        transform: translateX(0)
    100%
        transform: translateX(-100%)
@keyframes right-scroll
    0%
        transform: translateX(-100%)
    100%
        transform: translateX(0)
.left-carousel-wrap
    overflow: hidden
    margin-bottom: 12px
    display: flex
    align-items: center
    .carousel
        overflow-x: hidden
        display: flex
        ul
            display: inline-block
            white-space: nowrap
            padding: 0
            margin: 0
            list-style: none
            animation: left-scroll 20s infinite linear
            li
                display: inline-block
                width: 250px
                min-width: 250px
                height: 200px
                margin-right: 12px
                background-position: center !important
                background-size: cover !important
                background-repeat: no-repeat !important
.right-carousel-wrap  
    overflow: hidden
    .carousel
        overflow-x: hidden
        display: flex
        ul
            display: inline-block
            white-space: nowrap
            padding: 0
            margin: 0
            list-style: none
            animation: right-scroll 20s infinite linear
            li
                display: inline-block
                width: 250px
                min-width: 250px
                height: 200px
                margin-right: 12px
                background-position: center !important
                background-size: cover !important
                background-repeat: no-repeat !important
.section-title
    .separator
        display: block
        height: 5px
        widows: 100%
        background: $color-main
        position: relative
        &::after
            position: absolute
            content: ''
            width: 50%
            height: 25px
            background: $color-secondary
            top: 5px
            @media (min-width: 768px)
                top: -23px
            right: 0
            border-radius: 10px 0 0 10px
            
</style>