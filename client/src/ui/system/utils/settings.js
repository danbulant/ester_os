import User from './dataHolders/user';

//To-Do: Fetch data of currently loged in user from server
function getSettings(){
    return new Promise((resolve, reject) => {
        let user = new User;
    
        user.name = "Admin";
        user.avatar = "https://api.adorable.io/avatars/285/" + user.name;
        user.background = "/images/backgrounds/pexels_1.jpg";

        resolve(user);
    })
}

export default getSettings;