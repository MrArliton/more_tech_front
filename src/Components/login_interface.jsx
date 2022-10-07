const Login_Input = () => {
    
    return(
        <div>
            <h1>VTB</h1>
            <p>
            <span>Login</span>
             <input type="text"/>
            </p>
            <p>
            <span>Password</span>
            <input type="text"/>
            </p>
        </div>  
    )
}

export const Login = () => {
    return (
        <div>
            <Login_Input/>
        </div>
    )
}