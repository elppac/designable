import React from 'react'
import { useCursor, usePrefix, useViewport, useOperation } from '../../hooks'
import { observer } from '@formily/reactive-react'
import { CursorDragType, CursorStatus } from '@designable/core'
import { calcRectByStartEndPoint } from '@designable/shared'
import cls from 'classnames'
export var FreeSelection = observer(function () {
  let cursor = useCursor()
  let viewport = useViewport()
  let operation = useOperation()
  let prefix = usePrefix('aux-free-selection')
  let createSelectionStyle = function () {
    let startDragPoint = viewport.getOffsetPoint({
      x: cursor.dragStartPosition.topClientX,
      y: cursor.dragStartPosition.topClientY,
    })
    let currentPoint = viewport.getOffsetPoint({
      x: cursor.position.topClientX,
      y: cursor.position.topClientY,
    })
    let rect = calcRectByStartEndPoint(
      startDragPoint,
      currentPoint,
      viewport.dragScrollXDelta,
      viewport.dragScrollYDelta
    )
    let baseStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0.2,
      borderWidth: 1,
      borderStyle: 'solid',
      transform: 'perspective(1px) translate3d('
        .concat(rect.x, 'px,')
        .concat(rect.y, 'px,0)'),
      height: rect.height,
      width: rect.width,
      pointerEvents: 'none',
      boxSizing: 'border-box',
      zIndex: 1,
    }
    return baseStyle
  }
  if (
    operation.moveHelper.hasDragNodes ||
    cursor.status !== CursorStatus.Dragging ||
    cursor.dragType !== CursorDragType.Move
  )
    return null
  return React.createElement('div', {
    className: cls(prefix),
    style: createSelectionStyle(),
  })
})