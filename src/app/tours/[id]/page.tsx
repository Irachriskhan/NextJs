import React from "react";
import mapsImg from "../../../../public/images/Sales-increase volume.jpg";
import Image from "next/image";

function page({ params }: { params: { id: string } }) {
  // console.log(mapsImg);
  const url = "https://www.course-api.com/images/tours/tour-1.jpeg";
  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/* Local image */}
        <div>
          <Image
            src={mapsImg}
            width={160}
            height={192}
            alt="Increase sales"
            className="object-cover rounded w-40 h-48"
            priority
          />
          <h2>Local image</h2>
        </div>
        {/* Remote image */}
        <div>
          <Image
            src={url}
            alt="Remote image"
            width={192}
            height={192}
            priority
            className="w-48 h-48"
          />
          <h2>Remote image</h2>
        </div>
      </section>
    </div>
  );
}

export default page;
