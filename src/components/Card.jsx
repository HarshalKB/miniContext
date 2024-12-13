export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src="data:image/jpeg;base64,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"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            A cute Cat for adoption.
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            4.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $0
          </span>
          <a
            href="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Adopt
          </a>
        </div>
      </div>
    </div>
  );
}
