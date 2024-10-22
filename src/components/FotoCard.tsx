import { Link } from "react-router-dom";

type FotoCardProps = {
  photo: any;
};

const FotoCard: React.FC<FotoCardProps> = ({ photo }) => {
  return (
    <>
      <Link
        to={`/photos/${photo?.id}`}
        className="h-96 w-96 p-3 flex flex-col items-center gap-2 bg-white rounded-lg"
      >
        <img
          src={photo?.links?.download}
          alt=""
          className="object-contain h-[310px] w-[360px] select-none ring-2 ring-[#0F172A] rounded-md"
        />
        <h1 className="text-xl font-bold italic">{photo?.user?.name}</h1>
      </Link>
    </>
  );
};

export default FotoCard;
