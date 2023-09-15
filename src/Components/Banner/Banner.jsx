import banner from "../../assets/banner.avif";


const Banner = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-8/12">
          <img src={banner} alt="Banner Image" draggable={false} className="w-full h-[90vh]" />
        </div>
        <div className="w-4/12 p-10 space-y-10">
          <div className="space-y-5 text-center">
            <h3 className="text-xl">
              বিনামুল্যে সাইন-আপ করুন মাত্র দুই মিনিটে
            </h3>
            <div className="form-control w-full mx-auto">
              <label className="input-group">
                <span>+880</span>
                <input
                  type="text"
                  placeholder="ফোন নাম্বার"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <button className="btn btn-error w-full">সাইন আপ</button>
          </div>

          <div className="text-center">
            <div className="divider">অথবা,</div>
          </div>
          <div className="text-center space-y-5">
            <h3 className="text-xl ">ট্রাক মুভমেন্ট স্ট্যাটাস</h3>
            <div className="form-control">
              <label className="input-group">
                <input
                  type="text"
                  placeholder="ট্র্যাকিং আইডি দিন"
                  className="input input-bordered w-full"
                />
                <span className="text-xl">ট্র্যাক</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
