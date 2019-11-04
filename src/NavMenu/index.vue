<template>
  <div class="menu-container">
    <div v-for="item in data" :key="item.name" class="menu-item">
      <div :style="{'padding-left': `${offset}px`}" :class="{active: item.name === activeName, 'has-children': hasChildren(item)}" @click="handleClick(item)" class="menu-name">
        <span class="name">{{getName(item)}}</span>
        <div v-if="hasChildren(item)" class="menu-arrow"></div>
      </div>
      <div v-if="item.children && item.children.length && hasSelectedKey(activeName, item)" class="menu-children">
        <nav-menu @click="handleClick" :active="activeName" :offset="offset + 12" :data="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
function hasSelectedKey(activeName, item = {}) {
  if (item.name === activeName) return true
  if (item.children) {
    return item.children.some(it => hasSelectedKey(activeName, it))
  }
  return false
}


export default {
  name: 'NavMenu',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    offset: {
      type: Number,
      default: 12
    },
    active: {
      type: String,
      default: ''
    },
    spreadKeys: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeName: this.active,
      spreadKeysArr: this.spreadKeys
    }
  },
  watch: {
    active(active) {
      this.activeName = active
    },
    spreadKeys: {
      deep: true,
      handler(spreadKeys) {
        this.spreadKeysArr = spreadKeys
      }
    }
  },
  methods: {
    getName(item) {
      return item.meta && item.meta.title || item.name || item.path
    },
    hasChildren(item) {
      return item.children && item.children.length
    },
    hasSelectedKey,
    handleClick(item) {
      this.activeName = this.getName(item)
      this.$emit('click', item)
    }
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #1890ff;
$plain-color: #e6f7ff;
.menu-container {
  width: 256px;
  height: 100%;
  background: white;
}
.menu-name {
  height: 40px;
  line-height: 40px;
  padding: 0 24px 0 12px;
  position: relative;
  font-size: 14px;
  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    transform: scaleY(0.00001);
    border-right: 3px solid $primary-color;
    transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  &.active,
  &:hover {
    color: $primary-color;
    background: $plain-color;
    &.has-children {
      background: white;
      .menu-arrow {
        &::after,
        &::before {
          background: $primary-color;
        }
      }
      &::after {
        opacity: 0;
      }
    }
  }
  &.active {
    &::after {
      opacity: 1;
      transform: scaleY(1);
    }
  }
}
.menu-arrow {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    background: rgba(0, 0, 0, 0.65);
    width: 6px;
    height: 1.5px;
    border-radius: 2px;
  }
  &::before {
    transform: rotate(-45deg) translateX(2px);
  }
  &:after {
    transform: rotate(45deg) translateX(-2px);
  }
}
</style>
