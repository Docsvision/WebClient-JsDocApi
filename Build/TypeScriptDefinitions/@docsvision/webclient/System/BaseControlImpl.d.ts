import { BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import React from "react";
/** Базовый интерфейс, для описания состояния контролов, наследующихся от {@link BaseControlImpl} */
export declare type BaseControlImplState = BaseControlState;
/**
 * Базовый класс для реализации контролов Web-клиента.
 * Реализация контрола содержит логику, без привязки к окружению (взаимодействие с сервером, с разметкой и т.д.).
 * Реализация используется основным, 'интерфейсным' классом контрола, наследующимся от {@link BaseControl}, который обеспечивает связь
 * контрола с внешним миром.
 *
 * @param P Класс или интерфейс, наследующийся от {@link BaseControlParams} и описывающий параметры компонента реализации.
 * @param S Интерфейс, расширяющий {@link BaseControlImplState} и описывающий внутренние переменные компонента реализации.
 */
export declare abstract class BaseControlImpl<P extends BaseControlParams, S extends BaseControlImplState> extends React.Component<P, S> {
    /** @internal */
    protected componentDOMNode: Element;
    private propertyHandlers;
    private changedParams;
    private newStyleControlImpl;
    state: S;
    /**
     * Инициализирует объект.
     *
     * В конструкторе необходимо создать объекты событий. Например:
     *
     *     this.state.inPlaceEditOpeninig = CancelableEvent.Create(this.state.wrapper);
     *     this.state.inPlaceEditOpened = SimpleEvent.Create(this.state.wrapper);
     *
     * **Внимание!** Значения свойств контрола (`props`) автоматически копируются в `state` в методе `componentDidMount`
     * (при помощи {@link setParamValue}), который вызывается после того, как конструктор завершил выполнение.
     * Соответственно, в теле конструктора значения в `state` еще недоступны, и нужно обращаться к `props`.
     *
     * ** Внимание!** При вызове конструктора объект `this.props` еще недоступен, необходимо обращаться к параметру `props`.
     *
     * @param props Параметры, переданные компоненту.
     */
    constructor(props: P, state?: S);
    protected onFocusedKeyDown(event: React.KeyboardEvent<any>, handler: () => void): void;
    /**
     * Производится обнаружение и регистрация всех свойств, объявленных с декоратором {@link handler}.
     */
    protected registerPropHandlers(): void;
    /**
     * При переопределении в дочерних классах, должен содержать логику отрисовки контрола. Например:
     *
     *     renderControl() {
     *          return <span> {this.state.text} </span>
     *     }
     */
    protected abstract renderControl(): any;
    setState<K extends keyof S>(state: ((prevState: Readonly<S>, props: P) => (Pick<S, K> | S)) | (Pick<S, K> | S), callback?: () => void): void;
    forceUpdate(callback?: () => void): void;
    /** См. [документацию React](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle) */
    componentDidMount(): void;
    /** См. [документацию React](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle) */
    componentWillUnmount(): void;
    /** См. [документацию React](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle) */
    componentWillMount(): void;
    /** См. [документацию React](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle) */
    componentWillReceiveProps(nextProps: P, nextContext: any): void;
    /**
     * Данный метод вызывается из {@link BaseControl.getParamValue}.
     *
     * По умолчанию реализуется следующая логика:
     * 1. Если объявлено get-свойство с декоратором {@link handler}, то возвращается значение данного свойства;
     * 2. Иначе возвращается значение из `state`.
     * @param paramName Имя параметра, значение которого необходимо получить
     */
    getParamValue(paramName: string): any;
    prepareSetParamValue(propName: string): void;
    /**
     * Обработчик, вызываемый всякий раз, когда установливается значение параметра.
     * Происходить это может в следующих случаях:
     * 1. При инициализации компонента (из метода `componentWillMount`).
     * 2. При получении новых props компонента (из метода `componentWillReceiveProps`). Как правило, новые свойства
     *    передаются интерфейсным компонентом при вызове {@link BaseControl.setParamValue}.
     *
     * Метод Реализует следующую логику:
     * 1. Если объявлено set-свойство с декоратором {@link handler}, то возвращается значение данного свойства;
     * 2. Иначе устаналивается значение в `state`.
     * @param paramName Имя параметра, значение которого нужно установить.
     * @param value Значение параметра
     * @param initial Значение истино, если метод вызывается при инициализации компонента (из componentWillMount).
     */
    setParamValue(propName: string, newVal: any, initial: boolean): void;
    /** Обработчик события `click` по области контрола. Генерирует событие {@link BaseControlParams.click}. */
    protected handleClick(event: React.MouseEvent<any>): void;
    /** Обработчик события `mouseover` в области контрола. Генерирует событие {@link BaseControlParams.mouseOver}. */
    protected handleMouseOver(event: React.MouseEvent<any>): void;
    /** Обработчик события `mouseout` в области контрола. Генерирует событие {@link BaseControlParams.mouseOut}. */
    protected handleMouseOut(event: React.MouseEvent<any>): void;
    /** Обработчик события `focus`. Генерирует событие {@link BaseControlParams.focus}. */
    protected handleFocus(event: React.FocusEvent<any>): void;
    /** Обработчик события `blur`. Генерирует событие {@link BaseControlParams.blur}. */
    protected handleBlur(event: React.FocusEvent<any>): void;
    /** Формирует список классов для основного html-тэга контрола. */
    protected getCssClass(): string;
    /**
     * Формирует словарь стилей для основного html-тэга контрола
     * см. [документацию React](https://facebook.github.io/react/docs/dom-elements.html#style)
     */
    protected getCssStyle(): React.CSSProperties;
    /**
     * Возвращает 0 если {@link BaseControlParams.tabStop} == true, и -1 в противном случае. По умолчанию данный метод не используется,
     * он может быть использован производным классом при отрисовке интерактивных элементов.
     */
    getTabIndex(): 0 | -1;
    /**
     * Возвращает полное наименование внутреннего контрола, которое следует передать
     * при его отрисовке в функции Render.
     * @param innerControlName наименование внутреннего контрола
     */
    protected getInnerControlFullName(innerControlName: string): string;
    /**
     * Выполняет отрисовку главного html-тега контрола, внутрь которого помещается содержимое параметра.
     * @param controlContent Обычно результат вызова {@link renderControl}
     */
    renderControlRoot(controlContent: any): JSX.Element;
    /**
     * Основной метод, выполняющий отрисовку контрола.
     * Возвращает результат вызова {@link renderControlRoot}, передавая ему параметром результат вызова {@link renderControl}.
     */
    render(): JSX.Element;
}
