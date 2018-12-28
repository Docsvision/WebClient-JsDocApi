import { BaseControlImpl, BaseControlImplState } from "@docsvision/webclient/System/BaseControlImpl";
import { IBlurEventArgs } from "@docsvision/webclient/System/IBlurEventArgs";
import { IFocusEventArgs } from "@docsvision/webclient/System/IFocusEventArgs";
import { IMouseOutEventArgs } from "@docsvision/webclient/System/IMouseOutEventArgs";
import { IMouseOverEventArgs } from "@docsvision/webclient/System/IMouseOverEventArgs";
import { Layout } from "@docsvision/webclient/System/Layout";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { IBindingsWriteRequest } from "@docsvision/webclient/System/IBindingsWriteRequest";
import { BublingEventCallback, IBublingEventInfo, ISupportEventBubling } from "@docsvision/webclient/System/ISupportEventBubling";
import { IApiPropertyDescriptor } from "@docsvision/webclient/System/IApiPropertyDescriptor";
import { FieldSpec } from "@docsvision/webclient/System/GetFieldName";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { BasicEventHandler } from "@docsvision/webclient/System/IBasicEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import { IValidationResult } from "@docsvision/webclient/System/IValidationResult";
import React from "react";
/**
 * Базовый класс для описания публичных свойств контрола.
 *
 * Публичные свойства должны объявляться использованием одного из трех декораторов:
 * {@link r} (свойство, котрое запрещено изменять после создания контрола),
 * {@link rw} (разрешено изменять) или
 * {@link event} (событие).
 * Например:
 *
 *     @r isLoaded?: boolean;
 *     @rw visibility?: boolean = true;
 *     @event click?: BasicApiEvent<IClickEventArgs>;
 *
 * Свойства, которые не существенны для контрола (либо имеют значения по умолчанию) должны быть помечены как необязательные
 * (с помощью знака вопроса, например `@rw compactMode?: boolean = false;`). Это позволит не указывать данные свойства при создании контрола
 * через JSX из скриптов.
 *
 * Получение и запись значения публичных свойств можно переопределить в методах {@link BaseControl.setParamValue},
 * {@link BaseControl.getParamValue}, либо при помощи объявления свойств с декоратором {@link handler}.
 */
