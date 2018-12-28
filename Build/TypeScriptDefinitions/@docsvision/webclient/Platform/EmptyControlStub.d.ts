import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
/**
 * Содержит публичные свойства [EmptyControlStub]{@link EmptyControlStub}.
 */
export declare class EmptyControlStubParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Пояснение, почему не удалось загрузить основной контрол. */
    emptyControlStubComment?: string;
}
/**
 * Контрол-заглушка, обозначающий что никакого содержимого для отображения нет.
 */
export declare class EmptyControlStub extends BaseControl<EmptyControlStubParams, any> {
    /** @internal */
    protected createParams(): EmptyControlStubParams;
    /** @internal */
    protected createImpl(): ControlImpl;
    /** @internal */
    componentDidMount(): void;
}
