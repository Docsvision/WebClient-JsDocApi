/** @deprecated Use Promise.all */
export declare function whenAll(deferreds: JQueryDeferred<any>[]): JQueryDeferred<any>;
/** Создает новый объект JQueryDeferred в стиле конструктора Promise. */
export declare function MakeDeferred<T>(job: (resolve: (data: T) => JQueryDeferred<T> | void, reject: (err: any) => JQueryDeferred<T> | void) => void): JQueryDeferred<T>;
/** Создает новый объект JQueryDeferred и завершает его с переданным значением. */
export declare function ResolvedDeferred<T>(data: T): JQueryDeferred<T>;
