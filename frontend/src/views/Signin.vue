<template>
<div class="signin">
  <Signincomponent msg="Welcome to Your Vue.js App"/>
</div>
</template>

<script>
// @ is an alias to /src
import Signincomponent from '@/components/Signin.vue'

export default {
  name: 'Signin',
  components: {
    Signincomponent
  }
}
</script>
