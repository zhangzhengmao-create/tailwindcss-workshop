const TailwindcssContainerAndSpacing = () => {
  return (
    <div className="">
      <h1 className="text-7xl font-bold">Chapter 2</h1>
      <br />
      {/**1. Margins */}
      {/**https://tailwindcss.com/docs/margin */}
      <h3 className="text-2xl font-bold">1. Margin</h3>

      <div className="text-white">
        <div className="m-1  bg-yellow-500">Margin All Around</div>
        {/** mx-  means left and right */}
        <div className="mx-4 bg-yellow-300">Margin from X axies</div>
        {/** my-  means top and bottom */}
        <div className="my-4 bg-yellow-300">Margin from Y axies</div>
        <div className="mt-7 bg-yellow-400">Margin from Top</div>
        <div className="mr-23 bg-yellow-700">Margin from Right</div>
        <div className="mb-20 bg-yellow-900">Margin from Bottom</div>
        <div className="ml-30 bg-yellow-800">Margin from Left</div>
      </div>
      <br />
      <hr />
      <br />
      {/**2. Arbitrary Spacing */}
      <h3 className="text-2xl font-bold">2. Arbitrary Spacing</h3>
      <div className="m-[20px] bg-amber-500 text-white">Arbitrary Space</div>
      <br />
      <hr />
      <br />
      {/**3. Padding */}
      {/**https://tailwindcss.com/docs/padding */}
      <h3 className="text-2xl font-bold">3. Padding</h3>
      <div className="p-3 bg-lime-500 text-white">Padding All Around</div>
      <div className="px-16 bg-lime-300">Padding X axies</div>
      <div className="py-20 bg-lime-300">Padding Y axies</div>
      <div className="pt-6 bg-lime-400">Padding Top</div>
      <div className="pr-10 bg-lime-500">Padding Right</div>
      <div className="pb-15 bg-lime-600">Padding Bottom</div>
      <div className="pl-[32px] bg-lime-700">Padding Left</div>

      <br />
      <hr />
      <br />
      {/**4. Space Between X */}
      {/**https://tailwindcss.com/docs/space */}
      <h3 className="text-2xl font-bold">4. Space Between X</h3>
      <div className="flex space-x-4">
        <div className="p-3 bg-teal-100">01</div>
        <div className="p-3 bg-teal-200">02</div>
        <div className="p-3 bg-teal-300">03</div>
      </div>
      <br />
      <hr />
      <br />
      {/**5. Space Between Y */}
      <h3 className="text-2xl font-bold">4. Space Between X</h3>
      <div className="flex flex-col space-y-4">
        <div className="p-3 bg-teal-100">01</div>
        <div className="p-3 bg-teal-200">02</div>
        <div className="p-3 bg-teal-300">03</div>
      </div>
    </div>
  );
};

export default TailwindcssContainerAndSpacing;
