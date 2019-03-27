/**
 * 获取${opt.year}年${opt.month}月数据
 * @param {opt} Object
 * @param {value} Array | none 已经选中的
 * @param {opt.year} Number 渲染年
 * @param {opt.month} Number 渲染月
 * @param {opt.disabled} Array | none 禁止选中的
 * @param {opt.mutil} Boolean 多选模式
 * @param {opt.range} Boolean 区域选择模式
 * @param {opt.weeks} Array | none
 * @param {opt.mixin} Array | none {text: 1,label: 1}
 * @return Object
 */

// 判断日期是否相等
function isSome(v1 = [], v2 = []) {
  return v1[0] === v2[0] && v1[1] === v2[1] && v1[2] === v2[2]
}

export default class Calendar {
  constructor(value = [], opt = {}) {
    const now = new Date()
    this.currentDate = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
    this.year = this.currentDate[0] // 当前渲染年
    this.month = this.currentDate[1] // 当前渲染月
    this.value = value
    this.disabled = []
    this.mixin = [] // 混入数据
    this.multi = false
    this.range = false
    this.weeks = ['日', '一', '二', '三', '四', '五', '六']
    this.init(opt)
  }
  // 传入opt覆盖默认参数，返回当月数据
  init(opt) {
    for (let i in opt) {
      if (opt[i]) {
        this[i] = opt[i]
      }
    }
    if (this.value.length > 0) {
      if (this.range) {
        const [[year, month, day], [year2, month2, day2] = []] = this.value
        this.rangeBegin = [year, month, day]
        this.rangeEnd = [year2, month2, day2]
      } else if (this.multi) {
        this.multiDays = this.value
      }
    }
    return this.getDays(this.year, this.month - 1)
  }
  // 获取当月数据
  getDays(y = this.year, m = this.month - 1) {
    const firstDayOfMonth = new Date(y, m, 1).getDay() // 当月第一天星期
    const lastDateOfMonth = new Date(y, m + 1, 0).getDate() // 当月最后一天日期
    const lastDayOfLastMonth = new Date(y, m, 0).getDate() // 上月最后一天日期

    let i, // 当前时间
      line = 0, // 当前行数
      days = [], // 手机日期
      nextMonthPushDays = 1

    for (i = 1; i <= lastDateOfMonth; i++) {
      const day = new Date(y, m, i).getDay()
      let k
      if (!days[line]) days[line] = []

      // 补充前一月日期
      if (i === 1) {
        k = lastDayOfLastMonth - firstDayOfMonth + 1
        for (let j = 0; j < firstDayOfMonth; j++) {
          days[line].push({ day: k, gray: true, isPrev: true, disabled: true })
          k++
        }
      }

      const options = {
        day: i,
        isToday:
          y === this.currentDate[0] &&
          m === this.currentDate[1] - 1 &&
          i === this.currentDate[2]
      }

      if (this.range) {
        // 范围选择
        options.disabled = this.disabled.some(
          v => y === v[0] && m === v[1] - 1 && i === v[2]
        )
        // 判断是否在选择区域内部
        if (this.rangeBegin.length > 0) {
          const beginTime = new Date(
            this.rangeBegin[0],
            this.rangeBegin[1] - 1,
            this.rangeBegin[2]
          )
          const endTime = new Date(
            this.rangeEnd[0],
            this.rangeEnd[1] - 1,
            this.rangeEnd[2]
          )
          const stepTime = new Date(y, m, i)
          if (beginTime <= stepTime && endTime >= stepTime) {
            options.selected = true
          }
        }
        days[line].push(options)
      } else if (this.multi) {
        // 多选形式
        options.selected = this.value.some(
          v => y === v[0] && m === v[1] - 1 && i === v[2]
        )
        options.disabled = this.disabled.some(
          v => y === v[0] && m === v[1] - 1 && i === v[2]
        )
        days[line].push(options)
      } else {
        // 单选形式
        options.selected =
          this.value[0] === y && this.value[1] - 1 === m && this.value[2] === i
        options.disabled = this.disabled.some(
          v => y === v[0] && m === v[1] - 1 && i === v[2]
        )
        days[line].push(options)
      }
      if (day == 6 && i < lastDateOfMonth) {
        line++
      } else if (i == lastDateOfMonth) {
        let k = 1
        for (let d = day; d < 6; d++) {
          days[line].push({ day: k, gray: true, isNext: true, disabled: true })
          k++
        }
        // 第六行全为下月数据时候，开始日期
        nextMonthPushDays = k
      }
    }
    // 如果日历只显示五行，则增加下一月日期
    if (line <= 5 && nextMonthPushDays > 0) {
      for (let i = line + 1; i <= 5; i++) {
        days[i] = []
        let start = nextMonthPushDays + (i - line - 1) * 7
        for (let d = start; d <= start + 6; d++) {
          days[i].push({ day: d, gray: true, isNext: true, disabled: true })
        }
      }
    }
    // 混入数据
    this.days = days.map(row =>
      row.map(options => {
        const target = this.mixin.find(item =>
          isSome(item.value, [this.year, this.month, options.day])
        )
        return { ...options, ...target }
      })
    )
    return this.days
  }
}
