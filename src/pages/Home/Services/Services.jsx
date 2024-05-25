import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";
import useServices from "../../../Hooks/useServices";


const Services = () => {
    const services=useServices();
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://car-doc-server-delta.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    return (
        <div className="mt-4">
            <div className="text-center space-y-3">
                <h2 className="text-3xl text-orange-600">Services</h2>
                <h2 className="text-5xl ">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}

                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;