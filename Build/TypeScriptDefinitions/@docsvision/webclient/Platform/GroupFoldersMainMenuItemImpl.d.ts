import { GroupFoldersMainMenuItemParams } from "@docsvision/webclient/Platform/GroupFoldersMainMenuItem";
import { GroupMainMenuItemImpl, GroupMainMenuItemImplState } from '@docsvision/webclient/Platform/GroupMainMenuItemImpl';
/** @internal */
export interface GroupFoldersMainMenuItemState extends GroupFoldersMainMenuItemParams, GroupMainMenuItemImplState {
}
/** @internal */
export declare type GroupFoldersMainMenuItemImplState = GroupFoldersMainMenuItemState;
/** @internal */
export declare class GroupFoldersMainMenuItemImpl extends GroupMainMenuItemImpl<GroupFoldersMainMenuItemParams, GroupFoldersMainMenuItemState> {
}
