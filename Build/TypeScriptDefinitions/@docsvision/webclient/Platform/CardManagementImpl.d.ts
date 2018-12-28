import { CardManagementParams } from "@docsvision/webclient/Platform/CardManagement";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
/** @internal */
export interface CardManagementState extends CardManagementParams, BaseControlState {
    refresh: Function;
    deleteAndRedirect: Function;
    goToEdit: Function;
    deleting: boolean;
}
/** @internal */
export declare type CardManagementImplState = CardManagementState;
/** @internal */
export declare class CardManagementImpl extends BaseControlImpl<CardManagementParams, CardManagementState> {
    constructor(props: CardManagementParams, state: CardManagementState);
    onEdit(): void;
    onDelete(): void;
    onRefresh(): void;
    renderControl(): JSX.Element;
}
