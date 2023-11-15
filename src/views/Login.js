import React, { useState } from 'react';
import '../assets/css/login.css';
import { Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Login failed: ${errorMessage}`);
      }
      const dataAdmin = await response.json()
      if(dataAdmin.admin){
        localStorage.setItem('id' , dataAdmin._id)
        window.location.href = '/admin/dashboard';
      }
      
     
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };
  

  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <div>
          <input
            type="text"
            placeholder="Nhập tên tài khoản"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary btn-block btn-large"
            onClick={handleLogin}
          >
            Đăng Nhập
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
