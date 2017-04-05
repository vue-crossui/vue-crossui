import Vue from 'vue'
import CrossUI from '../../src/index.js'
Vue.use(CrossUI, {
  // type: 'bootstrap',
  // type: 'materialize',
  type: 'bulma',
  fontAwesome: true,
})
import { createVM } from '../helpers/utils.js'



describe('Button', function () {
  it('should render buttons', function () {
    const vm = createVM(this, `
<ui-button>aaaaaa</ui-button>
`, { components: {}})
    
  })
})
