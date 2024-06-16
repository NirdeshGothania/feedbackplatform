// import React from 'react';
// import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import FeedbackForm from '../FeedbackForm';
// import FeedbackList from '../FeedbackList';
// import Home from '../Home';

// const App = () => {
//   const [user, setUser] = React.useState(null);

//   const login = useGoogleLogin({
//     onSuccess: async tokenResponse => {
//       const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
//         headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
//       });
//       setUser(userInfo.data);
//       // Send token to the backend for server-side authentication
//       await axios.post('http://localhost:3000/auth/google/callback', { token: tokenResponse.access_token });
//     },
//   });

//   return (
//     <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home user={user} login={login} />} />
//           <Route path="/feedback" element={user ? <FeedbackForm user={user} /> : <Navigate to="/" />} />
//           <Route path="/feedback-list" element={user ? <FeedbackList /> : <Navigate to="/" />} />
//         </Routes>
//       </Router>
//     </GoogleOAuthProvider>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import { GoogleLogin } from 'react-google-login';
// import FeedbackForm from './FeedbackForm';
// import FeedbackList from './FeedbackList';
// import Home from './Home';

// const App = () => {
//   const [user, setUser] = useState(null);

//   const onSuccessGoogleLogin = async (response) => {
//     try {
//       const { data } = await axios.get('http://localhost:3000/auth/google/callback', {
//         headers: { Authorization: `Bearer ${response.accessToken}` },
//       });
//       setUser(data.user);
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   const onFailureGoogleLogin = (error) => {
//     console.error('Google login failed:', error);
//   };

//   const logout = () => {
//     setUser(null);
//     // Implement logout logic if needed
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={user ? <Home user={user} logout={logout} /> : <Login onSuccess={onSuccessGoogleLogin} onFailure={onFailureGoogleLogin} />} />
//         <Route path="/feedback" element={user ? <FeedbackForm user={user} /> : <Navigate to="/" />} />
//         <Route path="/feedback-list" element={user ? <FeedbackList /> : <Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// };

// const Login = ({ onSuccess, onFailure }) => {
//   return (
//     <div>
//       <h1>Welcome to the Feedback Platform</h1>
//       <GoogleLogin
//         clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//         buttonText="Login with Google"
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy={'single_host_origin'}
//       />
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
import Home from './Home';

const App = () => {
  const [user, setUser] = useState(null);

  const onSuccessGoogleLogin = async (response) => {
    try {
      const { data } = await axios.get('http://localhost:3000/auth/google/callback', {
        headers: { Authorization: `Bearer ${response.accessToken}` },
      });
      setUser(data.user);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const onFailureGoogleLogin = (error) => {
    console.error('Google login failed:', error);
  };

  const logout = () => {
    setUser(null);
    // Implement logout logic if needed
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home user={user} logout={logout} /> : <Login onSuccess={onSuccessGoogleLogin} onFailure={onFailureGoogleLogin} />} />
        <Route path="/feedback" element={user ? <FeedbackForm user={user} /> : <Navigate to="/" />} />
        <Route path="/feedback-list" element={user ? <FeedbackList /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

const Login = ({ onSuccess, onFailure }) => {
  return (
    <div>
      <h1>Welcome to the Feedback Platform</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default App;
