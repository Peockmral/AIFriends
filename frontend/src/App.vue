<script setup>

import NavBar from "@/components/navbar/NavBar.vue";
import {onMounted} from "vue";
import api from "@/js/http/api.js";
import {useUserStore} from "@/stores/user.js";
import {useRoute, useRouter} from "vue-router";

const user = useUserStore()
const route = useRoute()
const router = useRouter();

onMounted(async () => {
  try {
    const res = await api.get('/api/user/account/get_user_info/')
    const data = res.data
    if (data.result === 'success') {
      user.setUserInfo(data)
    } else console.log(data.result)
  } catch (err) {
  } finally {
    user.setHasPulledUserInfo(true)

    if (route.meta.needLogin && !user.isLogin()) {
      await router.replace({          // 使用push可以返回上一页面，使用replace不可返回上一页面
        name: 'user-account-login-index',
      })
    }
  }
})

</script>

<template>
  <NavBar>
    <RouterView />
  </NavBar>
</template>

<style scoped>

</style>
