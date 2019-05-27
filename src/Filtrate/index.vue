<template>
  <div class="container">
    <div v-if="active" @touchstart="bgClose" @click="bgClose" class="bg-container">
      <div class="menu-bg" @click="bgClose"></div>
    </div>
    <div class="search-menu-outer">
      <div class="menu-container">
        <div class="menu-list">
          <div
            v-for="(item,index) in list"
            :key="index"
            @click="showSearch(item.key)"
            class="item"
            :class="activePayload[item.key].length > 0 ? 'item-active' : ''"
          >
            <!-- sort图标 -->
            <div v-if="item.key=== 'sort'">
              <img
                src="./images/btn_sort2.png"
                class="sort-icon"
                v-if="activePayload[item.key].length > 0"
              >
              <img src="./images/btn_sort.png" class="sort-icon" v-else>
            </div>
            <div
              class="item-text"
              :class="{'item-active-text':activePayload[item.key].length}"
            >{{item.name}}</div>
          </div>
        </div>

        <div v-if="active" class="dailog-outer">
          <div class="dailog-content">
            <div v-for="it in previewData" :key="it.value" class="data-item">
              <!-- 列表选择 -->
              <div v-if="it.select === 'sort'">
                <div
                  class="sort-item"
                  @click="selectCondition(it)"
                  :class="{'active-sort-item':it.active}"
                >{{it.title}}</div>
              </div>
              <!-- 矩形选择狂 -->
              <div
                v-else
                class="item-btn center-flex"
                :class="{'it-active':it.active }"
                @click="selectCondition(it)"
              >
                {{it.title}}
                <img
                  src="./images/actvie_icon.png"
                  class="active-icon"
                  v-if="it.active"
                >
              </div>
            </div>
          </div>
          <div class="dialog-footer" v-if="!radio">
            <div class="reset-block" @click="reset">重置</div>
            <div class="confirm-block" @click="confirm">确定</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    condition: {
      type: Object,
      default: () => ({
        district: [
          { title: '', value: '' }
        ]
      })
    },
    payload: {
      type: Object,
      default: () => ({ district: [''] })
    },
    list: {
      type: Array,
      default: () => [
        { name: '', key: 'district' }
      ]
    },
    radioList: {
      // 单选
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      active: '',
      activePayload: this.payload,
      previewData: []
    }
  },
  computed: {
    radio() {
      // 是否单选 true
      return this.radioList.includes(this.active)
    }
  },
  mouted() {
    this.setPreviewData()
  },
  onShow() {
    // 确保子组件 onShow 在父组件之后出发渲染
    setTimeout(() => {
      this.activePayload = this.payload
      console.log(2)
    }, 600)
  },
  methods: {
    showSearch(key) {
      this.active = key
      this.activePayload = this.deepClone(this.payload)
      this.setPreviewData()
    },
    setPreviewData() {
      const { activePayload, active, condition } = this
      const previewData = condition[active] || []
      previewData.forEach(item => {
        item.active = (activePayload[active] || []).includes(item.value)
      })
      this.previewData = previewData
    },
    close() {
      this.active = ''
    },
    bgClose() {
      if (this.radio) {
        this.close()
      }
    },
    reset() {
      const { activePayload, active } = this
      activePayload[active] = [] // 使用了引用关系
      this.activePayload = activePayload
      this.setPreviewData() // 刷新页面
      this.$emit('search', activePayload)
      this.close()
    },
    confirm() {
      this.$emit('search', this.activePayload)
      this.close()
    },
    // 选择或者取消筛选条件
    selectCondition({ value = '' }) {
      const { radio, active, activePayload } = this
      let condition = activePayload[active] || []
      if (radio) {
        // 单选
        this.activePayload[active] = condition.includes(value) ? [] : [value] // 点击添加或者取消
        this.setPreviewData()
        this.$emit('search', this.activePayload)
        setTimeout(this.close, 300)
      } else {
        // 多选
        if (condition.includes(value)) {
          condition = condition.filter(item => item !== value)
        } else {
          condition.push(value)
        }
        this.activePayload[active] = condition
        this.setPreviewData()
      }
    },
    deepClone(values) {
      let copy

      if (values === null || typeof values !== 'object') return values

      if (values instanceof Date) {
        copy = new Date()
        copy.setTime(values.getTime())
        return copy
      }

      if (values instanceof Array) {
        copy = []
        for (let i = 0, len = values.length; i < len; i++) {
          copy[i] = this.deepClone(values[i])
        }
        return copy
      }

      // Handle Object
      if (values instanceof Object) {
        copy = {}
        for (const attr in values) {
          if (values.hasOwnProperty(attr)) copy[attr] = this.deepClone(values[attr])
        }
        return copy
      }

      throw new Error("deep clone isn't supported.")
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 750px;
  position: relative;
}
.bg-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0);
}
.menu-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.search-menu-outer {
  height: 0.9rem;
}

