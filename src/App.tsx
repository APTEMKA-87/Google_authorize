import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';

class App extends Component {

    responseGoogle=(response: any)=>{
        console.log(response)
        console.log(response.profileObj)
    }

    render() {
        return (
            <div>
                <GoogleLogin
                    clientId="684096482788-qgrmul6vpjaqss26vhrom6dhqepmlutm.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
}

export default App;
