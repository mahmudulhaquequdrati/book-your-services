import React from "react";

const FeatureServices = () => {
  return (
    <div>
      <div class="grid grid-rows-3 grid-flow-col gap-4 my-12 mx-8">
        <div class="row-span-3 col-span-2 bg-yellow-300 ...">
          <img
            className="h-full rounded"
            src="https://cdn.londonandpartners.com/-/media/images/london/visit/london-organisations/coca-cola-london-eye/coca-cola-london-eye-640.jpg"
            alt=""
          />
        </div>
        <div class="col-span-1 bg-yellow-300  ...">
          <img
            className="rounded"
            src="https://cdn.londonandpartners.com/visit/london-organisations/tower-of-london/90441-640x360-tower-640.jpg"
            alt=""
          />
        </div>
        <div class="row-span-2 bg-yellow-300 col-span-2  rounded...">
          <img
            className="w-full h-full rounded"
            src="https://cdn.londonandpartners.com/asset/emirates-air-line-cable-car_emirates-air-line-cable-car-image-courtesy-of-jon-reid_0da38b801853d8ba7d542d9a05da4ddf.jpg"
            alt=""
          />
        </div>
        <div class=" bg-yellow-300 col-span-1  rounded...">
          <img
            className="rounded"
            src="https://cdn.londonandpartners.com/visit/london-organisations/the-shard/63589-640x360-shard640.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureServices;
