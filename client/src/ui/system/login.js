import React from 'react';
import "../../App.css";
//import MT from 'mousetrap';

class Login extends React.Component{
    constructor(p){
        super(p)
        this.state = {
            login: false
        };
    }
    componentDidMount(){
        let loginPage = document.getElementById("loginPage");

        let time = loginPage.getElementsByClassName("time")[0];
        let user = loginPage.getElementsByClassName("user")[0];

        let cl = this;
        function showLogin(e) {
            document.removeEventListener("keydown", showLogin);
            console.log("Showing login");
            cl.setState({login: true});

            setTimeout(()=>{
                console.log("Hiding login");
                cl.setState({login: false});
                document.addEventListener("keydown", showLogin);
            }, 30000)
        }

        document.addEventListener("keydown", showLogin);
    }
    render(props){
        if (this.state.login) {
            return (
                <div id="loginPage" className="login active">
                    <div className="time active">
                        00:00
                    </div>
                    <div className="user active">
                        <div className="avatar-holder">
                            <img className="avatar" alt="avatar" />
                        </div>
                        <div className="password-holder">
                            <input type="password" className="password" />
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div id="loginPage" className="login">
                <div className="time">
                    20:48
                    Press ENTER to open login
                </div>
                <div className="user">
                    <div className="avatar-holder">
                        <img className="avatar" alt="avatar" />
                    </div>
                    <div className="password-holder">
                        <input type="password" className="password" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;