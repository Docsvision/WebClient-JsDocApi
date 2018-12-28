import { LayoutControlType } from "@docsvision/webclient/System/LayoutControlType";
export interface ILayoutControlFactory {
    register(name: string, createFunction: () => any, replaceExisting: boolean): void;
    get(name: string): LayoutControlType;
}
export declare type $LayoutControlFactory = {
    controlFactory: ILayoutControlFactory;
};
