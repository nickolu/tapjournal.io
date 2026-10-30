const H2 = "text-xl font-semibold";
const HEAD = { color: "#FAFAFA" };

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

        <h1 className="mb-8 text-3xl font-bold" style={HEAD}>
          Privacy Policy
        </h1>

        <div className="space-y-6 leading-relaxed">
          <p>
            <strong>Effective date:</strong> October 30, 2026
          </p>
          <p>
            TapJournal is a journaling app for iPhone. The short version: your
            journal stays on your phone, the AI that writes your entries runs
            on your phone, and we have no servers that receive your data.
          </p>

          <h2 className={H2} style={HEAD}>
            What TapJournal stores, and where
          </h2>
          <p>
            Everything you create in TapJournal is stored only on your device:
            journal entries, the activities and feelings you tap, the people
            you add, any place you add to an entry, the optional &quot;About
            You&quot; text from onboarding, and your writing-style preference.
            We do not have an account system, and we cannot see or access any
            of it.
          </p>
          <p>
            Because this data lives in the app&apos;s storage on your phone, it
            is included in your iCloud and computer backups if you have
            backups turned on. Apple handles those backups under Apple&apos;s
            privacy policy. Journal files are protected with iOS data
            protection, so they are unreadable while your phone is locked.
          </p>

          <h2 className={H2} style={HEAD}>
            AI-written entries
          </h2>
          <p>
            On iPhones with Apple Intelligence, TapJournal uses Apple&apos;s
            on-device model to turn your taps into an entry. The model runs
            entirely on your phone. Your journal is never sent to TapJournal,
            to Apple&apos;s servers, or to any AI company. On phones without
            Apple Intelligence, TapJournal saves a plain entry from what you
            selected, with no AI involved.
          </p>

          <h2 className={H2} style={HEAD}>
            Location
          </h2>
          <p>
            Adding a place to an entry is optional. You can type a place name,
            which sends nothing anywhere. If you tap &quot;Use current
            location&quot;, TapJournal asks for location permission, reads your
            position once, and uses Apple&apos;s geocoding service to turn the
            coordinates into a place name. That lookup is an iOS service
            covered by Apple&apos;s privacy policy. The place name and
            coordinates are saved only inside that entry, on your device.
            TapJournal never tracks your location in the background and never
            receives it.
          </p>

          <h2 className={H2} style={HEAD}>
            Analytics, tracking, and purchases
          </h2>
          <p>
            TapJournal does not collect analytics, telemetry, crash reports of
            its own, advertising identifiers, or usage data of any kind. It
            contains no third-party tracking. TapJournal is currently free and
            does not process purchases. If paid features are added, this policy
            will be updated before they ship.
          </p>

          <h2 className={H2} style={HEAD}>
            Notifications
          </h2>
          <p>
            Optional reminders are scheduled on your phone and use fixed text.
            They never include anything from your journal.
          </p>

          <h2 className={H2} style={HEAD}>
            Deleting your data
          </h2>
          <p>
            Settings &rarr; Privacy &rarr; Clear All Data permanently deletes
            every entry, experience, category, person, custom feeling word,
            your About You text, and your writing-style preference from the
            device. Deleting the app does the same. Because nothing is stored
            with us, there is nothing further to request.
          </p>
          <p>
            The Export option creates a plain-text copy of your journal for
            you to save or share. Where you send it is up to you; TapJournal
            deletes its temporary copy as soon as the share sheet closes.
          </p>

          <h2 className={H2} style={HEAD}>
            Children
          </h2>
          <p>
            TapJournal is not directed at children under 13, and we do not
            knowingly collect personal information from anyone. We can&apos;t,
            since nothing is collected.
          </p>

          <h2 className={H2} style={HEAD}>
            Changes to this policy
          </h2>
          <p>
            If TapJournal ever adds a feature that sends data off your device,
            such as cloud AI or sync, this page will say exactly what is sent,
            to whom, and why, and the app will ask before doing it.
          </p>

          <h2 className={H2} style={HEAD}>
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
