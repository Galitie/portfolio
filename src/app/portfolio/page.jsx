import Work from '@/components/Work'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Portfolio',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function WorkPage() {
  return (
    <SimpleLayout
      title="Selected work :"
      intro="I’ve worked on tons of projects over the years for clients but these are the ones that I’m most proud of. I've done a variety of work, from creating components to designing and developing full sites for clients. Contact me if you would like to work together!"
    >
      <Work />
    </SimpleLayout>
  )
}
