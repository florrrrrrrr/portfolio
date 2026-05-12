import React from 'react'
import { Link } from 'react-router-dom'

const E = (file: string) => `/images/Excellence%20Score/${file}`

export default function ExcellenceScore() {
  return (
    <article className="max-w-[800px] mx-auto px-6 pt-16 pb-24">
      <Link to="/" className="text-sm text-muted hover:text-ink transition-colors">
        ← Back to work
      </Link>

      {/* Header */}
      <div className="mt-12">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Excellence Score</p>
        <h1 className="mt-3 font-bold leading-tight text-ink" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
          When couriers understand the rules, everyone wins.
        </h1>
        <p className="mt-4 text-base text-muted leading-relaxed max-w-[640px]">
          How redesigning a single page increased the average Excellence Score from 3.5 to 4.3
          and improved service quality across Glovo's highest-competition markets.
        </p>
        <p className="mt-3 text-sm text-muted">Glovo – OCT 2023 – 3 months – iOS &amp; Android</p>
      </div>

      {/* Hero */}
      <div className="mt-8 rounded-xl overflow-hidden bg-[#E8F0FE]">
        <img src={E('excellence-score-img.png')} alt="Excellence Score redesign" className="w-full" />
      </div>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-3 gap-6 border-t border-b border-[#E5E5E5] py-8">
        <Stat value="+18%" label="Couriers who understand how their score is calculated" />
        <Stat value="+0.6" label="Average Excellence Score increase across the fleet (out of 5)" />
        <Stat value="+79%" label="Post-launch comprehension rate vs. 61% before" />
      </div>

      {/* The team */}
      <Section label="The team">
        <Body>
          The Quality &amp; Compliance team aims to optimize couriers' performance by encouraging
          best practices and preventing abuse.
        </Body>
      </Section>

      {/* My Role */}
      <Section label="My Role">
        <Body>
          I worked on this project from end to end in collaboration with a PM, a Content Designer,
          a UX Researcher, five engineers, and one data analyst.
        </Body>
      </Section>

      {/* Context */}
      <Section
        label="Context"
        title="A feature that affects every courier's income, barely understood by anyone"
      >
        <Body>
          The Excellence Score is a number out of 5 that ranks couriers when they try to book
          delivery slots. The higher your score, the earlier you get to pick your working hours.
          In highly competitive markets — where hundreds of couriers fight for the same peak-hour
          slots — it's not just a feature. It determines whether you work a profitable shift or
          get leftover time blocks.
        </Body>
        <Body>
          The score is calculated from seven performance metrics, measured over a rolling 28-day
          window, and updated every morning. Each metric carries a different weight. Miss on any
          one of them, and your score drops — quietly, without explanation.
        </Body>
        <Quote>
          "The score exists in markets where courier competition is highest — precisely because
          quality of service matters most at peak hours. It is a core lever for fleet performance.
          But it only works if couriers understand it."
        </Quote>
      </Section>

      {/* Discovery */}
      <Section
        label="Discovery"
        title="We thought the problem was design. It was deeper than that."
      >
        <Body>
          Together with the UX Research team, we started with an audit of the existing experience
          and a series of user interviews. We expected to find visual issues — unclear labels, poor
          hierarchy. What we found was more fundamental.
        </Body>
        <CaseImg
          src={E('current-experience.png')}
          alt="State of the Excellence Score design at the time the project was launched"
          caption="State of the Excellence Score design at the time the project was launched"
        />
        <Body>
          The real problem was that the formula itself is genuinely complex. Seven independent
          metrics. Different calculation windows. Different weights. And the only thing couriers
          saw was a single number — with no path to improvement, no explanation of what changed,
          and no connection to when they could book their next shift.
        </Body>

        <div className="grid sm:grid-cols-2 gap-4">
          <ProblemCard
            title="Comprehension"
            text="Couriers couldn't name more than 2–3 of the 7 metrics affecting their score, even after months on the platform."
          />
          <ProblemCard
            title="Motivation"
            text="There was no indication of score direction — better or worse. Couriers had no idea if their behaviour that week was helping."
          />
          <ProblemCard
            title="Priority"
            text="All metrics appeared equally important. Couriers couldn't tell where to focus their effort when time was limited."
          />
          <ProblemCard
            title="Connection"
            text="Most couriers didn't connect the Excellence Score to their calendar booking time. These felt like two separate systems."
          />
        </div>

        <Body>
          One data point made the business case impossible to ignore: "Fairness and clarity of
          the scoring system" was the 3rd biggest dissatisfaction driver on the platform, with
          29% of couriers actively unhappy. For a metric that directly determines earning
          potential, that number was untenable.
        </Body>

        <Quote>
          "Couriers check their Excellence Score every day — but don't understand how it's
          calculated, don't know how to improve it, and have no visibility into when it unlocks
          their booking window. A system meant to motivate quality is instead generating
          confusion and frustration."
        </Quote>
      </Section>

      {/* Constraints & Scope */}
      <Section
        label="Constraints & Scope"
        title="What we couldn't touch — and what that forced us to do."
      >
        <div>
          <p className="text-sm font-semibold text-ink mb-2">Hard technical constraint</p>
          <Body>
            The formula could not be changed. Engineering had made it clear early: the scoring
            algorithm was off the table. Seven metrics, their weights, and their calculation logic
            were fixed. We couldn't simplify what we measured — only how we communicated it.
            The challenge was making a genuinely complex formula feel legible without dumbing it
            down or misrepresenting it.
          </Body>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink mb-2">Scope constraint</p>
          <Body>
            3 months, one screen. An early conversation with the PM established the priority:
            focus entirely on the Excellence Score page. Surface-level fixes in the delivery
            flow — like real-time performance nudges — were scoped out as a future iteration.
            This was the right call: the page was where couriers went when they had questions.
            It needed to answer them fully before we extended the experience elsewhere.
          </Body>
        </div>
        <Body>
          These constraints weren't obstacles — they were focus. Instead of trying to fix the
          system, we had to design the clearest possible window into it.
        </Body>
      </Section>

      {/* Ideation */}
      <Section
        label="Ideation"
        title="Three workshops. One question: how do you explain complexity without hiding it?"
      >
        <Body>
          I facilitated three ideation sessions with a cross-functional group — PM, Content
          Designer, UX Researchers, fellow Designers, and Engineers. Starting with engineers
          early was intentional: understanding what data was available in real time (and what
          wasn't) shaped which design directions were viable before we fell in love with them.
        </Body>

        <div>
          <p className="text-sm font-semibold text-ink mb-2">1st: Reverse brainstorming</p>
          <Body>
            Instead of asking "how do we fix this?", we started by asking "how would we make
            this even more confusing?" Reversing the question surfaced problems we'd been too
            polite to name directly — like the fact that our metric names were written for
            operations teams, not for couriers on the street.
          </Body>
        </div>
        <CaseImg src={E('reverse-brainstorming.png')} alt="Reverse brainstorming workshop" />
        <BulletList
          label="Identified solutions:"
          items={[
            'Clarify the explanation of the parameters using concise, easy-to-understand sentences and visuals',
            'Highlight the opening time of the booking calendar',
            'Accompany the numerical score with a more intuitive representation',
            'Introduce a comparison feature to benchmark courier performance',
            'Provide comprehensive onboarding to educate couriers about the system',
            'Inspire couriers to excel by employing motivational messages',
            'Offer tailored feedback and suggestions based on individual performance',
            'Offer a daily update with a clear history of performance trends',
          ]}
        />

        <div>
          <p className="text-sm font-semibold text-ink mb-2">2nd: Six to one</p>
          <Body>
            Each participant sketched 6 interface directions in 5 minutes, then we converged
            on 1. This forced speed and divergence before convergence — preventing the group
            from anchoring on the first idea that sounded reasonable.
          </Body>
        </div>
        <CaseImg src={E('6to1.png')} alt="Six to one sketches" />

        <div>
          <p className="text-sm font-semibold text-ink mb-2">Pair designing</p>
          <Body>
            The hardest problem wasn't layout — it was language. Each metric needed a short,
            plain-language explanation that was both accurate and actionable. I co-designed
            this with the Content Designer from the wireframe stage, not as a handoff at the
            end. Getting the words right changed the shape of the UI.
          </Body>
        </div>
        <CaseImg src={E('low-fi-wireframes.png')} alt="Low-fi wireframes with annotated problems" />
        <Body>
          One of the most debated questions: should we show the booking time directly on this
          page? Technically it was available. But it meant surfacing information that lived in
          the Calendar section in a place couriers came to for score information. The decision
          was yes — because couriers already connected the two mentally, just without any help
          from the product.
        </Body>
      </Section>

      {/* Testing */}
      <Section
        label="Testing"
        title="Poland was the right market. Here's why that mattered."
      >
        <Body>
          We ran 7 usability tests in Poland. That choice was deliberate, not a budget shortcut.
          Poland is one of Glovo's most competitive markets — high courier density, significant
          pressure on peak-hour slots, and one of the highest rates of Excellence Score usage.
          If the design worked there, it would transfer.
        </Body>
        <Body>
          We split the sample: 3 new couriers (less than 1 month on the platform) to test
          baseline comprehension, and 4 experienced couriers (around 6 months) to test
          satisfaction and whether the new design felt like a meaningful improvement over
          what they already knew.
        </Body>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 border border-[#E5E5E5] rounded-xl">
            <p className="text-xs uppercase tracking-[0.14em] text-muted mb-4">Validated</p>
            <ul className="space-y-2">
              {[
                'General content and metric descriptions were well understood',
                'Progress bars helped couriers identify what to improve',
                'Tips were perceived as motivating, not punitive',
                'Showing the booking time on this page felt useful and clarifying',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted">
                  <span className="flex-shrink-0">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 border border-[#E5E5E5] rounded-xl">
            <p className="text-xs uppercase tracking-[0.14em] text-muted mb-4">Required iteration</p>
            <ul className="space-y-2">
              {[
                "Couriers didn't understand when the score updates (daily, every morning)",
                'Some metric descriptions still needed clearer language',
                'Onboarding was too long — most couriers skipped it',
                'The alarm concept felt like extra work; push notification preferred',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted">
                  <span className="flex-shrink-0">❌</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Body>
          The update timing issue was the most important finding. Couriers were interpreting
          their score in real time — expecting it to change after each delivery. When it didn't,
          they thought it was broken. We added a clear, permanent indicator showing when the
          score was last updated and when the next update would occur. A small fix with
          significant trust implications.
        </Body>
      </Section>

      {/* Key Decisions */}
      <Section
        label="Key Decisions"
        title="The choices that defined the design"
      >
        <Body>
          Not every solution we generated made it through. Here are the decisions that shaped
          the final product — and why we made them.
        </Body>

        <DecisionCard
          number="Decision 01"
          title="How to represent each metric"
          before="A single aggregate bar for the overall score"
          after="Individual progress bars per metric, with tips to improve each one"
          why="Couriers need to know which metric is dragging their score down — not just that their score is low. An aggregate bar gives you a number. Individual bars give you a direction."
        />
        <DecisionCard
          number="Decision 02"
          title="How to notify couriers about their booking window"
          before="In-app alarm / reminder they set manually"
          after="Push notification sent automatically when booking opens"
          why="During usability tests, couriers found the alarm concept overwhelming — it felt like another thing to manage. A push notification felt like the product working for them, not asking more of them. This was a direct finding from testing, not an assumption."
        />
        <DecisionCard
          number="Decision 03"
          title="How much onboarding to include"
          before="Full onboarding explaining all 7 metrics in detail"
          after="Short onboarding focused on the core principle; details available inline"
          why="Testing revealed that when couriers saw a long onboarding, they skipped it entirely. A shorter introduction got read. Depth was preserved — just moved into the metric cards where it was contextual and relevant."
        />
      </Section>

      {/* Final Design */}
      <Section
        label="Final Design"
        title="Clarity without oversimplification"
      >
        <Body>
          The final UI was built on Glovo's Design System, with new components introduced
          where the existing library couldn't support the interaction patterns we needed —
          particularly the per-metric progress bars and the booking time reminder module.
        </Body>

        <div>
          <p className="text-sm font-semibold text-ink mb-2">Happy path</p>
          <Body>
            Experienced couriers with a full 28-day history. Score is visible, booking time
            is surfaced, each metric shows a progress bar and a specific tip.
          </Body>
        </div>
        <CaseImg
          src={E('happy-path.png')}
          alt="Happy path — experienced courier with full score history"
        />

        <div>
          <p className="text-sm font-semibold text-ink mb-2">Edge case – Newbies</p>
          <Body>
            Couriers in their first 28 days don't have enough data for a full score
            calculation. We designed a transitional state that explains what the score will
            be based on, and encourages them to build good habits from the start rather than
            leaving them with a confusing empty state.
          </Body>
        </div>
        <CaseImg
          src={E('newbies.png')}
          alt="Edge case: new couriers with no score data yet"
        />

        <div>
          <p className="text-sm font-semibold text-ink mb-2">
            Score progress bar and calendar opening time reminder
          </p>
          <Body>
            A persistent indicator showing the last update time and when the next one happens.
            Unglamorous to design. Essential for trust.
          </Body>
        </div>
        <CaseImg
          src={E('progress-bar.png')}
          alt="Colour-coded gauge: red 1.8, amber 3.9, green 5.0"
        />

        <p className="text-sm font-semibold text-ink">Parameters and tips</p>
        <CaseImg
          src={E('metrics-content.png')}
          alt="Dynamic messages per metric per performance band"
        />
      </Section>

      {/* Handoff */}
      <Section label="Handoff">
        <Body>
          Development was divided into 3 sprints. Design deliverables were tailored to each
          sprint to give engineers clear, incremental guidance rather than one monolithic
          handoff.
        </Body>
        <CaseImg
          src={E('prototype.png')}
          alt="Full prototype: entry point, main page, onboarding, and alarm setting"
        />
      </Section>

      {/* Results */}
      <Section
        label="Results"
        title="The score went up. Because couriers finally understood it."
      >
        <Body>
          Impact was measured through two parallel mechanisms: an A/B test comparing the new
          design against the existing one, and an embedded quick-feedback screen to capture
          real-time satisfaction signals from couriers.
        </Body>

        <div className="grid sm:grid-cols-2 gap-8 pt-2">
          <div>
            <p className="text-5xl font-bold text-ink">79%</p>
            <p className="mt-2 text-sm font-medium text-ink">
              Users understand how the Excellence Score works
            </p>
            <p className="mt-1 text-xs text-muted">vs. 61%</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-ink">4.3/5</p>
            <p className="mt-2 text-sm font-medium text-ink">Global average excellence score</p>
            <p className="mt-1 text-xs text-muted">vs. 3.5/5</p>
          </div>
        </div>

        <Body>
          The +0.8 average score increase is the result I'm most proud of. It's not a
          satisfaction metric or a perception shift. It means couriers were actually performing
          better across the platform — fewer cancelled orders, better acceptance rates, higher
          reliability at peak hours. That happened because they could finally see what to
          improve and act on it.
        </Body>
      </Section>

      {/* Learnings */}
      <Section label="Learnings" title="What I'd do differently">
        <div>
          <p className="text-sm font-semibold text-ink mb-2">
            Complexity isn't the enemy — opacity is
          </p>
          <Body>
            My instinct at the start of this project was to simplify the score. Make it feel
            lighter, easier to digest. But couriers weren't overwhelmed by complexity — they
            were frustrated by opacity. They wanted to understand the full formula, not a
            simplified version of it. The design job was to make all seven metrics legible,
            not to hide any of them. That distinction changed everything about the direction
            we took.
          </Body>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink mb-2">
            The alarm was telling us something we almost missed
          </p>
          <Body>
            Couriers setting manual alarms was a workaround we noticed in research. It would
            have been easy to file that as "interesting behaviour" and move on. It was actually
            the clearest signal of the product's failure to connect two pieces of information —
            score and booking time — that couriers were actively trying to link themselves.
            Following that thread led to one of the highest-value features in the final design.
          </Body>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink mb-2">
            Involving engineers before wireframes is not a courtesy — it's a shortcut
          </p>
          <Body>
            Having engineering in the room during ideation meant we knew from day one which
            data was available in real time and which wasn't. Several design directions we
            would have pursued — and potentially tested — were off the table technically.
            Learning that in week one rather than week six was worth more than any tool or
            process we used on this project.
          </Body>
        </div>
      </Section>

      {/* What next */}
      <Section label="What next?" title="The page is fixed. Now we go earlier in the flow.">
        <Body>
          Surfacing score information at the moment it's relevant — during a delivery, not
          after the fact — is the logical next step. If a courier is about to make a decision
          that will hurt their acceptance rate, that's when the feedback matters most. The
          Excellence Score page is where couriers go to understand. The delivery flow is where
          they go to act. Connecting those two is the next design opportunity.
        </Body>
      </Section>
    </article>
  )
}

// ─── Shared components ───────────────────────────────────────────────────────

function Section({
  label,
  title,
  children,
}: {
  label: string
  title?: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-16">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">{label}</p>
      {title && (
        <h2 className="mt-2 text-xl font-bold text-ink leading-snug">{title}</h2>
      )}
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  return <p className="text-base text-muted leading-relaxed">{children}</p>
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="pl-4 border-l-2 border-[#E5E5E5] italic text-muted text-base leading-relaxed">
      {children}
    </blockquote>
  )
}

function CaseImg({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure>
      <div className="rounded-xl overflow-hidden bg-[#F5F5F5]">
        <img src={src} alt={alt} className="w-full" loading="lazy" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-muted text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold text-ink">{value}</p>
      <p className="mt-1 text-sm text-muted leading-snug">{label}</p>
    </div>
  )
}

function ProblemCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="p-5 border border-[#E5E5E5] rounded-xl">
      <p className="text-sm font-semibold text-ink mb-2">{title}</p>
      <p className="text-sm text-muted leading-relaxed">{text}</p>
    </div>
  )
}

function BulletList({ items, label }: { items: string[]; label?: string }) {
  return (
    <div>
      {label && (
        <p className="text-sm font-semibold text-ink mb-3">{label}</p>
      )}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted">
            <span className="flex-shrink-0">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function DecisionCard({
  number,
  title,
  before,
  after,
  why,
}: {
  number: string
  title: string
  before: string
  after: string
  why: string
}) {
  return (
    <div className="p-5 border border-[#E5E5E5] rounded-xl space-y-3">
      <p className="text-xs uppercase tracking-[0.14em] text-muted">{number}</p>
      <p className="text-sm font-semibold text-ink">{title}</p>
      <p className="text-sm text-muted">
        {before}{' '}
        <span className="font-medium text-ink">→</span>{' '}
        {after}
      </p>
      <p className="text-sm text-muted leading-relaxed">
        <span className="font-medium text-ink">Why: </span>
        {why}
      </p>
    </div>
  )
}
