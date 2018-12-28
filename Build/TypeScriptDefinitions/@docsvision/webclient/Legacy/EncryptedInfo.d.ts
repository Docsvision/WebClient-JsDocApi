/** @internal */
export declare class EncryptedInfo {
    private thumbprint;
    private attirbutes;
    private signedFiles;
    constructor(thumbprint: string);
    readonly Thumbprint: string;
    readonly Attirbutes: Array<EncryptedAttribute>;
    SignedFiles: any;
}
/** @internal */
export declare class EncryptedAttribute {
    private name;
    private value;
    private oid;
    constructor(oid: string, value: string);
    readonly Oid: string;
    readonly Name: string;
    readonly Value: string;
}
