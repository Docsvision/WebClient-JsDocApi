/**
 * Возвращает функцию, которая может быть передана в качестве значения "ref" параметра react-элемента.
 * В результате элементу будет добавлена всплывающая подсказка при помощи плагина tipso.
 */
export declare function attachTooltip(text: string, extraOptions?: any): (elem: HTMLElement) => any;
/**
 * Возвращает функцию, которая может быть передана в качестве значения "ref" параметра react-элемента.
 * Текст всплывающей подсказки будет определен на основе содержимого элемента.
 */
export declare function attachTooltipFromContent(extraOptions?: any): (elem: HTMLElement) => void;
/**
 * Добавляет всплывающую подсказку к элементу.
 */
export declare function setTooltip(elem: HTMLElement, text: string, options?: any): void;
