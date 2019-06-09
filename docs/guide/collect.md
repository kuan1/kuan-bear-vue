# 业务组件

## MyVideo (普通视频播放)
```js
import MyVideo from 'kuan-bear-vue/lib/MyVideo'
```
```html
<my-video poster="http://pic.kuan1.top/ed366ae72a72f25885f25a7564cad093.jpg" src="https://www.w3cschool.cn/statics/demosource/mov_bbb.mp4" />
```

### MyVideo演示
<myVideo />

## Dplayer (m3u8视频播放)
```js
import Dplayer from 'kuan-bear-vue/lib/Dplayer'
```
```html
<dplayer src="https://www.w3cschool.cn/statics/demosource/mov_bbb.mp4" />
```

### dplayer演示
<dplayer />

## lottery (抽奖组件)
```js
import Lottery from 'kuan-bear-vue/lib/Lottery'
```
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

### lottery演示

<lottery />

## PileCard (堆叠卡片)
```js
import PileCard from 'kuan-bear-vue/lib/PileCard'
```
```html
<pile-card />
```

### PileCard 演示
<pile-card />
