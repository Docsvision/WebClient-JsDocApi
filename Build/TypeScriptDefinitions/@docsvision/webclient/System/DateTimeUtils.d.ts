import { DateFormats } from "@docsvision/webclient/System/DateFormats";
import moment from "moment";
/**
 * Возвращает порядковый номер дня в году для указанной даты.
 *
 * https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
 */
export declare function getDayOfYear(date: Date): number;
/** @deprecated Используйте formatDateTime */
export declare function dateTimeToString(dateTime: Date | string, format?: DateFormats): string;
/** @deprecated Используйте formatDateTime */
export declare function toStringDate(date: Date): string;
/** Конвертирует дату в строку. */
export declare function formatDateTime(dateTime: Date | string, format?: DateFormats): string;
/** Конвертирует строку в дату. */
export declare function parseDateTime(dateTime: string, format?: DateFormats, asMoment?: boolean): Date | moment.Moment | null;
