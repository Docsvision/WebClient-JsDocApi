import { EmployeeLoader } from "@docsvision/webclient/BackOffice/EmployeeLoader";
import { EmployeeVisualizer } from "@docsvision/webclient/BackOffice/EmployeeVisualizer";
import { FavoriteEmployeesStorage } from "@docsvision/webclient/BackOffice/FavoriteEmployeesStorage";
import { MultipleEmployeesParams } from "@docsvision/webclient/BackOffice/MultipleEmployees";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IEditPopoverProps } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/IEditPopoverProps";
import { ITypeaheadSearchQuery } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchQuery";
import { ITypeaheadSearchResult } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchResult";
import { ITypeaheadVariant } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadVariant";
import { InputBasedControlImpl, InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
import React from "react";
/** @internal */
export interface MultipleEmployeesState extends MultipleEmployeesParams, InputBasedControlState<GenModels.EmployeeDataModel[]> {
    binding: IBindingResult<GenModels.MultipleEmployeesDataModel>;
    lastEmployees: GenModels.EmployeeDataModel[];
    inputKeyDown: SimpleEvent<React.KeyboardEvent<any>>;
    favoritesStorage: FavoriteEmployeesStorage;
    employeeVisualizer: EmployeeVisualizer;
    employeeLoader: EmployeeLoader;
}
/** @internal */
export declare type MultipleEmployeesImplState = MultipleEmployeesState;
/** @internal */
export declare class MultipleEmployeesImpl extends InputBasedControlImpl<GenModels.EmployeeDataModel[], MultipleEmployeesParams, MultipleEmployeesState> {
    constructor(props: MultipleEmployeesParams, state: MultipleEmployeesState);
    setValue(value: GenModels.EmployeeDataModel[], redraw: boolean): void;
    initHelpers(props: MultipleEmployeesParams): void;
    protected getTextValue(): string;
    hasValue(): boolean;
    protected renderInto(props: MultipleEmployeesParams, container: HTMLElement): void;
    protected onInputKeyDown(ev: React.KeyboardEvent<any>): void;
    protected showEditPopover(popoverOptions?: IEditPopoverProps): JQueryDeferred<any>;
    protected getFavoritesStorageName(props: MultipleEmployeesParams): string;
    protected onSelected(typeaheadVariant: ITypeaheadVariant): void;
    protected onRemoveEmployeeClick(empl: GenModels.EmployeeDataModel, ev: React.MouseEvent<any>): void;
    protected findItems(query: ITypeaheadSearchQuery): JQueryDeferred<ITypeaheadSearchResult>;
    protected getEmployeeTooltip(empl: GenModels.EmployeeDataModel): string;
    restrictUnitId: string;
    tipMode: any;
    supportFavourites: any;
    favoriteEmployees: GenModels.EmployeeDataModel[];
    protected renderViewEmployeeList(): JSX.Element;
    protected renderWithText(): JSX.Element;
    protected renderEditEmployeeList(): JSX.Element;
    protected renderInputWithPlaceholder(): JSX.Element;
    addToFavorite(item: GenModels.EmployeeDataModel): void;
}
