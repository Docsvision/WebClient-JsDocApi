import { IRealtimeCommunicationHub } from "@docsvision/webclient/System/IRealtimeCommunicationHub";
import { IRealTimeCommunicationMessage } from "@docsvision/webclient/System/IRealTimeCommunicationMessage";
export declare type RealtimeServerSender<T> = (messageItem: IRealTimeCommunicationMessage<T>, hub?: IRealtimeCommunicationHub) => JQueryDeferred<any> | Promise<any>;
