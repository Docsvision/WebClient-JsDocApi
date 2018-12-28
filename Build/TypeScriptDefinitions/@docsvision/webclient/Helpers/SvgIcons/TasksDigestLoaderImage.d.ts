/** Свойства для {@link RightArrowIcon} */
export interface TasksDigesLoaderProps {
    className?: string;
    title?: string;
    nativeTitle?: string;
    wrapperClassName?: string;
    width: number;
    useSvgAnimation: boolean;
}
/**
 * Анимированная картинка-заглушка, показываемая во время загрузки заданий.
 */
export declare const TasksDigestLoaderImage: (props: TasksDigesLoaderProps) => JSX.Element;
