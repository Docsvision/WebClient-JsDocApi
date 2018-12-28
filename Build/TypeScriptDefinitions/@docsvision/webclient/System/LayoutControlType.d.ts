import { LayoutControl } from "@docsvision/webclient/System/BaseControl";
/** Конструктор класса контрола. Например: `let type: LayoutControlType = WebClient.TextBox; */
export interface LayoutControlType {
    new (props: any): LayoutControl;
    controlComponentName: string;
}
