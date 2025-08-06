import { CircleLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <CircleLoader color="#f9572a" size={50} />
    </div>
  );
};

export default Spinner;
