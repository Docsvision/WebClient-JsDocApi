import { IBindingMetadata } from "@docsvision/webclient/System/IBindingMetadata";
/** Модель данных, загруженных с сервера при помощи механизма биндингов. */
export interface IBindingResult<T> {
    /** Идентификатор биндинга (служебная информация). */
    name: string;
    /** Используется в некоторых контролах наряду {@link value}. */
    values: string[];
    /** Значение биндинга. */
    value: T;
    /** Идентификатор операции редактирования, ассоциированной с биндингом. */
    editOperation: string;
    /** Дополнительная метаинформация, переданная резолвером контрола. */
    metadata: IBindingMetadata[];
}
