const TailwindcssFilters = () => {
  return (
    <div className="">
      <h1 className="text-7xl font-bold">Chapter 8 - Filters </h1>
      <br />
      {/**1. Contrast */}
      {/**https://tailwindcss.com/docs/contrast */}
      <h3 className="text-2xl mb-3 font-bold">1. Contrast</h3>
      <div className="border mt-10 mb-10 flex p-10">
        <img
          src="https://cdn.shopify.com/s/files/1/0036/4806/1509/files/859cb34ec673fbc6d83178a5ce213bad288a0333_square3117813_1_159x@2x.progressive.jpg?v=1755869435"
          alt=""
          className="w-[250px] h-[250px]"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0036/4806/1509/files/859cb34ec673fbc6d83178a5ce213bad288a0333_square3117813_1_159x@2x.progressive.jpg?v=1755869435"
          alt=""
          className="w-[250px] h-[250px] ml-10 contrast-75"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0036/4806/1509/files/859cb34ec673fbc6d83178a5ce213bad288a0333_square3117813_1_159x@2x.progressive.jpg?v=1755869435"
          alt=""
          className="w-[250px] h-[250px] ml-10 contrast-100"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0036/4806/1509/files/859cb34ec673fbc6d83178a5ce213bad288a0333_square3117813_1_159x@2x.progressive.jpg?v=1755869435"
          alt=""
          className="w-[250px] h-[250px] ml-10 contrast-150"
        />
      </div>

      <br />
      <hr />
      <br />
      {/**2. Brightness */}
      {/**https://tailwindcss.com/docs/brightness */}
      <h3 className="text-2xl font-bold">2. Brightness</h3>
      <div className="border flex mt-10 mb-10">
        <img
          src="https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10"
        />
        <img
          src="https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 brightness-75"
        />
        <img
          src="https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 brightness-100"
        />
        <img
          src="https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 brightness-150"
        />
      </div>

      <h3 className="text-2xl font-bold mt-10">3. Gray Scale</h3>
      {/**https://tailwindcss.com/docs/filter-grayscale */}
      <div className="border flex mt-10 mb-10">
        <img
          src="https://www.shutterstock.com/image-photo/breathtaking-summer-day-wild-mountains-600w-2499073105.jpg"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10"
        />
        <img
          src="https://www.shutterstock.com/image-photo/breathtaking-summer-day-wild-mountains-600w-2499073105.jpg"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 grayscale"
        />
        <img
          src="https://www.shutterstock.com/image-photo/breathtaking-summer-day-wild-mountains-600w-2499073105.jpg"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 invert"
        />
        <img
          src="https://www.shutterstock.com/image-photo/breathtaking-summer-day-wild-mountains-600w-2499073105.jpg"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 sepia"
        />
      </div>

      <h3 className="text-2xl font-bold mt-10">4. Hue Rotate</h3>
      {/**https://tailwindcss.com/docs/filter-hue-rotate */}
      <div className="border flex mt-10 mb-10">
        <img
          src="https://thumbs.dreamstime.com/b/landscape-sunset-view-morain-lake-mountain-range-alberta-canada-44613434.jpg"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10"
        />
        <img
          src="https://thumbs.dreamstime.com/b/landscape-sunset-view-morain-lake-mountain-range-alberta-canada-44613434.jpg"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 hue-rotate-30"
        />
        <img
          src="https://thumbs.dreamstime.com/b/landscape-sunset-view-morain-lake-mountain-range-alberta-canada-44613434.jpg"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 hue-rotate-60"
        />
        <img
          src="https://thumbs.dreamstime.com/b/landscape-sunset-view-morain-lake-mountain-range-alberta-canada-44613434.jpg"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 hue-rotate-90"
        />
      </div>
      <h3 className="text-2xl font-bold mt-10">5. Saturate</h3>
      {/**https://tailwindcss.com/docs/saturate */}
      <div className="border flex mt-10 mb-10">
        <img
          src="https://www.originaltravel.co.uk/travel-blog/ShowPhoto/4103/0"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10"
        />
        <img
          src="https://www.originaltravel.co.uk/travel-blog/ShowPhoto/4103/0"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 saturate-50"
        />
        <img
          src="https://www.originaltravel.co.uk/travel-blog/ShowPhoto/4103/0"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 saturate-100"
        />
        <img
          src="https://www.originaltravel.co.uk/travel-blog/ShowPhoto/4103/0"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 saturate-150"
        />
      </div>
      <h3 className="text-2xl font-bold mt-10">6. Blur</h3>
      {/**https://tailwindcss.com/docs/blur */}
      <div className="border flex mt-10 mb-10">
        <img
          src="https://img.freepik.com/free-photo/studio-arrangement-work_23-2151976838.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10"
        />
        <img
          src="https://img.freepik.com/free-photo/studio-arrangement-work_23-2151976838.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 blur-[2px]"
        />
        <img
          src="https://img.freepik.com/free-photo/studio-arrangement-work_23-2151976838.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 blur-[5px]"
        />
        <img
          src="https://img.freepik.com/free-photo/studio-arrangement-work_23-2151976838.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
          className="w-[250px] h-[250px] ml-10 mt-10 mb-10 blur-[7px]"
        />
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default TailwindcssFilters;
