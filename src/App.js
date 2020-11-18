import React, {useState} from 'react';
import MainLayout from './components/layout/MainLayout';
import Landing from './components/landingPage/Landing';

const App = () => {

    const [user, setUser] = useState({
        username: "",
        password: "",
        data: null,
        token: "",
        message: "",
        success: false,
        team_id: "",
        type_user: ""
    })

    return ( 
        <div>
            {user.succes ?
                <MainLayout

                />
                :
                <Landing
                    user = {user}
                    setUser = {setUser}
                />  
            }
            
            
        </div>
     );
}
 
export default App;