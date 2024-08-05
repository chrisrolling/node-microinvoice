// root > types > microinvoice.d.ts

declare module 'microinvoice' {
    export interface ImageOptions {
        path: string;
        width: number;
        height: number;
    }

    export interface HeaderOptions {
        image?: ImageOptions;
    }

    export interface StyleOptions {
        header?: HeaderOptions;
    }

    export interface LabelValuePair {
        label?: string;
        value: string | string[] | number;
        price?: boolean;
    }

    export interface InvoiceDetails {
        name: string;
        header: LabelValuePair[];
        currency: string;
        customer: LabelValuePair[];
        seller: LabelValuePair[];
        legal?: Array<{
            value: string;
            weight?: string;
            color?: string;
        }>;
        details: {
            header: Array<{ value: string }>;
            parts: Array<Array<LabelValuePair>>;
            total: LabelValuePair[];
        };
    }

    export interface InvoiceData {
        style?: StyleOptions;
        data: {
            invoice: InvoiceDetails;
        };
    }

    class MicroInvoice {
        constructor(options: InvoiceData);
        generate(outputPath: string): Promise<void>;
    }

    export default MicroInvoice;
}
