export type Project = {
  slug: string
  label: string // e.g. "Excellence Score – Glovo – 2023"
  title: string
  description: string
  image: string
  // Optional: full case study content
  content?: {
    role?: string
    year?: string
    company?: string
    overview?: string
  }
}

export const projects: Project[] = [
  {
    slug: 'excellence-score',
    label: 'Excellence Score — Glovo — 2023',
    title: 'When couriers understand the rules, everyone wins',
    description:
      'Glovo ranks couriers by their Excellence Score to allocate the best delivery slots. 29% were dissatisfied with the system. I redesigned the page that explains it — lifting the average fleet score from 3.5 to 4.3 and comprehension by 18%.',
    image: '/images/excellence-score.png',
    content: {
      role: 'Lead Product Designer',
      year: '2023',
      company: 'Glovo',
      overview:
        'Glovo ranks couriers by their Excellence Score to allocate the best delivery slots. 29% were dissatisfied with the system, and the explanation page was unclear. I led a redesign focused on clarity and transparency, working closely with PMs and data scientists to surface the right information at the right time.',
    },
  },
  {
    slug: 'salary-advance',
    label: 'Salary Advance — PayFit — 2021',
    title: '7,500 more employees now use a feature that was always there',
    description:
      'PayFit\u2019s Salary Advance let employees access their wages before payday — but only 25,000 used it. The experience was empty, confusing, and offered no reassurance. A 2-month redesign focused on clarity and trust drove adoption from 25,000 to 32,500 users and completion from 62% to 76%.',
    image: '/images/salary-advance.png',
    content: {
      role: 'Product Designer',
      year: '2021',
      company: 'PayFit',
      overview:
        'PayFit\u2019s Salary Advance feature let employees access their wages before payday — but only 25,000 used it. The empty state was confusing and offered no reassurance about how it worked. Through user interviews and iterative prototyping, I redesigned the experience to focus on clarity and trust.',
    },
  },
  {
    slug: 'adjustment-tool',
    label: 'Adjustment tool — PayFit — 2021',
    title: 'Fixing payroll errors used to take weeks. Now it takes minutes.',
    description:
      'PayFit\u2019s declaration teams were fixing payroll errors by jumping between four tools, copying values into Excel, and running manual calculations for hours. One mistake could impact a customer\u2019s payslip directly. I shadowed teams across France, Spain, Germany, and the UK — and designed a tool that reduced a multi-day process to minutes.',
    image: '/images/adjustment-tool.png',
    content: {
      role: 'Product Designer',
      year: '2021',
      company: 'PayFit',
      overview:
        'PayFit\u2019s declaration teams were fixing payroll errors manually, jumping between four tools and using Excel for calculations. I shadowed teams in France, Spain, Germany, and the UK to understand their workflows, then designed an integrated tool that turned a multi-day process into a matter of minutes.',
    },
  },
]
