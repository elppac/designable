export declare const getType: (obj: any) => any
export declare const isFn: (obj: unknown) => obj is (...args: any[]) => any
export declare const isWindow: (obj: unknown) => obj is Window
export declare const isHTMLElement: (obj: any) => obj is HTMLElement
export declare const isArr: (arg: any) => arg is any[]
export declare const isPlainObj: (obj: unknown) => obj is object
export declare const isStr: (obj: unknown) => obj is string
export declare const isBool: (obj: unknown) => obj is boolean
export declare const isNum: (obj: unknown) => obj is number
export declare const isObj: (val: unknown) => val is object
export declare const isRegExp: (obj: unknown) => obj is RegExp
export declare const isValid: (val: any) => boolean
export declare const isValidNumber: (val: any) => val is number