import { BasicApiEvent } from "@docsvision/webclient/System/ApiEvent";
export interface ISidebar {
    close(): void;
    open(): void;
    SaveSettings(): void;
    LoadSettings(): void;
    LoadLayout(): JQueryDeferred<any>;
    ResetSettings(): void;
    ReInitialize(): void;
    IsPinned: boolean;
    toggle?: BasicApiEvent<boolean>;
}
export declare type $Sidebar = {
    sidebar: ISidebar;
};
