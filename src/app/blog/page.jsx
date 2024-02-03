import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'Galities Blog Posts',
}

export default function Blog() {
  return (
    <SimpleLayout
      title="Blog Posts:"
      intro="Thoughts about programming, web and game developement!"
    >
      <p>Coming soon!</p>
    </SimpleLayout>
  )
}
