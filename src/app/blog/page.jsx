import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'Galities Blog Posts',
}

const postsPreview = [
  {
    id: 1,
    title: 'Make Beautiful Websites - Elementor for Wordpress',
    href: 'blog/elementor',
    description:
      'Is your website editor on Wordpress not giving you enough options? I reccommend the Elementor plugin with two thumbs way up.',
    imageUrl:
      'https://elementor.com/cdn-cgi/image/f=auto,w=651/https://elementor.com/wp-content/uploads/2021/05/Create-Websites-image-1-1.png',
    date: 'Feb 6th, 2024',
    datetime: '2024-02-06',
  },
  // More posts...
]

export default function Blog() {
  return (
    <SimpleLayout
      title="Blog Posts:"
      intro="Thoughts about programming, web and game developement!"
    >
      <div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {postsPreview.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                >
                  <Link href={post.href}>
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                      <img
                        src={post.imageUrl}
                        alt=""
                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </Link>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs text-zinc-400">
                      <time dateTime={post.datetime} className="">
                        {post.date}
                      </time>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-teal-400 group-hover:text-zinc-300">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-zinc-400">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}
