import UserSettings from "./userSettings";

interface User {
    sysName: string;
    uuid: string;
    firstName: string;
    lastName: string;

    avatar: URL;
    backgrounds: URL[];

    fetchData(): Promise<User>;

    settings: UserSettings;
    fetchSettings(): Promise<UserSettings>;
}

export default User;