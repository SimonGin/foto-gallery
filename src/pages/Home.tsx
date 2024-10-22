import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

import { Unsplash } from "../consts.ts";

import FotoCard from "../components/FotoCard.tsx";
import Loader from "../components/Loader.tsx";

const fetchPhotos = async ({ pageParam = 1 }: { pageParam?: number }) => {
  const res = await fetch(
    `https://api.unsplash.com/photos?page=${pageParam}&per_page=10`,
    {
      headers: {
        Authorization: `Client-ID ${Unsplash.ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

const HomePage = () => {
  const { data, status, fetchNextPage, hasNextPage, error } = useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 0 ? undefined : allPages.length + 1;
    },
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
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="p-5 w-1/3 text-5xl bg-white text-center rounded-b-md shadow">
        FOTO GALLERY
      </div>
      <InfiniteScroll
        dataLength={data?.pages.flat().length || 0} // Total photos across all pages
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
        loader={
          <div className="w-full m-4 flex justify-center items-center">
            <Loader />
          </div>
        }
      >
        <div className="w-full h-full p-5">
          <div className="flex flex-wrap gap-4 justify-center">
            {data?.pages.flat().map((photo: any) => (
              <FotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default HomePage;
