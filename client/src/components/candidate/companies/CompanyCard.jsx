import { Link, useNavigate } from "react-router-dom";
import photo from "../../../assets/react.svg";

const CompanyCard = ({ company }) => {

    const navigate = useNavigate();

    const handleProfileView = () => {
        navigate(`/candidate/company-profile/${company._id}`);
    }


    return (
      <>
        <button
          className="flex-wrap items-center justify-center block shadow-xl bg-slate-100 rounded-xl hover:bg-gray-200 focus:outline-none"
          onClick={handleProfileView}
        >
          <div className="grid w-full grid-rows-2 gap-4">
                <img src={photo} alt={company.companyName} className="w-full h-24 mt-4 rounded-t-xl" />
            <div className="rows-span 1">
                <div className="flex flex-col">
                    <h3 className="my-4 text-lg text-gray-800 font-base">{company.companyName}</h3>
                </div>
            </div>
          </div>
        </button>
      </>
    );
  };
  
  export default CompanyCard;
  