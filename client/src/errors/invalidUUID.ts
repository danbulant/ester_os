import Error from './error';

export default class InvalidUUID extends Error {
    name = "InvalidUUID";
    constructor() {
        super("Invalid UUID format");
        this.stack = (<any>new Error("Invalid UUID format")).stack;
    }
}