import React from 'react';

const TopSection = () => {
  return (
    <div className="bg-grey-50 py-2">
      <div className="max-w-1160 px-5 mx-auto container flex items-center justify-between">
        <button
          class="flex items-center justify-between space-x-2 w-full"
          type="button"
        >
          <span class="md:text-grey-600 text-grey-900 font-medium md:font-normal text-md">
            UZB
          </span>
          <span class="nuxt-icon transition-all text-grey-300 mb-0 text-xl h-5 w-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 10L12 16L18 10"
                stroke="#A5B1BB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </button>
        <ul class="absolute -bottom-1.5 z-50 transition-all ease-linear duration-300 translate-y-full w-56 rounded-lg divide-grey-100 bg-white divide-y border-grey-100 max-h-0 overflow-hidden left-0">
          <li class="p-3 text-grey-900 font-normal hover:bg-grey-50 cursor-pointer flex items-center space-x-2">
            <p class="flex items-center">
              <span
                class="nuxt-icon w-6 h-6 text-primary-500"
                style={{ display: 'none' }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z"
                    fill="#A5B1BB"
                  ></path>
                </svg>
              </span>
              <span class="ml-8">Русский</span>
            </p>
          </li>
          <li class="p-3 text-grey-900 font-normal hover:bg-grey-50 cursor-pointer flex items-center space-x-2">
            <p class="flex items-center">
              <span class="nuxt-icon w-6 h-6 text-primary-500">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z"
                    fill="#A5B1BB"
                  ></path>
                </svg>
              </span>
              <span class="ml-2">O'zbekcha</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopSection;
