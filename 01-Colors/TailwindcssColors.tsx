const TailwindcssColors = () => {
  return (
    <>
      <div className="">
        <h1 className="text-7xl font-bold">Chapter 1 - Colors</h1>
        <br />
        {/**1. Colors with different shades */}
        {/**https://tailwindcss.com/docs/colors */}
        <h1 className="text-5xl">1. Colors with different shades </h1>
        <br />
        <p className="text-blue-50">Learning the Tailwindcss Colors</p>
        <p className="text-blue-100">Learning the Tailwindcss Colors</p>
        <p className="text-blue-200">Learning the Tailwindcss Colors</p>
        <p className="text-blue-300">Learning the Tailwindcss Colors</p>
        <p className="text-blue-400">Learning the Tailwindcss Colors</p>
        <p className="text-blue-500">Learning the Tailwindcss Colors</p>
        <p className="text-blue-600">Learning the Tailwindcss Colors</p>
        <p className="text-blue-700">Learning the Tailwindcss Colors</p>
        <p className="text-blue-800">Learning the Tailwindcss Colors</p>
        <p className="text-blue-900">Learning the Tailwindcss Colors</p>
        <br />
        <hr />
        <br />
        {/**2. Background Colors */}
        {/**https://tailwindcss.com/docs/background-color */}
        <h1 className="text-5xl">2. Background Colors </h1>
        <br />
        <p className="bg-pink-500 text-white">Tailwindcss Background Color</p>
        <p className="bg-yellow-500 text-white">Tailwindcss Background Color</p>
        <p className="bg-blue-500 text-white">Tailwindcss Background Color</p>
        <br />
        <hr />
        <br />
        {/**3. Text Decoration */}
        {/**https://tailwindcss.com/docs/text-decoration-line */}
        <h1 className="text-5xl">3. Text Decoration </h1>
        <br />
        <p className="overline">Tailwindcss</p>
        <p className="underline">Tailwindcss</p>
        <p className="underline decoration-pink-500">Tailwindcss</p>
        <p className="line-through">Tailwindcss</p>
        <p className="text-purple-600 underline decoration-purple-500">
          Tailwindcss
        </p>
        <br />
        <hr />
        <br />
        {/**4. Accent Colors */}
        {/**https://tailwindcss.com/docs/accent-color */}
        <h1 className="text-5xl">4. Accent Color </h1>
        <br />
        <div className="flex gap-2">
          <input
            type="checkbox"
            title="tailwind-checkbox"
            className="accent-blue-500"
            checked
          />
          <input
            type="checkbox"
            title="tailwind-checkbox"
            className="accent-yellow-500"
          />
          <input
            type="checkbox"
            title="tailwind-checkbox"
            className="accent-red-500"
          />
          <input
            type="checkbox"
            title="tailwind-checkbox"
            className="accent-teal-500"
          />
        </div>
        <br />
        <hr />
        <br />
        {/**5. Arbitrary Colors */}
        <h1 className="text-5xl">5. Arbitrary Color </h1>
        <p className="text-[#50d71e]">Tailwindcss</p>
        <p className="text-[#000]">Tailwindcss</p>
        <p className="text-[#2f086d]">Tailwindcss</p>
        <p className="text-[#781b78]">Tailwindcss</p>
      </div>
      <br />
    </>
  );
};

export default TailwindcssColors;
