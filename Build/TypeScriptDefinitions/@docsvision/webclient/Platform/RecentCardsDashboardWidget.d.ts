import { RecentCardsDashboardWidgetImpl, RecentCardsDashboardWidgetState } from "@docsvision/webclient/Platform/RecentCardsDashboardWidgetImpl";
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import React from 'react';
/**
 * @internal
 * Содержит публичные свойства элемента управления [RecentCardsDashboardWidget]{@link RecentCardsDashboardWidget}.
 */
export declare class RecentCardsDashboardWidgetParams extends PanelParams {
    /** Текст заголовка. */
    header: string;
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
}
/** @internal */
export declare class RecentCardsDashboardWidget extends Panel<RecentCardsDashboardWidgetParams, RecentCardsDashboardWidgetState> {
    constructor(props: RecentCardsDashboardWidgetParams);
    createParams(): RecentCardsDashboardWidgetParams;
    private textResourceKey;
    protected createImpl(): RecentCardsDashboardWidgetImpl<Readonly<{
        children?: React.ReactNode;
    }> & Readonly<RecentCardsDashboardWidgetParams>, RecentCardsDashboardWidgetState>;
}
