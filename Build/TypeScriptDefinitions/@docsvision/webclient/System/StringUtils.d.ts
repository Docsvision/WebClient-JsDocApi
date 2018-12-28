/** Форматирует строку, заменяя вхождения {0}, {1}, {2}... на значения переданных параметров. */
export declare function formatString(str: string, ...args: any[]): string;
/** Вставляет replacement в строку str начиная с позиции index, заменяя существующие символы str. */
export declare function replaceStringAt(str: string, index: number, replacement: string): string;
/** Разбивает строку на подстроки указанной длинны. */
export declare function chunkString(str: string, length: number): string[];
/** Делает первую букву в строке заглавной. */
export declare function capitalizeFirstLetter(str: any): any;
/** Разбивает строку на подстроки, разделяя ее по указанному вхождению. */
export declare function splitFirstSymbol(str: string, symbol: string): string[];
/**
 * Преобразует имена свойств в объекте так, чтобы они начинались с прописной буквы.
 *
 * Пример использования:
 *
 *      let lowerModel = JSON.parse(str, toCamelCase);
 */
export declare function toCamelCase(key: any, value: any): any;
/** Возвращает true, если переданная строка оканчивается на двоеточие. */
export declare function endsWithColon(str: string): boolean;
