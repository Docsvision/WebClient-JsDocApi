import React from "react";
/** Свойства для {@link UserFolderItemWrapper} */
export interface IUserFolderItemWrapperProps {
    /** Содержимое UserFolderItemWrapper */
    children?: React.ReactNode;
    /** При нажатии на кнопку закрытия элемента меню */
    onRemoveClick?: (ev: React.MouseEvent<any>) => void;
}
/** @internal */
export declare const UserFolderItemWrapper: (props: IUserFolderItemWrapperProps) => JSX.Element;
