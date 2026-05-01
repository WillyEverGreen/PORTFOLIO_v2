export default function Showcase() {
  return (
    <section id="showcase" className="relative w-full pb-12 pt-0 -mt-32 z-10 bg-white flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 max-w-md flex items-center justify-center">
        <video 
          src="/blue_lama_walking.webm"
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto object-contain"
        ></video>
      </div>
    </section>
  );
}
