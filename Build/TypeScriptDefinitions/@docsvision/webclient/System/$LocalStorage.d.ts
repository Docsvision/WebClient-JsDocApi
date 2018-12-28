export interface ILocalStorage {
    supportsLocalStorage(): boolean;
    setData<T>(id: string, obj: T): boolean;
    getData<T>(id: string): T;
    setItem(id: string, data: string): boolean;
    getItem(id: string): string;
    removeItem(id: string): void;
    transformId(id: string): void;
}
export declare type $LocalStorage = {
    localStorage: ILocalStorage;
};
