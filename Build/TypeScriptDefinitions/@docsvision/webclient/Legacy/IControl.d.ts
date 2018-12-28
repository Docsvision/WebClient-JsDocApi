/** @internal */
export interface IControl {
    rootElement: HTMLElement;
    ID(value?: string): string;
    isInit: boolean;
    Init(onComplete?: () => void): void;
    Destroy(): void;
}
