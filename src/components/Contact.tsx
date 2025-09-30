const Contact = () => {
  return (
    // Centering container and main background (optional, but good for context)
    <div className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-inter">

      {/* CTA Card Container */}
      <div
        className="w-full max-w-5xl p-8 sm:p-16 rounded-3xl 
                   bg-[#0058FF] text-white text-center"
      >

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">
          Get In Touch
        </h2>

        {/* Description Text */}
        <p className="text-[14px] md:text-[18px] font-thin max-w-5xl mx-auto mb-10 opacity-90">
          Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.
        </p>

        {/* Action Button */}
        <a
          href="/book-plumber" // Replace with actual booking link
          className="inline-flex items-center justify-center px-8 py-3 
                     border border-transparent text-base font-semibold rounded-lg 
                     text-blue-600 bg-white hover:bg-gray-100 transition 
                     duration-300 ease-in-out shadow-lg"
        >
          Book a Professional Plumber
          <svg
            className="ml-2 -mr-1 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

      </div>
    </div>
  );
};

export default Contact;
