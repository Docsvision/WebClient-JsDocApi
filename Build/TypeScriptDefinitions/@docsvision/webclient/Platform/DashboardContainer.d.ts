import { DashboardContainerImpl, DashboardContainerState } from "@docsvision/webclient/Platform/DashboardContainerImpl";
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import React from 'react';
/**
 * @internal
 * Содержит публичные свойства элемента управления [DashboardContainer]{@link DashboardContainer}.
 */
export declare class DashboardContainerParams extends PanelParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
}
/** @internal */
export declare class DashboardContainer extends Panel<DashboardContainerParams, DashboardContainerState> {
    protected createParams(): DashboardContainerParams;
    protected createImpl(): DashboardContainerImpl<Readonly<{
        children?: React.ReactNode;
    }> & Readonly<DashboardContainerParams>, DashboardContainerState>;
}
