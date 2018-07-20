import Vue from 'vue';

const Indicator = Vue.extend(require('./Indicator.vue').default);
let instance;

export default {
  open(options = {}) {
    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    instance.text = typeof options === 'string' ? options : options.text || '';
    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.visible = true;
    });
  },

  close() {
    if (instance) {
      instance.visible = false;
    }
  },

  install(Vue) {
    Vue.prototype.$indicator = this
  }
};
