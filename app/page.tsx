import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FAF9F6] text-[#2C3539] font-serif">
      <section className="relative h-screen flex flex-col justify-center items-center text-center p-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/emergency.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 text-white max-w-4xl">
          <h3 className="uppercase tracking-[0.4em] text-xs md:text-sm text-[#D4AF37] mb-6 font-sans font-semibold drop-shadow-md">
            Emergency Dental Care
          </h3>
          <h1 className="text-5xl md:text-8xl font-light mb-8 leading-[1.1] drop-shadow-2xl">
            Immediate Relief,<br />
            <span className="italic">Masterfully Delivered.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl mb-10 leading-relaxed opacity-90 font-light drop-shadow-lg">
            When a dental emergency strikes, you deserve precision, comfort, and the immediate attention of the city’s finest clinical team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+12125615303"
              className="bg-white text-[#2C3539] px-12 py-5 uppercase tracking-widest text-xs font-bold hover:bg-[#B8860B] hover:text-white transition-all duration-500 shadow-2xl"
            >
              Secure Priority Appointment
            </a>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl font-light leading-tight">Clinical Artistry<br />Under Pressure</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            In the heart of Tribeca, we treat emergencies not as interruptions, but as an opportunity for precision restoration. Using advanced diagnostic imaging and laser technology, we resolve pain with surgical accuracy.
          </p>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm uppercase tracking-widest text-[#B8860B] font-bold">Technology Spotlight</p>
            <p className="text-gray-500">Fotona Laser & 3D CBCT Airway Mapping</p>
          </div>
        </div>
        <div className="flex-1 w-full h-[500px] bg-gray-100 relative group shadow-2xl">
          <div className="flex-1 w-full h-[300px] md:h-[500px] relative shadow-2xl overflow-hidden rounded-2xl">
            <Image
              src="/teeth.jpg"
              alt="Precision Dental Restoration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#F4F4F4] text-center border-y border-gray-100">
        <h2 className="text-4xl font-light mb-20 tracking-tight text-[#2C3539]">Your Path to Restoration</h2>
        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto px-6">
          {[
            { step: "01", title: "Concierge Intake", desc: "Speak directly with our clinical team to prioritize your urgent case." },
            { step: "02", title: "Precision Imaging", desc: "Advanced digital mapping to pinpoint the exact source of discomfort." },
            { step: "03", title: "Restorative Relief", desc: "Immediate, high-end intervention to restore your oral health and comfort." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center space-y-6 group">
              <span className="text-xs uppercase tracking-[0.3em] text-[#B8860B] font-bold border-b border-[#B8860B] pb-2">Phase {item.step}</span>
              <h4 className="text-2xl font-light">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-40 text-center bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-light mb-10 leading-tight">Ready to reclaim<br />your peace of mind?</h2>
          <p className="text-gray-500 mb-12 text-lg italic">The studio is currently accepting emergency priority cases.</p>
          <a
            href="tel:+12125615303"
            className="inline-block border border-[#2C3539] px-16 py-6 uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#2C3539] hover:text-white transition-all duration-700 shadow-lg"
          >
            Call Tribeca Dental Studio
          </a>
        </div>
      </section>
      {/* Fixed Mobile Call Button */}
<div className="md:hidden fixed bottom-6 left-0 w-full px-6 z-50">
  <a 
    href="tel:+12125615303" 
    className="flex items-center justify-center bg-[#B8860B] text-white py-4 rounded-full shadow-2xl uppercase tracking-widest text-xs font-bold active:scale-95 transition-transform"
  >
    Call for Immediate Relief
  </a>
</div>
    </div>
  );
}