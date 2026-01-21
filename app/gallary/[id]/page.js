import Image from "next/image";
import photos from "../images";

const SinglePhoto = ({ params }) => {
  const { id } = params;
  const photo = photos.find((pic) => pic.id === id);

  if (!photo) {
    return <div className="text-center mt-10">Photo not found</div>;
  }

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div className="text-center text-2xl font-bold my-4">{photo.name}</div>
        <Image
          alt={photo.name}
          src={photo.src}
          width={400}
          height={300}
          className="w-full object-cover aspect-square"
        />
      </div>
    </div>
  );
};

export default SinglePhoto;
