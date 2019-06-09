---
home: true
heroText: kuan-bear-vue
actionText: 快速上手 →
actionLink: /guide/
---

## 安装
```
yarn add kuan-bear-vue
```

## 使用 :100:

```js
import Vue from 'vue'
import BearVue from 'kuan-bear-vue'
import toast from 'kuan-bear-vue/lib/toast'

// 只会自动注入directives和filter
vue.use(BearVue)
toast('1234')
```