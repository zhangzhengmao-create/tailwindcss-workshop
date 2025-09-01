const TailwindcssBackgroundsAndShadows = () => {
  return (
    <div className="">
      <h1 className="text-7xl font-bold">
        Chapter 6 - Backgrounds And Shadows{" "}
      </h1>
      <br />
      {/**1. Background images */}
      {/**https://tailwindcss.com/docs/background-image */}
      <h3 className="text-2xl mb-3 font-bold">1. Background Images</h3>
      <div className="h-36 w-full bg-blue-500 mb-5"></div>
      <div className="h-36 w-full bg-linear-to-bl from-violet-500 to-fuchsia-500 mb-5"></div>
      <div
        className="h-screen w-full bg-blue-500 
      bg-[url('https://quotefancy.com/media/wallpaper/3840x2160/8153322-BELIEVE-Wallpaper.jpg')] bg-cover bg-no-repeat bg-center"
      ></div>
      <br />
      <hr />
      <br />
      {/**2. Shadows */}
      {/**https://tailwindcss.com/docs/drop-shadow */}
      <h3 className="text-2xl font-bold">2. Shadows</h3>
      <div className="flex flex-wrap">
        <div className="w-[400px] mt-10 ml-4 p-3 shadow-md">Shadow Medium</div>
        <div className="w-[400px] mt-10 ml-4 p-3 shadow-lg">Shadow Large</div>
        <div className="w-[400px] mt-10 ml-4 p-3 shadow-xl">
          Shadow Extra Large
        </div>
        <div className="w-[400px] mt-10 ml-4 p-3 shadow-2xl">
          Shadow 2 Extra Large
        </div>
        <div className="w-[400px] mt-10 ml-4 p-3 shadow-inner">
          Inner Shadow
        </div>
      </div>
      <h3 className="text-2xl font-bold mt-10">3. Colors/Shadow</h3>
      <div className="flex flex-wrap">
        <div className="w-[400px] mt-10 ml-4 p-3 shadow-lg shadow-teal-500">
          Colors/Shadow
        </div>
        <div className="w-[400px] mt-10 ml-4 p-3 shadow-lg shadow-teal-500/30">
          Colors/Shadow
        </div>
        <div className="w-[400px] mt-10 ml-4 p-3 shadow-lg shadow-teal-500/20">
          Colors/Shadow
        </div>
        <div className="w-[400px] mt-10 ml-4 p-3 shadow-lg shadow-teal-500/10">
          Colors/Shadow
        </div>
      </div>
      <h3 className="text-2xl font-bold mt-10">4. Gradients</h3>
      {/**https://tailwindcss.com/docs/gradient-color-stops */}
      <div className="h-[300px] bg-gradient-to-r from-teal-300 to-amber-400 p-40 text-left text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        explicabo pariatur fugit, quibusdam consequatur accusamus optio maxime
        ipsam eum, laudantium fugiat illum voluptatibus esse! Error impedit
        deserunt asperiores quos numquam.
      </div>
      <div className="h-[300px] bg-gradient-to-r from-teal-300 via-blue-400 to-amber-400 p-40 text-left text-white ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque
        tempora nostrum explicabo tempore, ut modi officiis exercitationem
        eveniet saepe voluptatum pariatur animi autem. Quam molestias nesciunt
        veritatis voluptas. Fugit.
      </div>
      <div className="h-[300px] bg-gradient-to-r from-red-100 via-[crimson]-400 to-red-500 p-40 text-left text-white ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque
        tempora nostrum explicabo tempore, ut modi officiis exercitationem
        eveniet saepe voluptatum pariatur animi autem. Quam molestias nesciunt
        veritatis voluptas. Fugit.
      </div>
      <div className="h-[500px]"></div>
    </div>
  );
};

export default TailwindcssBackgroundsAndShadows;
