import { GenModels } from '@docsvision/webclient/Generated/DocsVision.WebClient.Models';
export declare class CommentModel implements GenModels.Comment {
    constructor(comment: GenModels.Comment);
    /**
     * Gets or sets identifier
     */
    id: string;
    /**
     * Gets or sets employee identifier
     */
    employeeId?: string;
    /**
     * Gets or sets employee display name
     */
    employeeDisplayName: string;
    /**
     * Gets or sets date
     */
    date?: string;
    /**
     * Gets or sets text
     */
    text: string;
    deleted: boolean;
}
