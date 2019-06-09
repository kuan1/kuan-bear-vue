# 基础组件

## qrcode 
```js
import Qrcode from 'kuan-bear/lib/Qrcode'
```
```html
<qrcode url="https:://www.luzhongkuan.cn" />
```

### qrcode 演示
<qrcode />


## SimplePage

```html
<template>
  <simple-page title="测试页面" sub="这是一个临时测试页面" tip="幻熊科技">
    <button class="k-btn k-btn-primary">首页</button>
  </simple-page>
</template>

<script>
import SimplePage from 'kuan-bear-vue/lib/SimplePage'

export default {
  components: {
    SimplePage
  }
}
</script>
```

### simple-page 演示
<simple-page />