import UserSettings from "./userSettings";
import UUID from './uuid';

interface User {
    sysName: string;
    uuid: string;
    firstName: string;
    lastName: string;

    id: UUID;

    avatar: URL;
    backgrounds: URL[];

    fetchData(): Promise<User>;

    settings: UserSettings;
    fetchSettings(): Promise<UserSettings>;
}

export default User;