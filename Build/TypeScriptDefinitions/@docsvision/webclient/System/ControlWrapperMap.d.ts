import { LayoutControl } from "@docsvision/webclient/System/BaseControl";
/** Словарь контролов с доступом по имени. */
export declare class ControlWrapperMap {
    [name: string]: any;
    get<T extends LayoutControl | LayoutControl[]>(name: string): T;
}
