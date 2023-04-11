import React, { useState } from 'react';
import Modal from 'react-modal';

function Deneme() {
  const [selection, setSelection] = useState(null);
  const [showIcon, setShowIcon] = useState(false);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  
  const handleSelection = () => {
    const selectionText = window.getSelection().toString();
    if (selectionText) {
      setSelection(selectionText);
      const selectionRange = window.getSelection().getRangeAt(0);
      const rangeRect = selectionRange.getBoundingClientRect();
      const iconX = `calc(${rangeRect.left}px + calc(${rangeRect.width}px / 2) - 40px)`;
      const iconY = `calc(${rangeRect.bottom}px + 5px)`;
      setIconPosition({ x: iconX, y: iconY });
      setShowIcon(true);
    } else {
      setSelection(null);
      setShowIcon(false);
    }
  };
  
  const handleIconClick = () => {
    setShowModal(true);
  };
  
  return (
    <div onMouseUp={handleSelection}>
      {showIcon && (
        <div style={{ position: 'absolute', left: iconPosition.x, top: iconPosition.y }}>
          <img src="icon.png" alt="icon" onClick={handleIconClick} />
        </div>
      )}
      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <div>{selection}</div>
      </Modal>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere odio ut ligula maximus malesuada. 
        Sed nec lorem dolor. Aenean non neque in mi pulvinar imperdiet id non nulla. Quisque efficitur 
        lacinia justo, vel dapibus velit finibus in. Nulla facilisi. Praesent et commodo risus. Sed euismod 
        a velit sed tincidunt. Morbi ut interdum est, at pulvinar massa. Duis et nisi volutpat, rutrum risus 
        sit amet, venenatis sapien. Aenean euismod elit ac elit laoreet lacinia. Vestibulum varius nibh et 
        tortor bibendum, at elementum tellus eleifend.
      </p>
      <p>
        Donec venenatis eget magna vel hendrerit. Suspendisse aliquet nec est a hendrerit. In semper mi et 
        sapien malesuada, eget lacinia velit sodales. Duis eget ex magna. In a tempor augue, vel dignissim 
        magna. Nullam id dapibus augue. Vestibulum auctor diam eu diam tincidunt, in venenatis sem sagittis. 
        Fusce vel mauris volutpat, ultrices velit vitae, tristique tellus. Nunc semper lacus non tellus 
        sollicitudin, a dictum odio suscipit. Curabitur hendrerit nisl vel neque euismod
</p>
</div>
  )
      }
      export default Deneme