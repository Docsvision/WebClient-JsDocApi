import { IAdaptiveMenuContentProps } from "@docsvision/webclient/Helpers/Menu/Content/AdaptiveMenuContent";
/** @internal */
export interface IDesktopMenuContentProps extends IAdaptiveMenuContentProps {
}
/**
 * @internal Представляет собой обёртку для содержимого меню в настольной версии.
 */
export declare const DesktopMenuContent: (props: IDesktopMenuContentProps) => JSX.Element;
