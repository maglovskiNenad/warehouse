import { WHDocument } from "./wh-document.model";


export class WHDocumentList {
    count: number;
    results: WHDocument[];

    constructor(obj?:any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((x:any) => new WHDocument(x)) || [];
    }
}