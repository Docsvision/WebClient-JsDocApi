import { LayoutControlType } from "@docsvision/webclient/System/LayoutControlType";
/** Словарь контролов с доступом по имени. */
export interface IControlMap {
    [name: string]: () => LayoutControlType;
}
