export interface Email {
    from: string;
    to?: string[];
    cc?: string[];
    bcc?: string[];
    body?: string;
    subject: string;
    received?: string;
    sent?: string;
}