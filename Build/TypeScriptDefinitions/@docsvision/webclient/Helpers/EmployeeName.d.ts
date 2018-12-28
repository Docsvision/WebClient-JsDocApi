import React from "react";
/** Свойства для {@link EmployeeName} */
export interface IEmployeeNameProps {
    /** Имя сотрудника, которое необходимо отобразить. */
    name: string;
}
/**
 * Компонент, который заменят пробелы перед инициалами на неразрывные пробелы, для избежания переноса инициалов отдельно от фамилии.
 * Инициалы распознаются как последовательность символов "Пробел", "Буква", "Точка".
 */
export declare class EmployeeName extends React.Component<IEmployeeNameProps, any> {
    private updateText;
    /** @internal */
    componentDidMount(): void;
    /** @internal */
    componentDidUpdate(): void;
    /** @internal */
    render(): JSX.Element;
}
