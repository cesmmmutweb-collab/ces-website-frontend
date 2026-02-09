import home_image_2 from "../assets/home_image_2.jpg";
import ces from "../assets/ces.png";

function Introduction() {
  return (
    <section className="w-full md:min-h-screen md:h-screen px-6 md:px-20 py-7 flex flex-col justify-start">

      <div className="flex-[2] flex items-start">
        <div className="space-y-3">

          <div className="inline-flex items-center gap-2 font-satoshi border border-[#c0c8ff] border-[1.5px] text-[#5b56e8] px-2 py-1 rounded-full text-xs sm:text-sm mb-5 font-semibold">
            <img src={ces} alt="logo" className="w-7 h-7 object-contain" />
            <span>COMPUTER ENGINEERING SOCIETY</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-satoshi max-w-4xl mb-5 font-bold text-gray-900 leading-tighter">
            Architecting Tomorrow’s Tech with <span className="text-[#5b56e8]">Code, Innovation & Curiosity</span>
          </h1>

          <p className="text-gray-600 text-sm md:text-lg leading-tight max-w-xl md:max-w-none font-satoshi">
            CES MMMUT nurtures a community where engineering precision and creativity drive students to innovate and push technological boundaries.
          </p>

        </div>
      </div>

      <div className="w-full mt-5 md:mt-7 rounded-3xl overflow-hidden shadow-lg">
        <img
          src={home_image_2}
          alt="Hero Image"
          className=" w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-[70vh] object-cover" />
      </div>

    </section>
  );
}

export default Introduction;
