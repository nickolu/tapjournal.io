import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute rounded-full blur-[120px] opacity-20"
        style={{
          width: 500,
          height: 500,
          top: "-10%",
          left: "-5%",
          backgroundColor: "#C75B4A",
        }}
      />
      <div
        className="absolute rounded-full blur-[120px] opacity-20"
        style={{
          width: 600,
          height: 600,
          top: "-15%",
          right: "-10%",
          backgroundColor: "#3E9B6B",
        }}
      />
      <div
        className="absolute rounded-full blur-[100px] opacity-15"
        style={{
          width: 450,
          height: 450,
          bottom: "-5%",
          left: "-8%",
          backgroundColor: "#8B6BAE",
        }}
      />
      <div
        className="absolute rounded-full blur-[100px] opacity-15"
        style={{
          width: 500,
          height: 500,
          bottom: "-10%",
          right: "-5%",
          backgroundColor: "#C8A44E",
        }}
      />
      <div
        className="absolute rounded-full blur-[80px] opacity-10"
        style={{
          width: 400,
          height: 400,
          top: "40%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#5B84B8",
        }}
      />

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* App icon */}
        <Image
          src="/app-icon.png"
          alt="TapJournal app icon"
          width={160}
          height={160}
          priority
          className="rounded-[32px] shadow-2xl"
        />

        {/* Title */}
        <h1
          className="text-5xl font-bold tracking-tight sm:text-6xl"
          style={{ color: "#FAFAFA" }}
        >
          TapJournal
        </h1>

        {/* Tagline */}
        <p
          className="max-w-md text-lg leading-relaxed sm:text-xl"
          style={{ color: "rgba(255, 255, 255, 0.6)" }}
        >
          Tap what you did. Say how you felt.
          <br />
          Get a beautiful journal entry.
        </p>

        {/* Coming Soon badge */}
        <div
          className="mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="opacity-60"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Coming Soon on the App Store
        </div>
      </main>

      {/* Footer */}
      <footer
        className="absolute bottom-0 w-full py-6 text-center text-xs"
        style={{ color: "rgba(255, 255, 255, 0.25)" }}
      >
        <a
          href="/privacy"
          className="transition-colors hover:text-white/50"
        >
          Privacy Policy
        </a>
        <span className="mx-3">&middot;</span>
        <a
          href="/support"
          className="transition-colors hover:text-white/50"
        >
          Support
        </a>
      </footer>
    </div>
  );
}
