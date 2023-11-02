import { defineStore } from "pinia";

export const useDataStore = defineStore( 'data' , {
  state:()=>({

    name: 'грядка сити',
    desc: 'город профессий',
    logo: '/images/logo.png',
    phone: '+7(3822)97-99-25',
    email: 'gryadkacity@yandex.ru',
    address: 'г. Томск. ул. Б. Подгорная 87',
    map_link: 'https://yandex.ru/maps/67/tomsk/?ll=84.947649%2C56.484640&mode=routes&no-distribution=1&profile-mode=1&rtext=~56.502383%2C84.953286&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D172801049408&source=wizbiz_new_map_single&z=12',
    vkLink: '//vk.com/city.gryadka',
    waLink: '//wa.me/79234342898',
    tgLink: '//t.me/city_gryadka',

    offer:{
      staying: 'с 09:00 до 17:00',
      nutrition: 'двухразовое питание + перекус фруктами',
      duration: 'с понедельника по пятницу (5 дней)'
    }
    
  }),
  getters:{},
  actions:{}
})