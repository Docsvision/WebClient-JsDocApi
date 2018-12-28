/** Если условие истинно, возвращает переданную строку обрамленную пробелами. Иначе пустую строку. */
export declare function classIf(condition: boolean, css: string): string;
/** Если условие ложно, возвращает переданную строку обрамленную пробелами. Иначе пустую строку. */
export declare function classIfNot(condition: boolean, css: string): string;
/** Если переданное значение определено, то возвращает его. Иначе возвращает пустую строку. */
export declare function classIfDefined(css?: string): string;
/** Если условие ложно, то возвращает строку "hide" обрамленную пробелами. hide - это системный класс, скрывающий элемент на странице. */
export declare function showIf(condition: boolean): string;
/** Если условие истинно, то возвращает строку "hide" обрамленную пробелами. hide - это системный класс, скрывающий элемент на странице. */
export declare function hideIf(condition: boolean): string;
/** Если условие истинно, то возвращает переданную строку trueCss обрамленную пробелами, иначе falseCss обрамленную пробелами. */
export declare function classIfElse(condition: boolean, trueCss: string, falseCss: string): string;