.menu-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 7.5rem;
  z-index: 9;
  background: white;
}

.menu-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.05rem 0.12rem 0 rgba(0, 0, 0, 0.06);
  padding: 0.28rem 0.4rem 0.28rem;
}

.item {
  display: flex;
  align-items: center;
}
.item::after {
  content: "";
  display: block;
  border-top: 0.1rem solid #e8e8eb;
  border-left: 0.07rem solid transparent;
  border-right: 0.07rem solid transparent;
  margin-left: 0.12rem;
}
.item:last-child::after {
  border: none;
}
.item-active {
  display: flex;
  align-items: center;
  color: #ff2741;
}
.item-active::after {
  border-top: none;
  border-bottom: 0.1rem solid #ff2741;
}

.item-text {
  font-size: 0.28rem;
  color: rgba(50, 48, 56, 1);
}

.item-active-text {
  color: #ff2741;
}

.menu-container {
  .dailog-content {
    padding: 0.1rem 0.4rem 0;
    margin-right: -0.25rem;
    display: flex;
    flex-wrap: wrap;
  }
  .data-item {
    &:last-child {
      .item-btn {
        margin-bottom: 0.5rem;
      }
    }
  }
  .item-btn {
    width: 1.5rem;
    height: 0.6rem;
    border-radius: 0.06rem;
    margin: 0.4rem 0.24rem 0 0;
    background: #f7f7f7;
    font-size: 0.24rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(50, 48, 56, 1);
    position: relative;
  }
  .active-icon {
    position: absolute;
    width: 0.25rem;
    height: 0.2rem;
    right: 0;
    bottom: 0;
  }
  .it-active {
    background: #fff4f4;
    color: #ff2741;
  }
  .dialog-footer {
    box-shadow: 0 -0.07rem 0.1rem 0px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .reset-block {
      width: 50%;
      height: 0.98rem;
      background: rgba(255, 255, 255, 1);

      text-align: center;
      font-size: 0.32rem;
      font-family: PingFangSC-Regular;
      color: rgba(139, 144, 157, 1);
      line-height: 0.98rem;
    }
    .confirm-block {
      width: 50%;
      height: 0.98rem;
      background: linear-gradient(
        -90deg,
        rgba(255, 39, 65, 1),
        rgba(228, 8, 44, 1)
      );
      text-align: center;
      font-size: 0.32rem;
      font-family: PingFangSC-Regular;
      color: rgba(255, 255, 255, 1);
      line-height: 0.98rem;
    }
  }
  .plain-btn {
    width: 2.16rem;
    height: 0.8rem;
    background: rgba(243, 249, 255, 1);
    border: 1px solid rgba(50, 150, 250, 1);
    border-radius: 0.06rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.28rem;
    color: #3296fa;
    box-sizing: border-box;
  }
  .primary-btn {
    width: 4.6rem;
    height: 0.8rem;
    background: rgba(50, 150, 250, 1);
    border-radius: 0.06rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.38rem;
  }
}
.sort-list {
  &::after {
    content: "";
    border: none;
  }
}
.sort-icon {
  width: 0.33rem;
  height: 0.31rem;
}
.data-item {
  &:last-child {
    .sort-item {
      border: none;
    }
  }
}
.sort-item {
  width: 3.7rem;
  border-bottom: 1px solid #eeeeee;
  font-size: 0.3rem;
  font-family: PingFangSC-Regular;
  color: rgba(50, 48, 56, 1);
  height: 0.98rem;
  line-height: 0.98rem;
}
.active-sort-item {
  color: rgba(255, 39, 65, 1);
}
</style>
