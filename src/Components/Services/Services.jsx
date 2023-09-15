import PropTypes from "prop-types";
import Service from "./Service/Service";
const Services = ({ services }) => {
  return (
    <div className="container mx-auto my-16">
      <h1 className="text-4xl font-bold text-center">সার্ভিস সমূহ</h1>
      <div className="my-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};
Services.propTypes = {
  services: PropTypes.array,
};
export default Services;
