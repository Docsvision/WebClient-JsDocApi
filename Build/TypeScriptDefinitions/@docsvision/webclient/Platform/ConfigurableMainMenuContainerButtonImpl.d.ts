import { ConfigurableMainMenuContainerButtonParams } from "@docsvision/webclient/Platform/ConfigurableMainMenuContainerButton";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import React from "react";
/** @internal */
export interface ConfigurableMainMenuContainerButtonState extends ConfigurableMainMenuContainerButtonParams, BaseControlState {
}
/** @internal */
export declare type ConfigurableMainMenuContainerButtonImplState = ConfigurableMainMenuContainerButtonState;
/** @internal */
export declare class ConfigurableMainMenuContainerButtonImpl extends BaseControlImpl<ConfigurableMainMenuContainerButtonParams, ConfigurableMainMenuContainerButtonState> {
    constructor(props: ConfigurableMainMenuContainerButtonParams, state: ConfigurableMainMenuContainerButtonState);
    protected handleClick(event: React.MouseEvent<any>): void;
    protected onToggleMenuClick: () => void;
    protected onCloseMenu: () => void;
    protected onBeginConfigurationClick: () => void;
    protected onRestoreClick: () => void;
    protected onAttachFolderClick: () => void;
    protected onRefreshFoldersrClick: () => void;
    renderControl(): JSX.Element;
}
