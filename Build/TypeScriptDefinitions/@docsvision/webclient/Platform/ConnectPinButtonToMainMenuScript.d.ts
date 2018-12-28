import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { $ControlStore } from "@docsvision/webclient/System/LayoutServices";
import { LayoutScript, LayoutScriptParams, LayoutScriptState } from "@docsvision/webclient/System/LayoutScript";
/**
 * Содержит публичные свойства элемента управления [ConnectPinButtonToMainMenuScript]{@link ConnectPinButtonToMainMenuScript}.
 */
export declare class ConnectPinButtonToMainMenuScriptParams extends LayoutScriptParams {
    /** Название контрола с главным меню */
    mainMenuName: string;
    /** Название контрола с кнопкой прикрепления меню */
    pinButtonName: string;
    /** Класс иконки для прикрепления меню */
    pinIconClassName?: string;
    /** Класс иконки для открепления меню */
    unpinIconClassName?: string;
    services?: $ControlStore;
}
/** @internal */
export interface ConnectPinButtonToMainMenuScriptState extends ConnectPinButtonToMainMenuScriptParams, LayoutScriptState {
}
/**
 * Класс для связывания главного меню и кнопки его прикрепления/открепления
 */
export declare class ConnectPinButtonToMainMenuScript extends LayoutScript<ConnectPinButtonToMainMenuScriptParams, ConnectPinButtonToMainMenuScriptState> {
    private mainMenu;
    private readonly pinButton;
    /** @internal */
    protected createParams(): ConnectPinButtonToMainMenuScriptParams;
    /** @internal */
    init(): void;
    /**
     * При нажатии на кнопку прикрепления меню
     */
    onPinButtonClick(): void;
    /**
     * При появлении/скрытии меню
     */
    onMenuToggle: (sender: BaseControl<BaseControlParams, BaseControlState>, data: boolean) => void;
    /**
     * Обновление иконки прикрепления меню
     */
    updateIcon(): void;
}
