/** @internal */
export declare function action(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
/** @internal */
export declare function apiAction(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
/** @internal */
export declare function controllerAction(url: string): (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;
/** @internal */
export declare function arg(name: string): (target: Object, propertyKey: string, parameterIndex: number) => void;
/** @internal */
export declare function postData(target: Object, propertyKey: string, parameterIndex: number): void;
/** @internal */
export declare var ServiceActionPostDataArgumentName: string;
/** @internal */
export declare function controller(name: string): (target: Object) => void;
