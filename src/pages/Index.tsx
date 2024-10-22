import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const IndexPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/photos");
  }, [navigate]);
  return <></>;
};

export default IndexPage;
