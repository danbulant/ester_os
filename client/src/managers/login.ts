import User from './user';
import NotYetImplemented from '../errors/notYetImplemented';

class Login {
    user: User = null;

    checkName(name: string): boolean{
        return /[a-z0-9_-](?:@[a-z0-9_-])/gi.test(name);
    }

    async fetchAvatar(name: string): Promise<string>{
        throw new NotYetImplemented();
    }

    async login(name: string, password: string): Promise<User> {
        throw new NotYetImplemented();
    }
}

export default Login;