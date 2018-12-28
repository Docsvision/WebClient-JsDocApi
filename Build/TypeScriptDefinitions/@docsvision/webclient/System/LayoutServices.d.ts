import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ControlWrapperMap } from "@docsvision/webclient/System/ControlWrapperMap";
import { IEditOperationStore } from "@docsvision/webclient/System/IEditOperationStore";
import { ILayout } from "@docsvision/webclient/System/$Layout";
/** Сервис информации о разметке. */
export declare type $LayoutInfo = {
    layoutInfo: GenModels.LayoutInfoModel;
};
/** Сервис информации о карточке. */
export declare type $CardInfo = {
    cardInfo: GenModels.CardInfoModel;
};
/** Сервис для доступа к идентификатору карточки. */
export declare type $CardId = {
    cardId: string;
};
/** Сервис для доступа к операциям редактирования. */
export declare type $EditOperationStore = {
    editOperations?: IEditOperationStore;
};
/** Сервис для доступа к элементам управления разметки. */
export declare type $ControlStore = {
    controlStore: ControlWrapperMap;
};
/** Сервис для доступа к родительской разметке. */
export declare type $OwnerLayout = {
    ownerLayout: ILayout;
};
