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
import React from 'react'
import { Table } from 'antd'
import { TreeNode, createBehavior, createResource } from '@designable/core'
import {
  useTreeNode,
  TreeNodeWidget,
  DroppableWidget,
  useNodeIdProps,
} from '@designable/react'
import { ArrayBase } from '@formily/antd'
import { observer } from '@formily/react'
import { LoadTemplate } from '../../common/LoadTemplate'
import cls from 'classnames'
import {
  queryNodesByComponentPath,
  hasNodeByComponentPath,
  findNodeByComponentPath,
  createEnsureTypeItemsNode,
} from '../../shared'
import { useDropTemplate } from '../../hooks'
import { createArrayBehavior } from '../ArrayBase'
import './styles.less'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
let ensureObjectItemsNode = createEnsureTypeItemsNode('object')
let HeaderCell = function (props) {
  let _a
  return React.createElement(
    'th',
    __assign({}, props, {
      'data-designer-node-id':
        (_a = props.className.match(/data-id\:([^\s]+)/)) === null ||
        _a === void 0
          ? void 0
          : _a[1],
    }),
    props.children
  )
}
let BodyCell = function (props) {
  let _a
  return React.createElement(
    'td',
    __assign({}, props, {
      'data-designer-node-id':
        (_a = props.className.match(/data-id\:([^\s]+)/)) === null ||
        _a === void 0
          ? void 0
          : _a[1],
    }),
    props.children
  )
}
export var ArrayTable = observer(function (props) {
  let node = useTreeNode()
  let nodeId = useNodeIdProps()
  useDropTemplate('ArrayTable', function (source) {
    let sortHandleNode = new TreeNode({
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'ArrayTable.Column',
        'x-component-props': {
          title: 'Title',
        },
      },
      children: [
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'ArrayTable.SortHandle',
          },
        },
      ],
    })
    let indexNode = new TreeNode({
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'ArrayTable.Column',
        'x-component-props': {
          title: 'Title',
        },
      },
      children: [
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'ArrayTable.Index',
          },
        },
      ],
    })
    let columnNode = new TreeNode({
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'ArrayTable.Column',
        'x-component-props': {
          title: 'Title',
        },
      },
      children: source.map(function (node) {
        node.props.title = undefined
        return node
      }),
    })
    let operationNode = new TreeNode({
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'ArrayTable.Column',
        'x-component-props': {
          title: 'Title',
        },
      },
      children: [
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'ArrayTable.Remove',
          },
        },
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'ArrayTable.MoveDown',
          },
        },
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'ArrayTable.MoveUp',
          },
        },
      ],
    })
    let objectNode = new TreeNode({
      componentName: 'Field',
      props: {
        type: 'object',
      },
      children: [sortHandleNode, indexNode, columnNode, operationNode],
    })
    let additionNode = new TreeNode({
      componentName: 'Field',
      props: {
        type: 'void',
        title: 'Addition',
        'x-component': 'ArrayTable.Addition',
      },
    })
    return [objectNode, additionNode]
  })
  let columns = queryNodesByComponentPath(node, [
    'ArrayTable',
    '*',
    'ArrayTable.Column',
  ])
  let additions = queryNodesByComponentPath(node, [
    'ArrayTable',
    'ArrayTable.Addition',
  ])
  let defaultRowKey = function () {
    return node.id
  }
  let renderTable = function () {
    if (node.children.length === 0)
      return React.createElement(DroppableWidget, null)
    return React.createElement(
      ArrayBase,
      { disabled: true },
      React.createElement(
        Table,
        __assign({ size: 'small', bordered: true }, props, {
          scroll: { x: '100%' },
          className: cls('ant-formily-array-table', props.className),
          style: __assign({ marginBottom: 10 }, props.style),
          rowKey: defaultRowKey,
          dataSource: [{ id: '1' }],
          pagination: false,
          components: {
            header: {
              cell: HeaderCell,
            },
            body: {
              cell: BodyCell,
            },
          },
        }),
        columns.map(function (node) {
          let children = node.children.map(function (child) {
            return React.createElement(TreeNodeWidget, {
              node: child,
              key: child.id,
            })
          })
          let props = node.props['x-component-props']
          return React.createElement(
            Table.Column,
            __assign({}, props, {
              title: React.createElement(
                'div',
                { 'data-content-editable': 'x-component-props.title' },
                props.title
              ),
              dataIndex: node.id,
              className: 'data-id:' + node.id,
              key: node.id,
              render: function (value, record, key) {
                return React.createElement(
                  ArrayBase.Item,
                  { key: key, index: key, record: null },
                  children.length > 0 ? children : 'Droppable'
                )
              },
            })
          )
        }),
        columns.length === 0 &&
          React.createElement(Table.Column, {
            render: function () {
              return React.createElement(DroppableWidget, null)
            },
          })
      ),
      additions.map(function (child) {
        return React.createElement(TreeNodeWidget, {
          node: child,
          key: child.id,
        })
      })
    )
  }
  useDropTemplate('ArrayTable.Column', function (source) {
    return source.map(function (node) {
      node.props.title = undefined
      return node
    })
  })
  return React.createElement(
    'div',
    __assign({}, nodeId, { className: 'dn-array-table' }),
    renderTable(),
    React.createElement(LoadTemplate, {
      actions: [
        {
          title: node.getMessage('addSortHandle'),
          icon: 'AddSort',
          onClick: function () {
            if (
              hasNodeByComponentPath(node, [
                'ArrayTable',
                '*',
                'ArrayTable.Column',
                'ArrayTable.SortHandle',
              ])
            )
              return
            let tableColumn = new TreeNode({
              componentName: 'Field',
              props: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                  title: 'Title',
                },
              },
              children: [
                {
                  componentName: 'Field',
                  props: {
                    type: 'void',
                    'x-component': 'ArrayTable.SortHandle',
                  },
                },
              ],
            })
            ensureObjectItemsNode(node).prepend(tableColumn)
          },
        },
        {
          title: node.getMessage('addIndex'),
          icon: 'AddIndex',
          onClick: function () {
            if (
              hasNodeByComponentPath(node, [
                'ArrayTable',
                '*',
                'ArrayTable.Column',
                'ArrayTable.Index',
              ])
            )
              return
            let tableColumn = new TreeNode({
              componentName: 'Field',
              props: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                  title: 'Title',
                },
              },
              children: [
                {
                  componentName: 'Field',
                  props: {
                    type: 'void',
                    'x-component': 'ArrayTable.Index',
                  },
                },
              ],
            })
            let sortNode = findNodeByComponentPath(node, [
              'ArrayTable',
              '*',
              'ArrayTable.Column',
              'ArrayTable.SortHandle',
            ])
            if (sortNode) {
              sortNode.parent.insertAfter(tableColumn)
            } else {
              ensureObjectItemsNode(node).prepend(tableColumn)
            }
          },
        },
        {
          title: node.getMessage('addColumn'),
          icon: 'AddColumn',
          onClick: function () {
            let operationNode = findNodeByComponentPath(node, [
              'ArrayTable',
              '*',
              'ArrayTable.Column',
              function (name) {
                return (
                  name === 'ArrayTable.Remove' ||
                  name === 'ArrayTable.MoveDown' ||
                  name === 'ArrayTable.MoveUp'
                )
              },
            ])
            let tableColumn = new TreeNode({
              componentName: 'Field',
              props: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                  title: 'Title',
                },
              },
            })
            if (operationNode) {
              operationNode.parent.insertBefore(tableColumn)
            } else {
              ensureObjectItemsNode(node).append(tableColumn)
            }
          },
        },
        {
          title: node.getMessage('addOperation'),
          icon: 'AddOperation',
          onClick: function () {
            let oldOperationNode = findNodeByComponentPath(node, [
              'ArrayTable',
              '*',
              'ArrayTable.Column',
              function (name) {
                return (
                  name === 'ArrayTable.Remove' ||
                  name === 'ArrayTable.MoveDown' ||
                  name === 'ArrayTable.MoveUp'
                )
              },
            ])
            let oldAdditionNode = findNodeByComponentPath(node, [
              'ArrayTable',
              'ArrayTable.Addition',
            ])
            if (!oldOperationNode) {
              let operationNode = new TreeNode({
                componentName: 'Field',
                props: {
                  type: 'void',
                  'x-component': 'ArrayTable.Column',
                  'x-component-props': {
                    title: 'Title',
                  },
                },
                children: [
                  {
                    componentName: 'Field',
                    props: {
                      type: 'void',
                      'x-component': 'ArrayTable.Remove',
                    },
                  },
                  {
                    componentName: 'Field',
                    props: {
                      type: 'void',
                      'x-component': 'ArrayTable.MoveDown',
                    },
                  },
                  {
                    componentName: 'Field',
                    props: {
                      type: 'void',
                      'x-component': 'ArrayTable.MoveUp',
                    },
                  },
                ],
              })
              ensureObjectItemsNode(node).append(operationNode)
            }
            if (!oldAdditionNode) {
              let additionNode = new TreeNode({
                componentName: 'Field',
                props: {
                  type: 'void',
                  title: 'Addition',
                  'x-component': 'ArrayTable.Addition',
                },
              })
              ensureObjectItemsNode(node).insertAfter(additionNode)
            }
          },
        },
      ],
    })
  )
})
ArrayBase.mixin(ArrayTable)
ArrayTable.Behavior = createBehavior(createArrayBehavior('ArrayTable'), {
  name: 'ArrayTable.Column',
  extends: ['Field'],
  selector: function (node) {
    return node.props['x-component'] === 'ArrayTable.Column'
  },
  designerProps: {
    droppable: true,
    allowDrop: function (node) {
      let _a, _b
      return (
        node.props['type'] === 'object' &&
        ((_b =
          (_a = node.parent) === null || _a === void 0 ? void 0 : _a.props) ===
          null || _b === void 0
          ? void 0
          : _b['x-component']) === 'ArrayTable'
      )
    },
    propsSchema: createVoidFieldSchema(AllSchemas.ArrayTable.Column),
  },
  designerLocales: AllLocales.ArrayTableColumn,
})
ArrayTable.Resource = createResource({
  icon: 'ArrayTableSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'array',
        'x-decorator': 'FormItem',
        'x-component': 'ArrayTable',
      },
    },
  ],
})