import { useState, useEffect } from "react";
export const Mensaje = ({message}) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
      setIsOpen(false);
    };
    return (
      <>
           {isOpen && (
        <div className="floating-message">
          <div className="floating-message-content">{message}</div>
          <button className="floating-message-close" onClick={handleClose}>
            X
          </button>
        </div>
      )}
      </>
    );
  };