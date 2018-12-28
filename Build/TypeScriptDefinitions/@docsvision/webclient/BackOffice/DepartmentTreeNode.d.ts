import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
export interface IDepartmentTreeNodeData {
    childrenLoaded: boolean;
    displayName: React.ReactNode;
    uniqueId: string;
    parentUniqueId?: string;
    iconClass: string;
    level: number;
    visible: boolean;
    children: IDepartmentTreeNodeData[];
    nodeClass?: string;
    disabled?: boolean;
    title?: string;
    loading?: LoadingState;
}
/** @internal */
export declare class DepartmentTreeNodeData implements IDepartmentTreeNodeData {
    private mData;
    private mChildren;
    private mName;
    private mExpanded;
    level: number;
    visible: boolean;
    parentUniqueId: string;
    loading: LoadingState;
    static Create(data: GenModels.DepartmentTreeNode, enabledItemTypes: GenModels.SearchDepartmentType): DepartmentTreeNodeData;
    static CreateMany(dataArray: GenModels.DepartmentTreeNode[], enabledItemTypes: GenModels.SearchDepartmentType): DepartmentTreeNodeData[];
    disabled: boolean;
    readonly data: GenModels.DepartmentTreeNode;
    displayName: React.ReactNode;
    readonly uniqueId: string;
    readonly title: string;
    readonly iconClass: string;
    children: DepartmentTreeNodeData[];
    expanded: boolean;
    childrenLoaded: boolean;
}
