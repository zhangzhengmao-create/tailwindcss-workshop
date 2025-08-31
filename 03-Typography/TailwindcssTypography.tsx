const TailwindcssTypography = () => {
  return (
    <div className="">
      <h1 className="text-7xl font-bold">Chapter 3 - Typography</h1>
      <br />
      {/**1. Font-size */}
      {/**https://tailwindcss.com/docs/font-size */}
      <h3 className="text-2xl font-bold">1. Font Size</h3>

      <div className="container bg-teal-100 p-7 mb-10">
        <p className="text-xs">Tailwindcss is Awesome!</p>
        <p className="text-sm">Tailwindcss is Awesome!</p>
        <p className="text-base">Tailwindcss is Awesome!</p>
        <p className="text-lg">Tailwindcss is Awesome!</p>
        <p className="text-xl">Tailwindcss is Awesome!</p>
        <p className="text-2xl">Tailwindcss is Awesome!</p>
        <p className="text-3xl">Tailwindcss is Awesome!</p>
        <p className="text-4xl">Tailwindcss is Awesome!</p>
        <p className="text-5xl">Tailwindcss is Awesome!</p>
        <p className="text-6xl">Tailwindcss is Awesome!</p>
        <p className="text-7xl">Tailwindcss is Awesome!</p>
      </div>
      <br />
      <hr />
      <br />
      {/**2. Font Family */}
      {/**https://tailwindcss.com/docs/font-family */}
      <h3 className="text-2xl font-bold">2. Font Family</h3>
      <div className="container bg-indigo-200 p-10 mb-10">
        <p className="text-sm font-sans">Tailwind is Awesome!</p>
        <p className="text-lg font-semibold">Tailwind is Awesome!</p>
        <p className="text-xl font-serif">Tailwind is Awesome!</p>
      </div>
      <br />
      <hr />
      <br />
      {/**3. Font Weight */}
      {/**https://tailwindcss.com/docs/font-weight */}
      <h3 className="text-2xl font-bold">3. Font Weight</h3>
      <div className="container text-white bg-amber-400 p-10 mb-10">
        <p className="font-light">Tailwind is Awesome!</p>
        <p className="font-normal">Tailwind is Awesome!</p>
        <p className="font-medium">Tailwind is Awesome!</p>
        <p className="font-semibold">Tailwind is Awesome!</p>
        <p className="font-bold">Tailwind is Awesome!</p>
      </div>
      <br />
      <hr />
      <br />
      {/**4. Letter Spacing */}
      {/**https://tailwindcss.com/docs/letter-spacing */}
      <h3 className="text-2xl font-bold">4. Letter Spacing</h3>
      <div className="container text-white bg-blue-400 p-10 mb-10">
        <p className="tracking-tighter">Tailwind is Awesome!</p>
        <p className="tracking-tight">Tailwind is Awesome!</p>
        <p className="tracking-normal">Tailwind is Awesome!</p>
        <p className="tracking-wide">Tailwind is Awesome!</p>
        <p className="tracking-wider">Tailwind is Awesome!</p>
        <p className="tracking-widest">Tailwind is Awesome!</p>
      </div>
      <br />
      <hr />
      <br />
      {/**5. Text Alignment */}
      {/**https://tailwindcss.com/docs/text-align */}
      <h3 className="text-2xl font-bold">5. Text Alignment</h3>
      <div className="container text-white bg-fuchsia-500 p-10 mb-10">
        <p className="text-left">Tailwind is Awesome!</p>
        <p className="text-center">Tailwind is Awesome!</p>
        <p className="text-right">Tailwind is Awesome!</p>
        <p className="text-justify">Tailwind is Awesome!</p>
        <p className="text-start">Tailwind is Awesome!</p>
        <p className="text-end">Tailwind is Awesome!</p>
      </div>
      <br />
      <hr />
      <br />
      {/**6. Text Decoration */}
      <h3 className="text-2xl font-bold">6. Text Decoration</h3>
      <div className="container text-white bg-cyan-500 p-10 mb-10">
        <p className="overline decoration-2">Tailwind is Awesome!</p>
        <p className="underline decoration-4">Tailwind is Awesome!</p>
        <p className="line-through decoration-3">Tailwind is Awesome!</p>
      </div>
      <br />
      <hr />
      <br />
      {/**7. Decoration Style */}
      <h3 className="text-2xl font-bold">7. Decoration Style</h3>
      <div className="container text-white bg-emerald-500 p-10 mb-10">
        <p className="underline decoration-solid">Tailwind is Awesome!</p>
        <p className="underline decoration-dashed">Tailwind is Awesome!</p>
        <p className="underline decoration-dotted">Tailwind is Awesome!</p>
        <p className="underline decoration-double">Tailwind is Awesome!</p>
        <p className="underline decoration-wavy">Tailwind is Awesome!</p>
      </div>
      <br />
      <hr />
      <br />
      {/**8. Decoration Offset */}
      <h3 className="text-2xl font-bold">8. Decoration Offset</h3>
      <div className="container text-white bg-gray-600 p-10 mb-10">
        <p className="underline underline-offset-1">Tailwind is Awesome!</p>
        <p className="underline underline-offset-2">Tailwind is Awesome!</p>
        <p className="underline underline-offset-3">Tailwind is Awesome!</p>
        <p className="underline underline-offset-4">Tailwind is Awesome!</p>
        <p className="underline underline-offset-5">Tailwind is Awesome!</p>
      </div>
      <br />
      <hr />
      <br />
      {/**9. Text Transformation */}
      {/**https://tailwindcss.com/docs/text-transform */}
      <h3 className="text-2xl font-bold">9. Text Transformation</h3>
      <div className="container text-white bg-lime-500 p-10 mb-10">
        <p className="text-xl normal-case">Tailwind is Awesome!</p>
        <p className="text-xl uppercase">Tailwind is Awesome!</p>
        <p className="text-xl lowercase">Tailwind is Awesome!</p>
        <p className="text-xl capitalize">Tailwind is Awesome!</p>
      </div>
    </div>
  );
};

export default TailwindcssTypography;
