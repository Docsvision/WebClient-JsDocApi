import { $LocalizationController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { $Locale } from "@docsvision/webclient/StandardServices";
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
/**
 * Содержит публичные свойства [EmptyControlStub]{@link EmptyControlStub}.
 */
export declare class Params extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Значение контрола - код культуры вида ru-RU, en-US и т.д. */
    value: string;
    services?: $LocalizationController & $Locale;
}
export interface State extends Params, BaseControlState {
    saved: boolean;
}
/**
 * Элемент управления для смены текущей локали пользователя
 */
export declare class UserCulture extends BaseControl<Params, State> {
    /** Список доступных языков */
    static Languages: {
        title: string;
        id: string;
    }[];
    /** @internal */
    protected createParams(): Params;
    init(): void;
    /** @internal */
    protected createImpl(): ControlImpl;
    onSaving(): JQueryDeferred<any>;
    onSaved(): JQueryDeferred<any>;
    renderControl(): JSX.Element;
}
