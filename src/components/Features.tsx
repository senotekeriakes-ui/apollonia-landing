const features = [
  {
    title: "HIGH-DEFINITION VIDEO",
    body: "4K resolution captures every detail of your work, from composite margins to complex procedures. Record full cases from start to finish with clinical-grade fidelity. Nothing is lost between chair and archive.",
  },
  {
    title: "INTEGRATED LIGHTING",
    body: "A built-in LED delivers consistent, shadowless illumination directly onto the oral cavity. No more relying on overhead positioning. True-to-life colour accuracy and edge-to-edge visibility in every capture.",
  },
  {
    title: "HANDS-FREE CONTROL",
    body: "A wireless foot pedal lets you start, stop, and navigate without breaking sterility or losing focus. No reaching for buttons, no interruptions. Seamless capture that disappears into your clinical workflow.",
  },
  {
    title: "LIVE DISPLAY",
    body: "Stream a real-time feed to a chairside monitor so patients see exactly what you see. Share findings, build transparency, and turn patients into full partners in treatment decisions.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-16 lg:py-28">
        <hr className="mb-16 border-cream/20" />

        <h2 className="font-heading text-[clamp(2rem,5vw,70px)] leading-[55px] tracking-tight text-orange">
          WHAT MAKES APOLLONIA DIFFERENT
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded bg-cream p-8 lg:p-10"
            >
              <h3 className="font-heading text-base tracking-wide text-ink sm:text-lg">
                {f.title}
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-ink/60">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
