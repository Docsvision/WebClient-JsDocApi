declare class JQueryDeferred<T> {
    constructor(executor?: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void);
}
