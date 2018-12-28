import { KindTreeNodeData } from "@docsvision/webclient/BackOffice/KindTreeNodeData";
import { LinkTypeComboBoxVariant } from "@docsvision/webclient/BackOffice/LinkTypeComboBoxVariant";
import { NewCardLinkDialogArgs } from "@docsvision/webclient/BackOffice/NewCardLinkDialogArgs";
import { INewCardLinkDialogProps } from "@docsvision/webclient/BackOffice/INewCardLinkDialogProps";
import { INewCardLinkDialogState } from "@docsvision/webclient/BackOffice/INewCardLinkDialogState";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { TreeNode } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/TreeNode";
import { Tree } from "@docsvision/webclient/Helpers/Tree/Tree";
import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
import React from "react";
/** @internal */
export declare class NewCardLinkDialog extends React.Component<INewCardLinkDialogProps, INewCardLinkDialogState> {
    private root;
    buttonOkEvent: SimpleEvent<NewCardLinkDialogArgs>;
    kindSelectedEvent: SimpleEvent<NewCardLinkDialogArgs>;
    linkTypeSelectedEvent: SimpleEvent<NewCardLinkDialogArgs>;
    constructor(props: INewCardLinkDialogProps);
    readonly buttonOkClicked: SimpleEvent<NewCardLinkDialogArgs>;
    readonly selectedKind: GenModels.LayoutKindModel;
    readonly selectedLinkType: GenModels.LinkTypeModel;
    static ShowDialog(kinds: GenModels.LayoutKindModel[], linkTypes: GenModels.LinkTypeModel[], uniqueControlKey: string, okCallback: (sender: any, data: NewCardLinkDialogArgs) => void): void;
    protected loadTreeNodes(kinds: GenModels.LayoutKindModel[]): KindTreeNodeData[];
    protected attachTree(tree: Tree): void;
    protected onKindSelected(sender: any, node: TreeNode): void;
    protected onLinkTypeSelect(val: LinkTypeComboBoxVariant): void;
    protected getLinkTypeComboBoxProps(): any;
    componentDidMount(): void;
    render(): JSX.Element;
}
