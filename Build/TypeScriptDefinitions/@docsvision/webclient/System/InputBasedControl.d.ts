import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { IDataChangedEventArgsEx } from "@docsvision/webclient/System/IDataChangedEventArgs";
import { InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
import { $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingsWriteRequest } from "@docsvision/webclient/System/IBindingsWriteRequest";
import { EditMode } from "@docsvision/webclient/System/EditMode";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { ICancelableEventArgs } from "@docsvision/webclient/System/ICancelableEventArgs";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import { IValidationParams } from "@docsvision/webclient/System/IValidationParams";
import { IValidationResult } from "@docsvision/webclient/System/IValidationResult";
/** Класс параметров для базового класса {@link InputBasedControl}. */
export declare class InputBasedControlParams<ModelT> extends BaseControlParams {
    /** Значение элемента управления. */
    value?: ModelT;
    /**
     * Флаг, определяющий возможность изменения значения элемента управления:
     * true - разрешено (разрешена настроенная операция редактирования),
     * false - не разрешено.
     */
    canEdit?: boolean;
    /**
     * Флаг, определяющий, что элемент управления находится в
     * модальном окне редактирования значения элемента управления в режиме редактирования.
     * {@link EditMode.EditInPlace}
     *
     * Элемент управления, расположеный в модальном окне редактирования, доступен по названию: `названиеЭУ**_modal_control**`
     */
    modalMode?: boolean;
    /** Возвращает значение по умолчанию */
    default?: any;
    /** Возвращает режим редактирования. */
    editMode?: EditMode;
    /** Текст всплывающей подсказки */
    tip?: string;
    /**
     * Текст заполнителя.
     *
     * Заполнитель отображается в элементе управления, когда его (элемента управления) значение не задано.
     */
    placeHolder?: string;
    /**
     * Текст метки.
     *
     * Метка - текст отображаемый рядом (слева или вверху) с элементом управления.
     */
    labelText?: string;
    /** Флаг, определяющий, что метка должна отображаться, когда значение элемента управления не задано: true - отображать, false - не отображать. */
    showEmptyLabel?: boolean;
    /** Флаг, указывающий, обязательно ли должно быть задано значение элемента управления: true - обязательно, false - не обязательно. */
    required?: boolean;
    /**
     * Флаг, определяющий, должно ли переноситься на следующую строку тектовое содержимое, когда оно не помещается в одну строку:
     * true - переносить,
     * false - не переносить.
     */
    wrapLongValueUnderLabel?: boolean;
    /** Флаг, определяющий, что модальное окно редактирования значения открыто: true - открыто, false - не открыто.  */
    isEditDialogShown?: boolean;
    /** Событие возникает при изменении значения элемента управления. */
    dataChanged?: BasicApiEvent<IDataChangedEventArgsEx<ModelT>>;
    /** Событие возникает при открытии модального окна редактирования. */
    inPlaceEditOpeninig?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает после открытия модального окна редактирования. */
    inPlaceEditOpened?: BasicApiEvent<IEventArgs>;
    /** Событие возникает при закрытии диалогового окна редактирования. */
    inPlaceEditClosinig?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает после закрытия диалогового окна редактирования. */
    inPlaceEditClosed?: BasicApiEvent<IEventArgs>;
    /** Событие возникает при сохранении изменения значения в модальном окна редактирования. */
    editPopoverAccepting?: CancelableApiEvent<any>;
    /** @internal Specifies control name, that should be placed into binding. Used in edit-in-place scenario. */
    editInPlaceCreatorControlName?: string;
}
/**
 * Базовый класс элементов управления, поддерживающих ввод данных.
 *
 * @param P Класс, наследующийся от {@link InputBasedControlParams} и описывающий публичные свойства компонента.
 * @param S Интерфейс, расширяющий {@link InputBasedControlState} и описывающий внутренние переменные инетрфейсного компонента.
 */
export declare abstract class InputBasedControl<ModelT, P extends InputBasedControlParams<ModelT>, S extends InputBasedControlState<ModelT>> extends BaseControl<P, S> {
    protected isAccepting: boolean;
    constructor(props: P);
    /** При переопределении в производных классах должен возвращать объект, содержащий соответствующие сервисы. */
    protected abstract getServices(): $LayoutInfo;
    /** @internal */
    protected defaultValue: ModelT;
    private readonly myControlImpl;
    /**
     * Проверяет возможность отображения диалогового окна редактирования.
     * @returns true - если операция редактирования доступна и элемент управления находится в режиме редактирования "По месту"; иначе - false.
     */
    canShowEditDialog(): boolean;
    /**
     * Открывает диалоговое окно редактирования значения.
     *
     * Внимание, в связи с изменениями в React 16, в Web-клиент начиная с версии 10 данный метод асинхронный.
     */
    showEditDialog(): JQueryDeferred<InputBasedControl<ModelT, P, S>>;
    /**
     * Закрывает диалоговое окно редактирования значения.
     */
    hideEditDialog(): void;
    /**
     * Проверяет наличие значения у элемента управления.
     * @returns true - если значение элемента управления установлено, иначе - false.
     */
    hasValue(): boolean;
    private readonly isEditDialogShown;
    /** Тоже что и {@link InputBasedControlParams.value} */
    value: ModelT;
    /** Запускает валидацию элемента управления. */
    validate(params: IValidationParams): IValidationResult[];
    /** @internal */
    componentDidMount(): void;
    private readonly myGenericControlImpl;
    /** @internal */
    onEditPopoverAccepting(sender: any, event: ICancelableEventArgs<IEventArgs>): void;
    /**
     * При переопределении в дочерних классах возвращает объект,
     * в котором перечислены параметры, значения которых необходимо
     * перенести из edit-in-place окна в основной контрол. В объекте в качестве ключей имена параметров,
     * а в качестве значений соответствующие значения из аргумента params.
     */
    protected getParamsToKeep(params: P): {
        value: ModelT;
    };
    /**
     * Возвращает модель данных, которая будет передана на сервер при сохранении значения контрола.
     * Сами данные получаются путем вызова {@link getBindings}.
     */
    getBindingsWriteRequests(): IBindingsWriteRequest[];
}
