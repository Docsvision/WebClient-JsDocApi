import React from "react";
/** Свойства для {@link SvgWrapper} */
export interface ISvgWrapperProps {
    /** SVG для отображения. */
    svg: string;
    /** TabIndex для навигации по tab. */
    tabIndex?: number;
    /** Отображаемый элемент. */
    el?: string | React.Component;
    /** Вызывается при клике. */
    onClick?: (event: React.MouseEvent<any>) => void;
    /** CSS класс со стилями. */
    className?: string;
    /** Всплывающая подсказка через плагин */
    title?: string;
    /** Всплывающая подсказка через атрибут "title" */
    nativeTitle?: string;
}
/**
 * Обёртка для отображения <svg> на странице.
 *
 * Пример использования:
 *
 *     <SvgWrapper className={classIfDefined(props.className)} tabIndex={props.tabIndex} onClick={props.onClick}
 *         title={props.title} nativeTitle={props.nativeTitle}
 *         svg={`
 *             <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 *                 ...
 *             </svg>
 *         `} />
 */
export declare const SvgWrapper: (props: ISvgWrapperProps) => JSX.Element;
