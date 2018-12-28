import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { PanelParams } from "@docsvision/webclient/Platform/Panel";
import { BaseControl, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import React from "react";
/** Класс состояния {@link Panel}. */
export interface PanelState extends BaseControlState, PanelParams {
    /** @internal */
    mountedChildren: BaseControl<any, any>[];
    /** @internal */
    childControlsModels: GenModels.ControlModel[];
}
/** @deprecated */
export declare type PanelImplState = PanelState;
/** Класс реализации {@link Panel}. */
export declare abstract class PanelImpl<P extends PanelParams, S extends PanelState> extends BaseControlImpl<P, S> {
    constructor(props: P, state?: S);
    /** Метод, который производные классы должны вызывать для отрисовки дочерних компонентов. */
    protected renderChildren(children?: GenModels.ControlModel[]): React.ReactNode[];
    /** Инициализирует служебные свойства (такие как parent и services). Вызывается автоматически при присвоении значения параметру  */
    protected prepareChildren(children?: GenModels.ControlModel[]): void;
    /** Инициализирует служебные свойства (такие как parent и services). */
    preparePanelChildren(children?: GenModels.ControlModel[]): void;
    /** Добавляет реализацию параметров width и minWidth. */
    protected getCssStyle(): React.CSSProperties;
    /** Добавляет класс `system-panel`. */
    protected getCssClass(): string;
    /** @deprecated */
    children: any[];
}
