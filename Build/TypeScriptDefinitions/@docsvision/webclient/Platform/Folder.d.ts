import { $LayoutFolderController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { FolderImpl, FolderState } from "@docsvision/webclient/Platform/FolderImpl";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { IDataChangedEventArgs } from "@docsvision/webclient/System/IDataChangedEventArgs";
import { $CardInfo, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { BasicApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { IValidationParams } from "@docsvision/webclient/System/IValidationParams";
import { IValidationResult } from "@docsvision/webclient/System/IValidationResult";
/**
 * Содержит публичные свойства элемента управления [Выбор папки]{@link Folder}.
 */
export declare class FolderParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Текст всплывающей подсказки. */
    tip?: string;
    /** Текст заполнителя. */
    placeHolder?: string;
    /** Текст метки. */
    labelText?: string;
    /** Флаг, определяющий, что метка должна отображаться, когда значение элемента управления не задано: true - отображать, false - не отображать. */
    showEmptyLabel?: boolean;
    /** Флаг, указывающий, обязательно ли должно быть задано значение элемента управления: true - обязательно, false - не обязательно. */
    required?: boolean;
    /** Возвращает метод выбора папки по умолчанию. */
    folderMode?: GenModels.FolderMode;
    /** Флаг доступности создания карточки в текущей папке */
    currentFolderForbidden?: boolean;
    /** Идентификатор текущей папки */
    currentFolder?: string;
    /** Данные выбранной папки. */
    value?: GenModels.FolderNode;
    /** Идентификатор карточки, для которой выбирается размещение. */
    cardId?: string;
    /** Событие возникает после выбора папки. */
    dataChanged?: BasicApiEvent<IDataChangedEventArgs>;
    services?: $LayoutFolderController & $CardInfo & $LayoutInfo;
}
/**
 * Класс элемента управления Выбор папки.
 *
 * Добавляет в web-разметку ссылку, при нажатии которой вызывается диалог выбора папки для размещения создаваемой карточки.
 */
export declare class Folder extends BaseControl<FolderParams, FolderState> {
    constructor(props: FolderParams);
    protected createParams(): FolderParams;
    private readonly folderImpl;
    private visibility;
    /** Установка значения. */
    value: GenModels.FolderNode;
    /**
     * Закрывает диалоговое окно выбора папки.
     */
    hide(): void;
    /**
     * Отменяет выбор папки.
     */
    clear(): void;
    /**
     * Открывает диалоговое окно выбора папки.
     */
    show(): void;
    /** @inheritDoc */
    onSaving(): JQueryDeferred<any>;
    /** @inheritDoc */
    validate(params: IValidationParams): IValidationResult[];
    protected checkFolderForAvailable(folderId: string): JQueryDeferred<GenModels.CheckResult>;
    /** @inheritDoc */
    init(): void;
    /** @internal */
    protected createImpl(): FolderImpl;
}
