"use client";
import axios from 'axios';
import { useState, ChangeEvent } from 'react';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string | null>(null);
  const [entities, setEntities] = useState<any[]>([]);  // state to store named entities

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const onExtract = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/extract', formData);
      setExtractedText(response.data.text);
      setEntities(response.data.entities);  // set the entities in the state
    } catch (error) {
      console.error("Error extracting data:", error);
    }
  };

  return (
    <div className='flex flex-col gap-3 h-screen justify-center align-items'>
      <h1 className='text-2xl font-semibold'>Upload your PDF</h1>
      <input type="file" accept=".pdf" onChange={onFileChange} />
      <button onClick={onExtract}>Extract Data</button>
      <div className="mt-4 p-4 border rounded">
        <h2 className='text-xl font-semibold mb-2'>Extracted Text:</h2>
        <p>{extractedText}</p>
        <h3 className='text-l font-semibold mt-2'>Named Entities:</h3>
        {entities.map(entity => (
            <div key={entity.start}>
                <strong>{entity.label}:</strong> {entity.text}
            </div>
        ))}
      </div>
    </div>
  );
}
