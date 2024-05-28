import './index.css';
import React from 'react';

const App = () => {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Escolha os links</h1>
      <div className="flex flex-col space-y-4">
          <button
            onClick={() => handleButtonClick('https://www.youtube.com/watch?v=V7rgOMjk6vg')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Video de Apresentação
          </button>
          <button
            onClick={() => handleButtonClick('https://conselheirovirtual.netlify.app/')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Conselheiro Virtual
          </button>
          <button
            onClick={() => handleButtonClick('https://www.twitter.com')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
