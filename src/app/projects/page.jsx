import Projects from '@/components/Projects'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Portfolio',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function ProjectsPage() {
  return (
    <SimpleLayout
      title="Work I've done, click a project to see more info:"
      intro="I’ve worked on tons of projects over the years for clients but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <Projects />
    </SimpleLayout>
  )
}
