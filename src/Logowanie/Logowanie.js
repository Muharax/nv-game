import React, { useState, useEffect } from "react";
import './Logowanie.css';
// import logo from './img/image0.jpg';

const URL = 'http://localhost:3001';

function Logowanie({ handleLogin }) {
  const [username, setUsername] = useState("ADMIN11");
  const [password, setPassword] = useState("admino");
  const [token, setToken] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  
 
  useEffect(() => {
    setToken(generateToken());
  }, []);

  const generateToken = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Zanciśnięto przycisk Logowania');

    // OPERACJA DLA GITHUB PAGES
    if(username == "ADMIN11" && password =="admino"){
      handleLogin("Logowanie poprawne");
      return;
    }else{
      setServerMessage(`${username} nie ma w bazie`);
      return;
    }


    // OPERACJA DLA BAZY DANYCH


    // try {
    //   const response = await fetch(`${URL}/logowanie`, {
    //     method: 'post',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password, token })
    //   });

    //   const data = await response.json();

    //   if (data.token) {
    //     setServerMessage(data.message);
    //     localStorage.setItem('token', data.token);
    //     const decodedToken = jwtDecode(data.token);
    //     localStorage.setItem('user', decodedToken.user);
    //     localStorage.setItem('role', decodedToken.role);
    //       console.log(`Użytkownik: ${decodedToken.user}, Token: ${data.token}, Rola: ${decodedToken.role}`);
    //     handleLogin(data.message);
    //   }
    // } catch (error) {
    //   setServerMessage(`Niepoprawne dane logowania: ${error.message}`);
    // }  finally {
    //     console.log('Blok finally - logowanie');
    // }


  };
  

  // return ...

  return (
    <div className="login-background">
      <div className="login-panel">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
          <input
                type="hidden"
                id="token"
                autoComplete="off"
                name="token"
                placeholder="Token"
                value={token}
                className="w100"
              />

            <div id="name">
              {/* <i className="material-icons prefix cwhite">🙍‍♂️</i> */}
              <i className="material-icons prefix cwhite">Nazwa użytkownika </i>
              <input
                type="text"
                id="first"
                autoComplete="off"
                autoFocus="On"
                name="user"
                placeholder="Login"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w100"
                required
              />
            </div>

            <div id="pass">
              {/* <i className="material-icons prefix cwhite">🔑</i> */}
              <i className="material-icons prefix cwhite">Hasło</i>
              <input
                type="password"
                id="second"
                autoComplete="off"
                name="pass"
                placeholder="Hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w100"
                required
              />
            </div>

            <div>
              <div className="wrapper">
                <div className="box">
                  <button type="submit" className="btn btn-login" id="sub">
                    Zaloguj się
                  </button>
                  <button type="button" className="btn btn-forgot-password" id="forgot-my-password">
                    Zapomniałem hasła
                  </button>
                  
                </div>
              </div>
            </div>

            <div>
            <button type="button" className="btn btn-registration" id="registration">
                    Rejestracja
            </button>
            </div>


          </form>
        </div>
      </div>

    <div className="shotbox">
      <div className="shotbox-topic">Aktualizacja 21-09-2023</div>
      <div className="shotbox-description">
        Wersja startowa/testowa aplikacji 0.0.1 <br /><br />
         Nowości do zaimplementowania na najbliższe dni<br /><br />
         - System logowania i rejestracji<br />
         - Token jWt dla Node.JS<br />
         - Baza danych MySQL<br />

      </div>
    </div>

    <div className="main-information">
      

    </div>





    </div>
  );
}

export default Logowanie;

  