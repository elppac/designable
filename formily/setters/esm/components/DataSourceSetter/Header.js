import React from 'react'
import { observer } from '@formily/reactive-react'
import { usePrefix } from '@designable/react'
import './styles.less'
export var Header = observer(function (_a) {
  let extra = _a.extra,
    title = _a.title
  let prefix = usePrefix('data-source-setter')
  return React.createElement(
    'div',
    { className: ''.concat(prefix + '-layout-item-header') },
    React.createElement(
      'div',
      { className: ''.concat(prefix + '-layout-item-title') },
      title
    ),
    extra
  )
})