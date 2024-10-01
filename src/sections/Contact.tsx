import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
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
                <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s create something amazing together</h2>
                <p className="text-sm md:text-base mt-2">
                  Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-700 transition-colors duration-300">
                  <span className="font-semibold">Get In Touch 👋</span>
                  
                </button>
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-700 transition-colors duration-300">
                  <span className="font-semibold">Download CV 📥</span>
                  
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
