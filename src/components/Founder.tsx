import Image from "next/image";

export default function Founder() {
  return (
    <section id="founder" className="bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-16 lg:py-28">
        <hr className="mb-16 border-cream/20" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Text */}
          <div>
            <h2 className="font-heading text-[clamp(4rem,10vw,125px)] leading-[85px] tracking-tight text-orange">
              BUILT BY
              <br />
              A CLINICIAN
            </h2>
            <div className="mt-8 max-w-md space-y-5 font-body text-base leading-relaxed text-cream/70">
              <p>
                Dr Senote Keriakes is a practicing dentist in Melbourne. Working
                in clinical practice, he kept running into the same problem:
                documentation tools that interrupt your workflow, cameras that
                need an assistant to operate, and no simple way to capture what
                you actually see through your loupes.
              </p>
              <p>So he set out to fix it himself.</p>
              <p>
                Apollonia is the result. A clinical camera system designed at the
                chair, by someone who sits in it every day.
              </p>
            </div>
          </div>

          {/* Founder image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/images/founder-image.webp"
              alt="Dr Senote Keriakes"
              width={500}
              height={600}
              className="w-full max-w-md rounded lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
