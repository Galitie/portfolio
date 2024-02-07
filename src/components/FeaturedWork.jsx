import Image from 'next/image'
import { Card } from '@/components/Card'
import Link from 'next/link'
import { work } from '@/components/Work'
import { Button } from './Button'

const featuredWork = work[0]

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

function HeartIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function FeaturedWork() {
  return (
    <Card
      as="li"
      key={featuredWork.name}
      className="max-w-sm rounded-2xl border border-zinc-100 p-6 transition duration-200 dark:border-zinc-700/40 dark:bg-zinc-900 "
    >
      <h2 className=" mb-4 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <HeartIcon />
        <span className="ml-3">Featured Work</span>
      </h2>
      <a
        href={
          featuredWork.link
            ? featuredWork.link.href
            : featuredWork.link
            ? featuredWork.link.github
            : ''
        }
        target={featuredWork.link ? '_blank' : ''}
        style={
          featuredWork.link ? { cursor: 'pointer' } : { cursor: 'default' }
        }
        aria-label="Live link to featured work"
      >
        <Image
          src={featuredWork.logo}
          alt={featuredWork.link.label}
          className="aspect-square w-full rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          width="300"
          height="300"
        />
      </a>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <p>{featuredWork.name}</p>
      </h2>
      <Card.Description>{featuredWork.description}</Card.Description>
      <Card.Badge>{featuredWork.stack}</Card.Badge>
      <p className="relative z-10 mt-4 flex text-sm font-medium text-teal-700 transition hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-500">
        {featuredWork.link ? (
          <LinkIcon className="h-6 w-6 flex-none" />
        ) : (
          console.log('hmmm')
        )}

        {featuredWork.link ? (
          <Link
            href={featuredWork.link.href}
            className="ml-2"
            target="_blank"
            aria-label="Live link to featured work"
          >
            Live link
          </Link>
        ) : (
          console.log('hmmm')
        )}
      </p>
      <p className="relative z-10 mt-2 flex text-sm font-medium text-teal-700 transition hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-500">
        {featuredWork.github ? (
          <LinkIcon className="h-6 w-6 flex-none" />
        ) : (
          console.log('hmmm')
        )}

        {featuredWork.github ? (
          <Link
            href={featuredWork.github.href}
            className="ml-2"
            target="_blank"
            aria-label="Github link to featured work"
          >
            Github
          </Link>
        ) : (
          console.log('hmmm')
        )}
      </p>
      <Button
        href="/portfolio"
        variant="secondary"
        className="group mt-6 w-full dark:text-teal-300"
      >
        View Portfolio
        <ArrowDownIcon className="h-4 w-4 stroke-teal-700 transition group-active:stroke-zinc-600 dark:group-hover:stroke-teal-50 dark:group-active:stroke-teal-50" />
      </Button>
    </Card>
  )
}
