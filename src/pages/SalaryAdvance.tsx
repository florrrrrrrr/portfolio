import React from 'react'
import { Link } from 'react-router-dom'

const SA = (file: string) => `/images/Salary%20Advance/${file}`

export default function SalaryAdvance() {
  return (
    <article className="max-w-[800px] mx-auto px-6 pt-16 pb-24">
      <Link to="/" className="text-sm text-muted hover:text-ink transition-colors">
        ← Back to work
      </Link>

      {/* Header */}
      <div className="mt-12">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Salary Advance</p>
        <h1 className="mt-3 font-bold leading-tight text-ink" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
          Salary Advance
        </h1>
        <p className="mt-3 text-sm text-muted">PayFit – 2021 – 2 months – Web</p>
      </div>

      {/* Hero */}
      <div className="mt-8 rounded-xl overflow-hidden bg-[#1B3A6B]">
        <img
          src={SA('salary%20advance-intro-full.png')}
          alt="Salary Advance — PayFit"
          className="w-full"
        />
      </div>

      {/* Challenge */}
      <Section label="Challenge">
        <Body>
          Redesign the existing Salary Advance experience to increase user adoption and satisfaction.
        </Body>
      </Section>

      {/* The team */}
      <Section label="The team">
        <Body>
          The Payment team handle all things money – salaries, expenses, and features like
          Salary Advance. They keep the money flowing smoothly for both employees and businesses.
        </Body>
      </Section>

      {/* My Role */}
      <Section label="My Role">
        <Body>
          I worked on this project from end to end in collaboration with a PM, and Engineering
          Manager, and two engineers.
        </Body>
      </Section>

      {/* Impact — top */}
      <div className="mt-12 grid grid-cols-2 gap-8 border-t border-b border-[#E5E5E5] py-8">
        <div>
          <p className="text-5xl font-bold text-ink">+30%</p>
          <p className="mt-2 text-sm font-semibold text-ink">User adoption</p>
          <p className="text-sm text-muted">25 000 to 32 500 active users</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-ink">76%</p>
          <p className="mt-2 text-sm font-semibold text-ink">Completion rate</p>
          <p className="text-sm text-muted">vs. 62%</p>
        </div>
      </div>

      {/* Discovery */}
      <Section label="Discovery" title="How the Salary Advance feature works?">
        <BulletList
          items={[
            'Employees can conveniently request an advance through the app, specifying the desired amount.',
            'The platform ensures responsible borrowing with pre-set limits based on salary. An administrator may review the request.',
            "Once approved, the advance is securely transferred to the employee's designated account.",
            'Repayment is automatic, deducted from the next paycheck, simplifying the process.',
          ]}
        />
      </Section>

      {/* Former experience and audit */}
      <Section label="Former experience and audit">
        <ImageWithProblems
          src={SA('Frame%201.png')}
          alt="Old home page"
          caption="Home page"
          problems={[
            'Huge empty page',
            'No reassurance',
            'No explanation',
            'Not engaging',
          ]}
        />
        <Body>
          Also, it is possible to make only one request per month, but it is technically
          possible to make several. These requests are rejected, and this is frustrating
          for the user.
        </Body>
        <ImageWithProblems
          src={SA('Frame%201-1.png')}
          alt="Old request modal"
          caption="Ask for a request"
          problems={[
            'Saying it is a "Beta" is not reassuring at all',
            'It is difficult to know how to fill in the comment box, and it could be a blocker',
          ]}
        />
        <ImageWithProblems
          src={SA('Frame%201-2.png')}
          alt="Request done feedback"
          caption="Request done feedback"
          problems={[
            'No information of who received the request',
            'No explanation of the next steps',
            'You go back to the empty home page instead of your request',
          ]}
        />
        <ImageWithProblems
          src={SA('Frame%201-3.png')}
          alt="Reviewing request"
          caption="Reviewing request"
          problems={[
            'To have the details of your request you should click on the first item in the list',
            'The page is quite empty',
          ]}
        />
      </Section>

      {/* Assumptions and research */}
      <Section label="Assumptions and research">
        <CaseImg
          src={SA('Capture-d%C3%A9cran-2022-01-09-%C3%A0-19.55%201.png')}
          alt="Hypotheses log"
        />
        <p className="text-sm font-semibold text-ink">Starting with assumptions</p>

        <div>
          <p className="text-sm font-semibold text-ink mb-3">Conclusion of the research</p>
          <Body>
            To validate our assumptions and gain user insights, we conducted interviews with
            seven employees – both those who were new to the feature and those who had already
            used it. Here are the three main pain points we identified.
          </Body>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <ProblemCard
            title="Problem 1"
            text="They don't understand how Advance Salary works, so they don't use it."
          />
          <ProblemCard
            title="Problem 2"
            text="Requests are rejected because they are not compliant with the rules"
          />
          <ProblemCard
            title="Problem 3"
            text="They did not understand if their request had been sent successfully"
          />
        </div>
      </Section>

      {/* Ideation and Conceptualization */}
      <Section label="Ideation and Conceptualization">
        <Body>
          After iterating with the PM and engineering, and validating prototypes with users,
          here are the final high fidelity designs
        </Body>

        <ImageWithImprovements
          src={SA('Home%20-%200%20request.png')}
          alt="New home page"
          caption="Home page"
          improvements={[
            'More engaging',
            'More emotional',
            'More reassuring',
            'Rules are clearer',
          ]}
        />

        <ImageWithImprovements
          src={SA('Request.png')}
          alt="Make a request — empty state"
          caption="Make a request"
          improvements={[
            'In the amount field, you are reminded of the maximum amount you can request',
            'In the comment field, a default text is proposed',
            'There is help around, which brings empathy, and accompanies and encourages the user.',
          ]}
        />

        <ImageWithImprovements
          src={SA('Request2.png')}
          alt="Make a request — amount filled"
          caption="Make a request"
          improvements={[
            'Once the amount has been filled in, it is possible to make the request with an engaging button "request salary advance".',
          ]}
        />

        <ImageWithImprovements
          src={SA('Frame%20201.png')}
          alt="Request submitted — confirmation and history"
          caption="Make a request"
          improvements={[
            'Once validated the user receives a notification with information on who has received the request, and how soon it should be validated.',
            'It is no longer technically possible to make several requests per month, which avoids frustration.',
          ]}
        />
      </Section>

      {/* Impact — bottom */}
      <section className="mt-16">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Impact</p>
        <div className="mt-6 grid grid-cols-2 gap-8 border-t border-[#E5E5E5] pt-8">
          <div>
            <p className="text-5xl font-bold text-ink">+30%</p>
            <p className="mt-2 text-sm font-semibold text-ink">User adoption</p>
            <p className="text-sm text-muted">25 000 to 32 500 active users</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-ink">76%</p>
            <p className="mt-2 text-sm font-semibold text-ink">Completion rate</p>
            <p className="text-sm text-muted">vs. 62%</p>
          </div>
        </div>
      </section>
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

function CaseImg({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure>
      <div className="rounded-xl overflow-hidden bg-[#F5F5F5]">
        <img src={src} alt={alt} className="w-full" loading="lazy" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-muted text-center">{caption}</figcaption>
      )}
    </figure>
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
      {label && <p className="text-sm font-semibold text-ink mb-3">{label}</p>}
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

function ImageWithProblems({
  src,
  alt,
  caption,
  problems,
}: {
  src: string
  alt: string
  caption: string
  problems: string[]
}) {
  return (
    <div className="space-y-3">
      <CaseImg src={src} alt={alt} />
      <p className="text-sm font-semibold text-ink">{caption}</p>
      <div>
        <p className="text-sm font-medium text-ink mb-2">Problem identified:</p>
        <ul className="space-y-1">
          {problems.map((p) => (
            <li key={p} className="flex gap-2 text-sm text-muted">
              <span className="flex-shrink-0">→</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ImageWithImprovements({
  src,
  alt,
  caption,
  improvements,
}: {
  src: string
  alt: string
  caption: string
  improvements: string[]
}) {
  return (
    <div className="space-y-3">
      <CaseImg src={src} alt={alt} />
      <p className="text-sm font-semibold text-ink">{caption}</p>
      <div>
        <p className="text-sm font-medium text-ink mb-2">Improvements:</p>
        <ul className="space-y-1">
          {improvements.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted">
              <span className="flex-shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
