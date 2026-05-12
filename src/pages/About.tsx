export default function About() {
  return (
    <div className="max-w-[800px] mx-auto px-6 pt-20 pb-24">
      {/* Profile photo + bio */}
      <section className="flex flex-col sm:flex-row sm:items-start gap-10 mb-16">
        <div className="flex-shrink-0">
          <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden bg-[#E5E5E5] flex items-center justify-center">
            <span className="text-muted text-lg font-medium">FM</span>
            <img
              src="/images/flo-profil.jpg"
              alt="Florent Martinez"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-muted max-w-[640px]">
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
            And as a true Catalan <em>aficionado</em>, I&apos;m always ready to
            indulge in the delectable pleasures of <em>tapas</em> and{' '}
            <em>vermut</em>, bringing my enthusiasm to any social gathering.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-lg font-semibold text-ink mb-8">My skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
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
      <section>
        <h2 className="text-lg font-semibold text-ink mb-6">Say Hi ✌🏻</h2>
        <ul className="space-y-3 text-base">
          <li>
            <a
              href="mailto:hello@florent-martinez.com"
              className="text-ink hover:underline"
            >
              hello@florent-martinez.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/florentmartinez/"
              target="_blank"
              rel="noreferrer"
              className="text-ink hover:underline"
            >
              LinkedIn ↗
            </a>
          </li>
          <li className="text-muted">
            🇫🇷{' '}
            <a href="tel:+33761043964" className="hover:text-ink transition-colors">
              +33 7 61 04 39 64
            </a>
          </li>
          <li className="text-muted">
            🇪🇸{' '}
            <a href="tel:+34623001244" className="hover:text-ink transition-colors">
              +34 623 001 244
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-ink mb-3">{title}</h3>
      <ul className="space-y-2 text-sm text-muted">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  )
}
