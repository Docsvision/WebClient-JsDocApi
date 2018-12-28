import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
export interface IDataLoadArgs<QueryT, ResponseT> {
    query: QueryT;
    response?: ResponseT;
}
export declare type CancelableApiDataEvent<QueryT, ResponseT> = CancelableApiEvent<IDataLoadArgs<QueryT, ResponseT>>;
export declare function loadDataWithEvents<QueryT, ResponseT>(query: QueryT, loadFunc: (query: QueryT) => JQueryDeferred<ResponseT> | Promise<ResponseT>, beforeEvent: CancelableApiDataEvent<QueryT, ResponseT>, afterEvent: CancelableApiDataEvent<QueryT, ResponseT> | BasicApiEvent<any>): JQueryDeferred<ResponseT>;
