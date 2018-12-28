import { ILayoutBootstrapperParams } from "@docsvision/webclient/System/ILayoutBootstrapperParams";
/** @deprecated */
export declare class LayoutBootstrapper {
    private readonly layoutBootstrapperParams;
    readonly rootElementId: string;
    readonly rootElement: HTMLElement;
    constructor(layoutBootstrapperParams: ILayoutBootstrapperParams);
    initilialize(): void;
}
