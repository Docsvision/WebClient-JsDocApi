import { ITypeaheadVariant } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadVariant";
/** @internal */
export declare class TypeaheadItem {
    data: ITypeaheadVariant;
    constructor(data: ITypeaheadVariant);
    getName(): string;
    getTitle(): string;
    getIconCssClass(): string;
    getValue(): string;
    getFavored(): boolean;
    htmlElement: HTMLElement;
}
