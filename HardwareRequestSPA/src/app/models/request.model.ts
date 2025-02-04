import { User } from "./user.model";

export class RequestDTO{
    itemName: string;
    reason: string;
    username: string;
    password: string;
    trackingNumber: string;

    constructor(itemName: string, reason: string, username: string, password: string, trackingNumber: string){
        this.itemName = itemName;
        this.reason = reason;
        this.username = username;
        this.password = password;
        this.trackingNumber = trackingNumber;
    }

    
}