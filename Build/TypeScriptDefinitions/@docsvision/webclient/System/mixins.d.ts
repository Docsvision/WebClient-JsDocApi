import { SimpleInterpolation } from "styled-components";
/** Добавляет стили при наведении курсора. */
export declare const hover: (strings: TemplateStringsArray, ...values: SimpleInterpolation[]) => SimpleInterpolation;
/** Добавляет стили при фокусе элемента. */
export declare const focus: (strings: TemplateStringsArray, ...values: SimpleInterpolation[]) => SimpleInterpolation;
/** Добавляет стили при активации элемента. */
export declare const active: (strings: TemplateStringsArray, ...values: SimpleInterpolation[]) => SimpleInterpolation;
/** Добавляет стили при  наведении  */
export declare const parentHover: (strings: TemplateStringsArray, ...values: SimpleInterpolation[]) => SimpleInterpolation;
export declare const parentFocus: (strings: TemplateStringsArray, ...values: SimpleInterpolation[]) => SimpleInterpolation;
export declare const parentActive: (strings: TemplateStringsArray, ...values: SimpleInterpolation[]) => SimpleInterpolation;
