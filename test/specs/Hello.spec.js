import Vue from 'vue'

import { createVM } from '../helpers/utils.js'



describe('Button', function () {
  it('should render buttons', function () {
    const vm = createVM(this, `
<ui-button>aaaaaa</ui-button>
`, { components: {}})
    
  })
})
