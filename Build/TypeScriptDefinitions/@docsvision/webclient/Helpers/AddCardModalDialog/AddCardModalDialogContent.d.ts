import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import React from "react";
/** @internal */
export interface IAddCardModalDialogContentProps {
    model: GenModels.AddCardModalModel;
    onToggleFocusTrap?: () => void;
}
/** @internal */
export declare class AddCardModalDialogContent extends React.Component<IAddCardModalDialogContentProps, {}> {
    /** @internal */
    shouldComponentUpdate(): boolean;
    /** @internal */
    render(): JSX.Element;
}
