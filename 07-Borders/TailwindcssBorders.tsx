const TailwindcssBorders = () => {
  return (
    <div className="">
      <h1 className="text-7xl font-bold">Chapter 7 - Borders </h1>
      <br />
      {/**1. Borders Width and Colors  */}
      {/**https://tailwindcss.com/docs/border-width */}
      <h3 className="text-2xl mb-3 font-bold">1. Borders Width and Colors</h3>
      <div className="border-2 border-green-400 w-[350px] p-3">
        Border All Around
      </div>
      <div className="border-t-2 border-green-400 w-[350px] p-3 mt-5">
        Border Top
      </div>
      <div className="border-r-2 border-green-400 w-[350px] p-3 mt-5">
        Border Right
      </div>
      <div className="border-b-2 border-green-400 w-[350px] p-3 mt-5">
        Border Bottom
      </div>
      <div className="border-l-2 border-green-400 w-[350px] p-3 mt-5">
        Border Left
      </div>

      <div className="border-2 border-amber-500 mt-10">
        <div className="w-96 p-3 ml-3 mt-6 border">Border All Around</div>
        <div className="w-96 p-3 ml-3 mt-6 border-2">Border Width</div>
        <div className="w-96 p-3 ml-3 mt-6  border-3 border-red-400">
          Border With Color
        </div>
        <div className="w-96 p-3 ml-3  mt-6 border-x-3 border-blue-400">
          Border applied to X axies
        </div>
        <div className="w-96 p-3 ml-3 mt-6 mb-6 border-y-3 border-blue-400">
          Border applied to Y axies
        </div>
      </div>
      <br />
      <hr />
      <br />
      {/**2. Border Radius */}
      {/**https://tailwindcss.com/docs/border-radius */}
      <h3 className="text-2xl font-bold">2. Border Radius</h3>
      <div className="border-2 border-green-300 mt-10 mb-10">
        <div className="w-96 m-3 p-5 bg-indigo-100 rounded">Border Rounded</div>
        <div className="w-96 m-3 p-5 bg-teal-200 rounded-sm">
          Border rounded-sm
        </div>
        <div className="w-96 m-3 p-5 bg-amber-300 rounded-lg">
          Border rounded-lg
        </div>
        <div className="w-96 m-3 p-5 bg-violet-400 rounded-xl">
          Border rounded-xl
        </div>
        <div className="w-96 m-3 p-5 bg-purple-500 rounded-2xl">
          Border rounded-2xl
        </div>
        <div className="w-96 m-3 p-5 bg-orange-600 rounded-3xl">
          Border rounded-3xl
        </div>
        <div className="w-96 m-3 p-5 bg-fuchsia-700 rounded-full">
          Border rounded-full
        </div>
      </div>
      <h3 className="text-2xl font-bold mt-10">3. Specific Sides</h3>
      <div className="w-96 m-3 p-5 bg-teal-200 rounded-t-xl">
        Border Top Rouned
      </div>
      <div className="w-96 m-3 p-5 bg-teal-300 rounded-r-xl">
        Border Right Rouned
      </div>
      <div className="w-96 m-3 p-5 bg-teal-400 rounded-b-xl">
        Border Bottom Rouned
      </div>
      <div className="w-96 m-3 p-5 bg-teal-400 rounded-l-xl">
        Border Left Rouned
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default TailwindcssBorders;
