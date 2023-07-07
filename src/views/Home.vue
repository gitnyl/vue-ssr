<template>
  <div class="home">
    <HelloWorld msg="HOME HI" />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
const pageTitle = "HOME HI";
export default {
  name: 'Home',
  components: { HelloWorld },
  serverPrefetch() {
    this.$ssrContext.title = pageTitle;
  },
  mounted () {
    document.title = pageTitle;
  }
}
</script>