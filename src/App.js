import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
    const [email, setEmail] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function logout() {
        setIsAuthenticated(false);
        setEmail(" ");
    }

    let content;
    if (isAuthenticated){
    content = <div>
        <h2> Witaj {email}!</h2>
        <button onClick={logout}> Wyloguj </button>
    </div>
    } else {
        content = <div>
            Zaloguj się e-mailem
            <input type="text" value={email} onChange={handleChange} />
            <button onClick={() => setIsAuthenticated(true)}>Wchodzę</button>
        </div>
    }

    return (
        <div>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>
            {content}
        </div>
    );

}

export default App;