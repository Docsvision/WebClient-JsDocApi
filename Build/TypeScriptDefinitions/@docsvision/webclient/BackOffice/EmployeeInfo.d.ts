/** @internal */
export interface IEmployeeInfoProps {
    employeeName: string;
    position?: string;
    employeeId: string;
    imageHash?: string;
}
/** @internal */
export interface IImageContainerStyleProps {
    imageUrl: string;
}
export declare const EmployeeInfo: (props: IEmployeeInfoProps) => JSX.Element;
