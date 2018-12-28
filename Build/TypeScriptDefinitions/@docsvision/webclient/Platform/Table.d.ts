import { $LayoutCardController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import { IRowEventArgs } from "@docsvision/webclient/Platform/IRowEventArgs";
import { TableImpl, TableState } from "@docsvision/webclient/Platform/TableImpl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { EditMode } from "@docsvision/webclient/System/EditMode";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { ICancelableEventArgs } from "@docsvision/webclient/System/ICancelableEventArgs";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
/**
 * Содержит публичные свойства элемента управления [Таблица]{@link Table}.
 */
export declare class TableParams extends PanelParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Строки таблицы. */
    rows: string[];
    /** Текст всплывающей подсказки. */
    tip: string;
    /** Заголовок. */
    header: string;
    /** Режим редактирования. */
    editMode: EditMode;
    /** Имеются ли дополнительные неотображаемые строки. */
    hasMore: boolean;
    /** Столбцы таблицы. */
    columns: GenModels.LayoutTableColumnInfo[];
    /** Максимальное количество строк для отображения. */
    maxRowCount: number;
    /** Разрешено ли редактирование. */
    editAllowed: boolean;
    /** Имена дочерних контролов. */
    childControlsNames: string[];
    /** Можно ли сворачивать таблицу. */
    collapsible: boolean;
    /** Развёрнута ли таблица. */
    isExpanded: boolean;
    /** Прокручивать ли страницу при добавлении новой строки. */
    scrollIntoView: boolean;
    /** Событие, возникающее при добавлении строки. */
    rowAdding: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после добавления строки. */
    rowAdded: BasicApiEvent<IRowEventArgs>;
    /** Событие, возникающее при удалении строки. */
    rowRemoving: CancelableApiEvent<IRowEventArgs>;
    /** Событие, возникающее после удаления строки. */
    rowRemoved: BasicApiEvent<IRowEventArgs>;
    /** Событие, возникающее перед сворачиванием. */
    collapsing: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее при сворачивании. */
    collapsed: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее перед разворачиванием. */
    expanding: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее при разворачивании. */
    expanded: BasicApiEvent<IEventArgs>;
    services?: $LayoutCardController & $Layout;
}
/**
 * Класс элемента управления Таблица
 *
 * Добавляет в web-разметку элемент управления для отображения таблицы.
 */
export declare class Table extends Panel<TableParams, TableState> {
    constructor(props: TableParams);
    /** @internal */
    protected createParams(): TableParams;
    /** @internal */
    componentDidMount(): void;
    /** @internal */
    componentWillUnmount(): void;
    /** @internal */
    protected getBindingResultData(): GenModels.LayoutTableBindingModel;
    /** @internal */
    protected isCollapsedSetter: boolean;
    /** @internal */
    protected getBindings(): IBindingResult<any>[];
    saveAndReload(): JQueryDeferred<GenModels.ControlModel>;
    /** @internal */
    protected saveTable(): JQueryDeferred<any>;
    private readonly tableImpl;
    private binding;
    /** Get list of row id, currently shown in the table */
    private readonly rows;
    private isCollapsed;
    private readonly columns;
    /**
     * Установка заголовка столбца таблицы.
     * @param columnNumber Номер столбца
     * @param header Новый заголовок
     */
    setColumnHeader(columnNumber: number, header: string): void;
    /**
     * Установка ширины столбца таблицы.
     * @param columnNumber Номер столбца
     * @param columnWidth Новая ширина (любые единицы измерения)
     */
    setColumnWidth(columnNumber: number, columnWidth: string): void;
    /**
     * Установка подсказки для столбца таблицы.
     * @param columnNumber Номер столбца
     * @param tip Новая подсказка
     */
    setColumnTip(columnNumber: number, tip: string): void;
    /**
     * Установка видимости для столбца таблицы.
     * @param columnNumber Номер столбца
     * @param visibility Виден ли или нет
     */
    setColumnVisibility(columnNumber: number, visibility: boolean): void;
    /**
     * Возвращает номер строки или -1, если строка не найдена.
     * @param rowId Идентификатор искомой строки
     */
    getRowIndex(rowId: string): number;
    /**
     * Добавить новую строку.
     */
    addRow(): JQueryDeferred<any>;
    /**
     * Удалить строку с указанным идентификатором
     * @param rowId Идентификатор удаляемой строки
     */
    removeRow(rowId: string): JQueryDeferred<any>;
    /** @internal */
    protected onCardSaving(sender: any, args: ICancelableEventArgs<GenModels.SaveControlDataModel>): void;
    /** @internal */
    protected onCardSaved(): void;
    /** @internal */
    protected createImpl(): TableImpl;
}
