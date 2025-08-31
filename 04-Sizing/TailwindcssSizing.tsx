const TailwindcssSizing = () => {
  return (
    <div className="">
      <h1 className="text-7xl font-bold">Chapter 4 - Sizing </h1>
      <br />
      {/**1. Width */}
      {/**https://tailwindcss.com/docs/width */}
      <h3 className="text-2xl font-bold">1. Width All Around</h3>
      <div className="bg-teal-100 p-5">
        <div className="bg-amber-600 m-1 w-0">0</div>
        <div className="bg-amber-600 m-1 w-1">1</div>
        <div className="bg-amber-600 m-1 w-1.5">1.5</div>
        <div className="bg-amber-600 m-1 w-2">2</div>
        <div className="bg-amber-600 m-1 w-3">3</div>
        <div className="bg-amber-600 m-1 w-4">4</div>
        <div className="bg-amber-600 m-1 w-5">5</div>
        <div className="bg-amber-600 m-1 w-6">6</div>
        <div className="bg-amber-600 m-1 w-7">7</div>
        <div className="bg-amber-600 m-1 w-8">8</div>
        <div className="bg-amber-600 m-1 w-9">9</div>
        <div className="bg-amber-600 m-1 w-10">10</div>
        <div className="bg-amber-600 m-1 w-11">11</div>
        <div className="bg-amber-600 m-1 w-12">12</div>
        <div className="bg-amber-600 m-1 w-13">13</div>
        <div className="bg-amber-600 m-1 w-14">14</div>
        <div className="bg-amber-600 m-1 w-15">15</div>
        <div className="bg-amber-600 m-1 w-16">16</div>
        <div className="bg-amber-600 m-1 w-17">17</div>
        <div className="bg-amber-600 m-1 w-18">18</div>
        <div className="bg-amber-600 m-1 w-19">19</div>
        <div className="bg-amber-600 m-1 w-20"></div>
      </div>
      <br />
      <hr />
      <br />
      {/**2. Percentages */}
      <h3 className="text-2xl font-bold">2. Percentages</h3>
      <div className="bg-teal-100 p-5 text-white">
        <div className="bg-indigo-300 m-2 w-1/2">1/2</div>
        <div className="bg-indigo-300 m-2 w-1/3">1/3</div>
        <div className="bg-indigo-300 m-2 w-1/4">1/4</div>
        <div className="bg-indigo-300 m-2 w-2/4">2/4</div>
        <div className="bg-indigo-300 m-2 w-3/4">3/4</div>
      </div>
      <br />
      <hr />
      <br />
      {/**3. Max Width */}
      {/**https://tailwindcss.com/docs/max-width */}
      <h3 className="text-2xl font-bold">3. Max Width</h3>
      <div className="container text-white bg-red-400 p-10 mb-10 max-w-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum
        ab dignissimos accusamus porro. Cupiditate at sed voluptates error, cum
        cumque porro hic aliquid, laboriosam distinctio saepe. Laborum, ducimus
      </div>

      <div className="container text-white bg-red-400 p-10 mb-10 max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum
        ab dignissimos accusamus porro. Cupiditate at sed voluptates error, cum
        cumque porro hic aliquid, laboriosam distinctio saepe. Laborum, ducimus
      </div>

      <div className="container text-white bg-red-400 p-10 mb-10 max-w-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum
        ab dignissimos accusamus porro. Cupiditate at sed voluptates error, cum
        cumque porro hic aliquid, laboriosam distinctio saepe. Laborum, ducimus
      </div>
      <div className="container text-white bg-red-400 p-10 mb-10 max-w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum
        ab dignissimos accusamus porro. Cupiditate at sed voluptates error, cum
        cumque porro hic aliquid, laboriosam distinctio saepe. Laborum, ducimus
      </div>
      <br />
      <hr />
      <br />
      {/**4. Width of viewport */}
      {/**https://tailwindcss.com/docs/letter-spacing */}
      <h3 className="text-2xl font-bold">4. WV & Width 100%</h3>
      <div className="w-1/2">
        <div className="container text-lg text-white bg-green-400 p-10 mb-1 w-screen">
          wv-screen with w-screen
        </div>
        <div className="container text-lg text-white bg-green-400 p-10 mb-1 w-full">
          wv-screen with w-full
        </div>
      </div>

      <br />
      <hr />
      <br />
      {/**5. Arbitrary Width */}
      <h3 className="text-2xl font-bold">5. Arbitrary Width </h3>
      <div className="container text-white bg-fuchsia-500 p-5 my-2 w-[560px]">
        Arbitrary Width (with 560px)
      </div>
      <br />
      <hr />
      <br />

      {/**6. Height */}
      <h3 className="text-2xl font-bold">6. Height</h3>
      <div className="flex item-end text-white mt-5 mb-5 text-sm">
        <div className="bg-amber-600 p-1 h-24">Height 24</div>
        <div className="bg-amber-600 ml-5 p-1 h-32">Height 32</div>
        <div className="bg-amber-600 ml-5 p-1 h-40">Height 40</div>
        <div className="bg-amber-600 ml-5 p-1 h-48">Height 48</div>
        <div className="bg-amber-600 ml-5 p-1 h-52">Height 52</div>
        <div className="bg-amber-600 ml-5 p-1 h-52">Height 52</div>
        <div className="bg-amber-600 ml-5 p-1 h-[16rem]">Height h-[6rem]</div>
      </div>
      <br />
      <hr />
      <br />
      {/**7. Min Height and Max Height */}
      <h3 className="text-2xl font-bold">7. Min Height and Max Height </h3>
      <div className="p-5 bg-green-300 mb-5 h-[300px] text-white">
        <div className="min-h-3 bg-teal-400">Take Full Height</div>
        <div className="max-h-5 bg-amber-500 mt-10">Max h-2</div>
      </div>
      <br />
      <hr />
      <br />
      {/**8. Full Screen Height, use it cautiously */}
      <h3 className="text-2xl font-bold">
        8. Full Screen Height, use it cautiously - "h-screen"
      </h3>
      {/**<div className="bg-pink-400 mb-4 h-screen">Hello</div>*/}

      <br />
      <hr />
      <br />
      {/**9. Width Auto */}
      <h3 className="text-2xl font-bold">9. Width Auto</h3>
      <div className=" text-white bg-lime-500 mt-5 p-10 mb-10 w-auto">
        Width Auto
      </div>
    </div>
  );
};

export default TailwindcssSizing;
