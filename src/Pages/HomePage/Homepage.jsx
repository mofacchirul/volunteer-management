import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-sky-400 rounded-2xl py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12">
       
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-wite tracking-wide">
            What we do?
          </h2>
          <h1 className="text-5xl font-bold text-white leading-tight">
            Various things we help in the whole world
          </h1>
          <button className="mt-6 px-8 py-3 bg-orange-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-orange-600 transition duration-300">
            Explore more &rarr;
          </button>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-blue-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="blue"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75z"
                  />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-blue-600">
              Clean Water Initiative
              </h3>
            </div>
            <p className="text-gray-700">
            The Clean Water Initiative (CWI) aims to reduce wastage of water, make clean and potable water affordable in areas it is inaccessible, and improve levels of sanitation and hygiene there. Nearly one-third of all countries currently face medium to high levels of water stress.
            </p>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-green-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="green"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75z"
                  />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-green-600">
                Environment
              </h3>
            </div>
            <p className="text-gray-700">
            The natural environment or natural world encompasses all biotic and abiotic things occurring naturally, meaning in this case not artificial. The term is most often applied to Earth or some parts of Earth. This environment encompasses the interaction of all living species, climate,l
            </p>
          </div>

   
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-orange-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="orange"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75z"
                  />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-orange-600">
              Beach Cleanup Initiative
              </h3>
            </div>
            <p className="text-gray-700">
            A global campaign that takes place annually around World Cleanup Day, which is celebrated on September 20. The campaign is a collaboration between the EU, the UN, and the Smurfs. Events can take place on beaches or in inland areas like parks, rivers, and lakes
            </p>
          </div>

       
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-yellow-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="yellow"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75z"
                  />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-yellow-600">
                Education
              </h3>
            </div>
            <p className="text-gray-700">
            Education is the transmission of knowledge, skills, and character traits and manifests in various forms. Formal education occurs within a structured institutional framework, such as public schools, following a curriculum. Non-formal education also follows a structured approach but occurs outside 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;



