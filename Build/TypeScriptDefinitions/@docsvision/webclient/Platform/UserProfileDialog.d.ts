import { $LayoutController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { ILayout } from "@docsvision/webclient/System/$Layout";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
import { $LayoutManager } from "@docsvision/webclient/System/$LayoutManager";
import * as React from 'react';
import { IDialog } from "@docsvision/webclient/System/$CurrentDialog";
export interface Props {
    visible: boolean;
    onClose: Function;
    services: $LayoutController & $LayoutManager;
}
interface State {
    layout: ILayout;
    savingState: LoadingState;
}
export declare class UserProfileDialog extends React.Component<Props, State> implements IDialog {
    static UserProfileLayout: string;
    private layoutRoot;
    constructor(props: any);
    static show(services: $LayoutController & $LayoutManager): JQueryDeferred<void>;
    componentDidMount(): void;
    loadLayout(): Promise<void>;
    private onSave;
    private onCancel;
    private attachRoot;
    DialogBox: import("styled-components").StyledComponent<(props: import("../../Helpers/ModalDialog/ModalDialogBox").IModalDialogBoxProps) => JSX.Element, any, {}, never>;
    close(): void;
    render(): JSX.Element;
}
export {};
