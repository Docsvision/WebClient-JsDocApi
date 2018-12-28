import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export declare class CardKindTreeNodeModel {
    /** Card kind name */
    cardKindName: string;
    /** Card kind name with parent kinds */
    cardKindFullName: string;
    /** Card kind identifier */
    cardKindId: string;
    /** Card type identifier */
    cardTypeId: string;
    /** Is card kind available or not */
    notAvailable: boolean;
    /** Is card kind selectable */
    notSelectable: boolean;
    /** Is node open and its children visible */
    isOpen: boolean;
    /** Child kinds */
    kinds: CardKindTreeNodeModel[];
    constructor(model: GenModels.CardKindInfoModel);
}
