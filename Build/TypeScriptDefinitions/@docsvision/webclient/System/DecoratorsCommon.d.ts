/** Возвращает описатель собственного свойства, или свойства одного из родительских классов.  */
export declare function getPropertyDescriptor(control: Object, propertyKey: string): PropertyDescriptor;
/** Возвращает метаданные, ассоциированные при помощи Reflect.metadata с собственным свойством, или свойством базового класса. */
export declare function getMetadataValue(obj: any, propertyKey: string, metadataKee: string): any;
/** Добавляет в объект свойство со значением undefined. */
export declare function declareSimpleProperty(target: Object, propertyKey: string): void;
