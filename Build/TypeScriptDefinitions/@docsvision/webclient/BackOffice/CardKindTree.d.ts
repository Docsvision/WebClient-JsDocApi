import { CardKindTreeNodeModel } from "@docsvision/webclient/BackOffice/CardKindTreeNodeModel";
import React from "react";
/** @internal */
export declare const CardKindTreeContent: import("styled-components").StyledComponent<"ul", any, {
    className: string;
}, "className">;
/** @internal */
export interface ICardKindTreeProps {
    kinds: CardKindTreeNodeModel[];
    activeKindId?: string;
    emptyMessage?: string;
    onCardKindSelected?: (kind: CardKindTreeNodeModel) => void;
    isCardKindAvailable?: (kind: CardKindTreeNodeModel) => boolean;
    notAvailableProperty: "notSelectable" | "notAvailable";
}
/**
 * @internal
 * Дерево видов карточек
 */
export declare class CardKindTree extends React.Component<ICardKindTreeProps, {}> {
    /**
     * При выборе вида карточи
     * @param cardKind Выбранный вид карточки
     */
    protected onCardKindSelected: (cardKind: CardKindTreeNodeModel) => void;
    /** При клике по ветке дерева */
    protected onBranchToggle: (cardKind: CardKindTreeNodeModel, e?: React.MouseEvent<HTMLElement>) => void;
    /**
     * Рекурсивно строим дерево видов
     * @param cardKinds Список видов карточек
     */
    protected getCardKindsTree: (cardKinds: CardKindTreeNodeModel[]) => React.ReactNode[];
    /** @internal */
    render(): JSX.Element;
}
