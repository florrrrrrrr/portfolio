export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 sm:pt-32 pb-16">
      {/* Profile + intro */}
      <section className="grid sm:grid-cols-[280px_1fr] gap-12 items-start">
        <div className="reveal">
          <div className="rounded-2xl overflow-hidden bg-ink/5 aspect-[4/5]">
            <img
              src="/images/flo-profil.jpg"
              alt="Florent Martinez"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </div>

        <div className="reveal reveal-delay-1 space-y-6 text-lg leading-relaxed text-ink/85 max-w-prose">
          <p>
            From the peaks of the French Alps to the shores of Barcelona,
            I&apos;ve spent my life meandering between the realms of design and
            UX research. This journey has ignited a passion within me to craft
            products that not only serve their purpose but also transport users
            into a world of delight and engagement.
          </p>
          <p>
            As a seasoned product designer, I bring a unique perspective to the
            table, infused with insights gleaned from my UX research background.
            My understanding of human behavior guides me in creating experiences
            that transcend mere functionality, infusing them with an essence of
            joy and ease.
          </p>
          <p>
            Beyond the digital realm, you&apos;ll find me immersing myself in
            Barcelona&apos;s vibrant culture, engaging in friendly board game
            matches, or basking in the sun&apos;s embrace on the sandy beaches.
            And as a true Catalan{' '}
            <span className="italic">aficionado</span>, I&apos;m always ready to
            indulge in the delectable pleasures of{' '}
            <span className="italic">tapas</span> and{' '}
            <span className="italic">vermut</span>, bringing my enthusiasm to
            any social gathering.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-28">
        <h2 className="font-display text-4xl sm:text-5xl tracking-[-0.02em]">
          My skills
        </h2>

        <div className="mt-12 grid sm:grid-cols-3 gap-12">
          <SkillGroup
            title="UX Research"
            items={[
              'In-depth interviews',
              'Remote interviews',
              'Usability testings',
              'Surveys',
            ]}
          />
          <SkillGroup
            title="Product Design"
            items={[
              'Sketching',
              'Wireframing',
              'Prototyping',
              'Design System',
            ]}
          />
          <SkillGroup
            title="Soft skills"
            items={[
              'Empathic',
              'Enthusiastic',
              'Sociable',
              'French, English & Spanish',
            ]}
          />
        </div>
      </section>

      {/* Contact */}
      <section className="mt-28">
        <h2 className="font-display text-4xl sm:text-5xl tracking-[-0.02em]">
          Say <span className="italic">Hi</span> ✌🏻
        </h2>

        <ul className="mt-10 space-y-4 text-lg">
          <li>
            <a
              href="mailto:hello@florent-martinez.com"
              className="border-b border-ink/30 hover:border-accent hover:text-accent transition-colors pb-0.5"
            >
              hello@florent-martinez.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/florentmartinez/"
              target="_blank"
              rel="noreferrer"
              className="border-b border-ink/30 hover:border-accent hover:text-accent transition-colors pb-0.5"
            >
              LinkedIn
            </a>
          </li>
          <li className="text-muted">
            🇫🇷{' '}
            <a
              href="tel:+33761043964"
              className="hover:text-ink transition-colors"
            >
              +33 7 61 04 39 64
            </a>
          </li>
          <li className="text-muted">
            🇪🇸{' '}
            <a
              href="tel:+34623001244"
              className="hover:text-ink transition-colors"
            >
              +34 623 001 244
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

type SkillGroupProps = { title: string; items: string[] }

function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.18em] text-muted">
        {title}
      </h3>
      <ul className="mt-5 space-y-2 text-base">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
