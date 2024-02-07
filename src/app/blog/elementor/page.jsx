import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'

export const metadata = {
  title: 'Elementor and Wordpress',
  description:
    'Elementor is the perfect tool for building beautiful, easy to edit sites on Wordpress.',
}

export default function Page() {
  return (
    <SimpleLayout>
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-zinc-400">
          Is your wordpress editor holding you back from creating beautiful
          websites?
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          The Elementor plugin for Wordpress may be your best bet!
        </h1>
        <p className="mt-6 text-xl leading-8 text-zinc-400">
          Elementor makes your sites more beautiful than ever in a super easy to
          edit way.
        </p>
        <div className="mt-10 max-w-2xl text-zinc-400">
          <p>This is a placeholder for a future blog post :) </p>
        </div>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://elementor.com/cdn-cgi/image/f=auto,w=847,h=597/https://elementor.com/wp-content/uploads/2023/03/Group-1087165.png"
            alt=""
          />
        </figure>

        <Button
          href="/blog"
          variant="secondary"
          className="group mt-6 dark:text-teal-300"
        >
          Back to Blog Posts
        </Button>
      </div>
    </SimpleLayout>
  )
}
