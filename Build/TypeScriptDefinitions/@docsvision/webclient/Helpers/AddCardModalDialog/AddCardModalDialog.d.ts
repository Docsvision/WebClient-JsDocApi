import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import React from "react";
/** @internal */
export interface IAddCardModalDialogProps {
    model: GenModels.AddCardModalModel;
}
/** @internal */
export interface IAddCardModalDialogState {
    focusTrapDisabled: boolean;
}
/** @internal */
export declare class AddCardModalDialog extends React.Component<IAddCardModalDialogProps, IAddCardModalDialogState> {
    constructor(props: IAddCardModalDialogProps);
    /** Переключает режим focus trap (вкл/выкл) */
    protected toggleFocusTrap: () => void;
    /** @internal */
    render(): JSX.Element;
}
