import { IBindingResult } from '@docsvision/webclient/System/IBindingResult';
import { FieldSpec } from '@docsvision/webclient/System/GetFieldName';
/** @internal */
export declare const DISPLAY_NAME_PROPERTY_NAME_KEY = "DisplayNamePropertyName";
/**
 * Конструирует объект {@link IBindingResult} для отправки на сервер.
 * @param binding Значение привязки полученное при загрузке контрола.
 * @param value Новое значение контрола.
 * @param fieldSpec Имя параметра, в котором хранится отображаемое имя поля, значение которого редактируется контролом.
 */
export declare function getBindingResult(binding: IBindingResult<any>, value: any, fieldSpec: FieldSpec<any, any>): IBindingResult<any>;
