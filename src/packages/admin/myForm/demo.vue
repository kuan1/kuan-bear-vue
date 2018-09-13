<template>
  <div>
    <h2>测试页面</h2>
    <my-form ref="form" :record="record" :labels="labels">
      <el-form-item
        slot-scope="{save}"
        prop="custom"
        label="自定义内容"
        label-width="150px"
        :rules="{ required: true, message: '请输入', trigger: 'blur' }"
      >
        <el-input @change="save($event, 'custom')"></el-input>
      </el-form-item>
    </my-form>

    <button @click="test">测试</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        record: {
          name: '卢忠宽',
          time: new Date(),
          time2: new Date(),
          region: [],
          color: 'red',
          test: '测试',
          timeRange: [new Date(), new Date()]
        },
        labels: {
          test: '测试',
          name: {
            label: '名字'
          },
          logo: {
            label: 'logo',
            type: 'image'
          },
          team: {
            label: '公司名称'
          },
          classify: {
            label: '分类',
            type: 'select',
            options: [
              {
                value: 1,
                label: '典雅白'
              }, {
                value: '2',
                label: '可爱粉'
              }, {
                value: '3',
                label: '田园绿'
              }, {
                value: '4',
                label: '梦幻蓝'
              }, {
                value: '5',
                label: '高贵紫'
              }, {
                value: '6',
                label: '橘橙黄'
              }, {
                value: '7',
                label: '中国红'
              }, {
                value: '8',
                label: '撞色系'
              }, {
                value: '9',
                label: '主题式'
              }, {
                value: '10',
                label: '户外风'
              }, {
                value: '22',
                label: '其他'
              }
            ]
          },
          region: {
            label: '地区选择',
            type: 'region'
          },
          time: {
            label: '时间',
            type: 'datetime'
          },
          time2: {
            label: '日期',
            type: 'date'
          },
          time3: {
            label: '时间',
            type: 'time'
          },
          color: {
            label: '颜色',
            type: 'color'
          },
          timeRange: {
            label: '时间段',
            type: 'daterange'
          }
        }
      }
    },
    methods: {
      test() {
        this.$refs.form.submit((data) => {
          console.log(data)
        })
      }
    }
  }
</script>
