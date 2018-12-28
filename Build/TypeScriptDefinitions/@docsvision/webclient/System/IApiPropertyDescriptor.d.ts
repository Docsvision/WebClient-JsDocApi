/** @deprecated */
export interface IApiPropertyDescriptor {
    propertyName: string;
    get?(): any;
    set?(v: any): void;
}
