import { RefObject } from 'react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { FiArrowLeft, FiSettings } from 'react-icons/fi';

function Header() {
  const headerRef = useRef(null);
  const [isList, setIsList] = useState(false);
    const buttonRef: RefObject<HTMLDivElement> = useRef(null);
    const optionRef: RefObject<HTMLDivElement> = useRef(null);


  const handleTitleClick = () => {
    setIsList(false);
  };

  const contactClick = () => {
    setIsList(false);
  };

  const modificationClick = () => {
    setIsList(false);
  };

  const profilClick = () => {
    setIsList(false);
  };

  const logoutClick = () => {
    localStorage.removeItem('accessToken');
    setIsList(false);
  };

  const inscriptionClick = () => {
    setIsList(false);
  };

  const setOptionVisible = () => {
    setIsList(!isList);
  };

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
        if (
            buttonRef.current &&
            !buttonRef.current.contains(event.target as Node) &&
            optionRef.current &&
            !optionRef.current.contains(event.target as Node)
        ) {
            setIsList(false);
        }
    };

    document.addEventListener('mouseup', handleClickOutside);


    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <header
        ref={headerRef}
        className="flex justify-center relative h-58px"
      >
        <button
          onClick={() => {
            // Naviguer en arrière
          }}
          className="border-none bg-transparent mr-20 transform translate-x-10 cursor-pointer left-10 top-0"
        >
          <FiArrowLeft size={32} />
        </button>
        <div className="bg-white flex items-center justify-center flex-1">
          <button
            className="border-none bg-transparent cursor-pointer transform translate-0"
            onClick={handleTitleClick}
          >
            <h1 className="text-center">Polymathe</h1>
          </button>
        </div>
        <button
          ref={optionRef}
          className="border-none bg-transparent ml-20 transform translate-x-10 cursor-pointer right-10 top-0"
          onClick={setOptionVisible}
        >
          <FiSettings size={32} />
        </button>
      </header>
      <div
        className="bg-purple-800 overflow-hidden min-h-[calc(100vh-58px)]"
      >
        <main className="top-0 bottom-0 flex justify-center items-center text-center text-antiquewhite min-h-[calc(100vh-58px)]">
          {isList && (
            <ListGroup ref={buttonRef} className="absolute top-58px right-0 z-10">
              {localStorage.getItem('accessToken') === 'null' && (
                <ListGroupItem
                  action
                  variant="dark"
                  onClick={inscriptionClick}
                >
                  <h4>connexion</h4>
                </ListGroupItem>
              )}
              {localStorage.getItem('accessToken') !== 'null' && (
                <>
                  <ListGroupItem
                    action
                    variant="dark"
                    onClick={logoutClick}
                  >
                    <h4>déconnexion</h4>
                  </ListGroupItem>
                  <ListGroupItem
                    action
                    variant="dark"
                    onClick={modificationClick}
                  >
                    <h4>ajouter/modifier</h4>
                  </ListGroupItem>
                  <ListGroupItem
                    action
                    variant="dark"
                    onClick={profilClick}
                  >
                    <h4>profil</h4>
                  </ListGroupItem>
                </>
              )}
              <ListGroupItem action variant="dark" onClick={contactClick}>
                <h4>contact</h4>
              </ListGroupItem>
            </ListGroup>
          )}
        </main>
      </div>
    </div>
  );
}

export default Header;