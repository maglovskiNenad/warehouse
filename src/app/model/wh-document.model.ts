

export class WHDocument {
    _id: number;
    dateOfRecording: string;
    dateOfCreation: string;
    transactionType: string;
    status: string;
    year: number;
    businessPartner: BusinessPartner;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.dateOfRecording = obj && obj.dateOfRecording || "";
        this.dateOfCreation = obj && obj.dateOfCreation || "";
        this.transactionType = obj && obj.transactionType || "";
        this.status = obj && obj.status || "";
        this.year = obj && obj.year || 0;
        this.businessPartner = obj && obj.businessPartner || new BusinessPartner();
    }
}

export class BusinessPartner {
    name: string;
    city: string;
    address: string;

    constructor(obj?:any) {
        this.name = obj && obj.name || "";
        this.city = obj && obj.city || "";
        this.address = obj && obj.address || "";
    }
}