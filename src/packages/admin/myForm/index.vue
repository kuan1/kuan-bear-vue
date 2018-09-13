k<template>
  <el-form
    class="my-form"
    :model="formData"
    ref="form"
    label-width="150px"
  >
    <el-form-item
      v-for="(item, key) in labels"
      :key="key"
      :prop="key"
      :label="typeof item === 'string' ? item : item.label"
      :rules="getRules(item)"
    >
      <!--没有type直接使用input-->
      <el-input v-if="typeof item === 'string'" :placeholder="`请输入${item}`" :value="formData[key]" @change="saveData($event, key)"></el-input>
      <!--图片-->
      <my-upload v-else-if="item.type === 'image'" :value="formData[key]" @change="saveData($event, key)"></my-upload>
      <!--地区选择-->
      <region-select
        v-else-if="item.type === 'region'"
        :value="formData[key]"
        @setname="saveName($event, key)"
        @change="saveData($event, key)"></region-select>
      <region-select
        v-else-if="item.type === 'region2'"
        simple
        :value="formData[key]"
        @setname="saveName($event, key)"
        @change="saveData($event, key)"></region-select>
      <!--select框-->
      <el-select v-else-if="item.type === 'select'" :value="formData[key]" @change="saveData($event, key)">
        <el-option v-for="it in item.options" :key="it.value" :value="it.value" :label="it.label"></el-option>
      </el-select>
      <!--时间选择-->
      <el-date-picker
        v-else-if="item.type === 'datetime'"
        type="datetime"
        :value="formData[key]"
        @input="saveData($event, key)"
        placeholder="选择日期时间">
      </el-date-picker>
      <el-date-picker
        v-else-if="item.type === 'date'"
        type="date"
        :value="formData[key]"
        @input="saveData($event, key)"
        placeholder="选择日期时间">
      </el-date-picker>
      <el-time-picker
        v-else-if="item.type === 'time'"
        :value="formData[key]"
        @input="saveData($event, key)"
        :picker-options="{
          selectableRange: '00:30:00 - 23:59:59'
        }"
        placeholder="任意时间点">
      </el-time-picker>
      <el-date-picker
        v-else-if="item.type === 'daterange'"
        type="daterange"
        :value="formData[key]"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <el-date-picker
        v-else-if="item.type === 'datetimerange'"
        type="datetimerange"
        :value="formData[key]"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <!--颜色-->
      <el-color-picker
        v-else-if="item.type === 'color'"
        :value="formData[key]"
        @input="saveData($event, key)"
      ></el-color-picker>
      <!--默认输入框-->
      <el-input v-else :placeholder="`请输入${item.label}`" :value="formData[key]" @change="saveData($event, key)"></el-input>
    </el-form-item>
    <slot :test="1234" :save="saveData" :data="formData"></slot>
  </el-form>
</template>

<script>
  // types: input(默认), phone, time, date, datetime, datetimerange, image, select, region

  export default {
    props: {
      record: {
        name: ''
      },
      labels: {
        name: {
          label: '名字'
        }
      }
    },
    data() {
      const validatePhone = (rule, value, callback) => {
        if (!(/^1\d{10}$/.test(value))) {
          callback(new Error('请正确输入手机号'))
        } else {
          callback()
        }
      }
      return {
        formData: {},
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now()
          }
        },
        rules: {
          required: true, message: '请输入', trigger: 'blur'
        },
        changeRule: {
          required: true, message: '请输入', trigger: 'change'
        },
        phoneRule: [
          { required: true, message: '请输入', trigger: 'blur' },
          { validator: validatePhone, message: '请正确输入手机号', trigger: 'blur' }
        ]
      }
    },
    watch: {
      record(e) {
        this.formData = {...e}
      }
    },
    methods: {
      saveData(value, key) {
        // console.log(value, key)
        this.$set(this.formData, key, value)
        // this.formData[key] = value
      },
      saveName(name, key) {
        if (name) {
          this.formData[key + '_name'] = name
        }
      },
      submit(callback) {
        this.$refs.form.validate((valid) => {
          if (valid) {
            callback(this.formData)
          }
        })
      },
      getRules(item) {
        if (item.rules) {
          return item.rules
        }
        if (typeof item === 'string') {
          return this.rules
        }
        if (item.type === 'phone') {
          return this.phoneRule
        }
        if (['image', 'select'].indexOf(item.type) > -1) {
          return this.changeRule
        }
        return this.rules
      }
    },
    mounted() {
      this.formData = {...this.record}
    },
    components: {
    }
  }
</script>
