import { EditPopover } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/EditPopover";
import { ComboBoxParams } from "@docsvision/webclient/Platform/ComboBox";
import { IComboBoxItem } from "@docsvision/webclient/Platform/IComboBoxItem";
import { IComboBoxVariant } from "@docsvision/webclient/Platform/IComboBoxVariant";
import { InputBasedControlImpl, InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
/** @internal */
export interface ComboBoxState extends ComboBoxParams, InputBasedControlState<IComboBoxVariant> {
    items: IComboBoxItem[];
}
/** @internal */
export declare type ComboBoxImplState = ComboBoxState;
/**
 * @internal
 * Control is not completed.
 */
export declare class ComboBoxImpl extends InputBasedControlImpl<IComboBoxVariant, ComboBoxParams, ComboBoxState> {
    constructor(props: ComboBoxParams, state: ComboBoxState);
    protected loadItems(variants: IComboBoxVariant[]): void;
    variants: IComboBoxVariant[];
    protected getCssClass(): string;
    protected initEditPopover(popover: EditPopover): void;
    protected onValueBoxClick(): void;
    protected renderEditPopover(popover: EditPopover): any;
    protected onItemClick(item: IComboBoxItem): void;
    protected renderInputWithPlaceholder(): JSX.Element;
    protected getTextValue(): string;
    protected renderInto(props: any, container: HTMLElement): void;
}
