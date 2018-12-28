/** @review Свойства для {@link CommandBar}  */
export interface ICommandBarProps {
    /**
     * Initial value (after control loaded) should be undefined,
     * then it should change to "true", then to "false" and etc.
     * If your control do not follow this convention correct animations are not guarantee.
     */
    expanded: boolean;
    /** Children tags, created by CommandBarItem */
    children?: React.ReactNode;
    /** Additional class */
    className?: string;
}
