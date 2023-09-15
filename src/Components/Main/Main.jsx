import { useEffect, useState } from "react";
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
        </main>
    );
};

export default Main;