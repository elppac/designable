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
import {
  ReactionsSetter,
  DataSourceSetter,
  ValidatorSetter,
} from '@designable/formily-setters'
import { FormItemSwitcher } from '../../common/FormItemSwitcher'
import { AllSchemas } from '../../schemas'
export var createComponentSchema = function (component, decorator) {
  return {
    'component-group': component && {
      type: 'void',
      'x-component': 'CollapseItem',
      'x-reactions': {
        fulfill: {
          state: {
            visible: '{{!!$form.values["x-component"]}}',
          },
        },
      },
      properties: {
        'x-component-props': component,
      },
    },
    'decorator-group': decorator && {
      type: 'void',
      'x-component': 'CollapseItem',
      'x-component-props': { defaultExpand: false },
      'x-reactions': {
        fulfill: {
          state: {
            visible: '{{!!$form.values["x-decorator"]}}',
          },
        },
      },
      properties: {
        'x-decorator-props': decorator,
      },
    },
    'component-style-group': {
      type: 'void',
      'x-component': 'CollapseItem',
      'x-component-props': { defaultExpand: false },
      'x-reactions': {
        fulfill: {
          state: {
            visible: '{{!!$form.values["x-component"]}}',
          },
        },
      },
      properties: {
        'x-component-props.style': AllSchemas.CSSStyle,
      },
    },
    'decorator-style-group': {
      type: 'void',
      'x-component': 'CollapseItem',
      'x-component-props': { defaultExpand: false },
      'x-reactions': {
        fulfill: {
          state: {
            visible: '{{!!$form.values["x-decorator"]}}',
          },
        },
      },
      properties: {
        'x-decorator-props.style': AllSchemas.CSSStyle,
      },
    },
  }
}
export var createFieldSchema = function (component, decorator) {
  if (decorator === void 0) {
    decorator = AllSchemas.FormItem
  }
  return {
    type: 'object',
    properties: __assign(
      {
        'field-group': {
          type: 'void',
          'x-component': 'CollapseItem',
          properties: {
            name: {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'Input',
            },
            title: {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'Input',
            },
            description: {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'Input.TextArea',
            },
            'x-display': {
              type: 'string',
              enum: ['visible', 'hidden', 'none', ''],
              'x-decorator': 'FormItem',
              'x-component': 'Select',
              'x-component-props': {
                defaultValue: 'visible',
              },
            },
            'x-pattern': {
              type: 'string',
              enum: ['editable', 'disabled', 'readOnly', 'readPretty', ''],
              'x-decorator': 'FormItem',
              'x-component': 'Select',
              'x-component-props': {
                defaultValue: 'editable',
              },
            },
            default: {
              'x-decorator': 'FormItem',
              'x-component': 'ValueInput',
            },
            enum: {
              'x-decorator': 'FormItem',
              'x-component': DataSourceSetter,
            },
            'x-reactions': {
              'x-decorator': 'FormItem',
              'x-component': ReactionsSetter,
            },
            'x-validator': {
              type: 'array',
              'x-component': ValidatorSetter,
            },
            required: {
              type: 'boolean',
              'x-decorator': 'FormItem',
              'x-component': 'Switch',
            },
          },
        },
      },
      createComponentSchema(component, decorator)
    ),
  }
}
export var createVoidFieldSchema = function (component, decorator) {
  if (decorator === void 0) {
    decorator = AllSchemas.FormItem
  }
  return {
    type: 'object',
    properties: __assign(
      {
        'field-group': {
          type: 'void',
          'x-component': 'CollapseItem',
          properties: {
            name: {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'Input',
            },
            title: {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'Input',
              'x-reactions': {
                fulfill: {
                  state: {
                    hidden: '{{$form.values["x-decorator"] !== "FormItem"}}',
                  },
                },
              },
            },
            description: {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'Input.TextArea',
              'x-reactions': {
                fulfill: {
                  state: {
                    hidden: '{{$form.values["x-decorator"] !== "FormItem"}}',
                  },
                },
              },
            },
            'x-display': {
              type: 'string',
              enum: ['visible', 'hidden', 'none', ''],
              'x-decorator': 'FormItem',
              'x-component': 'Select',
              'x-component-props': {
                defaultValue: 'visible',
              },
            },
            'x-pattern': {
              type: 'string',
              enum: ['editable', 'disabled', 'readOnly', 'readPretty', ''],
              'x-decorator': 'FormItem',
              'x-component': 'Select',
              'x-component-props': {
                defaultValue: 'editable',
              },
            },
            'x-reactions': {
              'x-decorator': 'FormItem',
              'x-component': ReactionsSetter,
            },
            'x-decorator': {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': FormItemSwitcher,
            },
          },
        },
      },
      createComponentSchema(component, decorator)
    ),
  }
}