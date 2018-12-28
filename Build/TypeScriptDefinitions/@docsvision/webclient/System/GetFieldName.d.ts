/**
 * Лямбда функция вида () => obj.someProperty или (obj) => obj.someProperty.
 *
 * Функция getFieldName способна конвертировать данное выражение в имя свойства (напр. "someProperty").
 */
export declare type FieldSpec<TModel, TResult> = ((model?: TModel) => TResult) | string;
/**
 * Преобразует функцию вида () => obj.someProperty или (obj) => obj.someProperty в имя свойства (напр. "someProperty").
 *
 * Данная функция используется для того, чтобы получить имя свойства, создав при этом TypeScript-ссылку на это свойство.
 * TypeScript-ссылка позволяет использовать инструменты VisualStudio для рефакторинга и исследования кода (например, переименование).
 * @param fieldSpec функция вида () => obj.someProperty или (obj) => obj.someProperty или строка (возвращается без изменений)
 */
export declare function getFieldName<TModel, TResult>(fieldSpec: FieldSpec<TModel, TResult>): string;
