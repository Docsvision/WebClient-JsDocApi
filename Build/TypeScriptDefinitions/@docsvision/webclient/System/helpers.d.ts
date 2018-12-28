import { Interpolation, SimpleInterpolation, ThemedStyledProps } from "styled-components";
/**
 * Проверяет, является ли компонент Styled-компонентом
 * @param component Проверяемый компонент
 */
export declare const isStyled: (component: any) => boolean;
/**
 * Позволяет скомбинировать несколько миксинов
 * @param mixins Список миксинов
 *
 * Пример использования:
 *
 *     export const Button = styled.span`
 *         ${combineMixins(hover, focus)`
 *             color: lime;
 *         `}
 *     `;
 *
 */
export declare const combineMixins: (...mixins: ((strings: TemplateStringsArray, ...values: SimpleInterpolation[]) => Interpolation<ThemedStyledProps<object, any>>)[]) => (strings: any, ...values: any[]) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
