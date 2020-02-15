import UserDef from '../defs/user';
import UserSettings from '../defs/userSettings';

class User implements UserDef {
    fetched: boolean = false;
    sysName: string;
    uuid: string;
    firstName: string;
    lastName: string;

    avatar: URL;
    backgrounds: URL[];

    async fetchData(){

        return this;
    };

    settings: UserSettings;
    async fetchSettings(){
        return this.settings;
    };
}

export default User;