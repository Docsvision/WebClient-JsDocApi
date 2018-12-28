import { CheckBoxImpl, CheckBoxState } from "@docsvision/webclient/Platform/CheckBoxImpl";
import { CheckboxHideMode } from "@docsvision/webclient/Platform/CheckboxHideMode";
import { ImageModel } from "@docsvision/webclient/Platform/ImageModel";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
/**
 * Содержит публичные свойства элемента управления [Флажок]{@link CheckBox}.
 */
export declare class CheckBoxParams extends InputBasedControlParams<boolean> {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Текст, отображаемый в элементе управления в режиме "Без редактирования", если значение равно `true`. */
    yesText?: string;
    /** Текст, отображаемый в элементе управления в режиме "Без редактирования", если значение равно `false`. */
    noText?: string;
    /** Картинка в base64, отображаемая в элементе управления для значения `true`. */
    yesImage?: ImageModel;
    /** Картинка в base64, отображаемая в элементе управления для значения `false`. */
    noImage?: ImageModel;
    /** Режим отображения элемента управления */
    hideMode?: CheckboxHideMode;
    services?: $LayoutInfo & $EditOperationStore;
}
/**
 * Класс элемента управления Флажок.
 *
 * Добавляет в web-разметку элемент управления для изменения значение булевого типа.
 */
export declare class CheckBox extends InputBasedControl<boolean, CheckBoxParams, CheckBoxState> {
    constructor(props: CheckBoxParams);
    protected createParams(): CheckBoxParams;
    protected getServices(): $LayoutInfo & $EditOperationStore;
    /** @internal */
    componentDidMount(): void;
    protected onDataChanged(): void;
    private readonly checkBoxImpl;
    private CheckBoxBinding;
    private checkboxDefault;
    protected getBindings(): IBindingResult<any>[];
    /** @inheritDoc */
    canShowEditDialog(): boolean;
    /** @inheritDoc */
    showEditDialog(): JQueryDeferred<any>;
    /** @inheritDoc */
    hideEditDialog(): void;
    /** @internal */
    protected createImpl(): CheckBoxImpl;
}
