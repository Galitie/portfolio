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
    title: 'Coming Soon',
    href: 'post/coming-soon',
    description: 'Coming soon!',
    imageUrl:
      'https://res.cloudinary.com/driui30ox/image/upload/c_scale,h_500,w_500/q_50/website/d10pv5e9nzg9kxqin7ns.jpg',
    date: 'Feb 3rd, 2024',
    datetime: '2024-02-03',
  },
  {
    id: 2,
    title: 'Coming Soon',
    href: 'post/coming-soon',
    description: 'Coming soon!',
    imageUrl:
      'https://res.cloudinary.com/driui30ox/image/upload/q_50/v1/website/snlnelz09qyzgwyqdnf7',
    date: 'Feb 4th, 2024',
    datetime: '2024-04-03',
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
