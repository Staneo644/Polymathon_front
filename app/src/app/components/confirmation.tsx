import { useState } from 'react';

function ConfirmationDialog( onConfirm: () => void, text: string, closeDialog: () => void): JSX.Element {

  const handleConfirm = () => {
    onConfirm();
    closeDialog();
  };
  let i = false;

  return (
 
    <div className="fixed inset-0 flex items-center justify-center z-50" onClick={()=> {if (!i) closeDialog(); i = false}}>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative p-4 bg-white rounded" onClick={()=> {i = true}}>
    <div className="absolute top-1 right-1 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" onClick={closeDialog} className="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>
    </div>
    <p>{text}</p>
    <div className="mt-4 flex justify-end">
      <button onClick={handleConfirm} className="bg-blue-500 text-white rounded p-2 mr-4">
        Oui
      </button>
    </div>
  </div>
</div>

  );
}

export default ConfirmationDialog;