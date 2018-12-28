import { $LayoutController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import { $LayoutManager } from "@docsvision/webclient/System/$LayoutManager";
import { ServiceContainer } from "@docsvision/webclient/System/ServiceContainer";
import { ILayout } from "@docsvision/webclient/System/$Layout";
/**
 * Содержит публичные свойства элемента управления [LayoutPosition]{@link LayoutPosition}.
 */
export declare class LayoutPositionParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Имя загружаемой разметки. */
    locationName?: string;
    /** Если значение true, то контролы разметки полностью интегрируются в родительскую разметку. */
    ownerLayoutPart?: boolean;
    /**
     * Если значени true, запрос разметки будет асинхронным после монтирования контрола в соответствии со параметром {@link locationName}.
     * Иначе параметр {@link layoutModel} должен содержать загруженную модель разметки. По умолчанию false.
     */
    async: boolean;
    /** Json объект с перечнем параметров layoutParams, которые будут переданы при получении разметки */
    params?: string;
    /** Функция выполняющая собственную логику загрузки разметки.  */
    customLayoutLoader?: (sender: LayoutPosition) => JQueryDeferred<GenModels.LayoutViewModel>;
    /** Загруженная модель разметки. Если значение параметра задано, то загрузка разметки не производится. */
    layoutModel?: GenModels.LayoutViewModel;
    /** Экземпляр разметки, отображенной на странице. */
    mountedLayout?: ILayout;
    renderLoadingState?: () => JSX.Element;
    services?: $LayoutController & $LayoutManager & ServiceContainer;
}
/** @internal */
export interface LayoutPositionState extends BaseControlState, LayoutPositionParams {
    loadingHelper: RequestHelper;
    customLayoutLoaderName: string;
}
/**
 * Класс элемента управления, служащего для загрузки и отображения разметки.
 */
export declare class LayoutPosition extends BaseControl<LayoutPositionParams, LayoutPositionState> {
    private root;
    constructor(props: any);
    private customLayoutLoader;
    private getCustomLayoutLoader;
    protected createParams(): LayoutPositionParams;
    /** @internal */
    protected createImpl(): ControlImpl;
    /** @internal */
    init(): void;
    /** @internal */
    protected initInternal(): JQueryDeferred<any>;
    /** @internal */
    protected loadLayout(): Promise<GenModels.LayoutViewModel>;
    /** @internal */
    protected attachRoot(elem: HTMLElement): void;
    /** @internal */
    renderControl(): JSX.Element;
}
