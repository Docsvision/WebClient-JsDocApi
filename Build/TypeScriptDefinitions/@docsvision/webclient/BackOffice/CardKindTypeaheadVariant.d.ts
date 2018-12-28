import { CardKindTreeNodeModel } from "@docsvision/webclient/BackOffice/CardKindTreeNodeModel";
import { ITypeaheadVariant } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadVariant";
/** @internal */
export declare class CardKindTypeaheadVariant implements ITypeaheadVariant {
    data: CardKindTreeNodeModel;
    constructor(data: CardKindTreeNodeModel);
    readonly name: string;
    readonly value: string;
    readonly iconCssClass: string;
    readonly title: string;
}