export declare class BaseControlParams {
    /** Возвращает ссылку на родительский элемент управления. @see {@link BaseControl.parent} */
    parent: BaseControl<BaseControlParams, BaseControlState>;
    /** Возвращает имя класса элемента управления. */
    controlTypeName?: string;
    /** Возвращает наименование класса TypeScript, реализующего компонент */
    controlComponentName?: string;
    /** Возвращает уникальное (для текущей разметки) имя элемента управления. */
    name?: string;
    /**
     * Возвращает набор стандартных классов, определяющих стиль элемента управления.
     * Стандартные классы, указываемые по умолчанию для всех элементов управления, не могут быть изменены.
     */
    standardCssClass?: string;
    /** Пользовательские классы стилей элемента управления, дополняющие стили из {@link BaseControlParams.standardCssClass}. */
    customCssClasses?: string;
    /** Определяет, отображается ли элемент управления на странице: `true` - отображается, `false` - скрыт. */
    visibility?: boolean;
    /**
     * Определяет, должен ли элемент управления получать фокус при переходе по Tab:
     * `true` - должен, `false` - не должен.
     * @see {@link BaseControlImpl.getTabIndex}
     */
    tabStop?: boolean;
    /**
     * Определяет, должен ли элемент управления отображаться в компактном режиме, в котором у элемента отсутствуют отступы и т.п.
     * Компактный режим, например, используется при отрисовке контролов в таблице (см. {@link Table}).
     */
    compactMode?: boolean;
    /** Стиль родительского (по отношению к данному элементу управления) div-элемента. */
    customCssStyle?: React.CSSProperties;
    /**
     * Определяет, завершена ли инициализация элемента управления:
     * `true` - объект {@link BaseControl.controlImpl} создан,
     * `false` - инициализация завершена.
     */
    isLoaded?: boolean;
    /** Событие, возникающее при щелчке мышью в области элемента управления. */
    click?: BasicApiEvent<any>;
    /** Событие, возникающее при попадании мыши в область элемента управления. */
    mouseOver?: BasicApiEvent<IMouseOverEventArgs>;
    /** Событие, возникающее при выведении мыши из области элемента управления. */
    mouseOut?: BasicApiEvent<IMouseOutEventArgs>;
    /** Событие, возникающее при получении элементом управления фокуса. */
    focus?: BasicApiEvent<IFocusEventArgs>;
    /** Событие, возникающее при потере элементом управления фокуса. */
    blur?: BasicApiEvent<IBlurEventArgs>;
    /** Событие, возникающее, когда свойство {@link isLoaded} устанавливается в `true`. */
    loaded?: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее при удалении элемента управления из разметки. */
    unloading?: CancelableApiEvent<IEventArgs>;
    /** Интерфейсный компонент контрола (см. описание класса {@link BaseControl}). */
    wrapper?: BaseControl<BaseControlParams, BaseControlState>;
}
/** Базовый интерфейс для описания состояния интерфейсного компонента элемента управления. */
export interface BaseControlState extends BaseControlParams {
    /** Инициализирован ли компонент. */
    initialized: boolean;
}
/** Синоним `BaseControl<any, any>` */
export declare type LayoutControl = BaseControl<BaseControlParams, any>;
/**
 * Базовый класс элементов управления модуля Web-клиент.
 *
 * Элементы управления Модуля состоят из двух классов: интерфейсного и реализации. Интерфейсная часть наследуется от данного класса,
 * а реализация от {@link BaseControlImpl}. Интерфейсный компонент обеспечивает взаимодействие контрола с внешним миром (работа с binding,
 * обращения к серверу, к разметке, в которой находится контрол и т.д.), в то время как компонент реализации содержит логику контрола,
 * абстрагированную от внешнего окружения.
 *
 * Публичные свойства контрола объявляются в специальном классе, наследующемся от {@link BaseControlParams}. Данные свойства
 * доступны через объект {@link BaseControl.params}. Публичные методы контрола объявляются в классе с использованием декоратора {@link api}.
 *
 * @param P Класс, наследующийся от {@link BaseControlParams} и описывающий публичные свойства компонента.
 * @param S Интерфейс, расширяющий {@link BaseControlState} и описывающий внутренние переменные инетрфейсного компонента.
 */
