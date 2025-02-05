export class RequestDTO{
    itemName: string;
    reason: string;
    username: string;
    name: string;
    password: string;
    trackingNumber: string;
    status: string;
    createdAt: string;

    constructor(itemName: string, reason: string, username: string, name: string, password: string, trackingNumber: string, status: string, createdAt: string){
        this.itemName = itemName;
        this.reason = reason;
        this.username = username;
        this.name = name;
        this.password = password;
        this.trackingNumber = trackingNumber;
        this.status = status;
        this.createdAt = createdAt;
    }
    
}