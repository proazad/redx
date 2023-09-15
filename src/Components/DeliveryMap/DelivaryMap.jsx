import map from "../../../public/svg/bangladash-map.svg";
const DelivaryMap = () => {
  return (
    <div className="my-16 bg-slate-950">
      <div className="container mx-auto flex items-center gap-10 p-10">
        <div className="flex-1">
          <img src={map} alt="" />
        </div>
        <div className="flex-1 space-y-10">
          <h2 className="text-4xl font-semibold text-white">
            রেডএক্সের লজিস্টিকস সেবা সারাদেশে ৬৪ জেলা এবং ৪৯৩ উপজেলা জুড়ে
            বিস্তৃত
          </h2>
          <p className="text-white text-xl">আপনার যেকোনো লজিস্টিকস প্রয়োজনের জন্য আমরা নিশ্চিত করি দেশজুড়ে সবচেয়ে দ্রুতগতির সেবা</p>
          <button className="btn bg-red-600 hover:bg-red-400 border-none btn-wide text-white">সাইন আপ</button>
        </div>
      </div>
    </div>
  );
};

export default DelivaryMap;
