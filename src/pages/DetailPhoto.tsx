import { Unsplash } from "../consts";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";

const fetchPhotoById = async (id: any) => {
  const res = await fetch(`https://api.unsplash.com/photos/${id}`, {
    headers: {
      Authorization: `Client-ID ${Unsplash.ACCESS_KEY}`,
    },
  });
  const data = await res.json();
  return data;
};

const DetailPhoto = () => {
  const { id } = useParams();

  const {
    data: photo,
    status,
    error,
  } = useQuery({
    queryKey: ["photo", id],
    queryFn: () => fetchPhotoById(id),
  });

  if (status === "pending") {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (status === "error") {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <div className="py-3 px-14 w-full h-full flex flex-col justify-center items-center">
      <img
        src={photo?.links?.download}
        alt=""
        className="select-none ring-2 ring-[#0F172A] rounded-md"
      />
      <div className="my-9 text-center">
        <p className="text-2xl font-bold italic">
          Title: {photo?.alt_description || "No title"}
        </p>
        <p className="text-xl font-bold italic">Author: {photo?.user?.name}</p>
        <p className="text-xl font-bold italic">
          Description: {photo?.description || "No description"}
        </p>
      </div>
    </div>
  );
};

export default DetailPhoto;
