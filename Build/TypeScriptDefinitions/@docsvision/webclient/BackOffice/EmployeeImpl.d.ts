import { EmployeeParams } from "@docsvision/webclient/BackOffice/Employee";
import { EmployeeLoader } from "@docsvision/webclient/BackOffice/EmployeeLoader";
import { EmployeeVisualizer } from "@docsvision/webclient/BackOffice/EmployeeVisualizer";
import { FavoriteEmployeesStorage } from "@docsvision/webclient/BackOffice/FavoriteEmployeesStorage";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IEditPopoverProps } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/IEditPopoverProps";
import { ITypeaheadSearchQuery } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchQuery";
import { ITypeaheadSearchResult } from '@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchResult';
import { ITypeaheadVariant } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadVariant";
import { InputBasedControlImpl, InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
import React from "react";
/** @internal */
export interface EmployeeState extends InputBasedControlState<GenModels.EmployeeDataModel>, EmployeeParams {
    lastEmployees: GenModels.EmployeeDataModel[];
    inputKeyDown: SimpleEvent<React.KeyboardEvent<any>>;
    favoritesStorage: FavoriteEmployeesStorage;
    employeeVisualizer: EmployeeVisualizer;
    employeeLoader: EmployeeLoader;
    binding: IBindingResult<GenModels.EmployeeDataModel>;
}
export declare type EmployeeImplState = EmployeeState;
/** @internal */
export declare class EmployeeImpl extends InputBasedControlImpl<GenModels.EmployeeDataModel, EmployeeParams, EmployeeState> {
    constructor(props: EmployeeParams, state: EmployeeState);
    setValue(value: GenModels.EmployeeDataModel, redraw: boolean): void;
    initHelpers(props: EmployeeParams): void;
    static validValue(value: GenModels.EmployeeDataModel): boolean;
    protected getTextValue(): string;
    protected renderInto(props: EmployeeParams, container: HTMLElement): void;
    protected onInputKeyDown(ev: React.KeyboardEvent<any>): void;
    protected onInputChange(event: any): void;
    protected getValueTitle(): string;
    protected showEditPopover(popoverOptions?: IEditPopoverProps): JQueryDeferred<any>;
    protected getFavoritesStorageName(props: EmployeeParams): string;
    protected onSelected(typeaheadVariant: ITypeaheadVariant): void;
    restrictUnitId: string;
    protected findItems(query: ITypeaheadSearchQuery): JQueryDeferred<ITypeaheadSearchResult>;
    favoriteEmployees: GenModels.EmployeeDataModel[];
    supportFavourites: any;
    tipMode: any;
    protected renderInputWithPlaceholder(): JSX.Element;
    addToFavorite(item: GenModels.EmployeeDataModel): void;
}
