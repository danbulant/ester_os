import {InvalidUUID} from '../errors/index';

export default class UUID {
    constructor(private content:string){
        this.update(content);
    }
    update(content: string){
        if (/[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}/.test(content)){
            this.content = content;
            return;
        }
        throw new InvalidUUID();
    }
    toString(){
        return this.content as string;
    }
    toNumber(){
        throw new Error("Cannot convert UUID to INT");
    }
}