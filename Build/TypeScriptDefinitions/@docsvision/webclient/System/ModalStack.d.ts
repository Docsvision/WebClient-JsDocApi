import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
/** @internal */
export interface IModalStackItem {
    zIndex: number;
    onUpdate: (newZIndex: number) => void;
}
/**
 * Вспомогательный класс для работы с приоритетом модальных окон.
 * По умолчанию он уже используется в ModalBackdrop и ModalWindow,
 * поэтому интегрировать его самостоятельно обычно не требуется.
 *
 * Пример использования (регистрируемся при показе окна и убираем регистрацию при скрытии):
 *
 *     export interface IModalProps {
 *     }
 *
 *     export interface IModalState {
 *         zIndex: number;
 *     }
 *
 *     export class Modal extends React.Component<IModalProps, IModalState> {
 *         constructor(props) {
 *             super(props);
 *
 *             this.state = {
 *                 zIndex: ModalStack.DEFAULT_ZINDEX
 *             }
 *         }
 *
 *         componentDidMount() {
 *             if (this.props.visible) {
 *                 ModalStack.register(this, newZIndex => this.setState({ zIndex: newZIndex }));
 *             }
 *         }
 *
 *         componentWillReceiveProps(nextProps: IModalBackdropProps) {
 *             if (this.props.visible != nextProps.visible) {
 *                 if (nextProps.visible) {
 *                     ModalStack.register(this, newZIndex => this.setState({ zIndex: newZIndex }));
 *                 } else {
 *                     ModalStack.unregister(this);
 *                 }
 *             }
 *         }
 *
 *         componentWillUnmount() {
 *             ModalStack.unregister(this);
 *         }
 *
 *         render() {
 *             return (
 *                 <div style={{ zIndex: this.state.zIndex }}>Моё модальное окно</div>
 *             );
 *         }
 *     }
 *
 */
export declare class ModalStack {
    static readonly DEFAULT_ZINDEX = 1000;
    static lastZIndex: number;
    static data: Map<any, IModalStackItem>;
    static ModalRegistered: SimpleEvent<{}>;
    static ModalUnregistered: SimpleEvent<{}>;
    /**
     * Зарегистрировать модальное окно
     * @param modal Модальное окно
     * @param onUpdate Вызывается при перерасчёте zIndex компонента, здесь зарегистрированное модальное окно должно перерисовать себя.
     * @param updateAfterRegister Вызвать ли onUpdate сразу после регистрации или самому по-другому обработать
     * zIndex через вернувшееся значение из функции.
     */
    static register(modal: any, onUpdate: (newZIndex: number) => void, updateAfterRegister?: boolean): number;
    /**
     * Удалить указанное модальное окно
     * @param component Модальное окно
     * @returns Удалось ли удалить модальное окно
     */
    static unregister(modal: any): boolean;
}
