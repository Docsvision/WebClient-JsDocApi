import { FieldSpec } from "@docsvision/webclient/System/GetFieldName";
/** Декоратор, служащий для обозначения что данный метод доступа предназначен для реализации доступа к параметру элемента управления. */
export declare function handler(paramNameSpec: FieldSpec<any, any>): (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;
/** Возвращает имя свойства, ассоциированное при помощи декоратора {@link handler}.  */
export declare function getHandlerProperty(control: any, propertyKey: string): string;
/**
 * Используется для формирования объекта {@link FieldSpec} при вызове функции {@link getFieldName}.
 * Функция преобразует ссылку на имя класса в ссылку на объект класса. Это необходимо для получения
 * ссылки на свойство, понятное TypeScript.
 * @param typeName Имя класса
 */
export declare function at<T>(typeName: {
    new (): T;
}): T;
