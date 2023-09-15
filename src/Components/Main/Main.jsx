import { useEffect, useState } from "react";
import ChooseRedx from "../ChooseRedx/ChooseRedx";
import DelivaryMap from "../DeliveryMap/DelivaryMap";
import Services from "../Services/Services";
const Main = () => {
    const [services, setSevices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setSevices(data));
    },[]);
    return (
        <main>
            <Services services={services}></Services>
            <ChooseRedx></ChooseRedx>
            <DelivaryMap></DelivaryMap>
        </main>
    );
};

export default Main;