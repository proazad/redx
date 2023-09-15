import ajkerdel from "../../assets/ajkerdel.png";
import clogo from "../../assets/bata-color.png";
import daraz from "../../assets/daraz.png";
import lotto from "../../assets/lotto.png";
import othoba from "../../assets/othoba.png";
import rangs from "../../assets/rangs.png";
const Sponsor = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-8 items-center justify-between gap-4">
        <div>
          <h3 className="text-xl">Top Enterprises</h3>
        </div>
        <div>
          <img src={clogo} alt="beta" className=" h-10" draggable="false" />
        </div>
        <div>
          <img src={rangs} alt="Rangs" className=" h-10" draggable="false" />
        </div>
        <div>
          <img src={lotto} alt="lotto" className=" h-10" draggable="false" />
        </div>
        <div>
          <h3 className="text-xl">TOP SMES</h3>
        </div>
        <div>
          <img src={daraz} alt="daraz" className=" h-10" draggable="false" />
        </div>
        <div>
          <img src={ajkerdel} alt="ajkerdeal" className="h-10" draggable="false" />
        </div>
        <div>
          <img src={othoba} alt="Othoba" className=" h-10" draggable="false" />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
