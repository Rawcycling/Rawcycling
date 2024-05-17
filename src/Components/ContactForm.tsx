import phone from "/phoneIcon.png";
import mail from "/mailIcon.png";

const ContactForm = () => {
  return (
    <div className="md:w-[100%]">
      <h1 className="font-montserrat font-bold text-[52px] leading-[60px]">
        Get in <span className="text-[#164C28]">Touch</span>
      </h1>

      <p className="mt-[20px] font-montserrat font-semibold text-[13px] leading-[20px]">
        Questions or feedback? Reach out for prompt assistance. We're here to
        help!
      </p>

      <div className="mt-[57px] flex flex-row md:flex-col items-center md:items-start md:gap-[50px] justify-between">
        <div className="flex flex-row items-center gap-[14px]">
          <img src={phone} alt="" />

          <div>
            <p className="font-montserrat font-semibold text-[13px] text-black">
              PHONE
            </p>
            <p className="font-montserrat font-semibold text-[13px] text-[#1A6334]">
              +234 904 240 1678
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-[14px]">
          <img src={mail} alt="" />

          <div>
            <p className="font-montserrat font-semibold text-[13px] text-black">
              EMAIL
            </p>
            <p className="font-montserrat font-semibold text-[13px] text-[#1A6334]">
              rawcyclinginfo@gmail.com
            </p>
          </div>
        </div>
      </div>

      <form action="" className="w-[100%] mt-[60px] flex flex-col gap-[20px]">
        <input
          type="text"
          placeholder="Name"
          required
          className="border-[1px] border-[#E0E0E0] bg-transparent outline-none w-[100%] py-[12px] px-[19px]"
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="border-[1px] border-[#E0E0E0] bg-transparent outline-none w-[100%] py-[12px] px-[19px]"
        />

        <input
          type="number"
          placeholder="Phone number"
          required
          className="border-[1px] border-[#E0E0E0] bg-transparent outline-none w-[100%] py-[12px] px-[19px]"
        />

        <textarea
          rows={8}
          placeholder="Message"
          required
          className="border-[1px] border-[#E0E0E0] bg-transparent outline-none w-[100%] py-[12px] px-[19px]"
        />

        <button className="w-[100%] bg-[#164C28] py-[12px] md:py-[20px] text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
