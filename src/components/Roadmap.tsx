const steps = [
  {
    label: "NOW",
    title: "APOLLONIA CAMERA",
    body: "A purpose-built clinical camera that brings first-person video documentation into dental workflows. Light, intuitive, and designed to disappear into your routine.",
  },
  {
    label: "NEXT",
    title: "INTELLIGENT SOFTWARE",
    body: "A platform that turns your recordings into structured, searchable clinical content. Documentation that writes itself so you can focus on patients.",
  },
  {
    label: "THE VISION",
    title: "AUGMENTED CLINICAL EXPERIENCE",
    body: "Smart wearables that merge magnification, capture, and real-time intelligence into a single tool for the modern clinician.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-16 lg:py-28">
        <h2 className="font-heading text-[clamp(2rem,5vw,70px)] leading-[55px] tracking-tight text-orange">
          THIS IS JUST THE BEGINNING
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-cream/70">
          The camera is the starting point. What comes next connects clinical
          capture, intelligent documentation, and visual workflows into one
          system.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded bg-cream p-8 lg:p-10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-ink/40">
                {s.label}
              </span>
              <h3 className="mt-2 font-heading text-base tracking-wide text-ink sm:text-lg">
                {s.title}
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-ink/60">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
