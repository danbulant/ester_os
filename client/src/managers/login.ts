import User from './user';
import {NotYetImplemented, InvalidUsername} from '../errors/index';

class Login {
    user: User = null;

    checkName(name: string): boolean{
        return /[a-z0-9_-]{1,}(@[a-z0-9_-]{1,})?/gi.test(name);
    }

    async fetchAvatar(name: string): Promise<string>{
        throw new NotYetImplemented();
    }

    async login(name: string, password: string): Promise<User> {
        if(!this.checkName(name))throw new InvalidUsername();
        throw new NotYetImplemented();
    }
}

export default Login;