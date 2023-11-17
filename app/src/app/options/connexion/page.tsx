'use client';
import { useEffect, useState } from 'react';
import validator from 'validator';
import { createUser, login } from '@/app/communication/user';
import { useRouter } from 'next/navigation';

const LoginRegister = (): JSX.Element => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const buttonClasse =
    'inline-block px-2 py-1 text-blue-500 rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800';

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      router.back();
    }
  }, []);

  const handleLogin = async (): Promise<void> => {
    if (!email || !password) {
      setErrorMessage('Veuillez remplir tous les champs');
      return;
    }
    if (validator.isEmail(email) === false) {
      setErrorMessage('Veuillez entrer une adresse email au bon format');
      return;
    }

    if (isLogin) {
      const res = await login({ email, password });
      console.log(res);
      if (res === false) {
        setErrorMessage('Email ou mot de passe incorrect');
      } else {
        window.location.pathname = window.location.pathname;
      }
      // router.back()
    } else {
      const res = await createUser({ email, password });
      if (res === false) {
        setErrorMessage("Problème lors de l'inscription");
      } else {
        setErrorMessage('');
        router.refresh();
        // router.back()
      }
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
              Pas de compte ?{'  '}
              <button
                onClick={() => setIsLogin(false)}
                className={buttonClasse}
              >
                Inscrivez-vous
              </button>
            </p>
          </div>
        )}
        {!isLogin && (
          <div className="mt-4">
            <p>
              Déjà un compte ?{'  '}
              <button className={buttonClasse} onClick={() => setIsLogin(true)}>
                Connectez-vous
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
