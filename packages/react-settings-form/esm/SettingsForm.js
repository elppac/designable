var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (let p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
import React, { useMemo } from 'react'
import { createForm } from '@formily/core'
import { Form } from '@formily/antd'
import { observer } from '@formily/react'
import { requestIdle, cancelIdle } from '@designable/shared'
import {
  usePrefix,
  useSelected,
  useOperation,
  useCurrentNode,
  useWorkbench,
  IconWidget,
  NodePathWidget,
} from '@designable/react'
import { SchemaField } from './SchemaField'
import { SettingsFormContext } from './shared/context'
import { useLocales, useSnapshot } from './effects'
import { Empty } from 'antd'
import cls from 'classnames'
import './styles.less'
let GlobalState = {
  idleRequest: null,
}
export var SettingsForm = observer(
  function (props) {
    let _a, _b
    let workbench = useWorkbench()
    let currentWorkspace =
      (workbench === null || workbench === void 0
        ? void 0
        : workbench.activeWorkspace) ||
      (workbench === null || workbench === void 0
        ? void 0
        : workbench.currentWorkspace)
    let currentWorkspaceId =
      currentWorkspace === null || currentWorkspace === void 0
        ? void 0
        : currentWorkspace.id
    let operation = useOperation(currentWorkspaceId)
    let node = useCurrentNode(currentWorkspaceId)
    let selected = useSelected(currentWorkspaceId)
    let prefix = usePrefix('settings-form')
    let schema =
      (_a = node === null || node === void 0 ? void 0 : node.designerProps) ===
        null || _a === void 0
        ? void 0
        : _a.propsSchema
    let isEmpty = !(
      node &&
      ((_b = node.designerProps) === null || _b === void 0
        ? void 0
        : _b.propsSchema) &&
      selected.length === 1
    )
    let form = useMemo(
      function () {
        let _a
        return createForm({
          initialValues:
            (_a =
              node === null || node === void 0
                ? void 0
                : node.designerProps) === null || _a === void 0
              ? void 0
              : _a.defaultProps,
          values: node === null || node === void 0 ? void 0 : node.props,
          effects: function (form) {
            let _a
            useLocales(node)
            useSnapshot(operation)
            ;(_a = props.effects) === null || _a === void 0
              ? void 0
              : _a.call(props, form)
          },
        })
      },
      [
        node,
        node === null || node === void 0 ? void 0 : node.props,
        schema,
        operation,
        isEmpty,
      ]
    )
    let render = function () {
      if (!isEmpty) {
        return React.createElement(
          'div',
          {
            className: cls(prefix, props.className),
            style: props.style,
            key: node.id,
          },
          React.createElement(
            SettingsFormContext.Provider,
            { value: props },
            React.createElement(
              Form,
              {
                form: form,
                colon: false,
                labelWidth: 120,
                labelAlign: 'left',
                wrapperAlign: 'right',
                feedbackLayout: 'none',
                tooltipLayout: 'text',
              },
              React.createElement(SchemaField, {
                schema: schema,
                components: props.components,
                scope: __assign({ $node: node }, props.scope),
              })
            )
          )
        )
      }
      return React.createElement(
        'div',
        { className: prefix + '-empty' },
        React.createElement(Empty, null)
      )
    }
    return React.createElement(
      IconWidget.Provider,
      { tooltip: true },
      React.createElement(
        'div',
        { className: prefix + '-wrapper' },
        !isEmpty &&
          React.createElement(NodePathWidget, {
            workspaceId: currentWorkspaceId,
          }),
        React.createElement('div', { className: prefix + '-content' }, render())
      )
    )
  },
  {
    scheduler: function (update) {
      cancelIdle(GlobalState.idleRequest)
      GlobalState.idleRequest = requestIdle(update, {
        timeout: 500,
      })
    },
  }
)