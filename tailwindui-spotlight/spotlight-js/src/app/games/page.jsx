import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import Link from 'next/link'
import catSummonerImage from '@/images/photos/catSummoner.png'

const games = [
  {
    name: 'Cat Summoner',
    description:
      'Summon cute and devilish cats by making sets with magical runes!',
    link: {
      href: 'https://galitie.itch.io/cat-summoner',
      label: 'Play me!',
    },
    github: {
      href: 'https://github.com/raamweinfeld/Cat-Summoner',
      label: 'Github',
    },
    logo: catSummonerImage,
    stack: ['Godot'],
  },

  {
    name: 'TYLERPG',
    description:
      'A Jackbox like game where mobile users can connect to the game through a website.',
    github: {
      href: 'https://github.com/Galitie/async-mobile-client-app',
      label: 'Github',
    },
    logo: catSummonerImage,
    stack: ['JavaScript', 'CSS', 'Godot', 'AWS'],
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

export const metadata = {
  title: 'Games',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Games() {
  return (
    <SimpleLayout
      title="Games I've made with friends!"
      intro="I’ve worked on tons of little games over the years but these are the ones that I’m most proud of."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 "
      >
        {games.map((game) => (
          <Card
            as="li"
            key={game.name}
            className="rounded-2xl bg-zinc-100 p-5 transition duration-200 hover:bg-zinc-200 dark:bg-zinc-800/25 dark:hover:bg-zinc-800"
          >
            <Image
              src={game.logo}
              alt=""
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
            <h2 className="mt-1 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {game.name}
            </h2>

            <Card.Description>{game.description}</Card.Description>
            <Card.Badge>{game.stack}</Card.Badge>
            <p className="relative z-10 mt-2 flex text-sm font-medium text-teal-400 transition hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-500">
              {game.link ? (
                <LinkIcon className="h-6 w-6 flex-none" />
              ) : (
                console.log('hmmm')
              )}
              {game.link ? (
                <Link href={game.link.href} className="ml-2" target="_blank">
                  {game.link.label}
                </Link>
              ) : (
                console.log('hmmm')
              )}
            </p>
            <p className="relative z-10 mt-2 flex text-sm font-medium text-teal-400 transition hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-500">
              {game.github ? (
                <LinkIcon className="h-6 w-6 flex-none" />
              ) : (
                console.log('hmmm')
              )}

              {game.github ? (
                <Link href={game.github.href} className="ml-2" target="_blank">
                  {game.github.label}
                </Link>
              ) : (
                console.log('hmmm')
              )}
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
