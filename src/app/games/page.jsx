import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Games',
  description: 'Games I have created.',
}

export const games = [
  {
    name: 'Cat Summoner',
    description:
      'Summon cute and devilish cats by making sets with magical runes! See if you can beat all 10 challenging levels!',
    link: {
      href: 'https://galitie.itch.io/cat-summoner',
      label: `Play Cat Summoner`,
    },
    github: {
      href: 'https://github.com/raamweinfeld/Cat-Summoner',
      label: 'GitHub for Cat Summoner',
    },
    logo: 'https://res.cloudinary.com/driui30ox/image/upload/q_50/v1/website/dj4vnmopcq7lahqbwtzf',
    stack: ['Godot'],
  },

  {
    name: 'Meowvana',
    description:
      'The challenge was to make a 20 second game in a short amount of time! We created a clicker game about helping a cat chase away distracting thoughts and reach Meowvana.',
    link: {
      href: 'https://galitie.itch.io/meowvana',
      label: 'Play Meowvana',
    },
    github: {
      href: 'https://github.com/Galitie/20-sec-game-jam/tree/playtest',
      label: 'GitHub for Meowvana',
    },
    logo: 'https://res.cloudinary.com/driui30ox/image/upload/q_50/v1/website/meowvana_ehhz4u',
    stack: ['Godot'],
  },
  {
    name: 'TYLERPG',
    description:
      'A Jackbox-like game where up to 5 mobile users can connect to the game through a mobile website portal. TYLERPG is a novel game that spans genres from RPG to dating simulator.',
    link: {
      href: 'https://drive.google.com/file/d/1_8DpZnU-DipMaxS95fyMPhdro7AFaEXI/view',
      label: 'Preview TYLERPG',
    },
    github: {
      href: 'https://github.com/Galitie/async-mobile-client-app',
      label: 'GitHub for TYLERPG',
    },
    logo: 'https://res.cloudinary.com/driui30ox/image/upload/q_50/v1/website/vvdpjyztabulddaz8xsw',
    stack: ['JavaScript', 'CSS', 'Godot', 'AWS'],
  },
  {
    name: 'Habit Hatcher',
    description:
      'A to-do list with a twist! Complete your tasks to hatch 10 different monsters!',
    link: {
      href: 'https://habit-hatcher.onrender.com/',
      label: 'Live link to Habit Hatcher',
    },
    github: {
      href: 'https://github.com/Galitie/habit-hatcher',
      label: 'GitHub for Habit Hatcher',
    },
    logo: 'https://res.cloudinary.com/driui30ox/image/upload/q_50/v1/website/vk7vhoihgnpi8dwkm1cp',
    stack: ['React', 'CSS', 'Local Storage', 'JSX'],
  },
  {
    name: 'Titans of Gross Anatomy',
    description:
      'Titans of Gross Anatomy is a work in progress. TOGA is a  fusion of a first-person rail shooter and an anatomy education game for your mobile device.',
    logo: 'https://res.cloudinary.com/driui30ox/image/upload/q_50/v1/website/chrj0w99teskstvdigro',
    link: {
      href: 'https://docs.google.com/presentation/d/e/2PACX-1vSKlVLfMYmi8H819QSpq4Mn1YCCyADltH_GkYiRbH_pQDt34Arz_Sg-HrRnqAEBdgHgpnLrld2H-Xgw/pub?start=false&loop=false&delayms=3000',
      label: 'Preview',
    },
    stack: ['Godot', 'Blender'],
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

export default function Games() {
  return (
    <SimpleLayout
      title="Games I have had a hand in creating : "
      intro="In my free time you can find me coding, but as a hobbiest game dev! I am passionate about game design and development. Also I like cats..."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 "
      >
        {games.map((game) => (
          <Card
            as="li"
            key={game.name}
            className="rounded-2xl border border-zinc-200 p-5 transition duration-200 hover:bg-zinc-200 dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <a
                  href={
                    game.link
                      ? game.link.href
                      : game.link
                      ? game.link.github
                      : ''
                  }
                  target={game.link ? '_blank' : ''}
                  style={
                    game.link ? { cursor: 'pointer' } : { cursor: 'default' }
                  }
                  aria-label={game.link ? game.link.label : ''}
                  alt={game.link ? game.link.label : ''}
                >
                  <Image
                    src={game.logo}
                    alt={game.link ? game.link.label : ''}
                    className="aspect-square w-full rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                    width="300"
                    height="300"
                  />
                </a>
                <h2 className="mt-1 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  {game.name}
                </h2>

                <Card.Description>{game.description}</Card.Description>
              </div>
              <div>
                <Card.Badge>{game.stack}</Card.Badge>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-teal-700 transition hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-500 ">
                  {game.link ? (
                    <>
                      <LinkIcon className="h-6 w-6 flex-none" />
                      <Link
                        href={game.link.href}
                        className="ml-2"
                        target="_blank"
                        aria-label={game.link.label}
                      >
                        Play / Preview
                      </Link>
                    </>
                  ) : (
                    console.log('No game link')
                  )}
                </p>
                <p className="relative z-10 mt-2 flex text-sm font-medium text-teal-700 transition hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-500">
                  {game.github ? (
                    <>
                      <LinkIcon className="h-6 w-6 flex-none" />
                      <Link
                        href={game.github.href}
                        className="ml-2"
                        target="_blank"
                        aria-label={game.github.label}
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
    </SimpleLayout>
  )
}
