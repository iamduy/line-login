import './App.css';
import React from 'react';

function App() {

  const handleLineLogin = () => {
    window.location.href = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1657409033&redirect_uri=https://eco-api.its-globaltek.com&state=b41c8fd15b895f0fc28bfwb9d7da89054d931e7s&scope=profile%20openid&nonce=d78a51235f6ee189e831q9c68523cfa336917ada`
  }
  return (
    <div className='App'>
      <button onClick={handleLineLogin}>click</button>
    </div>
  );
}

export default App;
