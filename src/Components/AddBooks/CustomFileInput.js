import React, { useState } from 'react';
import './AddBook.css';

const CustomFileInput = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const fileName = e.target.files[0];
    onFileSelect(fileName);
    setSelectedFile(fileName);
  };

  return (
    <div className="custom-file-input">
      {selectedFile ? console.log(selectedFile.name) : 'nothing'}
      <label htmlFor="file-input">
        {selectedFile ? selectedFile.name : 'Choose image'}
      </label>
      <input
        type="file"
        id="file-input"
        onChange={handleFileChange}
        accept=".jpg,.jpeg,.png,.webp"
        required
      />
    </div>
  );
};

export default CustomFileInput;
