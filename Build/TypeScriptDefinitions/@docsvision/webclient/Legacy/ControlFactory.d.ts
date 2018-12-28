import "@docsvision/webclient/Legacy/ApprovalDecisionControl";
import "@docsvision/webclient/Legacy/ApprovalFilePanel";
import { DatepickerControl } from "@docsvision/webclient/Legacy/DatepickerControl";
import { DateRangeControl } from "@docsvision/webclient/Legacy/DateRangeControl";
import { DisclosureHeader } from "@docsvision/webclient/Legacy/DisclosureHeader";
import { DropdownControl } from "@docsvision/webclient/Legacy/DropdownControl";
import { EmployeeAutoComplete } from "@docsvision/webclient/Legacy/EmployeeAutoComplete";
import "@docsvision/webclient/Legacy/DocumentPanel";
/** @internal */
export declare class ControlFactory {
    static CreateTextControl(root: HTMLElement, value?: string): any;
    static CreateLabelTextareaControl(root: HTMLElement, labelText?: string, textValue?: string): any;
    static CreateNumericControl(root: HTMLElement, value?: string): any;
    static CreateLabelTextControl(root: HTMLElement, labelText?: string, textValue?: string): any;
    static CreateRadioListControl(root: HTMLElement, selectedValue?: string): any;
    static CreateHiddenControl(root: HTMLElement, value?: string): any;
    static CreateDatepickerControl(root: HTMLElement, time: string, minDate?: Date, maxDate?: Date): DatepickerControl;
    static CreateSelectControl(root: HTMLElement, value: string): any;
    static CreateDecisionControl(root: HTMLElement): any;
    static CreateDropdownControl(root: HTMLElement, disabled?: string): DropdownControl;
    static CreateEmployeeSelectControl(root: HTMLElement): EmployeeAutoComplete;
    static CreateDateRangeControl(root: HTMLElement): DateRangeControl;
    static CreateDisclosureControl(root: HTMLElement): DisclosureHeader;
    static GetFromData(root: HTMLElement): any;
}
