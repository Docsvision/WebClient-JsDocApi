import { IEditOperation } from "@docsvision/webclient/System/IEditOperation";
/** Словарь операций редактирования с доступом по id. */
export interface IEditOperationMap {
    [id: string]: IEditOperation;
}
