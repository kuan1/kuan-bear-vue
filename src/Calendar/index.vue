<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <div @click="yearVisible = !yearVisible" class="header-wrap">
        <i @click.stop="prev" class="iconfont icon-arrow-left"></i>
        <div class="calendar-title">{{year}}-{{month}}</div>
        <i @click.stop="next" class="iconfont icon-arrow-right"></i>
      </div>
    </div>
    <table class="calendar-table">
      <tbody>
        <tr>
          <th v-for="item in weeks" :key="item" class="cell">
            {{item}}
          </th>
        </tr>
        <tr v-for="(item, index) in days" :key="index">
          <td class="cell" v-for="(it) in item" :class="{'selected-cell': it.selected}" @click.stop="select(it)" :key="it.day">
            <div :class="{ prev: it.isPrev, next: it.isNext}">
              <div :class="{gray: it.gray, disabled: it.disabled, selected: it.selected, today: it.isToday}">{{it.day}}</div>
              <div class="text" :class="{none: !it.text && !it.isToday}">{{it.text || '今天'}}</div>
              <div v-if="it.label" class="label">{{it.label}}</div>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <transition name="fade">
          <div class="calendar-years" v-if="yearVisible">
            <span v-for="y in years" :key="y" @click="selectYear(y)" :class="{'active':y == year}">{{y}}</span>
          </div>
        </transition>
      </tfoot>
    </table>
  </div>

</template>
<script>
import Calendar from './Calendar.js'

const now = new Date()
const y = now.getFullYear()
const m = now.getMonth() + 1
const d = now.getDate()

export default {
  props: {
    // 多选模式
    multi: {
      type: Boolean,
      default: true
    },
    // 范围模式
    range: {
      type: Boolean,
      default: false
    },
    // 选择时间
    value: {
      type: Array,
      default: () => [[2019, 3, 27], [2019, 3, 29]]
    },
    weeks: {
      type: Array,
      default: () => ['日', '一', '二', '三', '四', '五', '六']
    },
    months: {
      type: Array,
      default: () => ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    disabled: {
      type: Array,
      default: function () {
        return []
      }
    },
    mixin: {
      type: Array,
      default: () => [{ value: [y, m, d], text: '测试', label: '特' }]
    }
  },
  data() {
    return {
      days: [],
      years: [],
      yearVisible: false,
      renderYear: '',
      renderMonth: ''
    }
  },
  computed: {
    year() {
      if (this.renderYear) return this.renderYear
      if (this.multi) {
        const value = this.value[0]
        if (value.length) return value[0]
        return year
      }
      return this.value[0]
    },
    month() {
      if (this.renderMonth) return this.renderMonth
      if (this.multi) {
        const value = this.value[0]
        if (value.length) return value[1]
        return year
      }
      return this.value[1]
    }
  },
  mounted() {
    if (this.mixin && this.mixin.length) {
      this.init({
        year: this.mixin[0].value[0],
        month: this.mixin[0].value[1]
      })
    } else {
      this.init({ year: this.y || y, month: this.m || m })
    }
  },
  methods: {
    init({ year: y, month: m } = {}) {
      const { multi, range, value, mixin, disabled, selected, year, month } = this
      const data = new Calendar(value, {
        multi, range, value, mixin, disabled, selected, year: y || year, month: m || month
      })
      console.log(data.days)
      this.days = data.days
    },
    select(select) {
      this.$emit('select', [this.year, this.month, select.day])
    },
    prev() {
      if (this.month == 0) {
        this.renderMonth = 11
        this.renderYear = parseInt(this.year) - 1
      } else {
        this.renderMonth = parseInt(this.month) - 1
      }
      this.init({
        year: this.year,
        month: this.month
      })
    },
    next() {
      if (this.month == 11) {
        this.renderMonth = 0
        this.renderYear = parseInt(this.year) + 1
      } else {
        this.renderMonth = parseInt(this.month) + 1
      }
      this.init({
        year: this.year,
        month: this.month
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$main-color: #ff6633;
.calendar-container {
  width: 500px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(238, 238, 238, 1);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.04);
  .calendar-table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    font-size: 12px;
    color: #68676c;
  }
  td,
  th {
    border: 1px solid #eeeeee;
    position: relative;
  }
  th {
    height: 16px;
  }
  th:first-child,
  th:last-child {
    color: $main-color;
  }
  td {
    height: 38px;
    &:hover {
      background: #fff5f2;
    }
  }
  .label {
    position: absolute;
    top: 0;
    right: 0;
    width: 14px;
    height: 14px;
    background: $main-color;
    font-size: 12px;
    text-align: center;
    line-height: 14px;
    color: white;
  }
  .today,
  .selected {
    color: $main-color;
  }
  .disabled,
  .gray {
    color: #999;
  }
  .prev,
  .next {
    display: none;
  }
  .text {
    color: $main-color;
    height: 24px;
    &.none {
      visibility: hidden;
    }
  }
  .selected-cell {
    border: 2px solid $main-color;
  }
}
.calendar-header {
  .header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    font-size: 16px;
    padding: 0 14px;
  }
  .calendar-title {
    font-weight: bold;
    font-size: 14px;
  }
}
.iconfont {
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #333;
  }
}
</style>
