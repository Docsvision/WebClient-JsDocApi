/** Декоратор, который помечает параметр как доступны для только чтения. */
export declare function r(target: Object, propertyKey: string | symbol): void;
/** Определяет, было ли свойство объекта помечено через декоратор {@link r}. */
export declare function isReadonly(control: any, propertyKey: string): boolean;
