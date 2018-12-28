/** Вызывает функцию не чаще, чем раз в delay мс. */
export declare function throttle(cb: Function, delay: number): (...args: any[]) => void;
