/** Стандартный тип обработчика. */
export declare type BasicEventHandler<T> = (sender: any, args?: T) => void;
/** Базовый интерфейс события. */
export interface IBasicEvent<T> {
    subscribe(handler: BasicEventHandler<T>): any;
    unsubscribe(handler: BasicEventHandler<T>): any;
}
