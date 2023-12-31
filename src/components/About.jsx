import Link from 'next/link'
import Image from 'next/image'
import { Card } from './Card'
import { Container } from '@/components/Container'

export const languages = [
  'JavaScript',
  'JSX',
  'TypeScript',
  'Python',
  'HTML',
  'CSS',
  'GDScript',
]
export const tools = [
  'React',
  'Next.js',
  'Node',
  'MongoDB',
  'REST API',
  'Tailwind',
  'Docker',
  'Storybook',
  'Git/GitHub',
  'Wordpress',
  'Elementor',
  'Godot',
]

export default function About() {
  const profilePic =
    'https://res.cloudinary.com/driui30ox/image/upload/q_50//v1/website/x5evgy7znrlaoaqjhr7b'

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={profilePic}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover duration-500 hover:scale-125 dark:bg-zinc-800"
              width="450"
              height="450"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hey, I’m Galit!
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved making things for as long as I can remember. I made my
              first FTP client/SQL server and website when I was 10 years old on
              my family's Windows 98 computer.
            </p>
            <p>
              When I'm not making websites, you can find me{' '}
              <Link
                href="/games"
                className="text-teal-700 dark:text-teal-400 dark:hover:text-zinc-300"
              >
                participating in a game jam
              </Link>
              , playing video games,{' '}
              <Link
                href="https://www.instagram.com/galit_ie/"
                target="_blank"
                className="text-teal-700 dark:text-teal-400 dark:hover:text-zinc-300"
              >
                face painting
              </Link>{' '}
              and{' '}
              <Link
                href="https://www.youtube.com/watch?v=j933cA2Aq1g&ab_channel=GalitDances"
                target="_blank"
                className="text-teal-700 dark:text-teal-400 dark:hover:text-zinc-300"
              >
                dancing lindy hop.{' '}
              </Link>
            </p>
            <Card.Badge>{languages}</Card.Badge>
            <Card.Badge>{tools}</Card.Badge>
          </div>
        </div>
      </div>
    </Container>
  )
}
