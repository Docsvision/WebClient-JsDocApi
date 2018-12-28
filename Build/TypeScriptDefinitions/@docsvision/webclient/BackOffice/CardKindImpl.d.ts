import { CardKindParams } from "@docsvision/webclient/BackOffice/CardKind";
import { CardKindTreeNodeModel } from "@docsvision/webclient/BackOffice/CardKindTreeNodeModel";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ITypeaheadSearchQuery } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchQuery";
import { ITypeaheadSearchResult } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchResult";
import { ITypeaheadVariant } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadVariant";
import { InputBasedControlImpl, InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
import React from "react";
/** @internal */
export interface CardKindState extends CardKindParams, InputBasedControlState<GenModels.CardKindModel> {
    requestHelper: RequestHelper;
    isLoading: boolean;
    /** cardKindsTree и cardKindsList это всегда одна и та же модель, но в одном случае она древовидна, а в другом сплющенная */
    cardKindsTree: CardKindTreeNodeModel[];
    /** cardKindsTree и cardKindsList это всегда одна и та же модель, но в одном случае она древовидна, а в другом сплющенная */
    cardKindsList: CardKindTreeNodeModel[];
    selectKindModalOpen: boolean;
    inputKeyDown: SimpleEvent<React.KeyboardEvent<any>>;
}
/** @internal */
export declare class CardKindImpl extends InputBasedControlImpl<GenModels.CardKindModel, CardKindParams, CardKindState> {
    protected onLoadEvent: SimpleEvent<any>;
    constructor(props: CardKindParams, state: CardKindState);
    /**
     * Загружаем дерево с видами
     */
    protected loadCardKindsTree(): JQueryDeferred<CardKindTreeNodeModel[]>;
    /**
     * Загружаем дерево с видами и сохраняем его в контроле
     */
    protected loadAndApplyCardKindsTree: () => void;
    /**
     * Текстовое значение выбранного вида
     */
    protected getTextValue(): string;
    /**
     * Заголовок выбранного вида
     */
    protected getValueTitle(): string;
    /**
     * Список элементов для выпадающего списка с автодополнением
     */
    protected findItems: (typeaheadQuery: ITypeaheadSearchQuery) => JQueryDeferred<ITypeaheadSearchResult>;
    /**
     * Доступен ли вид карточки
     */
    protected isCardKindAvailable: (cardKind: CardKindTreeNodeModel) => boolean;
    /**
     * При выборе вида в списке с автодополнением
     */
    protected onSelected: (variant: ITypeaheadVariant) => void;
    /**
     * Показать модальное окно с выбором вида
     */
    protected showSelectKindModal: () => void;
    /**
     * Скрыть модальное окно с выбором вида
     */
    protected hideSelectKindModal: () => void;
    /**
     * Конвертирует узел из дерева видов в модель контрола (например, для установки значения при выборе в дереве)
     */
    protected convertCardKindTreeNodeToModel: (node: CardKindTreeNodeModel) => GenModels.CardKindModel;
    /**
     * При выборе узла в дереве видов
     */
    protected onCardKindTreeNodeSelect: (cardKind: CardKindTreeNodeModel) => void;
    /**
     * При вводе в инпут с автодополнением
     * @param ev Событие клавиатуры
     */
    protected onInputKeyDown(ev: React.KeyboardEvent<any>): void;
    /**
     * Куда рендерим контрол
     * @param props Свойства
     * @param container Контейнер
     */
    protected renderInto(props: CardKindParams, container: HTMLElement): void;
    /**
     *  Отрисовывание контрола
     */
    renderControl(): JSX.Element;
    /**
     * Отрисовывание контрола в режиме просмотра
     */
    protected renderWithText(): JSX.Element;
    /**
     * Отрисовывание контрола в режиме редактирования
     */
    protected renderInputWithPlaceholder(): React.ReactNode;
    /**
     * Отрисовываем дерево видов.
     */
    protected renderCardKindsTree(): React.ReactNode;
}
