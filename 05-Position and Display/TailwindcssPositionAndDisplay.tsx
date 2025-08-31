const TailwindcssPositionAndDisplay = () => {
  return (
    <div className="">
      <h1 className="text-7xl font-bold">Chapter 5 - Position And Display </h1>
      <br />
      {/**1. Position */}
      {/**https://tailwindcss.com/docs/position */}
      <h3 className="text-2xl mb-3 font-bold">1. Position</h3>
      <div className="relative w-1/2 h-40 bg-blue-400 text-white">
        <p>Relative</p>
        <div className="absolute right-0 bottom-0  bg-amber-500 p-4">
          <p>Absolute-Right-Bottom</p>
        </div>
        <div className="absolute top-0 left-0  bg-amber-500 p-4">
          <p>Absolute-Top-Left</p>
        </div>
      </div>
      <br />
      <hr />
      <br />
      {/**2. Display */}
      {/**https://tailwindcss.com/docs/display */}
      <h3 className="text-2xl font-bold">2. Display</h3>
      <div className="bg-indigo-400 p-10 mb-10 w-[600px] text-white">
        {/** inline --> width and height will not function even if you set them
         *              margin and padding will only function on horizontal rather than vertical
         */}
        <span className="inline w-[200px] h-[200px] bg-yellow-400">
          1. This is display inline and will wrap normally
        </span>
        {/** inline-block --> width and height will  function if you set them
         *              margin and padding will function in four directions
         */}
        <span className="inline-block w-[200px] h-[200px] bg-yellow-400 mt-3 mb-3">
          2. This is display inline-block and will not extend beyond its parent
        </span>
        <span className="block bg-yellow-400">
          3. This is display block and will move to its own line
        </span>
        <span className="hidden bg-yellow-400">
          3. This is display hidden and will not display itself.
        </span>
      </div>
    </div>
  );
};

export default TailwindcssPositionAndDisplay;
