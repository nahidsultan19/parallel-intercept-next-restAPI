"use client";

import Image from "next/image";
import Link from "next/link";
import photos from "./images";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold my-4">
        Welcome to photo gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {photos.map(({ id, src, name }) => (
          <Link key={id} href={`/gallary/${id}`}>
            <Image
              src={src}
              alt={name}
              width={400}
              height={300}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
