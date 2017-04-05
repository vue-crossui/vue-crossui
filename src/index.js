// import _Vue from 'vue'
import UiElement from './common/Element.vue'
import UiButton from './common/Button.vue'



const plugin = {
  install(Vue, options){
    Vue.component('ui-element', UiElement)
    Vue.component('ui-button', UiButton)
    
    Vue.prototype.$type = options.type
    
    switch (options.type) {
      case 'bootstrap':
        require('bootstrap/dist/css/bootstrap.min.css')
        break;
      case 'materialize':
        require('materialize-css/dist/css/materialize.min.css')
        break;
      case 'bulma':
        require('bulma/css/bulma.css')
        break;
    }

    if (options.fontAwesome) {
      require('font-awesome/css/font-awesome.min.css')
    }
  }
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  UiElement,
  UiButton,
  version
}
