import { IControlSelectorProps } from "@docsvision/webclient/Helpers/ControlSelector/IControlSelectorProps";
import { IEditOperation } from "@docsvision/webclient/System/IEditOperation";
/** @review Свойства для {@link ControlSelector}  */
export interface IExtendedControlSelectorProps extends IControlSelectorProps {
    operations: IEditOperation[];
}
