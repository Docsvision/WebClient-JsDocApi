import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
/** Модель, используемая при отправке значений контролов на сервер. */
export interface IBindingsWriteRequest {
    /** Имя контрола. */
    controlName: string;
    /** Имя контрола, который инициировал сохранение. Это может быть имя контрола, отображаемого в окне редактирования по месту. */
    actualControlName: string;
    /** Тип контрола. */
    controlTypeName: string;
    /** Данные контрола. */
    bindingResults: IBindingResult<any>[];
}
