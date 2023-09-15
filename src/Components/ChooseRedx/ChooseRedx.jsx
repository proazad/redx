import { useEffect, useState } from "react";
import Item from "./Item";
const ChooseRedx = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("chooseRedx.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="container mx-auto my-16">
      <h2 className="text-4xl font-bold text-center">
        আপনার লজিস্টিক পার্টনার হিসেবে REDX বেছে নিন
      </h2>

      <div className="grid grid-cols lg:grid-cols-3 gap-8 my-16">
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default ChooseRedx;
