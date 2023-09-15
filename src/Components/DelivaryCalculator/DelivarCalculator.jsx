const DelivarCalculator = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center space-y-8">
        <h2 className="text-4xl font-semibold">ডেলিভারি ক্যালকুলেটর</h2>
        <p className="text-xl">
          আপনার শিপমেন্টের সুবিধার জন্য আগে থেকেই আপনার ডেলিভারী চার্জ সম্পর্কে
          ধারণা নিন
        </p>
      </div>
      <div className="w-6/12 mx-auto flex gap-10 py-5">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">পণ্যের ওজন ( সর্বোচ্চ 10 কেজি )</span>
          </label>
          <input
            type="text"
            placeholder="পণ্যের ওজন লিখুন"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">পণ্যের বিক্রয়মূল্য</span>
          </label>
          <input
            type="text"
            placeholder="পণ্যের বিক্রয়মূল্য লিখুন"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="w-6/12 mx-auto flex gap-10 py-5">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">পিক-আপ এলাকা</span>
          </label>
          <select className="select select-bordered">
            <option disabled selected>
            পিক-আপের এলাকা নির্বাচন করুন
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">ডেলিভারি এলাকা</span>
          </label>
          <select className="select select-bordered">
            <option disabled selected>
            ডেলিভারি এলাকা নির্বাচন করুন
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </div>
      </div>
      <div className="w-6/12 mx-auto text-center py-5">
        <button className="btn bg-red-600 hover:bg-red-400 border-none btn-wide text-white">
          ডেলিভারি চার্জ দেখুন
        </button>
        <p className="w-10/12 mx-auto py-6">
          আপনি কি জানতে চান, যেকোনো লোকেশনে আপনার পার্সেল পাঠাতে কত খরচ হতে
          পারে? আমাদের বিস্তারিত{" "}
          <a href="#" className="text-red-500 font-semibold">
            {" "}
            লিস্টটি দেখুন।
          </a>
        </p>
      </div>
    </div>
  );
};

export default DelivarCalculator;
