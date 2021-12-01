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
                    clientId="684096482788-pgq1culpt0jc6gcbt2e9m98n8ahe43v1.apps.googleusercontent.com" // ToDo create credentials at Google Cloud Platform
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
