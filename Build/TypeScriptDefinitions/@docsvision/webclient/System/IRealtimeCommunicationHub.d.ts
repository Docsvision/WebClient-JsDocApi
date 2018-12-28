import { IRealTimeCommunicationMessage } from "@docsvision/webclient/System/IRealTimeCommunicationMessage";
/** @internal */
export interface IRealtimeCommunicationHub {
    client: IRealtimeCommunicationHubClient;
    server: IRealtimeCommunicationHubServer;
}
/** @internal */
export interface IRealtimeCommunicationHubServer {
    register(employeeId: string, employeeAcccountName: string, sessionId: string): Promise<any>;
    sendMessage(message: IRealTimeCommunicationMessage<string>): Promise<any>;
}
/** @internal */
export interface IRealtimeCommunicationHubClient {
    sendMessage<T>(message: IRealTimeCommunicationMessage<T>): any;
}
