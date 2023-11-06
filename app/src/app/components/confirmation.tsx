import { useState } from 'react';

function ConfirmationDialog( onConfirm: () => void ) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    onConfirm();
    closeDialog();
  };

  return (
    <div>
      <button onClick={openDialog} className="bg-blue-500 text-white rounded p-2">
        Changer
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative p-4 bg-white rounded">
            <p>Êtes-vous sûr de vouloir le changer ?</p>
            <div className="mt-4 flex justify-end">
              <button onClick={handleConfirm} className="bg-blue-500 text-white rounded p-2 mr-4">
                Oui
              </button>
              <button onClick={closeDialog} className="bg-red-500 text-white rounded p-2">
                Non
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConfirmationDialog;