import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TapJournal Accessibility",
  description:
    "How TapJournal works with iOS accessibility features, what is still in progress, and how to report a problem.",
};

const H2 = "text-xl font-semibold";
const HEAD = { color: "#FAFAFA" };

const SUPPORTED: { name: string; detail: string }[] = [
  {
    name: "Dark interface",
    detail:
      "TapJournal is dark everywhere, with no bright screens, so there is nothing to switch on.",
  },
  {
    name: "Larger text",
    detail:
      "Text follows your Dynamic Type setting, including the larger accessibility sizes. If a label is cut off at a large size, please tell us where.",
  },
  {
    name: "Reduce Motion",
    detail:
      "With Reduce Motion on, the breathing bubbles, colour floods, and screen transitions complete instantly instead of animating.",
  },
  {
    name: "Information not conveyed by colour alone",
    detail:
      "Your mood is always shown as a number and a word next to its colour, such as “+4 · Good”. Selected bubbles get a ring and a bold label as well as a brighter fill.",
  },
];

const IN_PROGRESS: { name: string; detail: string }[] = [
  {
    name: "VoiceOver",
    detail:
      "Settings, the journal, the entry review screen, and the mood slider work with VoiceOver. The activity bubbles on the home screen and in the drill-down levels are not yet announced as buttons, so choosing an activity by VoiceOver is unreliable. This is the next accessibility fix.",
  },
  {
    name: "Voice Control",
    detail:
      "Buttons with visible names respond to Voice Control. The activity bubbles have the same gap as VoiceOver and will be fixed together.",
  },
  {
    name: "Contrast",
    detail:
      "Main text is high contrast on the dark background. Some secondary labels are dimmer than they should be, and the app does not yet respond to the Increase Contrast setting. We are raising those colours.",
  },
];

export default function Accessibility() {
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
          Accessibility
        </h1>

        <div className="space-y-6 leading-relaxed">
          <p>
            <strong>Last updated:</strong> October 30, 2026
          </p>
          <p>
            TapJournal is meant to make journaling take a few taps. That
            should hold for everyone, so this page says plainly which iOS
            accessibility features the app supports today, which ones are
            still being worked on, and how to reach us when something gets in
            your way.
          </p>

          <h2 className={H2} style={HEAD}>
            Supported now
          </h2>
          <dl className="space-y-4">
            {SUPPORTED.map(({ name, detail }) => (
              <div key={name}>
                <dt className="font-semibold" style={HEAD}>
                  {name}
                </dt>
                <dd className="mt-1">{detail}</dd>
              </div>
            ))}
          </dl>

          <h2 className={H2} style={HEAD}>
            In progress
          </h2>
          <p>
            These work in parts of the app but not yet everywhere, so we do
            not claim them on the App Store listing. Each one is on the list
            for an update soon after launch.
          </p>
          <dl className="space-y-4">
            {IN_PROGRESS.map(({ name, detail }) => (
              <div key={name}>
                <dt className="font-semibold" style={HEAD}>
                  {name}
                </dt>
                <dd className="mt-1">{detail}</dd>
              </div>
            ))}
          </dl>

          <h2 className={H2} style={HEAD}>
            Not applicable
          </h2>
          <p>
            TapJournal has no audio or video, so captions and audio
            descriptions do not apply.
          </p>

          <h2 className={H2} style={HEAD}>
            Alternatives while we catch up
          </h2>
          <p>
            If the bubbles are hard to use, the &quot;+ Other&quot; bubble opens
            a plain text field where you can type the activity instead. Every
            part of an entry can also be typed or edited on the review screen,
            and finished entries can be edited from the Journal tab.
          </p>

          <h2 className={H2} style={HEAD}>
            Tell us what is in the way
          </h2>
          <p>
            Email{" "}
            <a
              href="mailto:support@tapjournal.io"
              className="underline transition-colors hover:text-white"
            >
              support@tapjournal.io
            </a>{" "}
            with the feature you were using, your iPhone model, and your iOS
            version. Accessibility reports go to the front of the queue.
          </p>
        </div>
      </article>
    </div>
  );
}
