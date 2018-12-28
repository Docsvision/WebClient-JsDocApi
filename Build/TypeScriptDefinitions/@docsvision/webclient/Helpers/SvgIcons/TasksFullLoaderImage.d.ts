/** Свойства для {@link RightArrowIcon} */
export interface TasksFullLoaderProps {
    className?: string;
    wrapperClassName?: string;
    title?: string;
    nativeTitle?: string;
    useSvgAnimation: boolean;
}
/**
 * Анимированная картинка-заглушка, показываемая во время загрузки заданий.
 */
export declare const TasksFullLoaderImage: (props: TasksFullLoaderProps) => JSX.Element;
