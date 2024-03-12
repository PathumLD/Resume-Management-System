import React from 'react';

function NewPage() {
  return (
    <div className="container px-4 mx-auto">
      <header className="flex items-center justify-between py-8">
        <h1 className="text-3xl font-bold text-gray-800">TalentHarbour Events</h1>
      </header>
      <main className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
        <section className="flex flex-col items-center p-8 text-center shadow-md bg-slate-100 rounded-xl">
          <h2 className="mb-4 text-xl font-bold">Backend Development Bootcamp</h2>
          <p className="mb-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none">
            Join Now
          </button>
        </section>
        <section className="flex flex-col items-center p-8 text-center shadow-md bg-slate-100 rounded-xl">
          <h2 className="mb-4 text-xl font-bold">Backend Development Bootcamp</h2>
          <p className="mb-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none">
            Join Now
          </button>
        </section>
        <section className="flex flex-col items-center p-8 text-center shadow-md bg-slate-100 rounded-xl">
          <h2 className="mb-4 text-xl font-bold">Backend Development Bootcamp</h2>
          <p className="mb-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none">
            Join Now
          </button>
        </section>
        <section className="flex flex-col items-center p-8 text-center shadow-md bg-slate-100 rounded-xl">
          <h2 className="mb-4 text-xl font-bold">Backend Development Bootcamp</h2>
          <p className="mb-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none">
            Join Now
          </button>
        </section>
      </main>
      <footer className="mt-16 text-center text-gray-600">
        © 2024 TalentHarbour Events. All rights reserved.
      </footer>
    </div>
  );
}

export default NewPage;
