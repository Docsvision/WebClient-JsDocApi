/** @internal */
export declare class TrackCardChanges {
    private traceProvider;
    constructor();
    static OnCardChanged(ownerCardId: any): void;
    static GetLinkedCardIds(): Array<string>;
    static GetMainCardId(): string;
    static RefreshPage(): void;
    static GetCurrentEmployee(): string;
}
