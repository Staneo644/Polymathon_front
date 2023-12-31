'use client';
import '../globals.css';
import React, { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.css';

function Header({ children }: { children: React.ReactNode }): JSX.Element {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  const router = useRouter();
  const [isList, setIsList] = useState(false);
  const [token, setToken] = useState(false);
  const buttonRef: RefObject<HTMLDivElement> = useRef(null);
  const optionRef: RefObject<HTMLButtonElement> = useRef(null);

  const handleTitleClick = (): void => {
    router.push('/');
    setIsList(false);
  };

  const contactClick = (): void => {
    router.push('/options/contact');
    setIsList(false);
  };

  
  const profilClick = (): void => {
    router.push('/options/profil');
    setIsList(false);
  };

  const logoutClick = (): void => {
    localStorage.removeItem('access_token');
    setToken(false);
    router.push('/');
    setIsList(false);
  };

  const connectionClick = (): void => {
    router.push('/options/connexion');
    setIsList(false);
  };

  const setOptionVisible = (): void => {
    setIsList(!isList);
  };

  const goBackClick = (): void => {
    router.back();
  };

  const parametreClick = (): void => {
    router.push('/options/parametre');
    setIsList(false);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        buttonRef.current?.contains(event.target as Node) === false &&
        optionRef.current?.contains(event.target as Node) === false
      ) {
        setIsList(false);
      }
    };

    document.addEventListener('mouseup', handleClickOutside);

    if (localStorage.getItem('access_token') !== null) {
      setToken(true);
      console.log('Connecté');
    } else {
      console.log('Déconnecté');
    }

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="bg-white p-2 flex justify-between items-center z-10">
        <button onClick={goBackClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        </button>
        <button
          className="text-black text-2xl font-bold"
          onClick={handleTitleClick}
        >
          Polymathon
        </button>
        <button onClick={setOptionVisible} ref={optionRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v10m0 0v10m0-10h10m-10 0H2"
            />
          </svg>
        </button>
      </header>
      {isList && (
        <ListGroup ref={buttonRef} className="absolute top-58px right-0 z-10">
          {!token && (
            <ListGroupItem action variant="dark" onClick={connectionClick}>
              <h4>connexion</h4>
            </ListGroupItem>
          )}
          {token && (
            <>
              <ListGroupItem action variant="dark" onClick={logoutClick}>
                <h4>déconnexion</h4>
              </ListGroupItem>
              <ListGroupItem action variant="dark" onClick={profilClick}>
                <h4>profil</h4>
              </ListGroupItem>
            </>
          )}
          <ListGroupItem action variant="dark" onClick={contactClick}>
            <h4>paramètre</h4>
          </ListGroupItem>

          <ListGroupItem action variant="dark" onClick={contactClick}>
            <h4>contact</h4>
          </ListGroupItem>
        </ListGroup>
      )}
      <div className="overflow-scroll h-[calc(100vh-48px)]">{children}</div>
    </>
  );
}

export default Header;
