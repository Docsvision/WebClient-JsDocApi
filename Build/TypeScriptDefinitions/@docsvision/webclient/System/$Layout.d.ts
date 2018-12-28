import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { ILayoutParams } from "@docsvision/webclient/System/ILayoutParams";
import { ControlWrapperMap } from "@docsvision/webclient/System/ControlWrapperMap";
import { IEditOperationStore } from "@docsvision/webclient/System/IEditOperationStore";
import { ILayoutContainer } from "@docsvision/webclient/System/ILayoutContainer";
export interface ILayout {
    params: ILayoutParams;
    readonly controls: ControlWrapperMap;
    /** Возвращает модель данных карточки. */
    readonly cardInfo: GenModels.CardInfoModel;
    /** Возвращает модель данных разметки. */
    readonly layoutInfo: GenModels.LayoutInfoModel;
    /** Предоставляет доступ к хранилищу операций редактирования. */
    readonly editOperations: IEditOperationStore;
    /** Возвращает отображаемое название типа карточки. */
    readonly cardTypeName: string;
    readonly layoutContainer: ILayoutContainer;
    /**
     * Сохраняет изменения всей разметки (карточки) или конкретного элемента управления.
     * @param control Элемент управления который требуется сохранить. Если не указан, будет сохранена вся разметка.
     * @param doNotMarkAsSaved Флаг, указывающий, что карточка должна сохранить признак "не сохранена": true - карточка остается с признаком "не сохранена",
     * false - карточка сохраняется в обычном режиме.
     */
    saveCard(control?: BaseControl<BaseControlParams, BaseControlState>, doNotMarkAsSaved?: boolean): JQueryDeferred<any>;
    /**
     * Изменяет состояние карточки, по полученной операции редактирования.
     * @param operationId Идентификатор операции редактирования.
     */
    changeState(operationId: string): JQueryDeferred<any>;
    /**
     * Проверяет, что карточка заблокирована и есть изменения.
     * @return done срабатывает, когда карточка заблокирована и есть изменения; иначе - срабатывает fail.
     */
    checkLockAndModified(): JQueryDeferred<void>;
    destroy(): JQueryDeferred<any>;
}
export declare type $Layout = {
    layout: ILayout;
};
