import { $LayoutFolderController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { RecursiveVisitor } from "@docsvision/webclient/Helpers/CustomTree/RecursiveVisitor";
import { IAccessor } from "@docsvision/webclient/Helpers/DynamicModel/IAccessor";
import { IFolderModalState } from "@docsvision/webclient/Platform/IFolderModalState";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
import { IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
import React from "react";
export interface IFolderModalProps {
    services: $LayoutFolderController;
}
/** @internal */
export declare class FolderModal extends React.Component<IFolderModalProps, IFolderModalState> {
    folderSelectedEvent: SimpleEvent<GenModels.FolderNode>;
    recursive: RecursiveVisitor<GenModels.FolderNode>;
    /** Уровень папки */
    level: IAccessor<GenModels.FolderNode, number>;
    /** Раскрыта ли папка */
    expanded: IAccessor<GenModels.FolderNode, boolean>;
    /** Видна ли папка */
    visible: IAccessor<GenModels.FolderNode, boolean>;
    /** Были ли загружены подчинённые папки с сервера */
    childrenLoaded: IAccessor<GenModels.FolderNode, boolean>;
    /** Отображает процесс загрузки данных с сервера */
    childrenLoading: IAccessor<GenModels.FolderNode, LoadingState>;
    constructor(props: any);
    componentDidMount(): void;
    readonly selectedFolder: GenModels.FolderNode;
    readonly folderSelected: IBasicEvent<GenModels.FolderNode>;
    protected parseFoldersTreeData(data: Array<GenModels.FolderNode>): Array<GenModels.FolderNode>;
    protected parseServerFolderInfo(src: GenModels.FolderNode, folderInfo: GenModels.FolderNode): void;
    protected onToggleFolder: (folder: GenModels.FolderNode) => void;
    protected onFolderSelected: (folder: GenModels.FolderNode) => void;
    protected updateFoldersMeta(folders: GenModels.FolderNode[], parentFolder?: GenModels.FolderNode): void;
    protected getFlatFolders(treeFolders?: GenModels.FolderNode[]): GenModels.FolderNode[];
    protected getFolderIconClass(folder: GenModels.FolderNode): string;
    renderFolder: (index: any, key: any) => JSX.Element;
    render(): JSX.Element;
}
