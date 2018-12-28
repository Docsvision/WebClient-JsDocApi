import { IControl } from "@docsvision/webclient/Legacy/IControl";
/** @internal */
export declare class Control implements IControl {
    rootElement: HTMLElement;
    isInit: boolean;
    ID(value?: string): string;
    constructor(root: HTMLElement);
    Init(onComplete?: () => void): void;
    Destroy(): void;
}
