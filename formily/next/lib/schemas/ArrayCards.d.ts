/// <reference types="react" />
export declare const ArrayCards: import('@formily/json-schema').Stringify<{
  version?: string
  name?: import('react').ReactText
  title?: any
  description?: any
  default?: any
  readOnly?: boolean
  writeOnly?: boolean
  type?: import('@formily/json-schema').SchemaTypes
  enum?: import('@formily/json-schema').SchemaEnum<any>
  const?: any
  multipleOf?: number
  maximum?: number
  exclusiveMaximum?: number
  minimum?: number
  exclusiveMinimum?: number
  maxLength?: number
  minLength?: number
  pattern?: string | RegExp
  maxItems?: number
  minItems?: number
  uniqueItems?: boolean
  maxProperties?: number
  minProperties?: number
  required?: string | boolean | string[]
  format?: string
  $ref?: string
  $namespace?: string
  definitions?: Record<string, import('@formily/json-schema').Stringify<any>>
  properties?: Record<string, import('@formily/json-schema').Stringify<any>>
  items?: import('@formily/json-schema').SchemaItems<
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >
  additionalItems?: import('@formily/json-schema').Stringify<any>
  patternProperties?: Record<
    string,
    import('@formily/json-schema').Stringify<any>
  >
  additionalProperties?: import('@formily/json-schema').Stringify<any>
  'x-value'?: any
  'x-index'?: number
  'x-pattern'?: any
  'x-display'?: any
  'x-validator'?: any
  'x-decorator'?: any
  'x-decorator-props'?: any
  'x-component'?: any
  'x-component-props'?: any
  'x-reactions'?: import('@formily/json-schema').SchemaReactions<any>
  'x-content'?: any
  'x-data'?: any
  'x-visible'?: boolean
  'x-hidden'?: boolean
  'x-disabled'?: boolean
  'x-editable'?: boolean
  'x-read-only'?: boolean
  'x-read-pretty'?: boolean
}> & {
  Addition?: import('@formily/json-schema').Stringify<{
    version?: string
    name?: import('react').ReactText
    title?: any
    description?: any
    default?: any
    readOnly?: boolean
    writeOnly?: boolean
    type?: import('@formily/json-schema').SchemaTypes
    enum?: import('@formily/json-schema').SchemaEnum<any>
    const?: any
    multipleOf?: number
    maximum?: number
    exclusiveMaximum?: number
    minimum?: number
    exclusiveMinimum?: number
    maxLength?: number
    minLength?: number
    pattern?: string | RegExp
    maxItems?: number
    minItems?: number
    uniqueItems?: boolean
    maxProperties?: number
    minProperties?: number
    required?: string | boolean | string[]
    format?: string
    $ref?: string
    $namespace?: string
    definitions?: Record<string, import('@formily/json-schema').Stringify<any>>
    properties?: Record<string, import('@formily/json-schema').Stringify<any>>
    items?: import('@formily/json-schema').SchemaItems<
      any,
      any,
      any,
      any,
      any,
      any,
      any,
      any
    >
    additionalItems?: import('@formily/json-schema').Stringify<any>
    patternProperties?: Record<
      string,
      import('@formily/json-schema').Stringify<any>
    >
    additionalProperties?: import('@formily/json-schema').Stringify<any>
    'x-value'?: any
    'x-index'?: number
    'x-pattern'?: any
    'x-display'?: any
    'x-validator'?: any
    'x-decorator'?: any
    'x-decorator-props'?: any
    'x-component'?: any
    'x-component-props'?: any
    'x-reactions'?: import('@formily/json-schema').SchemaReactions<any>
    'x-content'?: any
    'x-data'?: any
    'x-visible'?: boolean
    'x-hidden'?: boolean
    'x-disabled'?: boolean
    'x-editable'?: boolean
    'x-read-only'?: boolean
    'x-read-pretty'?: boolean
  }>
}