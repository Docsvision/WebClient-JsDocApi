import { ITreeNodeData } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/ITreeNodeData";
/** @internal */
export declare class TreeNode {
    constructor(data: ITreeNodeData, level: number, parent: TreeNode, children?: TreeNode[]);
    visibleItemsCount: number;
    children: TreeNode[];
    data: ITreeNodeData;
    level: number;
    expanded: boolean;
    htmlEement: HTMLElement;
    parent: TreeNode;
    readonly displayName: React.ReactNode;
    readonly title: string;
    readonly uniqueId: string;
    readonly iconClass: string;
    readonly nodeClass: string;
    readonly disabled: boolean;
    readonly expandedByDefault: boolean;
}
