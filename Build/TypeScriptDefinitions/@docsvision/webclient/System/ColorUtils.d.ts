/**
 * Вычисляет цвет, который получится при наложении прозрачного слоя одного цвета на подложку другого цвета.
 * @param opacity Степень прозрачности накладываемого слоя (0-1).
 * @param backgroundColor Цвет подложки в формате HEX.
 * @param foregroundColor Цвет накладываемого слоя в формате HEX.
 */
export declare function caculateTransparentColor(foregroundColor: any, backgroundColor: any, opacity: any): string;
/** Осветление цвета. */
export declare function colorLuminance(hex: string, lum: number): string;
