import { IReadonlyAccessor } from "@docsvision/webclient/Helpers/DynamicModel/IReadonlyAccessor";
/** См. {@link RecursiveVisitorCallback} */
export declare enum VisitResult {
    /** Продолжить рекурсивный обход дерева */
    Continue = 0,
    /** Остановить рекурсивный обход дерева */
    Stop = 1
}
/** См. {@link RecursiveVisitor} */
export declare type RecursiveVisitorCallback<NodeT> = (node: NodeT, parent?: NodeT, level?: number) => VisitResult | void;
/**
 * @review Вспомогательный класс для рекурсивного обхода древовидных структур с использованием {@link IReadonlyAccessor} для доступа к дочерним узлам.
 */
export declare class RecursiveVisitor<NodeT> {
    children: IReadonlyAccessor<NodeT, NodeT[]>;
    /**
     * @param children Способ, при помощи которого будет осуществляться доступ к дочерним узлам.
     */
    constructor(children: IReadonlyAccessor<NodeT, NodeT[]>);
    /**
     * @review Рекурсивно обходит дерево вглубь (то есть, сначала спускается вниз, потом вширь).
     * @param node Текущий узел дерева
     * @param visitor Логика, которую необходимо выполнить для каждого узла.
     * @param parent Родительский узел (будет передан в visitor, параметр не обязателен)
     * @param currentLevel Текущий уровень узла (0 - корень дерева). Если не значение не задано, то считается что node - корень дерева.
     */
    visitDeep(node: NodeT, visitor: RecursiveVisitorCallback<NodeT>, parent?: NodeT, currentLevel?: number): VisitResult | void;
    /**
     * @review Рекурсивно обходит дерево вширь (то есть, сначала просматриваются соседние узлы, потом их дети).
     * @param node Текущий узел дерева
     * @param visitor Логика, которую необходимо выполнить для каждого узла.
     * @param parent Родительский узел (будет передан в visitor, параметр не обязателен)
     * @param currentLevel Текущий уровень узла (0 - корень дерева). Если не значение не задано, то считается что node - корень дерева.
     */
    visitWide(node: NodeT, visitor: RecursiveVisitorCallback<NodeT>, parent?: NodeT, currentLevel?: number): VisitResult | void;
    /**
     * @internal См. {@link visitWide}
     */
    visitWideInternal(visitor: RecursiveVisitorCallback<NodeT>, node: NodeT, currentLevel?: number): VisitResult | void;
    /**
     * @review Преобразует дерево в плоский список
     * @param tree Дерево
     * @param onVisitNode Вызывается при посещении каждого узла дерева. Должно вернуть булево значение - добавлять ли узел в плоский список или нет
     */
    getFlatTree<T>(tree: NodeT[], onVisitNode?: (node: NodeT) => boolean): NodeT[];
}
