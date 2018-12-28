/** Интерфейс события {@link InputBasedControlParams.dataChanged}. */
export interface IDataChangedEventArgs {
    oldValue: any;
    newValue: any;
}
/** Типизированная версия интерфейса {@link IDataChangedEventArgs} */
export interface IDataChangedEventArgsEx<T> extends IDataChangedEventArgs {
    oldValue: T;
    newValue: T;
}
