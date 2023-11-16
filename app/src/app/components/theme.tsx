'use client';
import { useState } from 'react';
import { useEffect } from 'react';
import { theme_id } from '@/app/communication/entity';
import { getThemes } from '@/app/communication/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const SelectTheme = (
  checkbox: boolean,
  selectedThemes: string[],
  setSelectedThemes: (theme: string[]) => void,
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [allThemes, setAllThemes] = useState<theme_id[]>([]);
  const [visibleThemes, setVisibleThemes] = useState<theme_id[]>([]);
  const [clickedItem, setClickedItem] = useState<string>('');
  const selectRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        buttonRef.current?.contains(event.target as Node) === false &&
        selectRef.current?.contains(event.target as Node) === false
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mouseup', handleClickOutside);

    getThemes().then((themes) => {
      const updatedThemes: theme_id[] = [];
      themes.forEach((theme) => {
        if (theme.parent == '' || theme.parent == null) {
          updatedThemes.push(theme);
          const children = themes.filter(
            (themei) => themei.parent == theme.name,
          );
          updatedThemes.push(...children);
        }
      });
      setAllThemes(updatedThemes);
    });

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);

  const getThemeByName = (name: string): theme_id | null => {
    const ret = allThemes.find((theme) => theme.name == name);
    if (ret == null) {
      return null;
    }
    return ret;
  };

  useEffect(() => {
    setVisibleThemes(
      allThemes.filter(
        (theme) =>
          theme.parent == null ||
          clickedItem == (getThemeByName(theme.parent)?.name ?? ''),
      ),
    );
  }, [allThemes, clickedItem]);

  const handleToggle = (option: string) => {
    if (selectedThemes.includes(option) && checkbox) {
      setSelectedThemes(
        selectedThemes.filter((selected: string) => selected !== option),
      );
    } else {
      if (checkbox) setSelectedThemes([...selectedThemes, option]);
      else setSelectedThemes([option]);
    }
  };

  const haveChildren = (option: theme_id) => {
    return allThemes.filter((theme) => theme.parent == option.name).length > 0;
  };

  const getCssClass = (option: theme_id):string => {
    if (!checkbox && selectedThemes.includes(option.name)) {
      if (option.parent == null) {
        return 'block px-4 py-2 text-sm bg-gray-100 cursor-pointer';}
      else {
        return 'block px-4 py-2 text-sm bg-gray-100 cursor-pointer ml-4';}
        
    }
    if (option.parent == null) {
      return 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer';
    } else {
      return 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ml-4';
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span
          onClick={() => setIsOpen(!isOpen)}
          ref={buttonRef}
          className="cursor-pointer border border-gray-300 py-2 inline-flex items-center bg-gray-100 w-80 rounded p-2 max-w-[700px]"
        >
          {selectedThemes.length > 0
            ? selectedThemes.join(', ')
            : 'Select options'}
            {
              selectedThemes[0] == '' &&
              <div className='text-gray-400'>
                Selectionnez
              </div>
            }
            <FontAwesomeIcon
                        icon={faAngleDown}
                        className="mr-2 absolute right-0"
              />
        </span>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          ref={selectRef}
        >
          <div className="py-1">
            {visibleThemes.map((option) => (
              <label
                key={option.name}
                onClick={() => {
                  if (option.parent == null) {
                    setClickedItem(
                      clickedItem == option.name ? '' : option.name,
                    );
                  }
                  if (!checkbox && !haveChildren(option)) {
                    handleToggle(option.name);
                  }
                }}
                className={getCssClass(option)}
              >
                {option.name}
                {checkbox &&
                  (option.parent != null || !haveChildren(option)) && (
                    <input
                      type="checkbox"
                      checked={selectedThemes.includes(option.name)}
                      onChange={() => handleToggle(option.name)}
                      className="mr-2 absolute right-0"
                    />
                  )}
                {option.parent == null && haveChildren(option) && (
                  <>
                    {clickedItem == option.name && (
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="mr-2 absolute right-0"
                      />
                    )}
                    {clickedItem !== option.name && (
                      <FontAwesomeIcon
                        icon={faAngleUp}
                        className="mr-2 absolute right-0"
                      />
                    )}
                  </>
                )}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const checkboxTheme = (
  clickedTheme: string[],
  setClickedTheme: (theme: string[]) => void,
) => {
  return SelectTheme(true, clickedTheme, setClickedTheme);
};

export const clickedTheme = (
  clickedTheme: string,
  setClickedTheme: (theme: string) => void,
) => {
  const setClicked = (theme: string[]) => {
    setClickedTheme(theme[0]);
  };
  return SelectTheme(false, [clickedTheme], setClicked);
};
