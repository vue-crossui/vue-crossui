<template>
  <ui-element v-bind="props">
    <i v-if="icon" :class="'fa fa-' + icon"></i>
    <slot></slot>
  </ui-element>
</template>

<script>

export default {
  props: {
    tag: {
      default: 'button'
    },
    type: {
      default: 'primary'
    },
    size: {
      default: ''
    },
    icon: {
      default: null
    },

    block: {
      type: Boolean,
      default: false
    },

  },
  methods: {
    classes () {
      const data = {
        bootstrap: [
          'btn',
          this.type ? `btn-${this.type}` : null,
          this.size ? `btn-${this.size}` : null,
          this.block ? `btn-block` : null,
          this.disabled ? `disabled` : null,
        ],
        materialize: [
          'btn',
          this.type ? `${this.type}` : null,
          this.size ? `btn-${this.size}` : null,
          this.block ? `btn-block` : null,
          this.disabled ? `disabled` : null,
        ],
        bulma: [
          'button',
          this.type ? `is-${this.type}` : null,
          this.size ? `is-${this.size}` : null,
          this.block ? `is-block` : null,
          this.disabled ? `disabled` : null,
        ],

      }

      return data[this.$type]
    }
  },
  data () {

    return {
      props: {
        tagName: this.tag,
        disabled: this.disabled,
        classes: this.classes()
      }
    };
  },
  created(){
    // console.log(this.classes)
  }
};
</script>

<style lang="css">
</style>