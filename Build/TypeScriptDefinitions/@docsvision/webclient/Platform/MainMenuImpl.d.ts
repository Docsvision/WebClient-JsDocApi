import { MainMenuParams } from "@docsvision/webclient/Platform/MainMenu";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
/** @internal */
export interface MainMenuState extends MainMenuParams, PanelState {
}
/** @internal */
export declare class MainMenuImpl extends PanelImpl<MainMenuParams, MainMenuState> {
    constructor(props: MainMenuParams, state: MainMenuState);
    componentDidMount(): void;
    private onSidebarToggle;
    renderControl(): JSX.Element;
}
