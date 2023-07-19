import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About Us" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Pulmonix</span> <br />{" "}
          We Pulmonix Healthcare Pvt. Ltd. are 12 years old Medical Equipment Company specializing in Critical Care, Respiratory Home Care , Emergency,  Sleep Medical and Hospital Equipments providing high quality products and efficient service.
As seen, though Health care industry has been steadily growing upwards , newer challenges are also added on day to day basis .Understanding this and keeping this in mind we always keep ourself updated and abreast with such development and concentrate on adding in Newer concept technological advanced product line to overcome those challenges .
We concentrate on Life saving equipment which are the prime requirements in Medical Care and believe that the combination of our high tech equipment with existing committed team, we can offer better medical care to institutions and patient fraternity.  <br/>
<span className="text-primeColor font-semibold text-lg">Corporate Profile</span> <br />
Pulmonix Healthcare Pvt. Ltd. is now 12 years old organisation is fast growing Medical Equipment Company specialising itself in Critical Care, Respiratory Home Care and Sleep Medical ,emergency Medical Equipments, providing high quality products and efficient service.
As seen Health care industry has been steadily growing upwards. Keeping this in mind Pulmonix Healthcare Pvt. Ltd. is concentrating its effort on Medical Technologies.
Pulmonix Healthcare Pvt. Ltd. concentrates on life saving equipment which are the prime requirements in Medical Care.Pulmonix Healthcare Pvt. Ltd. believes that the combination of its high tech equipment with existing committed team it can offer better medical care to institutions. <br/>

<span className="text-primeColor font-semibold text-lg">Quality</span> <br />
Since, inspection Pulmonix Healthcare Pvt. Ltd. has built a strong reputation of being Dedicated Service Oriented and Trustworthy Company . We identify and work with principles and product which are the best and regulated with Global norms . Most of our business comes in repetition from satisfied customer or from their reference . Providing solution to customer 24 x 7 and keeping him satisfied and winning his trust is our prime facie and we keep achieving those without compromising on our commitments .<br />

<span className="text-primeColor font-semibold text-lg">Coverage</span> <br />
Situated in the heart of the commercial capital of this country – Mumbai, Pulmonix Healthcare Pvt. Ltd. has the capability to service geographic regions in Maharashtra state except Vidarbha region .<br />
<span className="text-primeColor font-semibold text-lg">Staff</span> <br />
Pulmonix Healthcare Pvt. Ltd. has a wide range of professionals who cater to Sales , Service and Maintenance of medical equipment and its Team Comprises of Competent Director, Administrator ,Coordinators , Sales Engineers , Service Engineers , Technicians.<br />
<span className="text-primeColor font-semibold text-lg">Group of companies</span> <br />
Pulmonix Healthcare Pvt. Ltd. Consultants has been existing from Year 2011. Pulmonix Healthcare Pvt. Ltd. consultants executes the rental and the homecare services. It also consults , educates Hospitals & home patients.<br />
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
