import UserSettings from "./userSettings";

interface User {
    sysName: string;
    uuid: string;
    firstName: string;
    lastName: string;

    avatar: URL;
    backgrounds: URL[];

    settings: UserSettings;
}

export default User;