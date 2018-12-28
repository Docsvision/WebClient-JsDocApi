import { CardKindTreeNodeModel } from "@docsvision/webclient/BackOffice/CardKindTreeNodeModel";
import React from "react";
/** @internal */
export interface IAddCardModalDialogKindsTreeProps {
    kinds: CardKindTreeNodeModel[];
    onCardKindSelected: (kind: CardKindTreeNodeModel) => void;
    onDestroy?: () => void;
}
/** @internal */
export declare class AddCardModalDialogKindsTree extends React.Component<IAddCardModalDialogKindsTreeProps, {}> {
    componentWillUnmount(): void;
    /** @internal */
    render(): JSX.Element;
}
