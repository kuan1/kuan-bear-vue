<template>
  <div>
    <my-pagination :total="800" :page.sync="page"></my-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        page: 7
      }
    }
  }
</script>
