import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
/**
 * Содержит публичные свойства {@link HtmlTag}.
 */
export declare class HtmlTagParams extends PanelParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Имя тега (по умолчанию div). */
    tag?: string;
    /** Содержимое элемента. */
    content?: string;
    element?: Element;
}
interface HtmlTagState extends PanelState, HtmlTagParams {
}
declare class HtmlTagImpl extends PanelImpl<HtmlTagParams, HtmlTagState> {
    constructor(props: any, state: any);
    attachNode(elem: Element): void;
    renderControl(): JSX.Element;
}
/**
 * Контрол, который при отрисовке превращается в один единственнй html-тег.
 */
export declare class HtmlTag extends Panel<HtmlTagParams, HtmlTagState> {
    /** @internal */
    protected createParams(): HtmlTagParams;
    /** @internal */
    protected createImpl(): HtmlTagImpl;
    /** @internal */
    render(): JSX.Element;
}
export {};
