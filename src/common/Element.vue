
<script>
export default {
  props: {
    tagName: {
      type: String,
      default: 'div'
    },
    'classes': {

    }
  },
  data () {
    return {

    };
  },
  render(h){
    return h(this.tagName, {
      attrs: this.$props,
      'class': this['classes']
    }, this.$slots.default)
  }
};
</script>