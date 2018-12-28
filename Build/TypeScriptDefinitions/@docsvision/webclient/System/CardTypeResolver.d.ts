import { ICardTypeInfo } from "@docsvision/webclient/System/ICardTypeInfo";
import { ICardTypeMap } from "@docsvision/webclient/System/ICardTypeMap";
/** Хранилище информации о типах карточек. */
export declare class CardTypeResolver {
    protected CardTypeMap: ICardTypeMap;
    protected unknownCardType: {
        id: string;
        name: string;
        cssClass: string;
        caption: string;
    };
    /** Регистрирует новый тип карточки. */
    registerCardType(cardTypeInfo: ICardTypeInfo): void;
    /** Возвращает информацию об определенном типе карточки. */
    getCardTypeInfo(cardTypeId: string): ICardTypeInfo;
}
export declare var cardTypeResolver: CardTypeResolver;
