<template>
  <div>
    <div>
      <upload-ali :data="data"></upload-ali>
    </div>
  </div>
</template>

<script>
  import UploadAli from '../packages/uploadAli'
  export default {
    data() {
      return {
        data: {
          // region: '<Your region>',
          accessKeyId: 'LTAIjKz63czGLpYZ',
          accessKeySecret: 'U3lESXK5Aup9E7xmJH68dKjPnJSOHg',
          bucket: 'halo-test'
        }
      }
    },
    components: {
      UploadAli
    }
  }
</script>
