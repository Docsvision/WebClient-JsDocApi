import { SavingButtonsParams } from "@docsvision/webclient/Platform/SavingButtons";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import React from "react";
/** @internal */
export interface SavingButtonsState extends SavingButtonsParams, BaseControlState {
    /** Выполнить сохранение */
    performSave: Function;
    /** Выполнить отмену */
    performCancel: Function;
    /** Сохраняется ли карточка в данный момент */
    cardIsSaving: boolean;
    savingHelper: RequestHelper;
}
/** @internal */
export declare type SavingButtonsImplState = SavingButtonsState;
/** @internal */
export declare class SavingButtonsImpl extends BaseControlImpl<SavingButtonsParams, SavingButtonsState> {
    constructor(props: SavingButtonsParams, state: SavingButtonsState);
    protected handleClick(event: React.MouseEvent<any>): void;
    onSave(): void;
    onCancel(): void;
    renderControl(): JSX.Element;
}
