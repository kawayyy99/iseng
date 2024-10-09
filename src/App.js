// src/App.js
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import HeadInject from './components/headInject';
import ChatDetail from './components/chatDetail';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <HeadInject/>
      <Header />
      <main className="flex-fill p-4">
        <ChatDetail/>
        {/* Konten lainnya bisa ditambahkan di sini */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
