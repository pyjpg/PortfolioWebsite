import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
      <div className="bg-gradient-to-r from-teal-600 to-blue-900 text-white py-12 px-8 lg:px-20 rounded-xl shadow-lg relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-10 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(5px)',
            }}
          ></div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div>
                <h2 className="font-serif text-xl">Still here? Must be a sign 🙏</h2>
                <p className="text-sm md:text-base mt-2">
                Ready to turn your wild ideas into reality? Let’s connect and discuss how I can help you achieve your goals—or at least help you look good while trying! 😄
                </p>
              </div>
              <div className="flex gap-4 mb:flex flex-col">
              <a href="mailto:titas.r@outlook.com">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-white/15 hover:bg-green-600 hover:border-green-500">
                  <span className="font-semibold">Get In Touch </span>
                  <span className="animate-pulse text-2xl">👋</span>                  
                </button>
              </a>
              <a href="/TitasRamanCV.pdf" download>
                <button className="text-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-white bg-white  hover:bg-green-500 hover:border-green-500">
                  <span className="font-semibold">Download CV</span>
                  <span className="animate-bounce text-xl">📥</span>
                </button>
              </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
