export default function Home() {
  return (
    <section className="flex flex-col min-h-screen space-y-10">
      <h1 className="font-extrabold text-4xl">Ahmad Girach</h1>

      <div className="space-y-4">
        <p className="text-balance">
          Hey, I&apos;m a Full-Stack Developer with 9 years of experience. I
          build high quality web apps with a focus on performance, user
          experience and scalability.
        </p>
        <p className="text-balance">
          I can help you with developing Web Apps, SaaS, MVPs and more.
        </p>
        <button className="px-6 py-3 rounded-md shadow-lg bg-orange-800 text-white transition-colors hover:bg-orange-900">
          <a
            href="https://cal.com/ahmadgirach/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a free 15 min call &rarr;
          </a>
        </button>
      </div>
    </section>
  );
}
