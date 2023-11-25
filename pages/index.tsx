import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">Welcome to the Homepage</h1>
          <p className="mt-1 text-gray-500">You have successfully logged in.</p>
        </div>
      </main>
    </div>
  );
};

export default Home;