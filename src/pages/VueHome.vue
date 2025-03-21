<template>
  <div class="home">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Album example</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(item, idx) in state.items" :key="idx"> <!-- Vue 반복문을 사용하여 12번 반복하는 col을 생성-->
            <Card :item="item"/> <!-- Card라는 Component에 item이라는 값을 전달-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
화면 영역 - 앞에 Vue를 명식 (Vue화면명.vue)
리턴 영역 - 리턴시 중괄호 사용 return {state}
표출 영역 - {{ 변수명 }} 중괄호 사이에 Space 사용
 */
import axios from "axios";
import {reactive} from "vue";
import VueCard from "@/components/VueCard.vue";

export default {
  name: 'VueHome',
  components:{Card: VueCard},// 가지고온 VueCard를 해당 페이지에서 Card라는 태그로 component화 시켜서 사용할 수 있도록 지정
  setup(){
    const state = reactive({
      items:[]
    })

    axios.get("/api/items").then(({data})=> { // 중괄호 {data}사용시 호출한 데이터를 바로 가져올 수 있음
      //console.log(res);
      state.items = data // 호출한 데이터를 state변수 안에 있는 items 배열에 담아줌
    })

    return {state}
  }
}
</script>

<style>

</style>