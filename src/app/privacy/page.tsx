export default function Privacy() {
  return (
    <div className="flex min-h-screen items-start justify-center px-6 py-16">
      <article className="max-w-2xl" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
        <a
          href="/"
          className="mb-8 inline-block text-sm transition-colors hover:text-white"
          style={{ color: "rgba(255, 255, 255, 0.4)" }}
        >
          &larr; Back
        </a>

        <h1 className="mb-8 text-3xl font-bold" style={{ color: "#FAFAFA" }}>
          Privacy Policy
        </h1>

        <div className="space-y-6 leading-relaxed">
          <p>
            <strong>Last updated:</strong> March 2026
          </p>

          <h2 className="text-xl font-semibold" style={{ color: "#FAFAFA" }}>
            Your Data Stays on Your Device
          </h2>
          <p>
            TapJournal stores all journal entries locally on your device. Your
            entries are never uploaded to our servers and we do not have access
            to your journal content.
          </p>

          <h2 className="text-xl font-semibold" style={{ color: "#FAFAFA" }}>
            AI-Generated Entries
          </h2>
          <p>
            When generating a journal entry, your activity selections and mood
            data are sent to OpenAI&apos;s API to create your entry text. This data
            is processed according to{" "}
            <a
              href="https://openai.com/policies/privacy-policy"
              className="underline transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenAI&apos;s privacy policy
            </a>
            . No personally identifiable information is included in these
            requests.
          </p>

          <h2 className="text-xl font-semibold" style={{ color: "#FAFAFA" }}>
            Analytics & Telemetry
          </h2>
          <p>
            TapJournal does not collect analytics, telemetry, or usage data of
            any kind.
          </p>

          <h2 className="text-xl font-semibold" style={{ color: "#FAFAFA" }}>
            Contact
          </h2>
          <p>
            Questions about this policy? Reach out at{" "}
            <a
              href="mailto:privacy@tapjournal.io"
              className="underline transition-colors hover:text-white"
            >
              privacy@tapjournal.io
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
