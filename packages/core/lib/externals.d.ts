import { Engine } from './models'
import {
  IEngineProps,
  IResourceCreator,
  IBehaviorCreator,
  IDesignerLocales,
  IResource,
  IBehavior,
  IBehaviorHost,
  IResourceHost,
} from './types'
export declare const isBehaviorHost: (val: any) => val is IBehaviorHost
export declare const isBehaviorList: (val: any) => val is IBehavior[]
export declare const isBehavior: (val: any) => val is IBehavior
export declare const isResourceHost: (val: any) => val is IResourceHost
export declare const isResourceList: (val: any) => val is IResource[]
export declare const isResource: (val: any) => val is IResource
export declare const createLocales: (...packages: IDesignerLocales[]) => {}
export declare const createBehavior: (
  ...behaviors: Array<IBehaviorCreator | IBehaviorCreator[]>
) => IBehavior[]
export declare const createResource: (
  ...sources: IResourceCreator[]
) => IResource[]
export declare const createDesigner: (props?: IEngineProps<Engine>) => Engine