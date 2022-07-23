

export class DocumentItem {
    price: number;
    documents: number;
    _id: number;
    article: string;
    quantity: number;

    constructor(obj?:any) {
        this.price = obj && obj.price || 0;
        this.documents = obj && obj.documents || 0;
        this._id = obj && obj._id || 0;
        this.article = obj && obj.article || "";
        this.quantity = obj && obj.quantity || 0;
    }
}