export declare abstract class BaseControl<P extends BaseControlParams, S extends BaseControlState> extends React.Component<P, S> implements ISupportEventBubling {
    /**
     * Если значение данного поля `false`, то вызов метода {@link forceUpdate} не инициирует перерисовку компонента.
     * Используется методом {@link batchUpdate}.
     */
    protected shouldUpdate: boolean;
    private paramsObject;
    private propertyGetHandlers;
    private propertySetHandlers;
    private controlImplRef;
    private bublingEventSubscribers;
    protected newStyleControlImpl: boolean;
    state: S;
    /**
     * Инициализирует контрол
     * @param props Свойства, переданные контролу
     */
    constructor(props: P);
    /**
     * При переопределении в дочернем классе должен возвращать новый
     * экземпляр параметров компонента, созданный через оператор new (например: `new MyControlParams()`)
     * Данный объект будет присвоен свойству this.state.
     */
    protected abstract createParams(): P;
    /**
     * При переопределении в дочернем классе должен возвращать новый
     * экземпляр реализации компонента, созданный через оператор new (например: `new MyControlImpl()`)
     * Данный объект будет присвоен свойству this.controlImpl.
     */
    protected createImpl(): BaseControlImpl<BaseControlParams, BaseControlImplState>;
    /**
     * Аналог свойства {@link BaseControl.params}.
     */
    protected getParams(): P;
    /**
     * Инициализация
     */
    init(): void;
    /**
     * Деинициализация
     */
    deinit(): void;
    /** @internal */
    protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
    /** @internal */
    protected unregisterChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
    /** @internal */
    protected registerControl(child: BaseControl<BaseControlParams, BaseControlState>): void;
    /** @internal */
    protected unregisterControl(child: BaseControl<BaseControlParams, BaseControlState>): void;
    /**
     * Компонент реализации (см. описание класса {@link BaseControl})
     * @see {@link getParamValue}, {@link setParamValue}, {@link attachControl},
     */
    protected controlImpl: BaseControlImpl<BaseControlParams, BaseControlImplState>;
    protected getImpl<T>(): T;
    /**
     * Получает значения через метод {@link getBindingsWriteRequests} и сохраняет их на сервере.
     */
    save(): JQueryDeferred<any>;
    /**
     * Публичные свойства элемента управления.
     * Обращения к параметрам через данный объект обрабатываются функциями {@link getParamValue} и {@link setParamValue}.
     * Свойства данного объекта объявляются в методе {@link setupParamsAccessors}.
     * Сам объект создается в методе {@link createParams}
     */
    readonly params: P;
    /**
     * Устанавливает значение {@ controlImpl}, в соответствии с идиомой Pimpl.
     * Метод должен передаваться в качестве значения ref в функции render. Например:
     *
     *     <MyControlImpl ref={this.attachControl} />;
     *
     * @param control Reference to contorl implementation
     */
    protected attachControl(control: any): void;
    /** См. [документацию React](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle) */
    componentWillMount(): void;
    /** См. [документацию React](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle) */
    componentDidMount(): void;
    readonly layout: Layout;
    readonly services: any;
    /**
     * Родительский компонент. Отношение родитель-потомок определяет, прежде всего, логику {@link getBindingsWriteRequests}.
     *
     * Внимание! Отношение родитель-потомок может отличаться от логической вложенности компонентов (например, дочерние компоненты, вложенные один в другой
     * могут иметь общего родителя).
     */
    readonly parent: BaseControl<BaseControlParams, BaseControlState>;
    /** См. [документацию React](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle) */
    componentWillUnmount(): void;
    /** См. [документацию React](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle) */
    componentWillReceiveProps(nextProps: P, nextContext: any): void;
    /** См. [документацию React](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle) */
    componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    /** См. [документацию React](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle) */
    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, prevContext: any): void;
    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
    /**
     * Вызывает перерисовку компонента.
     * Присваивание параметрам новых значений автоматически вызывает перерисовку, и в таких случаях вызывать метод не следует.
     * Данный метод нужно вызывать только в том случае, когда либо меняются поля объекта параметра, либо устанавливается значение state.
     * @param callBack Функция, которая будет вызвана после того, как перерисовка компонента завершится.
     * @see [Документация React](https://facebook.github.io/react/docs/react-component.html#other-apis)
     */
    forceUpdate(callBack?: () => any): void;
    /**
     * Позволяет установить значение нескольких параметров, вызвав только одну перерисовку компонента.
     * В методе нет необходимости, если значения параметров меняются в рамках обработки одного React-события (в этом случае
     * React автоматически предотвращает многократную перерисовку компонента).
     * @param updateLogic Функция, который выполняет изменение параметров
     * @param callback Функция, которая вызывается после обновления компонента (передается параметром в forceUpdate)
     */
    batchUpdate(updateLogic: Function, callback?: () => any): void;
    /** @internal */
    protected getApiProperties(): IApiPropertyDescriptor[];
    /** @internal */
    private readonly isLoaded;
    /**
     * Вызывается перед сохранением карточки.
     * @returns Сохранение будет продолжено только после того, как данный объект перейдет в состояние "resolved".
     */
    onSaving(): JQueryDeferred<any>;
    /**
     * Вызывается после сохранения карточки.
     * @returns Логика после сохранения карточки продолжит выполняться только после того, как данный объект перейдет в состояние "resolved".
     */
    onSaved(): JQueryDeferred<any>;
    /**
     * Подготавливает собственные значения и значения всех дочерних контролов для отправки на сервер.
     * Метод вызывает {@link getBindings} для получения значений.
     * @param withChildren Включать в результат значения дочерних контролов или нет.
     */
    getBindingsWriteRequests(withChildren?: boolean): IBindingsWriteRequest[];
    /**
     * При переопределнии в дочерних классах, должен возвращать все значения,
     * которые контрол должен отправлять на сервер при сохранении.
     */
    protected getBindings(): IBindingResult<any>[];
    /**
     * Проверяет корректность значения элемента управления.
     *
     * К примеру, если у элемента управления с флагом "обязательный" отсутствует значение,
     * валидация не будет пройдена (см. {@link InputBasedControl}). При этом можно показать предупреждающее сообщение.
     * @param params Параметры выполнения валидации. Например, показывать ли сообщение о неудаче в UI или нет.
     */
    validate(params: any): IValidationResult[];
    /**
     * Производится обнаружение и регистрация всех свойств, объявленных с декоратором {@link handler}.
     */
    protected registerParamHandlers(): void;
    private registerParamHandlersInternal;
    /**
     * Возвращает значение параметра при обращении через {@link params} объект.
     * По умолчанию реализуется следующая логика:
     * 1. Если объявлено get-свойство с декоратором {@link handler}, то возвращается значение данного свойства
     * 2. Если свойство controlImpl содержит объект, то возвращается реультат вызова {@link BaseControlImpl.getParamValue}.
     * 3. Если свойство controlImpl равно undefined, то выдается предупреждение, о том что controlImpl еще не инициализирован.
     *    Данная ситуация может возникнуть, если обращение к свойству происходит до вызова componentDidMount.
     * @param paramName Имя параметра, значение которого необходимо получить
     * @returns Значение параметра
     */
    getParamValue(paramName: string): any;
    /**
     * Обрабатывает новые значения свойств. Вызывается в `componentWillMount` и `componentWillReceiveProps`.
     * @param newProps Новые значения props компонента при вызове из componentWillReceiveProps или this.props при вызове из componentWillMount.
     * @param initial Значение истино, если метод вызывается при инициализации компонента (из componentWillMount).
     */
    protected setParamValues(newProps: BaseControlParams, initial: boolean): void;
    /**
     * Обработчик, вызываемый всякий раз, когда установливается значение параметра.
     * Происходить это может в следующих случаях:
     * 1. При инициализации компонента (см. {@link setParamValues})
     * 2. При получении новых props компонента (ситуация возможна при создании компонента из скриптов через JSX-синтаксис, см. {@link setParamValues}).
     * 3. При установке значения через объект {@link params} (например `params.visiblity = false`).
     *
     * Метод Реализует следующую логику:
     * 1. Если параметр является событием (объявлен с декоратором {@link event}), то вызывается {@link setEventValue}.
     * 2. Если запись не разрешена (параметр только для чтения (объявлен с декоратором {@link r}) и initial = false), то сообщается об ошибке.
     * 3. Если запись разрешена, то
     * а) Ищется set-свойство в текущем классе с декоратором {@link handler} для данного параметра, и если оно присутствует, то вызывается оно.
     * б) Если свойство не найдено, значение параметра помещается в `state`. В методе `render` значения из `state` обычно передаются в {@link controlImpl}.
     * @param paramName Имя параметра, значение которого нужно установить.
     * @param value Значение параметра
     * @param initial Значение истино, если метод вызывается при инициализации компонента (из componentWillMount).
     */
    setParamValue(paramName: string, value: any, initial: boolean): void;
    /**
     * Вызывается методом {@link setParamValue}, в случае если параметр является событием (объявлен с декоратором {@link event}).
     * @param paramName Имя события
     * @param newVal Одна или несколько функций-обработчик события
     * Если передаётся строка, то несколько функций можно указать через один из разделителей:
     * ",", ";", "|" или "&" с произвольным количеством пробелов между ними.
     * @param initial Значение истино, если метод вызывается при инициализации компонента (из componentWillMount).
     */
    protected setEventValue(paramName: string, val: BasicEventHandler<any> | BasicEventHandler<any>[] | string, initial: boolean): Promise<void>;
    protected callEventHandlers(sender: any, args: any, handlersName: string, paramName: string): Promise<void>;
    /**
     * Инициализирует объект {@link params}.
     * В объекте объявляются get и set акссессоры для всех параметров, которые вызывают
     * методы {@link getParamValue} и {@link setParamValue}.
     * Для успешной настройки параметров они должны быть объявлены с декоратором {@link r}, {@link rw} или {@link event}.
     */
    protected setupParamsAccessors(): void;
    readonly supportEventBubling: boolean;
    getEventInfo<T>(event: any): IBublingEventInfo;
    triggerBublingEvent<T>(eventName: string, actualSender: ISupportEventBubling, args: T): void;
    subscribteToBublingEvent(eventNameSpec: string | FieldSpec<any, any>, callback: BublingEventCallback): void;
    unsubscribteToBublingEvent(eventNameSpec: string | FieldSpec<any, any>, callback: BublingEventCallback): void;
    render(): React.ReactNode;
}
