export default function Showcase() {
  return (
    <section
      id="showcase"
      className="relative w-full py-8 z-10 bg-white flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6 max-w-sm flex items-center justify-center">
        <video
          src="/blue_lama_walking1.webm"
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
