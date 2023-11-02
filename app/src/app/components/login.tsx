'use client';
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link';
import validator from 'validator';
import { createUser, login } from '../communication/user';

const LoginRegister = (isLogin: boolean) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleLogin = (): void => {
    if (!email || !password) {
      setErrorMessage('Veuillez remplir tous les champs');
      return;
    }
    if (validator.isEmail(email) === false) {
      setErrorMessage('Veuillez entrer une adresse email au bon format');
      return;
    }

    if (isLogin) {
      login({ email, password })
    } else {
      createUser({ email, password })
    }
  };

  return (
    <div className="flex flex-col items-center justify-evenly h-100">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-white">
          {isLogin && <>Connexion</>} {!isLogin && <>Inscription</>}
        </h1>
        <div className="w-2/3">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded text-black"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded text-black"
          />
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            {isLogin && <>Se connecter</>} {!isLogin && <>S'inscrire</>}
          </button>
        </div>
        {isLogin && (
          <div className="mt-4">
            <p>
              Pas de compte ?{' '}
              <Link href="/options/inscription" className="text-blue-500">
                Inscrivez-vous
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;