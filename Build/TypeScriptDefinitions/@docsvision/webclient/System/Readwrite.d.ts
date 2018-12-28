/** Декоратор, который помечает параметр как доступны для чтения и записи. */
export declare function rw(target: Object, propertyKey: string | symbol): void;
/** Определяет, было ли свойство объекта помечено через декоратор {@link rw}. */
export declare function isReadWrite(control: any, propertyKey: string): boolean;
