/** @internal Свойства для {@link UnreadCountIndicator} */
export interface IUnreadCountIndicatorProps {
    /** Количество */
    count: number;
    /** Дополнительный класс */
    className?: string;
}
/**
 * Отображает количество непрочитанных карточек.
 */
export declare const UnreadCountIndicator: (props: IUnreadCountIndicatorProps) => JSX.Element;
