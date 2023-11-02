<script>

import { mapStores } from 'pinia' 
import { useDataStore } from '../stores/dataStore.js'

export default{
    emits: ['popupToggle'],
    computed:{
        ...mapStores(useDataStore)
    },
    props:{
        offer: Object
    },
    data:()=>({
        send: false,
        formData: {
            name: '',
            phone: '',
            cbd: ''
        }
    }),
    methods:{
        sendOrder(){
            let data = {}
            data.offer = this.offer
            data.formData = this.formData
            this.send = !this.send
            this.dataStore.sendMessage(data)
            setTimeout(() => {
                this.send = !this.send
                this.$emit('popupToggle', true)
            }, 5000)
        }
    },
    watch:{}
}
</script>

<template>
    <div class="popup">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 col-lg-4 visible">
                    <div class="popup-w">
                        <div class="header d-flex justify-content-between align-items-center">
                            <h4 class="intro mb-0">Заполните форму</h4>
                            <button class="btn-close" @click="$emit('popupToggle')"></button>
                        </div>
                        <div class="content pt-4 px">
                            <transition
                                enter-active-class="animate__animated animate__fadeIn"
                                leave-active-class="animate__animated animate__fadeOut"
                                mode="out-in"
                            >
                                <form @submit.prevent="sendOrder()" v-if="!send">
                                    <div class="form-group mb-2 px-3">
                                        <label for="name">Введите имя</label>
                                        <input type="text" name="name" id="name" class="form-control" autocomplete="name" required v-model="formData.name">
                                    </div>
                                    <div class="form-group px-3">
                                        <label for="phone">Номер телефон</label>
                                        <input type="text" name="phone" id="phone" class="form-control" placeholder="+7 (XXX) XXX-XX-XX" v-maska data-maska="+7 (###) ###-##-##" autocomplete="tel" required v-model="formData.phone">
                                    </div>
                                    <div class="form-group px-3">
                                        <label for="cbd">День рождения ребенка</label>
                                        <input type="text" name="cbd" id="cbd" class="form-control" placeholder="День/Месяц/Год" v-maska data-maska="##/##/####" required v-model="formData.cbd">
                                    </div>
                                
                                <div class="footer mt-4 py-3">
                                    <button type="submit" class="btn btn-outline-light" 
                                    :disabled="formData.name !== '' && formData.phone !== '' && formData.cbd !== '' ? false : true"
                                    >Отправить</button>
                                    <button type="reset" class="btn btn-outline-light mx-2">Очистить</button>
                                </div>
                                </form>
                                <div v-else class="p-4 text-center">
                                    <p class="blogger bold">Спасибо, что выбрали нас!<br>Мы свяжемся с Вами в ближайшее время.</p>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
.popup
    position: fixed
    top: 0
    left: 0
    padding: 24px
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    z-index: 20
    visibility: hidden
    .popup-w
        visibility: visible
        min-height: 150px
        width: 100%
        border-radius: $default-radius
        overflow: hidden
        .header
            color: $color-white
            background: $color-main
            padding: 16px
        .content
            background: $color-white
            min-height: 100px
        .footer
            background: $color-main
            padding: 12px
</style>