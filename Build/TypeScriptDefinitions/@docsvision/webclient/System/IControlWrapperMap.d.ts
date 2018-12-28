import { LayoutControl } from "@docsvision/webclient/System/BaseControl";
/** Словарь контролов с доступом по имени. */
export interface IControlWrapperMap {
    [name: string]: LayoutControl | LayoutControl[];
}
