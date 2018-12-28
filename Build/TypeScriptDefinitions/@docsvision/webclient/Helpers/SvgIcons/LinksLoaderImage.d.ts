/** Свойства для {@link RightArrowIcon} */
export interface LinksLoaderProps {
    className?: string;
    title?: string;
    nativeTitle?: string;
    wrapperClassName?: string;
    width: number;
    cropSvg?: boolean;
    useSvgAnimation?: boolean;
}
/**
 * Анимированная картинка-заглушка, показываемая во время загрузки заданий.
 */
export declare const LinksLoaderImage: (props: LinksLoaderProps) => JSX.Element;
