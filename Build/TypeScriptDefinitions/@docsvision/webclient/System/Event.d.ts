/** Декоратор, служащий для обозначения параметров описывающих события. */
export declare function apiEvent(target: Object, propertyKey: string | symbol): void;
/** Определяет, было ли свойство объекта помечено через декоратор {@link apiEvent}. */
export declare function isEvent(params: any, propertyKey: string): boolean;
