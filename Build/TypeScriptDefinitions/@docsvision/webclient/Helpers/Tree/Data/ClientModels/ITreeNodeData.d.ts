/** @internal */
export interface ITreeNodeData {
    displayName: React.ReactNode;
    uniqueId: string;
    iconClass: string;
    children: ITreeNodeData[];
    nodeClass?: string;
    disabled?: boolean;
    expandedByDefault?: boolean;
    title?: string;
}
