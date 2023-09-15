import { useEffect, useState } from "react";
import ChooseRedx from "../ChooseRedx/ChooseRedx";
import DelivarCalculator from "../DelivaryCalculator/DelivarCalculator";
import DelivaryMap from "../DeliveryMap/DelivaryMap";
import Faqs from "../FAQS/FAQS";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
const Main = () => {
  const [services, setSevices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setSevices(data));
  }, []);
  return (
    <main>
      <Services services={services}></Services>
      <ChooseRedx></ChooseRedx>
      <DelivaryMap></DelivaryMap>
      <DelivarCalculator></DelivarCalculator>
      <Testimonials></Testimonials>
      <Faqs></Faqs>
    </main>
  );
};

export default Main;
