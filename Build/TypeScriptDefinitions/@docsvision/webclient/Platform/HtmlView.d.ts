import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
/**
 * Содержит публичные свойства элемента управления [Html виджет]{@link HtmlView}.
 */
export declare class HtmlViewParams extends BaseControlParams {
    /** Адрес html-ресурса. */
    sourceUrl: string;
    /** В режиме без использования фрейма - содержимое html, расположенного по адресу {@link sourceUrl}. */
    sourceHtml?: string;
    /**
     * Параметр определяет каким образом HTML-содрежимое будет загружено и отображено.
     *
     * - При значении 0 (`HtmlViewMode.FromCard`) - HTML будет загружен из поля карточки, указанного в привязке в конструкторе разметок.
     * - При значении 1 (`HtmlViewMode.FromFile`) - HTML будет загружен из файла на сервере, путь к которому указан в параметре {@link sourceUrl}.
     * - При значении 2 (`HtmlViewMode.External`) - Будет использован iframe,
     *   которому в качестве значения аттрибута `src` будет передан URL из параметра {@link sourceUrl}.
     *
     * В первых двух вариантах HTML будет непосредственно вставлен в тело страницы, в последнем через iframe.
     */
    mode?: GenModels.HtmlViewMode;
    /** Ширина содержимого с единицами измерения. Учитывается только для режима {@link mode} = `HtmlViewMode.External (2)`. */
    width?: string;
    /** Высота содержимого с единицами измерени. Учитывается только для режима {@link mode} = `HtmlViewMode.External (2)`. */
    height?: string;
    /** Текст всплывающей подсказки. */
    tip?: string;
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Значение атрибута sandbox тега iframe. */
    frameSandbox?: string;
    /** Назначить атрибут sandbox для тега iframe или нет. */
    useFrameSandbox?: boolean;
    /** Значение атрибута scrolling тега iframe. */
    frameScrolling?: string;
    /** Закончилась загрузка фрейма или нет */
    frameLoaded?: boolean;
}
/** @internal */
export interface HtmlViewState extends HtmlViewParams, BaseControlState {
}
/**
 * Класс элемента управления Html виджет.
 *
 * Добавляет в web-разметку произвольную html разметку.
 */
export declare class HtmlView extends BaseControl<HtmlViewParams, HtmlViewState> {
    /** @internal */
    protected createParams(): HtmlViewParams;
    /** @internal */
    protected createImpl(): ControlImpl;
    /** @internal */
    protected isDigit(c: string): boolean;
    /** @internal */
    protected processSize(val: string): string;
    private widthSetter;
    private heightSetter;
    private frameScrollingSetter;
    /** @internal */
    protected onFrameLoaded: () => void;
    /** @internal */
    protected attachInlineHtml: (elem: HTMLElement) => void;
    /** @internal */
    protected attachTooltip: (elem: HTMLElement) => void;
    /** @internal */
    protected renderFrame(): JSX.Element;
    /** @internal */
    renderControl(): JSX.Element;
}
