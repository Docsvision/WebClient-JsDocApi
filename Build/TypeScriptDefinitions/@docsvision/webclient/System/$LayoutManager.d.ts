import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ILayout } from "@docsvision/webclient/System/$Layout";
import { ServiceContainer } from "@docsvision/webclient/System/ServiceContainer";
import { ShowLayoutParams } from "@docsvision/webclient/System/ShowLayoutParams";
export interface ILayoutManager {
    showCard(model: GenModels.LayoutCardViewModel, name?: string, owner?: string, services?: ServiceContainer): JQueryDeferred<ILayout>;
    show(root: HTMLElement | string, name: string, model: GenModels.LayoutViewModel): JQueryDeferred<ILayout>;
    showLayout({ root, name, model, owner, layoutPosition }: ShowLayoutParams): JQueryDeferred<ILayout>;
    getLayout(name: string): ILayout;
    getCurrentLayoutName(): string | undefined;
    getLayoutModel(name: string): GenModels.LayoutViewModel | GenModels.LayoutCardViewModel;
    disablePageLeaveConfirmation(): void;
    deleteCard(cardId: string): JQueryDeferred<any>;
    back(): void;
    destroy(name?: string): JQueryDeferred<any>;
    onBeforeWindowUnload(e: undefined): void;
    onWindowUnload(ev: undefined): void;
}
export declare type $LayoutManager = {
    layoutManager: ILayoutManager;
};
