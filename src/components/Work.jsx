import Image from 'next/image'
import { Card } from '@/components/Card'
import Link from 'next/link'

export const work = [
  {
    name: 'Elopement Photography Awards',
    description:
      'A multi-page website for a photography awards site, which includes users and photo submission forms.',
    link: {
      href: 'https://elopementphotographyawards.com/',
      label: 'Live link to Elopement Photography Awards',
    },
    logo: 'https://res.cloudinary.com/driui30ox/image/upload/q_50/v1//website/AwardCircleInstagram_ihuwrp',
    stack: ['Wordpress', 'HTML', 'CSS', 'Elementor'],
  },
  {
    name: 'Corner Pocket',
    description:
      'Currently a work in progress - A dance registration site made by and for Lindy Hoppers. I am responsible for creating components such as modals for the site.',
    logo: 'https://res.cloudinary.com/driui30ox/image/upload/q_50/v1/website/q3w61rufkefm5dil3kwl',
    stack: ['React', 'Nextjs', 'Tailwind CSS', 'Docker', 'JSX'],
  },
  {
    name: 'Flouer Dances',
    description:
      'A multi-page website for Flouer who has a Dance and Embodiment business.',
    link: {
      href: 'https://flouerdances.com/',
      label: 'Live link to Flouer Dances',
    },
    logo: 'https://res.cloudinary.com/driui30ox/image/upload/q_50/v1705010311/website/website_icon_jclleh.png',
    stack: ['Wordpress', 'HTML', 'CSS', 'Elementor'],
  },
  {
    name: 'Portfolio',
    description:
      "You're looking at it - This personal website! Pretty neat, huh?",
    link: { href: 'https://www.Galitie.com', label: 'Live link to Portfolio' },
    github: {
      href: 'https://github.com/Galitie/portfolio',
      label: 'GitHub for Portfolio',
    },
    logo: 'https://res.cloudinary.com/driui30ox/image/upload/q_50/v1/website/snlnelz09qyzgwyqdnf7',
    stack: ['React', 'Nextjs', 'Tailwind CSS', 'JSX'],
  },
  {
    name: 'Shamrock Government Solutions',
    description:
      'A clean one page website for a client specializing in C Suite level consulting expertise for growing & transitioning companies.',
    link: {
      href: 'https://shamrockgovermentsolutions.com/',
      label: 'Live link to Shamrock Government Solutions',
    },
    logo: 'https://res.cloudinary.com/driui30ox/image/upload/q_50/v1/website/usqrmsqfbc6qgoppjyyj',
    stack: ['Wordpress', 'HTML', 'CSS', 'Elementor'],
  },
  {
    name: 'Katherine Lund - Portfolio',
    description:
      'A single page site for Katherine Lund, a professional actor and model based in NYC.',
    link: {
      href: 'https://www.kathrinelund.com/',
      label: 'Live link to Katherine Lund',
    },
    logo: 'https://res.cloudinary.com/driui30ox/image/upload/q_50/v1/website/tlqdj4smsmvti2mpuoht',
    stack: ['HTML', 'CSS', 'Google Sites'],
  },
  {
    name: 'Virtual Chair',
    description:
      'A multi-page site for an academic conference production company.',
    link: {
      href: 'https://www.virtualchair.net/',
      label: 'Live link to Virtual Chair',
    },
    logo: 'https://res.cloudinary.com/driui30ox/image/upload/q_50/v1/website/lh19l9ryetucsfaqdjya',
    stack: ['Javascript', 'HTML', 'CSS', 'Wix'],
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Work() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {work.map((client) => (
        <Card
          as="li"
          key={client.name}
          className="rounded-2xl border border-zinc-200 p-5 transition duration-200 hover:bg-zinc-200 dark:border-zinc-800 dark:hover:bg-zinc-800"
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <a
                href={
                  client.link
                    ? client.link.href
                    : client.link
                    ? client.link.github
                    : ''
                }
                target={client.link ? '_blank' : ''}
                style={
                  client.link ? { cursor: 'pointer' } : { cursor: 'default' }
                }
                aria-label={client.link ? client.link.label : ''}
                alt={client.link ? client.link.label : ''}
              >
                <Image
                  src={client.logo}
                  alt=""
                  className="aspect-square w-full rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  width="300"
                  height="300"
                />
              </a>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <p>{client.name}</p>
              </h2>
              <Card.Description>{client.description}</Card.Description>
            </div>
            <div>
              <Card.Badge>{client.stack}</Card.Badge>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-teal-700 transition hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-500 ">
                {client.link ? (
                  <>
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <Link
                      href={client.link.href}
                      className="ml-2"
                      target="_blank"
                      aria-label={client.link.label}
                    >
                      Live link
                    </Link>
                  </>
                ) : (
                  console.log('No client link')
                )}
              </p>
              <p className="relative z-10 mt-2 flex text-sm font-medium text-teal-700 transition hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-500">
                {client.github ? (
                  <>
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <Link
                      href={client.github.href}
                      className="ml-2"
                      target="_blank"
                      aria-label={client.github.label}
                    >
                      GitHub
                    </Link>
                  </>
                ) : (
                  console.log('no github link')
                )}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </ul>
  )
}
