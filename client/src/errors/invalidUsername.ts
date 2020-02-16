import Error from './error';

export default class InvalidUsername extends Error {
    name = "InvalidUsername";
    constructor() {
        super("Invalid username provided");
        this.stack = (<any>new Error("Invalid username provided")).stack;
    }
}