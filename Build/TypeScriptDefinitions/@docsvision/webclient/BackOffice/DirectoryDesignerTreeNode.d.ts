import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IDynamicTreeNodeData } from "@docsvision/webclient/Helpers/DynamicTree/IDynamicTreeNodeData";
import { ITreeNodeData } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/ITreeNodeData";
/** @internal */
export declare class DirectoryDesignerTreeNode implements IDynamicTreeNodeData {
    mData: GenModels.DirectoryDesignerTreeNode;
    mChildren: DirectoryDesignerTreeNode[];
    mName: React.ReactNode;
    static Create(data: GenModels.DirectoryDesignerTreeNode): DirectoryDesignerTreeNode;
    static CreateMany(dataArray: GenModels.DirectoryDesignerTreeNode[]): DirectoryDesignerTreeNode[];
    readonly data: GenModels.DirectoryDesignerTreeNode;
    displayName: React.ReactNode;
    readonly uniqueId: string;
    readonly iconClass: string;
    readonly children: ITreeNodeData[];
    expandedByDefault: boolean;
    childrenLoaded: boolean;
    readonly disabled: boolean;
}
