import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TapJournal Support",
  description: "Help and contact for the TapJournal iPhone app.",
};

const H2 = "text-xl font-semibold";
const HEAD = { color: "#FAFAFA" };

const FAQ: { q: string; a: string }[] = [
  {
    q: "How do I write an entry?",
    a: "Tap the activity you did, hold a blob to drill into something more specific, and tap more than one if your day branched. Pick how it felt, add people, a place, or a note if you like, and save. The entry is written for you.",
  },
  {
    q: "Where does the AI run? What does it see?",
    a: "On iPhones with Apple Intelligence, Apple's on-device model writes the entry from what you tapped: the activities, your mood, the people and place you added, and any note. Nothing leaves your phone. Without Apple Intelligence, TapJournal saves a plain entry from your selections.",
  },
  {
    q: "Why does my entry read a little plain?",
    a: "Your iPhone probably doesn't have Apple Intelligence (it needs iOS 26 and a supported model), or the model is still downloading. TapJournal falls back to a plain entry so nothing is lost. You can always edit the text.",
  },
  {
    q: "Can I edit or delete an entry?",
    a: "Yes. Open the Journal tab, tap a day, and use Edit or Delete on any moment.",
  },
  {
    q: "How do I get my journal out?",
    a: "Settings → Export creates a plain-text file of every entry that you can save to Files, send to yourself, or share anywhere.",
  },
  {
    q: "How do I delete everything?",
    a: "Settings → Privacy → Clear All Data removes every entry and preference from your phone. Deleting the app does the same. We never had a copy.",
  },
  {
    q: "Is my journal backed up?",
    a: "It is included in your iCloud or computer backup when backups are on, like other app data. Restoring a backup to a new phone brings your journal with it.",
  },
];

export default function Support() {
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

        <h1 className="mb-8 text-3xl font-bold" style={HEAD}>
          Support
        </h1>

        <div className="space-y-6 leading-relaxed">
          <p>
            Stuck, found a bug, or have an idea? Email{" "}
            <a
              href="mailto:support@tapjournal.io"
              className="underline transition-colors hover:text-white"
            >
              support@tapjournal.io
            </a>
            . Include your iPhone model and iOS version if it&apos;s a bug.
            Please don&apos;t paste journal entries into email unless you want
            to; a description of what happened is enough.
          </p>

          <h2 className={H2} style={HEAD}>
            Frequently asked
          </h2>
          <dl className="space-y-5">
            {FAQ.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-semibold" style={HEAD}>
                  {q}
                </dt>
                <dd className="mt-1">{a}</dd>
              </div>
            ))}
          </dl>

          <p>
            See also the{" "}
            <a
              href="/privacy"
              className="underline transition-colors hover:text-white"
            >
              privacy policy
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
