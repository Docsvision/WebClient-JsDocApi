import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import React from "react";
/** @review Свойства для {@link DevicesVisibility}  */
export interface IDevicesVisibilityProps {
    devices: GenModels.DeviceType[];
    children?: React.ReactNode;
}
/**
 * @review Позволяет показывать содержимое в зависимости от типа устройства.
 *
 * Пример использования:
 *
 *     <DevicesVisibility devices={[DeviceType.Desktop, DeviceType.Tablet]}>
 *         Содержимое
 *     </DevicesVisibility>
 *
 */
export declare const DevicesVisibility: (props: IDevicesVisibilityProps) => JSX.Element;
