import React, { useState, useEffect } from 'react';
import { Header } from './Header.js';
import { NavLink } from 'react-router-dom';
import { AuthForm } from './AuthForm.js';

export function Login() {
  return (
    <>
      <Header
        actions={
          <NavLink className="nav-link nav-link_size_big" to="/sign-up">
            Регистрация
          </NavLink>
        }
      />
      <AuthForm 
        title="Вход" 
        name="authorization" 
        buttonText="Войти" 
      />
    </>
  );
}
