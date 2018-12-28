export interface NavigationRoute {
    isApi: boolean;
    hashPattern: string;
    controllerName: string;
    actionName: string;
    actionParametersExpression: string;
    uniqueRouteName: string;
}
