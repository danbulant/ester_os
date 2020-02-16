import Error from './error';

class NotYetImplementedError extends Error {
    name:string = "NotYetImplementedError";
    constructor(){
        super("This function wasn't yet implemented");
        this.stack = (<any>new Error("This function wasn't yet implemented")).stack;
    }
}

export default NotYetImplementedError;