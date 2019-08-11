<template>
  <div class="menu-container">
    <div v-for="item in data" :key="item.name" class="menu-item">
      <div
        :style="{'padding-left': `${offset}px`}"
        :class="{active: getName(item) === activeName, 'has-children': hasChildren(item)}"
        @click="handleClick(item)"
        class="menu-name"
      >
        <span class="name">{{getName(item)}}</span>
        <div v-if="hasChildren(item)" class="menu-arrow"></div>
      </div>
      <div v-if="item.children && item.children.length" class="menu-children">
        <nav-menu
          @click="handleClick"
          :active="activeName"
          :offset="offset + 12"
          :data="item.children"
        />
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      activeName: this.active
    }
  },
  watch: {
    active(active) {
      this.activeName = active
    }
  },
  methods: {
    getName(item) {
      return item.meta && item.meta.title || item.name || item.path
    },
    hasChildren(item) {
      return item.children && item.children.length
    },
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
    content: '';
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
    content: '';
    display: block;
    position: absolute;
    background: #fff;
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
