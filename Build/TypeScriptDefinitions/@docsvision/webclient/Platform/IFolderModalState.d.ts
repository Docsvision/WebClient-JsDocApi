import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { Tree } from "@docsvision/webclient/Helpers/Tree/Tree";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
/** @internal */
export interface IFolderModalState {
    initialLoading: LoadingState;
    tree: Tree;
    folders: GenModels.FolderNode[];
    /** flatFolders зависят от folders, лучше не менять руками */
    flatFolders: GenModels.FolderNode[];
    selectedFolderID: string;
}
