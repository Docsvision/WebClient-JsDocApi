import { LayoutScript, LayoutScriptParams, LayoutScriptState } from "@docsvision/webclient/System/LayoutScript";
/**
 * Содержит публичные свойства элемента управления {@link ConnectConfigurableMainMenuContainerButtonScript}.
 */
export declare class ConnectConfigurableMainMenuContainerButtonScriptParams extends LayoutScriptParams {
    /** Название контрола контейнера с настраиваемыми элементами меню */
    configurableContainerName: string;
    /** Название контрола кнопки для настройки меню */
    configurableMainMenuContainerButton: string;
}
/** @internal */
export interface ConnectConfigurableMainMenuContainerButtonScriptState extends ConnectConfigurableMainMenuContainerButtonScriptParams, LayoutScriptState {
}
/**
 * Класс для связывания настраиваемого контейнера главного меню и кнопки настройки
 */
export declare class ConnectConfigurableMainMenuContainerButtonScript extends LayoutScript<ConnectConfigurableMainMenuContainerButtonScriptParams, ConnectConfigurableMainMenuContainerButtonScriptState> {
    private container;
    private pinButton;
    /** @internal */
    protected createParams(): ConnectConfigurableMainMenuContainerButtonScriptParams;
    /** @internal */
    init(): void;
}
