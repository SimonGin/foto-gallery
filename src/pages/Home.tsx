import { useInfiniteQuery } from "@tanstack/react-query";

import { Unsplash } from "../consts.ts";

import FotoCard from "../components/FotoCard.tsx";

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
  const { data, status, error } = useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 0 ? undefined : allPages.length + 1;
    },
  });

  if (status === "success") {
    console.log(data);
  }

  return (
    <>
      <div className="w-full h-full p-5">
        {data?.pages.map((page: any, pageIndex: number) => (
          <div
            className="flex flex-row justify-center gap-4 flex-wrap"
            key={pageIndex}
          >
            {page.map((photo: any) => (
              <FotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
