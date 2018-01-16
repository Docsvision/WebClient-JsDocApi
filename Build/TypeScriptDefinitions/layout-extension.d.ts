declare namespace WebClient {
    type BasicApiEvent<T> = string | IBasicEvent<T> | BasicEventHandler<T>;
    type CancelableApiEvent<T> = string | ICancelableEvent<T> | CancelableEventHandler<T>;
}
declare namespace WebClient {
    abstract class BasicEvent<T> implements IBasicEvent<T> {
        protected handlers: BasicEventHandler<T>[];
        private mDefaultSender;
        private mEventInfo;
        constructor(sender: any, subscribers?: BasicEventHandler<T>[]);
        subscribe(handler: BasicEventHandler<T>): void;
        unsubscribe(handler: BasicEventHandler<T>): void;
        defaultSender: () => BaseControl<BaseControlParams, any>;
        protected triggerAll(sender?: any, data?: T): void;
    }
}
declare namespace WebClient {
    class CancelableEvent<T> extends BasicEvent<ICancelableEventArgs<T>> {
        private deferred;
        constructor(sender?: any, subscribers?: {
            (sender: any, args?: ICancelableEventArgs<T>): void;
        }[]);
        triggerWithArgs(sender: any, argsP: ICancelableEventArgs<T>): void;
        triggerWith(sender: any, data?: T): CancelableEventArgs<T>;
        trigger(data?: T): CancelableEventArgs<T>;
        createArgs(data?: T): CancelableEventArgs<T>;
        static cast<T>(event: ICancelableEvent<T> | CancelableApiEvent<T>): CancelableEvent<T>;
        static Create<T>(sender: any, subscriberFunc?: CancelableApiEvent<T>): CancelableEvent<T>;
    }
}
declare namespace WebClient {
    /**
     * Представляет собой событие для действий, подписчики которого могут его отменить.
     * Заметка: подписчики события могут выполнять долговременные асинхронные операции перед продолжением или отменой действий событий.
     * Пример использования:
     *
     *    this.cardOpening = CancelableEvent.Create(props.wrapper);
     *    ...
     *    this.cardOpening.trigger({
     *      cardModel: model
     *    })
     *    .canceled(this.back)
     *    .accepted(() => callback(model));
     *
     * Заметка: подписчики события должны использовать только интерфейс ICancelableEventArgs<T> публичного API,
     * поскольку интерфейс CancelableEventArgs<T> только для внутреннего использования инициаторов событий.
     */
    class CancelableEventArgs<T> implements ICancelableEventArgs<T> {
        private dataField;
        private deferredObj;
        private autoAcceptSetting;
        /**
         * Создаёт экземпляр CancelableEventArgs<T>
         * @param data данные события
         * @param callbackAccepted смотрите метод {@link accepted}
         * @param callbackCanceled смотрите метод {@link canceled}
         */
        constructor(data?: T, callbackAccepted?: (data?: T) => void, callbackCanceled?: (data?: T) => void);
        /**
         * Коллбэк, который будет вызван, если подписчики события разрешили продолжить выполнение действий
         */
        accepted(callback: (data?: T) => void): CancelableEventArgs<T>;
        /**
         * Коллбэк, который будет вызван, если подписчики события отменили выполнение действий
         */
        canceled(callback: (data?: T) => void): CancelableEventArgs<T>;
        /**
         * См. {@link ICancelableEventArgs<T>.cancel}
         */
        cancel(): void;
        /**
         * См. {@link ICancelableEventArgs<T>.accept}
         */
        accept(): void;
        /**
         * См. {@link ICancelableEventArgs<T>.wait}
         */
        wait(): void;
        /**
         * См. {@link ICancelableEventArgs<T>.data}
         */
        readonly data: T;
        /**
         * См. {@link ICancelableEventArgs<T>.autoAcceptEnabled}
         */
        /**
         * См. {@link ICancelableEventArgs<T>.autoAcceptEnabled}
         */
        autoAcceptEnabled: boolean;
        /**
         * Возвращает текущее состояние объекта события.
         * Состояние может изменяться вызовом методов accept() или cancel() (они обычно используются подписчиками событий)
         * См. также: autoAcceptEnabled
         */
        readonly state: CancelableEventState;
        readonly deferred: JQueryDeferred<T>;
    }
}
declare namespace WebClient {
    enum CancelableEventState {
        Pending = 0,
        Accepted = 1,
        Canceled = 2,
    }
}
declare namespace WebClient {
    class SimpleEvent<T> extends BasicEvent<T> {
        constructor(sender?: any, subscribers?: {
            (sender: any, args?: T): void;
        }[]);
        trigger(data?: T): void;
        triggerWith(sender: any, data?: T): void;
        static cast<T>(event: IBasicEvent<T> | BasicApiEvent<T>): SimpleEvent<T>;
        static Create<T>(sender: any, subscriberFunc?: BasicApiEvent<T>): SimpleEvent<T>;
    }
}
declare namespace WebClient {
    type BasicEventHandler<T> = (sender, args?: T) => void;
    interface IBasicEvent<T> {
        subscribe(handler: BasicEventHandler<T>): any;
        unsubscribe(handler: BasicEventHandler<T>): any;
    }
}
declare namespace WebClient {
    type CancelableEventHandler<T> = BasicEventHandler<ICancelableEventArgs<T>>;
    type ICancelableEvent<T> = IBasicEvent<ICancelableEventArgs<T>>;
}
declare namespace WebClient {
    interface ICancelableEventArgs<T> {
        cancel(): void;
        accept(): void;
        wait(): void;
        data: T;
        autoAcceptEnabled: boolean;
    }
}
declare namespace WebClient {
    interface IEventArgs {
    }
}
declare namespace WebClient {
    interface ICardSavingEventArgs {
        saveControlData: ISaveControlData;
    }
}
declare namespace WebClient {
    interface ICardStateChangingEventArgs {
        operationId: string;
    }
}
declare namespace WebClient {
    abstract class BasicExtension implements IExtension {
        initialize(): void;
        getUrls(urlResolver: UrlResolver): IUrlMap;
    }
}
declare namespace WebClient {
    class LayoutExtension extends BasicExtension {
        constructor();
        initialize(): void;
        protected addLegacyCardTypes(): void;
        protected getCaption(name: string): string;
        getUrls(urlResolver: UrlResolver): IUrlMap;
    }
}
declare namespace WebClient {
    class LayoutManager {
        protected layoutContainer: LayoutContainer;
        protected rootElementId: string;
        protected siteUrl: string;
        protected applicationTimestamp: number;
        /** Note, on view layouts save can be performed multiple times. On edit and create it should be performed once. */
        protected pageLeaveConfirmationDisabled: boolean;
        protected layoutContainers: ILayoutContainerMap;
        protected layoutCardLayoutPosition: string;
        protected layoutUnloading: CancelableEvent<IEventArgs>;
        protected layoutUnloaded: SimpleEvent<IEventArgs>;
        protected prevConfirmationModal: ModalWindow;
        constructor(layoutManagerParams: ILayoutManagerParams);
        readonly RootHtmlElement: HTMLElement;
        readonly IsCardSaved: boolean;
        readonly cardLayout: Layout;
        readonly LayoutUnloading: ICancelableEvent<IEventArgs>;
        readonly LayoutUnloaded: SimpleEvent<IEventArgs>;
        showCard(model: ILayoutCardModel): void;
        show(rootElementId: string, layoutPosition: string, model: ILayoutViewModel): void;
        getLayout(layoutPositionName: string): Layout;
        disablePageLeaveConfirmation(): void;
        deleteCard(cardId?: string): JQueryDeferred<any>;
        back(): void;
        protected unmountCallback(positionName: string): void;
        protected loadExtensions(): void;
        protected initialize(model: ILayoutCardModel): void;
        destroy(positionName?: string): JQueryDeferred<any>;
        protected updateFolderStyle(cardTypeId: string): void;
        protected reactJsUnmount(): void;
        onBeforeWindowUnload(e: any): string;
        onWindowUnload(ev: any): void;
    }
}
declare var layoutManager: WebClient.LayoutManager;
declare namespace WebClient {
    /**
    * Предоставляет данные сотрудника
    */
    interface IBasicEmployeeInfo {
        /** Идентификатор сотрудника в Docsvision. */
        id: string;
        /** Имя сотрудника. */
        firstName: string;
        /** Отчество сотрудника. */
        middleName: string;
        /** Фамилия сотрудника. */
        lastName: string;
        /** Должность сотрудника. */
        position: string;
        /** Отображаемое имя сотрудника. Формат отображаемого имени определяется настройками в Справочнике.*/
        displayName: string;
        /** Путь сотрудника в справочнике */
        pathInDirectory?: IDepartmentInfo[];
    }
}
declare namespace WebClient {
    interface ILayoutManagerParams {
        rootElementId: string;
        applicationTimestamp: number;
        siteUrl: string;
    }
}
declare namespace WebClient {
    interface IValidationParams {
        ShowErrorMessage: boolean;
    }
}
declare namespace WebClient {
    interface IValidationResult {
        Passed: boolean;
        Message: string;
    }
}
declare namespace WebClient {
    class BodyContainerProvider {
        static ActiveContainers: HTMLElement[];
        private mContainer;
        constructor(id: string);
        private getContainer(id);
        dispose(): void;
        createElement(className?: string): HTMLElement;
        freeElement(elem: HTMLElement): JQueryDeferred<any>;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IButtonProperties {
        /** Text value to show */
        text?: string;
        /** Show specified icon to the left of the text.
          * Class should define width and heihgt background, representing an icon
          * Preffered icon width is 18px (it is loading icon width), but you can use icon of any size.
          * If icon is not 18x18, then you should setup loadingIconClass, and specify your loading icon,
          * otherwise text will jump on loading on and off.
          * Default value: null
          */
        iconClass?: string;
        /** Show loading icon (instead of specified in iconClass)
          * Default value: false
          */
        loading?: boolean;
        /** Icon class when loading is true.
          * Default value: "dv-ico icon-spin loader-animate"
          */
        loadingIconClass?: string;
        /** Default value: true */
        visible?: boolean;
        /** Additional classes */
        className?: string;
        /** Click element handler. Called also on enter and space key down, when button is focused. */
        onClick?: (ev: React.MouseEvent) => void;
        /** Key down handler */
        onKeyDown?: (ev?) => void;
        /** Called on button focus */
        onFocus?: (ev?) => void;
        /** Called on button blur */
        onBlur?: (ev?) => void;
        /** Should be button 100% width or not.
          * Default value: true
          */
        stretchWidth?: boolean;
        /** Tooltip */
        title?: string;
        /** Display button with specific style
          * Default value: false
          */
        primaryButton?: boolean;
        /** How button text and icon should be aligned.
          * Default value: ButtonAlignModes.Center
          */
        align?: ButtonAlignModes;
        /** Tab index */
        tabIndex?: number;
        /** Content of the button (can be used instead of text) */
        children?: any;
        /** Support for attaching to root element */
        attach?: (instance: HTMLElement) => any;
        /** Value of attribute data-button-name for autotesting purposes */
        name?: string;
        /** If buton disabled it will have specific visual style and onClick will not be raised. Default value: false */
        disabled?: boolean;
    }
    /** @internal */
    enum ButtonAlignModes {
        Center = 0,
        Left = 1,
    }
    /** Represents a button with icon @internal */
    const Button: (props: IButtonProperties) => JSX.Element;
}
declare namespace WebClient {
    /** @internal */
    interface ICommandBarButtonProps {
        /** Supposed, that initial state is "false". In that state button looks like "+". */
        /** Changin value to "true" initiates animated rotation to 45 degrees (button become like "x") */
        expanded: boolean;
        /** Button action. You may want to change "expanded" state in this handler. */
        onClick(event: React.MouseEvent): void;
        /** Additional class for element */
        className?: string;
        visible?: boolean;
        /** Value of attribute data-button-name for autotesting purposes */
        name?: string;
        /** Tooltip */
        title?: string;
    }
    /** Represents animated button, that looks like plus sign in collapsed state, and like "x" in expanded.
      * See also: CommandBarHelper
      * @internal
      */
    const CommandBarButton: (props: ICommandBarButtonProps) => JSX.Element;
}
declare namespace WebClient {
    /**
     * @internal
     */
    class Debouncer {
        private timerHandle;
        private callback;
        private timeout;
        constructor(callback: Function, timeout?: number);
        trigger(): void;
        clear(): void;
    }
}
declare namespace WebClient {
    namespace Styled {
        namespace Helpers {
            /**
             * Позволяет присоединить свой интерфейс для стандартных html-узлов (styled.div, styled.button и т.п.) для автодополнения.
             * Для своих компонентов его использовать обычно не имеет смысла, так как в своём компоненте вы сами можете указать интерфейс для props.
             * Пример использования:
             *
             *     export interface IButtonProps {
             *         primary?: boolean;
             *     }
             *
             *     export const Button = Styled.Helpers.withProps<IButtonProps>()(styled.styled.button)`
             *         color: ${props => props.primary ? 'white' : 'black'};
             *     `;
             *
             */
            const withProps: <U>() => <P, T, O>(fn: styled.ThemedStyledFunction<P, T, O>) => styled.ThemedStyledFunction<P & U, T, O & U>;
            /**
             * Проверяет, является ли компонент Styled-компонентом
             * @param component Проверяемый компонент
             */
            const isStyled: (component: any) => boolean;
            /**
             * Позволяет скомбинировать несколько миксинов
             * @param mixins Список миксинов
             *
             * Пример использования:
             *
             *     export const Button = styled.styled.span`
             *         ${Styled.Helpers.combineMixins(Styled.Mixins.hover, Styled.Mixins.focus)`
             *             color: lime;
             *         `}
             *     `;
             *
             */
            const combineMixins: (...mixins: styled.ThemedCssFunction<any>[]) => (strings: any, ...values: any[]) => styled.InterpolationValue[];
            /**
             * Альтернатива для создания новых компонентов
             * Пример использования:
             *
             *     interface IShopItem {
             *         className?: string;
             *         available: boolean;
             *         price?: number;
             *         comments?: string[];
             *         name: string;
             *         onClick?: (e: React.MouseEvent) => void
             *     }
             *
             *     class ShopItem extends React.Component<IShopItem, undefined> {
             *         render() {
             *             return <div className={this.props.className} onClick={this.props.onClick}>{this.props.name}</div>;
             *         }
             *     }
             *
             *     const PerfectQualityShopItem = new Styled.Helpers.ComponentBuilder(ShopItem)
             *         .setClasses('shop-item', ['shop-item_perfect-quality'])
             *         .setPropsForClasses({
             *             available: null,
             *             price: (name: string, value: number) => (value > 1000) ? 'highPrice' : 'lowPrice', //CamelCase
             *             comments: (name: string, value: string[] | null) => value && (value.length > 0)
             *         })
             *         .build()`
             *             color: ${props => props.available ? 'green' : 'gray'};
             *         `;
             *
             *     const LowQualityShopItem = new Styled.Helpers.ComponentBuilder<IShopItem>(styled.styled.div)
             *         .setClasses('shop-item', ['shop-item_low-quality'])
             *         .setPropsForClasses({
             *             available: null,
             *             price: (name: string, value: number) => (value > 1000) ? 'highPrice' : 'lowPrice', //CamelCase
             *             comments: (name: string, value: string[] | null) => value && (value.length > 0)
             *         })
             *         .build()`
             *             color: ${props => props.available ? 'green' : 'gray'};
             *         `;
             *
             */
            class ComponentBuilder<P, T = any, O = P> {
                static readonly MODIFIER_DELIMITER: string;
                protected component: styled.ThemedStyledFunction<P, T, O>;
                /** Название главного класса. Отличается от дополнительных тем, что на основе него строятся названия классов для свойств. */
                protected mainClassName: string;
                /** Список дополнительных классов */
                protected additionalClassNames: string;
                /** Список аттрибутов, которые будут указаны в HTML-классах */
                protected propsForClasses: IComponentBuilderPropsForClasses;
                constructor(component: styled.ThemedStyledFunction<P, T, O> | styled.Component<P>);
                /**
                 * Устанавливает классы для компонента
                 * @param mainClassName Название главного класса {@link mainClassName}
                 * @param additionalClassNames Список дополнительных классов {@link additionalClassNames}
                 */
                setClasses(mainClassName: string, additionalClassNames?: string[] | string): ComponentBuilder<P, T, O>;
                /**
                 * Устанавливает список свойств, который будет использован для формирования модифицирующих css-классов
                 * Примеры использования:
                 *
                 *     .setPropsForClasses({
                 *         'selected': null,
                 *         'price': (name: string, value: number) => (value > 50) ? 'highPrice' : 'lowPrice',
                 *         'errors': (name: string, value: string[]) => value && (value.length > 0)
                 *     })
                 *
                 * @param propsForClasses
                 */
                setPropsForClasses(propsForClasses: IComponentBuilderPropsForClasses): this;
                protected buildClasses: (props: any) => string;
                protected attributeToClassName(attribute: string): string;
                /**
                 * Создаёт компонент (должен вызываться в самом конце).
                 */
                build(): styled.ThemedStyledFunction<P, T, O>;
            }
            /** Возвращаем boolean, если хотим работать с имеющимся в name названием атрибута, а если хотим собственное название - возвращаем его в виде строки в camelCase (предпочтительнее) или в hyphen-case */
            type AttributesForClassesHandler = (name: string, value: any) => boolean | string;
            interface IComponentBuilderPropsForClasses {
                [name: string]: void | AttributesForClassesHandler;
            }
        }
    }
}
declare namespace WebClient {
    namespace Styled {
        namespace Mixins {
            const hover: (strings: TemplateStringsArray, ...values: styled.SimpleInterpolation[]) => styled.InterpolationValue[];
            const focus: (strings: TemplateStringsArray, ...values: styled.SimpleInterpolation[]) => styled.InterpolationValue[];
            const active: (strings: TemplateStringsArray, ...values: styled.SimpleInterpolation[]) => styled.InterpolationValue[];
            const parentHover: (strings: TemplateStringsArray, ...values: styled.SimpleInterpolation[]) => styled.InterpolationValue[];
            const parentFocus: (strings: TemplateStringsArray, ...values: styled.SimpleInterpolation[]) => styled.InterpolationValue[];
            const parentActive: (strings: TemplateStringsArray, ...values: styled.SimpleInterpolation[]) => styled.InterpolationValue[];
        }
    }
}
declare namespace WebClient {
    const DirectorySearchInput: styled.StyledComponentClass<React.HTMLProps<HTMLInputElement>, any, React.HTMLProps<HTMLInputElement>>;
}
declare namespace WebClient {
    /** Свойства для {@link EmployeeName} */
    interface IEmployeeNameProps {
        /** Имя сотрудника, которое необходимо отобразить. */
        name: string;
    }
    /**
     * Компонент, который заменят пробелы перед инициалами на неразрывные пробелы, для избежания переноса инициалов отдельно от фамилии.
     * Инициалы распознаются как последовательность символов "Пробел", "Буква", "Точка".
     */
    class EmployeeName extends React.Component<IEmployeeNameProps, any> {
        private updateText(name);
        componentDidMount(): void;
        componentDidUpdate(): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    interface IFocusableMode {
        /** Фокусировать ли при создании компонента */
        onMount?: boolean;
        /** Фокусировать ли при перерисовке компонента */
        onUpdate?: boolean;
    }
    /** @internal */
    interface IFocusableProps {
        /** CSS-селектор элемента среди props.children, на котором нужно делать фокус. Если не задан, то ищется первый фокусируемый элемент */
        selectorToFocus?: string;
        /** CSS-селектор элемента, которому нужно вернуть фокус. Если не задан, то запоминается предыдущий фокус */
        selectorToReturnFocus?: string;
        /** Режим фокусирования */
        mode?: IFocusableMode;
        /** Не фокусировать */
        notFocusOnMount?: boolean;
        /** Выключен ли фокус */
        disabled?: boolean;
        /** Элементы, среди которых ищутся фокусируемые */
        children?: JSX.Element;
        onFocus?: () => void;
    }
    /**
      * @internal Помогает с автоматической фокусировкой на своём содержимом
      * Ищет среди своих потомков фокусируемый элемент и передаёт фокус ему, запоминая прошлый сфокусированный элемент.
      *
      * Фокусирование внутреннего элемента происходит при создании компонента (при условии, что компонент виден на странице) или при становлении его видимым (через css)
      * Возвращение фокуса происходит при уничтожении компонента или изменении его видимости на "невидимый" (пр. "display: none" в css)
      *
      * Пример использования:
      *
      *    <Focusable>
      *      <div tabindex={0}>Содержимое</div>
      *    </Focusable>
      *
      */
    class Focusable extends React.Component<IFocusableProps, undefined> {
        /** Узел Focusable */
        el: HTMLElement;
        /** Элемент, имевший фокус до Focusable */
        prevFocusable: HTMLElement;
        /** Был ли виден Focusable в пердыдущем рендеринге */
        prevIsVisible: boolean;
        /** Был ли проинициализирован Focusable */
        isInitialFocused: boolean;
        /** Режим Focusable по умолчанию */
        static readonly DEFAULT_MODE: IFocusableMode;
        componentDidMount(): void;
        componentWillUnmount(): void;
        componentDidUpdate(): void;
        componentWillReceiveProps(nextProps: IFocusableProps): void;
        /**
         * Виден ли Focusable на странице
         */
        readonly isVisible: boolean;
        /**
         * Режим Focusable
         */
        readonly mode: IFocusableMode;
        /**
         * Ищет внутри себя элемент для передачи фокуса
         */
        protected findFocusable(): HTMLElement;
        /**
         * Находит текущий элемент с фокусом (нужно для возврата фокуса)
         */
        protected findCurrentFocusableElement(): HTMLElement;
        /**
         * Передать фокус элементу внутри
         */
        protected focus(force?: boolean): void;
        /**
         * Вернуть фокус исходному элементу
         */
        protected returnFocus(skipVisibleCheck?: boolean): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IHighlightedSearchResultProps {
        /** Search result text */
        text: string;
        /** Search text, that should be higlighted */
        searchQuery: string;
        /** Search result title */
        title?: string;
        /** Custom class */
        className?: string;
        /** React key */
        key?: any;
        /** Should crop long text with ellipsis or not. Default value: true */
        useEllipsis?: boolean;
    }
    /** @internal Represents a text, where search match is highlighted
      * Usage example:
      *     <HighlightedSearchResult text={item.name} searchQuery={this.state.searchInput.value}  />
      */
    const HighlightedSearchResult: (props: IHighlightedSearchResultProps) => JSX.Element;
}
declare namespace WebClient {
    /** @internal */
    interface IHighlightedSimpleSearchResult {
        /** Search result text */
        text: string;
        /** Search text, that should be higlighted */
        searchQuery: string;
        /** Search result title */
        title?: string;
        /** Custom class */
        className?: string;
    }
    /** Represents a text, where search match is highlighted
      *
      * Usage example:
      *
      *     <HighlightedSimpleSearchResult text={item.name} searchQuery={this.state.searchInput.value}  />
      */
    const HighlightedSimpleSearchResult: (props: IHighlightedSimpleSearchResult) => JSX.Element;
}
declare namespace WebClient {
    /** @internal */
    interface IIconButtonProps {
        /** Tooltip for the button */
        title?: string;
        /** Class, that adds some icon background to the button */
        iconClassName?: string;
        /** Custom class. Should be used to add some icon for the button */
        className?: string;
        /** Class hide will be added, if value is false. Default value: true. */
        visible?: boolean;
        /** Button action */
        onClick: (event: React.MouseEvent) => void;
        /** KeyDown button action */
        onKeyDown?: (event: React.KeyboardEvent) => void;
        /** Focus button action */
        onFocus?: (event: React.FocusEvent) => void;
        /** Blur button action */
        onBlur?: (event: React.FocusEvent) => void;
        /** Button tabIndex property */
        tabIndex?: number;
        /** Button name for autotesting purposes */
        name?: string;
        /** Makes button disabled view and prevent raise of onClic. Default value: false */
        disabled?: boolean;
    }
    /** @internal Represents a button, that looks like small icon
      * Usage example:
      *  <IconButton name="open-dictionary" onClick={this.onOpenDictionaryClick}
      *      iconClassName="dv-ico dv-ico-dictionary" visible={ super.getEditAvailable()}
      *      title={resources.Numerator_GenerateNewNumberTooltip}  />
      */
    const IconButton: (props: IIconButtonProps) => JSX.Element;
}
declare namespace WebClient {
    enum ModalBackdropPriority {
        Normal = 0,
        High = 1,
        VeryHigh = 2,
    }
    /** Свойства для {@link ModalSidebarBackdrop} */
    interface IModalBackdropProps {
        /** Видимость.*/
        visible: boolean;
        /** Обработчик события click.
          */
        onClick?: (ev: React.MouseEvent) => void;
        /** Элементы, располагающиеся поверх затемнения.  */
        children?: JSX.Element;
        priority?: ModalBackdropPriority;
    }
    /** Представляет затемнение страницы, используемое для модальных окон и панелей.
      *
      * Пример использования:
      *
      *     <ModalBackdrop onClick={() => this.setState({ sidebarOpen: false })} >
      *         <ModalSidebar isOpen={this.state.sidebarOpen} >
      *             Sidebar content
      *         </ModalSidebar>
      *     </ModalBackdrop>
      */
    const ModalBackdrop: (props: IModalBackdropProps) => JSX.Element;
}
declare namespace WebClient {
    /**
     * Предоставляет контейнер для отрисовки модального окна. Позволяет отображать диалоговое окно вне react-компонент.
     *
     * Пример использования:
     *
     *     let host = new ModalHost("time-dialog", () => {
     *          return (
     *              <ModalBackdrop visible={true}>
     *                  <ModalDialog isOpen={true}>
     *                      <ModalDialogCloseButton onClick={() => host.unmount()} />
     *                      <ModalDialogHeader>Текущее время</ModalDialogHeader>
     *                      <div>Текущее время: {(new Date()).toTimeString()}</div>
     *                  </ModalDialog>
     *              </ModalBackdrop>
     *          );
     *      });
     *      host.mount();
     *      setInterval(() => host.forceUpdate(), 1000);
     *
     */
    class ModalHost {
        private mId;
        private mContainer;
        private mRenderFunction;
        private static mModalDialogHostContainerProvider;
        private static getModalDialogHostContaier();
        /**
         * Инициализирует объект ModalDialogHost
         * @param className Класс, который будет задан элементу-контейнеру в DOM
         * @param render Функция, выполняющая отрисовку модального окна
         */
        constructor(className: string, render: () => JSX.Element);
        /**
         * Иницирует перерисовку модального окна. При этом вызывается функция render, переданная в конструктор.
         */
        forceUpdate(): void;
        /**
         * Создает в DOM элемент-контейнер, и запускает отрисовку модального окна.
         */
        mount(): void;
        /**
         * Удаляет все созданные элементы из DOM.
         */
        unmount(): JQueryDeferred<any>;
        private render();
    }
}
declare namespace WebClient {
    /**
     * @internal Logic to send search request to server with delay while user input quick search text.
     */
    class QuickSearchLogic {
        private debouncer;
        private searchIndex;
        constructor(searchCallback: Function, searchIndex?: number, searchTimeout?: number);
        processInput(newText: string): void;
        clear(): void;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ISearchBarProps {
        /** Дополнительный класс */
        className?: string;
        /** Значение инпута */
        value?: string;
        /** Плейсхолдер */
        placeholder?: string;
        /** Минимальное количество символов для начала поиска */
        searchIndex?: number;
        /** Временная задержка перед вызовом props.onSearch, позволяет не вызывать props.onSearch после каждого быстрого изменения содержимого инпута */
        searchTimeout?: number;
        /** При изменении значения */
        onChange?: (value: string) => void;
        /** При изменении значения с учётом props.searchIndex и props.searchTimeout */
        onSearch?: (value: string) => void;
        /** При нажатии клавиши */
        onKeyDown?: (e: React.KeyboardEvent) => void;
    }
    /**
      * @review
      * @internal Хелпер для создания блока с поиском
      * Пример использования:
      *
      *    <Focusable>
      *      <SearchBar value="Значение"
      *        placeholder="Введите значение"
      *        searchIndex={3}
      *        searchTimeout={2000}
      *        onChange={value => console.log(value)}
      *        onSearch={value => console.log(value)} />
      *    </Focusable>
      *
      */
    class SearchBar extends React.Component<ISearchBarProps, undefined> {
        protected quickSearchLogic: QuickSearchLogic;
        constructor(props: ISearchBarProps);
        componentWillReceiveProps(nextProps: ISearchBarProps): void;
        /**
         * Сбрасывает и заново инициализирует логику для поиска
         */
        protected resetSearchLogic: () => void;
        protected onChange: (value: string) => void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ITextInputProps {
        /** Дополнительный класс */
        className?: string;
        /** Значение инпута */
        value?: string;
        /** Плейсхолдер */
        placeholder?: string;
        /** При изменении значения */
        onChange?: (value: string) => void;
        /** При нажатии клавиши */
        onKeyDown?: (e: React.KeyboardEvent) => void;
    }
    /**
      * @internal Инпут для ввода теста
      */
    class TextInput extends React.Component<ITextInputProps, undefined> {
        protected onChange: (e: any) => void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IUnreadCountIndicatorProps {
        count: number;
        className?: string;
    }
    /** Отображает количество непрочитанных карточек.
      */
    const UnreadCountIndicator: (props: IUnreadCountIndicatorProps) => JSX.Element;
}
declare namespace WebClient {
    namespace SvgIcons {
        interface IRightArrowIconProps {
            width?: string;
            height?: string;
            color?: string;
            tabIndex?: number;
            onClick?: (event: React.MouseEvent) => void;
            className?: string;
            title?: string;
            nativeTitle?: string;
        }
        const RightArrowIcon: (props: IRightArrowIconProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace SvgIcons {
        interface ISvgWrapperProps {
            svg: string;
            tabIndex?: number;
            onClick?: (event: React.MouseEvent) => void;
            className?: string;
            title?: string;
            nativeTitle?: string;
        }
        const SvgWrapper: (props: ISvgWrapperProps) => JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ISortableProps {
        /** дочерние элементы {@link SortableItem}, которые необходимо перемещать */
        items: ISortableItem<any>[];
        /** Вызывается при изменении порядка дочерних элементов */
        onReorder: (newOrder: string[], sortedItems: ISortableItem<any>[]) => void;
        /** Порядок следования элементов в виде упорядоченного массива их идентификаторов (идентификаторы элементов, отсортированные в нужном порядке) */
        order: string[];
        /** Ось сортировки {@link http://api.jqueryui.com/sortable/#option-axis} */
        axis?: 'x' | 'y';
        /** Указывает, какой блок выступает границами сортировки {@link http://api.jqueryui.com/sortable/#option-containment} */
        containment?: HTMLElement | JQuery | 'parent' | 'document' | 'window' | string;
        /** Стиль курсора во время изменения порядка элементов {@link http://api.jqueryui.com/sortable/#option-cursor} */
        cursor?: string;
        /** Стиль курсора во время изменения порядка элементов {@link http://api.jqueryui.com/sortable/#option-disabled} */
        disabled?: boolean;
        /** Должен ли хелпер иметь размер {@link http://api.jqueryui.com/sortable/#option-forceHelperSize} */
        forceHelperSize?: boolean;
        /** Должен ли плейсхолдер иметь размер {@link http://api.jqueryui.com/sortable/#option-forcePlaceholderSize} */
        forcePlaceholderSize?: boolean;
        /** Указывает селектор внутри дочернего элемента, за который можно будет его таскать (по умолчанию таскается весь дочерний элемент) {@link http://api.jqueryui.com/sortable/#option-handle} */
        handle?: string;
        /** Прозрачность перетаскиваемого элемента {@link http://api.jqueryui.com/sortable/#option-opacity} */
        opacity?: number;
        /** Если true, то страница скроллится, когда перетаскиваемый элемент на её краю {@link http://api.jqueryui.com/sortable/#option-scroll} */
        scroll?: boolean;
        /** Как далеко должна быть мышка от края (в пикселях), чтобы при перетаскивании страница скролилась бы (см. scroll) {@link http://api.jqueryui.com/sortable/#option-scrollSensitivity} */
        scrollSensitivity?: number;
        /** Скорость скролла окна при перетаскивании (см. scroll) {@link http://api.jqueryui.com/sortable/#option-scrollSpeed} */
        scrollSpeed?: number;
        /** Указывает режим, который регулирует, передвинулся ли перетаскиваемый элемент за другой элемент или нет {@link http://api.jqueryui.com/sortable/#option-tolerance} */
        tolerance?: 'intersect' | 'pointer';
        /** ZIndex перетаскиваемого элемента {@link http://api.jqueryui.com/sortable/#option-zIndex} */
        zIndex?: number;
    }
    /**
      * @review
      * @internal Помогает с сортировкой дочерних элементов, путём их перетаскивания
      * Пример использования:
      *
      *    interface IMyItem {
      *      id: string;
      *      value: string;
      *    }
      *
      *    ...
      *
      *    constructor() {
      *      this.state.myItems = [{id: '1', value: 'Первый элемент'}, {id: '2', value: 'Второй элемент'}];
      *      this.state.myOrder = undefined;
      *    }
      *
      *    render() {
      *      return <Sortable order={this.state.myOrder}
      *        onReorder={(newOrder: string[], sortedItems: ISortableItem<IMyValue>[]) => {
      *          this.state.myOrder = newOrder;
      *          this.forceUpdate();
      *        }} items={this.state.myItems.map(item => ({
      *          id: item.id,
      *          data: item,
      *          render: (data) => <div>{data.value}</div>
      *        }))} />
      *    }
      *
      */
    class Sortable extends React.Component<ISortableProps, undefined> {
        el: HTMLElement;
        wasCancelled: boolean;
        static readonly ITEM_ID: string;
        /** значения по умолчанию для jquery-ui */
        static readonly DEFAULT_AXIS: string;
        static readonly DEFAULT_CONTAINMENT: string;
        static readonly DEFAULT_CURSOR: string;
        static readonly DEFAULT_FORCE_HELPER_SIZE: boolean;
        static readonly DEFAULT_FORCE_PLACEHOLDER_SIZE: boolean;
        static readonly DEFAULT_HANDLE: boolean;
        static readonly DEFAULT_OPACITY: number;
        static readonly DEFAULT_SCROLL: boolean;
        static readonly DEFAULT_SCROLL_SENSITIVITY: number;
        static readonly DEFAULT_SCROLL_SPEED: number;
        static readonly DEFAULT_TOLERANCE: string;
        static readonly DEFAULT_ZINDEX: number;
        componentDidMount(): void;
        componentWillReceiveProps(nextProps: ISortableProps): void;
        componentWillUnmount(): void;
        componentWillUpdate(nextProps: ISortableProps): void;
        componentDidUpdate(): void;
        /**
         * Эквивалентны ли списки элементов SortableItem
         * @param items1 Первый список
         * @param items2 Второй список
         * @returns Равны или нет
         */
        protected isItemsEqual(items1: ISortableItem<any>[], items2: ISortableItem<any>[]): boolean;
        /**
         * Заставляет пересчитать размер this.props.containment
         */
        protected updateContainmentSize(): void;
        /**
         * Получить опции для плагина
         * @param props Свойства компонента
         */
        protected getSortablePluginOptions(props: ISortableProps): {
            axis: "x" | "y";
            containment: string | HTMLElement | JQuery;
            cursor: string;
            disabled: boolean;
            forceHelperSize: boolean;
            forcePlaceholderSize: boolean;
            handle: string | boolean;
            opacity: number;
            scroll: boolean;
            scrollSensitivity: number;
            scrollSpeed: number;
            tolerance: "intersect" | "pointer";
            zIndex: number;
        };
        /**
         * Сортирует элементы по порядку
         * @param items Элементы
         * @param order Идентификаторы элементов, отсортированные в нужном порядке
         */
        sortItems(items: ISortableItem<any>[], order?: string[]): ISortableItem<any>[];
        getChildren(): JSX.Element[];
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
      * @internal Интерфейс для элемента списка перетаскиваемых элементов для {@link Sortable}
      */
    interface ISortableItem<T> {
        /** Уникальный идентификатор среди соседних элементов */
        id: string | number;
        /** Данные элемента, который будет использоваться для рендеринга */
        data: T;
        /** Компонент, который нужно отрендерить */
        render: (data: T) => JSX.Element;
    }
}
declare namespace WebClient {
    interface SliderCheckBoxProps {
        onChange?: (newValue: boolean) => void;
        canEdit?: boolean;
        value?: boolean;
        /** Custom class for checkbox */
        className?: string;
        tip?: string;
        labelText?: string;
        tabStop?: boolean;
    }
    interface SliderCheckBoxState {
    }
    class SliderCheckBox extends React.Component<SliderCheckBoxProps, SliderCheckBoxState> {
        constructor(props: SliderCheckBoxProps);
        protected handleCheckBoxClick(event: any): void;
        protected getTabIndex(): 0 | -1;
        protected getCssClass(): string;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    interface IRibbonProps {
        className?: string;
        children?: JSX.Element;
    }
    const Ribbon: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement> & IRibbonProps & {
        className: string;
    }, any, React.HTMLProps<HTMLDivElement> & IRibbonProps>;
}
declare namespace WebClient {
    interface IRibbonButtonProps {
        className?: string;
        children?: JSX.Element;
        visible?: boolean;
        checked?: boolean;
        onClick?: () => void;
    }
    const RibbonButton: (props: IRibbonButtonProps) => JSX.Element;
}
declare namespace WebClient {
    interface IRibbonGroupProps {
        className?: string;
        children?: JSX.Element;
    }
    const RibbonGroup: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement> & IRibbonGroupProps & {
        className: string;
    }, any, React.HTMLProps<HTMLDivElement> & IRibbonGroupProps>;
}
declare namespace WebClient {
    /** See ReactList for help */
    const ReactListVirtualization: {
        simple: string;
        uniform: string;
        variable: string;
    };
    interface IReactListProps {
        axis?: string;
        initialIndex?: number;
        itemRenderer?: any;
        itemSizeEstimator?: any;
        itemSizeGetter?: any;
        itemsRenderer?: any;
        length: number;
        minSize: number;
        pageSize?: number;
        scrollParentGetter?: any;
        threshold?: number;
        type: string;
        useStaticSize?: boolean;
        useTranslate3d?: boolean;
    }
    class ReactList extends React.Component<IReactListProps, any> {
        static displayName: string;
        cache: any;
        prevPrevState: any;
        unstable: boolean;
        updateCounter: number;
        updateCounterTimeoutId: any;
        items: any;
        scrollParent: any;
        static defaultProps: Partial<IReactListProps>;
        constructor(props: any);
        componentWillReceiveProps(next: any): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        maybeSetState(b: any, cb: any): any;
        componentWillUnmount(): void;
        getOffset(el: any): any;
        getScrollParent(): any;
        getScroll(): number;
        setScroll(offset: any): void;
        getViewportSize(): any;
        getScrollSize(): any;
        hasDeterminateSize(): any;
        getStartAndEnd(threshold?: number): {
            start: number;
            end: any;
        };
        getItemSizeAndItemsPerRow(): {
            itemSize: any;
            itemsPerRow: any;
        } | {};
        updateFrame(cb: any): any;
        updateScrollParent(): void;
        updateSimpleFrame(cb: any): any;
        updateVariableFrame(cb: any): void;
        updateUniformFrame(cb: any): any;
        getSpaceBefore(index: any, cache?: {}): any;
        cacheSizes(): void;
        getSizeOf(index: any): any;
        constrain(from: any, size: any, itemsPerRow: any, {length, minSize, type}: {
            length: any;
            minSize: any;
            type: any;
        }): {
            from: any;
            size: any;
        };
        scrollTo(index: any): void;
        scrollAround(index: any): void;
        getVisibleRange(): any[];
        renderItems(): any;
        render(): any;
    }
}
declare namespace WebClient {
    interface IReactListDynamicProps {
        /** Ось, по которой скроллится ReactList */
        axis?: string;
        /** Начальный индекс элемента */
        initialIndex?: number;
        /** Длина списка */
        length: number;
        /** Минимальный количество элементов для отрисовки */
        minSize?: number;
        /** Количество пикселей для буффера снизу и сверху списка */
        threshold?: number;
        /** Использовать css-свойство translate3d для скролла (работает чуть быстрее, меньше поддержка браузерами) */
        useTranslate3d?: boolean;
        /** Инлайн-стили для контейнера */
        style?: any;
        /** Название класса для контейнера */
        className?: string;
        /** Название класса для пустого элемента списка */
        emptyItemClassName?: string;
        /** Название класса для загрузки элемента списка */
        loadingItemClassName?: string;
        /** Скрыт ли ReactListDynamic */
        hidden?: boolean;
        /** Пользовательский элемент для контейнера */
        customContainer?: any;
        /** Загружать ли данные при первой инициализации компонента */
        notLoadOnInit?: boolean;
        /** Загрузчик элементов, просящий загрузить и передать в props.items элементы с указанными индексами */
        loadItems: (indexes: number[]) => void;
        /** Задержка перед загрузкой данных после остановки прокрутки */
        fetchThreshold?: number;
        /** Загружать дополнительно n элементов выше и ниже элементов в видимой области */
        itemsThreshold?: number;
        /** Высота элемента (допустимы значения в px, em и т.д.). Не нужна, если вы сами реализуете renderEmptyItem и renderLoadingItem. */
        itemHeight?: number | string;
        /** Элементы списка */
        items: any[];
        /** Рендеринг отдельного элемента списка */
        renderItem: (key: number | string, itemData: any, index: number) => string | JSX.Element;
        /** Рендеринг пустого элемента списка */
        renderEmptyItem?: (index: number, key: number | string) => string | JSX.Element;
        /** Рендеринг загружаемого элемента списка (когда начали загружать пустой элемент списка) */
        renderLoadingItem?: (index: number, key: number | string, state: LoadingState) => string | JSX.Element;
    }
    interface IReactListDynamicState {
        /** Информация о загружаемых элементах списка */
        loading: {
            [index: number]: boolean;
        };
    }
    /**
     * @review
     * ReactList с возможностью динамической подгрузки результатов
     *
     * Если нужно задать высоту контейнера, то её необходимо задать через свойства
     * Если элемент списка не удалось загрузить динамически (к примеру, он отсутствует), то вместо него необходимо вернуть ReactListDynamic.UNDEFINED_ITEM
     *
     * Пример использования:
     *
     *    constructor(props) {
     *      super(props);
     *
     *      this.state = {
     *        items: []
     *      };
     *    }
     *
     *    itemsFetcher = (start: number, end: number) => {
     *      ...
     *    }
     *
     *    loadItems = (indexes: number[]) => {
     *      this.itemsFetcher(indexes).then(items => {
     *        indexes.forEach(index => this.state.items[index] = items[index]);
     *        this.forceUpdate();
     *      }, err => {
     *        indexes.forEach(index => this.state.items[index] = ReactListDynamic.EMPTY_ITEM);
     *        this.forceUpdate();
     *      });
     *    };
     *
     *    renderItem = (key: number, itemData: any) => {
     *      return <div key={key} style={{ height: 30 }}>{itemData.title}</div>;
     *    };
     *
     *    render() {
     *      return <ReactListDynamic style={{ height: 180, overflow: 'auto' }}
     *        itemsThreshold={3} length={50} itemHeight={30}
     *        items={this.state.items} loadItems={this.loadItems} renderItem={this.renderItem} />;
     *    }
     *
     */
    class ReactListDynamic extends React.Component<IReactListDynamicProps, IReactListDynamicState> {
        /** Задержка перед загрузкой элемента списка по умолчанию */
        static readonly FETCH_THRESHOLD: number;
        /** Элемент списка должен быть равен UNDEFINED_ITEM, если его по какой-то причине не удалось загрузить */
        static readonly UNDEFINED_ITEM: {};
        /** Контейнер по умолчанию */
        protected defaultContainer: any;
        /**
         * Экземпляр ReactList
         */
        protected reactList: ReactList;
        /**
         * Задержка перед загрузкой при прокрутке списка
         */
        protected thresholdTimeout: any;
        constructor(props: any);
        componentDidMount(): void;
        componentWillUnmount(): void;
        /**
         * Загружает список элементов
         */
        loadItems: () => void;
        /**
         * При скролле списка
         */
        protected onScroll: () => void;
        /**
         * Отрисовываем элемент списка
         */
        protected renderItem: (index: number, key: string | number) => string | JSX.Element;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    interface IReactListInfiniteScrollProps {
        axis?: string;
        initialIndex?: number;
        itemRenderer?: any;
        itemSizeEstimator?: any;
        itemSizeGetter?: any;
        minSize?: number;
        pageSize?: number;
        scrollParentGetter?: any;
        type: string;
        useStaticSize?: boolean;
        useTranslate3d?: boolean;
        /** Инлайн-стили для контейнера */
        style?: any;
        /** Название класса для контейнера */
        className?: string;
        /** Пользовательский элемент для контейнера (может быть обычный компонент или styledComponent) */
        customContainer?: any;
        /** Элементы списка */
        items: any[];
        /** Дополнительный отступ снизу списка, доскролля до которого произойдёт загрузка следующей страницы */
        gap?: number;
        /** fillPage работает так - если высота начальных данных меньше высоты окна с бесконечным списком, то грузим данные, пока она не заполнится */
        notFillPage?: boolean;
        /** Загружать ли данные при первой инициализации компонента */
        notLoadOnInit?: boolean;
        /** Номер стартовой страницы, начиная с которой начнётся первая загрузка элементов */
        initialPage?: number;
        /** Загружает новую страницу и возвращает информацию о том, существуют ли ещё результаты или нет */
        loadPage: (pageNumber: number) => JQueryDeferred<{}>;
        /** Есть ли еще незагруженные данные. */
        nextPageExists: boolean;
    }
    /**
     * @review
     * ReactList с возможностью бесконечного скролла
     *
     * Если нужно задать высоту контейнера, то её необходимо задать через свойства
     *
     * Пример использования:
     *
     *    constructor(props) {
     *      super(props);
     *
     *      this.state = {
     *        items: []
     *      };
     *    }
     *
     *    getPage = (pageNumber: number) => {
     *      ...
     *    }
     *
     *    loadPage = (pageNumber: number) => {
     *      this.getPage(pageNumber).then(itemsPart => {
     *        this.setState(prevState => ({ items: prevState.items.concat(itemsPart) }));
     *      });
     *    };
     *
     *    renderItem = (index: number, key: number) => {
     *      return <div key={key}>{this.state.items[index].title}</div>;
     *    };
     *
     *    render() {
     *      return <ReactListInfiniteScroll customContainer={CustomTreeDefault} items={this.state.items}
     *          loadPage={this.loadPage} type={ReactListVirtualization.variable} itemRenderer={this.renderItem} />
     *    }
     *
     */
    class ReactListInfiniteScroll extends React.Component<IReactListInfiniteScrollProps, undefined> {
        static readonly DEFAULT_GAP: number;
        static readonly DEFAULT_CONTAINER: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement>, any, React.HTMLProps<HTMLDivElement>>;
        /** Номер страницы */
        protected page: number;
        /** Текущий контейнер */
        protected container: any;
        /** Информация о загрузке */
        protected loading: LoadingState;
        constructor(props: any);
        componentDidMount(): void;
        componentWillReceiveProps(nextProps: IReactListInfiniteScrollProps): void;
        protected attachContainer: (elem: any) => void;
        /**
         * Загружает список элементов
         */
        loadNextPage: () => void;
        /**
         * Подгружает результаты, пока видимая часть страницы полностью не заполнится
         */
        protected fillPage: () => void;
        protected onScroll: (e: React.SyntheticEvent) => void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** Свойства для  {@link Popover} */
    interface IPopoverProps {
        /** При смене значения на true всплывающее окно откроется, при смене в false - скроется. */
        isOpen: boolean;
        /** Место на странице, куда будет добавлен элемент всплывающего окна. По умолчанию: document.body */
        container?: HTMLElement;
        /** Элемент, относительно которого всплывающее окно будет позиционироваться.
          *
          * Замечание: Popover не может корректно позиционироваться относительно элементов с display: inline.
          *
          * По умолчанию: ближайший не-inline родитель Popover.
          */
        target?: HTMLElement;
        /** Минимальная дистанция до границ экрана в пикселях. */
        screenPadding?: number;
        /** Место относительно целевого элемента, где будет размещено вспылвающее окно.
          *
          * Замечение: если места сверху будет недостаточно (будут мешать границы экрана), то всплывающее окно
          * автоматически сместится вниз.
          *
          * По умолчанию: PopoverMode.Above
          */
        mode?: PopoverMode;
        /** Статичное смещение всплывающего окна от вычисленного положения по оси X в пикселях. */
        xShift?: number;
        /** Событие click вне всплывающего окна. */
        onClickOutside?: (ev: MouseEvent) => void;
        /** Событие нажатия Enter (срабатывает, даже когда фокус вне модального окна). */
        onEnterPressed?: (ev: KeyboardEvent) => void;
        /** Событие нажатия Esc (срабатывает, даже когда фокус вне модального окна). */
        onEscPressed?: (ev: KeyboardEvent) => void;
        /** Содержимое модального окна. Используйте {@link PopoverBox} для создания белой панели со скругленными краями. */
        children?: JSX.Element[];
    }
    /** @internal */
    interface IPopoverState {
        currentTarget: HTMLElement;
        offScreenX: boolean;
        offScreenY: boolean;
        screenPadding: number;
        mode: PopoverMode;
        hideClassName: string;
        positionCalculated: boolean;
    }
    enum PopoverMode {
        Above = 0,
        LeftSide = 1,
    }
    /**
     * Компонент, который обеспечивает позиционирование всплывающего модального окна.
     *
     * Замечание: при показе всплывающего окна создается элемент в body документа (или в указанном контейнере) с абсолютной позицией,
     * который при помощи свойств top и left размещается над целевым элементом. При этом, обновление координат происходит
     * при перерисовке компонента, при ресайзе и скроле окна, а также при скроле элемента-контейнера. Можно запустить перессчет
     * позиции вручную при помощи метода {@link updatePositions}. Предпочитительнее использовать этот метод, вместо перерисовки
     * компонента, т.к. данный метод только обновляет позицию, в то время как перерисовка запускает обновление содержимого
     * всплывающего окна (это критично, если нужно обновлять позицию в события, возникающих часто).
     *
     * Из принципа работы компонента также следует, что анимации при показе окна могут некорректно работать при смене значения isOpen,
     * т.к. при показе окна элемент каждый раз создается заново. Если нужно при показе только сменить css-класс (для выполнения анимации),
     * то следует держать значение isOpen всегда true, и скрывать только содержимое всплывающего окна при помощи css. Сам компонент
     * не создает никаких видимых артефактов на экране, поэтому данный сценарий допустим.
     *
     * Также следует отметить, что физически всплывающее окна располагается в другом месте DOM, не там где отрендерен элемент Popover.
     * Поэтому, наследование css-стилей не будет работать для содержимого вслывающего окна. При необходимости, можно задать
     * {@link IPopoverProps.container}, чтобы указать место в DOM, где должен размещаться элемент. Однако, в этом случае могут возникнуть
     * проблемы с перекрыванием содержимого с другими элементами на странице.
     *
     * Пример использования:
     *
     *       <div>
     *           <Popover isOpen={this.state.popoverOpen} onClickOutside={this.closePopover} onEscPressed={this.closePopover}>
     *               <PopoverBox>
     *                   <PopoverHead>
     *                       <PopoverTitle>Заголовок</PopoverTitle>
     *                   </PopoverHead>
     *                   <PopoverContent>
     *                       Содержимое
     *                   </PopoverContent>
     *               </PopoverBox>
     *           </Popover>
     *           <span>Элемент, около которого появится окно</span>
     *       </div>
     *
     *  См. также: {@link PopoverBox}, {@link PopoverHead}, {@link PopoverTitle},
     *  {@link PopoverCloseButton}, {@link PopoverAcceptButton}, {@link PopoverCancelButton}, {@link PopoverContent}
     */
    class Popover extends React.Component<IPopoverProps, IPopoverState> {
        private static mPopoversContainer;
        private static getPopoversContainer();
        private root;
        /** @internal */
        constructor(props: IPopoverProps);
        /** @internal */
        componentWillUnmount(): void;
        /** @internal */
        componentWillReceiveProps(nextProps: IPopoverProps, nextContext: any): void;
        private attachStub(elem);
        private onShow();
        private onHide();
        /** Скрывает всплывающее окна и очищает все занимаемые ресурсы. */
        dispose(): JQueryDeferred<any>;
        private onDocumentClick(event);
        private onDocumentKeyDown(ev);
        private subscribeGlobalEvents(keydown, click, position);
        private unsubscribeGlobalEvents(keydown, click, position);
        private onPageScroll();
        private onWindowResize();
        /**
         * Перессчитать позицию всплывающего окна.
         */
        updatePositions(): void;
        private updateTopPosition(target);
        private updateLeftPosition;
        private getLeft(target);
        private getTop(target);
        private renderPopover();
        /** @internal */
        componentDidUpdate(): void;
        /** @internal */
        componentDidMount(): void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** Свойства для {@link PopoverAcceptButton} */
    interface IPopoverAcceptButtonProps {
        /** Обработчик события click */
        onClick: (ev: React.MouseEvent) => void;
    }
    /** Представляет кнопку в виде иконки "принять".
      *
      * Пример использования:
      *
      *      <Popover isOpen={this.state.popoverOpen} onClickOutside={this.cancel} onEscPressed={this.cancel}>
      *          <PopoverBox>
      *              <PopoverHead>
      *                  <HorizontalStack>
      *                      <StackSpringItem>
      *                          <PopoverTitle>Заголовок</PopoverTitle>
      *                      </StackSpringItem>
      *                      <StackStaticItem>
      *                          <PopoverAcceptButton onClick={this.accept} />
      *                      </StackStaticItem>
      *                      <StackStaticItem>
      *                          <PopoverCancelButton onClick={this.cancel} />
      *                      </StackStaticItem>
      *                  </HorizontalStack>
      *              </PopoverHead>
      *              <PopoverContent>
      *                  Содержимое
      *              </PopoverContent>
      *         </PopoverBox>
      *      </Popover>
      *
      * См. также {@link Popover}
      */
    const PopoverAcceptButton: (props: IPopoverAcceptButtonProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link PopoverBox} */
    interface IPopoverBoxProps {
        /** Содержимое PopoverBox  */
        children?: JSX.Element;
    }
    /** Представляет полотно {@link Popover}
      *
      * Пример использования:
      *
      *     <Popover isOpen={this.state.popoverOpen} >
      *         <PopoverBox>
      *             <div>Содержимое</div>
      *         </PopoverBox>
      *     </Popover>
      *
      * См. также {@link Popover}
      */
    const PopoverBox: (props: IPopoverBoxProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link PopoverCancelButton} */
    interface IPopoverCancelButtonProps {
        /** Обработчик события click */
        onClick: (ev: React.MouseEvent) => void;
    }
    /** Представляет кнопку в виде иконки "отменить".
      *
      * Пример использования:
      *
      *      <Popover isOpen={this.state.popoverOpen} onClickOutside={this.cancel} onEscPressed={this.cancel}>
      *          <PopoverBox>
      *              <PopoverHead>
      *                  <HorizontalStack>
      *                      <StackSpringItem>
      *                          <PopoverTitle>Заголовок</PopoverTitle>
      *                      </StackSpringItem>
      *                      <StackStaticItem>
      *                          <PopoverAcceptButton onClick={this.accept} />
      *                      </StackStaticItem>
      *                      <StackStaticItem>
      *                          <PopoverCancelButton onClick={this.cancel} />
      *                      </StackStaticItem>
      *                  </HorizontalStack>
      *              </PopoverHead>
      *              <PopoverContent>
      *                  Содержимое
      *              </PopoverContent>
      *         </PopoverBox>
      *      </Popover>
      *
      * См. также {@link Popover}
      */
    const PopoverCancelButton: (props: IPopoverCancelButtonProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link PopoverCloseButton} */
    interface IPopoverCloseButtonProps {
        /** Обработчик события click */
        onClick: (ev: React.MouseEvent) => void;
    }
    /** Представляет кнопку в виде иконки "закрыть".
      *
      * Пример использования:
      *
      *      <Popover isOpen={this.state.popoverOpen} onClickOutside={this.closePopover} onEscPressed={this.closePopover}>
      *          <PopoverBox>
      *              <PopoverHead>
      *                  <HorizontalStack>
      *                      <StackSpringItem>
      *                          <PopoverTitle>Заголовок</PopoverTitle>
      *                      </StackSpringItem>
      *                      <StackStaticItem>
      *                          <PopoverCloseButton onClick={this.closePopover} />
      *                      </StackStaticItem>
      *                  </HorizontalStack>
      *              </PopoverHead>
      *              <PopoverContent>
      *                  Содержимое
      *              </PopoverContent>
      *         </PopoverBox>
      *      </Popover>
      *
      * См. также {@link Popover}
      */
    const PopoverCloseButton: (props: IPopoverCloseButtonProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link PopoverContent} */
    interface IPopoverContentProps {
        /** Содержимое PopoverContent  */
        children?: JSX.Element;
        /** Дополнительный класс */
        className?: string;
    }
    /**
     * Добавляет отступы и некоторые другие стили, обеспечивающие аккуратное отображение содержимого в {@link PopoverBox}
     *
     * Пример использования:
     *
     *       <div>
     *           <Popover isOpen={this.state.popoverOpen} >
     *               <PopoverBox>
     *                   <PopoverContent>
     *                       Содержимое
     *                   </PopoverContent>
     *               </PopoverBox>
     *           </Popover>
     *           <span>Элемент, около которого появится окно</span>
     *       </div>
     *
     * См. также {@link Popover}
     */
    const PopoverContent: (props: IPopoverContentProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link PopoverHead} */
    interface IPopoverHeadProps {
        /** Содержимое PopoverHead  */
        children?: JSX.Element;
    }
    /**
     * Представляет блок с заголовком всплывающего окна в {@link PopoverBox}.
     *
     * Пример использования:
     *
     *       <div>
     *           <Popover isOpen={this.state.popoverOpen} >
     *               <PopoverBox>
     *                   <PopoverHead>
     *                       <PopoverTitle>Заголовок</PopoverTitle>
     *                   </PopoverHead>
     *                   <PopoverContent>
     *                       Содержимое
     *                   </PopoverContent>
     *               </PopoverBox>
     *           </Popover>
     *           <span>Элемент, около которого появится окно</span>
     *       </div>
     *
     * См. также {@link Popover}
     */
    const PopoverHead: (props: IPopoverHeadProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link PopoverOverflowContent} */
    interface IPopoverOverflowContentProps {
        /** Содержимое PopoverContent  */
        children?: JSX.Element;
    }
    /**
     * Аналогичен {@link PopoverContent}, но с обеспечением видимости абсолютно спозиционированных элементов,
     * выдающихся за край содержимого. Данное поведение, в свою очередь, исключает появление прокрутки для большого содержимого.
     *
     *
     * Пример использования:
     *
     *       <div>
     *           <Popover isOpen={this.state.popoverOpen} >
     *               <PopoverBox>
     *                   <PopoverOverflowContent>
     *                       <Employee parent={this.props.wrapper} modalMode={true} />
     *                   </PopoverOverflowContent>
     *               </PopoverBox>
     *           </Popover>
     *           <span>Элемент, около которого появится окно</span>
     *       </div>
     *
     * См. также {@link Popover}
     */
    const PopoverOverflowContent: (props: IPopoverOverflowContentProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link PopoverTitle} */
    interface IPopoverTitleProps {
        /** Содержимое PopoverTitle  */
        children?: JSX.Element;
    }
    /**
     * Добавляет отступы и некоторые другие стили для аккуратного отображения заголовка всплывающего окна в {@link PopoverHead}.
     *
     * Пример использования:
     *
     *       <div>
     *           <Popover isOpen={this.state.popoverOpen} >
     *               <PopoverBox>
     *                   <PopoverHead>
     *                       <PopoverTitle>Заголовок</PopoverTitle>
     *                   </PopoverHead>
     *                   <PopoverContent>
     *                       Содержимое
     *                   </PopoverContent>
     *               </PopoverBox>
     *           </Popover>
     *           <span>Элемент, около которого появится окно</span>
     *       </div>
     *
     * См. также {@link Popover}
     */
    const PopoverTitle: (props: IPopoverTitleProps) => JSX.Element;
}
declare namespace WebClient {
    /**
      * Использует {@link Popover} для отображения вслывающего окна контролов, в режиме edit-in-place.
      *
      * Для создания всплывающего окна следует исполдьзовать статический метод {@link EditPopover.CreatePopover}
      */
    class EditPopover extends React.Component<IEditPopoverProps, IEditPopoverState> {
        private contentRoot;
        private wrapper;
        constructor(props: IEditPopoverProps);
        /** Событие, возникающее перед показом окна */
        readonly showing: ICancelableEvent<IEventArgs>;
        /** Событие, возникающее после показа окна */
        readonly shown: IBasicEvent<IEventArgs>;
        /** Событие, возникающее перед нажатием кнопки OK */
        readonly accepting: ICancelableEvent<IEventArgs>;
        /** Событие, возникающее после нажатия кнопки ОК */
        readonly accepted: IBasicEvent<IEventArgs>;
        /** Событие, возникающее перед закрытием окна путем нажатия кнопки Отмена, клавиши Esc или щелчка вне вслывающего окна) */
        readonly canceling: ICancelableEvent<IEventArgs>;
        /** Событие, возникающее после нажатия кнопки Отмена, клавиши Esc или щелчка вне вслывающего окна. */
        readonly canceled: IBasicEvent<IEventArgs>;
        /** Событие, возникающее перед показом окна */
        readonly hidding: ICancelableEvent<IEventArgs>;
        /** Событие, возникающее после скрытия окна */
        readonly hidden: IBasicEvent<IEventArgs>;
        /** Создает экземпляр вслывающего окна.
          * После создания следует использовать {@link contentElement} свойство для задания содержимого, и методы {@link show} и {@link hide}
          * для управления всплывающим окном.
          */
        static CreatePopover(popoverOptions: IEditPopoverProps): JQueryDeferred<EditPopover>;
        /** HTMLElement, в который следует поместить содержимое всплывающего окна.
         *
         * Внимание! Значение свойства будет принициализировано только после вызова {@link IEditPopoverProps.onMounted}
         */
        readonly contentElement: HTMLElement;
        /**
         * Отображает всплыающее окно на экране.
         */
        show(): JQueryDeferred<any>;
        /**
         * Скрывает всплыающее окно.
         */
        hide(): void;
        /**
         * Отображается всплыающее окно на экране в данный момент или нет.
         */
        visible: boolean;
        /**
         * Настройка, определяющая, будет ли окно скрываться по клику во вне.
         */
        hideByClickOutside: boolean;
        /**
         * Настройка, определяющая, будет ли окно скрываться по нажатию Esc
         */
        hideByEsc: boolean;
        /**
         * Настройка, определяющая, будет ли иницироваться применение изменений по нажатию клавиши Enter.
         */
        acceptByEnter: boolean;
        /**
         * Корректно очищает содержимое {@link contentElement}
         */
        clearContent(): void;
        /**
         *  Скрывает окно и очищает все используемые ресурсы.
         */
        dispose(): void;
        private onKeyEnter(ev);
        private onKeyEsc(ev);
        private attachContentRoot(elem);
        private hideInternal();
        private accept();
        private cancel();
        private onOkClick();
        private onCancelClick();
        private onClickOutside(ev);
        private renderSaveCancelButtons();
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** Свойства для {@link EditPopover} */
    interface IEditPopoverProps {
        /** Элемент, возле которого будет отображено всплывающее окно */
        target: HTMLElement;
        /** Уникальный идентфикатор окна. */
        key?: string;
        /** Ширина содержимого всплывающего окна */
        width?: string;
        /** Максимальная высота содержимого всплывающего окна */
        maxHeight?: string;
        /** Максимальная ширина содержимого всплывающего окна */
        maxWidth?: string;
        /** Текст заголовка всплывающего окна */
        title?: string;
        /** Настройка, определяющая, будет ли иницироваться применение изменений по нажатию клавиши Enter. */
        acceptByEnter?: boolean;
        /** Настройка, определяющая, будет ли окно скрываться по нажатию Esc */
        hideByEsc?: boolean;
        /** Минимальное расстояние до границ экрана */
        screenPadding?: number;
        /** @internal */
        className?: string;
        /**
         * Настройка, определяющая, будет ли окно скрываться по клику во вне.
         */
        hideByClickOutside?: boolean;
        /**
         * Настройка, определяющая будет ли проигнорирован клик во вне, если этот клик был совершен в пределах другого модального окна.
         * Модальными окнами считаются элементы, созданные при помощи BodyContainerProvider.
         *
         * Значение по умолчанию: true
         */
        ignoreModalOutsideClicks?: boolean;
        /**
          * Место относительно целевого элемента, где будет размещено вспылвающее окно.
          */
        mode?: PopoverMode;
        /** Статичное смещение всплывающего окна от вычисленного положения по оси X в пикселях.  */
        xShift?: number;
        /** Если значение указано, то Popover не будет вычислять собственную ширину, но будет использовать заданную. */
        forceWidth?: number;
        /** Функция, которая будет вызвана после того, как {@link EditPopover.contentElement} примет корректное значение. */
        onMounted: (popover: EditPopover) => void;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IEditPopoverState {
        waitingState: LoadingState;
        currentTarget: HTMLElement;
        offScreenX: boolean;
        offScreenY: boolean;
        visible: boolean;
        hideByEscOption: boolean;
        acceptByEnterOption: boolean;
        title: string;
        screenPadding: number;
        mode: PopoverMode;
        /** Should popover close, when user click outside of the popover
          * Default value: false
          */
        hideByClickOutside?: boolean;
        ignoreModalOutsideClicks?: boolean;
        acceptingEvent: CancelableEvent<IEventArgs>;
        acceptedEvent: SimpleEvent<IEventArgs>;
        cancelingEvent: CancelableEvent<IEventArgs>;
        canceledEvent: SimpleEvent<IEventArgs>;
        showingEvent: CancelableEvent<IEventArgs>;
        shownEvent: SimpleEvent<IEventArgs>;
        hiddingEvent: CancelableEvent<IEventArgs>;
        hiddenEvent: SimpleEvent<IEventArgs>;
    }
}
declare namespace WebClient {
    /** Свойства для {@link ModalSidebar} */
    interface IModalSidebarProps {
        /** При смене значения на true модальное окно откроется, при смене в false - скроется. */
        isOpen: boolean;
        /** Содержимое панели */
        children?: JSX.Element;
        /** Если флаг установлен, то событие click внутри панели не поднимается к родителельскому элементу.
          * По умолчанию: true
          */
        stopClickPropogation?: boolean;
    }
    /** Представляет выезжающую боковую панель.
      *
      * Пример использования:
      *
      *     <div>
      *         <ModalBackdrop onClick={() => this.setState({ sidebarOpen: false })}>
      *             <ModalSidebar isOpen={this.state.sidebarOpen} >
      *                 <ModalSidebarCloseButton onClick={() => this.setState({ sidebarOpen: false })} />
      *                 <ModalSidebarHeader>Some header</ModalSidebarHeader>
      *                 <div>Some content</div>
      *             </ModalSidebar>
      *         </ModalBackdrop>
      *     </div>
      *
      * Пример использование вне компонента:
      *
      *     let host: ModalHost = new ModalHost("time-sidebar", () => {
      *       return (
      *            <ModalBackdrop visible={true} onClick={() => host.unmount()} >
      *                <ModalSidebar isOpen={true} >
      *                    <ModalSidebarCloseButton onClick={() => host.unmount()} />
      *                      <ModalSidebarHeader>Some header</ModalSidebarHeader>
      *                      <div>Current time {(new Date()).toTimeString()}</div>
      *                  </ModalSidebar>
      *           </ModalBackdrop>
      *       );
      *     });
      *     host.mount();
      *     setInterval(() => host.forceUpdate(), 1000);
      *
      */
    const ModalSidebar: (props: IModalSidebarProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link ModalSidebarCloseButton} */
    interface IModalSidebarCloseButtonProps {
        /** Доступность кнопки. Значение по умолчанию: true */
        enabled?: boolean;
        /** Обработчик события click */
        onClick: (ev: React.MouseEvent) => void;
    }
    /** Представляет закрывающую кнопку в правой части выезжающей панели ({@link ModalSidebar}).
      *
      * Пример использования:
      *
      *     <ModalSidebar isOpen={this.state.sidebarOpen} >
      *         <ModalSidebarCloseButton onClick={() => this.setState({ sidebarOpen: false })} />
      *     </ModalSidebar>
      */
    const ModalSidebarCloseButton: (props: IModalSidebarCloseButtonProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link ModalSidebarHeader} */
    interface IModalSidebarHeaderProps {
        /** Дополнительный класс */
        className?: string;
        /** Содержимое заголовка  */
        children?: JSX.Element;
    }
    /** Представляет заголовок выезжающей панели ({@link ModalSidebar}).
      *
      * Пример использования:
      *
      *     <ModalSidebar isOpen={this.state.menuBarExpanded} >
      *         <ModalSidebarHeader>{resources.MyHeaderText}</ModalSidebarHeader>
      *     </ModalSidebar>
      */
    const ModalSidebarHeader: (props: IModalSidebarHeaderProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link ModalDialog} */
    interface IModalDialogProps {
        /** При смене значения на true модальное окно откроется, при смене в false - скроется. */
        isOpen: boolean;
        /** Содержимое панели */
        children?: JSX.Element;
        /** Если флаг установлен, то событие click внутри окна не поднимается к родителельскому элементу.
          * По умолчанию: true
          */
        stopClickPropogation?: boolean;
    }
    /** Представляет всплывающее окно.
      *
      * Пример использования:
      *
      *         <ModalBackdrop onClick={() => this.setState({ dialogOpen: false })} />
      *             <ModalDialog expanded={this.state.dialogOpen} >
      *                 <ModalDialogBox defaultWidth={true}>
      *                     <ModalDialogCloseButton onClick={() => this.setState({ dialogOpen: false })} />
      *                     <ModalDialogHeader>Dialog header</ModalDialogHeader>
      *                     <ModalDialogContent>Some content</ModalDialogContent>
      *                     <ModalDialogButtonPanel>
      *                         <Button onClick={() => this.setState({ dialogOpen: false })} key="cancel">
      *                             {resources.Navigator_ButtonClose}
      *                         </Button>
      *                         <Button disabled={!this.state.directoryDialogSelectedValue}
      *                             onClick={this.onDirectoryDialogSelectButtonClick} key="ok">
      *                             {resources.Navigator_ButtonSelect}
      *                         </Button>
      *                     </ModalDialogButtonPanel>
      *                 </ModalDialogBox>
      *             </ModalDialog>
      *         </ModalBackdrop>
      */
    const ModalDialog: (props: IModalDialogProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link ModalDialogBox} */
    interface IModalDialogBoxProps {
        children?: JSX.Element;
        /** Если значение истино, то устаналивается ширина окна 800px.
          * Если ложно - ширина соответствует ширине содержимого.
          * По умолчанию: false
          */
        defaultWidth?: boolean;
    }
    /** Представляет полотно модального окна ({@link ModalDialog}).
      *
      * Пример использования:
      *
      *         <ModalBackdrop onClick={() => this.setState({ dialogOpen: false })} />
      *             <ModalDialog expanded={this.state.dialogOpen} >
      *                 <ModalDialogBox defaultWidth={true}>
      *                     <ModalDialogCloseButton onClick={() => this.setState({ dialogOpen: false })} />
      *                     <ModalDialogHeader>Dialog header</ModalDialogHeader>
      *                     <ModalDialogContent>Some content</ModalDialogContent>
      *                     <ModalDialogButtonPanel>
      *                         <Button onClick={() => this.setState({ dialogOpen: false })} key="cancel">
      *                            {resources.Navigator_ButtonClose}
      *                         </Button>
      *                         <Button disabled={!this.state.directoryDialogSelectedValue}
      *                            onClick={this.onDirectoryDialogSelectButtonClick} key="ok">
      *                             {resources.Navigator_ButtonSelect}
      *                         </Button>
      *                     </ModalDialogButtonPanel>
      *                 </ModalDialogBox>
      *             </ModalDialog>
      *         </ModalBackdrop>
      */
    const ModalDialogBox: (props: IModalDialogBoxProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link ModalDialogButtonPanel} */
    interface IModalDialogButtonPanelProps {
        /** Содержимое панели */
        children?: JSX.Element[];
    }
    /** Представляет панель кнопок модального диалога({@link ModalDialog}).
      *
      * Пример использования:
      *
      *     <ModalDialog isOpen={this.state.dialogOpen} >
      *         <ModalDialogBox defaultWidth={true}>
      *             <ModalDialogButtonPanel>
      *                 <Button onClick={this.hideDictionary} key="cancel">
      *                     {resources.Navigator_ButtonClose}
      *                 </Button>
      *                 <Button disabled={!this.state.directoryDialogSelectedValue}
      *                     onClick={this.onDirectoryDialogSelectButtonClick} key="ok">
      *                     {resources.Navigator_ButtonSelect}
      *                 </Button>
      *             </ModalDialogButtonPanel>
      *         </ModalDialogBox>
      *     </ModalDialog>
      */
    const ModalDialogButtonPanel: (props: IModalDialogButtonPanelProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link ModalSidebarCloseButton} */
    interface IModalDialogCloseButtonProps {
        /** Доступность кнопки. Значение по умолчанию: true */
        enabled?: boolean;
        /** Обработчик события click */
        onClick: (ev: React.MouseEvent) => void;
    }
    /** Представляет закрывающую кнопку в правой части выезжающей панели ({@link ModalDialog}).
      *
      * Пример использования:
      *
      *     <ModalDialog isOpen={this.state.dialogOpen} >
      *         <ModalDialogBox defaultWidth={true}>
      *             <ModalDialogCloseButton onClick={() => this.setState({ dialogOpen: false })} />
      *         </ModalDialogBox>
      *     </ModalDialog>
      */
    const ModalDialogCloseButton: (props: IModalSidebarCloseButtonProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link ModalDialogHeader} */
    interface IModalDialogContentProps {
        /** Содержимое заголовка  */
        children?: JSX.Element;
    }
    /** Добавляет отступы и некоторые другие стили, обеспечивающие аккуратное отображение содержимого в ({@link ModalDialogBox}).
      *
      * Пример использования:
      *
      *     <ModalDialog isOpen={this.state.dialogOpen} >
      *         <ModalDialogBox defaultWidth={true}>
      *             <ModalDialogHeader>Dialog header</ModalDialogHeader>
      *             <ModalDialogContent>Dialog content</ModalDialogContent>
      *         </ModalDialogBox>
      *     </ModalDialog>
      */
    const ModalDialogContent: (props: IModalDialogContentProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link ModalDialogHeader} */
    interface IModalDialogHeaderProps {
        /** Содержимое заголовка  */
        children?: JSX.Element;
    }
    /** Добавляет отступы и некоторые другие стили, обеспечивающие аккуратное отображение заголовка в ({@link ModalDialogBox}).
      *
      * Пример использования:
      *
      *     <ModalDialog isOpen={this.state.dialogOpen} >
      *         <ModalDialogBox defaultWidth={true}>
      *             <ModalDialogHeader>Dialog header</ModalDialogHeader>
      *             <ModalDialogContent>Dialog content</ModalDialogContent>
      *         </ModalDialogBox>
      *     </ModalDialog>
      */
    const ModalDialogHeader: (props: IModalDialogHeaderProps) => JSX.Element;
}
declare namespace WebClient {
    /** Свойства для {@link ModalDialogTopBorder} */
    interface IModalDialogTopBorderProps {
        color: string;
    }
    /** Добавляет цветную полосу в верхнюю часть модального окна ({@link ModalDialog}).
      *
      * Пример использования:
      *
      *     <ModalDialog isOpen={this.state.dialogOpen} >
      *         <ModalDialogBox defaultWidth={true}>
      *             <ModalDialogTopBorder color="red" />
      *         </ModalDialogBox>
      *     </ModalDialog>
      */
    const ModalDialogTopBorder: (props: IModalDialogTopBorderProps) => JSX.Element;
}
declare namespace WebClient {
    /**
     * Предоставляет статические методы для отображения простых модальных окон.
     */
    class MessageBox {
        private static mMessageBoxContainerProvider;
        private static getMessageBoxContainer();
        /**
         * Показывает модальное окно с сообщением об ошибке.
         *
         * @param content Текст сообщения обо ошибке
         * @param customCaptionText Заголовок диалога
         * @returns JQueryDeferred объект, который перейдет в состояние "resolved" после закрытия диалога.
         *
         * Пример использования:
         *
         *    MessageBox.ShowError("Неправильное имя файла!").done(() => {
         *        console.info("Диалог закрыт");
         *    });
         *
         */
        static ShowError(content: string | JSX.Element, customCaptionText?: string | JSX.Element): JQueryDeferred<any>;
        /**
         * Показывает модальное окно с информационным сообщением.
         *
         * @param content Текст сообщения
         * @param customCaptionText Заголовок диалога
         * @returns JQueryDeferred объект, который перейдет в состояние "resolved" после закрытия диалога.
         *
         * Пример использования:
         *
         *    MessageBox.ShowInfo("Операция успешно выполнена!").done(() => {
         *        console.info("Диалог закрыт");
         *    });
         *
         */
        static ShowInfo(content: string | JSX.Element, customCaptionText?: string | JSX.Element): JQueryDeferred<any>;
        /**
         * Показывает модальное окно с предупреждением.
         *
         * @param content Текст предупреждения
         * @param customCaptionText Заголовок диалога
         * @returns JQueryDeferred объект, который перейдет в состояние "resolved" после закрытия диалога.
         *
         * Пример использования:
         *
         *    MessageBox.ShowWarning("Не все файлы были загружены!").done(() => {
         *        console.info("Диалог закрыт");
         *    });
         *
         */
        static ShowWarning(content: string | JSX.Element, customCaptionText?: string | JSX.Element): JQueryDeferred<any>;
        /**
         * Показывает модальное окно с запросом подтвердить какое-либо действие.
         *
         * @param content Текст запроса
         * @param customCaptionText Заголовок диалога
         * @returns JQueryDeferred объект, который перейдет в состояние "resolved" при согласии, и "rejected" при отказе.
         *
         * Пример использования:
         *
         *    MessageBox.ShowConfirmation("Вы действительно хотите удалить файл?").done(() => {
         *        this.removeFile();
         *    }).fail(() => {
         *        // Пользователь отменил удаление
         *    });
         *
         */
        static ShowConfirmation(content: string | JSX.Element, customCaptionText?: string | JSX.Element): JQueryDeferred<any>;
        /**
         * Показывает модальное окно с информацией об исключении
         *
         * @param exception Исключение
         * @returns JQueryDeferred объект, который перейдет в состояние "resolved" при согласии, и "rejected" при отказе.
         *
         * Пример использования:
         *
         *    try {
         *        throw new Error("Произошла неизвестная ошибка");
         *    } catch (e) {
         *        MessageBox.ShowException(e).done(() => {
         *            console.info("Диалог закрыт");
         *        });
         *    }
         * @internal
         */
        private static Show(content, msgType, customCaptionText?);
        private static renderModalHeader(caption, color, iconClass);
    }
}
declare namespace WebClient {
    /** @internal */
    interface IAdaptiveMenuBarProps {
        expanded: boolean;
        children?: JSX.Element;
        onClose?: () => void;
    }
    /** @internal */
    interface IAdaptiveMenuBarState {
        parentEl: HTMLElement;
    }
    /** @internal Представляет собой адаптивное меню
      * Пример использования:
      *
      *    <AdaptiveMenuBar expanded={this.state.menuBarExpanded} >
      *      <AdaptiveMenuContent>
      *        <AdaptiveMenuItem onClick={() => console.info("Command 1 clicked") } >
      *          Комманда 1
      *        </AdaptiveMenuBarItem>
      *        <AdaptiveMenuBarItem onClick={() => console.info("Command 2 clicked")} >
      *          Комманда 2
      *        </AdaptiveMenuBarItem>
      *      </AdaptiveMenuContent>
      *    </AdaptiveMenuBar>
      *
      * См. также {@link AdaptiveMenuContent}, {@link AdaptiveMenuBarItem}
      */
    class AdaptiveMenuBar extends React.Component<IAdaptiveMenuBarProps, IAdaptiveMenuBarState> {
        popover: Popover;
        constructor(props: IAdaptiveMenuBarProps);
        onCloseMenu: () => void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IAdaptiveMenuItemProps {
        /** Tooltip of the menu item */
        title?: string;
        /** Text or JSX.Element that repersents menu item look */
        children?: any;
        /** Command action */
        onClick?(): void;
        /** Class "hide" will be added to command if visible = false */
        visible?: boolean;
        /** should add padding to child */
        padding?: boolean;
        /** Name for autotest purposes */
        name: string;
    }
    /**
     * @internal Представляет собой адаптивный элемент для меню {@link AdaptiveMenuBar}
     * См. также {@link AdaptiveMenuContent}
     */
    const AdaptiveMenuItem: (props: IAdaptiveMenuItemProps) => JSX.Element;
}
declare namespace WebClient {
    /** @internal */
    interface IDesktopMenuBarProps {
        expanded: boolean;
        children?: JSX.Element;
    }
    /**
      * @internal Represents desktop menu bar
      */
    const DesktopMenuBar: (props: IDesktopMenuBarProps) => JSX.Element;
}
declare namespace WebClient {
    /** @internal */
    interface IDesktopMenuItemProps extends IAdaptiveMenuItemProps {
    }
    /** @internal */
    interface IDesktopMenuItemState {
    }
    /**
      * @internal Represents desktop menu item
      */
    class DesktopMenuItem extends React.Component<IDesktopMenuItemProps, IDesktopMenuItemState> {
        protected onKeyDown: (event: __React.KeyboardEvent) => void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * @internal
     * @deprecated
     */
    interface IMenuBarItemProps {
        /** Tooltip of the menu item */
        title?: string;
        /** Text or JSX.Element that repersents menu item look */
        children?: any;
        /** Command action */
        onClick?(event: React.MouseEvent): void;
        /** Class "hide" will be added to command if visible = false */
        visible?: boolean;
        /** Custom class for menu item */
        className?: string;
        /** ReactJS key */
        key: string;
        /** Name for autotest purposes */
        name: string;
    }
    /**
     * @internal
     * @deprecated
     */
    interface IMenuBarProps {
        expanded: boolean;
        /** Children tags, created by MenuBarItem */
        children?: JSX.Element;
        className?: string;
    }
    /**
      * @internal
      * @deprecated
      */
    const MenuBar: (props: IMenuBarProps) => JSX.Element;
    /**
     * @internal
     * @deprecated
     */
    const MenuBarItem: (props: IMenuBarItemProps) => JSX.Element;
}
declare namespace WebClient {
    /** @internal */
    interface IMobileMenuBarProps {
        expanded: boolean;
        children?: JSX.Element;
    }
    /**
      * @internal Represents mobile menu bar
      */
    const MobileMenuBar: (props: IMobileMenuBarProps) => JSX.Element;
}
declare namespace WebClient {
    /** @internal */
    interface IMobileMenuItemProps extends IAdaptiveMenuItemProps {
    }
    /** @internal */
    interface IMobileMenuItemState {
    }
    /**
      * @internal Represents mobile menu item
      */
    class MobileMenuItem<P extends IMobileMenuItemProps, S extends IMobileMenuItemState> extends React.Component<P, S> {
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IAdaptiveMenuContentProps {
        children?: JSX.Element;
    }
    /**
      * @internal Представляет собой адаптивное содержимое для меню {@link AdaptiveMenuBar}
      * См. также {@link AdaptiveMenuItem}
      */
    const AdaptiveMenuContent: (props: IAdaptiveMenuContentProps) => JSX.Element;
}
declare namespace WebClient {
    /** @internal */
    interface IDesktopMenuContentProps extends IAdaptiveMenuContentProps {
    }
    /**
      * @internal Represents desktop menu content
      */
    const DesktopMenuContent: (props: IDesktopMenuContentProps) => JSX.Element;
}
declare namespace WebClient {
    /** @internal */
    interface IMobileMenuContentProps extends IAdaptiveMenuContentProps {
    }
    /**
      * @internal Represents mobile menu content
      */
    const MobileMenuContent: (props: IMobileMenuContentProps) => JSX.Element;
}
declare namespace WebClient {
    namespace MainMenuHelpers {
        /** @internal */
        interface IAnimatedItemHideProps {
            level: number;
            children?: any;
        }
        interface IAnimatedItemHideState {
            hide: boolean;
            animatedHide: boolean;
            timeout: number;
        }
        /** @internal */
        class AnimatedItemHide extends React.Component<IAnimatedItemHideProps, IAnimatedItemHideState> {
            constructor(props: IAnimatedItemHideProps);
            componentWillReceiveProps(newProps: IAnimatedItemHideProps): void;
            render(): JSX.Element;
        }
    }
}
declare namespace WebClient {
    namespace MainMenuHelpers {
        /** @internal */
        interface IBigItemBoxProps {
            children?: any;
        }
        /** @internal */
        const BigItemBox: (props: IBigItemBoxProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace MainMenuHelpers {
        /** @internal */
        interface IBigSpaceGapProps {
            children?: any;
        }
        /** @internal */
        const BigSpaceGap: (props: IBigSpaceGapProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace MainMenuHelpers {
        /** @internal */
        interface IItemProps {
            /** Button action */
            onClick: (event: React.MouseEvent) => void;
            children?: any;
        }
        /** @internal Represents a button, that looks like small icon
          * Usage example:
          *  <IconButton name="open-dictionary" onClick={this.onOpenDictionaryClick}
          *      iconClassName="dv-ico dv-ico-dictionary" visible={ super.getEditAvailable()}
          *      title={resources.Numerator_GenerateNewNumberTooltip}  />
          */
        const Item: (props: IItemProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace MainMenuHelpers {
        /** @internal */
        interface IItemContentProps {
            selected?: boolean;
            children?: any;
        }
        /** @internal */
        const ItemContent: (props: IItemContentProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace MainMenuHelpers {
        /** @internal */
        interface IItemHideToggleProps {
            toggled: boolean;
            children?: any;
            onChange?: (ev: React.FormEvent) => void;
        }
        /** @internal */
        const ItemHideToggle: (props: IItemHideToggleProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace MainMenuHelpers {
        /** @internal */
        interface IItemIconProps {
            iconClass: string;
            children?: any;
        }
        /** @internal */
        const ItemIcon: (props: IItemIconProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace MainMenuHelpers {
        /** @internal */
        interface IItemLevelIdentProps {
            level: number;
            children?: any;
        }
        /** @internal */
        const ItemLevelIdent: (props: IItemLevelIdentProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace MainMenuHelpers {
        /** @internal */
        interface IItemSeparatorProps {
        }
        /** @internal */
        const ItemSeparator: (props: IItemSeparatorProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace MainMenuHelpers {
        /** @internal */
        interface IItemTextProps {
            configuredToHide?: boolean;
            children?: any;
        }
        /** @internal */
        const ItemText: (props: IItemTextProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace MainMenuHelpers {
        /** @internal */
        interface INavigationLinkProps {
            /**
             * Значение атрибута href для html-элемента `<a>`.
             * Для указания страницы Web-клиента используйте путь, начинающийся с `#`. Например, `#/Dashboard`.
             */
            href: string;
            /** Значение атрибута hreflang для html-элемента `<a>` */
            hrefLang?: string;
            /** Значение атрибута target для html-элемента `<a>` */
            target?: string;
            /** Значение атрибута accesskey для html-элемента `<a>` */
            accessKey?: string;
            /** Значение атрибута download для html-элемента `<a>` */
            download?: boolean;
            /** Значение атрибута type для html-элемента `<a>` */
            type?: string;
            tabIndex?: number;
            children?: any;
            onClick?: (ev: MouseEvent) => void;
            disabled?: boolean;
            className?: string;
        }
        /** @internal */
        class NavigationLink extends React.Component<INavigationLinkProps, any> {
            constructor(props: any);
            private onNavigationLinkClick;
            attachRoot: (elem: HTMLElement) => void;
            render(): JSX.Element;
        }
    }
}
declare namespace WebClient {
    namespace MainMenuHelpers {
        enum OverlapPanelLocation {
            Above = 1,
            Below = 2,
        }
        enum OverlapPanelSize {
            Small = 1,
            Big = 2,
        }
        enum OverlapPanelSide {
            Left = 1,
            Right = 2,
        }
        /** @internal */
        interface IOverlapPanelProps {
            children?: any;
            location?: OverlapPanelLocation;
            size?: OverlapPanelSize;
            side?: OverlapPanelSide;
        }
        /** @internal */
        const OverlapPanel: (props: IOverlapPanelProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace MainMenuHelpers {
        /** @internal */
        interface ISmalltemBoxProps {
            children?: any;
        }
        /** @internal */
        const SmalltemBox: (props: ISmalltemBoxProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace MainMenuHelpers {
        /** @internal */
        interface ISpaceGapProps {
            children?: any;
        }
        /** @internal */
        const SpaceGap: (props: ISpaceGapProps) => JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ILoadingIconState {
    }
    /** @internal */
    interface ILoadingIconProps {
        state: LoadingState;
        className?: string;
        /** Css class, that adds loading icon as background
          * Default value: dv-ico icon-spin loader-animate
          */
        loadingIconClassName?: string;
        /** Css class, that adds error icon as background
          * Default value: dv-ico ico-approval-decision-cancellation
          */
        errorClassName?: string;
        /** Loading icon color */
        color?: LoadincIconColor;
    }
    /** @internal */
    enum LoadincIconColor {
        Blue = 0,
        White = 1,
        Black = 2,
    }
    /** @internal */
    class LoadingIcon extends React.Component<ILoadingIconProps, ILoadingIconState> {
        constructor(props: ILoadingIconProps);
        getLoadingIconClass(): string;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * @review Реализация {@link IAccessor} через обращение к свойству объекта по имени. Имя задается в конструкторе, при создании акссессора.
     */
    class FieldNameAccessor<NodeT, ValueT> implements IAccessor<NodeT, ValueT> {
        fieldName: string;
        /**
         * @param key Имя свойства. Может быть задано строкой (например, `myProperty`) или выржанием вида `() => obj.myProperty`.
         */
        constructor(key: FieldSpec<NodeT, ValueT>);
        get(node: NodeT): ValueT;
        set(node: NodeT, value: ValueT): void;
    }
}
declare namespace WebClient {
    /**
     * @review Реализация {@link IAccessor}, осуществляющая обращение к свойству через заданные функции.
     */
    class FuncAccessor<NodeT, ValueT> implements IAccessor<NodeT, ValueT> {
        private getter;
        private setter;
        /**
         * @param getter Функция, возвращающая значение свойства для указанного объекта.
         * @param setter Функция, устанавливающая значение свойства для указанного объекта.
         */
        constructor(getter: (node: NodeT) => ValueT, setter: (node: NodeT, value: ValueT) => void);
        get(node: NodeT): ValueT;
        set(node: NodeT, value: ValueT): void;
    }
}
declare namespace WebClient {
    /** @review Представляет инструмент, при помощи которого можно обращаться к некоторому свойству объекта.
      *
      * Акссессоры удобны для реализации универсальных вспомогательных классов, таких как {@link RecursiveVisitor}.
      * То есть, в тех случаях, когда необходимо обращаться к свойству объекта,
      * но имя этого свойства не известно и зависит от контекста использования.
      *
      * @param NodeT Тип объектов, к которым планируется обращаться.
      * @param ValueT Тип значения свойства, к которому планируется обращаться.
      *
      * См. конкретные реализации {@link FieldNameAccessor}, {@link FuncAccessor}, {@link MapMetaStore}.
      */
    interface IAccessor<NodeT, ValueT> extends IReadonlyAccessor<NodeT, ValueT> {
        /** Получить значение свойства для указанного объекта. */
        get(node: NodeT): ValueT;
        /** Установить значение свойства для указанного объекта. */
        set(node: NodeT, value: ValueT): void;
    }
}
declare namespace WebClient {
    /** @review Версия {@link IAccessor} с доступом только на чтение. */
    interface IReadonlyAccessor<NodeT, ValueT> {
        get(node: NodeT): ValueT;
    }
}
declare namespace WebClient {
    /**
    * @review Реализация {@link IAccessor}, которая хранит значение свойства во внурреннем объекте по строковому ключу.
    * Значение ключа получается через специальную функцию, передаваемую в конструкторе.
    */
    class MapMetaStore<NodeT, ValueT> implements IAccessor<NodeT, ValueT> {
        getId: (node: NodeT) => string;
        private store;
        /**
         * @param getId Функция, возвращающая уникальный ключ для указанного объекта.
         */
        constructor(getId: (node: NodeT) => string);
        get(node: NodeT): ValueT;
        set(node: NodeT, value: ValueT): void;
    }
}
declare namespace WebClient {
    /** @review Свойства для {@link DisclosureHead}  */
    interface IDisclosureProps {
        header: string;
        expanded: boolean;
        onClick(event: React.MouseEvent): void;
        visible?: boolean;
        collapsible?: boolean;
        children?: any;
        style?: React.CSSProperties;
        className?: string;
    }
    /** @review Представляет заголовок сворачиваемое области. См. также {@link DisclosureBody}. */
    const DisclosureHead: (props: IDisclosureProps) => JSX.Element;
}
declare namespace WebClient {
    /** @review Содержимое сворачиваемой области. См. также {@link DisclosureHead}. */
    class DisclosureBody extends React.Component<IDisclosureBodyProps, IDisclosureBodyState> {
        protected refItems: HTMLElement;
        constructor(props: IDisclosureBodyProps);
        componentWillReceiveProps(nextProps: IDisclosureBodyProps, nextContext: any): void;
        toggleCollapsed(duration?: number, easing?: string, animate?: boolean): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @review Свойства для {@link DisclosureBody}  */
    interface IDisclosureBodyProps {
        /** Раскрыта ли сворачиваемая область. Значение по умолчанию: true */
        expanded: boolean;
        /** Следует ли использовать анимацию при разворачивании и сворачивании (см. JQuery функции slideUp и slideDown)
          * Значение по умолчанию: true
          */
        animate?: boolean;
        /** См. JQuery slideUp и slideDown функции
         * Значение по умолчанию: 250
         */
        duration?: number;
        /** См. JQuery slideUp и slideDown функции
         * Значение по умолчанию: easeInOutCubic
         */
        easing?: string;
        /** @internal */
        children?: any;
        /** Дополнительные классы */
        className?: string;
        /** Дополнительные стили */
        style?: React.CSSProperties;
        /** Видимость. Значение по умолчанию: true */
        visible?: boolean;
        /** Событие, возникающее перед сворачиванием */
        onCollapsing?: () => JQueryDeferred<any>;
        /** Событие, возникающее после сворачивания */
        onCollapsed?: Function;
        /** Событие, возникающее перед разворачиванием */
        onExpanding?: () => JQueryDeferred<any>;
        /** Событие, возникающее после разворачивания */
        onExpanded?: Function;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IDisclosureBodyState {
        expanded: boolean;
        intialState: boolean;
    }
}
declare namespace WebClient {
    /** @review Свойства для {@link CustomTreeLevelIndent}  */
    interface ICustomTreeLevelIndentProps {
        /** Уровень вложенности, на котором находится узел (начинается с 0) */
        level?: number;
        /** Размер отступа для уровня вложенности (px, em, etc) */
        levelIndent?: string;
    }
    /**
     * Отступ у узла дерева. Пример использования см. в {@link CustomTreeDefault}
     */
    class CustomTreeLevelIndent extends React.Component<ICustomTreeLevelIndentProps, undefined> {
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @review Свойства для {@link CustomTreeNode}  */
    interface ICustomTreeNodeProps {
        /** Включен ли TabIndex у узла элемента */
        tabIndex?: boolean;
        /** Выключен ли узел */
        disabled?: boolean;
        /** Уровень вложенности, на котором находится узел (начинается с 0) */
        level?: number;
        /** Размер отступа для уровня вложенности (px, em, etc) */
        levelIndent?: string;
        /** При клике на узел */
        onClick?: () => void;
        /** Содержимое */
        children?: JSX.Element;
    }
    /**
     * Узел дерева
     * Пример использования см. в {@link CustomTreeDefault}
     */
    class CustomTreeNode extends React.Component<ICustomTreeNodeProps, undefined> {
        onClick: () => void;
        readonly tabIndex: number;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** См. {@link RecursiveVisitorCallback} */
    enum VisitResult {
        /** Продолжить рекурсивный обход дерева */
        Continue = 0,
        /** Остановить рекурсивный обход дерева */
        Stop = 1,
    }
    /** См. {@link RecursiveVisitor} */
    type RecursiveVisitorCallback<NodeT> = (node: NodeT, parent?: NodeT, level?: number) => VisitResult | void;
    /**
     * @review Вспомогательный класс для рекурсивного обхода древовидных структур с использованием {@link IReadonlyAccessor} для доступа к дочерним узлам.
     */
    class RecursiveVisitor<NodeT> {
        children: IReadonlyAccessor<NodeT, NodeT[]>;
        /**
         * @param children Способ, при помощи которого будет осуществляться доступ к дочерним узлам.
         */
        constructor(children: IReadonlyAccessor<NodeT, NodeT[]>);
        /**
         * @review Рекурсивно обходит дерево вглубь (то есть, сначала спускается вниз, потом вширь).
         * @param node Текущий узел дерева
         * @param visitor Логика, которую необходимо выполнить для каждого узла.
         * @param parent Родительский узел (будет передан в visitor, параметр не обязателен)
         * @param currentLevel Текущий уровень узла (0 - корень дерева). Если не значение не задано, то считается что node - корень дерева.
         */
        visitDeep(node: NodeT, visitor: RecursiveVisitorCallback<NodeT>, parent?: NodeT, currentLevel?: number): VisitResult | void;
        /**
         * @review Рекурсивно обходит дерево вширь (то есть, сначала просматриваются соседние узлы, потом их дети).
         * @param node Текущий узел дерева
         * @param visitor Логика, которую необходимо выполнить для каждого узла.
         * @param parent Родительский узел (будет передан в visitor, параметр не обязателен)
         * @param currentLevel Текущий уровень узла (0 - корень дерева). Если не значение не задано, то считается что node - корень дерева.
         */
        visitWide(node: NodeT, visitor: RecursiveVisitorCallback<NodeT>, parent?: NodeT, currentLevel?: number): VisitResult | void;
        /**
         * @internal См. {@link visitWide}
         */
        visitWideInternal(visitor: RecursiveVisitorCallback<NodeT>, node: NodeT, currentLevel?: number): VisitResult | void;
        /**
         * @review Преобразует дерево в плоский список
         * @param tree Дерево
         * @param onVisitNode Вызывается при посещении каждого узла дерева. Должно вернуть булево значение - добавлять ли узел в плоский список или нет
         */
        getFlatTree<T>(tree: NodeT[], onVisitNode?: (node: NodeT) => boolean): NodeT[];
    }
}
declare namespace WebClient {
    /**
     * @review
     * Вспомогательный компонент для отрисовки дерева.
     *
     * Пример использования (вместо CustomTreeDefault можно использовать div):
     *
     *    <CustomTreeDefault>
     *      <div className="display-flex align-items-stretch">
     *        <CustomTreeLevelIndent level={0} />
     *        <CustomTreeNodeTogglerDefault expanded visible onClick={() => console.log('Нажат переключатель')} />
     *        <CustomTreeNodeContentDefault tabIndex selected disabled onClick={() => console.log('Первый узел')}>
     *          <CustomTreeNodeIconDefault />
     *          <CustomTreeNodeTextDefault>Первый узел</CustomTreeNodeTextDefault>
     *        </CustomTreeNodeContentDefault>
     *      </div>
     *
     *      <div className="display-flex align-items-stretch">
     *        <CustomTreeLevelIndent level={0} />
     *        <CustomTreeNodeTogglerDefault expanded visible onClick={() => console.log('Нажат переключатель')} />
     *        <CustomTreeNodeContentDefault tabIndex selected disabled onClick={() => console.log('Второй узел')}>
     *          <CustomTreeNodeIconDefault />
     *          <CustomTreeNodeTextDefault innerRef={attachTooltip('Подсказка второго узла')}>Второй узел</CustomTreeNodeTextDefault>
     *        </CustomTreeNodeContentDefault>
     *      </div>
     *    </CustomTreeDefault>
     *
     */
    const CustomTreeDefault: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement> & {
        className: string;
    }, any, React.HTMLProps<HTMLDivElement>>;
}
declare namespace WebClient {
    interface ICustomTreeNodeContentDefaultProps {
        /** Выбран ли узел */
        selected?: boolean;
        className?: string;
        /** Оставлять ли стили кнопки у контейнера или сбрасывать */
        keepButtonStyles?: boolean;
    }
    const CustomTreeNodeContentCompact: styled.StyledComponentClass<React.HTMLProps<HTMLButtonElement> & ICustomTreeNodeContentDefaultProps & {
        className: string;
    }, any, React.HTMLProps<HTMLButtonElement> & ICustomTreeNodeContentDefaultProps>;
}
declare namespace WebClient {
    /** @review Свойства для {@link CustomTreeNodeContentDefault }  */
    interface ICustomTreeNodeContentDefaultProps {
        /** Выделен ли узел */
        selected?: boolean;
        className?: string;
        /** Оставлять ли стили кнопки у контейнера или сбрасывать */
        keepButtonStyles?: boolean;
    }
    /** @review Содержимое узла дерева. Пример использования см. {@link CustomTreeDefault} */
    const CustomTreeNodeContentDefault: styled.StyledComponentClass<React.HTMLProps<HTMLButtonElement> & ICustomTreeNodeContentDefaultProps & {
        className: string;
    }, any, React.HTMLProps<HTMLButtonElement> & ICustomTreeNodeContentDefaultProps>;
}
declare namespace WebClient {
    /** @review Свойства для {@link CustomTreeNodeIconDefault }  */
    interface ICustomTreeNodeIconDefaultProps {
    }
    /** Иконка узла дерева. Пример использования см. {@link CustomTreeDefault} */
    const CustomTreeNodeIconDefault: styled.StyledComponentClass<React.HTMLProps<HTMLSpanElement> & ICustomTreeNodeIconDefaultProps, any, React.HTMLProps<HTMLSpanElement> & ICustomTreeNodeIconDefaultProps>;
}
declare namespace WebClient {
    /** @review Свойства для {@link CustomTreeNodeLoadingIconDefault }  */
    interface ICustomTreeNodeLoadingIconDefaultProps {
        /** Дополнительный класс */
        className?: string;
    }
    /** Иконка загрузки узла дерева. Пример использования см. {@link CustomTreeDefault} */
    const CustomTreeNodeLoadingIconDefault: styled.StyledComponentClass<React.HTMLProps<HTMLSpanElement> & ICustomTreeNodeIconDefaultProps & {
        className: string;
    }, any, React.HTMLProps<HTMLSpanElement> & ICustomTreeNodeIconDefaultProps>;
}
declare namespace WebClient {
    /** @review Свойства для {@link CustomTreeNodeTextDefault }  */
    interface ICustomTreeNodeTextDefaultProps {
        /** Дополнительный класс */
        className?: string;
        /** Содержимое */
        children?: JSX.Element;
    }
    /** Текст узла дерева. Пример использования см. {@link CustomTreeDefault} */
    const CustomTreeNodeTextDefault: styled.StyledComponentClass<React.HTMLProps<HTMLSpanElement> & ICustomTreeNodeTextDefaultProps, any, React.HTMLProps<HTMLSpanElement> & ICustomTreeNodeTextDefaultProps>;
}
declare namespace WebClient {
    /** @review Свойства для {@link CustomTreeNodeTextDefault }  */
    interface ICustomTreeNodeTogglerProps {
        /** Виден ли переключатель или просто занимает место */
        visible?: boolean;
        /** Раскрыт ли переключатель */
        expanded?: boolean;
        /** Дополнительный класс */
        className?: string;
        /** Дополнительный класс при раскрытии */
        expandedClass?: string;
        /** Дополнительный класс при закрытии */
        collapsedClass?: string;
        /** При клике */
        onClick?: () => void;
    }
    /**
     * @internal См. {@link CustomTreeNodeTogglerDefault}
     */
    class CustomTreeNodeToggler extends React.Component<ICustomTreeNodeTogglerProps, undefined> {
        render(): JSX.Element;
    }
    /**
     * Переключатель узла дерева
     * Пример использования см. в {@link CustomTreeDefault}
     */
    const CustomTreeNodeTogglerDefault: styled.StyledComponentClass<ICustomTreeNodeTogglerProps, any, ICustomTreeNodeTogglerProps>;
}
declare namespace WebClient {
    /**
     * @review Компонент для рендеринга контролов разметок. Например, при получении данных контрола с сервера при загрузке разметки.
     *
     * Пример использования:
     *
     *     render() {
     *         var componentInfo = getComponentInfo();
     *
     *         return <ControlSelector properties={componentInfo.properties} children={componentInfo.children} controlTypeName={componentInfo.controlTypeName} key={componentInfo.properties.name} />
     *     }
     *
     */
    class ControlSelector extends React.Component<IControlSelectorProps, any> {
        constructor(props: any);
        componentWillMount(): void;
        componentWillReceiveProps?(nextProps: IControlSelectorProps, nextContext: any): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @review Свойства для {@link ControlSelector}  */
    interface IControlSelectorProps {
        properties: any;
        children: IControlSelectorProps[];
        controlTypeName: string;
    }
}
declare namespace WebClient {
    /** @review Свойства для {@link ControlSelector}  */
    interface IExtendedControlSelectorProps extends IControlSelectorProps {
        operations: IEditOperation[];
    }
}
declare namespace WebClient {
    /** @internal Представляет собой список элементов, которые могут схлопываться/раскрываться с использованием анимации.
      * Внутренние элементы должны использовать компонент CommandBarItem.
      * Пример использования:
      *
      *    <CommandBar expanded={this.state.commandBarExpanded} >
      *      <CommandBarItem onClick={() => console.info("Command 1 clicked") } >
      *        Комманда 1
      *      </CommandBarItem>
      *      <CommandBarItem onClick={() => console.info("Command 2 clicked")} >
      *        Комманда 2
      *      </CommandBarItem>
      *    </CommandBar>
      *
      * См. также: {@link CommandBarButton}
      */
    class CommandBar extends React.Component<ICommandBarProps, ICommandBarState> {
        constructor(props: ICommandBarProps);
        componentWillReceiveProps(nextProps: ICommandBarProps, nextContext: any): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ICommandBarItemProps {
        /** Tooltip of the command */
        title?: string;
        /** Text or JSX.Element that repersents command look */
        children?: any;
        /** Command action */
        onClick(event: React.MouseEvent): void;
        /** Class "hide" will be added to command if visible = false */
        visible?: boolean;
        /** ReactJS key */
        key: string;
        /** Value of attribute data-button-name for autotesting purposes */
        name?: string;
    }
    /** @internal См. {@link CommandBar} */
    const CommandBarItem: (props: ICommandBarItemProps) => JSX.Element;
}
declare namespace WebClient {
    /** @review Свойства для {@link CommandBar}  */
    interface ICommandBarProps {
        /** Initial value (after control loaded) should be undefined,
          * then it should change to "true", then to "false" and etc.
          * If your control do not follow this convention correct animations are not guarantee.
          */
        expanded: boolean;
        /** Children tags, created by CommandBarItem */
        children?: JSX.Element;
        /** Additional class */
        className?: string;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ICommandBarState {
        expandInProgress: boolean;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IComboBoxBodyProps {
        /** Дополнительный класс */
        className?: string;
        /** Выключен ли комбобокс */
        disabled?: boolean;
        /** Раскрыт ли выпадающий список элементов или нет */
        expanded: boolean;
        /** Используется при закрытии по клику мышкой снаружи, разрешает клики внутри переданного контейнера (по умолчанию - корень этого компонента) */
        boundaryTarget?: HTMLElement | string;
        /** При закрытии выпадающего списка */
        onClose?: () => void;
    }
    /**
     * @internal Тело комбобокса
     * Пример использования см. в {@link ComboBoxWrapper}
     */
    class ComboBoxBody extends React.Component<IComboBoxBodyProps, undefined> {
        el: HTMLElement;
        componentDidMount(): void;
        componentWillUnmount(): void;
        /**
         * Закрытие выпадающего меню при клике снаружи
         */
        protected onDocumentClick: (event: MouseEvent) => void;
        protected onDocumentKeyDown: (e: any) => void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IComboBoxElementProps {
        /** Дополнительный класс */
        className?: string;
        /** Включен ли TabIndex у элемента */
        tabIndex?: boolean;
        /** Выключен ли элемент */
        disabled?: boolean;
        /** Выбран ли элемент */
        selected?: boolean;
        /** Имеет ли элемент фокус в данный момент */
        focused?: boolean;
        /** При выборе элемента */
        onSelect?: () => void;
        /** При фокусе элемента */
        onFocus?: (event: React.FocusEvent) => void;
        /** При снятии фокуса элемента */
        onBlur?: (event: React.FocusEvent) => void;
        /** При передачи фокуса следующему элементу */
        onFocusNext?: () => void;
        /** При передачи фокуса предыдущему элементу */
        onFocusPrev?: () => void;
    }
    /**
     * @internal Элемент выпадающего списка комбобокса
     * Пример использования см. в {@link ComboBoxWrapper}
     */
    class ComboBoxElement extends React.Component<IComboBoxElementProps, undefined> {
        /**
         * Узел элемента
         */
        el: HTMLElement;
        componentDidMount(): void;
        componentWillReceiveProps(nextProps: IComboBoxElementProps): void;
        /**
         * При выборе элемента
         */
        protected onSelect: () => void;
        protected onKeyDown: (e: __React.KeyboardEvent) => void;
        readonly tabIndex: number;
        /**
         * Фокусирует элемент
         */
        focus: () => void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    interface IResetedElement {
        wasReset: boolean;
        element: IComboBoxElement;
    }
    /**
     * @internal Хелпер со вспомогательными функциями для пользователских реализаций комбобокса
     */
    class ComboBoxHelper {
        /**
         * Сбрасывает элемент, если он не существует в списке элементов
         * @param element Текущий элемент
         * @param elements Список элементов
         * @param allowEmpty Разрешить ли выбирать пустой элемент
         * @param emptyElement Пустой элемент для значения null
         */
        static resetElementIfNotExists(element: IComboBoxElement, elements: IComboBoxElement[], allowEmpty?: boolean, emptyElement?: IComboBoxElement): IResetedElement;
        /**
         * Возвращает элемент по умолчанию для сброса значения
         * @param elements Список элементов
         * @param allowEmpty Разрешить ли выбирать пустой элемент
         * @param emptyElement Пустой элемент для значения null
         */
        static resetElement(elements: IComboBoxElement[], allowEmpty?: boolean, emptyElement?: IComboBoxElement): IComboBoxElement;
        /**
         * Создаёт пустой элемент для значения null
         * @param defaultTitle Заголовок по умолчанию
         */
        static createEmptyElement: (defaultTitle?: string) => IComboBoxElement;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IComboBoxTitleProps {
        /** Дополнительный класс */
        className?: string;
        /** Выключен ли комбобокс */
        disabled?: boolean;
        /** Включен ли TabIndex у заголовка */
        tabIndex?: boolean;
        /** Раскрыт ли выпадающий список элементов или нет */
        expanded?: boolean;
        /** При клике на заголовок */
        onClick?: () => void;
        /** При фокусе заголовка */
        onFocus?: (event: React.FocusEvent) => void;
        /** При снятии фокуса у заголовка */
        onBlur?: (event: React.FocusEvent) => void;
    }
    /**
     * @internal Заголовок комбобокса
     * Пример использования см. в {@link ComboBoxWrapper}
     */
    class ComboBoxTitle extends React.Component<IComboBoxTitleProps, undefined> {
        el: HTMLAnchorElement;
        /**
         * При клике на заголовок
         */
        onClick: () => void;
        onKeyDown: (e: __React.KeyboardEvent) => void;
        readonly tabIndex: number;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IComboBoxWrapperProps {
        /** Дополнительный класс */
        className?: string;
        /** Выключен ли комбобокс */
        disabled?: boolean;
    }
    /**
     * @review
     * Обёртка для комбобокса (для комбобоксов существует готовая реализация для общих случаев - {@link CommonComboBox})
     *
     * Пример использования:
     *
     *    constructor() {
     *      this.defaultTitle = 'Выберите элемент';
     *      this.el = null;
     *      this.emptyElement = {id: null, title: this.defaultTitle};
     *      this.focusedElement = null;
     *
     *      this.state.disabled = false;
     *      this.state.expanded = false;
     *      this.state.selectedElement = '2222';
     *      this.state.emptyAllowed = true;
     *      this.state.elements = [{id: '1111', title: 'Один'}, {id: '2222', title: 'Два'}];
     *    }
     *
     *
     *    protected onFocusElement = (element) => this.focusedElement = element;
     *
     *    protected onBlurElement = (element) => (this.focusedElement && this.focusedElement.id == element.id) && (this.focusedElement = null);
     *
     *    // навигация по стрелочкам
     *    protected onFocusSiblingElement = (element, mode: 'prev' | 'next') => {
     *      let elementPosition = this.state.elements.findIndex(el => el.id == element.id);
     *      if (elementPosition == -1 && !(this.state.emptyAllowed && element.id == null)) {
     *        return;
     *      }
     *
     *      elementPosition += (mode == 'prev') ? -1 : 1;
     *
     *      const siblingElement = (this.state.emptyAllowed && elementPosition == -1) ?
     *        this.emptyElement :
     *        this.state.elements[elementPosition];
     *
     *      if (siblingElement && (!this.focusedElement || this.focusedElement.id != siblingElement.id)) {
     *        this.focusedElement = siblingElement;
     *        this.forceUpdate();
     *      }
     *    }
     *
     *    render() {
     *      const title = <ComboBoxTitle disabled={this.state.disabled}
     *        expanded={this.state.expanded}
     *        tabIndex
     *        onClick={() => this.setState(prevState => ({ expanded: !prevState.expanded }))}>
     *        <ComboBoxTitleContent>
     *          {this.state.elements[this.state.selectedElement] ? this.state.elements[this.state.selectedElement].title : this.defaultTitle}
     *        </ComboBoxTitleContent>
     *      </ComboBoxTitle>;
     *
     *      const body = <ComboBoxBody disabled={this.state.disabled}
     *        expanded={this.state.expanded}
     *        onClose={() => this.setState({ expanded: false })}
     *        boundaryTarget={this.el}>
     *        <Focusable selectorToFocus='.combobox-element-helper-selected'>
     *          <ComboBoxBodyContent>
     *            {this.state.emptyAllowed && <ComboBoxElement tabIndex
     *              selected={this.state.selectedElement == null}
     *              focused={this.focusedElement && this.focusedElement.id == null}
     *              onSelect={() => this.setState({ selectedElement: null, expanded: false })}
     *              onFocus={() => this.onFocusElement(this.emptyElement)}
     *              onBlur={() => this.onBlurElement(this.emptyElement)}
     *              onFocusNext={() => this.onFocusSiblingElement(this.emptyElement, 'next')}
     *              onFocusPrev={() => this.onFocusSiblingElement(this.emptyElement, 'prev')}>
     *              <ComboBoxElementContent>{this.defaultTitle}</ComboBoxElementContent>
     *            </ComboBoxElement>}
     *
     *            {this.state.elements.map((element) => {
     *              return <ComboBoxElement key={element.id}
     *                tabIndex
     *                selected={element.id == this.state.selectedElement}
     *                focused={this.focusedElement && this.focusedElement.id == element.id}
     *                onSelect={() => this.setState({ selectedElement: element.id, expanded: false })}
     *                onFocus={() => this.onFocusElement(element)}
     *                onBlur={() => this.onBlurElement(element)}
     *                onFocusNext={() => this.onFocusSiblingElement(element, 'next')}
     *                onFocusPrev={() => this.onFocusSiblingElement(element, 'prev')}>
     *                <ComboBoxElementContent>{element.title}</ComboBoxElementContent>
     *              </ComboBoxElement>;
     *            })}
     *          </ComboBoxBodyContent>
     *        </Focusable>
     *      </ComboBoxBody>;
     *
     *      return <div ref={el => this.el = el}>
     *        <ComboBoxWrapper disabled={this.state.disabled}>
     *          <ComboBoxWrapperContent title={title} body={body}>
     *        </ComboBoxWrapper>
     *      </div>
     *    }
     *
     */
    class ComboBoxWrapper extends React.Component<IComboBoxWrapperProps, undefined> {
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @review Свойства для {@link CommonComboBox}  */
    interface ICommonComboBoxProps {
        /** Список элементов (вариантов выбора в выпадающем списке) */
        elements: IComboBoxElement[];
        /** ИД выбранного элемента */
        selectedID?: string;
        /** Заголовок по умолчанию */
        defaultTitle?: string;
        /** Разрешить ли выбирать пустой элемент */
        allowEmpty?: boolean;
        strictMode?: boolean;
        /** Выключен ли комбобокс */
        disabled?: boolean;
        /** Раскрыто ли выпадающее меню по умолчанию */
        expanded?: boolean;
        /** Включен ли TabIndex у комбобокса */
        tabIndex?: boolean;
        /** Дополнительный класс */
        className?: string;
        /** При выборе нового элемента */
        onChange?: (element: IComboBoxElement) => void;
        /** Пользователская функция, позволяющая отрендерить обёртку */
        renderWrapper?: (title: JSX.Element, body: JSX.Element) => JSX.Element;
        /** Пользователская функция, позволяющая отрендерить заголовок */
        renderTitle?: (element: IComboBoxElement) => JSX.Element | string;
        /** Пользователская функция, позволяющая отрендерить список элементов */
        renderElementList?: (elements: JSX.Element[]) => JSX.Element | JSX.Element[] | string;
        /** Пользователская функция, позволяющая отрендерить элемент списка */
        renderElement?: (element: IComboBoxElement, selected: boolean) => JSX.Element | string;
    }
    /** @internal */
    interface ICommonComboBoxState {
        /** Раскрыт ли выпадающий список элементов или нет */
        expanded: boolean;
    }
    /**
     * @review Хелпер для создания комбобокса (позволяет выбирать значение из выпадающего списка)
     *
     * Пример использования:
     *
     *    constructor() {
     *      this.state.elements = [
     *        { id: '1', title: 'Первый элемент' },
     *        { id: '2', title: 'Второй элемент' },
     *        { id: '3', title: 'Третий элемент', disabled: true },
     *        { id: '4', title: 'Четвёртый элемент' }
     *      ];
     *      this.state.selectedID = '2';
     *    }
     *
     *    render() {
     *      <CommonComboBox elements={this.state.elements}
     *        allowEmpty={true}
     *        tabIndex
     *        selectedID={this.state.selectedID}
     *        defaultTitle="Выберите элемент из списка"
     *        onChange={(selectedElement: IComboBoxElement) => {
     *          this.setState({ selectedID: selectedElement.id });
     *        }} />
     *    }
     *
     */
    class CommonComboBox extends React.Component<ICommonComboBoxProps, ICommonComboBoxState> {
        /**
         * Корневой узел combobox
         */
        el: HTMLElement;
        /**
         * Текущий сфокусированный элемент списка
         */
        focusedElement: IComboBoxElement;
        constructor(props: ICommonComboBoxProps);
        componentWillMount(): void;
        componentWillReceiveProps(nextProps: ICommonComboBoxProps): void;
        /**
         * При выборе элемента в выпадающем списке
         * @param selectedID ИД выбранного элемента
         */
        protected onElementSelected: (selectedID: string) => void;
        /**
         * Ищет элемент списка по его ИД
         * @param id ИД элемента
         * @param disableFallbackToEmptyElement Не создавать пустой элемент, если элемент не найден по ИД
         * @param props Пользовательские props
         */
        protected getElementByID: (id: string, disableFallbackToEmptyElement?: boolean, props?: ICommonComboBoxProps) => IComboBoxElement;
        /**
         * При фокусе элемента списка
         * @param element Текущий элемент
         */
        protected onFocusElement: (element: IComboBoxElement) => IComboBoxElement;
        /**
         * При снятии фокуса у элемента списка
         * @param element Текущий элемент
         */
        protected onBlurElement: (element: IComboBoxElement) => any;
        /**
         * При фокусе соседнего элемента в списке (навигация по стрелочкам)
         * @param element Текущий элемент
         * @param mode Какой из соседних элементов должен получить фокус (предыдущий или следующий)
         */
        protected onFocusSiblingElement: (element: IComboBoxElement, mode: "next" | "prev") => void;
        /**
         * Создаёт список элементов
         */
        protected createElementList(): JSX.Element[];
        /**
         * Рендерит заголовок комбобокса
         */
        protected renderTitle(): JSX.Element;
        /**
         * Рендерит тело комбобокса
         */
        protected renderBody(): JSX.Element;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IComboBoxBodyContentProps {
        /** Дополнительный класс */
        className?: string;
        /** Содержимое */
        children?: JSX.Element;
    }
    /** @internal */
    class ComboBoxBodyContent extends React.Component<IComboBoxBodyContentProps, undefined> {
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IComboBoxElementContentProps {
        /** Дополнительный класс */
        className?: string;
        /** Содержимое */
        children?: JSX.Element;
    }
    /** @internal */
    class ComboBoxElementContent extends React.Component<IComboBoxElementContentProps, undefined> {
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IComboBoxTitleContentProps {
        /** Дополнительный класс */
        className?: string;
        /** Содержимое */
        children?: JSX.Element;
    }
    /** @internal */
    class ComboBoxTitleContent extends React.Component<IComboBoxTitleContentProps, undefined> {
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IComboBoxWrapperContentProps {
        /** Дополнительный класс */
        className?: string;
        /** Заголовок комбобокса */
        title?: JSX.Element;
        /** Тело комбобокса */
        body?: JSX.Element;
    }
    /** @internal */
    class ComboBoxWrapperContent extends React.Component<IComboBoxWrapperContentProps, undefined> {
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    interface IComboBoxElement {
        /** Уникальный идентификатор среди соседних элементов */
        id: string;
        /** Отображаемый заголовок элемента */
        title: string;
        /** Запретить ввзаимодействие с элементом в списке */
        disabled?: boolean;
        /** Объект с любыми пользовательскими данными (по умолчанию - undefined) */
        data?: any;
    }
}
declare namespace WebClient {
    namespace Breadcrumbs {
        /** @review Свойства для {@link ButtonItem}  */
        interface IBreadcrumbsItemProps {
            /** Дополнительный класс */
            className?: string;
            style?: React.CSSProperties;
            /** TabIndex элемента */
            tabIndex?: number;
            /** Содержимое */
            children?: JSX.Element;
            /** При выборе элемента */
            onClick?: () => void;
            disabled?: boolean;
            /** Called on button focus */
            onFocus?: (ev?) => void;
            /** Called on button blur */
            onBlur?: (ev?) => void;
        }
        /**
          * @review Элемент хлебных крошек с произвольным обработчиком клика.
          *
          * Пример использования:
          *
          *     let Item = Breadrcumbs.ButtonItem;
          *     let ItemView = Breadrcumbs.LinkItemView;
          *     let Separator = Breadcrumbs.LinkSeparator;
          *
          *      <div className="padding-v-7">
          *           <Item onClick={() => console.log('Выбран Север')}>
          *               <ItemView>Север</ItemView>
          *           </Item>
          *           <Separator />
          *           <Item onClick={() => console.log('Выбрана Северная верфь')}>
          *               <ItemView>Северная верфь</ItemView>
          *           </Item>
          *      </div>
          *
          * Пример использования в случае, когда элементы заданы в виде массива:
          *
          *     let Item = Breadrcumbs.ButtonItem;
          *     let ItemView = Breadrcumbs.LinkItemView;
          *     let Separator = Breadcrumbs.LinkSeparator;
          *
          *     <div className="padding-v-7">
          *         {["Север", "Северная гавань"].map((item, index) =>
          *             <Item onClick={() => console.log('Выбран ' + item)} key={index}>
          *                 {index > 0 && < Separator />}
          *                 <ItemView>{item}</ItemView>
          *             </Item>
          *         )}
          *     </div>
          *
          */
        const ButtonItem: (props: IBreadcrumbsItemProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace Breadcrumbs {
        /** @review Аналог {@link LinkItemView}, но без стилизации в виде ссылки. */
        const SimpleItemView: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement> & {
            className: string;
        }, any, React.HTMLProps<HTMLDivElement>>;
    }
}
declare namespace WebClient {
    namespace Breadcrumbs {
        /** @review Свойства для {@link SimpleItemViewWithSeparator}  */
        interface ISimpleItemViewWithSeparatorProps {
            /** Дополнительный класс */
            className?: string;
            /** Является ли элемент первым в списке */
            first: boolean;
            /** Текст элемента */
            title?: string;
            /** @internal */
            children?: JSX.Element;
        }
        /** @review Аналог {@link LinkItemViewWithSeparator}, но без стилизации в виде ссылки. */
        const SimpleItemViewWithSeparator: (props: ISimpleItemViewWithSeparatorProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace Breadcrumbs {
        /** @review Аналог {@link LinkSeparator}, но без стилизации в виде ссылки. */
        const SimpleSeparator: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement> & {
            className: string;
        }, any, React.HTMLProps<HTMLDivElement>>;
    }
}
declare namespace WebClient {
    namespace Breadcrumbs {
        /**
         * См. {@link Breadcrumbs.ButtonItem}
         */
        const LinkItemView: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement> & {
            className: string;
        }, any, React.HTMLProps<HTMLDivElement>>;
    }
}
declare namespace WebClient {
    namespace Breadcrumbs {
        /** @review Свойства для {@link LinkItemViewWithSeparator}  */
        interface ILinkItemViewWithSeparatorProps {
            /** Дополнительный класс */
            className?: string;
            /** Является ли элемент первым в списке */
            first: boolean;
            /** Текст элемента */
            title?: string;
            /** @internal */
            children?: JSX.Element;
        }
        /** @review Отображает {@link LinkItemView} c {@link LinkSeparator} перед ним, если элемент первый в списке. */
        const LinkItemViewWithSeparator: (props: ILinkItemViewWithSeparatorProps) => JSX.Element;
    }
}
declare namespace WebClient {
    namespace Breadcrumbs {
        /** @review См. {@link Breadcrumbs.ButtonItem} */
        const LinkSeparator: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement> & {
            className: string;
        }, any, React.HTMLProps<HTMLDivElement>>;
    }
}
declare namespace WebClient {
    /** @review Свойства для {@link DevicesVisibility}  */
    interface IDevicesVisibilityProps {
        devices: DeviceType[];
        children?: JSX.Element;
    }
    /**
      * @review Позволяет рендерить содержимое в зависимости от типа экрана
      * Пример использования:
      *
      *    <DevicesVisibility devices={[DeviceType.Desktop, DeviceType.Tablet]}>
      *      Содержимое
      *    </DevicesVisibility>
      *
      */
    const DevicesVisibility: (props: IDevicesVisibilityProps) => JSX.Element;
}
declare namespace WebClient {
    enum DateFormats {
        Date = 0,
        Time = 1,
        DateTime = 2,
    }
}
declare namespace WebClient {
    /**
    * Возможные режимы редактирования значения элемента управления.
    */
    enum EditMode {
        /** По месту. В данном режиме изменение значение осуществляется в отдельном диалоговом окне. */
        EditInPlace = 0,
        /** Без редактирование. В данном режиме изменение значения недоступно. */
        View = 1,
        /** Редактирование. Стандартный режим редактирования значения, осуществляемого непосредственно в элементе управления. */
        Edit = 2,
    }
}
declare namespace WebClient {
    /**
     * Коды клавиш
     */
    class KeyCodes {
        static readonly ARROW_UP: number;
        static readonly ARROW_DOWN: number;
        static readonly ARROW_RIGHT: number;
        static readonly ARROW_LEFT: number;
        static readonly ESC: number;
        static readonly ENTER: number;
        static readonly SPACE: number;
        static readonly BACKSPACE: number;
    }
}
declare namespace WebClient {
    /** Конструктор класса контрола. Например: `let type: LayoutControlType = WebClient.TextBox;*/
    interface LayoutControlType {
        new (props: any): LayoutControl;
    }
    class LayoutControlFactory {
        protected controlMap: IControlMap;
        register(name: string, createFunction: () => LayoutControlType, replaceExisting?: boolean): void;
        get(name: string): LayoutControlType;
    }
}
declare var controlFactory: WebClient.LayoutControlFactory;
declare namespace WebClient {
    enum LoadingStatus {
        None = 1,
        Loading = 2,
        Done = 3,
        Error = 4,
    }
    class LoadingState {
        static Loading: WebClient.LoadingState;
        static None: WebClient.LoadingState;
        constructor(status?: LoadingStatus, message?: string);
        readonly loading: boolean;
        readonly error: boolean;
        readonly done: boolean;
        readonly none: boolean;
        update(status: LoadingStatus, message?: string): void;
        status: LoadingStatus;
        message: string;
    }
}
declare namespace WebClient {
    /**
     * Вспомогательный класс для создания всплывающих уведомлений
     */
    class PopupNotification {
        protected static getDefaultOptions: () => Noty.Options;
        /**
         * Создаёт уведомление
         * @param options Список опций
         * @param show Показывать ли уведомление сразу же
         */
        static create(options: Noty.Options, show?: boolean): Noty;
    }
}
declare namespace WebClient {
    const DISPLAY_NAME_PROPERTY_NAME_KEY = "DisplayNamePropertyName";
    const EMPTY_GUID = "00000000-0000-0000-0000-000000000000";
    /**
      * Лямбда функция вида () => obj.someProperty или (obj) => obj.someProperty.
      * Функция getFieldName способна конвертировать данное выражение в имя свойства (напр. "someProperty").
      */
    type FieldSpec<TModel, TResult> = ((model?: TModel) => TResult) | string;
}
declare namespace WebClient {
    interface IUrlCollection {
        getUrls(urlResolver: UrlResolver): IUrlMap;
    }
}
declare namespace WebClient {
    interface IUrlMap {
        [id: string]: string;
    }
}
declare namespace WebClient {
    class UrlResolver {
        protected siteUrl: string;
        constructor(siteUrl: string);
        resolveUrlPart(urlPart: string): string;
        resolveUrl(action: string, controller: string, isApi?: boolean): string;
        resolveApiUrl(action: string, controller: string): string;
    }
}
declare namespace WebClient {
    class UrlStore {
        protected urls: IUrlMap;
        protected urlResolverField: UrlResolver;
        constructor(siteUrl: string);
        registerUrlCollection(urlCollection: IUrlCollection): void;
        readonly urlResolver: UrlResolver;
    }
}
declare var urls: WebClient.IUrlMap;
declare var urlStore: WebClient.UrlStore;
declare namespace WebClient {
    /** @internal */
    var ServiceActionPostDataArgumentName: string;
}
declare namespace WebClient {
    /** @internal */
    enum RequestMethods {
        Post = 0,
        Get = 1,
    }
}
declare namespace WebClient {
    /** @internal */
    interface IServiceActionParameterInfo {
        index: number;
        name: string;
    }
}
declare namespace WebClient {
    /** @internal */
    class IRequestInfo {
        url: string;
        data: any;
        method: RequestMethods;
    }
}
declare namespace WebClient {
    /** @internal */
    class ServerController {
        protected postAction(args: IArguments): JQueryDeferred<any>;
        protected getAction(args: IArguments): JQueryDeferred<any>;
        protected prepareRequest(args: IArguments, method: RequestMethods): IRequestInfo;
        protected sendRequest(requestInfo: IRequestInfo): JQueryDeferred<any>;
        private findMetadataObject(args);
        private isMetadataObject(x);
    }
}
declare namespace WebClient {
    /** @internal */
    class ServiceActionMetaData {
        type: string;
        url: string;
        parametersInfo: [IServiceActionParameterInfo];
    }
    /** @internal */
    var ServiceActionMetaDataTypeName: string;
}
declare namespace WebClient {
    interface IResourcesMap {
        [id: string]: string;
    }
}
declare var resources: WebClient.IResourcesMap;
declare namespace WebClient {
    interface ICommonResponse<ResponseModelT> {
        success: boolean;
        timestamp: number;
        message: string;
        data: ResponseModelT;
    }
}
declare namespace WebClient {
    interface INotificationModel {
        type: ErrorNotificationType;
        text: string;
    }
}
declare namespace WebClient {
    /**
      * Class, that makes syntax sugar for the performing requests to the server and managing it's state.
      * Separate instance should be created for every qeury, that should not be sent at same time.
      */
    class RequestHelper {
        private mLoadingState;
        private mLastQuery;
        private mStateChanged;
        private mLoaderDelay;
        private mPreventConcurentQueries;
        constructor(onStateChanged?: (state?: LoadingState) => void, loaderDelay?: number, preventConcurent?: boolean);
        /**
         * Calls sendFunc, and updates it's state on request progress. If previous request has not finished, call will be ignored.
         * @param sendFunc Function, that will send request to the server.
         * @param done Callback, called when request finished succesfully.
         * @param fail Callback, called when request failed.
         */
        send<T>(sendFunc: () => JQueryDeferred<T>, done: (data: T) => void, fail?: (err) => void): LoadingState;
        /** Event, that raised every time request state changed (loading, done, fail). It's good idea to call forceUpdate() there. */
        readonly stateChanged: IBasicEvent<LoadingState>;
        /** Current state of the request. Can be passed to {@link LoadingIcon} component as parameter. */
        readonly state: LoadingState;
        /** Current state of the request. Can be passed to {@link LoadingIcon} component as parameter. */
        readonly status: LoadingStatus;
        readonly loading: boolean;
        readonly error: boolean;
        readonly done: boolean;
    }
}
declare namespace WebClient {
    class RequestManager {
        private bootstrapp;
        private lastQeury;
        constructor(bootstrapp: LayoutManager);
        get<TResponse>(url: string): JQueryDeferred<TResponse>;
        post<TResponse>(url: string, data: any): JQueryDeferred<TResponse>;
        rawRequest(url: string, data: any, method: RequestMethods, routeChangeProtection?: boolean): JQueryDeferred<XMLHttpRequest>;
        readonly busy: boolean;
        processRawResponse<T>(rawResponse: any, showSuccessNotification?: boolean): ICommonResponse<T>;
        processResponse<T>(response: ICommonResponse<T>, showSuccessNotification?: boolean): void;
        showNotification(notification: INotificationModel, showSuccess?: boolean): any;
        processErrorResponse(httpRequest: XMLHttpRequest): void;
        processRequestComplete(httpRequest: any, successCallback: any, routeTimestamp?: number): boolean;
        protected makeRequest<TResponse>(url: string, data: any, method: RequestMethods, routeChangeProtection?: boolean): JQueryDeferred<TResponse>;
    }
}
declare var requestManager: WebClient.RequestManager;
declare namespace WebClient {
    interface ILayoutContainerMap {
        [layoutPositionName: string]: LayoutContainer;
    }
}
declare namespace WebClient {
    interface ILayoutContainerParams {
        rootElementId: string;
        positionName: string;
        unmountCallback: (positionName: string) => void;
        layoutCardModel: ILayoutCardModel;
    }
}
declare namespace WebClient {
    class LayoutContainer {
        private readonly layoutContainerParams;
        private layoutResolver;
        private initialized;
        /**
        * Возвращает разметку карточки.
        */
        readonly layout: Layout;
        /**
        * Возвращает наименование позиции разметки
        */
        readonly PositionName: string;
        /**
        * Возвращает идентификатор корневого элемента, в котором расположена разметка.
        */
        readonly rootElementId: string;
        /**
        * Возвращает корневой элемент, в котором расположена разметка.
        */
        readonly rootElement: HTMLElement;
        /** Модель разметки, поступившая с сервера Web-клиента. */
        readonly layoutCardModel: ILayoutCardModel;
        constructor(layoutContainerParams: ILayoutContainerParams);
        /**
         * Уничтожение разметки.
         */
        destroy(): JQueryDeferred<any>;
        /**
         * Инициализация разметки.
         */
        initialize(): void;
        protected mapLayout(layoutResolver: () => Layout): void;
        protected reactJsUnmount(): void;
        protected renderLayout(): void;
        protected prepareModel(): void;
    }
}
declare namespace WebClient {
    interface ILayoutBootstrapperParams {
        rootElementId: string;
    }
}
declare namespace WebClient {
    class LayoutBootstrapper {
        private readonly layoutBootstrapperParams;
        readonly rootElementId: string;
        readonly rootElement: HTMLElement;
        constructor(layoutBootstrapperParams: ILayoutBootstrapperParams);
        initilialize(): void;
    }
}
declare namespace WebClient {
    class ExtensionManager {
        private extensions;
        registerExtension(extension: IExtension): void;
        readonly Extensions: IExtension[];
    }
}
declare var extensionManager: WebClient.ExtensionManager;
declare namespace WebClient {
    interface IExtension extends IUrlCollection {
        initialize(): any;
    }
}
declare namespace WebClient {
    class CommonBuiltInOperations {
        static Delete: string;
        static Write: string;
    }
}
declare namespace WebClient {
    /** @internal */
    class EditOperationStore implements IEditOperationStore {
        protected editOperations: IEditOperationMap;
        protected builtInEditOperations: IEditOperationMap;
        protected emptyGuidValue: string;
        add(editOpeation: IEditOperation): void;
        addRange(editOpeations: IEditOperation[]): void;
        remove(id: string): void;
        available(id: string): boolean;
        availableBuiltIn(builtInOperationId: string): boolean;
        get(id: string): IEditOperation;
        getAll(): IEditOperation[];
        protected prepareId(id: string): string;
    }
}
declare namespace WebClient {
    /**
    * Содержит данные операции редактирования, зарегистрированной в *Конструкторе состояний*.
    */
    interface IEditOperation {
        /** Идентификатор операции редактирования в *Конструкторе состояний*. */
        id: string;
        /** Идентификатор встроенной (в карточку) операции редактирования. */
        builtInId?: string;
        /** Отображаемое название операции редактирования. */
        caption: string;
        /** Флаг, указывающий, что операция доступна для текущего состояния карточки: true - доступна, false - не доступна. */
        available: boolean;
    }
}
declare namespace WebClient {
    interface IEditOperationMap {
        [id: string]: IEditOperation;
    }
}
declare namespace WebClient {
    /**
    * Содержит данные и методы хранилища операций редактирования.
    */
    interface IEditOperationStore {
        /**
        * Проверяет доступность операции редактирования.
        * @param id Идентификатор операции редактирования.
        * @returns true - операция доступна, false - операция не доступна.
        */
        available(id: string): boolean;
        /**
        * Проверяет доступность встроенной операции редактирования.
        * @param id Идентификатор встроенной операции редактирования.
        * @returns true - операция доступна, false - операция не доступна.
        */
        availableBuiltIn(builtInOperationId: string): boolean;
        /**
       * Возвращает операцию редактирования с указанным идентификатором.
       * @param id Идентификатор операции редактирования.
       * @returns Операция редактирования.
       */
        get(id: string): IEditOperation;
        /**
        * Возвращает все операции редактирования, зарегистрированные в *Конструкторе состояний* для текущего вида карточки.
        * @returns Массив операций редактирования.
        */
        getAll(): IEditOperation[];
    }
}
declare namespace WebClient {
    class ControlStore {
        protected controlCollection: ControlWrapperMap;
        protected controlsList: LayoutControl[];
        readonly controls: ControlWrapperMap;
        add(nameSrc: string, control: LayoutControl): LayoutControl;
        remove(name: string): void;
        removeControl(control: LayoutControl): void;
        onSaving(): JQueryDeferred<any>;
        onSaved(): JQueryDeferred<any>;
        protected collectControlData(func: (control: LayoutControl) => void): void;
        protected callSaveCallbacks(beforeSave: boolean): JQueryDeferred<any>;
    }
}
declare namespace WebClient {
    /** @deprecated */
    type LayoutControlWrapper = ApiControlWrapper<any, any>;
    /** @deprecated */
    class ApiControlWrapper<P extends BaseControlParams, S extends BaseControlState> {
        control: BaseControl<P, S>;
    }
}
declare namespace WebClient {
    class ControlWrapperMap {
        [name: string]: any;
        get<T extends LayoutControl | LayoutControl[]>(name: string): T;
    }
}
declare namespace WebClient {
    interface IApiPropertyDescriptor {
        propertyName: string;
        get?(): any;
        set?(v: any): void;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IControlMap {
        [name: string]: () => LayoutControlType;
    }
}
declare namespace WebClient {
    interface IControlWrapperMap {
        [name: string]: LayoutControl | LayoutControl[];
    }
}
declare namespace WebClient {
    interface IProxyControl {
        isProxyControl: boolean;
        renderProxyChildren(): JSX.Element[];
    }
}
declare namespace WebClient {
    enum BublingEventResult {
        Continue = 0,
        StopPropogation = 1,
    }
    interface IBublingEventInfo {
        name?: string;
        bubling: boolean;
    }
    type BublingEventCallback = (actualSender: ISupportEventBubling, args: IEventArgs) => BublingEventResult | void;
    interface ISupportEventBubling {
        supportEventBubling: boolean;
        getEventInfo<T>(event: IBasicEvent<T>): IBublingEventInfo;
        triggerBublingEvent<T>(eventName: string, actualSender: ISupportEventBubling, args: T): any;
        subscribteToBublingEvent(eventName: string, callback: BublingEventCallback): any;
        unsubscribteToBublingEvent(eventName: string, callback: BublingEventCallback): any;
    }
}
declare namespace WebClient {
    interface IServerErrorResponse {
        ExceptionMessage?: string;
        ExceptionType?: string;
        Message?: string;
        StackTrace?: string;
    }
    /**
     * Стандартная серверная ошибка
     */
    class ServerError {
        message: string;
        type: string;
        stack: string;
        constructor(message: string, type: string, stack: string);
        static fromResponse(data: IServerErrorResponse): ServerError;
    }
}
declare namespace WebClient {
    class CardTypeResolver {
        protected CardTypeMap: ICardTypeMap;
        protected unknownCardType: {
            id: string;
            name: string;
            cssClass: string;
            caption: string;
        };
        registerCardType(cardTypeInfo: ICardTypeInfo): void;
        getCardTypeInfo(cardTypeId: string): ICardTypeInfo;
    }
}
declare var cardTypesRaw: WebClient.ICardTypeRawMap;
declare var cardTypeResolver: WebClient.CardTypeResolver;
declare namespace WebClient {
    interface ICardTypeInfo {
        id: string;
        name: string;
        cssClass: string;
        caption: string;
    }
}
declare namespace WebClient {
    interface ICardTypeMap {
        [id: string]: ICardTypeInfo;
    }
}
declare namespace WebClient {
    interface ICardTypeRaw {
        Name: string;
    }
}
declare namespace WebClient {
    interface ICardTypeRawMap {
        [id: string]: ICardTypeRaw;
    }
}
declare namespace WebClient {
    interface IBindingMetadata {
        key: string;
        value: string;
    }
}
declare namespace WebClient {
    interface IBindingResult<T> {
        name: string;
        values: string[];
        value: T;
        editOperation: string;
        metadata: IBindingMetadata[];
    }
}
declare namespace WebClient {
    interface IBindingsWriteRequest {
        /** Layout control name */
        controlName: string;
        /** Name of the control, that initiates write request. It can be edit-in-place control copy */
        actualControlName: string;
        controlTypeName: string;
        bindingResults: IBindingResult<any>[];
    }
}
declare namespace WebClient {
}
declare namespace WebClient {
}
declare namespace WebClient {
}
declare namespace WebClient {
}
declare namespace WebClient {
}
declare namespace WebClient {
}
declare namespace WebClient {
}
declare namespace WebClient {
    /**
     * Базовый класс для описания публичных свойств контрола.
     *
     * Публичные свойства должны объявляться использованием
     * одного из трех декораторов: {@link r} (свойство, котрое запрещено изменять после создания контрола), {@link rw} (разрешено изменять) или {@link event} (событие). Например:
     *
     *     @r isLoaded?: boolean;
     *     @rw visibility?: boolean = true;
     *     @event click?: BasicApiEvent<IClickEventArgs>;
     *
     * Свойства, которые не существенны для контрола (либо имеют значения по умолчанию) должны быть помечены как необязательные
     * (с помощью знака вопроса, например `@rw compactMode?: boolean = false;`). Это позволит не указывать данные свойства при создании контрола
     * через JSX из скриптов.
     *
     * Получение и запись значения публичных свойств можно переопределить в методах {@link BaseControl.setParamValue}, {@link BaseControl.getParamValue}, либо при помощи
     * объявления свойств с декоратором {@link handler}.
     */
    class BaseControlParams {
        /** Возвращает ссылку на родительский элемент управления. @see {@link BaseControl.parent} */
        parent: BaseControl<BaseControlParams, BaseControlState>;
        /** Возвращает имя класса элемента управления. */
        controlTypeName?: string;
        /** Возвращает уникальное (для текущей разметки) имя элемента управления. */
        name?: string;
        /** Возвращает набор стандартных классов, определяющих стиль элемента управления. Стандартные классы, указываемые по умолчанию для всех элементов управления, не могут быть изменены. */
        standardCssClass?: string;
        /** Пользовательские классы стилей элемента управления, дополняющие стили из {@link BaseControlParams.standardCssClass}. */
        customCssClasses?: string;
        /** Определяет, отображается ли элемент управления на странице: `true` - отображается, `false` - скрыт. */
        visibility?: boolean;
        /** Определяет, должен ли элемент управления получать фокус при переходе по Tab: `true` - должен, `false` - не должен. @see {@link BaseControlImpl.getTabIndex} */
        tabStop?: boolean;
        /** Определяет, должен ли элемент управления отображаться в компактном режиме, в котором у элемента отсутствуют отступы и т.п. Компактный режим, например, используется при отрисовке контролов в таблице (см. {@link Table}). */
        compactMode?: boolean;
        /** Стиль родительского (по отношению к данному элементу управления) div-элемента. */
        customCssStyle?: React.CSSProperties;
        /** Определяет, завершена ли инициализация элемента управления: `true` - объект {@link BaseControl.controlImpl} создан, `false` - инициализация завершена. */
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
    interface BaseControlState extends BaseControlParams {
        layout: Layout;
    }
    /** Синоним `BaseControl<any, any>` */
    type LayoutControl = BaseControl<BaseControlParams, any>;
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
    abstract class BaseControl<P extends BaseControlParams, S extends BaseControlState> extends React.Component<P, S> implements ISupportEventBubling {
        /** Если значение данного поля `false`, то вызов метода {@link forceUpdate} не инициирует перерисовку компонента. Используется методом {@link batchUpdate}. */
        protected shouldUpdate: boolean;
        private paramsObject;
        private propertyGetHandlers;
        private propertySetHandlers;
        private controlImplRef;
        private bublingEventSubscribers;
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
        abstract render(): any;
        /** @internal */
        protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
        /** @internal */
        protected unregisterChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
        /** @internal */
        protected registerControl(child: BaseControl<BaseControlParams, BaseControlState>): void;
        /** @internal */
        protected unregisterControl(child: BaseControl<BaseControlParams, BaseControlState>): void;
        /** Компонент реализации (см. описание класса {@link BaseControl})
          * @see {@link getParamValue}, {@link setParamValue}, {@link attachControl},
          */
        protected controlImpl: BaseControlImpl<BaseControlParams, BaseControlImplState>;
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
        /** Разметка, в которой находится компонент. */
        readonly layout: Layout;
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
        componentDidUpdate(): void;
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
         * @param newVal Функция-обработчик события
         * @param initial Значение истино, если метод вызывается при инициализации компонента (из componentWillMount).
         */
        protected setEventValue(paramName: string, val: BasicEventHandler<any> | string, initial: boolean): void;
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
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства [EmptyControlStub]{@link EmptyControlStub}.
     */
    class EmptyControlStubParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления. */
        standardCssClass?: string;
    }
    /**
     * Класс, являющийся заглушкой вместо других элементов управления
     */
    class EmptyControlStub extends BaseControl<BaseControlParams, any> {
        protected createParams(): WebClient.EmptyControlStubParams;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства [LayoutScript]{@link LayoutScript}.
     */
    class LayoutScriptParams extends BaseControlParams {
    }
    /**
     * Класс, позволяющий хранить различную логику для элементов управления.
     */
    abstract class LayoutScript<ParamsT extends LayoutScriptParams> extends BaseControl<ParamsT, any> {
        constructor(props: ParamsT);
        /** @internal */
        componentWillMount(): void;
        /** @internal */
        render(): any;
    }
}
declare namespace WebClient {
    class InputBasedControlParams<ModelT> extends BaseControlParams {
        /** Значение элемента управления. */
        value?: ModelT;
        /** Флаг, определяющий возможность изменения значения элемента управления: true - разрешено (разрешена настроенная операция редактирования), false - не разрешено. */
        canEdit?: boolean;
        /**
        * Флаг, определяющий, что элемент управления находится в модальном окне редактирования значения элемента управления в режиме редактирования {@link EditMode.EditInPlace}.
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
        /** Флаг, определяющий, должно ли переноситься на следующую строку тектовое содержимое, когда оно не помещается в одну строку: true - переносить, false - не переносить.  */
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
    interface InputBasedControlState<ModelT> extends InputBasedControlParams<ModelT>, BaseControlState {
    }
    /**
     * Базовый класс элементов управления, поддерживающих ввод данных.
     *
     * @param P Класс, наследующийся от {@link InputBasedControlParams} и описывающий публичные свойства компонента.
     * @param S Интерфейс, расширяющий {@link InputBasedControlState} и описывающий внутренние переменные инетрфейсного компонента.
     */
    abstract class InputBasedControl<ModelT, P extends InputBasedControlParams<ModelT>, S extends InputBasedControlState<ModelT>> extends BaseControl<P, S> {
        constructor(props: P);
        private defaultValue;
        private readonly myControlImpl;
        /**
         * Проверяет возможность отображения диалогового окна редактирования.
         * @returns true - если операция редактирования доступна и элемент управления находится в режиме редактирования "По месту"; иначе - false.
         */
        canShowEditDialog(): boolean;
        /**
         * Открывает диалоговое окно редактирования значения.
         */
        showEditDialog(): void;
        /**
         * Закрывает диалоговое окно редактирования значения.
         */
        hideEditDialog(): void;
        /**
         * Проверяет наличие значения у элемента управления.
         * @returns true - если значение элемента управления установлено, иначе - false.
         */
        hasValue(): boolean;
        validate(params: IValidationParams): IValidationResult[];
        componentDidMount(): void;
        private readonly myGenericControlImpl;
        onEditPopoverAccepting(sender: any, event: ICancelableEventArgs<IEventArgs>): void;
        protected getParamsToKeep(params: P): {
            value: ModelT;
        };
        getBindingsWriteRequests(): IBindingsWriteRequest[];
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства класса [TextControlBase]{@link TextControlBase}.
     */
    class TextControlBaseParams extends InputBasedControlParams<string> {
    }
    /** @internal */
    interface TextControlBaseState extends TextControlBaseParams, InputBasedControlState<string> {
        binding: IBindingResult<string>;
    }
    /**
     * Класс, позволяющий создавать на своей основе контролы для редактирования текстовой информации
     */
    abstract class TextControlBase<P extends TextControlBaseParams, S extends TextControlBaseState> extends InputBasedControl<string, P, S> {
        /** @internal */
        protected binding: IBindingResult<string>;
        protected getBindings(): IBindingResult<string>[];
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** Базовый интерфейс, для описания состояния контролов, наследующихся от {@link BaseControlImpl} */
    interface BaseControlImplState extends BaseControlParams {
    }
    /**
     * Базовый класс для реализации контролов Web-клиента.
     * Реализация контрола содержит логику, без привязки к окружению (взаимодействие с сервером, с разметкой и т.д.).
     * Реализация используется основным, 'интерфейсным' классом контрола, наследующимся от {@link BaseControl}, который обеспечивает связь
     * контрола с внешним миром.
     *
     * @param P Класс или интерфейс, наследующийся от {@link BaseControlParams} и описывающий параметры компонента реализации.
     * @param S Интерфейс, расширяющий {@link BaseControlImplState} и описывающий внутренние переменные компонента реализации.
     */
    abstract class BaseControlImpl<P extends BaseControlParams, S extends BaseControlImplState> extends React.Component<P, S> {
        /** @internal */
        protected componentDOMNode: Element;
        private propertyHandlers;
        private SPACE_KEY_CODE;
        private changedParams;
        /**
         * Инициализирует объект.
         *
         * В конструкторе необходимо создать объекты событий. Например:
         *
         *     this.state.inPlaceEditOpeninig = CancelableEvent.Create(props.wrapper);
         *     this.state.inPlaceEditOpened = SimpleEvent.Create(props.wrapper);
         *
         * **Внимание!** Значения свойств контрола (`props`) автоматически копируются в `state` в методе `componentDidMount`
         * (при помощи {@link setParamValue}), который вызывается после того, как конструктор завершил выполнение.
         * Соответственно, в теле конструктора значения в `state` еще недоступны, и нужно обращаться к `props`.
         *
         * ** Внимание!** При вызове конструктора объект `this.props` еще недоступен, необходимо обращаться к параметру `props`.
         *
         * @param props Параметры, переданные компоненту.
         */
        constructor(props: P);
        protected onFocusedKeyDown(event: React.KeyboardEvent, handler: () => void): void;
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
        protected handleClick(event: React.MouseEvent): void;
        /** Обработчик события `mouseover` в области контрола. Генерирует событие {@link BaseControlParams.mouseOver}. */
        protected handleMouseOver(event: React.MouseEvent): void;
        /** Обработчик события `mouseout` в области контрола. Генерирует событие {@link BaseControlParams.mouseOut}. */
        protected handleMouseOut(event: React.MouseEvent): void;
        /** Обработчик события `focus`. Генерирует событие {@link BaseControlParams.focus}. */
        protected handleFocus(event: React.FocusEvent): void;
        /** Обработчик события `blur`. Генерирует событие {@link BaseControlParams.blur}. */
        protected handleBlur(event: React.FocusEvent): void;
        /** Формирует список классов для основного html-тэга контрола. */
        protected getCssClass(): string;
        /** Формирует словарь стилей для основного html-тэга контрола (см. [документацию React](https://facebook.github.io/react/docs/dom-elements.html#style)) */
        protected getCssStyle(): React.CSSProperties;
        /**
         * Возвращает 0 если {@link BaseControlParams.tabStop} == true, и -1 в противном случае. По умолчанию данный метод не используется,
         * он может быть использован производным классом при отрисовке интерактивных элементов.
         */
        protected getTabIndex(): 0 | -1;
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
}
declare namespace WebClient {
    interface InputBasedControlImplState<ModelT> extends BaseControlImplState, InputBasedControlState<ModelT> {
        currentValue: ModelT;
        inputText: string;
        inputFocused: boolean;
        validationMessage: string;
        hadValue: boolean;
    }
    abstract class InputBasedControlImpl<ModelT, PropsT extends InputBasedControlParams<ModelT>, StateT extends InputBasedControlImplState<ModelT>> extends BaseControlImpl<PropsT, StateT> {
        editPopoverControl: InputBasedControl<ModelT, any, any>;
        text: HTMLElement;
        /** Edit popover, that showed copy of control in edit-in-place mode */
        editPopover: EditPopover;
        /** Edit popover, where control currently located */
        containingEditPopover: EditPopover;
        input: HTMLElement;
        constructor(props: PropsT);
        canShowEditDialog(): boolean;
        showEditDialog(): void;
        hideEditDialog(): void;
        hasValue(): boolean;
        protected onDataChanged(eventArgs: IDataChangedEventArgs): void;
        protected onInPlaceEditOpening(callback: () => void): void;
        protected onInPlaceEditOpened(): void;
        protected onInPlaceEditClosinig(sender: any, args: ICancelableEventArgs<any>): void;
        protected onInPlaceEditClosed(): void;
        validate(params: any): IValidationResult;
        protected readonly editAvailable: boolean;
        protected getTabIndex(): 0 | -1;
        protected attachInput(elem: HTMLElement): void;
        protected getInputElem(): HTMLElement;
        protected attachText(textElem: any): void;
        protected showEditPopover(popoverOptions?: IEditPopoverProps): void;
        protected onEditPopoverShowed(control: InputBasedControlImpl<any, PropsT, StateT>): void;
        componentWillUnmount(): void;
        componentWillMount(): void;
        protected getCssClass(): string;
        protected onInputFocus(event: React.FocusEvent): void;
        protected onInputBlur(event: React.FocusEvent): void;
        protected onPlaceholderClick(event: any): void;
        protected onValueClick(event: any): void;
        protected renderValidationMessage(): JSX.Element;
        protected getInputTitle(): string;
        protected renderInputWithPlaceholder(): JSX.Element;
        protected updateValidationMessage(): void;
        protected editModeRender(): JSX.Element;
        protected getValueTitle(): string;
        protected renderWithText(): JSX.Element;
        protected editInPlaceModeRender(): JSX.Element;
        protected viewModeRender(): JSX.Element;
        renderControl(): JSX.Element;
        private readonly isEditDialogShown;
        value: ModelT;
        protected abstract getTextValue(): string;
        protected abstract renderInto(props: PropsT, container: HTMLElement): InputBasedControl<ModelT, any, any>;
        protected getDefaultValue(): ModelT;
        protected onInputChange(event: any): void;
        protected readonly editPopoverControlImpl: InputBasedControlImpl<ModelT, any, any>;
        protected setValue(value: ModelT, redraw: boolean): void;
        protected setValueInternal(value: ModelT): void;
        protected getValue(): ModelT;
        protected getEditAvailable(): boolean;
        protected initEditPopover(popover: EditPopover): void;
        protected renderEditPopover(popover: EditPopover): InputBasedControl<ModelT, PropsT, StateT>;
        protected renderPlaceholder(): JSX.Element;
        protected onInputKeyDown(ev: React.KeyboardEvent): void;
        protected renderInput(): JSX.Element;
        protected readonly editInPlaceAvailable: boolean;
        private readonly defaultValue;
    }
}
declare namespace WebClient {
    interface TextControlBaseImplState extends InputBasedControlImplState<string>, TextControlBaseState {
    }
    abstract class TextControlBaseImpl<PropsT extends TextControlBaseParams, StateT extends TextControlBaseImplState> extends InputBasedControlImpl<string, PropsT, StateT> {
        constructor(props: PropsT);
        protected abstract renderInto(props: TextControlBaseParams, container: HTMLElement): TextControlBase<any, any>;
        protected onInputChange(event: any): void;
        protected getTextValue(): string;
        protected getCssClass(): string;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства класса [TextBox]{@link TextBox}.
     */
    class TextBoxParams extends TextControlBaseParams {
        /** Стандартный CSS класс со стилями элемента управления. */
        standardCssClass?: string;
    }
    /** @internal */
    interface TextBoxState extends TextBoxParams, TextControlBaseState {
    }
    /**
     * Вспомогательный контрол для редактирования текстовой информации.
     */
    class TextBox extends TextControlBase<TextBoxParams, TextBoxState> {
        protected createParams(): WebClient.TextBoxParams;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface TextBoxImplState extends TextControlBaseImplState, TextBoxParams {
    }
    /** @internal */
    class TextBoxImpl extends TextControlBaseImpl<TextBoxParams, TextBoxImplState> {
        constructor(props: TextBoxParams);
        protected renderInto(props: TextBoxParams, container: HTMLElement): TextBox;
        protected showEditPopover(popoverOptions?: IEditPopoverProps): void;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Текст]{@link TextArea}.
     */
    class TextAreaParams extends TextControlBaseParams {
        /** Стандартный CSS класс со стилями элемента управления. */
        standardCssClass?: string;
    }
    /** @internal */
    interface TextAreaState extends TextAreaParams, TextControlBaseState {
    }
    /**
     * Класс элемента управления Текст
     *
     * Добавляет в web-разметку элемент управления для хранения текстовой информации.
     */
    class TextArea extends TextControlBase<TextAreaParams, TextAreaState> {
        protected createParams(): WebClient.TextAreaParams;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface TextAreaImplState extends TextControlBaseImplState, TextAreaState {
    }
    /** @internal */
    class TextAreaImpl extends TextControlBaseImpl<TextAreaParams, TextAreaImplState> {
        constructor(props: TextAreaParams);
        protected setValue(value: string, redraw: boolean): void;
        protected renderInput(): JSX.Element;
        protected renderInto(props: TextAreaParams, container: HTMLElement): TextArea;
        protected showEditPopover(popoverOptions?: IEditPopoverProps): void;
        protected attachInput(inputElem: any): void;
    }
}
declare namespace WebClient {
    /** @internal */
    interface TextAreaAutosize {
        autosize(el: Element): void;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Дерево исполнения]{@link TasksTree}.
     */
    class TasksTreeParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления. */
        standardCssClass?: string;
        /** Идентификатор списка заданий. */
        taskCardId?: string;
        /** Текст кнопки. */
        buttonText?: string;
        /** Режим отображения. */
        displayMode?: TasksTreeDisplayMode;
        /** Максимальное количество заданий группы */
        maxGroupTaskNumber: number;
        /** Режим отображения группы из одного задания. */
        taskGroupWithOneTaskDisplayMode: TaskGroupWithOneTaskDisplayMode;
        /** Виды заданий для отображения. */
        viewKinds: string[];
        /** Сервис для управления резолверами задач. */
        nodeResolveService: TasksTreeNodeResolveService;
        /** Цвета. */
        colors: ITasksTreeColorMap;
        /** Группы. */
        groups: ITasksTreeGroupMap;
        /** Список опций для VIS.js. */
        options: vis.Options;
    }
    /** @internal */
    interface ITasksTreeState extends TasksTreeParams, BaseControlState {
        isTreeVisible: boolean;
        isFullTreeLoaded: boolean;
        isCurrentTaskFocused: boolean;
        isOverdueFiltered: boolean;
        isImportantFiltered: boolean;
        isOnControlFiltered: boolean;
        isShowBranchFiltered: boolean;
    }
    /**
     * Класс элемента управления Дерево исполнения
     *
     * Добавляет в web-разметку элемент управления для работы с деревом исполнения.
     */
    class TasksTree extends BaseControl<TasksTreeParams, ITasksTreeState> {
        constructor(props: TasksTreeParams);
        private binding;
        private viewKindsBinding;
        protected createParams(): WebClient.TasksTreeParams;
        private getDefaultVisOptions();
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ITasksTreeImplState extends BaseControlImplState, ITasksTreeState {
        tasksTreeModel: ITasksTreeModel;
    }
    /** @internal */
    class TasksTreeImpl extends BaseControlImpl<TasksTreeParams, ITasksTreeImplState> {
        tasksTreeContainer: TasksTreeContainer;
        constructor(props: TasksTreeParams);
        private loadFullTreeHandler();
        componentDidMount(): void;
        private сurrentTaskFocusHandler();
        private overdueHandler();
        private importantHandler();
        private onControlHandler();
        private showBranchHandler();
        private collapseAllHandler();
        private expandAllHandler();
        private refreshHandler();
        private loadTasksTree(fullTree);
        private getTasksTree(fullTree);
        private onTasksTreeClick;
        private showTreeModal;
        private hideTreeModal;
        renderControl(): JSX.Element;
        private renderTreeModal();
        private renderTreeContent();
    }
}
declare namespace WebClient {
    /** @internal */
    interface ITasksTreeRibbon extends ITasksTreeImplState {
        onLoadFullTreeClick: () => void;
        onCurrentTaskFocusClick: () => void;
        onOverdueClick: () => void;
        onImportantClick: () => void;
        onControlClick: () => void;
        onShowBranchClick: () => void;
        onCollapseAllClick: () => void;
        onExpandAllClick: () => void;
        onRefreshClick: () => void;
    }
    /** @internal */
    const TasksTreeRibbon: (props: ITasksTreeRibbon) => JSX.Element;
}
declare namespace WebClient {
    /** @internal Свойства для {@link InnerWindow}  */
    interface IInnerWindowProps {
        className?: string;
        children?: JSX.Element;
        width?: number;
        top?: number;
        left?: number;
        visible?: boolean;
    }
    /** @internal Вспомогательный компонент для {@link TasksTreeContainer} */
    const InnerWindow: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement> & IInnerWindowProps & {
        className: string;
    }, any, React.HTMLProps<HTMLDivElement> & IInnerWindowProps>;
}
declare namespace WebClient {
    interface ITasksTreeContainerProps extends ITasksTreeImplState {
    }
}
declare namespace WebClient {
    interface ITasksTreeContainerState {
        network: vis.Network;
        shouldContainerUpdate: boolean;
        propertyProcessors: any;
        nodes: ITasksTreeNodeContainer[];
        edges: ITasksTreeEdgeContainer[];
        helpBoxDelegationExpanded: boolean;
        helpBoxDelegationClick: (e: React.MouseEvent) => void;
        selectedNode: ITasksTreeNodeContainer;
        helpModel: ITreeNodeHelpModel;
        data: vis.Data;
        roots: vis.IdType[];
    }
}
declare namespace WebClient {
    /** @internal */
    class TasksTreeContainer extends React.Component<ITasksTreeContainerProps, ITasksTreeContainerState> {
        state: ITasksTreeContainerState;
        private container;
        constructor(props: any);
        componentDidMount(): void;
        componentWillUnmount(): void;
        componentWillReceiveProps(nextProps: ITasksTreeContainerProps): void;
        updateProps(nextProps: ITasksTreeContainerProps, initialize: boolean): void;
        updateContainer(): void;
        redrawNetwork(): void;
        beforeDrawing(): void;
        afterDrawing(): void;
        onClick(params: IVisClickParams): void;
        onHold(params: IVisClickParams): void;
        onSelectNode(params: IVisClickParams): Promise<void>;
        changeNodeCollapse(nodeId: vis.IdType): void;
        selectNode(selectedNodeId: vis.IdType): void;
        onDeselectNode(): void;
        setFit(): void;
        setFocus(nodeId: vis.IdType): void;
        updateNodeCollapse(nodeId: vis.IdType, hidden: boolean, forceExpand: boolean, expandChilds: boolean): void;
        updateNodeVisibility(nodeId: vis.IdType, hidden: boolean, forceExpand: boolean, expandChilds: boolean): void;
        tasksTreeModelUpdate(property: any, nextProps: ITasksTreeContainerProps): void;
        collapseAll(): void;
        expandAll(): void;
        private showHelpBox(selectedNode);
        private getRoots(nodes, edges);
        private updateNodes();
        private hideCollapsedBySettingNodes();
        private collapseBySetting(nodeId, nodes, edges);
        private collapseNodeBySetting(nodeId, nodes, edges);
        private getLinkedNode(nodeId, hiddenNodes);
        private refresh();
        private getOptions();
        private getColor(colorAlias);
        private getData();
        private getTasksTreeNodeHelpModel(cardId, cardTypeId);
        private helpBoxDelegationClick(e);
        private getHeight(helpBox);
        private hideNode(nodeId);
        private showNode(nodeId, includeChilds);
        private findNode(array, nodeId);
        render(): JSX.Element;
        renderHelpBox(): JSX.Element;
    }
}
declare namespace WebClient {
    const TasksTreeContainerStyle: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement>, any, React.HTMLProps<HTMLDivElement>>;
}
declare namespace WebClient {
}
declare namespace WebClient {
    const DOCUMENT_CARD_TYPE_ID: string;
    const TASK_CARD_TYPE_ID: string;
    const GROUP_TASK_CARD_TYPE_ID: string;
    const GROUP_TYPE_BOX: string;
    const GROUP_TYPE_GREY: string;
    const GROUP_TYPE_RED: string;
    const GROUP_TYPE_ORANGE: string;
    const GROUP_TYPE_GREEN: string;
    const GROUP_TYPE_BLUE: string;
    const GROUP_TYPE_LIGHT_BLUE: string;
    const GROUP_TYPE_ICON: string;
    const COLOR_OVERDUE_BORDER: string;
    const TASKSTREE_TASK_LABEL_MAX_PERFORMERS: number;
    const TASKSTREE_TASK_LABEL_MAX_LENGTH: number;
    const TASKSTREE_TASK_LABEL_MAX_ROWS: number;
    const TASKSTREE_SELECTED_NODE_BORDER_COLOR: string;
}
declare namespace WebClient {
    interface ITasksTreeNodeResolver {
        resolveNode(treeNodeModel: ITreeNodeModel, props: ITasksTreeContainerProps, state: ITasksTreeContainerState): ITasksTreeNodeContainer[];
        resolveRenderHelpBox(props: ITasksTreeContainerProps, state: ITasksTreeContainerState): JSX.Element;
        selectionAllowed: boolean;
    }
}
declare namespace WebClient {
    interface ITasksTreeNodeResolverMap {
        [cardTypeId: string]: ITasksTreeNodeResolver;
    }
}
declare namespace WebClient {
    class TasksTreeNodeResolveService {
        resolvers: ITasksTreeNodeResolverMap;
        defaultResolver: ITasksTreeNodeResolver;
        register(cardTypeId: string, resolver: ITasksTreeNodeResolver, override?: boolean): void;
        get(cardTypeId: string): ITasksTreeNodeResolver;
    }
}
declare namespace WebClient {
    class DefaultTasksTreeNodeResolver implements ITasksTreeNodeResolver {
        resolveNode(treeNodeModel: ITreeNodeModel, props: ITasksTreeContainerProps, state: ITasksTreeContainerState): ITasksTreeNodeContainer[];
        resolveRenderHelpBox(props: ITasksTreeContainerProps, state: ITasksTreeContainerState): JSX.Element;
        readonly selectionAllowed: boolean;
    }
}
declare namespace WebClient {
    class DocumentTasksTreeNodeResolver implements ITasksTreeNodeResolver {
        resolveNode(treeNodeModel: ITreeNodeModel, props: ITasksTreeContainerProps, state: ITasksTreeContainerState): ITasksTreeNodeContainer[];
        resolveRenderHelpBox(props: ITasksTreeContainerProps, state: ITasksTreeContainerState): JSX.Element;
        readonly selectionAllowed: boolean;
    }
}
declare namespace WebClient {
    class GroupTaskTasksTreeNodeResolver implements ITasksTreeNodeResolver {
        resolveNode(treeNodeModel: ITreeNodeModel, props: ITasksTreeContainerProps, state: ITasksTreeContainerState): ITasksTreeNodeContainer[];
        resolveRenderHelpBox(props: ITasksTreeContainerProps, state: ITasksTreeContainerState): JSX.Element;
        readonly selectionAllowed: boolean;
        protected getIndicatorNodes(nodeModel: ITaskGroupTreeNodeModel): ITasksTreeNodeContainer[];
        protected getGroup(nodeModel: ITaskGroupTreeNodeModel): string;
        protected getHelpBoxHeaderIcon(groupName: any): string;
        protected getLabel(nodeModel: ITaskGroupTreeNodeModel, props: ITasksTreeContainerProps, state: ITasksTreeContainerState): string;
        protected getImage(nodeModel: ITaskGroupTreeNodeModel): string;
        protected prepareView(node: ITasksTreeNodeContainer, nodeModel: ITaskGroupTreeNodeModel, props: ITasksTreeContainerProps): any;
        protected getTitle(node: ITasksTreeNodeContainer, nodeModel: ITaskGroupTreeNodeModel, props: ITasksTreeContainerProps): string;
        private getExecutionTypeResourceKey(executionType);
    }
}
declare namespace WebClient {
    class TaskTasksTreeNodeResolver implements ITasksTreeNodeResolver {
        private readonly moreDots;
        resolveNode(treeNodeModel: ITreeNodeModel, props: ITasksTreeContainerProps, state: ITasksTreeContainerState): ITasksTreeNodeContainer[];
        resolveRenderHelpBox(props: ITasksTreeContainerProps, state: ITasksTreeContainerState): JSX.Element;
        readonly selectionAllowed: boolean;
        protected renderDelegateList(taskNodeHelpModel: ITaskTreeNodeHelpModel, color: ITasksTreeColor, state: ITasksTreeContainerState): JSX.Element;
        protected getIndicatorNodes(nodeModel: ITaskTreeNodeModel): ITasksTreeNodeContainer[];
        protected getGroup(nodeModel: ITaskTreeNodeModel): string;
        protected getHelpBoxHeaderIcon(groupName: any): string;
        protected getLabel(nodeModel: ITaskTreeNodeModel): string;
        protected getImage(nodeModel: ITaskTreeNodeModel): string;
        protected prepareView(node: ITasksTreeNodeContainer, nodeModel: ITaskTreeNodeModel, props: ITasksTreeContainerProps): any;
        protected getTitle(node: ITasksTreeNodeContainer, nodeModel: ITaskTreeNodeModel, props: ITasksTreeContainerProps): string;
        protected getDelegationLabel(delegationRecord: IDelegationRecord): string;
        protected getDelegationHistory(delegationRecords: IDelegationRecord[]): string[];
        protected showFilePreview(linkItemData: ILinkItemData): void;
    }
}
declare namespace WebClient {
    interface IDelegationRecord {
        fromPerformer: string;
        toPerformer: string;
    }
}
declare namespace WebClient {
    interface IDocumentTreeNodeModel extends ITreeNodeModel {
        name: string;
    }
}
declare namespace WebClient {
    interface ITaskCurrentPerformer {
        displayName: string;
        employeeModel: IBasicEmployeeInfo;
    }
}
declare namespace WebClient {
    interface ITaskGroupSelectedPerformer {
        displayName: string;
        isResponsiblePerformer: boolean;
        employeeModel: IBasicEmployeeInfo;
    }
}
declare namespace WebClient {
    interface ITaskGroupTreeNodeHelpModel extends ITreeNodeHelpModel {
        executionType: ExecutionType;
        author: IBasicEmployeeInfo;
        selectedPerformers: ITaskGroupSelectedPerformer[];
        name: string;
        content: string;
        endDate: Date;
        controller: IBasicEmployeeInfo;
        controlDate: Date;
    }
}
declare namespace WebClient {
    interface ITaskGroupTreeNodeHintModel extends ITreeNodeHintModel {
        name: string;
        endDate?: Date;
        executionType: ExecutionType;
        stateDisplayName: string;
        stateClassName: string;
        stateType: number;
        selectedPerformers: ITaskGroupSelectedPerformer[];
    }
}
declare namespace WebClient {
    interface ITaskGroupTreeNodeModel extends ITreeNodeModel {
        executionType: ExecutionType;
        isOverdue: boolean;
        priority: Priority;
        stateCategory: TaskGroupStateCategory;
        onControl: boolean;
    }
}
declare namespace WebClient {
    interface ITasksTreeModel {
        nodes: ITreeNodeModel[];
        edges: ITaskTreeEdge[];
    }
}
declare namespace WebClient {
    interface ITasksTreeNodeHelpRequestModel {
        cardId: string;
        cardTypeId: string;
    }
}
declare namespace WebClient {
    interface ITasksTreeRequestModel {
        cardId: string;
        taskListId: string;
        kindIds: string[];
        fullTree: boolean;
    }
}
declare namespace WebClient {
    interface ITaskTreeEdge {
        fromNode: string;
        toNode: string;
    }
}
declare namespace WebClient {
    interface ITaskTreeNodeHelpModel extends ITreeNodeHelpModel {
        author: IBasicEmployeeInfo;
        currentPerformers: ITaskCurrentPerformer[];
        delegationHint: IDelegationRecord;
        name: string;
        content: string;
        endDate: Date;
        controller: IBasicEmployeeInfo;
        controlDate: Date;
        isOverdue: boolean;
        endDateActual: Date;
        report: string;
        delegationHistory: IDelegationRecord[];
        creationDate: Date;
        reportFiles: ILinkItemData[];
    }
}
declare namespace WebClient {
    interface ITaskTreeNodeHintModel extends ITreeNodeHintModel {
        name: string;
        endDate?: Date;
        stateDisplayName: string;
        stateClassName: string;
        stateType: number;
        delegationHint: IDelegationRecord;
    }
}
declare namespace WebClient {
    interface ITaskTreeNodeModel extends ITreeNodeModel {
        hasDelegates: boolean;
        hasReport: boolean;
        hasFileReport: boolean;
        onControl: boolean;
        isResponsiblePerformerTask: boolean;
        gender: PerformerGender;
        isOverdue: boolean;
        priority: Priority;
        stateCategory: TaskStateCategory;
        currentPerformers: ITaskCurrentPerformer[];
    }
}
declare namespace WebClient {
    interface ITreeNodeHelpModel {
    }
}
declare namespace WebClient {
    interface ITreeNodeHintModel {
    }
}
declare namespace WebClient {
    interface ITreeNodeModel {
        nodeId: string;
        cardTypeId: string;
        kindId: string;
        hint: ITreeNodeHintModel;
        accessAllowed: boolean;
    }
}
declare namespace WebClient {
    enum ExecutionType {
        Serial = 0,
        Parallel = 1,
    }
}
declare namespace WebClient {
    enum IndicatorType {
        None = 0,
        Overdue = 1,
        Priority = 2,
        OnControl = 3,
        ResponsibleTask = 4,
        Report = 5,
        Expand = 6,
        Collapse = 7,
    }
}
declare namespace WebClient {
    enum PerformerGender {
        NotSpecified = 0,
        Male = 1,
        Female = 2,
    }
}
declare namespace WebClient {
    enum Priority {
        Low = 0,
        Normal = 1,
        High = 2,
    }
}
declare namespace WebClient {
    enum TaskGroupStateCategory {
        Preparing = 0,
        Performing = 1,
        Completed = 2,
        Other = 3,
    }
}
declare namespace WebClient {
    enum TaskGroupWithOneTaskDisplayMode {
        Both = 0,
        Group = 1,
        Task = 2,
    }
}
declare namespace WebClient {
    enum TaskStateCategory {
        Preparing = 0,
        InWork = 1,
        Rejected = 2,
        OnRework = 3,
        Completed = 4,
        Other = 5,
    }
}
declare namespace WebClient {
    enum TasksTreeDisplayMode {
        Button = 0,
        Layout = 1,
    }
}
declare namespace WebClient {
    interface IHiddenNode {
        nodeId: vis.IdType;
        linkedWithNodeId: vis.IdType;
    }
}
declare namespace WebClient {
    interface ITasksTreeColor {
        color: string;
        background: string;
        border: string;
    }
}
declare namespace WebClient {
    interface ITasksTreeColorMap {
        [aliasName: string]: ITasksTreeColor;
    }
}
declare namespace WebClient {
    interface ITasksTreeEdgeContainer extends vis.Edge {
    }
}
declare namespace WebClient {
    interface ITasksTreeGroup {
        colorAlias: string;
    }
}
declare namespace WebClient {
    interface ITasksTreeGroupMap {
        [aliasName: string]: ITasksTreeGroup | any;
    }
}
declare namespace WebClient {
    interface ITasksTreeNodeContainer extends vis.Node {
        isIndicator?: boolean;
        parentNodeId?: vis.IdType;
        indicatorType?: IndicatorType;
        borderWidth?: number;
        title?: HTMLElement | string;
        nodeModel: ITreeNodeModel;
        collapsed?: boolean;
        collapsedBySetting?: boolean;
    }
}
declare namespace WebClient {
    interface IVisClickParams {
        nodes?: vis.IdType[];
        edges?: vis.IdType[];
        event?: MouseEvent;
    }
}
declare namespace WebClient {
    interface ICollapsedTextProps {
        className?: string;
        text: string;
        maxLength: number;
    }
    interface ICollapsedTextState {
        expanded: boolean;
    }
    class CollapsedText extends React.Component<ICollapsedTextProps, ICollapsedTextState> {
        constructor(props: ICollapsedTextProps);
        componentWillUnmount(): void;
        componentWillReceiveProps(nextProps: ICollapsedTextProps, nextContext: any): void;
        onClick(): void;
        private isShowFullText();
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    interface IColorTextProps {
        className?: string;
        children?: JSX.Element;
        color?: string;
        background?: string;
        onClick?: () => void;
    }
    const ColorText: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement> & IColorTextProps & {
        className: string;
    }, any, React.HTMLProps<HTMLDivElement> & IColorTextProps>;
}
declare namespace WebClient {
    interface IEmployeeInfoProps {
        className?: string;
        employeeName: string;
        position?: string;
        employeeId: string;
    }
    const EmployeeInfo: (props: IEmployeeInfoProps) => JSX.Element;
}
declare namespace WebClient {
    interface IGroupEmployeeInfoProps {
        className?: string;
        responsibleEmployees: ITaskGroupSelectedPerformer[];
        otherEmployees: ITaskGroupSelectedPerformer[];
        executionType: ExecutionType;
    }
    const GroupEmployeeInfo: (props: IGroupEmployeeInfoProps) => JSX.Element;
}
declare namespace WebClient {
    interface IImageWithDescriptionProps {
        className?: string;
        image: string;
        color?: string;
        children?: JSX.Element;
        onClick?: () => void;
    }
    const ImageWithDescription: (props: IImageWithDescriptionProps) => JSX.Element;
}
declare namespace WebClient {
    const LineSpacer: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement> & {
        className: string;
    }, any, React.HTMLProps<HTMLDivElement>>;
}
declare namespace WebClient {
    const PreloadHelpBoxContent: string;
}
declare namespace WebClient {
    interface IValueWithDescriptionProps {
        className?: string;
        description: string;
        value: string;
        color?: string;
        background?: string;
    }
    const ValueWithDescription: (props: IValueWithDescriptionProps) => JSX.Element;
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Задания]{@link Tasks}.
     */
    class TasksParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления. */
        standardCssClass?: string;
        /** Список заданий. */
        tasks: ITaskListItem[];
        /** Виды заданий для отображения. */
        viewKinds?: any;
        /** Виды заданий для создания. */
        tasksCreateInfo?: ITaskCreateInfo[];
        /** Можно ли создавать задания. */
        canCreateTask?: boolean;
        /** Можно ли создавать группы заданий. */
        canCreateTaskGroup?: boolean;
        /** Заголовок. */
        header?: string;
        /** Показывать ли дайджест представления заданий, когда контрол свёрнут. */
        digestView?: boolean;
        /** Развёрнут ли контрол с заданиями. */
        isExpanded: boolean;
        /** Разрешено ли добавление заданий. */
        addTaskAllowed?: boolean;
        /** Загружены ли задания. */
        tasksLoaded: boolean;
        /** Идентификатор карточки. */
        cardId: string;
        /** Режим. */
        mode: TasksMode;
        /** Событие, возникающее перед сворачиванием. */
        collapsing?: CancelableApiEvent<IEventArgs>;
        /** Событие, возникающее при сворачивании. */
        collapsed?: BasicApiEvent<IEventArgs>;
        /** Событие, возникающее перед разворачиванием. */
        expanding?: CancelableApiEvent<IEventArgs>;
        /** Событие, возникающее при разворачивании. */
        expanded?: BasicApiEvent<IEventArgs>;
        /** Событие, возникающее перед созданием задачи. */
        taskCreating?: CancelableApiEvent<ITaskCreatingEventArgs>;
    }
    /** @internal */
    interface TasksState extends TasksParams, BaseControlState {
        availableKinds: string[];
        taskID: string;
    }
    /**
     * Класс элемента управления Задания
     *
     * Добавляет в web-разметку элемент управления для работы с заданиями.
     */
    class Tasks extends BaseControl<TasksParams, TasksState> {
        constructor(params: any);
        protected createParams(): WebClient.TasksParams;
        private readonly tasksImpl;
        private binding;
        private createKindsBinding;
        /**
         * Добавление задания.
         * @param taskCreateInfoId Идентификатор добавляемого задания
         */
        addTask(taskCreateInfoId: string): void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface TasksImplState extends BaseControlImplState, TasksState {
        tasksLoadingHelper: RequestHelper;
    }
    /** @internal */
    class TasksImpl extends BaseControlImpl<TasksParams, TasksImplState> {
        protected taskList: TaskListComponent;
        constructor(props: TasksParams);
        componentDidMount(): void;
        canAddTask(): boolean;
        addTask(taskCreateInfoId: string): void;
        protected handleHeaderClick(): void;
        protected handleCreateTask(item: ITaskCreateInfo): void;
        renderControl(): JSX.Element;
        isExpanded: boolean;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ITaskListItemProps {
        taskListItem: ITaskListItem;
        digestView: boolean;
        tabStop: boolean;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ITaskListItemState {
        endDate: Date;
    }
}
declare namespace WebClient {
    /** @internal */
    class TaskListItemComponent extends React.Component<ITaskListItemProps, ITaskListItemState> {
        constructor(props: any);
        protected getClassName(): string;
        protected groupTaskIconClassName(): string;
        protected getTaskStateIconClassName(): string;
        protected getUrl(): string;
        protected getEndDate(): string;
        protected getEndDateClassName(): string;
        protected inState(taskState: TaskStateType[], taskGroupState: TaskGroupStateType[]): boolean;
        protected getTabIndex(): 0 | -1;
        render(): JSX.Element;
        protected renderFullView(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ITaskListProps {
        digestView: boolean;
        tabStop: boolean;
        items: ITaskListItem[];
        itemsLoading?: boolean;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ITaskListState {
        taskListItems: ITaskListItem[];
    }
}
declare namespace WebClient {
    /** @internal */
    class TaskListComponent extends React.Component<ITaskListProps, ITaskListState> {
        protected refItems: HTMLElement;
        constructor(props: any);
        componentWillReceiveProps(newProps: any): void;
        protected getTaskListItems(): JSX.Element[];
        render(): JSX.Element;
        protected getClassName(): string;
        protected renderEmptyItemList(): JSX.Element;
        protected renderItemList(): JSX.Element;
    }
}
declare namespace WebClient {
    interface ITaskCreatingEventArgs {
        cardTypeId: string;
        cardKindId: string;
    }
}
declare namespace WebClient {
    interface ITaskCreateInfo {
        displayName: string;
        isTemplate: boolean;
        createRouteName: string;
        id: string;
        cardTypeId: string;
        layoutAvailable: boolean;
    }
}
declare namespace WebClient {
    interface ITaskListItem {
        cardId: string;
        kindId: string;
        taskName: string;
        viewRouteName: string;
        isGroupTask: boolean;
        stateDisplayName: string;
        stateType: number;
        stateClassName: string;
        performerDisplayName: string;
        startDate: string;
        endDate: string;
    }
}
declare namespace WebClient {
    interface ITasksDataModel {
        tasks: ITaskListItem[];
        tasksLoaded: boolean;
        availableKinds: string[];
        taskID: string;
    }
}
declare namespace WebClient {
    enum TaskGroupStateType {
        Preparation = 0,
        Performance = 1,
        Completed = 2,
        Recalled = 3,
    }
}
declare namespace WebClient {
    enum TasksMode {
        ListAndCreation = 0,
        CreationOnly = 1,
    }
}
declare namespace WebClient {
    enum TaskStateType {
        Draft = 0,
        InWork = 1,
        Completed = 2,
        Rejected = 3,
        OnAgreement = 4,
        Agreed = 5,
        Unknown = 6,
        NotAgreed = 7,
        OnAcceptance = 8,
        OnModification = 9,
        Deferred = 10,
        Recalled = 11,
        Delegated = 12,
        ReturnedFromDelegation = 13,
        Started = 14,
        Stopped = 15,
    }
}
declare namespace WebClient {
    /** @internal */
    class CommandMenuComponent extends React.Component<ICommandMenuProps, ICommandMenuState> {
        constructor(props: any);
        componentWillUnmount(): void;
        protected handleComponentClick(event?: Event): void;
        protected handleCommandMenuClick(event?: React.MouseEvent): void;
        protected toggleMenu(): void;
        protected onMenuItemClick(item: ITaskCreateInfo, ev: React.MouseEvent): void;
        protected getCommandMenuItems(filter: (ICommandMenuItem) => boolean): JSX.Element[];
        protected getKindItems(): JSX.Element[];
        protected getTemplates(): JSX.Element[];
        protected attachCommandBarButton(elem: any): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ICommandMenuProps {
        createKinds: ITaskCreateInfo[];
        isVisible: boolean;
        createTask: (item: ITaskCreateInfo) => void;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ICommandMenuState {
        expanded: boolean;
        commandMenuItems: ITaskCreateInfo[];
        commandBarBtn: any;
        popoverOpen: boolean;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Panel]{@link Panel}.
     */
    class PanelParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Ширина панели в процентах */
        width?: number;
        /** Минимальная ширина панели в пикселях */
        minWidth?: number;
        /** Порядок панели */
        order?: number;
        /** Дочерние контролы */
        childControls?: LayoutControl[];
    }
    interface PanelState extends PanelParams, BaseControlState {
        mountedChildren: BaseControl<any, any>[];
        childControlsModels: ILayoutModel[];
    }
    /**
     * Класс элемента управления Panel.
     */
    abstract class Panel<P extends PanelParams, S extends PanelState> extends BaseControl<P, S> {
        constructor(props: P);
        /**
         * Позволяет проверить, является ли контрол панелью
         */
        isPanel(): boolean;
        protected childrenHandler: any;
        private readonly childControls;
        protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
        protected unregisterChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
        /**
         * Инициализация
         */
        init(): void;
        /**
         * Подготавливает собственные значения и значения всех дочерних контролов для отправки на сервер.
         * Метод вызывает {@link getBindings} для получения значений.
         * @param withChildren Включать в результат значения дочерних контролов или нет.
         */
        getBindingsWriteRequests(withChildren?: boolean): IBindingsWriteRequest[];
        /**
         * Проверяет корректность значения элемента управления.
         *
         * К примеру, если у элемента управления с флагом "обязательный" отсутствует значение,
         * валидация не будет пройдена (см. {@link InputBasedControl}). При этом можно показать предупреждающее сообщение.
         * @param params Параметры выполнения валидации. Например, показывать ли сообщение о неудаче в UI или нет.
         */
        validate(params: any): IValidationResult[];
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Таблица]{@link Table}.
     */
    class TableParams extends PanelParams {
        /** Стандартный CSS класс со стилями элемента управления. */
        standardCssClass?: string;
        /** Строки таблицы. */
        rows: string[];
        /** Текст всплывающей подсказки. */
        tip: string;
        /** Заголовок. */
        header: string;
        /** Режим редактирования. */
        editMode: EditMode;
        /** Имеются ли дополнительные неотображаемые строки. */
        hasMore: boolean;
        /** Столбцы таблицы. */
        columns: ILayoutTableColumnInfo[];
        /** Максимальное количество строк для отображения. */
        maxRowCount: number;
        /** Разрешено ли редактирование. */
        editAllowed: boolean;
        /** Имена дочерних контролов. */
        childControlsNames: string[];
        /** Можно ли сворачивать таблицу. */
        collapsible: boolean;
        /** Развёрнута ли таблица. */
        isExpanded: boolean;
        /** Событие, возникающее при добавлении строки. */
        rowAdding: CancelableApiEvent<IEventArgs>;
        /** Событие, возникающее после добавления строки. */
        rowAdded: BasicApiEvent<IRowEventArgs>;
        /** Событие, возникающее при удалении строки. */
        rowRemoving: CancelableApiEvent<IRowEventArgs>;
        /** Событие, возникающее после удаления строки. */
        rowRemoved: BasicApiEvent<IRowEventArgs>;
        /** Событие, возникающее перед сворачиванием. */
        collapsing: CancelableApiEvent<IEventArgs>;
        /** Событие, возникающее при сворачивании. */
        collapsed: BasicApiEvent<IEventArgs>;
        /** Событие, возникающее перед разворачиванием. */
        expanding: CancelableApiEvent<IEventArgs>;
        /** Событие, возникающее при разворачивании. */
        expanded: BasicApiEvent<IEventArgs>;
    }
    /** @internal */
    interface TableState extends TableParams, PanelState {
        binding: IBindingResult<ILayoutTableBindingModel>;
        model: ILayoutTableBindingModel;
        saveAndReloadTable: () => JQueryDeferred<any>;
        saveTable: () => JQueryDeferred<any>;
    }
    /**
     * Класс элемента управления Таблица
     *
     * Добавляет в web-разметку элемент управления для отображения таблицы.
     */
    class Table extends Panel<TableParams, TableState> {
        constructor(props: TableParams);
        protected createParams(): WebClient.TableParams;
        /** @internal */
        componentDidMount(): void;
        /** @internal */
        componentWillUnmount(): void;
        protected getBindingResultData(): ILayoutTableBindingModel;
        protected getBindings(): IBindingResult<any>[];
        protected saveAndReloadTable(): JQueryDeferred<any>;
        protected saveTable(): JQueryDeferred<any>;
        private readonly tableImpl;
        private binding;
        /**
         * Установка заголовка столбца таблицы.
         * @param columnNumber Номер столбца
         * @param header Новый заголовок
         */
        setColumnHeader(columnNumber: number, header: string): void;
        /**
         * Установка ширины столбца таблицы.
         * @param columnNumber Номер столбца
         * @param columnWidth Новая ширина (любые единицы измерения)
         */
        setColumnWidth(columnNumber: number, columnWidth: string): void;
        /**
         * Установка подсказки для столбца таблицы.
         * @param columnNumber Номер столбца
         * @param tip Новая подсказка
         */
        setColumnTip(columnNumber: number, tip: string): void;
        /**
         * Установка видимости для столбца таблицы.
         * @param columnNumber Номер столбца
         * @param visibility Виден ли или нет
         */
        setColumnVisibility(columnNumber: number, visibility: boolean): void;
        /**
         * Возвращает номер строки или -1, если строка не найдена.
         * @param rowId Идентификатор искомой строки
         */
        getRowIndex(rowId: string): number;
        /**
         * Добавить новую строку.
         */
        addRow(): JQueryDeferred<any>;
        /**
         * Удалить строку с указанным идентификатором
         * @param rowId Идентификатор удаляемой строки
         */
        removeRow(rowId: string): JQueryDeferred<any>;
        protected onCardSaving(sender: any, args: ICancelableEventArgs<ISaveControlData>): void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    interface PanelImplState extends BaseControlState, PanelState {
    }
    abstract class PanelImpl<P extends PanelParams, S extends PanelImplState> extends BaseControlImpl<P, S> {
        constructor(props: P);
        componentWillMount(): void;
        protected renderChildren(children?: ILayoutModel[]): JSX.Element[];
        protected prepareChildren(children?: ILayoutModel[]): void;
        protected getCssStyle(): React.CSSProperties;
        protected getCssClass(): string;
        children: any[];
    }
}
declare namespace WebClient {
    /** @internal */
    interface TableImplState extends PanelImplState, TableState {
        tableRows: IRowInfo[];
        newRowTemplate: IRowInfo;
        isExpanded: boolean;
        collapsible: boolean;
        addRowState: LoadingState;
        columnWrappers: TableColumnWrapper[];
        header: string;
        tip: string;
    }
    /** @internal */
    class TableImpl extends PanelImpl<TableParams, TableImplState> {
        constructor(props: TableParams);
        protected prepareChildren(): void;
        protected parseRows(children: ILayoutModel[]): void;
        setColumnProperty(columnIndex: number, propertyName: string, propertyValue: any): void;
        protected readonly editMode: boolean;
        protected onDisclosureClick(): void;
        protected toggleCollapsed(): void;
        protected onCollapsed(): void;
        protected onExpanded(): void;
        protected canAddRows(): boolean;
        protected canRemoveRows(): boolean;
        addRowInternal(): JQueryDeferred<any>;
        protected onAddRowClick(ev: React.MouseEvent): void;
        /** Проверяет, введены ли какие-либо значения пользователем в контролы указанной строки.
          * Функция может выдавать неверные результаты для нестандартных контролов, поэтому
          * следует использовать ее только там, где это не некритично.
          */
        protected checkRowIsEmpty(rowIndex: number): boolean;
        removeRowIntenral(rowIndex: number): JQueryDeferred<any>;
        protected onRemoveRowClick(row: IRowInfo): void;
        protected getCssClass(): string;
        renderControl(): JSX.Element;
        getRowIndex(rowId: string): number;
        /** Get list of row id, currently shown in the table */
        readonly rows: string[];
        isCollapsed: boolean;
        readonly columns: TableColumnWrapper[];
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Столбец таблицы]{@link TableColumn}.
     */
    class TableColumnParams extends PanelParams {
        /** Стандартный CSS класс со стилями элемента управления. */
        standardCssClass?: string;
    }
    /** @internal */
    interface TableColumnState extends TableColumnParams, PanelState {
        /** Таблица. */
        table: TableImpl;
        /** Номер столбца таблицы. */
        columnNumber: number;
        /** Ширина столбца таблицы (любые единицы измерения). */
        columnWidth: string;
    }
    /**
     * Класс элемента управления Столбец таблицы
     *
     * Добавляет в web-разметку элемент управления для отображения столбца таблицы.
     */
    class TableColumn extends Panel<TableColumnParams, TableColumnState> {
        protected createParams(): WebClient.TableColumnParams;
        /** @internal */
        componentDidMount(): void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface TableColumnImplState extends PanelState, TableColumnState {
    }
    /** @internal */
    class TableColumnImpl extends PanelImpl<TableColumnParams, TableColumnImplState> {
        constructor(props: TableColumnParams);
        protected prepareChildren(): void;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ILayoutTableBindingModel {
        sectionId: string;
        skippedCount: number;
        hasMore: boolean;
        loadedRows: string[];
        addedRows: string[];
        deletedRows: string[];
    }
}
declare namespace WebClient {
    interface ILayoutTableColumnInfo {
        header: string;
        columnWidth: string;
        tip: string;
        visibility: boolean;
    }
}
declare namespace WebClient {
    interface IRowEventArgs {
        rowId: string;
    }
}
declare namespace WebClient {
    interface IRowInfo {
        rowId: string;
        htmlElem: HTMLElement;
        columns: ILayoutModel[];
        removeRowHelper: RequestHelper;
    }
}
declare namespace WebClient {
    class TableColumnWrapper implements ILayoutTableColumnInfo {
        private _private;
        constructor(info: ILayoutTableColumnInfo, table: Table, columnNumber: number);
        header: string;
        columnWidth: string;
        tip: string;
        visibility: boolean;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Вкладки]{@link StateButtons}.
     */
    class TabParams extends PanelParams {
        /** Стандартный CSS класс со стилями элемента управления. */
        standardCssClass?: string;
        /** Должны ли быть вкладки основными вкладками в мобильной вёрстке. */
        mainTabOnMobile: boolean;
        /** Индекс вкладки по умолчанию. */
        defaultPageIndex: number;
        /** Страницы вкладок. */
        tabPages: TabPageInfo[];
        /** Активная вкладка. */
        activeTabPage: TabPageInfo;
        /** Событие, возникающее после переключения активной вкладки. */
        activeTabChange: BasicApiEvent<IActiveTabChangeEventArgs>;
    }
    /** @internal */
    interface TabState extends TabParams, PanelState {
    }
    /**
     * Класс элемента управления Вкладки
     *
     * Добавляет в web-разметку элемент управления для отображения вкладок.
     */
    class Tab extends Panel<TabParams, TabState> {
        protected createParams(): WebClient.TabParams;
        private readonly tabImpl;
        /** @internal */
        protected childrenHandler: any[];
        /**
         * Установка заголовка указанной вкладки
         * @param tab Вкладка
         * @param header Заголовок
         */
        setTabPageHeader(tab: TabPageInfo, header: string): void;
        /**
         * Загрузить содержимое указанной вкладки
         * @param tab Вкладка
         */
        loadTabPage(tab: TabPageInfo): JQueryDeferred<TabPageInfo>;
        /**
         * Открыть указанную вкладку
         * @param tabNumber Номер вкладки
         */
        openTabPage(tabNumber: number): void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface TabImplProps extends TabState {
    }
    /** @internal */
    interface TabImplState extends PanelImplState, TabState {
        requestHelper: RequestHelper;
    }
    /** @internal */
    class TabImpl extends PanelImpl<TabImplProps, TabImplState> {
        constructor(props: TabImplProps);
        openTab(tab: TabPageInfo): void;
        loadTab(tab: TabPageInfo): JQueryDeferred<TabPageInfo>;
        protected parseTabs(props: TabImplProps): void;
        protected onTabClick(tab: TabPageInfo): void;
        protected activateTab(tab: TabPageInfo): void;
        protected updateMobileTab(tab: TabPageInfo): void;
        renderNavPanelMobileTabs(): void;
        protected shouldTabsToBeMobile(): boolean;
        renderTabsPanel(): JSX.Element;
        renderControl(): JSX.Element;
        activeTabPage: any;
        setTabPageHeader(tab: TabPageInfo, header: string): void;
        loadTabPage(tab: TabPageInfo): JQueryDeferred<TabPageInfo>;
        openTabPage(tabNumber: number): void;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Страница вкладок]{@link StateButtons}.
     */
    class TabPageParams extends PanelParams {
        /** Стандартный CSS класс со стилями элемента управления. */
        standardCssClass?: string;
        /** Всплывающая подсказка. */
        tip?: string;
    }
    /** @internal */
    interface TabPageState extends TabPageParams, PanelState {
    }
    /**
     * Класс элемента управления Страница вкладок
     *
     * Добавляет в web-разметку элемент управления для отображения страницы вкладок и её содержимого.
     */
    class TabPage extends Panel<TabPageParams, TabPageState> {
        protected createParams(): WebClient.TabPageParams;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface TabPageImplState extends PanelImplState, TabPageState {
    }
    /** @internal */
    class TabPageImpl extends PanelImpl<TabPageParams, TabPageImplState> {
        constructor(props: TabPageParams);
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    interface IActiveTabChangeEventArgs {
        oldTabIndex: number;
        newTabIndex: number;
    }
}
declare namespace WebClient {
    class TabPageInfo {
        header: string;
        key: string;
        data: ILayoutModel;
        loadingState: LoadingState;
        mobileTab: HTMLElement;
        constructor(data: ILayoutModel);
        readonly loaded: boolean;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Автомат состояния]{@link StateButtons}.
     */
    class StateButtonsParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления. */
        standardCssClass?: string;
        /** Список операций. */
        operations: IOperationData[];
        /** Включена ли вертикальная ориентация. */
        verticalOrientation?: boolean;
        /** Ограничение количества отображаемых кнопок (остальные кнопки будут доступны по кнопке "..."). */
        buttonsLimit?: number;
    }
    /** @internal */
    interface StateButtonsState extends StateButtonsParams, BaseControlState {
    }
    /**
     * Класс элемента управления Автомат состояния
     *
     * Добавляет в web-разметку элемент управления для изменения состояния карточки.
     */
    class StateButtons extends BaseControl<StateButtonsParams, StateButtonsState> {
        protected createParams(): WebClient.StateButtonsParams;
        private readonly stateButtonsImpl;
        private bindingStateButtons;
        /**
         * Показать меню со всеми кнопками.
         */
        showMenu(): void;
        /**
         * Скрыть меню со всеми кнопками.
         */
        hideMenu(): void;
        /**
         * Выполнить нажатие по кнопке с указанной операцией
         * @param operationId Идентификатор операции
         */
        performClick(operationId: string): void;
        /**
         * Добавить операцию.
         * @param operationData Данные об операции.
         */
        add(operationData: IOperationData): void;
        /**
         * Удалить операцию.
         * @param operationId Идентификатор операции.
         */
        remove(operationId: string): void;
        protected processEditOperations(operationsData: IOperationData[]): IOperationData[];
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface StateButtonsImplState extends BaseControlImplState, StateButtonsState {
    }
    /** @internal */
    class StateButtonsImpl extends BaseControlImpl<StateButtonsParams, StateButtonsImplState> {
        protected sidebar: RightSidebar;
        protected sidebarRoot: HTMLElement;
        constructor(props: StateButtonsParams);
        protected initSidebar(): void;
        componentDidMount(): void;
        componentWillUnmount(): void;
        showMenu(): void;
        hideMenu(): void;
        performClick(operationId: string): void;
        add(operationData: IOperationData): void;
        remove(operationId: string): void;
        protected getStateButtons(): JSX.Element[];
        protected getSidebarButtons(): JSX.Element[];
        protected getCssClass(): string;
        protected getMenuButtonClassName(): string;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    interface IOperationData {
        operationId: string;
        displayName: string;
        tooltip: string;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Состояние]{@link State}.
     */
    class StateParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления. */
        standardCssClass?: string;
        /** Значение состояния. */
        value: IStateDataModel;
        /** Текст всплывающей подсказки. */
        tip: string;
        /** Текст метки. */
        labelText: string;
    }
    /** @internal */
    interface StateState extends StateParams, BaseControlState {
    }
    /**
     * Класс элемента управления Состояние
     *
     * Добавляет в web-разметку элемент управления для просмотра состояния карточки.
     */
    class State extends BaseControl<StateParams, StateState> {
        protected createParams(): WebClient.StateParams;
        private binding;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface StateImplState extends BaseControlImplState, StateState {
    }
    /** @internal */
    class StateImpl extends BaseControlImpl<StateParams, StateImplState> {
        constructor(props: StateParams);
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    interface IStateDataModel {
        stateId: string;
        caption: string;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Кнопки сохранения]{@link SavingButtons}.
     */
    class SavingButtonsParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Текст кнопки ОК */
        okButtonText: string;
        /** Текст кнопки Отмена */
        cancelButtonText: string;
        /** Выключена ли кнопка ОК */
        okButtonDisabled: boolean;
        /** Выключена ли кнопка Отмена */
        cancelButtonDisabled: boolean;
        /** Событие, возникающее перед нажатием на кнопку ОК или кнопку Отмена */
        clicking?: CancelableApiEvent<ISavingButtonClickEventArgs>;
    }
    /** @internal */
    interface SavingButtonsState extends SavingButtonsParams, BaseControlState {
        /** Выполнить сохранение */
        performSave: Function;
        /** Выполнить отмену */
        performCancel: Function;
        /** Сохраняется ли карточка в данный момент */
        cardIsSaving: boolean;
    }
    /**
     * Класс элемента управления Кнопки сохранения
     *
     * Добавляет в web-разметку элемент управления для сохранения изменений карточки.
     */
    class SavingButtons extends BaseControl<SavingButtonsParams, SavingButtonsState> {
        constructor(props: SavingButtonsParams);
        protected createParams(): WebClient.SavingButtonsParams;
        /** @internal */
        componentDidMount(): void;
        /** @internal */
        componentWillUnmount(): void;
        private readonly savingButtonsImpl;
        /** Выполнить сохранение */
        performSave(): JQueryDeferred<any>;
        /** Выполнить отмену */
        performCancel(): void;
        protected onCardSaving(): void;
        protected onCardSavedOrFailed(): void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface SavingButtonsImplState extends BaseControlImplState, SavingButtonsState {
        savingHelper: RequestHelper;
        cardIsSaving: boolean;
    }
    /** @internal */
    class SavingButtonsImpl extends BaseControlImpl<SavingButtonsParams, SavingButtonsImplState> {
        constructor(props: SavingButtonsParams);
        protected handleClick(event: React.MouseEvent): void;
        onSave(): void;
        onCancel(): void;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    interface ISavingButtonClickEventArgs {
        button: SavingButton;
    }
}
declare namespace WebClient {
    enum SavingButton {
        Save = 0,
        Cancel = 1,
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Группа радиокнопок]{@link RadioGroup}.
     */
    class RadioGroupParams extends InputBasedControlParams<string> {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Положение метки элемента - cлева/cправа. */
        labelPlacement: RadioGroupLabelPlacement;
        /** Количество колонок для расположения радио-кнопок. */
        columnCount: number;
        /** Список элементов, доступных для выбора */
        items: ElementDataModel[];
    }
    /** @internal */
    interface RadioGroupState extends RadioGroupParams, InputBasedControlState<string> {
        binding: IBindingResult<string>;
    }
    /**
     * Класс элемента управления Группа радиокнопок
     *
     * Добавляет в web-разметку элемент управления для выбора и отображения варианта из набора доступных.
     */
    class RadioGroup extends InputBasedControl<string, RadioGroupParams, RadioGroupState> {
        protected createParams(): WebClient.RadioGroupParams;
        private setRadioGroupElements;
        private setBinding;
        private setDefault;
        protected getBindings(): IBindingResult<any>[];
        protected getDefault(): string;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface RadioGroupImplState extends InputBasedControlImplState<string>, RadioGroupState {
    }
    /** @internal */
    class RadioGroupImpl extends InputBasedControlImpl<string, RadioGroupParams, RadioGroupImplState> {
        constructor(props: any);
        protected getTextValue(): string;
        protected renderInto(props: RadioGroupParams, container: HTMLElement): RadioGroup;
        protected showEditPopover(popoverOptions?: IEditPopoverProps): void;
        protected onElementChange(element: ElementDataModel, ev: React.FormEvent): void;
        protected renderPlaceholder(): JSX.Element;
        protected renderLabel(element: ElementDataModel): JSX.Element;
        protected getColumns(): Array<Array<ElementDataModel>>;
        protected renderInput(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
    * Содержит информацию о паре ключ-значение
    */
    class ElementDataModel {
        /** Значение */
        value: string;
        /** Ключ */
        key: any;
    }
}
declare namespace WebClient {
    class ElementsDataModel {
        elements: ElementDataModel[];
        isEmptyKeyAllowed: boolean;
    }
}
declare namespace WebClient {
    enum RadioGroupLabelPlacement {
        Right = 0,
        Left = 1,
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Сотрудник контрагента]{@link Partner}.
     */
    class PartnerParams extends InputBasedControlParams<IBasicEmployeeInfo> {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Формат отображения информации о выбранном сотруднике в контроле. */
        partnerViewMode?: EmployeeViewMode;
        /** Формат отображения информации о выбранном сотруднике во всплывающей подсказке. */
        partnerTipMode?: EmployeeTooltipMode;
        /**
         * Значение фильтра, которое которое недоступно для очистки в пользовательском интерфейсе.
         * Внимание: при изменении значения параметра, значение {@link selectedFilterPath} сбрасывается.
         */
        predefinedFilter?: IDepartmentInfo;
        /** Значение фильтра, которое было выбрано пользователем. */
        selectedFilterPath?: IDepartmentInfo[];
        /** Текущий фильтр. Объединяет значения {@link predefinedFilter} и {@link selectedFilter}  */
        currentFilterPath?: IDepartmentInfo[];
        /** Задержка в милисекундах после изменения поискового запроса и перед отправкой запроса на сервер. */
        searchDelay?: number;
        /** Флаг, указывающий на состояние окна выбора организации/подразделения: true - открыто, false - закрыто. */
        isDirectoryWindowShown?: boolean;
        /** Ссылка на компонент модального окна для выбора контрагентов. */
        directoryWindow?: PartnerSelectDialog;
        /** Событие, возникающее перед открытием модального окна для выбора контрагентов. */
        directoryWindowOpening?: CancelableApiEvent<void>;
        /** Событие, возникающее после открытия модального окна для выбора контрагентов. */
        directoryWindowOpened?: BasicApiEvent<void>;
        /** Событие, возникающее перед закрытием модального окна для выбора контрагентов. */
        directoryWindowClosing?: CancelableApiEvent<void>;
        /** Событие, возникающее после закрытия модального окна для выбора контрагентов. */
        directoryWindowClosed?: BasicApiEvent<void>;
        /**
         * Событие, возникающее перед выполнением поиска записей на сервере. В обработчике события можно изменить параметры запроса.
         * Если в обработчике задать значение result, то запрос на сервер выполнен не будет.
         */
        searchResultsLoading?: CancelableApiEvent<IPartnerDataLoadingEventArgs>;
        /** Событие, возникающее после выполнения поиска записей на сервере. В обработчике события можно изменить возвращенные данные. */
        searchResultsLoaded?: BasicApiEvent<IPartnerDataLoadingEventArgs>;
        /** Событие, возникающее перед изменением фильтра контрагентов. */
        currentFilterChanging?: CancelableApiEvent<IPartnerFilterChangeEventArgs>;
        /** Событие, возникающее после изменения фильтра контрагентов. */
        currentFilterChanged?: BasicApiEvent<IPartnerFilterChangeEventArgs>;
    }
    /** @internal */
    interface PartnerState extends PartnerParams, InputBasedControlState<IBasicEmployeeInfo> {
        binding: IBindingResult<IBasicEmployeeInfo>;
    }
    /**
     * Класс элемента управления Сотрудник контрагента.
     *
     * Добавляет в web-разметку поле ввода с кнопкой вызова диалогового окна для выбора записи из *Справочника сотрудников* или *Справочника контрагентов*.
     */
    class Partner extends InputBasedControl<IBasicEmployeeInfo, PartnerParams, PartnerState> {
        private isSelectedFilterPathInitialized;
        private isBindingInitialized;
        private isParentOrganizationBindingInitialized;
        protected createParams(): WebClient.PartnerParams;
        protected readonly partnerImpl: PartnerImpl;
        private binding;
        private parentOrganizationBinding;
        private readonly currentFilterPath;
        private selectedFilterPath;
        private predefinedFilter;
        protected getParamsToKeep(params: any): {
            selectedFilterPath: any;
            value: IBasicEmployeeInfo;
        };
        /**
         * Фильтрует путь selectedPath с учётом predefinedFilter
         *
         * Если selectedPath не существует, то возвращается пустой массив.
         * Если predefinedFilter не существует, то возвращается исходный selectedPath или пустой массив, если selectedPath не существует.
         * Если predefinedFilter входит в состав selectedPath, то selectedPath обрезается так, что остаются только элементы, первый из которых равен predefinedFilter, а остальные идут глубже по дереву.
         * Если predefinedFilter не входит в состав selectedPath, то возвращается исходный selectedPath.
         *
         * @param selectedPath Выбранное значение фильтра.
         * @param predefinedFilter Значение фильтра, которое которое недоступно для очистки в пользовательском интерфейсе.
         */
        static filterSelectedPath(selectedPath: IDepartmentInfo[], predefinedFilter: IDepartmentInfo): IDepartmentInfo[];
        /**
         * Входит ли значение predefinedFilter в состав selectedPath.
         * @param selectedPath Выбранное значение фильтра.
         * @param predefinedFilter Значение фильтра, которое которое недоступно для очистки в пользовательском интерфейсе.
         */
        static isFilterInSelectedPath(selectedPath: IDepartmentInfo[], predefinedFilter: IDepartmentInfo): boolean;
        /**
         * Проверяет возможность открытия модального окна выбора организации/подразделения.
         * @return true - возможно (если значение редактируемое), false - невозможно.
         */
        canShowDictionary(): boolean;
        /**
         * Открывает окно выбора организации/подразделения.
         */
        showDictionary(): void;
        /**
         * Закрывает окно выбора организации/подразделения.
         */
        hideDictionary(): void;
        protected getBindings(): IBindingResult<any>[];
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    namespace PartnerHelpers {
        class PartnerDirectoryItemVisualiser {
            employeeVisualiser: EmployeeVisualizer;
            constructor(employeeVisualiser: EmployeeVisualizer);
            getDisplayName(item: IPartnerDirectoryItem): string;
            getTooltip(item: IPartnerDirectoryItem): string;
            getIconClassName(item: IPartnerDirectoryItem): string;
        }
    }
}
declare namespace WebClient {
    /** @internal */
    interface ISimpleItemViewContentProps {
        className?: string;
        tabIndex?: number;
        /** Current element's id */
        id: string;
        /** Focused element's id */
        focusedId: string;
        /** Get wrapper of el (e.g. to find siblings) */
        getNodeEl?: (el: HTMLElement) => HTMLElement;
        /** Finds el in wrapper */
        findElInNode?: (node: HTMLElement) => HTMLElement;
        /** On move to component children */
        onMoveForward?: () => void;
        onSelectSibling?: (mode: 'prev' | 'next') => void;
        onSelect?: () => void;
        onClick?: (ev: React.MouseEvent) => void;
    }
    /** @internal */
    class SimpleItemViewContent extends React.Component<ISimpleItemViewContentProps, undefined> {
        protected el: HTMLElement;
        protected getNodeEl: () => HTMLElement;
        protected findElInNode: (node: HTMLElement) => HTMLElement;
        protected onKeyDown: (ev: any) => void;
        componentDidMount(): void;
        componentWillReceiveProps(nextProps: ISimpleItemViewContentProps): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    interface IPartnerSelectDialogSearchPathOptions {
        path: IDepartmentInfo[];
        notAppendToSelectedFilterPath?: boolean;
    }
    /** @internal */
    interface IPartnerSelectDialogProps {
        partnerSelected: (node: IBasicEmployeeInfo) => void;
        searchDelay: number;
        onSelect?: () => void;
        predefinedFilter: IDepartmentInfo;
        selectedFilterPath: IDepartmentInfo[];
        onSelectedFilterPathChange?: (newPath: IDepartmentInfo[]) => void;
        onSearchFilterPathChange?: (newPath: IDepartmentInfo[]) => void;
        itemVisualiser: PartnerHelpers.PartnerDirectoryItemVisualiser;
        searchResultsLoading: CancelableApiEvent<IPartnerDataLoadingEventArgs>;
        searchResultsLoaded: BasicApiEvent<IPartnerDataLoadingEventArgs>;
    }
    /** @internal */
    interface IPartnerChildrenCacheItem {
        items: IPartnerDirectoryItem[];
        totalItemsCount: number;
        accessTimestamp: Date;
    }
    /** @internal */
    interface IPartnerChildrenCache {
        [id: string]: IPartnerChildrenCacheItem;
    }
    /** @internal */
    interface IPartnerSelectedNodesPath {
        [departmentId: string]: IPartnerDirectoryItem;
    }
    /** @internal */
    interface IPartnerSelectDialogState {
        /** Выбранный партнёр */
        selectedEmployee: IBasicEmployeeInfo;
        /** Выбранный узел, используется только для навигации с клавиатуры */
        selectedNode: IBasicEmployeeInfo;
        /** Список выбранных узлов с прошлых уровней, используется только для навигации с клавиатуры */
        selectedNodesPath: IPartnerSelectedNodesPath;
        searchRequestHelper: RequestHelper;
        showingSearchResults: boolean;
        searchText: string;
        searchItems: IPartnerDirectorySearchItem[];
        hasMoreSearchItems: boolean;
        searchDebouncer: QuickSearchLogic;
        searchMode: PartnerDirectorySearchMode;
        selectedNodeFocused: boolean;
        loadChildrenHelper: RequestHelper;
        childrenListCache: IPartnerChildrenCache;
        initialLoading: boolean;
        initialLoadingState: LoadingState;
        directoryTimestamp: number;
    }
    /** @internal */
    class PartnerSelectDialog extends React.Component<IPartnerSelectDialogProps, IPartnerSelectDialogState> {
        static ChildrenPageSize: number;
        static SearchPageSize: number;
        static SimpleItemView: styled.StyledComponentClass<React.HTMLProps<any>, any, React.HTMLProps<HTMLButtonElement> & ICustomTreeNodeContentDefaultProps>;
        static SimpleItemViewCompact: styled.StyledComponentClass<React.HTMLProps<any>, any, React.HTMLProps<HTMLButtonElement> & ICustomTreeNodeContentDefaultProps>;
        searchInput: HTMLInputElement;
        protected readonly rootId: string;
        constructor(props: IPartnerSelectDialogProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        componentWillReceiveProps(newProps: IPartnerSelectDialogProps): void;
        readonly selectedPartner: IBasicEmployeeInfo;
        protected onModalKeyDown: (ev: any) => void;
        protected onNavigateToFolder(departmentId: string): JQueryPromise<{}>;
        protected onSelectedFilterPathChange: (newPath: IDepartmentInfo[]) => void;
        protected onSelectedFilterMoveBack: () => void;
        protected readonly currentDepartmentId: string;
        protected readonly currentDepartmentName: string;
        protected readonly currentChildren: IPartnerDirectoryItem[];
        protected readonly currentChildrenCache: IPartnerChildrenCacheItem;
        protected getDepartmentCache(id: string): IPartnerChildrenCacheItem;
        protected clearCache(): void;
        protected loadChildrenList(departmentId: string, from: number, to: number): JQueryDeferred<IPartnerDirectoryTreeItem[]>;
        protected onChildrenLoaded(response: IPartnerDirectoryTreeLoadResponse, departmentId: string, from: number): void;
        protected onReactListLoadRequest: (indexes: number[]) => void;
        protected search(query: IPartnerDirectorySearchRequest, reset: boolean): JQueryDeferred<{}>;
        protected onSearchResultLoaded(response: IPartnerDirectorySearchResponse, reset: boolean): void;
        attachSearchInput: (elem: HTMLInputElement) => void;
        protected onInputKeyUp(ev: React.KeyboardEvent): void;
        protected onInputChange(event: any): void;
        protected onSearchFilterPathChange(newPath: IDepartmentInfo[]): void;
        private resetSearchMode;
        protected onSelectEmployee(item: IBasicEmployeeInfo, searchPathOptions?: IPartnerSelectDialogSearchPathOptions): void;
        protected shouldShowOpenButton(item: IPartnerDirectoryTreeLoadItem): boolean;
        protected onChildrenListItemClick: (item: IPartnerDirectoryItem) => void;
        protected onSearchItemClick: (item: IPartnerDirectorySearchItem) => void;
        protected onChildrenListItemDoubleClick: (item: IPartnerDirectoryItem) => void;
        protected onSearchItemDoubleClick: (item: IPartnerDirectorySearchItem) => void;
        protected onChildrenListItemSelectSibling: (mode: "next" | "prev", index: number, getCollectionData: () => IPartnerDirectoryItem[] | IPartnerDirectorySearchItem[]) => void;
        protected onSearchPathItemClick: (department: IDepartmentInfo, item: IPartnerDirectorySearchItem) => void;
        protected onToggleSearchMode: () => void;
        protected onLoadNextSearchPage: () => JQueryDeferred<{}>;
        protected onLoadNewSearchResults: () => JQueryDeferred<{}>;
        protected renderGoToButton(item: IPartnerDirectoryItem): JSX.Element;
        renderSearchItem: (index: number, key: string) => JSX.Element;
        renderChildrenListItem: (key: string | number, item: IPartnerDirectoryTreeLoadItem, index: number) => JSX.Element;
        renderLoadingItem: (index: number, key: string | number) => JSX.Element;
        renderEmptyItem: (index: number, key: string | number) => JSX.Element;
        renderChildrenListItems(): JSX.Element;
        renderSearchItems(): JSX.Element;
        renderItems(): JSX.Element;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface PartnerImplProps extends PartnerParams {
    }
    /** @internal */
    interface PartnerImplState extends InputBasedControlImplState<IBasicEmployeeInfo>, PartnerState {
        requestHelper: RequestHelper;
        directoryDialogOpen: boolean;
        directoryDialogSelectedValue: IBasicEmployeeInfo;
        inputKeyDown: SimpleEvent<React.KeyboardEvent>;
        employeeVisualiser: EmployeeVisualizer;
        itemVisualiser: PartnerHelpers.PartnerDirectoryItemVisualiser;
        typeahead: Typeahead;
        beforeModalSelectedFilterPath: IDepartmentInfo[];
        /** Путь для элемента из поиска, отличается от selectedFilterPath тем, что применяется только при закрытии PartnerSelectDialog */
        searchFilterPath: IDepartmentInfo[];
    }
    /** @internal */
    class PartnerImpl extends InputBasedControlImpl<IBasicEmployeeInfo, PartnerImplProps, PartnerImplState> {
        static FirstPageSize: number;
        static NextPageSize: number;
        static SearchTimeout: number;
        private readonly EmptySelectedPath;
        constructor(props: PartnerImplProps);
        private selectedFilterPath;
        protected getTextValue(): string;
        protected getValueTitle(): string;
        protected getInputTitle(): string;
        protected renderInto(props: PartnerParams, container: HTMLElement): Partner;
        protected showEditPopover(popoverOptions?: IEditPopoverProps): void;
        readonly currentFilterPath: IDepartmentInfo[];
        readonly currentFilter: string | undefined;
        readonly currentFilterName: string | undefined;
        protected attachTypeahead(typeahead: Typeahead): void;
        protected findItems(typeaheadQuery: ITypeaheadSearchQuery): JQueryDeferred<ITypeaheadSearchResult>;
        protected onTypeaheadSelected(variant: ITypeaheadVariant): void;
        protected onDropdownStateChanged(): void;
        attachDialogComponent: (dialog: PartnerSelectDialog) => void;
        showDictionary(): void;
        hideDictionary(): void;
        protected cancelModal: () => void;
        readonly isDictionaryShown: boolean;
        protected partnerTipMode: EmployeeTooltipMode;
        protected partnerViewMode: EmployeeViewMode;
        protected onInputKeyDown(ev: React.KeyboardEvent): void;
        protected onDirectoryDialogNodeSelected(node: IBasicEmployeeInfo): void;
        protected onDirectoryDialogSelectButtonClick(): Promise<void>;
        protected onFilterSelected: (items: IDepartmentInfo[]) => void;
        protected onSelectedFilterPathChange: (newSelected: IDepartmentInfo[]) => void;
        protected onDialogSelectedFilterPathChange: (newSelected: IDepartmentInfo[]) => void;
        setSelectedFilterPath(newValue: IDepartmentInfo[]): JQueryDeferred<IPartnerFilterChangeEventArgs>;
        setSearchFilterPath: (newValue: IDepartmentInfo[]) => void;
        setPredefinedFilter(newValue: IDepartmentInfo): JQueryDeferred<IPartnerFilterChangeEventArgs>;
        protected onInputChange(event: any): void;
        protected renderFilter(): JSX.Element;
        protected renderPlaceholder(): JSX.Element;
        protected renderInputWithPlaceholder(): JSX.Element;
    }
}
declare namespace WebClient {
    namespace PartnerHelpers {
        const SearchIcon: ({}: {}) => JSX.Element;
    }
}
declare namespace WebClient {
    enum PartnerQueryTypes {
        QuickSearch = 0,
        LoadTree = 1,
        DirectorySearch = 2,
    }
    class IPartnerDataLoadingEventArgs {
        /** Из какого места контрола производится загрузка данных. */
        queryType: PartnerQueryTypes;
        /**
          * Запрашиваемая информация, включая текущий фильтр.
          *
          * В зависимости от значения {@link queryType} объект может быть представлен одним из производных интерфейсов:
          * 1) при `PartnerQueryTypes.QuickSearch` объект типа {@link IPartnerDirectorySearchRequest}
          * 2) при `PartnerQueryTypes.DirectorySearch` объект типа {@link IPartnerDirectorySearchRequest}
          * 3) при `PartnerQueryTypes.LoadTree` объект типа {@link IPartnerDirectoryTreeLoadRequest}
          */
        query: IPartnerDirectoryRequest;
        /**
          * Результат выполнения запроса.
          *
          * В зависимости от значения {@link queryType} объект может быть представлен одним из производных интерфейсов:
          * 1) при `PartnerQueryTypes.QuickSearch` объект типа {@link IPartnerDirectoryQuickSearchResponse}
          * 2) при `PartnerQueryTypes.DirectorySearch` объект типа {@link IPartnerDirectorySearchResponse}
          * 3) при `PartnerQueryTypes.LoadTree` объект типа {@link IPartnerDirectoryTreeLoadResponse}
          */
        result?: IPartnerDirectoryResponse;
    }
}
declare namespace WebClient {
    class IPartnerFilterChangeEventArgs {
        oldValue: IDepartmentInfo[];
        newValue: IDepartmentInfo[];
    }
}
declare namespace WebClient {
    /** @internal */
    interface IPartnerDirectoryTreeItem extends IPartnerDirectoryItem {
        expanded?: boolean;
        loadingState?: LoadingState;
        displayName?: string | JSX.Element;
        visible?: boolean;
        parentId?: string;
        level?: number;
    }
}
declare namespace WebClient {
    /** @internal */
    class PartnerTypeaheadVariant implements ITypeaheadVariant {
        item: IPartnerDirectoryItem;
        visualiser: PartnerHelpers.PartnerDirectoryItemVisualiser;
        constructor(item: IPartnerDirectoryItem, visualiser: PartnerHelpers.PartnerDirectoryItemVisualiser);
        readonly name: string;
        readonly value: string;
        readonly iconCssClass: string;
        readonly title: string;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Нумератор]{@link Numerator}.
     */
    class NumeratorParams extends InputBasedControlParams<INumberInfo> {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Правило генерации номера */
        generationRule: string;
        /** Разрешён ли ручной ввод */
        allowManualEdit: boolean;
    }
    /** @internal */
    interface NumeratorState extends NumeratorParams, InputBasedControlState<INumberInfo> {
        numeratorBinding: IBindingResult<INumberInfo>;
        bindingInfo: IBindingInfoExt;
    }
    /**
     * Класс элемента управления Нумератор.
     */
    class Numerator extends InputBasedControl<INumberInfo, NumeratorParams, NumeratorState> {
        protected createParams(): WebClient.NumeratorParams;
        private readonly numeratorImpl;
        private numeratorBinding;
        /** Set the name of the current value of the control */
        setNumberText(number: string): void;
        /** Send request to the server to generate new number, with sepcified rule.
        * With default parameters values equal to press generate button.
        * @param saveToTheCard Should be new number saved as the current card number or not.
        * @param ruleId Generation rule id.
        * @param saveCardBefore Should control save the card, before generate number.
        *        Saving a card required, because card fields can be used in number generation rule.
        */
        generateNewNumber(saveToTheCard?: boolean, saveCardBefore?: boolean): JQueryDeferred<INumberInfo>;
        /**
         * Clear number value
         */
        clearNumber(): JQueryDeferred<any>;
        protected getBindings(): IBindingResult<any>[];
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface NumeratorImplState extends InputBasedControlImplState<INumberInfo>, NumeratorState {
        requestHelper: RequestHelper;
        currentValueGeneratedNumber: string;
        disableRequiredCheck: boolean;
    }
    /** @internal */
    class NumeratorImpl extends InputBasedControlImpl<INumberInfo, NumeratorParams, NumeratorImplState> {
        constructor(props: NumeratorParams);
        generateNewNumber(saveToTheCard: boolean, prepareAction: () => JQueryDeferred<any>): JQueryDeferred<INumberInfo>;
        componentDidMount(): void;
        protected getTextValue(): string;
        protected onInputChange(event: any): void;
        validate(params: any): IValidationResult;
        clearNumber(): JQueryDeferred<any>;
        protected renderInto(props: NumeratorParams, container: HTMLElement): Numerator;
        protected readonly editAvailable: boolean;
        protected readonly withInputMode: boolean;
        protected getCssClass(): string;
        protected onGenerateClick(): void;
        protected onClearClick(): void;
        protected onValueClick(event: any): void;
        protected getButtons(): IBoxWithButtonsButtonInfo[];
        protected renderWithText(): JSX.Element;
        protected renderInputWithPlaceholder(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Число]{@link NumberControl}.
     */
    class NumberParams extends InputBasedControlParams<number> {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Количество символов дробной части. */
        fractionDigits?: number;
    }
    /** @internal */
    interface NumberState extends NumberParams, InputBasedControlState<number> {
        binding: IBindingResult<number>;
    }
    /**
     * Класс элемента управления Число.
     */
    class NumberControl extends InputBasedControl<number, NumberParams, NumberState> {
        protected createParams(): WebClient.NumberParams;
        private readonly RealNumberImpl;
        private RealNumberBinding;
        protected getBindings(): IBindingResult<any>[];
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface NumberImplState extends InputBasedControlImplState<number>, NumberState {
    }
    /** @internal */
    class NumberImpl extends InputBasedControlImpl<number, NumberParams, NumberImplState> {
        constructor(props: NumberParams);
        protected trimFractionDigits(val: number): number;
        protected numberToString(value: number, useGrouping: boolean): string;
        protected prepareValueForSettingToInput(value: number): string;
        protected getTextValue(): string;
        protected renderInto(props: NumberParams, container: HTMLElement): NumberControl;
        protected onInputChange(event: React.KeyboardEvent): void;
        protected setInputValue(value: string): void;
        protected setValue(value: number, redraw: boolean): void;
        protected attachInput(elem: HTMLInputElement): void;
        protected onInputBlur(event: React.FocusEvent): void;
        protected onInputKeyDown(ev: React.KeyboardEvent): void;
        protected renderInput(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [ConnectUserFoldersButtonScript]{@link ConnectUserFoldersButtonScript}.
     */
    class ConnectUserFoldersButtonScriptParams extends LayoutScriptParams {
        /** Название контрола с пользовательскими папками */
        userFoldersName: string;
        /** Название контрола кнопки настройки главного меню */
        configurationButtonName: string;
    }
    /**
     * Класс для связывания кнопки настройки главного меню с пользовательскими папками
     */
    class ConnectUserFoldersButtonScript extends LayoutScript<ConnectUserFoldersButtonScriptParams> {
        private userFolders;
        private button;
        protected createParams(): WebClient.ConnectUserFoldersButtonScriptParams;
        /**
         * Инициализация
         */
        init(): void;
        protected onFoldersAttached: (folders: string[]) => void;
        protected onAttachFolderClick: () => void;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [ConnectUserFoldersToConfigurableContainerScript]{@link ConnectUserFoldersToConfigurableContainerScript}.
     */
    class ConnectUserFoldersToConfigurableContainerScriptParams extends LayoutScriptParams {
        /** Название контрола с пользовательскими папками */
        userFoldersName: string;
        /** Название контрола контейнера с настраиваемыми элементами меню */
        configurableContainerName: string;
    }
    /**
     * Класс для связывания настраиваемого контейнера главного меню с пользовательскими папками
     */
    class ConnectUserFoldersToConfigurableContainerScript extends LayoutScript<ConnectUserFoldersToConfigurableContainerScriptParams> {
        private userFolders;
        private container;
        protected createParams(): WebClient.ConnectUserFoldersToConfigurableContainerScriptParams;
        /**
         * Инициализация
         */
        init(): void;
        protected onConfigurationSaving: (sender: any, args: CancelableEventArgs<IMainMenuSettings>) => void;
    }
}
declare namespace WebClient {
    /** Свойства для {@link PopoverHead} */
    interface IUserFolderItemWrapperProps {
        /** Содержимое UserFolderItemWrapper */
        children?: JSX.Element;
        /** При нажатии на кнопку закрытия элемента меню */
        onRemoveClick?: (ev: React.MouseEvent) => void;
    }
    const UserFolderItemWrapper: (props: IUserFolderItemWrapperProps) => JSX.Element;
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Страница]{@link BaseMainMenuItem}.
     */
    class BaseMainMenuItemParams extends PanelParams {
        /** Текст метки. */
        text: string;
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Класс иконки */
        iconClass?: string;
        /** Определяет, должен ли элемент управления отображаться в компактном режиме, в котором у элемента будет меньший визуальный размер. */
        compact?: boolean;
        /** Выбран ли элемент меню */
        isSelected?: boolean;
        /** Уровень вложенности элемента меню */
        level?: number;
        /** Количество уровней, на которое данный элемент меню и его подэлементы автоматически раскрываются */
        expandChildrenLevel?: number;
        /** Раскрыт ли элемент меню */
        isExpanded?: boolean;
        /** Можно ли настраивать элемент меню (например, скрывать) */
        configurable?: boolean;
        /** Находится ли меню в данный момент в режиме настройки или нет */
        isConfigurationModeEnabled?: boolean;
        /** Скрыт ли элемент меню через настройки */
        isConfiguredToHide?: boolean;
        /** Событие, возникающее перед началом переключения состояния раскрытости элемента меню */
        expandedToggling?: CancelableApiEvent<boolean>;
        /** Событие, возникающее после переключения состояния раскрытости элемента меню */
        expandedToggled?: BasicApiEvent<boolean>;
        /** Событие, возникающее перед выбором элемента меню */
        selecting?: CancelableApiEvent<boolean>;
        /** Событие, возникающее после выбора элемента меню */
        selected?: BasicApiEvent<boolean>;
        /** Событие, возникающее после переключения режима видимости элемента меню */
        configuredToHideToggled?: BasicApiEvent<boolean>;
    }
    /** @internal */
    interface BaseMainMenuItemState extends BaseMainMenuItemParams, PanelState {
    }
    /**
     * Класс элемента управления Страница.
     */
    abstract class BaseMainMenuItem<PropsT extends BaseMainMenuItemParams, StateT extends BaseMainMenuItemState> extends Panel<PropsT, StateT> {
        private baseMainMenuItemImpl();
        private textResourceKey;
        private compact;
        protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
        protected level: number | string;
        protected expanded: string | boolean;
        protected isConfigurationModeEnabled: boolean;
        protected isConfiguredToHide: boolean | string;
        protected configurable: boolean | string;
        protected expandChildrenLevel: string;
        /**
         * Является ли контрол контролом для главного меню, таким образом, их можно отличать от других.
         */
        readonly isMainMenuItem: boolean;
        protected readonly baseItemImpl: BaseMainMenuItemImpl<BaseMainMenuItemParams, any>;
        protected selected: boolean;
        /**
         * Раскрыть всех родительские элементы меню
         */
        expandAllParents(): void;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [UserFoldersMainMenuItem]{@UserFolders UserFoldersMainMenuItem}.
     */
    class UserFoldersMainMenuItemParams extends BaseMainMenuItemParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Показывать ли сам элемент меню или только его содержимое */
        showRoot?: boolean;
        /** Количество подуровней элемента, которые будут автоматически предзагружены */
        foldersPreloadLevel?: number;
        /** Компактное представление для папок */
        compactFolders?: boolean;
        /** Показывать ли иконки */
        showIcons?: boolean;
        /** Список папок */
        folders?: string[];
        /** Раскрыт ли элемент меню */
        isExpanded?: boolean;
    }
    /** @internal */
    interface UserFoldersMainMenuItemState extends UserFoldersMainMenuItemParams, BaseMainMenuItemState {
        /**
         * Отсоединить папки
         * @param folderIds Список идентификаторов отсоединяемых папок
         */
        detachFolders: (folderIds: string[]) => JQueryDeferred<{}>;
    }
    /**
     * Контрол для отображения папок в списке элементов главной панели.
     */
    class UserFoldersMainMenuItem extends BaseMainMenuItem<UserFoldersMainMenuItemParams, UserFoldersMainMenuItemState> implements IProxyControl {
        constructor(props: any);
        protected createParams(): WebClient.UserFoldersMainMenuItemParams;
        protected showRoot: string | boolean;
        protected expanded: string | boolean;
        /**
         * Является ли элемент меню проксирующим, то есть видны только подэлементы, а сам данный элемент меню не виден
         */
        readonly isProxyControl: boolean;
        /**
         * Отрисовка содержимого проксирующего элемента меню
         */
        renderProxyChildren(): JSX.Element[];
        protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
        protected level: number | string;
        /**
         * Перезагрузка
         */
        reload(): JQueryDeferred<{}>;
        /**
         * Отсоединить папки
         * @param folderIds Список идентификаторов отсоединяемых папок
         */
        detachFolders(folderIds: string[]): Promise<void>;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface BaseMainMenuItemImplState extends PanelImplState, BaseMainMenuItemState {
    }
    /** @internal */
    class BaseMainMenuItemImpl<PropsT extends BaseMainMenuItemParams, StateT extends BaseMainMenuItemImplState> extends PanelImpl<PropsT, StateT> {
        constructor(props: PropsT);
        componentWillMount(): void;
        onSelecting(): CancelableEventArgs<boolean>;
        onSelected(): void;
        onToggling(): CancelableEventArgs<boolean>;
        onToggled(): void;
        protected onClick(event: React.MouseEvent): void;
        protected getCssClass(): string;
        protected onConfiguredToHideToggled: () => void;
        protected getAutoExpandLevelsCount: () => number;
        protected getChildrenAutoExpandLevelsCount: () => number;
        protected canAutoExpand: () => boolean;
        protected autoExpand(): void;
        protected renderChildren(children?: ILayoutModel[]): JSX.Element[];
        renderSelfContentItems(): (JSX.Element | JSX.Element[])[];
        renderSelfContent(): JSX.Element;
        renderSelf(): JSX.Element;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface UserFoldersMainMenuItemImplState extends BaseMainMenuItemImplState, UserFoldersMainMenuItemState {
        detachHelper: RequestHelper;
    }
    /** @internal */
    class UserFoldersMainMenuItemImpl extends BaseMainMenuItemImpl<UserFoldersMainMenuItemParams, UserFoldersMainMenuItemImplState> {
        constructor(props: UserFoldersMainMenuItemParams);
        protected onClick(event: React.MouseEvent): void;
        onDetachClick(index: number): void;
        protected getChildrenAutoExpandLevelsCount: () => number;
        protected canAutoExpand: () => boolean;
        renderProxyChildren(): JSX.Element[];
        protected getCssClass(): string;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [Страница]{@link BaseNavigationMainMenuItem}.
    */
    class BaseNavigationMainMenuItemParams extends BaseMainMenuItemParams {
        /** Время последней активации элемента меню */
        lastActivationTimestamp?: Date;
        /** Адрес для перехода */
        navigationHref?: string;
    }
    /** @internal */
    interface BaseNavigationMainMenuItemState extends BaseNavigationMainMenuItemParams, BaseMainMenuItemState {
    }
    /**
     * Класс элемента управления Страница.
     */
    abstract class BaseNavigationMainMenuItem<PropsT extends BaseNavigationMainMenuItemParams, StateT extends BaseNavigationMainMenuItemState> extends BaseMainMenuItem<PropsT, StateT> {
        constructor(props: PropsT);
        /**
         * Инициализация
         */
        init(): void;
        readonly navigationHref: string;
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [FolderMainMenuItem]{@link FolderMainMenuItem}.
    */
    class FolderMainMenuItemParams extends BaseNavigationMainMenuItemParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Информация о папке */
        folderInfo?: IFolderItemNodeData;
        /** Цвет страницы */
        color?: string;
        /** Идентификатор папки */
        folderId?: string;
        /** Показывать ли подпапки */
        showSubfolders?: boolean;
        /** Показывать ли сам элемент меню или только его содержимое */
        showRoot?: boolean;
        /** Количество подуровней элемента, которые будут автоматически предзагружены */
        subfoldersPreloadLevel?: number;
        /** Компактное представление для подэлементов */
        compactChildren?: boolean;
        /** Показывать ли иконку */
        showIcon?: boolean;
        /** Показывать ли иконки подэлементов меню */
        showChildrenIcons?: boolean;
        /** */
        forceToggleIdent?: boolean;
        /** Раскрыт ли элемент меню */
        isExpanded?: boolean;
        /** Количество непросмотренных карточек в папке */
        unreadCount?: number;
        /** Принудительный поиск в виртуальной папке */
        forceVirtualFolderSearch?: boolean;
    }
    /** @internal */
    interface FolderMainMenuItemState extends FolderMainMenuItemParams, BaseNavigationMainMenuItemState {
        /**
         * Загрузка вместе с подэлементами до нужного уровня
         * @param levelCount Количество уровней
         */
        loadWithChildren(levelCount?: number): JQueryDeferred<IFolderItemNodeData>;
        /**
         * Генерирование имени контрола
         * @param folderId Идентификатор папки
         */
        generateControlName(folderId: string): string;
    }
    /**
     * Контрол для отображения ссылки на папку в списке элементов главной панели.
     */
    class FolderMainMenuItem extends BaseNavigationMainMenuItem<FolderMainMenuItemParams, FolderMainMenuItemState> implements IProxyControl {
        constructor(props: any);
        /**
         * Является ли контрол контролом для папки главного меню, таким образом их можно отличать от других.
         */
        readonly isFolderMainMenuItem: boolean;
        /**
         * Инициализация
         */
        init(): void;
        /**
         * Деинициализация
         */
        deinit(): void;
        protected createParams(): WebClient.FolderMainMenuItemParams;
        protected showSubfolders: string | boolean;
        protected showRoot: string | boolean;
        protected subfoldersPreloadLevel: string | number;
        protected expanded: string | boolean;
        protected compactChildren: string | boolean;
        protected showIcon: string | boolean;
        protected showChildrenIcons: string | boolean;
        protected forceToggleIdent: string | boolean;
        protected forceVirtualFolderSearch: string | boolean;
        protected folderInfo: IFolderItemNodeData;
        /**
         * Является ли элемент меню проксирующим, то есть видны только подэлементы, а сам данный элемент меню не виден
         */
        readonly isProxyControl: boolean;
        /**
         * Отрисовка содержимого проксирующего элемента меню
         */
        renderProxyChildren(): JSX.Element[];
        /**
         * Загрузка подпапок на указанное количество уровней
         * @param levelsCount Количество уровней для загрузки
         */
        loadSubfoldersDownTo(levelsCount: number): Promise<void>;
        protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
        protected level: number | string;
        protected isConfiguredToHide: boolean;
        componentDidUpdate(): void;
        /**
         * Подписывание на событие изменение счётчика содержимого для данной папки
         */
        subscribeToUnreadCount(): void;
        /**
         * Отписывание от события изменения счётчика содержимого для данной папки
         */
        unsubscribeFromUnreadCount(): void;
        /**
         * При изменении счётчика содержимого данной папки
         */
        onUnreadCountChanged(): void;
        /**
         * Запрос на пересчёт счётчика содержимого для данной папки
         */
        addUnreadCountRequest(): void;
        private generateControlName;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [StandardMainMenuContainer]{@link StandardMainMenuContainer}.
     */
    class StandardMainMenuContainerParams extends BaseMainMenuItemParams {
    }
    /** @internal */
    interface StandardMainMenuContainerState extends StandardMainMenuContainerParams, BaseMainMenuItemState {
    }
    /**
     * Контейнер для хранения элементов меню
     */
    class StandardMainMenuContainer extends BaseMainMenuItem<StandardMainMenuContainerParams, StandardMainMenuContainerState> {
        protected createParams(): WebClient.StandardMainMenuContainerParams;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface StandardMainMenuContainerImplState extends BaseMainMenuItemImplState, StandardMainMenuContainerState {
    }
    /** @internal */
    class StandardMainMenuContainerImpl extends BaseMainMenuItemImpl<StandardMainMenuContainerParams, StandardMainMenuContainerImplState> {
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [Ссылка]{@link LinkMainMenuItem}.
    */
    class LinkMainMenuItemParams extends BaseNavigationMainMenuItemParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /**
         * Значение атрибута href для html-элемента `<a>`.
         * Для указания страницы Web-клиента используйте путь, начинающийся с `#`. Например, `#/Dashboard`.
         */
        href: string;
        /** Значение атрибута hreflang для html-элемента `<a>` */
        hreflang?: string;
        /** Значение атрибута target для html-элемента `<a>` */
        target?: string;
        /** Значение атрибута accesskey для html-элемента `<a>` */
        accesskey?: string;
        /** Значение атрибута download для html-элемента `<a>` */
        download?: boolean;
        /** Значение атрибута type для html-элемента `<a>` */
        type?: string;
    }
    /** @internal */
    interface LinkMainMenuItemState extends LinkMainMenuItemParams, BaseNavigationMainMenuItemState {
    }
    /**
     * Контрол для отображения ссылки на страницу Web-клиента в списке элементов главной панели.
     */
    class LinkMainMenuItem extends BaseNavigationMainMenuItem<LinkMainMenuItemParams, LinkMainMenuItemState> {
        protected createParams(): WebClient.LinkMainMenuItemParams;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [SearchResultsMainMenuItem]{@link SearchResultsMainMenuItem}.
    */
    class SearchResultsMainMenuItemParams extends LinkMainMenuItemParams {
        /** Адрес страницы поиска */
        href: string;
        /** Классы для иконок */
        iconClass: string;
    }
    /** @internal */
    interface SearchResultsMainMenuItemState extends LinkMainMenuItemState {
    }
    /**
     * Контрол для отображения ссылки на результаты поиска в списке элементов главной панели.
     */
    class SearchResultsMainMenuItem extends LinkMainMenuItem {
        constructor(props: any);
        protected createParams(): WebClient.SearchResultsMainMenuItemParams;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [RightMainMenuItemPanel]{@GroupFolders RightMainMenuItemPanel}.
     */
    class RightMainMenuItemPanelParams extends PanelParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Расположение */
        location?: RightMainMenuItemPanelLocation;
    }
    /** @internal */
    interface RightMainMenuItemPanelState extends RightMainMenuItemPanelParams, PanelState {
    }
    /**
     * Контрол для отображения кнопок поверх пунктов главного меню в правой части.
     */
    class RightMainMenuItemPanel extends Panel<RightMainMenuItemPanelParams, RightMainMenuItemPanelState> {
        protected createParams(): WebClient.RightMainMenuItemPanelParams;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface RightMainMenuItemPanelImplState extends PanelImplState, RightMainMenuItemPanelState {
    }
    /** @internal */
    class RightMainMenuItemPanelImpl extends PanelImpl<RightMainMenuItemPanelParams, RightMainMenuItemPanelImplState> {
        constructor(props: RightMainMenuItemPanelParams);
        getLocation(location: string): MainMenuHelpers.OverlapPanelLocation;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    type RightMainMenuItemPanelLocation = "above" | "below";
    class RightMainMenuItemPanelLocations {
        static Above: string;
        static Below: string;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Страница]{@link Page}.
     */
    class MasterGroupMainMenuItemParams extends BaseMainMenuItemParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Раскрыт ли элемент меню */
        isExpanded?: boolean;
        /** Включен ли режим отображения для мобильных устройств */
        enableMobileMode?: boolean;
        /** Показывать ли сам элемент меню или только его содержимое */
        showRoot?: boolean;
    }
    /** @internal */
    interface MasterGroupMainMenuItemState extends MasterGroupMainMenuItemParams, BaseMainMenuItemState {
    }
    /**
     * Контрол для отображения группы элементов в главной панели
     */
    class MasterGroupMainMenuItem extends BaseMainMenuItem<MasterGroupMainMenuItemParams, MasterGroupMainMenuItemState> implements IProxyControl {
        constructor(props: any);
        protected createParams(): WebClient.MasterGroupMainMenuItemParams;
        /**
         * Инициализация
         */
        init(): void;
        protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
        protected level: number | string;
        /**
         * Является ли элемент меню проксирующим, то есть видны только подэлементы, а сам данный элемент меню не виден
         */
        readonly isProxyControl: boolean;
        /**
         * Отрисовка содержимого проксирующего элемента меню
         */
        renderProxyChildren(): JSX.Element[];
        protected onChildToggled(child: LayoutControl): void;
        protected showRoot: string | boolean;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface MasterGroupMainMenuItemImplState extends BaseMainMenuItemImplState, MasterGroupMainMenuItemState {
    }
    /** @internal */
    class MasterGroupMainMenuItemImpl extends BaseMainMenuItemImpl<MasterGroupMainMenuItemParams, MasterGroupMainMenuItemImplState> {
        constructor(props: MasterGroupMainMenuItemParams);
        protected onClick(event: React.MouseEvent): void;
        protected getCssClass(): string;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [ConnectPinButtonToMainMenuScript]{@link ConnectPinButtonToMainMenuScript}.
     */
    class ConnectPinButtonToMainMenuScriptParams extends LayoutScriptParams {
        /** Название контрола с главным меню */
        mainMenuName: string;
        /** Название контрола с кнопкой прикрепления меню */
        pinButtonName: string;
        /** Класс иконки для прикрепления меню */
        pinIconClassName?: string;
        /** Класс иконки для открепления меню */
        unpinIconClassName?: string;
    }
    /**
     * Класс для связывания главного меню и кнопки его прикрепления/открепления
     */
    class ConnectPinButtonToMainMenuScript extends LayoutScript<ConnectPinButtonToMainMenuScriptParams> {
        private mainMenu;
        private pinButton;
        protected createParams(): WebClient.ConnectPinButtonToMainMenuScriptParams;
        /**
         * Инициализация
         */
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
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [Основное меню]{@link MainMenu}.
    */
    class MainMenuParams extends PanelParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Прикреплено ли меню */
        isPinned?: boolean;
        /** Событие, возникающее после появления/скрытия меню */
        toggle?: BasicApiEvent<boolean>;
    }
    /** @internal */
    interface MainMenuState extends MainMenuParams, PanelState {
    }
    /**
     * Класс элемента управления Основное меню.
     */
    class MainMenu extends Panel<MainMenuParams, MainMenuState> {
        protected createParams(): WebClient.MainMenuParams;
        protected isPinned: boolean;
        protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface MainMenuState extends PanelState, BaseControlState {
    }
    /** @internal */
    class MainMenuImpl extends PanelImpl<MainMenuParams, MainMenuState> {
        constructor(props: MainMenuParams);
        componentDidMount(): void;
        private onSidebarToggle;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * Закрывает боковую панель главного меню при переходе на другой роут.
     */
    class MainMenuRouteHandler implements IRouteHandler<any> {
        name: string;
        mountRoute?(data: any, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
        unmountRoute(data: any, routeType: RouteType): JQueryDeferred<{}>;
    }
}
declare namespace WebClient {
    /** @internal */
    interface BaseNavigationMainMenuItemImplState extends BaseMainMenuItemImplState, BaseNavigationMainMenuItemState {
    }
    /** @internal */
    abstract class BaseNavigationMainMenuItemImpl<PropsT extends BaseNavigationMainMenuItemParams, StateT extends BaseNavigationMainMenuItemImplState> extends BaseMainMenuItemImpl<PropsT, StateT> {
        constructor(props: PropsT);
        onContentClick(): void;
        protected getCssClass(): string;
        abstract getNavigationHref(): string;
        renderSelfContent(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface LinkMainMenuItemImplState extends BaseNavigationMainMenuItemImplState, LinkMainMenuItemState {
    }
    /** @internal */
    class LinkMainMenuItemImpl extends BaseNavigationMainMenuItemImpl<LinkMainMenuItemParams, LinkMainMenuItemImplState> {
        constructor(props: LinkMainMenuItemParams);
        getNavigationHref(): string;
        renderSelfContent(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [Страница].
    */
    class LayoutPageMainMenuItemParams extends BaseMainMenuItemParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Имя позиции, которое будет использовано для получения разметки */
        position: string;
        /** Заголовок страницы */
        header: string;
        /** Цвет страницы */
        color: string;
    }
    /** @internal */
    interface LayoutPageMainMenuItemState extends LayoutPageMainMenuItemParams, BaseMainMenuItemState {
    }
    /**
     * Класс элемента управления Страница.
     */
    class LayoutPageMainMenuItem extends BaseMainMenuItem<LayoutPageMainMenuItemParams, LayoutPageMainMenuItemState> {
        protected createParams(): WebClient.LayoutPageMainMenuItemParams;
        private headerResourceKey;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface LayoutPageMainMenuItemImplState extends BaseMainMenuItemImplState, LayoutPageMainMenuItemState {
    }
    /** @internal */
    class LayoutPageMainMenuItemImpl extends BaseMainMenuItemImpl<LayoutPageMainMenuItemParams, LayoutPageMainMenuItemImplState> {
        constructor(props: LayoutPageMainMenuItemParams);
        renderSelfContent(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [Страница]{@link Page}.
    */
    class GroupMainMenuItemParams extends BaseMainMenuItemParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Раскрыт ли элемент меню */
        isExpanded?: boolean;
        /** Показывать ли сам элемент меню или только его содержимое */
        showRoot?: boolean;
    }
    /** @internal */
    interface GroupMainMenuItemState extends GroupMainMenuItemParams, BaseMainMenuItemState {
    }
    /**
     * Контрол для отображения группы элементов в главной панели
     */
    class GroupMainMenuItem extends BaseMainMenuItem<GroupMainMenuItemParams, GroupMainMenuItemState> implements IProxyControl {
        protected showRoot: string | boolean;
        protected level: number | string;
        /**
         * Является ли элемент меню проксирующим, то есть видны только подэлементы, а сам данный элемент меню не виден
         */
        readonly isProxyControl: boolean;
        /**
         * Отрисовка содержимого проксирующего элемента меню
         */
        renderProxyChildren(): JSX.Element[];
        protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
        protected createParams(): WebClient.GroupMainMenuItemParams;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface GroupMainMenuItemImplState extends BaseMainMenuItemImplState, GroupMainMenuItemState {
    }
    /** @internal */
    class GroupMainMenuItemImpl extends BaseMainMenuItemImpl<GroupMainMenuItemParams, GroupMainMenuItemImplState> {
        constructor(props: GroupMainMenuItemParams);
        protected onClick(event: React.MouseEvent): void;
        protected canAutoExpand: () => boolean;
        protected getChildrenAutoExpandLevelsCount: () => number;
        renderProxyChildren(): JSX.Element[];
        protected getCssClass(): string;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [GroupFoldersMainMenuItem]{@GroupFolders GroupFoldersMainMenuItem}.
     */
    class GroupFoldersMainMenuItemParams extends BaseMainMenuItemParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Раскрыт ли элемент меню */
        isExpanded?: boolean;
        /** Показывать ли сам элемент меню или только его содержимое */
        showRoot?: boolean;
        /** Количество подуровней элемента, которые будут автоматически предзагружены */
        foldersPreloadLevel?: number;
        /** Компактное представление для папок */
        compactFolders?: boolean;
        /** Показывать ли иконки */
        showIcons?: boolean;
    }
    /** @internal */
    interface GroupFoldersMainMenuItemState extends GroupFoldersMainMenuItemParams, BaseMainMenuItemState {
    }
    /**
     * Контрол для отображения папок группы/роли в списке элементов главной панели.
     */
    class GroupFoldersMainMenuItem extends BaseMainMenuItem<GroupFoldersMainMenuItemParams, GroupFoldersMainMenuItemState> implements IProxyControl {
        protected createParams(): WebClient.GroupFoldersMainMenuItemParams;
        protected showRoot: string | boolean;
        protected expanded: string | boolean;
        protected level: number | string;
        /**
         * Является ли элемент меню проксирующим, то есть видны только подэлементы, а сам данный элемент меню не виден
         */
        readonly isProxyControl: boolean;
        /**
         * Отрисовка содержимого проксирующего элемента меню
         */
        renderProxyChildren(): JSX.Element[];
        protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface GroupFoldersMainMenuItemImplState extends BaseMainMenuItemImplState, GroupFoldersMainMenuItemState {
    }
    /** @internal */
    class GroupFoldersMainMenuItemImpl extends BaseMainMenuItemImpl<GroupFoldersMainMenuItemParams, GroupFoldersMainMenuItemImplState> {
        constructor(props: GroupFoldersMainMenuItemParams);
        protected onClick(event: React.MouseEvent): void;
        protected canAutoExpand: () => boolean;
        protected getChildrenAutoExpandLevelsCount: () => number;
        renderProxyChildren(): JSX.Element[];
        protected getCssClass(): string;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface FolderMainMenuItemImplState extends BaseNavigationMainMenuItemImplState, FolderMainMenuItemState {
        loader: RequestHelper;
        controlNames: {
            [folderId: string]: string;
        };
    }
    /** @internal */
    class FolderMainMenuItemImpl extends BaseNavigationMainMenuItemImpl<FolderMainMenuItemParams, FolderMainMenuItemImplState> {
        constructor(props: FolderMainMenuItemParams);
        generateControlName(folderId: string): void;
        protected getAutoExpandLevelsCount: () => number;
        protected getChildrenAutoExpandLevelsCount: () => number;
        protected canAutoExpand: () => boolean;
        protected autoExpand(): Promise<void>;
        renderChildren(): JSX.Element[];
        protected hasSubfolders(): boolean;
        loadChildren(levelsDown?: number): JQueryDeferred<IFolderItemNodeData>;
        onToggleClick(ev: React.MouseEvent): void;
        toggleInternal(): Promise<void>;
        getNavigationHref(): string;
        onContentClick(): void;
        protected getIconClass(): string;
        protected getUnreadCount(): string | undefined;
        renderSelfContent(): JSX.Element;
        protected getCssClass(): string;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    class FolderMainMenuItemRouteHandler implements IRouteHandler<IFolderRouteData> {
        static Components: {
            [folderId: string]: FolderMainMenuItem[];
        };
        name: string;
        prepareRouteDataLoad?(routeData: Partial<IFolderRouteData>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
        static loadSelectedFolder(parentNodes: string[]): void;
        static register(folderId: string, control: FolderMainMenuItem): void;
    }
}
declare namespace WebClient {
    enum FolderNodeStyle {
        FolderView = 1,
        FolderCard = 2,
        FolderURL = 4,
        FolderDigest = 8,
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [CustomHtmlPageMainMenuItem]{@CustomHtmlPage CustomHtmlPageMainMenuItem}.
    */
    class CustomHtmlPageMainMenuItemParams extends BaseNavigationMainMenuItemParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Адрес, по которому располагается произвольная html страница */
        url: string;
        /** Заголовок страницы */
        header: string;
        /** Цвет страницы */
        color: string;
    }
    /** @internal */
    interface CustomHtmlPageMainMenuItemState extends CustomHtmlPageMainMenuItemParams, BaseNavigationMainMenuItemState {
    }
    /**
     * Контрол для отображения ссылки на страницу Web-клиента в списке элементов главной панели.
     */
    class CustomHtmlPageMainMenuItem extends BaseNavigationMainMenuItem<CustomHtmlPageMainMenuItemParams, CustomHtmlPageMainMenuItemState> {
        protected createParams(): WebClient.CustomHtmlPageMainMenuItemParams;
        private headerResourceKey;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface CustomHtmlPageMainMenuItemImplState extends BaseNavigationMainMenuItemImplState, CustomHtmlPageMainMenuItemState {
    }
    /** @internal */
    class CustomHtmlPageMainMenuItemImpl extends BaseNavigationMainMenuItemImpl<CustomHtmlPageMainMenuItemParams, CustomHtmlPageMainMenuItemImplState> {
        constructor(props: CustomHtmlPageMainMenuItemParams);
        getNavigationHref(): string;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [ConfigurableMainMenuContainer]{@link ConfigurableMainMenuContainer}.
     */
    class ConfigurableMainMenuContainerParams extends BaseMainMenuItemParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Настройки главного меню */
        mainMenuSettings: IMainMenuSettings;
        /** Началась ли настройка меню */
        isConfigurationStarted?: boolean;
        /** Событие, возникающее перед началом настройки меню */
        configurationStarting?: CancelableApiEvent<void>;
        /** Событие, возникающее после начала настройки меню */
        configurationStared?: BasicApiEvent<void>;
        /** Событие, возникающее перед сохранением настроек меню */
        configurationSaving?: CancelableApiEvent<IMainMenuSettings>;
        /** Событие, возникающее после сохранении настроек меню */
        configurationSaved?: BasicApiEvent<IMainMenuSettings>;
        /** Событие, возникающее перед завершением настройки меню */
        configurationFinishing?: CancelableApiEvent<boolean>;
        /** Событие, возникающее после завершения настройки меню */
        configurationFinished?: BasicApiEvent<boolean>;
    }
    /** @internal */
    interface ConfigurableMainMenuContainerState extends ConfigurableMainMenuContainerParams, BaseMainMenuItemState {
        /** Список контролов для скрытия */
        controlsToHide: BaseMainMenuItem<BaseMainMenuItemParams, any>[];
        /** Принятие изменений настройки меню */
        acceptChanges: () => void;
        /** Отмена изменений настройки меню */
        cancelChanges: () => void;
    }
    /**
     * Контейнер для хранения элементов меню, реализующий логику скрытия элементов меню пользователем.
     */
    class ConfigurableMainMenuContainer extends BaseMainMenuItem<ConfigurableMainMenuContainerParams, ConfigurableMainMenuContainerState> {
        constructor(props: any);
        protected createParams(): WebClient.ConfigurableMainMenuContainerParams;
        protected mainMenuSettings: IMainMenuSettings;
        protected childrenHandler: ILayoutModel[];
        /**
         * Скрытие элементов меню, указанных в настройках меню
         * @param current Элемент меню
         */
        hideItemModels(current: ILayoutModel): void;
        /** Начало настройки */
        beginConfiguration(): void;
        /** Сброс настроек */
        resetSettings(): Promise<void>;
        protected toggleConfigurationMode(current: LayoutControl, enabled: boolean): void;
        /**
         * Завершение настроек
         * @param accepted Приняты ли изменения или отменены
         */
        finishConfigurationMode(accepted: boolean): Promise<void>;
        protected applyMainMenuSettings(settings: IMainMenuSettings): void;
        protected onControlConfigredToHide: (sender: BaseMainMenuItem<BaseMainMenuItemParams, any>, configuredToHide: boolean) => void;
        protected saveSettings(settings: IMainMenuSettings): JQueryDeferred<void>;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ConfigurableMainMenuContainerImplState extends BaseMainMenuItemImplState, ConfigurableMainMenuContainerState {
    }
    /** @internal */
    class ConfigurableMainMenuContainerImpl extends BaseMainMenuItemImpl<ConfigurableMainMenuContainerParams, ConfigurableMainMenuContainerImplState> {
        constructor(props: ConfigurableMainMenuContainerParams);
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [ConnectConfigurableMainMenuContainerButtonScript]{@link ConnectConfigurableMainMenuContainerButtonScript}.
     */
    class ConnectConfigurableMainMenuContainerButtonScriptParams extends LayoutScriptParams {
        /** Название контрола контейнера с настраиваемыми элементами меню */
        configurableContainerName: string;
        /** Название контрола кнопки для настройки меню */
        buttonName: string;
    }
    /**
     * Класс для связывания настраиваемого контейнера главного меню и кнопки настройки
     */
    class ConnectConfigurableMainMenuContainerButtonScript extends LayoutScript<ConnectConfigurableMainMenuContainerButtonScriptParams> {
        private container;
        private pinButton;
        protected createParams(): WebClient.ConnectConfigurableMainMenuContainerButtonScriptParams;
        /**
         * Инициализация
         */
        init(): void;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Кнопка]{@link ConfigurableMainMenuContainerButton}.
     */
    class ConfigurableMainMenuContainerButtonParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Текст всплывающей подсказки. */
        tip?: string;
        /** Имя CSS класса, в котором определен путь к иконке, отображаемой в кнопке. */
        iconClass?: string;
        menuExpanded?: boolean;
        showBeginConfigurationItem?: boolean;
        showRestoreItem?: boolean;
        showAttachFolderItem?: boolean;
        beginConfigurationClicked?: BasicApiEvent<void>;
        restoreClicked?: BasicApiEvent<void>;
        attachFolderClicked?: BasicApiEvent<void>;
    }
    /** @internal */
    interface ConfigurableMainMenuContainerButtonState extends ConfigurableMainMenuContainerButtonParams, BaseControlState {
    }
    /**
     * Класс элемента управления Кнопка.
     *
     * Добавляет в web-разметку кнопку в виде иконки для вызова произвольной функции из скрипта карточки.
     */
    class ConfigurableMainMenuContainerButton extends BaseControl<ConfigurableMainMenuContainerButtonParams, ConfigurableMainMenuContainerButtonState> {
        constructor(props: ConfigurableMainMenuContainerButtonParams);
        protected createParams(): WebClient.ConfigurableMainMenuContainerButtonParams;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ConfigurableMainMenuContainerButtonImplState extends BaseControlImplState, ConfigurableMainMenuContainerButtonState {
    }
    /** @internal */
    class ConfigurableMainMenuContainerButtonImpl extends BaseControlImpl<ConfigurableMainMenuContainerButtonParams, ConfigurableMainMenuContainerButtonImplState> {
        constructor(props: ConfigurableMainMenuContainerButtonParams);
        protected handleClick(event: React.MouseEvent): void;
        protected onToggleMenuClick: () => void;
        protected onCloseMenu: () => void;
        protected onBeginConfigurationClick: () => void;
        protected onRestoreClick: () => void;
        protected onAttachFolderClick: () => void;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    type BaseNavigationItem = BaseNavigationMainMenuItem<BaseNavigationMainMenuItemParams, any>;
    class BaseNavigationMenuItemRouteHandler implements IRouteHandler<any> {
        private static Components;
        name: string;
        mountRoute?(routedata: any, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
        unmountRoute?(data: any, routeType: RouteType): JQueryDeferred<{}>;
        private static unselectAllComponents();
        private static select(route);
        static register(control: BaseNavigationItem): void;
    }
}
declare namespace WebClient {
    /**
     * Публичные свойства для контрола {@link Links}.
     */
    class LinksParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Список ссылок */
        links?: LinkItem[];
        /** Доступно ли создание ссылок */
        createLinkAvailable?: boolean;
        /** Доступно ли добавление ссылок */
        addLinkAvailable?: boolean;
        /** Доступно ли удаление ссылок */
        deleteLinkAvailable?: boolean;
        /** Доступно ли изменение ссылок */
        editLinkAvailable?: boolean;
        /** Заголовок блока ссылок */
        header?: string;
        /** Отображать ли раскрытым */
        showOpened?: boolean;
        /** Хранить ли сильную ссылку */
        saveHardLink?: boolean;
        /** Доступно ли создание ссылок */
        createLinkEnabled?: boolean;
        /** Доступно ли добавление существующих ссылок */
        addLinkEnabled?: boolean;
        /** Раскрыт ли контрол */
        isExpanded?: boolean;
        /** Раскрыта ли командная панель */
        commandBarExpanded?: boolean;
        /** Типы ссылок при добавлении ссылки */
        addLinkLinkTypes?: ILinkType[];
        /** Виды карточек при создании ссылки */
        createLinkKinds?: IAllowedCardKind[];
        /** Типы ссылок при создании ссылки  */
        createLinkLinkTypes?: ILinkType[];
        /** Типы карточек при добавлении ссылки */
        addLinkTypes?: IAllowedCardType[];
        /** Событие возникает перед добавлением ссылки на существующую карточку. */
        linkAdding?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает перед удалением ссылки. */
        linkDeleting?: CancelableApiEvent<ILinkEventArgs>;
        /** Событие возникает перед добавлением ссылки на новую карточку. */
        linkCardCreating?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает перед открытием тултипа с информацией о карточке. */
        linkInfoOpening?: CancelableApiEvent<ILinkEventArgs>;
        /** Событие возникает перед закрытием тултипа с информацией о карточке. */
        linkInfoClosing?: CancelableApiEvent<ILinkEventArgs>;
        /** Событие возникает перед редактированием комментария к ссылке. */
        linkInfoEditing?: CancelableApiEvent<ILinkEventArgs>;
        /** Событие возникает перед открытием предпросмотра файла. */
        linkFilePreviewing?: CancelableApiEvent<ILinkEventArgs>;
        /** Событие возникает перед открытием карточки. */
        linkCardOpening?: CancelableApiEvent<ILinkEventArgs>;
        /** Событие возникает перед сворачиванием контрола. */
        collapsing?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает перед разворачивании контрола. */
        expanding?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает при добавлении ссылки на существующую карточку. */
        linkAdded?: BasicApiEvent<ILinkEventArgs>;
        /** Событие возникает при удалении ссылки. */
        linkDeleted?: BasicApiEvent<ILinkEventArgs>;
        /** Событие возникает при редактировании комментария к ссылке. */
        linkInfoEdited?: BasicApiEvent<ILinkEventArgs>;
        /** Событие возникает при открытии предпросмотра файла. */
        linkFilePreviewed?: BasicApiEvent<ILinkEventArgs>;
        /** Событие возникает при сворачивании контрола. */
        collapsed?: BasicApiEvent<IEventArgs>;
        /** Событие возникает при разворачивании контрола. */
        expanded?: BasicApiEvent<IEventArgs>;
    }
    /** @internal */
    interface LinksState extends LinksParams, BaseControlState {
        model: ILinksDataModel;
        bindingInfo: ISimpleBindingInfo;
        createLinkOperationBinding: string;
        addLinkOperationBinding: string;
    }
    /**
     * Представляет элемент управления Ссылки
     */
    class Links extends BaseControl<LinksParams, LinksState> {
        protected createParams(): WebClient.LinksParams;
        private readonly linksImpl;
        private addLinkEnabled;
        private createLinkEnabled;
        private binding;
        private createLinkOperationBinding;
        private addLinkOperationBinding;
        private removeLinkOperationBinding;
        private editLinkOperationBinding;
        private createLinkLinkTypes;
        private createLinkKinds;
        private addLinkLinkTypes;
        private addLinkTypes;
        private showOpened;
        /** Открывает диалог для возможности добавления существующей карточки. */
        openAddExitingCardDialog(): void;
        /** Предоставляет доступ к хранилищу операций редактирования. */
        openAddNewCardDialog(): void;
        /** Открывает диалог для предпросмотра переданного файла. */
        openFilePreview(linkItem: LinkItem): void;
        /** Возвращает URL переданной ссылки. */
        getLinkUrl(linkItem: LinkItem): string;
        /** Удаляет переданную ссылку. */
        deleteLink(linkItem: LinkItem): void;
        protected setParamValues(props: BaseControlParams, initial: boolean): void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface LinksImplState extends BaseControlImplState, LinksState {
        addExistingCardLinkDialog: ExistingCardLinkDialog;
    }
    /** @internal */
    class LinksImpl extends BaseControlImpl<LinksParams, LinksImplState> {
        requestHelper: RequestHelper;
        constructor(props: LinksParams);
        componentDidMount(): void;
        componentWillUnmount(): void;
        protected closeAllMenus(): void;
        protected loadLinksModel(model: ILinksDataModel): void;
        protected model: ILinksDataModel;
        protected getCardCreateLink(cardTypeId: string, kindId: string, linkTypeId: string): string;
        protected onDocumentClick(ev: any): void;
        protected onLinkClick(linkItem: LinkItem): void;
        protected onHeaderClick(): void;
        protected onCollapsed(): void;
        protected onExpanded(): void;
        protected onCommandBarClick(ev?: React.MouseEvent): void;
        onAddNewCardLinkClick(ev?: React.MouseEvent): void;
        onAddExistingCardLinkClick(ev?: React.MouseEvent): void;
        protected onViewFileMenuClick(linkItem: LinkItem): void;
        onDeleteMenuClick(linkItem: LinkItem): void;
        protected onLinkMenuClick(linkItem: LinkItem): void;
        protected getLinkIconClass(linkItem: LinkItem): "dv-ico icon-spin loader-animate" | "dv-ico ico-dv-card" | "dv-ico ico-file";
        protected hideInfoPopover(linkItem: LinkItem): void;
        protected showInfoPopover(linkItem: LinkItem): void;
        protected onLinkInfoEdited(linkItem: LinkItem): void;
        protected renderHeader(): JSX.Element;
        protected renderLinksTable(): JSX.Element;
        protected renderSettingsMenu(linkItem: LinkItem): JSX.Element;
        renderControl(): JSX.Element;
        isExpanded: boolean;
        commandBarExpanded: boolean;
        openFilePreview(linkItem: LinkItem): void;
        getLinkUrl(linkItem: LinkItem): string;
    }
}
declare namespace WebClient {
    /** @internal */
    interface INewCardLinkDialogProps {
        kinds: IKindModel[];
        linkTypes: ILinkType[];
        onKindSelected?: (sender: NewCardLinkDialog, args: NewCardLinkDialogArgs) => void;
        onLinkTypeSelect?: (sender: NewCardLinkDialog, args: NewCardLinkDialogArgs) => void;
    }
}
declare namespace WebClient {
    /** @internal */
    interface INewCardLinkDialogState {
        selectedKind: IKindModel;
        selectedLinkType: ILinkType;
        treeNodes: KindTreeNodeData[];
        tree: Tree;
        root: HTMLElement;
    }
}
declare namespace WebClient {
    /** @internal */
    class NewCardLinkDialog extends React.Component<INewCardLinkDialogProps, INewCardLinkDialogState> {
        buttonOkEvent: SimpleEvent<NewCardLinkDialogArgs>;
        kindSelectedEvent: SimpleEvent<NewCardLinkDialogArgs>;
        constructor(props: INewCardLinkDialogProps);
        readonly buttonOkClicked: SimpleEvent<NewCardLinkDialogArgs>;
        readonly selectedKind: IKindModel;
        readonly selectedLinkType: ILinkType;
        static ShowDialog(kinds: IKindModel[], linkTypes: ILinkType[], uniqueControlKey: string, okCallback: (sender: any, data: NewCardLinkDialogArgs) => void): void;
        protected loadTreeNodes(kinds: IKindModel[]): KindTreeNodeData[];
        protected attachTree(tree: Tree): void;
        protected onKindSelected(sender: any, node: TreeNode): void;
        protected onLinkTypeSelect(val: LinkTypeComboBoxVariant): void;
        protected getLinkTypeComboBoxProps(): any;
        componentDidMount(): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    class LinkInfoPopover extends React.Component<ILinkInfoPopoverProps, ILinkInfoPopoverState> {
        constructor(props: ILinkInfoPopoverProps);
        onTextClick(event: React.MouseEvent): void;
        beginEdit(): void;
        saveComment(): void;
        onSaveClick(): void;
        onCommentChange(event: React.SyntheticEvent): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ILinkInfoPopoverProps {
        linkItem: LinkItem;
        bindingInfo: ISimpleBindingInfo;
        iconClass: string;
        editAvailable: boolean;
        onSaved: (model: ILinksDataModel) => void;
        maxCommentLength?: number;
        linkInfoEditing: CancelableEvent<ILinkEventArgs>;
        linkInfoEdited: (item: LinkItem) => void;
        ownedLayout: Layout;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ILinkInfoPopoverState {
        editInProcess: boolean;
        saving: boolean;
        commentText: string;
        tooLongError: boolean;
        maxCommentLength: number;
        commentEditInput: HTMLTextAreaElement;
    }
}
declare namespace WebClient {
    /** @internal */
    class ExistingCardLinkDialog {
        ownedLayout: Layout;
        bindingInfo: ISimpleBindingInfo;
        editOperation: string;
        saveHardLink: boolean;
        allowedLinkTypes: string[];
        allowedCardTypes: string[];
        constructor(ownedLayout: Layout, bindingInfo: ISimpleBindingInfo, saveHardLink: boolean, allowedLinkTypes: string[], allowedCardTypes: string[], editOperation: string);
        showExistingCardLinkDialog(doneCallback: (model: ILinksDataModel) => void): void;
    }
}
declare namespace WebClient {
    interface ILinkEventArgs {
        linkItem: ILinkItem;
    }
}
declare namespace WebClient {
    interface NewCardLinkDialogArgs {
        kind: IKindModel;
        linkType: ILinkType;
    }
}
declare namespace WebClient {
    enum LinkItemState {
        Saving = 0,
        Saved = 1,
    }
}
declare namespace WebClient {
    enum LinkKind {
        Card = 0,
        File = 1,
    }
}
declare namespace WebClient {
    interface ILinkItem {
        data: ILinkItemData;
        state: LinkItemState;
    }
}
declare namespace WebClient {
    /** @internal */
    class KindTreeNodeData implements ITreeNodeData {
        kindModel: IKindModel;
        children: KindTreeNodeData[];
        trimmedName: string;
        constructor(kind: IKindModel, children: KindTreeNodeData[]);
        readonly displayName: string;
        readonly uniqueId: string;
        readonly iconClass: string;
        readonly disabled: boolean;
        private trimName(fullName);
    }
}
declare namespace WebClient {
    class LinkItem implements ILinkItem {
        data: ILinkItemData;
        state: LinkItemState;
        settingsMenuExpanded: boolean;
        infoPopoverOpen: boolean;
    }
}
declare namespace WebClient {
    /** @internal */
    class LinkTypeComboBoxVariant implements IComboBoxVariant {
        data: ILinkType;
        constructor(val: ILinkType);
        readonly displayName: any;
        readonly uniqueId: string;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Кнопка]{@link LayoutIconButton}.
     */
    class LayoutIconButtonParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Текст всплывающей подсказки. */
        tip?: string;
        /** Имя CSS класса, в котором определен путь к иконке, отображаемой в Кнопке. */
        iconClass?: string;
        /** Флаг, определяющий, что Кнопка может быть нажата: true - разрешено (разрешена настроенная операция редактирования), false - не разрешено. */
        canClick?: boolean;
    }
    /** @internal */
    interface LayoutIconButtonState extends LayoutIconButtonParams, BaseControlState {
    }
    /**
     * Класс элемента управления Кнопка.
     *
     * Добавляет в web-разметку кнопку в виде иконки для вызова произвольной функции из скрипта карточки.
     */
    class LayoutIconButton extends BaseControl<LayoutIconButtonParams, LayoutIconButtonState> {
        constructor(props: LayoutIconButtonParams);
        protected createParams(): WebClient.LayoutIconButtonParams;
        private readonly myControlImpl;
        private bindingEditOperation;
        /**
         * Вызывает настроенный обработчик нажатия Кнопки.
         */
        performClick(): void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface LayoutIconButtonImplState extends BaseControlImplState, LayoutIconButtonState {
        loading: boolean;
    }
    /** @internal */
    class LayoutIconButtonImpl extends BaseControlImpl<LayoutIconButtonParams, LayoutIconButtonImplState> {
        constructor(props: LayoutIconButtonParams);
        performClick(event?: React.MouseEvent): void;
        /** Переопределяет базовый метод, отменяя его логику (для данного контрола она отлична от базовой версии). */
        protected handleClick(event: React.MouseEvent): void;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * Публичные свойства для контрола {@link Layout}.
     */
    class LayoutParams extends PanelParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Событие возникает при открытии карточки. */
        cardOpening?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает после открытия карточки. */
        cardOpened?: BasicApiEvent<IEventArgs>;
        /** Событие возникает при сохранении карточки. */
        cardSaving?: CancelableApiEvent<ISaveControlData>;
        /** Событие возникает после сохранения карточки. */
        cardSaved?: BasicApiEvent<IEventArgs>;
        /** Событие возникает, если при сохранении карточки возникли ошибки. */
        cardSaveFailed?: BasicApiEvent<IEventArgs>;
        /** Событие возникает перед изменением состояния карточки. */
        cardStateChanging?: CancelableApiEvent<ICardStateChangingEventArgs>;
        /** Событие возникает перед изменением разметки карточки. */
        cardLayoutSwitching?: CancelableApiEvent<IEventArgs>;
        /** @internal */
        mapLayout?: (layoutResolver: () => Layout) => void;
    }
    /** @internal */
    interface LayoutState extends LayoutParams, PanelState {
        isInitialized: boolean;
        controlStore: ControlStore;
        cardInfo: ICardInfoModel;
        layoutInfo: ILayoutInfoModel;
        layoutContainer: LayoutContainer;
        editOperations: IEditOperationStore;
        saved: boolean;
    }
    /**
     * Класс разметки карточки.
     *
     * Предоставляет доступ к элементам управления, расположенным на разметке, а также методы управления и события карточки.
     */
    class Layout extends Panel<LayoutParams, LayoutState> {
        constructor(props: LayoutParams);
        protected createParams(): WebClient.LayoutParams;
        /** @internal */
        componentDidMount(): void;
        /** Возвращает элементы управления разметки. */
        readonly controls: ControlWrapperMap;
        private cardInfoHandler;
        /** Возвращает модель данных карточки. */
        readonly cardInfo: ICardInfoModel;
        private layoutInfoHandler;
        /** Возвращает модель данных разметки. */
        readonly layoutInfo: ILayoutInfoModel;
        private layoutContainerHandler;
        /** Возвращает контейнер разметки. */
        readonly layoutContainer: LayoutContainer;
        private editOperationsrHandler;
        /** Предоставляет доступ к хранилищу операций редактирования. */
        readonly editOperations: IEditOperationStore;
        /** Возвращает текущую разметку. */
        readonly layout: Layout;
        /** Возвращает отображаемое название типа карточки. */
        readonly cardTypeName: string;
        protected readonly control: LayoutImpl;
        protected registerControl(control: BaseControl<BaseControlParams, BaseControlState>): void;
        protected unregisterControl(control: BaseControl<BaseControlParams, BaseControlState>): void;
        /**
         * Сохраняет изменения всей разметки (карточки) или конкретного элемента управления.
         * @param control Элемент управления который требуется сохранить. Если не указан, будет сохранена вся разметка.
         * @param doNotMarkAsSaved Флаг, указывающий, что карточка должна сохранить признак "не сохранена": true - карточка остается с признаком "не сохранена", false - карточка сохраняется в обычном режиме.
         */
        saveCard(control?: BaseControl<BaseControlParams, BaseControlState>, doNotMarkAsSaved?: boolean): JQueryDeferred<any>;
        /**
         * Изменяет состояние карточки, по полученной операции редактирования.
         * @param operationId Идентификатор операции редактирования.
         */
        changeState(operationId: string): void;
        /**
         * Проверяет, что карточка заблокирована и есть изменения.
         * @return done срабатывает, когда карточка заблокирована и есть изменения; иначе - срабатывает fail.
         */
        checkLockAndModified(): JQueryDeferred<any>;
        protected handleCardOpening(): void;
        protected handleCardOpened(): void;
        protected handleCardSaving(saveControlData: ISaveControlData): JQueryDeferred<any>;
        protected handleCardSaved(): void;
        protected handleCardSaveFailed(): void;
        protected handleCardStateChanging(operationId: string, callback: () => void): void;
        protected handleCardLayoutSwitching(callback: () => void): void;
        /**
        * Возвращает флаг, указывающий, что карточка была сохранена после загрузки разметки: true - была сохранена, false - не была сохранена.
        */
        readonly saved: boolean;
        componentWillMount(): void;
        deinit(): void;
        destroy(): JQueryDeferred<any>;
        /** @internal */
        render(): JSX.Element;
        protected setParamValues(props: BaseControlParams, initial: boolean): void;
    }
}
declare namespace WebClient {
    /** @internal */
    interface LayoutImplProps extends LayoutParams {
        cardTypeName: string;
    }
    /** @internal */
    interface LayoutImplState extends PanelImplState, LayoutState, LayoutImplProps {
    }
    /** @internal */
    class LayoutImpl extends PanelImpl<LayoutImplProps, LayoutImplState> {
        constructor(props: LayoutImplProps);
        protected readonly wrapper: Layout;
        protected prepareChildren(): void;
        protected getCssClass(): string;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [Метка]{@link Label}.
    */
    class LabelParams extends BaseControlParams {
        /** Текст метки. */
        text: string;
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
    }
    /** @internal */
    interface LabelState extends LabelParams, BaseControlState {
    }
    /**
     * Класс элемента управления Метка.
     *
     * Добавляет в web-разметку текстовый не редактируемый элемент.
     */
    class Label extends BaseControl<LabelParams, LabelState> {
        protected createParams(): WebClient.LabelParams;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface LabelImplState extends BaseControlImplState, LabelState {
    }
    /** @internal */
    class LabelImpl extends BaseControlImpl<LabelParams, LabelImplState> {
        constructor(props: LabelParams);
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    interface IDataChangedEventArgs {
        oldValue: any;
        newValue: any;
    }
    /** Типизированная версия интерфейса IDataChangedEventArgs */
    interface IDataChangedEventArgsEx<T> extends IDataChangedEventArgs {
        oldValue: T;
        newValue: T;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [История]{@link History}.
     */
    class HistoryParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Текст, отображаемый в кнопке. */
        buttonText?: string;
        /** Текст всплывающей подсказки. */
        tip?: string;
        /** Флаг, определяющий, что пользователь может просматривать историю: true - разрешено (разрешена настроенная операция редактирования), false - не разрешено. */
        canViewHistory?: boolean;
        /** Показывать таблицу с записями на странице или нет. По умолчанию - нет. */
        showPreview?: boolean;
        /** Количество записей, загружаемых с сервера за раз. */
        recordsOnPage?: number;
        /** Отображаемые в данный момент записи истории. */
        records?: HistoryRecord[];
        /** Сотрудник, по которому производится фильтрация записей в текущий момент. */
        authorFilterValue?: IEmployeeData;
        /** Дата, по которой производится фильтрация записей в текущий момент. */
        dateFilterValue?: string;
        /** Текст события, по которому производится фильтрация записей в текущий момент. */
        eventFilterValue?: string;
        /** Показывать кнопку "показать еще" на странице или нет. По умолчанию: false */
        showMoreButtonInPreview?: boolean;
        /** Показывать кнопку открытия модального окна. По умолчанию - true  */
        showOpenButton?: boolean;
        /** Показывать фильтры на странице или нет. По умолчанию - false */
        showFiltersInPreview?: boolean;
        /** Идентификатор карточки. Необходим только в случае, когда контрол находится вне разметки. */
        cardId?: string;
        /** Массив идентификаторов операций, которые не отображаются в элементе управления */
        operationsToHide: string[];
        /** Событие, возникающее после изменения списка отображаемых записей истории (см. {@link records})
          * (например, при применении фильтра или подгрузке новых страниц).
          */
        recordsChanged?: BasicApiEvent<IRecordsChangedEventArgs>;
        /** Событие, возникающее перед открытием окна с историей. */
        windowOpeninig?: CancelableApiEvent<IEventArgs>;
        /** Событие, возникающее после открытия окна с историей. */
        windowOpened?: BasicApiEvent<IEventArgs>;
        /** Событие, возникающее перед закрытием окна с историей. */
        windowClosing?: CancelableApiEvent<IEventArgs>;
        /** Событие, возникающее после закрытия окна с историей. */
        windowClosed?: BasicApiEvent<IEventArgs>;
    }
    /** @internal */
    interface HistoryState extends HistoryParams, BaseControlState {
        external: HistoryExternalRelations;
        /** Записи, которые будут показаны на странице при значении параметра {@link showPreview} = true. */
        previewRecords: HistoryRecord[];
        /** Сигнализирует о том, что {@link previewRecords} содержит все записи истории. */
        previewRecordsContainsAllRecords: boolean;
        /** Идентификатор для поиска записей истории в кэше */
        cacheId: string;
        /** Идентификатор операции изменения */
        editOperation: string;
    }
    /**
     * Класс элемента управления История.
     *
     * Добавляет в web-разметку кнопку для отображения истории операций над карточкой.
     */
    class History extends BaseControl<HistoryParams, HistoryState> {
        constructor(props: HistoryParams);
        protected createParams(): WebClient.HistoryParams;
        private readonly myControlImpl;
        private operationsToHideBinding;
        private binding;
        /**
         * Открывает окно просмотра истории.
         */
        openHistoryWindow(): void;
        /**
         * Закрывает окно просмотра истории.
         */
        closeHistoryWindow(): void;
        /**
         * Загружает с сервера очередную порцию данных и отображает в интерфейсе.
         * @param pageSize Размер страницы (по умолчанию берется значение соответствующего параметра).
         * @returns JQueryDeferred объект для отслеживания процесса загрузки.
         */
        loadNextPage(pageSize?: number): JQueryDeferred<HistoryResponse>;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    class HistoryExternalRelations {
        private cardId;
        private historyController;
        constructor(cardId: string, historyController: LayoutHistoryController);
        getHistoryRecords(skip: number, maxCount: number, cacheId: string, editOperation: string, hideOperations?: string[], employeeName?: string, date?: Date, eventSearch?: string): JQueryDeferred<HistoryResponse>;
    }
}
declare namespace WebClient {
    /** @internal */
    interface HistoryImplState extends BaseControlImplState, HistoryState {
        employeeVisualiser: EmployeeVisualizer;
        modalHost: ModalHost;
        modalView: HistoryView;
        previewView: HistoryView;
    }
    /** @internal */
    class HistoryImpl extends BaseControlImpl<HistoryParams, HistoryImplState> {
        static ModalPageSize: number;
        constructor(props: HistoryParams);
        openHistoryWindow(): void;
        closeHistoryWindow(): void;
        onRecordsChanged(records: HistoryRecord[]): void;
        renderModalWindow(): JSX.Element;
        onButtonClick(event?: React.MouseEvent): void;
        onShowMoreClick(): void;
        renderControl(): JSX.Element;
        attachModalView(view: HistoryView): void;
        attachPreviewView(view: HistoryView): void;
        protected readonly currentView: HistoryView;
        records: HistoryRecord[];
        recordsOnPage: number;
        authorFilterValue: IEmployeeData;
        dateFilterValue: Date;
        eventFilterValue: string;
        loadNextPage(pageSize?: number): JQueryDeferred<HistoryResponse>;
    }
}
declare namespace WebClient {
    interface HistoryRecordViewProps {
        record: HistoryRecord;
        employeeVisualiser: EmployeeVisualizer;
        eventSearch?: string;
        columnsWidth?: string[];
        mobile: boolean;
    }
    const HistoryRecordView: (props: HistoryRecordViewProps) => JSX.Element;
}
declare namespace WebClient {
    interface HistoryViewProps {
        previewRecords: HistoryRecord[];
        employeeVisualiser: EmployeeVisualizer;
        external: HistoryExternalRelations;
        pageSize: number;
        autoLoadScrollGap?: number;
        onRecordsChanged?: (records: HistoryRecord[]) => void;
        /** Restricts height and enables scroll for modal window view. */
        modalMode: boolean;
        showFilters: boolean;
        autoLoadOnScroll: boolean;
        useTableMode?: boolean;
        operationsToHide: string[];
        cacheId: string;
        editOperation: string;
    }
    interface HistoryViewState {
        loader: RequestHelper;
        records: HistoryRecord[];
        cacheId: string;
        authorNameFilter: Employee;
        dateFilter: DateTimePicker;
        eventSearch: TextBox;
        hasMore: boolean;
        bodyScrollContainer: HTMLElement;
        quickSearchLogic: QuickSearchLogic;
    }
    class HistoryView extends React.Component<HistoryViewProps, HistoryViewState> {
        constructor(props: HistoryViewProps);
        componentDidMount(): void;
        loadRecords(authorNameFilter?: string, dateFilter?: Date, eventSearch?: string, pageSize?: number): JQueryDeferred<HistoryResponse>;
        loadNextPage(pageSize?: number): JQueryDeferred<HistoryResponse>;
        reload(): void;
        onRecordsChanged(): void;
        isScrolledDown(elem: HTMLElement): boolean;
        loadIfScrollDown(): void;
        onBodyScroll(ev: React.UIEvent): void;
        attachTableBodyContainer(elem: HTMLElement): void;
        onEmployeeChanged(sender: any, args: IDataChangedEventArgs): void;
        onDateChanged(sender: any, args: IDataChangedEventArgs): void;
        onEventSearchChanged(sender: any, args: IDataChangedEventArgs): void;
        renderTableHeader(): JSX.Element;
        renderTableBody(): JSX.Element;
        render(): JSX.Element;
        attachAuthorFilter(control: Employee): void;
        attachDateFilter(control: DateTimePicker): void;
        attachEventFilter(control: TextBox): void;
        records: HistoryRecord[];
        authorFilterValue: IEmployeeData;
        dateFilterValue: Date;
        eventFilterValue: string;
    }
}
declare namespace WebClient {
    interface IRecordsChangedEventArgs {
        records: HistoryRecord[];
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Выбор папки]{@link Folder}.
     */
    class FolderParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Текст всплывающей подсказки. */
        tip?: string;
        /** Текст заполнителя. */
        placeHolder?: string;
        /** Текст метки. */
        labelText?: string;
        /** Флаг, определяющий, что метка должна отображаться, когда значение элемента управления не задано: true - отображать, false - не отображать. */
        showEmptyLabel?: boolean;
        /** Флаг, указывающий, обязательно ли должно быть задано значение элемента управления: true - обязательно, false - не обязательно. */
        required?: boolean;
        /** Возвращает метод выбора папки по умолчанию. */
        folderMode?: FolderMode;
        /** Флаг доступности создания карточки в текущей папке */
        currentFolderForbidden?: boolean;
        /** Идентификатор текущей папки */
        currentFolder?: string;
        /** Данные выбранной папки. */
        value?: IFolderInfo;
        /** Идентификатор карточки, для которой выбирается размещение. */
        cardId?: string;
        /** Событие возникает после выбора папки. */
        dataChanged?: BasicApiEvent<IDataChangedEventArgs>;
    }
    /** @internal */
    interface FolderState extends FolderParams, BaseControlState {
        checkFolderForAvailable: (folderId: string) => JQueryDeferred<ICheckResult>;
    }
    /**
     * Класс элемента управления Выбор папки.
     *
     * Добавляет в web-разметку ссылку, при нажатии которой вызывается диалог выбора папки для размещения создаваемой карточки.
     */
    class Folder extends BaseControl<FolderParams, FolderState> {
        constructor(props: FolderParams);
        protected createParams(): WebClient.FolderParams;
        private readonly folderImpl;
        private visibility;
        /**
         * Закрывает диалоговое окно выбора папки.
         */
        hide(): void;
        /**
         * Отменяет выбор папки.
         */
        clear(): void;
        /**
         * Открывает диалоговое окно выбора папки.
         */
        show(): void;
        /** @internal */
        onSaving(): JQueryDeferred<any>;
        validate(params: IValidationParams): IValidationResult[];
        protected checkFolderForAvailable(folderId: string): JQueryDeferred<ICheckResult>;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface FolderImplState extends BaseControlImplState, FolderState {
        dialog: WebClient.ModalWindow;
        validationMessage: string;
    }
    /** @internal */
    class FolderImpl extends BaseControlImpl<FolderParams, FolderImplState> {
        constructor(props: FolderParams);
        show(): void;
        hide(): void;
        clear(): void;
        validate(params: IValidationParams): IValidationResult;
        protected handleDataChanged(eventArgs: IDataChangedEventArgs): void;
        protected renderValidationMessage(): JSX.Element;
        protected updateValidationMessage(): void;
        protected changeFolder(newFolder: IFolderInfo): void;
        protected onFolderSelected(controlInModal: FolderModal, window: WebClient.ModalWindow): void;
        protected selectFolder(folderId: string): Promise<void>;
        protected getFolderInfo(folderId: string): JQueryDeferred<IFolderInfo>;
        protected renderLabel(): JSX.Element;
        protected renderValue(): JSX.Element;
        protected renderClearButton(): JSX.Element;
        protected getCssClass(): string;
        renderControl(): JSX.Element;
        value: IFolderInfo;
    }
}
declare namespace WebClient {
    /** @internal */
    class FolderModal extends React.Component<any, IFolderModalState> {
        folderSelectedEvent: SimpleEvent<IFolderInfo>;
        recursive: RecursiveVisitor<IFolderInfo>;
        /** Уровень папки */
        level: IAccessor<IFolderInfo, number>;
        /** Раскрыта ли папка */
        expanded: IAccessor<IFolderInfo, boolean>;
        /** Видна ли папка */
        visible: IAccessor<IFolderInfo, boolean>;
        /** Были ли загружены подчинённые папки с сервера */
        childrenLoaded: IAccessor<IFolderInfo, boolean>;
        /** Отображает процесс загрузки данных с сервера */
        childrenLoading: IAccessor<IFolderInfo, LoadingState>;
        constructor(props: any);
        componentDidMount(): void;
        readonly selectedFolder: IFolderInfo;
        readonly folderSelected: IBasicEvent<IFolderInfo>;
        protected onToggleFolder: (folder: IFolderInfo) => void;
        protected onFolderSelected: (folder: IFolderInfo) => void;
        protected updateFoldersMeta(folders: IFolderInfo[], parentFolder?: IFolderInfo): void;
        protected getFlatFolders(treeFolders?: IFolderInfo[]): IFolderInfo[];
        protected getFolderIconClass(folder: IFolderInfo): string;
        renderFolder: (index: any, key: any) => JSX.Element;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IFolderModalState {
        initialLoading: LoadingState;
        tree: Tree;
        folders: IFolderInfo[];
        /** flatFolders зависят от folders, лучше не менять руками */
        flatFolders: IFolderInfo[];
        selectedFolderID: string;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Список файлов]{@link FileListControl}.
     */
    class FileListControlParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления. */
        standardCssClass?: string;
        /** Общее количество файлов */
        totalCount: number;
        /** Выбранные файлы. */
        files: FileListItem[];
        /** Флаг, указывающий на наличие ЭЦП на основных файлах: true - файлы подписаны, false - не подписаны. */
        hasAnySignature: boolean;
        /** Флаг, определяющий раскрыт ли блок со списком основных файлов: true - раскрыт, false - свернут. */
        mainFilesExpanded: boolean;
        /** Флаг, определяющий раскрыт ли блок со списком дополнительных файлов: true - раскрыт, false - свернут. */
        extraFilesExpanded: boolean;
        /** Флаг, определяющий отображается ли меню добавления файлов: true - отображается, false - скрыто. */
        fileCommandBarExpanded: boolean;
        /** Флаг, определяющий отображается ли меню подписания файлов: true - отображается, false - скрыто. */
        signCommandBarExpanded: boolean;
        /** Возвращает режим редактирования элемента управления. */
        editMode: EditMode;
        /** Флаг, указывающий, разрешено ли добавлять основные файлы: true - разрешено, false - не разрешено. */
        canAddMain: boolean;
        /** Флаг, указывающий, разрешено ли добавлять дополнительные файлы: true - разрешено, false - не разрешено. */
        canAddExtra: boolean;
        /** Флаг, указывающий, разрешено ли подписывать файлы: true - разрешено, false - не разрешено. */
        canSign: boolean;
        /** Флаг, указывающий, разрешено ли открывать журнал подписей: true - разрешено, false - не разрешено. */
        canViewSign: boolean;
        /** Событие возникает при добавлении основного файла. */
        mainFileAdding: CancelableApiEvent<IMainFileAddingArgs>;
        /** Событие возникает при добавлении дополнительного файла. */
        extraFileAdding: CancelableApiEvent<IExtraFileAddingArgs>;
        /** Событие возникает при удалении основного файла. */
        mainFileDeleting: CancelableApiEvent<IMainFileDeletingArgs>;
        /** Событие возникает при удалении дополнительного файла. */
        extraFileDeleting: CancelableApiEvent<IExtraFileDeletingArgs>;
        /** Событие возникает при скачивании версии файла. */
        fileVersionDownloading: CancelableApiEvent<IFileVersionDownloadingArgs>;
        /** Событие возникает при загрузке версии файла. */
        fileVersionUploading: CancelableApiEvent<IFileVersionUploadingArgs>;
        /** Событие возникает при открытии файла через WebDAV. */
        fileOpening: CancelableApiEvent<IFileOpeningArgs>;
        /** Событие возникает при открытии журнала подписей. */
        signatureListViewing: CancelableApiEvent<ISignatureListViewingArgs>;
        /** Событие возникает при подписании файла. */
        signatureCreating: CancelableApiEvent<ISignatureCreatingArgs>;
        /** Событие возникает при добавлении комментария к версии файла. */
        fileVersionCommentAdding: CancelableApiEvent<IFileVersionCommentAddingArgs>;
        /** Событие возникает при удалении комментария к версии файла. */
        fileVersionCommentDeleting: CancelableApiEvent<IFileVersionCommentDeletingArgs>;
        /** Событие возникает при открытии окна предварительного просмотра файла. */
        filePreviewing: CancelableApiEvent<IFilePreviewingArgs>;
        /** Событие возникает после удаления основного файла. */
        mainFileDeleted: BasicApiEvent<IMainFileDeletedArgs>;
        /** Событие возникает после удаления дополнительного файла. */
        extraFileDeleted: BasicApiEvent<IExtraFileDeletedArgs>;
        /** Событие возникает после скачивания версии файла. */
        fileVersionDownloaded: BasicApiEvent<IFileVersionDownloadedArgs>;
        /** Событие возникает после загрузки версии файла. */
        fileVersionUploaded: BasicApiEvent<IFileVersionUploadedArgs>;
        /** Событие возникает после открытии файла через WebDAV. */
        fileOpened: BasicApiEvent<IFileOpenedArgs>;
        /** Событие возникает после открытия журнала подписей. */
        signatureListViewed: BasicApiEvent<ISignatureListViewedArgs>;
        /** Событие возникает после подписания файла. */
        signatureCreated: BasicApiEvent<ISignatureCreatedArgs>;
        /** Событие возникает после добавления комментария к версии файла. */
        fileVersionCommentAdded: BasicApiEvent<IFileVersionCommentAddedArgs>;
        /** Событие возникает после удаления комментария к версии файла. */
        fileVersionCommentDeleted: BasicApiEvent<IFileVersionCommentDeletedArgs>;
        /** Событие возникает после добавления основного файла. */
        mainFileAdded: BasicApiEvent<IMainFileAddedArgs>;
        /** Событие возникает после добавления дополнительного файла. */
        extraFileAdded: BasicApiEvent<IExtraFileAddedArgs>;
        /** Событие возникает после открытия окна предварительного просмотра файла. */
        filePreviewed: BasicApiEvent<IFilePreviewedArgs>;
    }
    /** @internal */
    interface FileListControlState extends FileListControlParams, BaseControlState {
        logic: FileListControlLogic;
        autoUpload: boolean;
    }
    /**
     * Класс элемента управления Список файлов.
     *
     * Добавляет в web-разметку компонент для управления основными и дополнительныеми файлами карточки.
     * В разметку режима чтения добавляет компонент для добавления основных файлов.
     */
    class FileListControl extends BaseControl<FileListControlParams, FileListControlState> {
        constructor(props: FileListControlParams);
        protected createParams(): WebClient.FileListControlParams;
        private readonly fileListImpl;
        private bindingEditOperation;
        /**
         * Открывает меню добавления основных файлов.
         */
        openAddMainFileDialog(): void;
        /**
         * Открывает меню добавления дополнительных файлов.
         */
        openAddExtraFileDialog(): void;
        /**
         * Открывает журнал подписей.
         */
        openSignListDialog(): void;
        /**
         * Открывает диалоговое окно подписания файлов.
         */
        openSignDialog(): void;
        /**
         * Проверяет возможность открытия указанного файла.
         * @param fileItem Файл.
         * @return true - открытие возможно, иначе - false.
         */
        canRead(fileItem: FileListItem): boolean;
        /**
         * Проверяет возможность редактирования указанного файла.
         * @param fileItem Файл.
         * @return true - редактирование возможно, иначе - false.
         */
        canEdit(fileItem: FileListItem): boolean;
        /**
         * Проверяет возможность удаления указанного файла.
         * @param fileItem Файл.
         * @return true - удаление возможно, иначе - false.
         */
        canDelete(fileItem: FileListItem): boolean;
        /**
         * Проверяет возможность блокировки указанного файла.
         * @param fileItem Файл.
         * @return true - блокировка возможна, иначе - false.
         */
        canLock(fileItem: FileListItem): boolean;
        /**
         * Проверяет возможность комментирования указанного файла.
         * @param fileItem Файл.
         * @return true - комментирование возможно, иначе - false.
         */
        canComment(fileItem: FileListItem): boolean;
        /**
         * Удаляет файл из списка.
         * @param fileItem Файл.
         */
        removeFile(fileItem: FileListItem): JQueryDeferred<any>;
        /**
         * Блокирует файл.
         * @param fileItem файл.
         */
        lockFile(fileItem: FileListItem): void;
        /**
         * Снимает установленную блокировку с файла.
         * @param fileItem Файл.
         */
        unlockFile(fileItem: FileListItem): void;
        /**
         * Открывает диалоговое окно комментирования версии файла.
         * @param fileItem Файл.
         * @param fileVersion Версия файла. Если пропущен, то будет комментироваться текущая версия.
         */
        openCommentsDialog(fileItem: FileListItem, fileVersion?: IFileVersion): void;
        /**
         * Проверяет раскрыт ли список версий указанного файла.
         * @param fileItem Файл.
         * @return true - раскрыт, false - свернут.
         */
        getVersionsListExpanded(fileItem: FileListItem): boolean;
        /**
         * Сворачивает раскрытый список версий файлов или раскрывает свернутый.
         * @param fileItem Файл.
         */
        toggleVersionsList(fileItem: FileListItem): void;
        /**
         * Открывает предварительный просмотр указанной версии файла.
         * @param fileItem Файл.
         * @param fileVersion Версия файла. Если пропущен, то будет открыта текущая версия.
         */
        openPreview(fileItem: FileListItem, fileVersion?: IFileVersion): void;
        /**
         * Скачивает (на компьютер) указанную версию файла.
         * @param fileItem Файл.
         * @param fileVersion Версия файла. Если пропущен, то будет скачана текущая версия.
         */
        download(fileItem: FileListItem, fileVersion?: IFileVersion): void;
        /**
         * Открывает файл с использованием технологии WebDAV.
         * @param fileItem Файл.
         */
        openWebDav(fileItem: FileListItem): void;
        /** @internal */
        onSaved(): JQueryDeferred<any>;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface FileListImplState extends BaseControlImplState, FileListControlState {
        showPlaceholders?: boolean;
    }
    /** @internal */
    class FileListControlImpl extends BaseControlImpl<FileListControlParams, FileListImplState> {
        mainAttach: FileListAttachedElements;
        extraAttach: FileListAttachedElements;
        signButton: HTMLElement;
        viewSignButton: HTMLElement;
        fileSignLogic: WebClient.FileSign;
        /** Загружаются ли оставшиеся файлы в данный момент */
        isLeftFilesLoading: boolean;
        /** Загружены ли оставшиеся файлы в данный момент */
        isLeftFilesLoaded: boolean;
        readonly logic: FileListControlLogic;
        constructor(props: FileListControlParams);
        componentDidMount(): void;
        componentWillUnmount(): void;
        protected getCssClass(): string;
        protected getFilesSignInfo(): WebClient.IFileSignInfo[];
        renderUploadForm(attach: FileListAttachedElements, action: string, main: boolean, fileItem?: FileListItem): JSX.Element;
        protected renderEditModeFileList(): JSX.Element;
        protected onDropzoneClick(): void;
        protected renderEditMode(): JSX.Element;
        protected onDocumentClick(ev: any): void;
        protected onToggleTableClick(main: boolean): void;
        protected onToggleCommandBarClick(ev?: React.MouseEvent): void;
        onAddClick(main: boolean, ev?: React.MouseEvent): void;
        protected attachSignButton(element: HTMLElement): void;
        protected attachViewSignButton(element: HTMLElement): void;
        protected onSignButtonClick(ev: React.MouseEvent): void;
        protected onToggleSignPanelClick(ev?: React.MouseEvent): void;
        protected renderViewModeTitle(mainFiles: boolean): JSX.Element;
        protected renderViewModeCommandBar(): JSX.Element;
        protected renderViewModeSignPanel(): JSX.Element;
        protected renderViewModeFilesHeader(): JSX.Element;
        protected renderViewModeFiles(main: boolean): JSX.Element;
        protected renderViewModeMain(): JSX.Element;
        protected renderViewModeExtra(): JSX.Element;
        protected renderViewMode(): JSX.Element;
        renderControl(): JSX.Element;
        mainFilesExpanded: boolean;
        extraFilesExpanded: boolean;
        fileCommandBarExpanded: boolean;
        signCommandBarExpanded: boolean;
    }
}
declare namespace WebClient {
    /** @internal */
    class FileListControlLogic {
        mainAttach: FileListAttachedElements;
        extraAttach: FileListAttachedElements;
        initialized: boolean;
        lastSaveDeferred: JQueryDeferred<any>;
        parent: FileListControlImpl;
        filesToRemove: FileListItem[];
        constructor();
        init(_mainAttach: FileListAttachedElements, _extraAttach: FileListAttachedElements, _parent: FileListControlImpl): void;
        loadFilesFromModel(model: IFileListDataModel, oldFiles?: FileListItem[]): FileListItem[];
        loadFileModel(model: IFileListDataModel, appendFiles?: boolean): void;
        onSaved(): JQueryDeferred<any>;
        uploadNewFiles(): JQueryDeferred<any>;
        sendRequest(sendFunc: () => JQueryDeferred<IFileListDataModel>, savingItems: FileListItem[]): JQueryDeferred<any>;
        getFiles(mainFiles: boolean): FileListItem[];
        initJQueryUploaderForAddFiles(attach: FileListAttachedElements, main: boolean): void;
        initJQueryUploaderForAddFileVersions(attach: FileListAttachedElements, fileItem: FileListItem): void;
        download(fileItem: FileListItem, fileVersion: IFileVersion, action: string): void;
        webDav(fileItem: FileListItem, canEdit: boolean): void;
        /**
         * Mark file for remove, or send remove request imediately
         * @param fileItem File to remove
         * @param immediately Send request to the server right now, or wait onSaved
         */
        removeFile(fileItem: FileListItem, immediately: boolean): JQueryDeferred<any>;
        protected removeFileFromServer(fileItem: FileListItem): JQueryDeferred<any>;
        showPreviewIfSupported(fileItem: FileListItem, version?: IFileVersion): void;
        lockFile(fileItem: FileListItem): void;
        unlockFile(fileItem: FileListItem): void;
        showCommentsDialog(fileItem: FileListItem, versionId: string, enableAddComments: boolean): void;
        loadFilesPart(skipCount: number, maxCount?: number): JQueryDeferred<void>;
        protected updateVersionsOnLoad(): void;
        getFilePreviewUrl(fileItem: FileListItem, action: string, version?: IFileVersion, pageIndex?: number): string;
        closeAllMenusBut(fileItem: FileListItem): void;
        removeFileItem(index: number): void;
        clearFileItems(): void;
        protected readonly state: FileListImplState;
        protected readonly props: FileListControlParams;
        protected deinitFileItem(item: FileListItem): void;
        protected initJQueryUploader(attach: FileListAttachedElements, options: IFileUploadOptions): void;
        protected onFilesAdded(main: boolean, attach: FileListAttachedElements, e: any, data: any): void;
        protected onFileVersionAdded(fileItem: FileListItem, attach: FileListAttachedElements, data: any): void;
        protected sendFiles(attach: FileListAttachedElements, items: FileListItem[], areVersions?: boolean): JQueryDeferred<any>;
        protected processResponse(responseData: IFileListDataModel, deferred: JQueryDeferred<any>, uploadingItems: FileListItem[], areVersions?: boolean): void;
        protected getItemsToUpload(): FileListItem[];
    }
}
declare namespace WebClient {
    /** @internal */
    class FileListItemComponent extends React.Component<FileListItemProps, any> {
        logic: FileListControlLogic;
        downloadAction: string;
        versionsRequestHelper: RequestHelper;
        childVersionsLoaded: boolean;
        constructor(props: FileListItemProps);
        canRead(fileItem: FileListItem): boolean;
        canEdit(fileItem: FileListItem): boolean;
        canDelete(fileItem: FileListItem): boolean;
        canLock(fileItem: FileListItem): boolean;
        canComment(fileItem: FileListItem): boolean;
        protected onMenuClose(fileItem: FileListItem): void;
        onLockOperationClick(fileItem: FileListItem): void;
        onUnlockOperationClick(fileItem: FileListItem): void;
        protected onDeleteOperationClick(fileItem: FileListItem): void;
        protected onFileMenuClick(fileItem: FileListItem): void;
        protected onDownloadOperationClick(fileItem: FileListItem): void;
        onAddCommentClick(fileItem: FileListItem): void;
        onEditModeRemoveClick(fileItem: FileListItem): void;
        render(): JSX.Element;
        protected getFileVersionText(version: IFileVersion): string;
        onVersionClick(fileItem: FileListItem): void;
        protected onNameClick(fileItem: FileListItem): void;
        protected onVersionNumberClick(fileItem: FileListItem, version: IFileVersion): void;
        protected onDownloadVersionClick(fileItem: FileListItem, version: IFileVersion): void;
        onWebDavFileClick(fileItem: FileListItem): void;
        protected renderViewMode(): JSX.Element;
        protected renderVersionList(fileItem: FileListItem): JSX.Element;
        protected renderEditMode(item: FileListItem): JSX.Element;
        protected renderMenuItems(fileItem: FileListItem): JSX.Element[];
        protected renderViewModeFileMenu(fileItem: FileListItem): JSX.Element;
    }
}
declare namespace WebClient {
    const FileListItemPlaceholderWrapper: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement>, any, React.HTMLProps<HTMLDivElement>>;
    const FileListItemPlaceholderIcon: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement>, any, React.HTMLProps<HTMLDivElement>>;
    const FileListItemPlaceholderName: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement>, any, React.HTMLProps<HTMLDivElement>>;
    const FileListItemPlaceholderVersion: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement>, any, React.HTMLProps<HTMLDivElement>>;
    const FileListItemPlaceholderSettings: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement>, any, React.HTMLProps<HTMLDivElement>>;
    interface FileListItemPlaceholderComponentProps {
        hidden?: boolean;
    }
    const FileListItemPlaceholderComponent: (props: FileListItemPlaceholderComponentProps) => JSX.Element;
}
declare namespace WebClient {
    /** @internal */
    class FileListItemProps {
        fileListItem: FileListItem;
        mode: EditMode;
        autoUpload: boolean;
        logic: FileListControlLogic;
        renderUploadForm: (attach: FileListAttachedElements, action: string, main?: boolean, fileItem?: FileListItem) => any;
        key: string;
    }
}
declare namespace WebClient {
    /** @internal */
    enum FileListItemState {
        /** Added, not uploaded yet */
        New = 0,
        /** Uploading */
        Saving = 1,
        /** Uploaded to the server */
        Saved = 2,
    }
}
declare namespace WebClient {
    const FileListVersionPlaceholderVersion: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement>, any, React.HTMLProps<HTMLDivElement>>;
    const FileListVersionPlaceholderAuthor: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement>, any, React.HTMLProps<HTMLDivElement>>;
    const FileListVersionPlaceholderDate: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement>, any, React.HTMLProps<HTMLDivElement>>;
    const FileListVersionPlaceholderComments: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement>, any, React.HTMLProps<HTMLDivElement>>;
    const FileListVersionPlaceholderDownload: styled.StyledComponentClass<React.HTMLProps<HTMLDivElement>, any, React.HTMLProps<HTMLDivElement>>;
    interface IFileListVersionPlaceholder {
        canRead?: boolean;
        hidden?: boolean;
    }
    const FileListVersionPlaceholder: (props: IFileListVersionPlaceholder) => JSX.Element;
}
declare namespace WebClient {
    interface IFileListItem {
        data: ILayoutFileModel;
        file: File;
        state: FileListItemState;
    }
}
declare namespace WebClient {
    interface IExtraFileAddedArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface IExtraFileAddingArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface IExtraFileDeletedArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface IExtraFileDeletingArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface IFileOpenedArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface IFileOpeningArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface IFilePreviewedArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface IFilePreviewingArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface IFileVersionCommentAddedArgs {
        fileItem: IFileListItem;
        commentText: string;
    }
}
declare namespace WebClient {
    interface IFileVersionCommentAddingArgs {
        fileItem: IFileListItem;
        commentText: string;
    }
}
declare namespace WebClient {
    interface IFileVersionCommentDeletedArgs {
        fileItem: IFileListItem;
        commentId: string;
    }
}
declare namespace WebClient {
    interface IFileVersionCommentDeletingArgs {
        fileItem: IFileListItem;
        commentId: string;
    }
}
declare namespace WebClient {
    interface IFileVersionDownloadedArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface IFileVersionDownloadingArgs {
        fileItem: IFileListItem;
        version: IFileVersion;
    }
}
declare namespace WebClient {
    interface IFileVersionUploadedArgs {
        fileItem: IFileListItem;
        version: IFileVersion;
    }
}
declare namespace WebClient {
    interface IFileVersionUploadingArgs {
        fileItem: IFileListItem;
        file: File;
    }
}
declare namespace WebClient {
    interface IMainFileAddedArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface IMainFileAddingArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface IMainFileDeletedArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface IMainFileDeletingArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface IMainFileNewVersionCreatedArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface IMainFileNewVersionCreatingArgs {
        fileItem: IFileListItem;
    }
}
declare namespace WebClient {
    interface ISignatureCreatedArgs {
    }
}
declare namespace WebClient {
    interface ISignatureCreatingArgs {
    }
}
declare namespace WebClient {
    interface ISignatureListViewedArgs {
    }
}
declare namespace WebClient {
    interface ISignatureListViewingArgs {
    }
}
declare namespace WebClient {
    class FileListBuiltInOperations {
        static ViewSignList: string;
        static EditMainFile: string;
        static ReadExtraFile: string;
        static LockMainFile: string;
        static AddExtraFile: string;
        static SignDocument: string;
        static RemoveMainFile: string;
        static AddMainFile: string;
        static AddCommentToMainFileVersion: string;
        static ReadMainFile: string;
        static RemoveExtraFile: string;
    }
}
declare namespace WebClient {
    /** @internal */
    class FileListAttachedElements {
        form: HTMLElement;
        filesContainer: HTMLElement;
        filesInput: HTMLElement;
        filesInputLabel: HTMLElement;
        dropZone: HTMLElement;
        timestampInput: HTMLInputElement;
        allElementsHasAttached: SimpleEvent<any>;
        constructor();
        attachForm(elem: HTMLElement): void;
        attachFilesContainer(elem: HTMLElement): void;
        attachFilesInput(elem: HTMLElement): void;
        attachFilesInputLabel(elem: HTMLElement): void;
        attachDropZone(elem: HTMLElement): void;
        attachTimestampInput(elem: HTMLInputElement): void;
        protected onElemAttached(): void;
        readonly allElementsAttached: boolean;
    }
}
declare namespace WebClient {
    /**
     * Предоставляет данные файла для элемента управления [Список файлов]{@link FileListControl}.
     */
    class FileListItem implements IFileListItem {
        data: ILayoutFileModel;
        settingsMenuExpaned: boolean;
        versionsListExanded: boolean;
        versionsListAnimating: boolean;
        comentsDialogOpen: boolean;
        uploadVersionAttachedElements: FileListAttachedElements;
        versionListElement: HTMLElement;
        itemComponent: FileListItemComponent;
        file: File;
        state: FileListItemState;
    }
}
declare namespace WebClient {
    /** @internal */
    class EmployeeLoader {
        private employeeVisualizer;
        private favoritesStorage;
        private mUnitId;
        constructor(employeeVisualizer: EmployeeVisualizer, favoritesStorage?: FavoriteEmployeesStorage, mUnitId?: string);
        unitId: string;
        findItems(query: ITypeaheadSearchQuery): JQueryDeferred<ITypeaheadSearchResult>;
        protected convertFindResultItem(data: IFindEmployeeResultItem): IEmployeeData;
    }
}
declare namespace WebClient {
    /** @internal */
    class EmployeeVisualizer {
        tipMode: EmployeeTooltipMode;
        viewMode: EmployeeViewMode;
        constructor(tipMode: EmployeeTooltipMode, viewMode?: EmployeeViewMode);
        getTooltip(employeeData: IBasicEmployeeInfo): string;
        getDisplayName(employee: IBasicEmployeeInfo): string;
    }
}
declare namespace WebClient {
    /** @internal */
    class FavoriteEmployeesStorage {
        private storageName;
        constructor(storageName: string);
        getFavorites(query: ITypeaheadSearchQuery): IEmployeeData[];
        favoriteEmployees: IEmployeeData[];
        addToFavorite(item: IEmployeeData): void;
        private arrayUnique(array);
    }
}
declare namespace WebClient {
    /**
     *  Содержит публичные свойства элемента управления [Сотрудники]{@link MultipleEmployees}.
     */
    class MultipleEmployeesParams extends InputBasedControlParams<IEmployeeData[]> {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Массив выбранных сотрудников. */
        value?: IEmployeeData[];
        /** Формат отображения во всплывающей подсказке информации о выбранном сотруднике. */
        tipMode?: EmployeeTooltipMode;
        /** Флаг, указывающий, что при быстром поиске последние выбранные сотрудники должны отображаться в начале списка: true - отображать сначала последних выбранных, false - обычный порядок отображения сотрудников.  */
        supportFavourites?: boolean;
        /** Идентификатор подразделения, из которого можно выбирать сотрудников. Если значение не указано, то можно выбирать из любого подразделения. */
        restrictUnitId?: string;
        /** Список последних выбранных в элементе управления сотрудников. */
        favoriteMultipleEmployeess?: IEmployeeData[];
        /** Флаг, определяющий формат отображения выбранных сотрудников в элементе управления:
        * true - выбранные сотрудники отображаются в виде вертикального списка; false - в виде горизонтального списка.
        */
        verticalOrientation?: boolean;
        /** Путь к полю карточки с идентификатором сотрудника. */
        fieldPath?: string;
        /** События возникает при добавлении сотрудника. */
        addingEmployee?: CancelableApiEvent<IEmployeeData>;
        /** События возникает после добавления сотрудника. */
        addedEmployee?: BasicApiEvent<IEmployeeData>;
        /** События возникает при удалении сотрудника из списка. */
        removingEmployee?: CancelableApiEvent<IEmployeeData>;
        /** События возникает после удаления сотрудника из списка. */
        removedEmployee?: BasicApiEvent<IEmployeeData>;
    }
    /** @internal */
    interface MultipleEmployeesState extends MultipleEmployeesParams, InputBasedControlState<IEmployeeData[]> {
        binding: IBindingResult<IMultipleEmployeeData>;
    }
    /**
     * Класс элемента управления Сотрудники.
     *
     * Добавляет в web-разметку поле ввода с кнопкой вызова диалогового окна для выбора нескольких сотрудников из *Справочника сотрудников*.
     */
    class MultipleEmployees extends InputBasedControl<IEmployeeData[], MultipleEmployeesParams, MultipleEmployeesState> {
        protected createParams(): WebClient.MultipleEmployeesParams;
        private readonly multipleEmployeeImpl;
        private employeeBinding;
        private defaultMultipleEmployeesBinding;
        /**
         * Добавляет указанного сотрудника в список последних выбранных.
         * @param item Добавляемый сотрудник.
         */
        addToFavorite(item: IEmployeeData): void;
        protected getBindings(): IBindingResult<any>[];
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface MultipleEmployeesImplState extends InputBasedControlImplState<IEmployeeData[]>, MultipleEmployeesState {
        lastEmployees: IEmployeeData[];
        inputKeyDown: SimpleEvent<React.KeyboardEvent>;
        favoritesStorage: FavoriteEmployeesStorage;
        employeeVisualizer: EmployeeVisualizer;
        employeeLoader: EmployeeLoader;
    }
    /** @internal */
    class MultipleEmployeesImpl extends InputBasedControlImpl<IEmployeeData[], MultipleEmployeesParams, MultipleEmployeesImplState> {
        constructor(props: MultipleEmployeesParams);
        protected setValue(value: IEmployeeData[], redraw: boolean): void;
        protected initHelpers(props: MultipleEmployeesParams): void;
        protected getTextValue(): string;
        hasValue(): boolean;
        protected renderInto(props: MultipleEmployeesParams, container: HTMLElement): MultipleEmployees;
        protected onInputKeyDown(ev: React.KeyboardEvent): void;
        protected showEditPopover(popoverOptions?: IEditPopoverProps): void;
        protected getFavoritesStorageName(props: MultipleEmployeesParams): string;
        protected onSelected(typeaheadVariant: ITypeaheadVariant): void;
        protected onRemoveEmployeeClick(empl: IEmployeeData, ev: React.MouseEvent): void;
        protected findItems(query: ITypeaheadSearchQuery): JQueryDeferred<ITypeaheadSearchResult>;
        protected getEmployeeTooltip(empl: IEmployeeData): string;
        protected renderViewEmployeeList(): JSX.Element;
        protected renderWithText(): JSX.Element;
        protected renderEditEmployeeList(): JSX.Element;
        protected renderInputWithPlaceholder(): JSX.Element;
        addToFavorite(item: IEmployeeData): void;
        /** Restricts selection of employees by this department only */
        restrictUnitId: string;
        tipMode: any;
        supportFavourites: any;
        favoriteEmployees: IEmployeeData[];
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Сотрудник]{@link Employee}.
     */
    class EmployeeParams extends InputBasedControlParams<IEmployeeData> {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Формат отображения во всплывающей подсказке информации о выбранном сотруднике. */
        tipMode?: EmployeeTooltipMode;
        /** Флаг, указывающий, что при быстром поиске последние выбранные сотрудники должны отображаться в начале списка: true - отображать сначала последних выбранных, false - обычный порядок отображения сотрудников.  */
        supportFavourites?: boolean;
        /** Идентификатор подразделения, из которого можно выбирать сотрудников. Если значение не указано, то можно выбирать из любого подразделения. */
        restrictUnitId?: string;
        /** Список последних выбранных в элементе управления сотрудников. */
        favoriteEmployees?: IEmployeeData[];
    }
    /** @internal */
    interface EmployeeState extends EmployeeParams, InputBasedControlState<IEmployeeData> {
        binding: IBindingResult<IEmployeeData>;
    }
    /**
     * Класс элемента управления Сотрудник.
     *
     * Добавляет в web-разметку поле ввода с кнопкой вызова диалогового окна для выбора сотрудника из *Справочника сотрудников*.
     */
    class Employee extends InputBasedControl<IEmployeeData, EmployeeParams, EmployeeState> {
        protected createParams(): WebClient.EmployeeParams;
        private readonly employeeImpl;
        private employeeBinding;
        private defaultEmployeeBinding;
        /**
         * Добавляет указанного сотрудника в список последних выбранных.
         * @param item Добавляемый сотрудник.
         */
        addToFavorite(item: IEmployeeData): void;
        protected getBindings(): IBindingResult<any>[];
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface EmployeeImplState extends InputBasedControlImplState<IEmployeeData>, EmployeeState {
        lastEmployees: IEmployeeData[];
        inputKeyDown: SimpleEvent<React.KeyboardEvent>;
        favoritesStorage: FavoriteEmployeesStorage;
        employeeVisualizer: EmployeeVisualizer;
        employeeLoader: EmployeeLoader;
    }
    /** @internal */
    class EmployeeImpl extends InputBasedControlImpl<IEmployeeData, EmployeeParams, EmployeeImplState> {
        constructor(props: EmployeeParams);
        protected setValue(value: IEmployeeData, redraw: boolean): void;
        protected initHelpers(props: EmployeeParams): void;
        static validValue(value: IEmployeeData): boolean;
        protected getTextValue(): string;
        protected renderInto(props: EmployeeParams, container: HTMLElement): Employee;
        protected onInputKeyDown(ev: React.KeyboardEvent): void;
        protected onInputChange(event: any): void;
        protected getValueTitle(): string;
        protected showEditPopover(popoverOptions?: IEditPopoverProps): void;
        protected getFavoritesStorageName(props: EmployeeParams): string;
        protected onSelected(typeaheadVariant: ITypeaheadVariant): void;
        protected renderInputWithPlaceholder(): JSX.Element;
        /** Restricts selection of employees by this department only */
        restrictUnitId: string;
        tipMode: any;
        supportFavourites: any;
        favoriteEmployees: IEmployeeData[];
        addToFavorite(item: IEmployeeData): void;
    }
}
declare namespace WebClient {
    /**
    * Предоставляет данные сотрудника для элементов управления [Сотрудник]{@link Employee} и [Сотрудники]{@link MultipleEmployees}.
    */
    interface IEmployeeData extends IBasicEmployeeInfo {
        /** Путь к полю карточки с идентификатором сотрудника. */
        fieldPath: string;
    }
}
declare namespace WebClient {
    interface IFindEmployeeResult {
        employees: IFindEmployeeResultItem[];
        hasMore: boolean;
    }
}
declare namespace WebClient {
    interface IFindEmployeeResultItem {
        Id: string;
        FullName: string;
        FirstName: string;
        MiddleName: string;
        LastName: string;
        IsMyself: boolean;
        Position: string;
        IsFavoritePerformer: boolean;
    }
}
declare namespace WebClient {
    interface IMultipleEmployeeData {
        employees: IEmployeeData[];
        fieldPath: string;
    }
}
declare namespace WebClient {
    /**
    * Определяет возможные форматы отображения информации о выбранном сотруднике во всплывающей подсказке.
    */
    enum EmployeeTooltipMode {
        /** Отображать ФИО. */
        Fio = 0,
        /** Отображать ФИО и должность. */
        FioAndPosition = 1,
        /** Не отображать данные о сотруднике. */
        None = 2,
    }
}
declare namespace WebClient {
    /**
    * Определяет возможные форматы отображения информации о выбранном сотруднике во всплывающей подсказке.
    */
    enum EmployeeViewMode {
        /** Отображать фамилию и инициалы */
        LastNameAndInitials = 0,
        /** Отображать значение DisplayName */
        DisplayName = 1,
        /** Если доступно значение DisplayName используется оно, иначе фамилия с инициалами. */
        Auto = 2,
    }
}
declare namespace WebClient {
    /** @internal */
    class EmployeeTypeaheadVariant implements ITypeaheadVariant {
        data: IEmployeeData;
        mTitle: string;
        mFavored: boolean;
        constructor(data: IEmployeeData, title: string, favored?: boolean);
        readonly name: string;
        readonly value: string;
        readonly iconCssClass: string;
        readonly title: string;
        readonly favored: boolean;
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [Раскрывающийся список]{@link Dropdown}.
    */
    class DropdownParams extends InputBasedControlParams<string> {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Список элементов, доступных для выбора */
        elements: ElementDataModel[];
        /** Флаг развернутости Раскрывающегося списка */
        isCollapsed: boolean;
        /** Событие возникает при сворачивании Раскрывающегося списка. */
        collapsing?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает после сворачивания Раскрывающегося списка. */
        collapsed?: BasicApiEvent<IEventArgs>;
        /** Событие возникает при разворачивании Раскрывающегося списка. */
        expanding?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает после разворачивания Раскрывающегося списка. */
        expanded?: BasicApiEvent<IEventArgs>;
    }
    /** @internal */
    interface DropdownState extends DropdownParams, InputBasedControlState<string> {
        binding: IBindingResult<string>;
        isEmptyKeyAllowed: boolean;
    }
    /**
     * Класс элемента управления Раскрывающийся список.
     */
    class Dropdown extends InputBasedControl<string, DropdownParams, DropdownState> {
        protected createParams(): WebClient.DropdownParams;
        private setElements;
        private setBinding;
        private setDefault;
        protected getBindings(): IBindingResult<any>[];
        protected getDefault(): string;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface DropdownImplState extends InputBasedControlImplState<string>, DropdownState {
    }
    /** @internal */
    class DropdownImpl extends InputBasedControlImpl<string, DropdownParams, DropdownImplState> {
        /**
         * Корневой узел дропдауна
         */
        protected el: HTMLElement;
        /**
         * Сфокусированный элемент
         */
        protected focusedElement: ElementDataModel;
        /**
         * Заголовок комбобокса
         */
        protected comboboxTitle: ComboBoxTitle;
        /**
         * Предыдущий сфокусированный элемент (глобально)
         */
        protected prevActiveElement: HTMLElement;
        protected prevActiveElementEvent: (event: FocusEvent) => void;
        static readonly EMPTY_ELEMENT: ElementDataModel;
        constructor(props: any);
        componentWillMount(): void;
        componentWillUnmount(): void;
        protected handleDocumentClick: (event?: Event) => void;
        protected handleDocumentFocus: (event: FocusEvent) => void;
        protected setValue(value: string, redraw: boolean): void;
        protected getTextValue(): string;
        protected onDropdownContainerClick(e?: any): void;
        protected onElementClick(element: ElementDataModel): void;
        protected onClearValueClick(e: React.MouseEvent): void;
        protected onPlaceholderClick(event: any): void;
        protected toggleCollapsed: () => CancelableEventArgs<IEventArgs>;
        protected expandDropdown: () => CancelableEventArgs<IEventArgs>;
        protected collapseDropdown: () => CancelableEventArgs<IEventArgs>;
        protected isNotSameDropdown: (target: HTMLElement) => boolean;
        protected onInputFocus(event: React.FocusEvent): void;
        protected onInputBlur(event: React.FocusEvent): void;
        /**
         * При фокусе элемента списка
         * @param event Событие фокуса
         * @param element Текущий элемент
         */
        protected onFocusElement: (event: __React.FocusEvent, element: ElementDataModel) => void;
        /**
         * При снятии фокуса у элемента списка
         * @param event Событие снятия фокуса
         * @param element Текущий элемент
         */
        protected onBlurElement: (event: __React.FocusEvent, element: ElementDataModel) => void;
        /**
         * При фокусе соседнего элемента в списке
         * @param element Текущий элемент
         * @param mode Какой из соседних элементов должен получить фокус (предыдущий или следующий)
         */
        protected onFocusSiblingElement: (element: ElementDataModel, mode: "next" | "prev") => void;
        protected showEditPopover(popoverOptions?: IEditPopoverProps): void;
        protected renderInto(props: DropdownParams, container: HTMLElement): Dropdown;
        protected renderInput(): JSX.Element;
        protected renderPlaceholder(): any;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Строка конструктора справочников]{@link DirectoryDesignerRow}.
     */
    class DirectoryDesignerRowParams extends InputBasedControlParams<IDirectoryDesignerRowInfo> {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Флаг, указывающий на состояние окна выбора строки: true - открыто, false - закрыто. */
        isDictionaryShown?: boolean;
        /** Идентификатор узла Конструктора справочников, из которого выбираются записи.
        *
        * Если ограничение по узлам отсутствует, то свойство имеет значение Guid.Empty.
        */
        itemType?: string;
        /**  Область выбора (и поиска) элементов из Конструктора справочников. */
        selectionArea?: DirectoryDesignerAreas;
        /** Задержка перед поиском (в мс) */
        searchDelay?: number;
    }
    /** @internal */
    interface DirectoryDesignerRowState extends DirectoryDesignerRowParams, InputBasedControlState<IDirectoryDesignerRowInfo> {
        binding: IBindingResult<IDirectoryDesignerRowInfo>;
    }
    /**
     * Класс элемента управления Строка конструктора справочников.
     *
     * Добавляет в web-разметку поле ввода с кнопкой вызова диалогового окна для выбора записи из *Конструктора справочников*.
     */
    class DirectoryDesignerRow extends InputBasedControl<IDirectoryDesignerRowInfo, DirectoryDesignerRowParams, DirectoryDesignerRowState> {
        private readonly departmentImpl;
        protected createParams(): WebClient.DirectoryDesignerRowParams;
        private DirectoryDesignerRowBinding;
        private DefaultBindingHandler;
        private DefaultHandler;
        /**
        * Проверяет возможность открытия модального окна выбора строки.
        * @return true - возможно (если значение редактируемое), false - невозможно.
        */
        canShowDictionary(): boolean;
        /**
        * Открывает окно выбора строки.
        */
        showDictionary(): void;
        /**
        * Закрывает окно выбора строки.
        */
        hideDictionary(): void;
        protected getBindings(): IBindingResult<any>[];
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface DirectoryDesignerRowImplState extends InputBasedControlImplState<IDirectoryDesignerRowInfo>, DirectoryDesignerRowState {
        dialog: WebClient.ModalWindow;
        requestHelper: RequestHelper;
        inputKeyDown: SimpleEvent<React.KeyboardEvent>;
    }
    /** @internal */
    class DirectoryDesignerRowImpl extends InputBasedControlImpl<IDirectoryDesignerRowInfo, DirectoryDesignerRowParams, DirectoryDesignerRowImplState> {
        static FirstPageSize: number;
        static NextPageSize: number;
        constructor(props: DirectoryDesignerRowParams);
        protected getTextValue(): string;
        protected renderInto(props: DirectoryDesignerRowParams, container: HTMLElement): DirectoryDesignerRow;
        protected showEditPopover(popoverOptions?: IEditPopoverProps): void;
        protected findItems(typeaheadQuery: ITypeaheadSearchQuery): JQueryDeferred<ITypeaheadSearchResult>;
        protected onSelected(variant: ITypeaheadVariant): void;
        protected onInputKeyDown(ev: React.KeyboardEvent): void;
        protected renderInputWithPlaceholder(): JSX.Element;
        showDictionary(): void;
        canShowDictionary(): boolean;
        hideDictionary(): void;
        protected onInputChange(event: any): void;
        readonly isDictionaryShown: boolean;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IDirectoryDesignerRowSelectDialogProps {
        nodeSelected: (node: DirectoryDesignerTreeNode) => void;
        searchDelay: number;
        node: string;
        selectionArea: DirectoryDesignerAreas;
    }
    /** @internal */
    interface IDirectoryDesignerRowSelectDialogState {
        requestHelper: RequestHelper;
        searchRequestHelper: RequestHelper;
        selectedNode: DirectoryDesignerTreeNode;
        treeWrapper: HTMLElement;
        searchResultCount: number;
        searchResultNumber: number;
        showingSearchResults: boolean;
        searchText: string;
        tree: DynamicTree;
        searchTimerHandle: number;
    }
    /** @internal */
    class DirectoryDesignerRowSelectDialog extends React.Component<IDirectoryDesignerRowSelectDialogProps, IDirectoryDesignerRowSelectDialogState> {
        static LoadTreeLevelDown: number;
        static LevelsToExapndByDefault: number;
        constructor(props: IDirectoryDesignerRowSelectDialogProps);
        readonly selectedDepartment: DirectoryDesignerTreeNode;
        protected loadTree(parentNode?: ITreeNodeData): JQueryDeferred<IDynamicTreeNodeData[]>;
        protected searchTree(searchText: string, resultNumber: number): JQueryDeferred<IDirectoryDesignerSearchTreeResult>;
        protected expandFirstLevels(nodes: DirectoryDesignerTreeNode[], currentLevel: number, expandLevel?: number): void;
        protected onNodeSelected(node: TreeNode): void;
        componentDidMount(): void;
        protected onNextResultClick(): void;
        protected onPrevResultClick(): void;
        protected onInputChange(ev: React.KeyboardEvent): void;
        protected onInputKeyDown(ev: React.KeyboardEvent): void;
        protected getSearchResultLabel(): string;
        renderSearchResult(nodeName: string, searchText: string, matchedPropertyName: string, matchedPropertyValue: string): JSX.Element;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    class DirectoryDesignerTreeNode implements IDynamicTreeNodeData {
        mData: IDirectoryDesignerTreeNodeDigest;
        mChildren: DirectoryDesignerTreeNode[];
        mName: string | JSX.Element;
        static Create(data: IDirectoryDesignerTreeNodeDigest): DirectoryDesignerTreeNode;
        static CreateMany(dataArray: IDirectoryDesignerTreeNodeDigest[]): DirectoryDesignerTreeNode[];
        readonly data: IDirectoryDesignerTreeNodeDigest;
        displayName: string | JSX.Element;
        readonly uniqueId: string;
        readonly iconClass: string;
        readonly children: ITreeNodeData[];
        expandedByDefault: boolean;
        childrenLoaded: boolean;
        readonly disabled: boolean;
    }
}
declare namespace WebClient {
    /** @internal */
    class DirectoryDesignerTypeaheadVariant implements ITypeaheadVariant {
        data: IDirectoryDesignerRowDigest;
        constructor(data: IDirectoryDesignerRowDigest);
        readonly name: string;
        readonly value: string;
        readonly iconCssClass: string;
        readonly title: string;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Подразделение]{@link Department}.
     */
    class DepartmentParams extends InputBasedControlParams<IDepartmentInfo> {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Флаг, указывающий, что из справочника разрешено выбирать организации: true - разрешено, false - не разрешено. */
        selectOrganisations?: boolean;
        /** Флаг, указывающий, что из справочника разрешено выбирать подразделения: true - разрешено, false - не разрешено. */
        selectDepartments?: boolean;
        /** Справочник, из которого осуществляется выбор организации/подразделения. */
        source?: DepartmentSource;
        /** Флаг, указывающий на состояние окна выбора организации/подразделения: true - открыто, false - закрыто. */
        isDictionaryShown?: boolean;
        /** Режим диалога */
        dialogMode?: DepartmentDialogMode;
        /** Задержка перед поиском (в мс) */
        searchDelay?: number;
    }
    /** @internal */
    interface DepartmentState extends DepartmentParams, InputBasedControlState<IDepartmentInfo> {
        binding: IBindingResult<IDepartmentInfo>;
    }
    /**
     * Класс элемента управления Подразделение.
     *
     * Добавляет в web-разметку поле ввода с кнопкой вызова диалогового окна для выбора записи из *Справочника сотрудников* или *Справочника контрагентов*.
     */
    class Department extends InputBasedControl<IDepartmentInfo, DepartmentParams, DepartmentState> {
        protected createParams(): WebClient.DepartmentParams;
        private readonly departmentImpl;
        private DepartmentBinding;
        /**
         * Проверяет возможность открытия модального окна выбора организации/подразделения.
         * @return true - возможно (если значение редактируемое), false - невозможно.
         */
        canShowDictionary(): boolean;
        /**
         * Открывает окно выбора организации/подразделения.
         */
        showDictionary(): void;
        /**
         * Закрывает окно выбора организации/подразделения.
         */
        hideDictionary(): void;
        protected getBindings(): IBindingResult<any>[];
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    namespace DepartmentHelpers {
        /** @internal */
        interface IDepartmentFilterProps {
            predefinedFilter?: IDepartmentInfo;
            selectedFilterPath: IDepartmentInfo[];
            readonly?: boolean;
            rootLabel: string;
            rootTip?: string;
            onSelectedFilterPathChange: (newPath: IDepartmentInfo[]) => void;
        }
        interface IDepartmentFilterState {
        }
        /** @internal */
        class DepartmentFilter extends React.Component<IDepartmentFilterProps, IDepartmentFilterState> {
            protected onFilterItemClick: (item: IDepartmentInfo) => void;
            render(): JSX.Element;
        }
    }
}
declare namespace WebClient {
    namespace DepartmentHelpers {
        /** @internal */
        interface IDepartmentFilterViewProps {
            predefinedFilter?: IDepartmentInfo;
            selectedFilterPath: IDepartmentInfo[];
            readonly?: boolean;
            rootLabel: string;
            rootTip?: string;
            /** При выборе элемента */
            onFilterItemClick?: (item: IDepartmentInfo | null) => void;
        }
        /** @internal */
        const DepartmentFilterView: (props: IDepartmentFilterViewProps) => JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface DepartmentImplState extends InputBasedControlImplState<IDepartmentInfo>, DepartmentState {
        requestHelper: RequestHelper;
        directoryDialogOpen: boolean;
        directoryDialogSelectedValue: IDepartmentInfo;
        inputKeyDown: SimpleEvent<React.KeyboardEvent>;
    }
    /** @internal */
    class DepartmentImpl extends InputBasedControlImpl<IDepartmentInfo, DepartmentParams, DepartmentImplState> {
        static FirstPageSize: number;
        static NextPageSize: number;
        constructor(props: DepartmentParams);
        protected readonly source: DepartmentSource;
        protected getTextValue(): string;
        protected getValueTitle(): string;
        protected getInputTitle(): string;
        protected renderInto(props: DepartmentParams, container: HTMLElement): Department;
        protected showEditPopover(popoverOptions?: IEditPopoverProps): void;
        protected readonly itemTypes: SearchDepartmentType;
        protected findItems(typeaheadQuery: ITypeaheadSearchQuery): JQueryDeferred<ITypeaheadSearchResult>;
        protected onSelected(variant: ITypeaheadVariant): void;
        showDictionary(): void;
        hideDictionary(): void;
        readonly isDictionaryShown: boolean;
        protected onInputKeyDown(ev: React.KeyboardEvent): void;
        protected onDirectoryDialogNodeSelected(node: IDepartmentInfo): void;
        protected onDirectoryDialogSelectButtonClick(): void;
        protected onInputChange(event: any): void;
        protected renderInputWithPlaceholder(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IDepartmentSelectedNodesPath {
        [departmentId: string]: IDepartmentInfo;
    }
    /** @internal */
    interface IDepartmentSelectDialogFlatProps {
        itemTypes: SearchDepartmentType;
        departmentSelected: (node: IDepartmentInfo) => void;
        /** Where to perform the search */
        source: DepartmentSource;
        /** Тип родительского контрола */
        controlType?: string;
        /** Задержка перед поиском (в мс) */
        searchDelay?: number;
        onSelect?: () => void;
    }
    /** @internal */
    interface IDepartmentSelectDialogFlatState {
        requestHelper: RequestHelper;
        searchRequestHelper: RequestHelper;
        selectedNode: IDepartmentInfo;
        selectedNodeFocused: boolean;
        /** Список выбранных узлов с прошлых уровней, используется только для навигации с клавиатуры */
        selectedNodesPath: IDepartmentSelectedNodesPath;
        searchResultCount: number;
        showingSearchResults: boolean;
        initialLoading: boolean;
        initialLoadingState: LoadingState;
        breadcrumbsNodes: IDepartmentInfo[];
        childrenListCache: IDepartmentNodeCache;
        searchText: string;
        searchItems: IDepartmentsSearchItemFlat[];
        searchTimerHandle: number;
        searchDebouncer: QuickSearchLogic;
        /** Время последнего изменения справочника */
        directoryTimestamp: number;
        hasMoreSearchItems: boolean;
    }
    interface IDepartmentNodeCacheItem {
        items: IDepartmentFlatDigest[];
        totalItemsCount: number;
        accessTimestamp: Date;
    }
    interface IDepartmentNodeCache {
        [id: string]: IDepartmentNodeCacheItem;
    }
    /**
     * @internal
     * Компонент не до конца реализован
     */
    class DepartmentSelectDialogFlat extends React.Component<IDepartmentSelectDialogFlatProps, IDepartmentSelectDialogFlatState> {
        static ItemHeight: number;
        static ChildrenPageSize: number;
        static SearchPageSize: number;
        static SimpleItemView: styled.StyledComponentClass<React.HTMLProps<any>, any, React.HTMLProps<HTMLButtonElement> & ICustomTreeNodeContentDefaultProps>;
        static SimpleItemViewCompact: styled.StyledComponentClass<React.HTMLProps<any>, any, React.HTMLProps<HTMLButtonElement> & ICustomTreeNodeContentDefaultProps>;
        static LoadingNode: styled.StyledComponentClass<React.HTMLProps<HTMLButtonElement> & ICustomTreeNodeContentDefaultProps & {
            className: string;
        }, any, React.HTMLProps<HTMLButtonElement> & ICustomTreeNodeContentDefaultProps>;
        static LoadTreeLevelDown: number;
        static LevelsToExapndByDefault: number;
        reactList: ReactListDynamic;
        recursive: RecursiveVisitor<IDepartmentFlatDigest>;
        searchInput: HTMLInputElement;
        protected readonly rootId: string;
        constructor(props: IDepartmentSelectDialogFlatProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        componentWillReceiveProps(newProps: IDepartmentSelectDialogFlatProps): void;
        protected getNodeIconClass: (node: IDepartmentsSearchItemFlat | IDepartmentFlatDigest) => "dv-ico dv-ico-department" | "dv-ico dv-ico-organisation";
        protected readonly currentDepartment: IDepartmentInfo;
        protected readonly currentDepartmentId: string;
        protected readonly rootLabel: string;
        protected readonly currentChildrenCache: IDepartmentNodeCacheItem;
        protected attachSearchInput: (elem: HTMLInputElement) => void;
        protected clearCache(): void;
        protected getDepartmentCache(id?: string): IDepartmentNodeCacheItem;
        protected onModalKeyDown: (ev: any) => void;
        protected onNavigateToFolder: (parentNode?: IDepartmentInfo) => void;
        protected loadChildrenListByIndexes: (indexes: number[]) => void;
        protected loadChildrenList: (parentNodeId: string, start: number, end: number) => JQueryPromise<ILoadDepartmentsFlatResponse>;
        protected onChildrenLoaded(response: ILoadDepartmentsFlatResponse, parentId: string, from: number): void;
        protected search(query: IDepartmentsFlatSearchQuery, reset: boolean): JQueryDeferred<{}>;
        protected isNodeDisabled(node: IDepartmentTreeDigest | IDepartmentInfo, enabledItemTypes?: SearchDepartmentType): boolean;
        protected onNodeSelected(node: IDepartmentInfo): void;
        protected onNodeExpanded(node: IDepartmentFlatDigest | IDepartmentsSearchItemFlat): void;
        protected onNodeSelectSibling: (mode: "next" | "prev", index: number, getCollectionData: () => IDepartmentsSearchItemFlat[] | IDepartmentFlatDigest[]) => void;
        protected onInputChange(ev: React.KeyboardEvent): void;
        protected onInputKeyUp: (ev: __React.KeyboardEvent) => void;
        protected onLoadNewSearchResults: () => void;
        protected onInputKeyDown(ev: React.KeyboardEvent): void;
        protected getSearchResultLabel(): string;
        protected breadcrumbsOnChange: (nodes: IDepartmentInfo[]) => void;
        protected onSelectedFilterMoveBack: () => void;
        private resetSearchMode;
        protected renderLoadingItem: (index: number, key: string | number) => JSX.Element;
        protected renderEmptyItem: (index: number, key: string | number) => JSX.Element;
        protected onLoadNextSearchPage: (page: any) => JQueryDeferred<{}>;
        protected onSearchPathItemClick: (department: IDepartmentInfo, item: IDepartmentsSearchItemFlat) => void;
        protected renderSearchItem: (index: number, key: string) => JSX.Element;
        protected renderNode: (key: string | number, node: IDepartmentFlatDigest, index: number) => JSX.Element;
        protected renderGoToButton(node: IDepartmentFlatDigest | IDepartmentsSearchItemFlat): JSX.Element;
        protected renderItems(): JSX.Element;
        protected renderFlatItems(): JSX.Element;
        protected renderSearchItems(): JSX.Element;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IDepartmentSelectDialogProps {
        itemTypes: SearchDepartmentType;
        departmentSelected: (node: IDepartmentTreeDigest) => void;
        /** Where to perform the search */
        source: DepartmentSource;
        /** Задержка перед поиском (в мс) */
        searchDelay?: number;
    }
    /** @internal */
    interface IDepartmentSelectDialogState {
        requestHelper: RequestHelper;
        searchRequestHelper: RequestHelper;
        selectedNode: IDepartmentTreeDigest;
        treeWrapper: HTMLElement;
        searchResultCount: number;
        showingSearchResults: boolean;
        searchText: string;
        initialLoading: LoadingState;
        nodes: IDepartmentTreeDigest[];
        flatNodes: IDepartmentTreeDigest[];
        searchTimerHandle: number;
    }
    /** @internal */
    class DepartmentSelectDialog extends React.Component<IDepartmentSelectDialogProps, IDepartmentSelectDialogState> {
        static LoadTreeLevelDown: number;
        static LevelsToExapndByDefault: number;
        recursive: RecursiveVisitor<IDepartmentTreeDigest>;
        /** Уровень узла */
        levels: IAccessor<IDepartmentTreeDigest, number>;
        /** Раскрыт ли узел */
        expanded: IAccessor<IDepartmentTreeDigest, boolean>;
        /** Виден ли узел */
        visible: IAccessor<IDepartmentTreeDigest, boolean>;
        /** Отображает процесс загрузки данных с сервера */
        childrenLoading: IAccessor<IDepartmentTreeDigest, LoadingState>;
        /** Были ли загружены узлы с сервера */
        childrenLoaded: IAccessor<IDepartmentTreeDigest, boolean>;
        /** Название для отображаемых имён узлов */
        displayNames: IAccessor<IDepartmentTreeDigest, string | JSX.Element>;
        /** Идентификаторы родительских узлов */
        parentIDs: IAccessor<IDepartmentTreeDigest, string>;
        /** Выключенные узлы */
        disabled: IAccessor<IDepartmentTreeDigest, boolean>;
        constructor(props: IDepartmentSelectDialogProps);
        componentDidMount(): void;
        protected getNodeID: (node: IDepartmentTreeDigest) => string;
        protected getNodeIconClass: (node: IDepartmentTreeDigest) => "dv-ico dv-ico-department" | "dv-ico dv-ico-organisation";
        protected resetStores: () => void;
        readonly selectedDepartment: IDepartmentTreeDigest;
        protected loadTree(parentNode?: IDepartmentTreeDigest): JQueryDeferred<IDepartmentTreeDigest[]>;
        protected loadNodeChild(node: IDepartmentTreeDigest): JQueryPromise<IDepartmentTreeDigest[]>;
        protected searchTree(searchText: string, resultNumber: number): JQueryDeferred<ISearchDepartmentsTreeResult>;
        protected updateNodesVisibility(visibility: boolean, nodes: IDepartmentTreeDigest[], parentNode?: IDepartmentTreeDigest): void;
        protected updateNodesMeta(nodes: IDepartmentTreeDigest[], parentNode?: IDepartmentTreeDigest, enabledItemTypes?: SearchDepartmentType): void;
        protected onNodeSelected(node: IDepartmentTreeDigest): void;
        protected onNodeToggle(node: IDepartmentTreeDigest): void;
        protected onInputChange(ev: React.KeyboardEvent): void;
        protected onInputKeyDown(ev: React.KeyboardEvent): void;
        protected getSearchResultLabel(): string;
        private resetSearchMode();
        renderSearchResult(nodeName: string, searchText: string, matchedPropertyName: string, matchedPropertyValue: string): JSX.Element;
        renderNode: (index: any, key: any) => JSX.Element;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    enum DepartmentDialogMode {
        Tree = 0,
        List = 1,
    }
}
declare namespace WebClient {
    interface IDepartmentTreeNodeData {
        childrenLoaded: boolean;
        displayName: string | JSX.Element;
        uniqueId: string;
        parentUniqueId?: string;
        iconClass: string;
        level: number;
        visible: boolean;
        children: IDepartmentTreeNodeData[];
        nodeClass?: string;
        disabled?: boolean;
        title?: string;
        loading?: LoadingState;
    }
    /** @internal */
    class DepartmentTreeNodeData implements IDepartmentTreeNodeData {
        private mData;
        private mChildren;
        private mName;
        private mExpanded;
        level: number;
        visible: boolean;
        parentUniqueId: string;
        loading: LoadingState;
        static Create(data: IDepartmentTreeDigest, enabledItemTypes: SearchDepartmentType): DepartmentTreeNodeData;
        static CreateMany(dataArray: IDepartmentTreeDigest[], enabledItemTypes: SearchDepartmentType): DepartmentTreeNodeData[];
        disabled: boolean;
        readonly data: IDepartmentTreeDigest;
        displayName: string | JSX.Element;
        readonly uniqueId: string;
        readonly title: string;
        readonly iconClass: string;
        children: DepartmentTreeNodeData[];
        expanded: boolean;
        childrenLoaded: boolean;
    }
}
declare namespace WebClient {
    /** @internal */
    class DepartmentTypeaheadVariant implements ITypeaheadVariant {
        data: IDepartmentDigest;
        constructor(data: IDepartmentDigest);
        readonly name: string;
        readonly value: string;
        readonly iconCssClass: string;
        readonly title: string;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Дата/время]{@link DateTimePicker}.
     */
    class DateTimePickerParams extends InputBasedControlParams<Date> {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Режим представления данных в элементе управления. */
        dateTimePickerMode?: DateTimePickerMode;
        /** Флаг, указывающий, что для значения по умолчанию должны использоваться текущие дата и время: true - использовать текущие дату и время, false - использовать предустановленное {@link defaultDateTime} в значение.*/
        defaultCurrentDateTime?: boolean;
        /** Возвращает строку с датой и временем, которые по умолчанию устанавливаются в значение.*/
        defaultDateTime?: string;
        /** Возвращает смещение времени (в часах) для значения времени по умолчанию.
        *
        * Значение *defaultDateTimeShift* прибавляется к часам в значении {@link defaultDateTime}.
        * В элементе управления отображается итоговое значение.
        */
        defaultDateTimeShift?: number;
        /** Возвращает максимальная дату, которая может быть выбрана. */
        minDate?: Date;
        /** Возвращает минимальную дату, которая может быть выбрана. */
        maxDate?: Date;
    }
    /** @internal */
    interface DateTimePickerState extends DateTimePickerParams, InputBasedControlState<Date> {
        binding: IBindingResult<Date>;
        showClearButton: boolean;
    }
    /**
     * Класс элемента управления Дата/время.
     *
     * Добавляет в web-разметку элемент управления для изменения значения даты и времени.
     */
    class DateTimePicker extends InputBasedControl<Date, DateTimePickerParams, DateTimePickerState> {
        protected createParams(): WebClient.DateTimePickerParams;
        private readonly dateTimePickerImpl;
        private dateTimePickerBinding;
        private dateTimePickerMode;
        /**
         * Проверяет возможность очистки значения элемента управления.
         * @return true - значение может быть очищено (если оно установлено и его можно изменять), false - если значение не может быть очищено.
         */
        canClear(): boolean;
        /**
         * Очищает значение (выбранную дату).
         */
        clear(): void;
        protected getBindings(): IBindingResult<any>[];
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface DateTimePickerImplState extends InputBasedControlImplState<Date>, DateTimePickerState {
        timeInput: HTMLInputElement;
        dateTimeFormat: DateTimeFormat;
        timeInputText: string;
        clearButton: HTMLElement;
    }
    /** @internal */
    class DateTimePickerImpl extends InputBasedControlImpl<Date, DateTimePickerParams, DateTimePickerImplState> {
        constructor(props: any);
        componentDidMount(): void;
        componentWillUnmount(): void;
        protected addGlobalListeners(): void;
        protected removeGlobalListeners(): void;
        protected getTextValue(): string;
        protected renderInto(props: DateTimePickerParams, container: HTMLElement): DateTimePicker;
        protected getDefaultValue(): Date;
        protected getDateString(): string;
        protected getTimeString(): string;
        protected readonly dateInput: HTMLInputElement;
        protected onInPlaceEditOpened(): void;
        protected onEditPopoverShowed(control: any): void;
        protected showEditPopover(popoverOptions?: IEditPopoverProps): void;
        protected setValue(value: Date, redraw: boolean): void;
        protected updateTimeForSelectedDate(date: Date): Date;
        protected initializeJQuryDatePicker(): void;
        protected onCalendarIconClick(): void;
        protected onTimeInputKeypress(ev: React.KeyboardEvent): void;
        protected hideCalendar(): void;
        protected onTimeInputChange(ev: any): void;
        protected onTimeInputBlur(): void;
        protected onDateInputFocus(ev: React.FocusEvent): void;
        protected getCssClass(): string;
        protected renderInputWithPlaceholder(): JSX.Element;
        protected renderInput(): JSX.Element;
        clear(): void;
        canClear(): boolean;
    }
}
declare namespace WebClient {
    /**
    * Определяет возможные варианты представления данных в элементе управления Дата/время (см. {@link DateTimePickerParams}).
    */
    enum DateTimePickerMode {
        /** Дата и время. */
        DateTime = 0,
        /** Только дата. */
        Date = 1,
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [RecentCardsDashboardWidget]{@link RecentCardsDashboardWidget}.
    */
    class RecentCardsDashboardWidgetParams extends PanelParams {
        /** Текст заголовка. */
        header: string;
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
    }
    /** @internal */
    interface RecentCardsDashboardWidgetState extends RecentCardsDashboardWidgetParams, PanelState {
    }
    /**
     * @review
     */
    class RecentCardsDashboardWidget extends Panel<RecentCardsDashboardWidgetParams, RecentCardsDashboardWidgetState> {
        constructor(props: RecentCardsDashboardWidgetParams);
        createParams(): WebClient.RecentCardsDashboardWidgetParams;
        private textResourceKey;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface RecentCardsDashboardWidgetImplState extends PanelImplState, RecentCardsDashboardWidgetState {
        gridModel: any;
        loader: RequestHelper;
        gridContainer: HTMLElement;
    }
    /** @internal */
    class RecentCardsDashboardWidgetImpl<PropsT extends RecentCardsDashboardWidgetParams, StateT extends RecentCardsDashboardWidgetImplState> extends PanelImpl<PropsT, StateT> {
        static readonly size: number;
        constructor(props: PropsT);
        componentDidMount(): void;
        loadGridModel(): void;
        protected gridDataLoader(requestData: any, isMobile: boolean): JQueryDeferred<any>;
        protected gridModelLoader: (requestData: any, isMobile: boolean) => JQueryDeferred<any>;
        mountGrid(): void;
        attachGridContainer: (elem: HTMLElement) => void;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [FolderGroupDashboardWidget]{@link FolderGroupDashboardWidget}.
    */
    class FolderGroupDashboardWidgetParams extends PanelParams {
        /** Текст метки. */
        text: string;
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        headerFolderId?: string;
        headerFolderInfo?: IFolderItemNodeData;
        headerFolderUnreadCount?: number;
        color?: string;
        unreadCount?: number;
        forceVirtualFolderSearch?: boolean;
    }
    /** @internal */
    interface FolderGroupDashboardWidgetState extends FolderGroupDashboardWidgetParams, PanelState {
    }
    /**
     * @review
     */
    class FolderGroupDashboardWidget extends Panel<FolderGroupDashboardWidgetParams, FolderGroupDashboardWidgetState> {
        constructor(props: FolderGroupDashboardWidgetParams);
        createParams(): WebClient.FolderGroupDashboardWidgetParams;
        init(): void;
        deinit(): void;
        protected headerFolderInfo: IFolderItemNodeData;
        private textResourceKey;
        protected forceVirtualFolderSearch: string | boolean;
        onUnreadCountChanged: () => void;
        addUnreadCountRequest(): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface FolderGroupDashboardWidgetImplState extends PanelImplState, FolderGroupDashboardWidgetState {
    }
    /** @internal */
    class FolderGroupDashboardWidgetImpl<PropsT extends FolderGroupDashboardWidgetParams, StateT extends FolderGroupDashboardWidgetImplState> extends PanelImpl<PropsT, StateT> {
        constructor(props: PropsT);
        getHeader(): string;
        getNavigationHref(): string;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [FolderDashboardWidget]{@link FolderDashboardWidget}.
    */
    class FolderDashboardWidgetParams extends PanelParams {
        /** Текст метки. */
        text: string;
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        folderId?: string;
        folderInfo?: IFolderItemNodeData;
        folderUnreadCount?: number;
        color?: string;
        unreadCount?: number;
        forceVirtualFolderSearch?: boolean;
    }
    /** @internal */
    interface FolderDashboardWidgetState extends FolderDashboardWidgetParams, PanelState {
    }
    /**
     * @review
     */
    class FolderDashboardWidget extends Panel<FolderDashboardWidgetParams, FolderDashboardWidgetState> {
        constructor(props: FolderDashboardWidgetParams);
        createParams(): WebClient.FolderDashboardWidgetParams;
        init(): void;
        deinit(): void;
        protected headerFolderInfo: IFolderItemNodeData;
        private textResourceKey;
        protected forceVirtualFolderSearch: string | boolean;
        onUnreadCountChanged: () => void;
        addUnreadCountRequest(): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface FolderDashboardWidgetImplState extends PanelImplState, FolderDashboardWidgetState {
    }
    /** @internal */
    class FolderDashboardWidgetImpl<PropsT extends FolderDashboardWidgetParams, StateT extends FolderDashboardWidgetImplState> extends PanelImpl<PropsT, StateT> {
        constructor(props: PropsT);
        getHeader(): string;
        getNavigationHref(): string;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [DashboardContainer]{@link DashboardContainer}.
    */
    class DashboardContainerParams extends PanelParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
    }
    /** @internal */
    interface DashboardContainerState extends DashboardContainerParams, PanelState {
    }
    /**
     * @review
     */
    class DashboardContainer extends Panel<DashboardContainerParams, DashboardContainerState> {
        constructor(props: DashboardContainerParams);
        createParams(): WebClient.DashboardContainerParams;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface DashboardContainerImplState extends PanelImplState, DashboardContainerState {
    }
    /** @internal */
    class DashboardContainerImpl<PropsT extends DashboardContainerParams, StateT extends DashboardContainerImplState> extends PanelImpl<PropsT, StateT> {
        constructor(props: PropsT);
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Кнопка]{@link CustomButton}.
     */
    class CustomButtonParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Текст, отображаемый в Кнопке. */
        text?: string;
        /** Текст всплывающей подсказки. */
        tip?: string;
        /** Имя CSS класса, в котором определен путь к иконке, отображаемой в Кнопке. */
        iconClass?: string;
        /** Флаг, определяющий, что Кнопка может быть нажата: true - разрешено (разрешена настроенная операция редактирования), false - не разрешено. */
        canClick?: boolean;
        /**
        * Флаг, указывающий, что для Кнопки должен применяться основной стиль карточки: true - использовать основной стиль, false - использовать стандартный стиль.
        *
        * Если свойство primary в значении true, то при открытии карточки определенного типа, к кнопке будет применен стиль с названием `.ИМЯ_СТИЛЯ_КАРТОЧКИ button.button-helper.primary-button`.
        * Данный стиль предопределен для типов карточек: Документ, Задание и Группа заданий.
        * Чтобы создать основной стиль Кнопки для собственного типа, добавьте CSS класс:
        *
        *    `.document button.button-helper.primary-button {
        *    color: white;
        *    background: rgba(0, 149, 218, 0.8);
        *    }
        *    .document button.button-helper.primary-button.disabled { color: lightgray; }`
        *
        */
        primary?: boolean;
        /** Флаг, указывающий, должна ли Кнопка "растягиваться" на всю доступную ширину: true - кнопка будет занимать всю доступную ширину, false - ширина кнопки определяется содержимым. */
        stretchWidth?: boolean;
    }
    /** @internal */
    interface CustomButtonState extends CustomButtonParams, BaseControlState {
    }
    /**
     * Класс элемента управления Кнопка.
     *
     * Добавляет в web-разметку кнопку для вызова произвольной функции из скрипта карточки.
     */
    class CustomButton extends BaseControl<CustomButtonParams, CustomButtonState> {
        constructor(props: CustomButtonParams);
        protected createParams(): WebClient.CustomButtonParams;
        private readonly myControlImpl;
        private bindingEditOperation;
        /**
         * Вызывает настроенный обработчик нажатия Кнопки.
         */
        performClick(): void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface CustomButtonImplState extends BaseControlImplState, CustomButtonState {
        loading: boolean;
    }
    /** @internal */
    class CustomButtonImpl extends BaseControlImpl<CustomButtonParams, CustomButtonImplState> {
        constructor(props: CustomButtonParams);
        loading: boolean;
        performClick(event?: React.MouseEvent): void;
        /** Переопределяет базовый метод, отменяя его логику (для данного контрола она отлична от базовой версии). */
        protected handleClick(event: React.MouseEvent): void;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    class ComboBoxParams extends InputBasedControlParams<IComboBoxVariant> {
        standardCssClass?: string;
        selectedValue: IComboBoxVariant;
        variants: IComboBoxVariant[];
        expanded: boolean;
        onSelect?: (variant: IComboBoxVariant) => void;
        className?: string;
    }
    /** @internal */
    interface ComboBoxState extends ComboBoxParams, InputBasedControlState<IComboBoxVariant> {
        items: IComboBoxItem[];
    }
    /** @internal */
    class ComboBox extends InputBasedControl<IComboBoxVariant, ComboBoxParams, ComboBoxState> {
        protected createParams(): WebClient.ComboBoxParams;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ComboBoxImplState extends InputBasedControlImplState<IComboBoxVariant>, ComboBoxState {
    }
    /** @internal
     * Control is not completed.
     */
    class ComboBoxImpl extends InputBasedControlImpl<IComboBoxVariant, ComboBoxParams, ComboBoxImplState> {
        constructor(props: ComboBoxParams);
        protected loadItems(variants: IComboBoxVariant[]): void;
        variants: IComboBoxVariant[];
        protected getCssClass(): string;
        protected initEditPopover(popover: EditPopover): void;
        protected onValueBoxClick(): void;
        protected renderEditPopover(popover: EditPopover): any;
        protected onItemClick(item: IComboBoxItem): void;
        protected renderInputWithPlaceholder(): JSX.Element;
        protected getTextValue(): string;
        protected renderInto(props: any, container: HTMLElement): any;
    }
}
declare namespace WebClient {
    interface IComboBoxItem {
        data: IComboBoxVariant;
        selected: boolean;
    }
}
declare namespace WebClient {
    interface IComboBoxVariant {
        displayName: string;
        uniqueId: string;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Флажок]{@link CheckBox}.
     */
    class CheckBoxParams extends InputBasedControlParams<boolean> {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Текст, отображаемый в элементе управления в режиме "Без редактирования", если значение равно `true`. */
        yesText?: string;
        /** Текст, отображаемый в элементе управления в режиме "Без редактирования", если значение равно `false`. */
        noText?: string;
    }
    /** @internal */
    interface CheckBoxState extends CheckBoxParams, InputBasedControlState<boolean> {
        binding: IBindingResult<boolean>;
    }
    /**
     * Класс элемента управления Флажок.
     *
     * Добавляет в web-разметку элемент управления для изменения значение булевого типа.
     */
    class CheckBox extends InputBasedControl<boolean, CheckBoxParams, CheckBoxState> {
        constructor(props: CheckBoxParams);
        protected createParams(): WebClient.CheckBoxParams;
        componentDidMount(): void;
        protected onDataChanged(): void;
        private readonly checkBoxImpl;
        private CheckBoxBinding;
        private checkboxDefault;
        protected getBindings(): IBindingResult<any>[];
        canShowEditDialog(): boolean;
        showEditDialog(): void;
        hideEditDialog(): void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface CheckBoxImplState extends InputBasedControlImplState<boolean>, CheckBoxState {
        saveHelper: RequestHelper;
        yesText: string;
        noText: string;
    }
    /** @internal */
    class CheckBoxImpl extends InputBasedControlImpl<boolean, CheckBoxParams, CheckBoxImplState> {
        constructor(props: CheckBoxParams);
        protected getTextValue(): string;
        protected renderInto(props: CheckBoxParams, container: HTMLElement): CheckBox;
        protected onInputChange(event: any): void;
        protected editInPlaceModeRender(): JSX.Element;
        protected renderInput(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Управление карточкой]{@link CardManagement}.
     */
    class CardManagementParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Флаг, указывающий на возможность изменения карточки: true - изменение разрешено (разрешена настроенная операция редактирования), false - изменение не разрешено.*/
        canEdit?: boolean;
        /** Флаг, указывающий на возможность удаления карточки: true - удаление разрешено (разрешена операция удаления карточки), false - удаление не разрешено. */
        canDelete?: boolean;
    }
    /** @internal */
    interface CardManagementState extends CardManagementParams, BaseControlState {
        refresh: Function;
        deleteAndRedirect: Function;
        goToEdit: Function;
    }
    /**
     * Класс элемента управления Управление карточкой.
     *
     * Добавляет в web-разметку автоматически скрываемые кнопки удаления, изменения и обновления карточки.
     */
    class CardManagement extends BaseControl<CardManagementParams, CardManagementState> {
        constructor(props: CardManagementParams);
        protected createParams(): WebClient.CardManagementParams;
        /**
         * Загружает данные карточки с сервере и обновляет отображаемое содержимое.
         */
        refresh(): void;
        /**
         * Удаляет текущую карточку.
         */
        delete(): void;
        /**
         * Переоткрывает текущую карточку в режиме редактирования.
         */
        edit(): void;
        private bindingEditOperation;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface CardManagementImplState extends BaseControlImplState, CardManagementState {
    }
    /** @internal */
    class CardManagementImpl extends BaseControlImpl<CardManagementParams, CardManagementImplState> {
        constructor(props: CardManagementParams);
        onEdit(): void;
        onDelete(): void;
        onRefresh(): void;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     * Публичные свойства для контрола {@link CardLink}.
     */
    class CardLinkParams extends BaseControlParams {
        standardCssClass?: string;
        /** Информация о текущей выбранной карточке. */
        value?: ICardLinkData;
        /** Доступно редактирование значения или нет (согласно операции редактирования). */
        canEdit?: boolean;
        /** Текст метки */
        labelText?: string;
        /** Флаг, определяющий, что метка должна отображаться, когда значение элемента управления не задано: true - отображать, false - не отображать. */
        showEmptyLabel?: boolean;
        /** Определяет какой текст будет отображаться для выбора ссылки, когда ссылка не указана.  */
        emptyText?: string;
        /** Всплывающая подсказка */
        tip?: string;
        /** Возвращает режим редактирования. */
        editMode?: EditMode;
        /** Типы карточек, которые пользователь может выбрать при добавлении ссылки. */
        cardTypes?: IAllowedCardType[];
        /** Идентификатор карточки. Параметр необходим только для случая, когда контрол находится вне разметки. */
        cardId?: string;
        /** Отрыто ли меню карточки. */
        menuExpanded?: boolean;
        /** обязательно ли для заполнения */
        required?: boolean;
        /** Событие, возникающее перед очисткой значения. */
        linkDeleting?: CancelableApiEvent<IEventArgs>;
        /** Событие, возникающее после очистки значения. */
        linkDeleted?: BasicApiEvent<IEventArgs>;
        /** Событие, возникающее перед открытием окна выбора карточки. */
        windowOpening?: CancelableApiEvent<IEventArgs>;
        /** Событие, возникающее после открытия окна выбора карточки. */
        windowOpened?: BasicApiEvent<IEventArgs>;
        /** Событие, возникающее перед закрытием окна выбора карточки. */
        windowClosing?: CancelableApiEvent<IEventArgs>;
        /** Событие, возникающее после закрытия окна выбора карточки. */
        windowClosed?: BasicApiEvent<IEventArgs>;
        /** Событие возникающее при изменении значения элемента управления. */
        dataChanged?: BasicApiEvent<IDataChangedEventArgsEx<ICardLinkData>>;
        /** Событие, возникающее перед открытием предпросмотра файла связанной карточки. */
        linkFilePreviewing?: CancelableApiEvent<IEventArgs>;
        /** Событие, возникающее после открытия предпросмотра файла связанной карточки. */
        linkFilePreviewed?: BasicApiEvent<IEventArgs>;
        /** Событие, возникающее перед открытием связанной карточки. */
        linkCardOpening?: CancelableApiEvent<IEventArgs>;
    }
    /** @internal */
    interface CardLinkState extends CardLinkParams, BaseControlState {
        bindingInfo: IBindingResult<ICardLinkData>;
    }
    /**
     * Представляет элемент управления для редактирования связанной карточки.
     */
    class CardLink extends BaseControl<CardLinkParams, CardLinkState> {
        constructor(props: CardLinkParams);
        componentDidMount(): void;
        protected createParams(): WebClient.CardLinkParams;
        private binding;
        private cardTypes;
        protected getBindings(): IBindingResult<any>[];
        private onDataChanged;
        private readonly cardLinkImpl;
        validate(params: any): IValidationResult[];
        /**
         * Открывает привязанную карточку
         */
        openLinkedCard: () => void;
        /**
         * Открывает предпросмотр файла привязанной карточки
         */
        openFilePreview: () => void;
        /**
         * Открывает модальное окно для выбора карточки, которую мы хотим привязать
         */
        openSelectCardDialog: () => void;
        /**
         * Удаляет привязанную карточку
         */
        deleteLinkedCard: () => void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface CardLinkImplState extends BaseControlImplState, CardLinkState {
        addExistingCardLinkDialog: ExistingCardLinkDialog;
        saveHelper: RequestHelper;
        validationMessage: string;
    }
    /** @internal */
    class CardLinkImpl extends BaseControlImpl<CardLinkParams, CardLinkImplState> {
        constructor(props: CardLinkParams);
        value: ICardLinkData;
        setValue(value: ICardLinkData, forceUpdate?: boolean): JQueryDeferred<any>;
        componentDidMount(): void;
        componentWillUnmount(): void;
        protected onDocumentClick: (e: MouseEvent) => void;
        getLinkUrl(cardId: string): string;
        openMenu: () => void;
        closeMenu: () => void;
        toggleMenu: () => void;
        openLinkedCard: () => void;
        openFilePreview: () => void;
        openSelectCardDialog: () => void;
        deleteLinkedCard: () => void;
        onOpenLinkedCardMenuClick: () => void;
        onViewFileMenuClick: () => void;
        onOpenSelectCardDialogMenuClick: () => void;
        onDeleteLinkedCardMenuClick: () => void;
        onTextClick: () => void;
        onMenuClick: () => void;
        readonly hasValue: boolean;
        readonly isLoading: boolean;
        readonly isMenuAvailable: boolean;
        readonly cardViewAllowed: boolean;
        readonly mainFileReadAllowed: boolean;
        readonly isTextClickable: boolean;
        validate(params: any): IValidationResult;
        protected renderValidationMessage(): JSX.Element;
        protected getCssClass(): string;
        protected getTextTabIndex(): 0 | -1;
        protected onTextKeyDown: (event: __React.KeyboardEvent) => void;
        protected onMenuKeyDown: (event: __React.KeyboardEvent) => void;
        protected renderLabel(): JSX.Element;
        /**
         * Renders settings menu and its icon to open menu
         */
        protected renderSettingsMenu(): JSX.Element;
        /**
         * Renders label value
         */
        protected renderValue(): JSX.Element;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    /** Хранит информацию о ссылке на карточку. */
    interface ICardLinkData {
        /** ID карточки, на которую установлена ссылка. */
        cardId: string;
        /** Значение Digest карточки. Данный текст будет отображен в качестве текста ссылки. */
        cardDigest: string;
        /** Доступен ли текущему пользователю просмотр указанной карточки. Данное свойство будет использовано
         *   для отключения ссылки и пунктов меню "Открыть" в контроле.
         */
        cardViewAllowed: boolean;
        /** Доступен ли текущему пользователю чтение основного файла указанной карточки. Данное свойство будет использовано
         *   для отключения пункта меню "Просмотреть файл" в контроле.
         */
        mainFileReadAllowed: boolean;
    }
}
declare namespace WebClient {
    interface ILinkItem {
        data: ILinkItemData;
        state: LinkItemState;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Вид карточки]{@link CardKind}.
     */
    class CardKindParams extends BaseControlParams {
        /** Вид карточки. */
        value: ICardKindDataModel;
        /** Текст всплывающей подсказки. */
        tip?: string;
        /** Текст метки. */
        labelText?: string;
        /** Стандартный CSS класс со стилями элемента управления. */
        standardCssClass?: string;
    }
    /** @internal */
    interface CardKindState extends CardKindParams, BaseControlState {
    }
    /**
     * Класс элемента управления Вид карточки.
     *
     * Добавляет в web-разметку текстовый блок с меткой, в котором отображается название текущего вида карточки.
     */
    class CardKind extends BaseControl<CardKindParams, CardKindState> {
        protected createParams(): WebClient.CardKindParams;
        private cardKindData;
        private value;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
    * Содержит данные элемента управления [Вид карточки]{@link CardKind}.
    */
    interface ICardKindDataModel {
        /** Отображаемое названием вида карточки. */
        cardKindName: string;
        /** Имя вида, включающее родительские виды. */
        cardKindFullName: string;
        /** Идентификатор вида карточки. */
        cardKindId: string;
        /** Содержимое ошибки, если она возникла при загрузке информации о виде карточки (например, CardKindId не задан). */
        loadingError: string;
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [Блок]{@link Block}.
    */
    class BlockParams extends PanelParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Заголовок, отображаемый над элементом управления. */
        header?: string;
        /** Флаг, определяющий, возможность сворачивания Блока: true - Блок может быть свернут (отображается кнопка сворачивания), false - Блок не может быть свернут. */
        collapsible: boolean;
        /** Флаг, указывающий, что содержимое Блока должно быть выровнено по левой стороне: true - выравнивание влево, false - выравнивание вправо.*/
        alignment: boolean;
        /** флаг, указывающий, что Блок должен отделяться от других элементов управления дополнительными отступами: true - с отступами, false - без отступов. */
        paddings: boolean;
        /** Флаг, определяющий текущее состояние блока: true - Блок свернут (содержимое не отображается), false - Блок раскрыт. */
        isCollapsed: boolean;
        /** Событие возникает при сворачивании Блока. */
        collapsing?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает после сворачивания Блока. */
        collapsed?: BasicApiEvent<IEventArgs>;
        /** Событие возникает при раскрытии Блока. */
        expanding?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает после раскрытия Блока. */
        expanded?: BasicApiEvent<IEventArgs>;
    }
    /** @internal */
    interface BlockState extends BlockParams, PanelState {
    }
    /**
     * Класс элемента управления Блок.
     *
     * Добавляет в web-разметку сворачиваемый элемент управления с заголовком, предназначенный для встраивания других элементов управления.
     */
    class Block extends Panel<BlockParams, BlockState> {
        protected createParams(): WebClient.BlockParams;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface BlockState extends PanelState, BaseControlState {
    }
    /** @internal */
    class BlockImpl extends PanelImpl<BlockParams, BlockState> {
        constructor(props: BlockParams);
        protected handleHeaderClick(event: React.MouseEvent): void;
        toggleCollapsed(): CancelableEventArgs<IEventArgs>;
        protected getCssClass(): string;
        protected onCollapsed(): void;
        protected onExpanded(): void;
        protected getItemsStyle(): {
            textAlign: string;
        };
        renderControl(): JSX.Element;
        isCollapsed: boolean;
    }
}
declare namespace WebClient {
    interface ControlImplProps extends BaseControlParams {
        controlImplStateObj?: BaseControlImplState;
        ref?: any;
    }
    class ControlImpl extends BaseControlImpl<ControlImplProps, BaseControlState> {
        constructor(props: ControlImplProps);
        renderControl(): React.ReactNode;
    }
}
declare namespace WebClient {
    interface IBlurEventArgs extends React.FocusEvent {
    }
}
declare namespace WebClient {
    interface IClickEventArgs extends React.MouseEvent {
    }
}
declare namespace WebClient {
    interface IFocusEventArgs extends React.FocusEvent {
    }
}
declare namespace WebClient {
    interface IMouseOutEventArgs extends React.MouseEvent {
    }
}
declare namespace WebClient {
    interface IMouseOverEventArgs extends React.MouseEvent {
    }
}
declare namespace WebClient {
    interface ChangedPropertyInfo {
        name: string;
        oldValue: any;
        newValue: any;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Управление согласованием]{@link AgreementManagement}.
     */
    class AgreementManagementParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Флаг, определяющий, что запуск согласования разрешен: true - разрешен (элемент управления связан с данными и разрешена настроенная операция старта согласования), false - не разрешен. */
        startAllowed?: boolean;
        /** Флаг, определяющий, что управление согласованием разрешено: true - разрешено (элемент управления связан с данными и разрешена настроенная операция управления согласованием), false - не разрешено. */
        manageAllowed?: boolean;
        /** Флаг, определяющий, что запуск согласования разрешен: true - разрешен (карточка является новой и {@link startAllowed} в true), false - не разрешен. */
        canStart?: boolean;
        /** Флаг, определяющий, что управление согласованием разрешено: true - разрешен (карточка является новой и {@link manageAllowed} в true), false - не разрешен. */
        canManage?: boolean;
        /** Флаг доступности прекращения этапа согласования */
        abortStageAllowed: boolean;
        /** Флаг запроса диалога подтверждения запуска согласования */
        confirmationRequestOnStart?: boolean;
        /** Массив моделей кнопок управления согласованием */
        buttonNames: AgreementManagementButtonModel[];
        /** Режим отображения согласующего */
        approverViewType?: ApproverViewType;
        /** Режим отображения элемента управления */
        agreementMode?: AgreementMode;
        /** Событие возникает при изменении маршрута согласования. */
        approvingPathChanging?: CancelableApiEvent<IApprovingPathEventArgs>;
        /** Событие возникает при открытии панели отправки согласования. */
        approvingPanelOpening?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает при нажатии кнопки Start the approval на панели отправки согласования. */
        approvingStarting?: CancelableApiEvent<IAgreementEventArgs>;
        /** Событие возникает при вызове команды остановки согласования. */
        approvingPausing?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает при вызове команды отмены согласования. */
        approvingCancelling?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает при добавлении нового согласующего. */
        approverAdding?: CancelableApiEvent<IApproverEventArgs>;
        /** Событие возникает при удалении согласующего. */
        approverDeleting?: CancelableApiEvent<IApproverDeletionEventArgs>;
        /** Событие возникает при нажатии кнопки Отмена на панели отправки согласования. */
        approvingStartCancelling?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает при вызове команды завершения согласования. */
        approvingCompleting?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает при вызове команды продолжения остановленного согласования. */
        approvingResuming?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает после изменения маршрута согласования. */
        approvingPathChanged?: BasicApiEvent<IApprovingPathEventArgs>;
        /** Событие возникает после открытия панели отправки согласования. */
        approvingPanelOpened?: BasicApiEvent<IEventArgs>;
        /** Событие возникает после добавления нового согласующего. */
        approverAdded?: BasicApiEvent<IApproverEventArgs>;
        /** Событие возникает после удаления согласующего. */
        approverDeleted?: BasicApiEvent<IApproverDeletionEventArgs>;
        /** Событие возникает после нажатия кнопки Отмена на панели отправки согласования. */
        approvingStartCancelled?: BasicApiEvent<IEventArgs>;
        /** Событие возникает при прекращении этапа согласования */
        approvingStageAborting?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает после прекращении этапа согласования */
        approvingStageAborted?: BasicApiEvent<IEventArgs>;
    }
    /** @internal */
    interface AgreementManagementState extends AgreementManagementParams, BaseControlState {
        agreementManagementModel: IAgreementManagementModel;
        refresh: Function;
    }
    /**
     * Класс элемента управления Управление согласованием.
     *
     * Добавляет в web-разметку набор кнопок для управления согласования.
     */
    class AgreementManagement extends BaseControl<AgreementManagementParams, AgreementManagementState> {
        constructor(props: AgreementManagementParams);
        protected createParams(): WebClient.AgreementManagementParams;
        private readonly myControlImpl;
        private agreementManagementData;
        private agreementManagementOperationBinding;
        private agreementStartOperationBinding;
        private abortStageOperationBinding;
        private agreementManagementButtonNames;
        /**
        * Загружает данные карточки с сервере и обновляет отображаемое содержимое.
        */
        refresh(): void;
        /**
         * Возвращает массив команд управления согласованием, которые применимы для текущего согласования.
         * @return Команды управления.
         */
        getAvailableOperations(): ApprovalOperationKind[];
        /**
         * Запускает остановленное согласование.
         */
        resume(): void;
        /**
         * Останавливает запущенное согласование.
         */
        pause(): void;
        /**
         * Завершает запущенное согласование.
         */
        complete(): void;
        /**
         * Отменяет запущенное согласование.
         */
        cancel(): void;
        /**
         * Запускает согласование.
         *
         * После вызова метода будет открыта стандартная панель отправки согласования для выбора согласующих.
         */
        start(): void;
        /** @review */
        hideStartSidebar(): void;
        /** @review */
        edit(): void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface AgreementManagementImplState extends BaseControlState, AgreementManagementState {
        IsTemplateDataReceived: boolean;
        startLoading: boolean;
        startDisabled: boolean;
        startSidebarShown: boolean;
        managementLoaging: boolean;
        managementSidebarShown: boolean;
        agreementManagementStartModel: IAgreementManagementStartModel;
        editModel: IAgreementManagementEditModel;
        templates: AgreementTemplateModel[];
        selectedTemplate: AgreementTemplateModel;
        stageLoading: LoadingState;
        showInterruptBtn: boolean;
        currentStageId: string;
    }
    /** @internal */
    class AgreementManagementImpl extends BaseControlImpl<AgreementManagementParams, AgreementManagementImplState> {
        approvalOperationButtonNames: any;
        constructor(props: AgreementManagementParams);
        componentWillReceiveProps(nextProps: any, nextContext: any): void;
        readonly canStart: boolean;
        readonly ApprovalOperationButtonNames: any;
        protected onTemplateSelect(val: IComboBoxElement): Promise<void>;
        protected onCancelClick(start: boolean): void;
        protected onSendClick(): Promise<void>;
        protected onSaveClick(): void;
        protected onInterruptClick(): Promise<void>;
        protected onOperationButtonClick(operation: AgreementOperationKind): Promise<void>;
        start(): void;
        protected handleLoadingErrorOnSidebarOpen(loadingTimer: any): void;
        hideStartSidebar(cancel?: boolean): Promise<void>;
        readonly canManage: boolean;
        edit(): void;
        hideManagementSidebar(): void;
        protected handleClick(event: React.MouseEvent): void;
        protected handleMouseOver(event: React.MouseEvent): void;
        protected handleMouseOut(event: React.MouseEvent): void;
        protected handleStartAgreement: (e: __React.MouseEvent) => void;
        protected handleEditAgreement: (e: Event) => void;
        getAvailableOperations(): ApprovalOperationKind[];
        onManageButtonClick(buttonKind: ApprovalOperationKind): void;
        protected getCssClass(): string;
        protected getButtonName: (operationKind: ApprovalOperationKind) => string;
        protected getTemplateComboBoxProps(): any;
        protected getTemplateComboBoxElements(): any;
        renderControl(): JSX.Element;
        protected renderCreateView(): JSX.Element;
        protected renderCreateSidebar(): JSX.Element;
        protected renderManageView(): JSX.Element;
        protected renderManagementSidebar(): JSX.Element;
    }
}
declare namespace WebClient {
    interface AgreementManagementButtonModel {
        agreementManagementOperation: ApprovalOperationKind;
        displayName: string;
    }
}
declare namespace WebClient {
    enum AgreementOperationKind {
        /** Запустить остановленное согласование. */
        Resume = 0,
        /** Завершить согласование. */
        Finish = 1,
        /** Остановить согласование. */
        Pause = 2,
        /** Отменить согласование. */
        Cancel = 3,
    }
}
declare namespace WebClient {
    interface IApproverInfo {
        employee: IBasicEmployeeInfo;
        excluded: boolean;
    }
    interface StageInfo {
        stageSemantics: StageSemantic;
        currentStage: boolean;
    }
    interface AgreementStageModel {
        stageId: string;
        name: string;
        order: number;
        approvalType: ApprovalType;
        duration: number;
        specificDuration: boolean;
        approvers: IApproverInfo[];
        allowEdit: boolean;
        hasBusinessProcess: boolean;
        excluded: boolean;
        approversChanged: boolean;
        stageInstanceInfo: StageInfo;
    }
}
declare namespace WebClient {
    interface AgreementTemplateModel {
        templateId: string;
        creationSettingId: string;
        name: string;
        /**Флаг "Запускать согласование без показа карточки"*/
        startNoEdit: boolean;
        /**Флаг "Разрешить щзапуск соглавования без файлов"*/
        startNoFiles: boolean;
        /**Этапы согласования*/
        stages: AgreementStageModel[];
        /** Флаг, загружена ли информация по этапам (список может быть пуст)*/
        loaded: boolean;
    }
}
declare namespace WebClient {
    class StageChangeModel {
        constructor(stage: AgreementStageModel);
        stageId: string;
        order: number;
        approvalType: ApprovalType;
        duration: number;
        specificDuration: boolean;
        approversChanged: boolean;
        approvers: IApproverInfo[];
        excluded: boolean;
    }
}
declare namespace WebClient {
    interface IAgreementEventArgs extends IAgreementParams {
    }
}
declare namespace WebClient {
    interface IApproverDeletionEventArgs {
        employeeId: string;
    }
}
declare namespace WebClient {
    interface IApproverEventArgs {
        employeeInfo: IEmployeeItemData;
    }
}
declare namespace WebClient {
    interface IApprovingPathEventArgs {
        agreementTemplateId: string;
        agreementTemplateDisplayName: string;
    }
}
declare namespace WebClient {
    enum AgreementMode {
        StartAndManagement = 0,
        StartOnly = 1,
        ManagementOnly = 2,
    }
}
declare namespace WebClient {
    enum AgreementStateType {
        Draft = 0,
        Started = 1,
        Stopped = 2,
        Agreed = 3,
        Other = 4,
    }
}
declare namespace WebClient {
    /**
    * Возможные команды управления ходом согласования.
    */
    enum ApprovalOperationKind {
        /** Запустить остановленное согласование. */
        Resume = 0,
        /** Завершить согласование. */
        Complete = 1,
        /** Остановить согласование. */
        Pause = 2,
        /** Отменить согласование. */
        Cancel = 3,
        /** На согласование */
        ToApprove = 4,
        /** AbortStage */
        AbortStage = 5,
        /** Management */
        Management = 6,
    }
}
declare namespace WebClient {
    enum ApproverViewType {
        Fio = 0,
        FioAndPosition = 1,
        DisplayString = 2,
    }
}
declare namespace WebClient {
    enum ReconcileDurationType {
        PerTask = 0,
        PerStage = 1,
    }
}
declare namespace WebClient {
    enum ApprovalType {
        Sequential = 0,
        Parallel = 1,
        Alternative = 3,
    }
}
declare namespace WebClient {
    enum StageSemantic {
        Positive = 1,
        Negative = 2,
        Neutral = 3,
        Other = 4,
    }
}
declare namespace WebClient {
    /** @internal */
    class TemplateComboVariant implements IComboBoxVariant {
        template: AgreementTemplateModel;
        constructor(val: AgreementTemplateModel);
        readonly displayName: any;
        readonly uniqueId: string;
    }
}
declare namespace WebClient {
    /** @internal */
    class AgreementStage extends React.Component<AgreementStageProps, AgreementStageState> {
        approvalTypeIcons: {
            [x: number]: string;
        };
        approvalStageSemanticStyle: {
            [x: number]: string;
        };
        constructor(props: AgreementStageProps);
        onToggleClick(ev: React.MouseEvent): void;
        onStageCheckChange(val: boolean): void;
        onDeleteApproverClick(id: string): Promise<void>;
        onExcludeCheckChange(event: any, id: string): void;
        onEmployeeChanged(sender: any, args: IDataChangedEventArgs): Promise<void>;
        onDurationChanged(sender: any, args: IDataChangedEventArgs): void;
        onDurationTypeSelect(selectedType: IComboBoxElement): void;
        onReconcileTypeSelect(selectedType: IComboBoxElement): void;
        onInterruptStageClick(event: any): void;
        attachApprover(control: Employee): void;
        getButtonName(operationKind: ApprovalOperationKind): string;
        getReconcileTypeElements(): {
            elements: IComboBoxElement[];
        };
        getReconcileDurationTypeElements(): {
            elements: IComboBoxElement[];
        };
        getSematicStyle(stage: AgreementStageModel): string;
        renderComboboxTitleWithIcon: (element: IComboBoxElement) => JSX.Element;
        renderComboboxElementWithIcon: (element: IComboBoxElement, selected: boolean) => JSX.Element;
        renderApprover(approver: IBasicEmployeeInfo): JSX.Element;
        renderApproversList(approvers: IApproverInfo[], editable: any, hasBusinessProc: any, excluded: any): JSX.Element;
        renderOtherSettings(stage: AgreementStageModel): JSX.Element;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
     @internal
     */
    class AgreementStageProps {
        stage: AgreementStageModel;
        approverViewType: ApproverViewType;
        className?: string;
        editMode?: boolean;
        getButtonName?: (operationKind: ApprovalOperationKind) => string;
        canIterruptCurrent?: boolean;
        onInterruptClick?: Function;
        /** Событие возникает при добавлении нового согласующего. */
        approverAdding: CancelableApiEvent<IApproverEventArgs>;
        /** Событие возникает при удалении согласующего. */
        approverDeleting: CancelableApiEvent<IApproverDeletionEventArgs>;
        /** Событие возникает после добавления нового согласующего. */
        approverAdded: BasicApiEvent<IApproverEventArgs>;
        /** Событие возникает после удаления согласующего. */
        approverDeleted: BasicApiEvent<IApproverDeletionEventArgs>;
    }
}
declare namespace WebClient {
    /** @internal */
    class AgreementStageState {
        stageExpanded: boolean;
        approversOrder: string[];
        approverSelect: Employee;
        durationType: ReconcileDurationType;
        stage: AgreementStageModel;
    }
}
declare namespace WebClient {
    /**
     * Содержит публичные свойства элемента управления [Лист согласования]{@link AgreementList}.
     */
    class AgreementListParams extends BaseControlParams {
        /** Стандартный CSS класс со стилями элемента управления. */
        standardCssClass?: string;
        /** Данные листа согласования. */
        data?: IAgreementListDataModel;
        /** Текст, отображаемый на кнопке открытия листа согласования. */
        buttonText?: string;
        /** Флаг, определяющий возможность отображения листа согласования: true - возможно (если данные для отображения доступны и разрешена настроенная операция редактирования), false - невозможно.*/
        canShowReport?: boolean;
        /** Идентификатор текущей карточки. */
        cardId?: string;
        /** Текст всплывающей подсказки */
        tip?: string;
        /** События возникает при открытии окна листа согласования. */
        agreementReportOpening?: CancelableApiEvent<IAgreementListReportOpeningEventArgs>;
        /** События возникает при закрытии окна листа согласования. */
        agreementReportClosing?: CancelableApiEvent<IEventArgs>;
        /** События возникает после открытия окна листа согласования. */
        agreementReportOpened?: BasicApiEvent<IAgreementListReportOpenedEventArgs>;
        /** События возникает после закрытия окна листа согласования. */
        agreementReportClosed?: BasicApiEvent<IEventArgs>;
    }
    /** @internal */
    interface AgreementListState extends AgreementListParams, BaseControlState {
        getAgreementList: () => JQueryDeferred<IAgreementListDataModel>;
    }
    /**
     * Класс элемента управления Лист согласования.
     *
     * Добавляет в web-разметку кнопку, при нажатии которой открывается окно просмотра листа согласования.
     */
    class AgreementList extends BaseControl<AgreementListParams, AgreementListState> {
        constructor(props: AgreementListParams);
        protected createParams(): WebClient.AgreementListParams;
        /** @internal */
        protected readonly myControlImpl: AgreementListImpl;
        /**
        * Проверяет, что лист согласования открыт для просмотра.
        * @return true - открыт, false - закрыт.
        */
        readonly isReportShown: boolean;
        /**
         * Закрывает лист согласования.
         */
        hideReport(): void;
        /**
         * Открывает лист согласования.
         */
        showReport(): void;
        /** @internal */
        private bindingEditOperation;
        /** @internal */
        protected getAgreementList(): JQueryDeferred<IAgreementListDataModel>;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface AgreementListImplState extends AgreementListState, BaseControlImplState {
        loading: boolean;
        dialog: ModalWindow;
        lastLoadedData: IAgreementListDataModel;
    }
    interface AgreementListImplProps extends AgreementListState {
    }
    /** @internal */
    class AgreementListImpl extends BaseControlImpl<AgreementListImplProps, AgreementListImplState> {
        constructor(props: AgreementListImplProps);
        getCssClass(): string;
        showReport(): void;
        hideReport(): void;
        showModalWindow(data: IAgreementListDataModel): void;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    interface IAgreementListRenderEventArgs {
        model: IAgreementListDataModel;
        columns: IAgreementListTableColumn[];
    }
}
declare namespace WebClient {
    interface IAgreementListReportOpenedEventArgs {
        model: IAgreementListDataModel;
        contentControl: AgreementListContent;
    }
}
declare namespace WebClient {
    interface IAgreementListReportOpeningEventArgs {
        model: IAgreementListDataModel;
    }
}
declare namespace WebClient {
    interface IAgreementListTableColumn {
        class?: string;
        name: any;
        weight: number;
        calculatedWidth?: string;
        value: (item: IAgreementListItemModel) => string;
        hidden?: boolean;
        order: number;
    }
}
declare namespace WebClient {
    /** @internal */
    class AgreementListContent extends React.Component<IAgreementListContentProps, IAgreementListContentState> {
        rootElem: HTMLElement;
        constructor(props: IAgreementListContentProps);
        readonly onRender: IBasicEvent<IAgreementListRenderEventArgs>;
        readonly root: HTMLElement;
        columns: IAgreementListTableColumn[];
        commentColumn: IAgreementListTableColumn;
        protected preRenderPrepareColumns(columns: IAgreementListTableColumn[]): IAgreementListTableColumn[];
        protected calculateWidths(columns: IAgreementListTableColumn[]): void;
        protected renderTable(columnsParam: IAgreementListTableColumn[]): JSX.Element;
        protected renderHeader(columns: IAgreementListTableColumn[]): JSX.Element;
        protected renderRow(item: IAgreementListItemModel, columns: IAgreementListTableColumn[]): JSX.Element;
        protected getCaption(): string;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IAgreementListContentProps {
        data: IAgreementListDataModel;
        documentNumber: string;
        documentName: string;
        title: string;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IAgreementListContentState {
        columns: IAgreementListTableColumn[];
        commentColumn: IAgreementListTableColumn;
        onRender: IBasicEvent<IAgreementListRenderEventArgs>;
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [Ход согласования]{@link AgreementHistory}.
    */
    class AgreementHistoryParams extends BaseControlParams {
        /** Текст, отображаемый на кнопке открытия хода согласования.*/
        buttonText: string;
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Возвращает состояние окна хода согласования: `true` - окно с ходом согласования открыто, `false` - закрыто. */
        isReportShown?: boolean;
        /** Определяет, возможно ли показать ход согласования: `true` - возможно (элемент управления связан с данными и разрешена настроенная операция редактирования), `false` - невозможно. */
        showReportAllowed?: boolean;
        /** @review Режим контрола */
        agreementHistoryMode?: AgreementHistoryMode;
        /** @review Всплывающая подсказка для кнопки */
        tip?: string;
        /** Событие возникает при открытии окна хода согласования. */
        approvingReportOpening?: CancelableApiEvent<IApprovingReportOpeningEventArgs>;
        /** Событие возникает при закрытии окна хода согласования. */
        approvingReportClosing?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает при обновлении данных хода согласования. */
        approvingReportRefreshing?: CancelableApiEvent<IApprovingReportRefreshingEventArgs>;
        /** Событие возникает после открытия окна хода согласования. */
        approvingReportOpened?: BasicApiEvent<IApprovingReportOpenedEventArgs>;
        /** Событие возникает после закрытия окна хода согласования. */
        approvingReportClosed?: BasicApiEvent<IEventArgs>;
        /** Событие возникает после обновления данных хода согласования. */
        approvingReportRefreshed?: BasicApiEvent<IApprovingReportRefreshedEventArgs>;
    }
    /** @internal */
    interface AgreementHistoryState extends BaseControlState, AgreementHistoryParams {
        model: IAgreementHistoryDataModel;
        rows?: ApprovalHistoryViewModel;
    }
    /**
    * Класс элемента управления Ход согласования.
    *
    * Добавляет в web-разметку кнопку, при нажатии которой открывается окно просмотра хода согласования.
    */
    class AgreementHistory extends BaseControl<AgreementHistoryParams, AgreementHistoryState> {
        protected createParams(): WebClient.AgreementHistoryParams;
        private readonly myControlImpl;
        private agreementHistoryData;
        private agreementHistoryRows;
        private binding;
        /**
         * Открывает окно просмотра хода согласования
         */
        showReport(): void;
        /**
         * Закрывает окно просмотра хода согласования.
         */
        hideReport(): void;
        /**
         * Проверяет возможность показа окна хода согласования.
         *
         * @return true - возможно (если данные для отображения доступны и операция разрешена), false - невозможно.
         */
        canShowReport(): void;
        /**
         * Загружает с сервера новые данные по ходу согласования и обновляет содержимое окна просмотра хода согласования.
         */
        refreshReport(): void;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface AgreementHistoryImplState extends BaseControlImplState, AgreementHistoryState {
        dialog: WebClient.ModalWindow;
        isHistoryDataReceived: boolean;
        loading: boolean;
        lastLoadedData: ApprovalHistoryViewModel;
    }
    interface AgreementHistoryImplProps extends AgreementHistoryState {
    }
    /** @internal */
    class AgreementHistoryImpl extends BaseControlImpl<AgreementHistoryImplProps, AgreementHistoryImplState> {
        constructor(props: AgreementHistoryImplProps);
        showReport(): void;
        hideReport(): void;
        canShowReport(): boolean;
        loadData(): JQueryDeferred<ApprovalHistoryViewModel>;
        renderDialogContent(dialog: ModalWindow, data: ApprovalHistoryViewModel): void;
        refreshReport(): void;
        renderControl(): JSX.Element;
        renderButton(): JSX.Element;
        renderInlineTable(): JSX.Element;
        readonly isReportShown: boolean;
    }
}
declare namespace WebClient {
    interface IApprovingReportOpenedEventArgs extends ApprovalHistoryViewModel {
    }
}
declare namespace WebClient {
    interface IApprovingReportOpeningEventArgs {
    }
}
declare namespace WebClient {
    interface IApprovingReportRefreshedEventArgs {
        cycleNumber: number;
        cycleInfo: ApprovalHistoryCycleModel;
    }
}
declare namespace WebClient {
    interface IApprovingReportRefreshingEventArgs {
        cycleNumber: number;
    }
}
declare namespace WebClient {
    class ApprovalHistorySimpleCycleModel {
        isCurrent: boolean;
        number: number;
    }
}
declare namespace WebClient {
    class ApprovalHistoryCycleModel extends ApprovalHistorySimpleCycleModel {
        stages: ApprovalHistoryStageModel[];
        ownerCardId: string;
    }
}
declare namespace WebClient {
    class ApprovalHistorySimpleFileModel {
        name: string;
        key: {
            fileId: string;
        };
    }
}
declare namespace WebClient {
    class ApprovalHistoryStageItemModel {
        decision: DecisionSemantics;
        decisionName: string;
        decisionDate: Date;
        employeeId: string;
        employeeText: string;
        comment: string;
        hasComment: boolean;
        addedFileCardModels: any[];
        commentFileData: ApprovalHistorySimpleFileModel;
    }
    enum DecisionSemantics {
        Positive = 1,
        Negative = 2,
        Neutral = 3,
        Cancellation = 4,
        NewCycle = 5,
        Completion = 100,
    }
}
declare namespace WebClient {
    class ApprovalHistoryStageModel {
        stageId: string;
        name: string;
        approvalType: string;
        isExpandedByDefault: boolean;
        stageItems: ApprovalHistoryStageItemModel[];
    }
}
declare namespace WebClient {
    class ApprovalHistoryViewModel {
        approvalReconcileCardId: string;
        approvalTaskCardId: string;
        currentCycle: ApprovalHistoryCycleModel;
        cycles: ApprovalHistorySimpleCycleModel[];
    }
}
declare namespace WebClient {
    interface IAgreementHistoryDataModel {
        historyExists: boolean;
        agreementCardId: any;
    }
}
declare namespace WebClient {
    /** @review */
    enum AgreementHistoryMode {
        Button = 0,
        Layout = 1,
    }
}
declare namespace WebClient {
    /** @internal */
    class ApprovalStageItemRow extends React.Component<IApprovalStageItemRowProps, any> {
        constructor(props: any);
        private readonly decisionText;
        private readonly decisionClass;
        private readonly waitingForDecision;
        handleCommentClick(): void;
        handleCorrectionFileClick(file: any): void;
        handleStageRowClick(): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IApprovalStageItemRowProps {
        stageItem: ApprovalHistoryStageItemModel;
        ownerCardId: string;
    }
}
declare namespace WebClient {
    /** @internal */
    class ApprovalStageItemComment extends React.Component<ApprovalHistoryStageItemModel, any> {
        constructor(props: any);
        hanldeCommentFileClick(e: any): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    class ApprovalStageInfo extends React.Component<any, any> {
        constructor(props: any);
        protected handleHeaderClick(event: React.MouseEvent): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    class ApprovalHistoryTable extends React.Component<IApprovalHistoryTableProps, IApprovalHistoryTableState> {
        constructor(props: IApprovalHistoryTableProps);
        componentWillReceiveProps(nextProps: IApprovalHistoryTableProps, nextContext: any): void;
        handleCycleClick(cycleNumber: any): void;
        loadCycleData(cycleNumber: any): void;
        onRefreshClick(): void;
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IApprovalHistoryTableProps {
        data: ApprovalHistoryViewModel;
        approvingReportRefreshing: CancelableEvent<IApprovingReportRefreshingEventArgs>;
        approvingReportRefreshed: SimpleEvent<IApprovingReportRefreshedEventArgs>;
        refreshRequested: Function;
        inline?: boolean;
    }
}
declare namespace WebClient {
    /** @internal */
    interface IApprovalHistoryTableState {
        currentCycle: number;
        cycleData: ApprovalHistoryCycleModel;
    }
}
declare namespace WebClient {
    /** @internal */
    class ApprovalHistoryFullStageInfo extends React.Component<any, any> {
        constructor(props: any);
        render(): JSX.Element;
        renderComment(): JSX.Element;
        renderCommentFile(): JSX.Element;
        renderCorrections(): JSX.Element;
        handleCorrectionFileClick(file: any): void;
        hanldeCommentFileClick(e: any): void;
    }
}
declare namespace WebClient {
    /** @internal */
    class ApprovalCycleList extends React.Component<ApprovalCycleListProps, any> {
        constructor(props: ApprovalCycleListProps);
        private renderItem(item);
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface ApprovalCycleListProps {
        cycles: ApprovalHistorySimpleCycleModel[];
        currentCycle: any;
        onCycleClick: Function;
    }
}
declare namespace WebClient {
    /** @internal */
    class ApprovalCycleInfo extends React.Component<ApprovalHistoryCycleModel, any> {
        constructor(props: any);
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /**
    * Содержит публичные свойства элемента управления [Отправка на ознакомление]{@link AcquaintanceManagement}.
    */
    class AcquaintanceManagementParams extends PanelParams {
        /** Текст кнопки отправки на ознакомление */
        sendAcquaintanceButtonText: string;
        /** Стандартный CSS класс со стилями элемента управления */
        standardCssClass?: string;
        /** Флаг доступности отправки на ознакомление */
        canSend?: boolean;
        /** Событие возникает при открытии панели отправки на ознакомление. */
        opening?: CancelableApiEvent<IEventArgs>;
        /** Событие возникает после открытия панели отправки на ознакомление. */
        opened: BasicApiEvent<IEventArgs>;
        /** Событие возникает при закрытии панели отправки на ознакомление. */
        closing: CancelableApiEvent<IEventArgs>;
        /** Событие возникает после закрытия панели отправки на ознакомление. */
        closed: BasicApiEvent<IEventArgs>;
    }
    /** @internal */
    interface AcquaintanceManagementState extends AcquaintanceManagementParams, PanelState {
        cardId: string;
        children: ILayoutModel[];
        lastLoading: JQueryDeferred<ILayoutModel[]>;
        isOpened: boolean;
        receivers: MultipleEmployees;
        considerationDate: DateTimePicker;
    }
    /**
     * Класс элемента управления Отправка на ознакомление.
      */
    class AcquaintanceManagement extends Panel<AcquaintanceManagementParams, AcquaintanceManagementState> {
        constructor(props: AcquaintanceManagementParams);
        protected createParams(): WebClient.AcquaintanceManagementParams;
        /** @internal */
        private Binding;
        /** @internal */
        render(): JSX.Element;
    }
}
declare namespace WebClient {
    /** @internal */
    interface AcquaintanceManagementImplState extends PanelState, AcquaintanceManagementState {
        loading: boolean;
    }
    interface AcquaintanceManagementImplProps extends AcquaintanceManagementState {
    }
    /** @internal */
    class AcquaintanceManagementImpl extends PanelImpl<AcquaintanceManagementImplProps, AcquaintanceManagementImplState> {
        constructor(props: AcquaintanceManagementImplProps);
        open(): void;
        close(): void;
        readonly isOpened: boolean;
        attachReceivers(control: any): void;
        attachConsiderationDate(control: any): void;
        onMainButtonClick(): void;
        onSendClick(): void;
        onCancelClick(): void;
        renderControl(): JSX.Element;
    }
}
declare namespace WebClient {
    class LayoutUserSettingsController extends ServerController {
        GetMainMenuSettings(): JQueryDeferred<IMainMenuSettings>;
        SaveMainMenuSettings(settings?: IMainMenuSettings): JQueryDeferred<void>;
    }
    var layoutUserSettingsController: LayoutUserSettingsController;
}
declare namespace WebClient {
    /** See DocsVision.Layout.WebClient.Models.MainMenuItemSetting */
    interface IMainMenuItemSetting {
        id: string;
        hidden: boolean;
    }
}
declare namespace WebClient {
    /** See DocsVision.Layout.WebClient.Models.MainMenuSettings  */
    interface IMainMenuSettings {
        items?: IMainMenuItemSetting[];
    }
}
declare namespace WebClient {
    class LayoutTasksController extends ServerController {
        GetTasks(cardId: string, availableKinds: string[]): JQueryDeferred<ITaskListItem[]>;
    }
    var layoutTasksController: LayoutTasksController;
}
declare namespace WebClient {
    class LayoutStaffController extends ServerController {
        /**
         * Search for departments and organisations by typeahead logic.
         * @returns Departments and organisations, that match
         */
        FindDepartments(query: IDepartmentsSearchQuery): JQueryDeferred<IDepartmentsSearchResult>;
        /** Load departments and organizations when navigating over tree. */
        LoadDepartmentsTree(query: ILoadDepartmentsTreeQuery): JQueryDeferred<IDepartmentTreeDigest[]>;
        /** Load departments and organisations when searching over tree. */
        FindInDepartmentsTree(query: ISearchDepartmentsTreeQuery): JQueryDeferred<ISearchDepartmentsTreeResult>;
        /** Load departments and organisations when navigating over tree. */
        LoadDepartmentsFlat(query: ILoadDepartmentsFlatQuery): JQueryDeferred<ILoadDepartmentsFlatResponse>;
        /** Search for departments and organisations in flat mode */
        FindInDepartmentsFlat(query: IDepartmentsFlatSearchQuery): JQueryDeferred<ISearchDepartmentsFlatResult>;
        /** Get department info, including email and phone. */
        GetDepartmentsInfo(departmentIds: string[], source?: DepartmentSource): JQueryDeferred<IDepartmentExtendedInfo[]>;
        GetDepartmentPath(departmentId: string, source?: DepartmentSource): JQueryDeferred<IDepartmentExtendedInfo[]>;
        GetStaffInfo(request: IStaffInfoRequestModel): JQueryDeferred<IStaffInfoResponseModel>;
    }
    var layoutStaffController: LayoutStaffController;
}
declare namespace WebClient {
    /** Определяет возможные справочники c данными элемента управления [Подразделение]{@link Department}. */
    enum DepartmentSource {
        /** Справочник сотрудников. */
        StaffDirectory = 0,
        /** Справочник контрагентов. */
        PartnersDirectory = 1,
    }
}
declare namespace WebClient {
    enum DepartmentType {
        Organisation = 0,
        Department = 1,
    }
}
declare namespace WebClient {
    interface IDepartmentDigest extends IDepartmentInfo {
    }
}
declare namespace WebClient {
    interface IDepartmentExtendedInfo extends IDepartmentInfo {
        email: string;
        phone: string;
    }
}
declare namespace WebClient {
    interface IDepartmentFlatDigest {
        data: IDepartmentInfo;
        hasChildren?: boolean;
    }
}
declare namespace WebClient {
    interface IDepartmentInfo {
        id: string;
        name: string;
        fullName: string;
        departmentType?: DepartmentType;
        hasEmployee?: boolean;
        hasChildren?: boolean;
    }
}
declare namespace WebClient {
    /** Query, that would be sent by Department control in quick search mode */
    interface IDepartmentsFlatSearchQuery {
        /** Search over departments, organisations or both */
        itemTypes: SearchDepartmentType;
        /** Text to search */
        searchText?: string;
        /** Parent department id */
        departmentId?: string;
        /** Count of items to skip (paginator logic) */
        skip: number;
        /** Max items count in the result */
        maxCount: number;
        /** Where to perform the search */
        source: DepartmentSource;
    }
}
declare namespace WebClient {
    interface IDepartmentsItemSearchInfo {
        matched: boolean;
        matchedFieldName: string;
        matchedFieldValue: string;
    }
}
declare namespace WebClient {
    interface IDepartmentsSearchItemFlat {
        data: IDepartmentInfo;
        searchInfo?: IDepartmentsItemSearchInfo;
        path?: IDepartmentInfo[];
        hasChildren?: boolean;
    }
}
declare namespace WebClient {
    /** Query, that would be sent by Department control in quick search mode */
    interface IDepartmentsSearchQuery {
        /** Search over departments, organisations or both */
        itemTypes: SearchDepartmentType;
        /** Text to search */
        searchText?: string;
        /** Count of items to skip (paginator logic) */
        skipCount: number;
        /** Max items count in the result */
        maxCount: number;
        /** Where to perform the search */
        source: DepartmentSource;
    }
}
declare namespace WebClient {
    interface IDepartmentsSearchResult {
        items: IDepartmentDigest[];
        hasMore: boolean;
    }
}
declare namespace WebClient {
    interface IDepartmentTreeDigest extends IDepartmentInfo {
        children?: IDepartmentTreeDigest[];
        childrenLoaded?: boolean;
    }
}
declare namespace WebClient {
    /** Tree node for search result */
    interface IDepartmentTreeSearchDigest extends IDepartmentTreeDigest {
        /** Marker, to distinguish from regular tree node (not search result) */
        matched: boolean;
        /** Name of the field in the element, that matched search query. if this field is not Name (otherwise null). */
        matchedFieldName: string;
        /** Value of the matchedFieldName, if this field is not Name (otherwise null). */
        matchedFieldValue: string;
    }
}
declare namespace WebClient {
    interface IEmloyeeInfoWithPhoneAndEmail extends IBasicEmployeeInfo {
        phone: string;
        email: string;
        unitId: string;
    }
}
declare namespace WebClient {
    /** Query, that would be sent by Department control when user navigated over the flatted tree. */
    interface ILoadDepartmentsFlatQuery {
        /** If specified, only chidren of this node shoudl be loaded. If value is not specified, root items will be returned.
          * If searchQuery provided, parameter should be ignored.
          */
        departmentId?: string;
        /** Where to perform the search */
        source: DepartmentSource;
        /** Количество результатов, которое следует пропустить (они уже загружены клиентом). */
        skip: number;
        /** Search over departments, organisations or both */
        itemTypes: SearchDepartmentType;
        /** Максимальное количество результатов в ответе. */
        maxCount: number;
    }
}
declare namespace WebClient {
    /** Response data when loading flat items */
    interface ILoadDepartmentsFlatResponse {
        /** Last modified time of directory */
        directoryTimestamp: number;
        /** Total items count */
        totalItemsCount: number;
        /** Items */
        items: IDepartmentFlatDigest[];
    }
}
declare namespace WebClient {
    /** Query, that would be sent by Department control when user navigated over the tree. */
    interface ILoadDepartmentsTreeQuery {
        /** If specified, only chidren of this node shoudl be loaded. If value is not specified, root items will be returned.
          * If searchQuery provided, parameter should be ignored.
          */
        parentNodeId?: string;
        /** How deep into tree should we look.
          * Value "1" means only children of parent (or only root departments itself),
          * "2" - children and its children, etc. Default value 2.
          */
        treeLevelDown: number;
        /** Search over departments, organisations or both */
        itemTypes: SearchDepartmentType;
        /** Where to perform the search */
        source: DepartmentSource;
    }
}
declare namespace WebClient {
    interface ISearchDepartmentsFlatResult {
        items: IDepartmentsSearchItemFlat[];
        hasMore: boolean;
        directoryTimestamp: number;
    }
}
declare namespace WebClient {
    /** Query, that would be sent by Department control when user search over the tree. */
    interface ISearchDepartmentsTreeQuery {
        /** Search over departments, organisations or both */
        itemTypes: SearchDepartmentType;
        /** Search query, entered by user. Result should contain tree,
          * enough to show n-th matched element, where n is searchResultNumber.
          * So, result shoudl contain element itself, and all its parent. It also
          * should contain root elements (without parent), to keep tree pretty when navigate between results.
          */
        searchQuery?: string;
        /** Where to perform the search */
        source: DepartmentSource;
    }
}
declare namespace WebClient {
    interface ISearchDepartmentsTreeResult {
        /** Tree, containing found element, all its parents, and all root elements. */
        items: IDepartmentTreeDigest[];
        /** Total count of elements, that match search query */
        totalResultsCount: number;
    }
}
declare namespace WebClient {
    interface IStaffInfoRequestModel {
        employeeIds: string[];
        departmentIds: string[];
        source: DepartmentSource;
    }
}
declare namespace WebClient {
    interface IStaffInfoResponseModel {
        employeesInfo: IEmloyeeInfoWithPhoneAndEmail[];
        departmentsInfo: IDepartmentExtendedInfo[];
    }
}
declare namespace WebClient {
    enum SearchDepartmentType {
        None = 0,
        Department = 1,
        Organisation = 2,
    }
}
declare namespace WebClient {
    class LayoutPartnerController extends ServerController {
        /**
         * Запрос, который шлется контролом Сотрудник контрагента при быстром поиске и поиске в окне справочника.
         */
        DirectorySearch(query: IPartnerDirectorySearchRequest): JQueryDeferred<IPartnerDirectorySearchResponse>;
        /** Load departments and organisations when navigating over tree. */
        LoadTree(query: IPartnerDirectoryTreeLoadRequest): JQueryDeferred<IPartnerDirectoryTreeLoadResponse>;
    }
    var layoutPartnerController: LayoutPartnerController;
}
declare namespace WebClient {
    /** Tree node for search result */
    interface IDepartmentTreeSearchDigest extends IDepartmentTreeDigest {
        /** Marker, to distinguish from regular tree node (not search result) */
        matched: boolean;
        /** Name of the field in the element, that matched search query. if this field is not Name (otherwise null). */
        matchedFieldName: string;
        /** Value of the matchedFieldName, if this field is not Name (otherwise null). */
        matchedFieldValue: string;
    }
}
declare namespace WebClient {
    interface IPartnerDirectoryItem {
        itemType: PartnerDirectoryItemType;
        data: IDepartmentInfo | IBasicEmployeeInfo;
    }
}
declare namespace WebClient {
    interface IPartnerDirectoryItemSearchInfo {
        matched: boolean;
        matchedFieldName: string;
        matchedFieldValue: string;
    }
}
declare namespace WebClient {
    /** Ответ на запрос поиска в справочнике контрагентов */
    interface IPartnerDirectoryQuickSearchResponse extends IPartnerDirectoryResponse {
        hasMore: boolean;
    }
}
declare namespace WebClient {
    /** Запрос, который шлется контролом Сотрудник контрагента при быстром поиске и поиске в окне справочника.  */
    interface IPartnerDirectoryRequest {
        /**
          * Ограничение выбранной организацией или подразделением.
          */
        departmentId?: string;
        /** Количество результатов, которое следует пропустить (они уже загружены клиентом). */
        skip: number;
        /** Максимальное количество результатов в ответе. */
        maxCount: number;
    }
}
declare namespace WebClient {
    /** Ответ на запрос {@link IPartnerDirectoryRequest} */
    interface IPartnerDirectoryResponse {
        items: IPartnerDirectoryItem[];
    }
}
declare namespace WebClient {
    interface IPartnerDirectorySearchItem extends IPartnerDirectoryItem {
        searchInfo?: IPartnerDirectoryItemSearchInfo;
        path?: IDepartmentInfo[];
    }
}
declare namespace WebClient {
    /** Запрос, который шлется контролом Сотрудник контрагента при быстром поиске и поиске в окне справочника.  */
    interface IPartnerDirectorySearchRequest {
        /** Режим поиска */
        searchMode: PartnerDirectorySearchMode;
        /** Текст поискового запроса при mode равном SearchDepartments или SearchEmployees */
        searchText?: string;
        /**
          * Ограничение выбранной организацией или подразделением.
          *
          * Если значение задано, то
          * 1) Если mode == SearchDepartments, то в результатах поиска должны
          * отображаться подчиненные Организации и Подразделения всех уровней (отображать Название).
          * 2) Если mode == SearchEmpoloyees, то все сотрудники организации, включая сотрудников подчиненных организаций и
          *     подразделений в алфавитном порядке.
          * 3) Если mode == SearchAll, то как организации так и сотрудников.
          *
          * Если значение не задано, то поиск производится по всему справочнику.
          */
        departmentId?: string;
        /** Количество результатов, которое следует пропустить (они уже загружены клиентом). */
        skip: number;
        /** Колличество подразеделений и орагнизаций, которые уже загружены */
        skipDepartments: number;
        /** Максимальное количество результатов в ответе. */
        maxCount: number;
    }
}
declare namespace WebClient {
    /** Ответ на запрос поиска в справочнике контрагентов */
    interface IPartnerDirectorySearchResponse extends IPartnerDirectoryResponse {
        items: IPartnerDirectorySearchItem[];
        hasMore: boolean;
        directoryTimestamp: number;
    }
}
declare namespace WebClient {
    interface IPartnerDirectoryTreeLoadItem extends IPartnerDirectoryItem {
        hasChildren?: boolean;
    }
}
declare namespace WebClient {
    /** Запрос, который шлется контролом Сотрудник контрагента при быстром поиске и поиске в окне справочника.  */
    interface IPartnerDirectoryTreeLoadRequest extends IPartnerDirectoryRequest {
        /**
          * Если значение задано, то возвращаются дочерние узлы организации или подразеделения, иначе узлы верхнего уровня.
          *
          */
        departmentId?: string;
    }
}
declare namespace WebClient {
    /** Ответ на запрос поиска в справочнике контрагентов */
    interface IPartnerDirectoryTreeLoadResponse extends IPartnerDirectoryResponse {
        items: IPartnerDirectoryTreeLoadItem[];
        totalItemsCount: number;
        directoryTimestamp: number;
    }
}
declare namespace WebClient {
    enum PartnerDirectoryItemType {
        Organization = 0,
        Department = 1,
        Employee = 2,
    }
}
declare namespace WebClient {
    /** Режимы поиска в справочнике контрагентов */
    enum PartnerDirectorySearchMode {
        /** Поиск среди организаций и подразделений */
        SearchDepartments = 0,
        /** Поиск среди сотрудников */
        SearchEmployees = 1,
        /** Поиск организаций, подразделений и сотрудников */
        SearchAll = 2,
    }
}
declare namespace WebClient {
    class LayoutLinksController extends ServerController {
        DeleteLink(cardId: string, info: ISimpleBindingInfo, linkId: string, timestamp: number): JQueryDeferred<ILinksDataModel>;
        PreviewCard(previewCardId: string): JQueryDeferred<string>;
        CardCreateLinks(allowedKinds: IAllowedCardKind[]): JQueryDeferred<IKindModel[]>;
        AddExistingCardLink(linkParams: ILayoutLinkCreateParams): JQueryDeferred<ILinksDataModel>;
        SetLinkDescription(data: ILayoutSetLinkDescriptionParams): JQueryDeferred<ILinksDataModel>;
        GetLinks(cardId: string, bindingInfo: ISimpleBindingInfo): JQueryDeferred<ILinksDataModel>;
        CheckReadMainFileAvailable(cardId: string): JQueryDeferred<boolean>;
    }
    var layoutLinksController: LayoutLinksController;
}
declare namespace WebClient {
    interface IAllowedCardKind {
        KindId: string;
        WithDescendants: boolean;
    }
}
declare namespace WebClient {
    interface IAllowedCardType {
        CardTypeId: string;
    }
}
declare namespace WebClient {
    interface IKindModel {
        cardTypeId: string;
        kindId: string;
        name: string;
        kinds: IKindModel[];
        notAvailable: boolean;
    }
}
declare namespace WebClient {
    interface ILayoutLinkCreateParams {
        sourceCardId: string;
        sourceCardTimestamp: number;
        destinationCardId: string;
        linkTypeId: string;
        linksBinding: ISimpleBindingInfo;
        saveHardLink: boolean;
        editOperation: string;
    }
}
declare namespace WebClient {
    interface ILayoutSetLinkDescriptionParams {
        cardId: string;
        bindingInfo: ISimpleBindingInfo;
        linkId: string;
        newDescription: string;
        timestamp: number;
    }
}
declare namespace WebClient {
    interface ILinkItemData {
        linkId: string;
        displayName: string;
        linkTypeName: string;
        kind: LinkKind;
        cardId: string;
        creationDate?: Date;
        authorDisplayName: string;
        description: string;
    }
}
declare namespace WebClient {
    interface ILinksDataModel {
        links: ILinkItemData[];
        bindingInfo: ISimpleBindingInfo;
        allowedLinkCardTypes: string[];
        linksLoaded: boolean;
    }
}
declare namespace WebClient {
    interface ILinkType {
        LinkTypeId: string;
        Caption: string;
        DisplayName: string;
    }
}
declare namespace WebClient {
    class LayoutHistoryController extends ServerController {
        testData: HistoryRecord[];
        GetHistoryRecords(request: HistoryRequest): JQueryDeferred<HistoryResponse>;
    }
    var layoutHistoryController: LayoutHistoryController;
}
declare namespace WebClient {
    /**
     * Запись в истории карточки.
     */
    interface HistoryRecord {
        /** Уникальный идентификатор записи. */
        id: string;
        /** Пользователь, который выполнил действие. */
        author: IBasicEmployeeInfo;
        /** Дата и время, когда действие было выполнено. */
        date: Date;
        /** Описание действия, котрое было выполнено. */
        event: string;
    }
}
declare namespace WebClient {
    /**
     *  Запрос записей в истории карточки с учетом фильтров и поиска.
     */
    class HistoryRequest {
        /** Карточка, историю которой следует просматривать. */
        cardId: string;
        /** Автор действия. */
        employeeName?: string;
        /** Дата выполнения действия (время следует игнорировать) */
        date?: Date;
        /** Часть текста события, по которой следует осуществить поиск. */
        eventSearch?: string;
        /** Количество результатов, которые следует пропустить (логика постраничного разбиения). */
        skip: number;
        /** Максимальное количество записей, которое следует вернуть (логика постраничного разбиения). */
        maxCount: number;
        /** Операции которые необходимо скрывать*/
        operationsToHide: string[];
        /** Идентификатор для поиска записей в кэше*/
        cacheId: string;
        /** Идентификатор операции изменения */
        editOperation: string;
    }
}
declare namespace WebClient {
    /**
     *  Ответ на запрос записей в истории карточки с учетом фильтров и поиска.
     */
    class HistoryResponse {
        records: HistoryRecord[];
        hasMore: boolean;
        cacheId: string;
        renew: boolean;
    }
}
declare namespace WebClient {
    class LayoutFolderController extends ServerController {
        CheckFolderForAvailableCardKind(folderId: string, cardId: string): JQueryDeferred<ICheckResult>;
        GetUserFoldersTreeData(folderId?: string): JQueryDeferred<IFolderInfo[]>;
        GetFolderInfo(folderId: string, loadSubfoldersLevel: number): JQueryDeferred<IFolderItemNodeData>;
        GetFolderInfoWithParents(folderId: string): JQueryDeferred<IFolderItemNodeDataWithParents>;
        DetachUserFolders(folderIds: string[]): JQueryDeferred<void>;
        private GetFolderInfoInternal(url, data);
        protected parseFoldersTreeData(data: any): IFolderInfo[];
        protected parseServerFolderInfo(src: any, folderInfo: IFolderInfo): void;
    }
    var layoutFolderController: LayoutFolderController;
}
declare namespace WebClient {
    /** Определяет возможные варианты выбора папки по умолчанию. */
    enum FolderMode {
        /** Не использовать папку по умолчанию. */
        NoDefaultValue = 0,
        /** Использовать текщую папку, как папаку по умолчанию. */
        DefaultValueIsCurrentFolder = 1,
    }
}
declare namespace WebClient {
    enum FolderType {
        Regular = 1,
        Virtual = 4,
        Delegate = 8,
        System = 16,
    }
}
declare namespace WebClient {
    interface ICheckResult {
        passed: boolean;
        failReason: string;
    }
}
declare namespace WebClient {
    /** Предоставляет информацию о папке.  */
    interface IFolderInfo {
        /** Название папки. */
        name: string;
        /** Идентификатор папки. */
        folderId: string;
        /** Uri папки. */
        additionalId: string;
        /** Тип папки. */
        folderType: FolderType;
        /** Флаг, указывающий, возможно ли создание карточек в папке: true - запрещено (для виртуально папки), false - возможно. */
        disabled: boolean;
        /** Периодичность обновления информации о счётчиках в секундах */
        refreshTimeout: number;
        /** Флаг, указывающий, есть ли незагруженные подчиненные папки */
        hasUnloadedSubfolders: boolean;
        /** Информация о подчиненных папках. */
        children: IFolderInfo[];
    }
}
declare namespace WebClient {
    /** See DocsVision.Platform.WebClient.Models.Folders.FolderNode  */
    interface IFolderItemNodeData {
        id: string;
        name: string;
        /** Represents folder node type*/
        type: FolderType;
        /** Default folder view style*/
        defaultStyle: FolderNodeStyle;
        /** Gets value indicating whether node has unloaded subfolders*/
        hasUnloadedSubfolders: boolean;
        /** Get or sets folder URL, when folder displayed as web page*/
        url: string;
        /** Represents default view identifier*/
        defaultViewId: string;
        /** Represents search identifier for virtual folder*/
        searchId: string;
        /** Represents target folder identifier for delegate folder*/
        targetFolderId: string;
        /** Gets whether search hash parameters*/
        searchHasParameters: boolean;
        /** Folder setting - miliseconds to auto refresh. Zero value inidicates, that autorefresh disabled */
        refreshTimeout: number;
        /** Folder setting - show unread counter */
        showUnreadCounter: boolean;
        /** Represents subfolders*/
        folders: IFolderItemNodeData[];
    }
}
declare namespace WebClient {
    interface IFolderItemNodeDataWithParents {
        folderNode: IFolderItemNodeData;
        parentNodes: string[];
    }
}
declare namespace WebClient {
    class LayoutFileController extends ServerController {
        GetFiles(cardId: string, options?: IGetFilesOptions): JQueryDeferred<IFileListDataModel>;
        GetVersions(fileId: string): JQueryDeferred<FileListVersionsDataModel>;
        LockFile(ownerCardId: string, fileCardId: string): JQueryDeferred<IFileListDataModel>;
        UnlockFile(ownerCardId: string, fileCardId: string): JQueryDeferred<IFileListDataModel>;
        DeleteFile(ownerCardId: string, fileCardId: string, timestamp: number): JQueryDeferred<IFileListDataModel>;
    }
    var layoutFileController: LayoutFileController;
}
declare namespace WebClient {
    interface IFileListDataModel {
        timestamp: number;
        files: ILayoutFileModel[];
        hasAnySignature: boolean;
        totalCount: number;
    }
}
declare namespace WebClient {
    interface FileListVersionsDataModel {
        versions: IFileVersion[];
    }
}
declare namespace WebClient {
    interface IFileVersion {
        id: string;
        versionId: string;
        versionPath: string;
        versionNumber: number;
        author: string;
        creationDate: Date;
        comments: IVersionComment[];
    }
}
declare namespace WebClient {
    interface IGetFilesOptions {
        skipCount: number;
        maxCount: number;
    }
}
declare namespace WebClient {
    interface ILayoutFileModel {
        name: string;
        fileId: string;
        fileCardId: string;
        isLocked: boolean;
        isFilePreviewSupported: boolean;
        currentVersion: IFileVersion;
        childVersions: IFileVersion[];
        hasFileSignature: boolean;
        versionsCount: number;
        isMain: boolean;
        webDavLink: string;
        webDavReadonlyLink: string;
    }
}
declare namespace WebClient {
    interface IVersionComment {
        id: string;
        date: Date;
        comment: string;
        author: string;
    }
}
declare namespace WebClient {
    class LayoutDocumentController extends ServerController {
        /**
         * Generates new number, assign it to the card and return new number as response.
         * @param cardId ID of the card be new number generated for.
         * @param generationRuleId The ID of the rule for new number generation.
         * @param save Should save generated value into the card or not.
         * @returns Generated number
         */
        GenerateNumber(cardId: string, generationRuleId: string, info: IBindingInfoExt, save: boolean): JQueryDeferred<any>;
        /**
         * Resets the card number and removes it.
         */
        ReleaseNumber(cardId: string, numberId: string, info: IBindingInfoExt): JQueryDeferred<void>;
        SendForAcquaintance(cardId: string, employeeIds: string[], endDate?: Date): JQueryDeferred<any>;
    }
    var layoutDocumentController: LayoutDocumentController;
}
declare namespace WebClient {
    interface INumberInfo {
        id: string;
        number: string;
        bindingInfo: IBindingInfoExt;
    }
}
declare namespace WebClient {
    class LayoutDirectoryDesignerController extends ServerController {
        private testDigetValues;
        private testTreeDigestValues;
        /**
         * Search for rows by typeahead logic.
         * @returns Rows that match search query
         */
        FindRows(query: IDirectoryDesignerSearchQuery): JQueryDeferred<IDirectoryDesignerSearchResult>;
        /** Load directory nodes when navigating over tree. */
        LoadTree(query: IDirectoryDesignerLoadTreeQuery): JQueryDeferred<IDirectoryDesignerTreeNodeDigest[]>;
        /** Load departments and organisations when searching over tree. */
        FindInTree(query: IDirectoryDesignerSearchTreeQuery): JQueryDeferred<IDirectoryDesignerSearchTreeResult>;
        findNodeRec(current: IDirectoryDesignerTreeNodeDigest[], idToFind: string): IDirectoryDesignerTreeNodeDigest;
    }
    var layoutUnversalDirectoryController: LayoutDirectoryDesignerController;
}
declare namespace WebClient {
    /**
    * Определяет возможные области выбора строк из [Конструктора справочников]{@link DirectoryDesignerRow}.
    */
    enum DirectoryDesignerAreas {
        /** Только из указанного узла. */
        OnlyNode = 0,
        /** Только из дочерних узлов указанного узла. */
        OnlyChildren = 1,
        /** Из указанного узла и его дочерних узлов. */
        NodeWithChildren = 2,
    }
}
declare namespace WebClient {
    enum DirectoryDesignerNodeType {
        /** Узел справочника */
        Node = 0,
        /** Строка справочника */
        Row = 1,
    }
}
declare namespace WebClient {
    /** Query, that would be sent by UnivarsalDirectory control when user navigated over the tree. */
    interface IDirectoryDesignerLoadTreeQuery {
        /** Root node, where search according to searchArea value should be performed.
          * If value does not sepcified, then all root nodes of directory should be watched.  */
        rootNodeId?: string;
        /** If parentNodeId specified, this value determines, whether we should look node,
          * its children, or everywhere */
        searchArea?: DirectoryDesignerAreas;
        /** If specified, only chidren of this node should be loaded. If value is not specified, root items will be returned.
          */
        currentNodeId?: string;
        /** How deep into tree should we look.
          * Value "1" means only children of currentNodeId (or only root node itself, if currentNodeId is null),
          * "2" - children and its children, etc.
          */
        treeLevelDown: number;
    }
}
declare namespace WebClient {
    interface IDirectoryDesignerRowDigest extends IDirectoryDesignerRowInfo {
    }
}
declare namespace WebClient {
    interface IDirectoryDesignerRowInfo {
        id: string;
        name: string;
    }
}
declare namespace WebClient {
    /** Query, that would be sent by UnversalDirectory control in quick search mode */
    interface IDirectoryDesignerSearchQuery {
        /** Root node, where search according to searchArea value should be performed.
          * If value does not sepcified, then all root nodes of directory should be watched.  */
        rootNodeId?: string;
        /** If parentNodeId specified, this value determines, whether we should look node,
          * its children, or everywhere */
        searchArea?: DirectoryDesignerAreas;
        /** Search text, entered by user in quick search field */
        searchText: string;
        /** Count of items to skip (paginator logic) */
        skipCount: number;
        /** Max items count in the result */
        maxCount: number;
    }
}
declare namespace WebClient {
    interface IDirectoryDesignerSearchResult {
        items: IDirectoryDesignerRowDigest[];
        hasMore: boolean;
    }
}
declare namespace WebClient {
    /** Query, that would be sent by UnversalDirectory control when user search over the tree. */
    interface IDirectoryDesignerSearchTreeQuery {
        /** Root node, where search according to searchArea value should be performed.
          * If value does not sepcified, then all root nodes of directory should be watched.  */
        rootNodeId?: string;
        /** If parentNodeId specified, this value determines, whether we should look node,
          * its children, or everywhere */
        searchArea?: DirectoryDesignerAreas;
        /** Search query, entered by user. Result should contain tree,
          * enough to show n-th matched element, where n is searchResultNumber.
          * So, result shoudl contain element itself, and all its parent. It also
          * should contain root elements (without parent), to keep tree pretty when navigate between results.
          */
        searchQuery?: string;
        /** Number of matched by searchQuery element. See searchQuery for description.
          *  Used for next/prev buttons logic when searching over tree.
          */
        searchResultNumber?: number;
    }
}
declare namespace WebClient {
    interface IDirectoryDesignerSearchTreeResult {
        /** Tree, containing found element, all its parents, and all root elements. */
        items: IDirectoryDesignerTreeNodeDigest[];
        /** Total count of elements, that match search query */
        totalResultsCount: number;
        /** Number of matched by searchQuery element from the query. Enumerates from 1 to totalResultsCount. */
        searchResultNumber: number;
        /** Id of element, that matched search query */
        matchedElementId: string;
        /** Name of the field in the element, that matched search query, if this field is not Name (otherwise null). */
        matchedFieldName: string;
        /** Value of the matchedFieldName, if this field is not Name (otherwise null). */
        matchedFieldValue: string;
    }
}
declare namespace WebClient {
    interface IDirectoryDesignerTreeNodeDigest {
        name: string;
        nodeType: DirectoryDesignerNodeType;
        id: string;
        children?: IDirectoryDesignerTreeNodeDigest[];
        childrenLoaded?: boolean;
    }
}
declare namespace WebClient {
    class LayoutController extends ServerController {
        Get(cardIlayoutPositionNamed: string): JQueryDeferred<ILayoutViewModel>;
        GetPart(cardIlayoutPositionNamed: string, controlName: string): JQueryDeferred<ILayoutViewModel>;
    }
    var layoutController: LayoutController;
}
declare namespace WebClient {
    class LayoutCardController extends ServerController {
        Save(model: ISaveControlData): JQueryDeferred<any>;
        ChangeState(changeStateDataModel: IChangeStateData): JQueryDeferred<ILayoutCardModel>;
        /** Loads controls for specific tab page. */
        GetLayoutPart(layoutPartParams: ILayoutPartParams): JQueryDeferred<ILayoutModel>;
        CheckModifiedAndLocked(cardId: string, timestamp: number, refresh?: boolean): JQueryDeferred<any>;
        Delete(cardId: string): JQueryDeferred<any>;
    }
    var layoutCardController: LayoutCardController;
}
declare namespace WebClient {
    interface IChangeStateData {
        cardId: string;
        operationId: string;
        layoutType: number;
        comment?: string;
    }
}
declare namespace WebClient {
    interface ILayoutPartParams {
        cardId: string;
        layoutType: number;
        rootControlName: string;
        includeRootControl: boolean;
    }
}
declare namespace WebClient {
    interface ISaveControlData {
        cardId: string;
        layoutType: number;
        bindings: IBindingsWriteRequest[];
        createAsLink: ICreateAsLinkParams;
        createInFolder: string;
        timestamp: number;
        /** Deferred object, that shows saving process */
        deferred: JQueryDeferred<any>;
    }
}
declare namespace WebClient {
    interface IBindingInfoExt extends ISimpleBindingInfo {
    }
}
declare namespace WebClient {
    /**
    * Модель данных карточки.
    */
    interface ICardInfoModel {
        /** Идентификатор карточки. */
        id: string;
        /** Идентификатор типа карточки. */
        typeId: string;
        /** Информация о блокировке, установленной на карточке. */
        lockInfo: ILockInfoModel;
        /** Штамп времени создания/изменения карточки. */
        timestamp: number;
        parentCardId: string;
        createAsLink: ICreateAsLinkParams;
        createInFolder: string;
        createInCurrentFolderForbidden: boolean;
        createDate: Date;
    }
}
declare namespace WebClient {
    interface ICreateAsLinkParams {
        sourceCardId: string;
        sourceCardTimestamp: number;
        linkTypeId: string;
        linksBinding: ISimpleBindingInfo;
        saveHardLink: boolean;
    }
}
declare namespace WebClient {
    interface IExtendedLayoutModel extends ILayoutModel {
        layoutInfo: ILayoutInfoModel;
    }
}
declare namespace WebClient {
    interface ILayoutCardModel extends ILayoutViewModel {
        cardInfo: ICardInfoModel;
    }
}
declare namespace WebClient {
    /**
    * Модель данных разметки карточки.
    */
    interface ILayoutInfoModel {
        /** Тип устройства, на котором открыта карточка. */
        deviceType: DeviceType;
        /** Используемая локаль. */
        localeId: number;
        /** Название используемой разметки. */
        name: string;
        /** Идентификатор используемой разметки. */
        id: string;
        /** Тип разметки. */
        type: LayoutType;
        /** Все операции редактирования, зарегистрированные для вида карточки в *Конструкторе состояний*. */
        operations: IEditOperation[];
    }
}
declare namespace WebClient {
    interface ILayoutModel {
        properties: any;
        children: ILayoutModel[];
        controlTypeName: string;
    }
}
declare namespace WebClient {
    interface ILayoutViewModel {
        layoutModel: IExtendedLayoutModel;
    }
}
declare namespace WebClient {
    interface ILockInfoModel {
        isLocked: boolean;
        accountName: string;
    }
}
declare namespace WebClient {
    interface ISimpleBindingInfo {
        fieldAlias: string;
        sectionId: string;
        editOperation: string;
        propertyName: string;
    }
}
declare namespace WebClient {
    /**
    * Тип разметки.
    */
    enum LayoutType {
        /** Разметка, предназначенная для просмотра карточки. */
        View = 0,
        /** Разметка, предназначенная для редактирования карточки. */
        Edit = 1,
        /** Разметка, предназначенная для создания карточки. */
        Create = 2,
    }
}
declare namespace WebClient {
    class LayoutAgreementController extends ServerController {
        testData: AgreementTemplateModel[];
        realData: boolean;
        GetAgreementList(cardId: string): JQueryDeferred<IAgreementListDataModel>;
        GetAgreementManagementModel(cardId: string): JQueryDeferred<ILayoutAgreementManagementModel>;
        GetAgreementManagementStartModel(documentCardId: string): JQueryDeferred<IAgreementManagementStartModel>;
        GetAgreementManagementEditModel(documentCardId: string, reconcileCardId: string): JQueryDeferred<IAgreementManagementEditModel>;
        InterruptCurrentStages(documentCardId: string, reconcileCardId: string): JQueryDeferred<string>;
        AgreementStop(documentCardId: string, reconcileCardId: string): JQueryDeferred<string>;
        AgreementResume(documentCardId: string, reconcileCardId: string): JQueryDeferred<string>;
        AgreementPause(documentCardId: string, reconcileCardId: string): JQueryDeferred<string>;
        AgreementFinish(documentCardId: string, reconcileCardId: string): JQueryDeferred<string>;
        GetTemplates(documentCardId: string): JQueryDeferred<AgreementTemplateModel[]>;
        GetAgreementTemplateStages(documentId: string, templateId: string): JQueryDeferred<AgreementStageModel[]>;
        CreateReconciliation(model: {
            documentId: string;
            creationSettingId: string;
            stages?: StageChangeModel[];
        }): JQueryDeferred<any>;
        ChangeStages(model: {
            documentId: string;
            reconcileCardId: string;
            stages?: StageChangeModel[];
        }): JQueryDeferred<any>;
        StartAgreement(model: {
            cardId: string;
            templateId: string;
        }): JQueryDeferred<any>;
    }
    var layoutAgreementController: LayoutAgreementController;
}
declare namespace WebClient {
    /**
    * Содержит данные элемента управления [Лист согласования]{@link AgreementList}.
    */
    interface IAgreementListDataModel {
        /** Строки листа согласования. */
        items: IAgreementListItemModel[];
        /** Регистрационный номер документа, для которого получен лист согласования. */
        documentNumber: string;
        /** Название документа, для которого получен лист согласования. */
        documentName: string;
    }
}
declare namespace WebClient {
    /**
    * Содержит данные элемента в {@link IAgreementListItemModel}.
    */
    interface IAgreementListItemModel {
        /** Дата согласования. */
        date: Date;
        /** Отображаемое имя согласующего. */
        employeeDisplayText: string;
        /** Подразделение согласующего. */
        departmentName: string;
        /** Комментарий к решению. */
        comment: string;
        /** Отображаемое значение решения по согласованию. */
        decisionText: string;
    }
}
declare namespace WebClient {
    interface IAgreementManagementEditModel {
        agreementManagement: IAgreementManagementModel;
        stages: AgreementStageModel[];
        canInterruptCurrentStages: boolean;
        availableAgreementOperations: AgreementOperationKind[];
    }
}
declare namespace WebClient {
    /**
    * @review
    */
    interface IAgreementManagementModel {
        isMainFileExists: boolean;
        isNew: boolean;
        stateType: AgreementStateType;
        reconciliationCardId: string;
    }
}
declare namespace WebClient {
    /**
    * @review
    */
    interface IAgreementManagementStartModel {
        agreementManagement: IAgreementManagementModel;
        templates: AgreementTemplateModel[];
    }
}
declare namespace WebClient {
    interface ILayoutAgreementManagementModel {
        isNew: boolean;
        enableCreate: boolean;
        createDisableReason: string;
        agreementCardId: string;
        stateType: AgreementStateType;
        documentTimestamp: number;
    }
}
