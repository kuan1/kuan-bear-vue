# 业务组件

## lottery (抽奖组件)
```html
<lottery 
  :total="8"
  :index="index" 
  :bg="require('./images/bg.png')" 
  :go-bg="require('./images/go.png')" 
  @click="start" 
  @end="end" 
/>
```

## 演示

<lottery />