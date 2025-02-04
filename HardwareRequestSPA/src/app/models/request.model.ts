import { User } from "./user.model";

export class RequestDTO{
    itemName: string;
    reason: string;
    username: string;
    password: string;

    constructor(itemName: string, reason: string, username: string, password: string){
        this.itemName = itemName;
        this.reason = reason;
        this.username = username;
        this.password = password;
    }

    
}