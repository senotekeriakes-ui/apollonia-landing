import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center px-6 py-16 lg:grid-cols-2 lg:px-16 lg:py-24">
        {/* Text */}
        <div>
          <h1 className="font-heading text-[clamp(4rem,10vw,125px)] leading-[85px] tracking-tight text-orange">
            THE FUTURE
            <br />
            OF CLINICAL
            <br />
            VISION
          </h1>
          <p className="mt-8 max-w-md font-body text-base leading-relaxed text-cream/90 sm:text-lg">
            A purpose-built camera system for dental clinicians. Record, review,
            and transform how you practise, without changing how you work.
          </p>
        </div>

        {/* 3D render */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <Image
            src="/assets/images/pixelated-camera.png"
            alt="Apollonia camera 3D render"
            width={700}
            height={525}
            className="w-full max-w-[550px] lg:max-w-[650px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
