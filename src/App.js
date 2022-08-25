import './App.css';
import React from 'react';

function App() {
  const code = new URL(window.location.href).searchParams.get("code");
  const lineConfig = {
    redirectURI: 'https://line-login-nine.vercel.app',
    clientID: 1657409033,
    state: 'b41c8fd15b895f0fc28bfwb9d7da89054d931e7s',
    scope: 'profile%20openid',
    nonce: 'd78a51235f6ee189e831q9c68523cfa336917ada'
  }
  const handleLineLogin = () => {
    window.location.href = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${lineConfig.clientID}&redirect_uri=${lineConfig.redirectURI}&state=${lineConfig.state}&scope=${lineConfig.scope}&nonce=${lineConfig.nonce}`
  }
  return (
    <div className='App'>
      <button onClick={handleLineLogin}>click</button>
      {code && (
        <h1>code -----&gt; {code}</h1>
      )}
    </div>
  );
}

export default App;
