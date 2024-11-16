import Link from 'next/link'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-teal-400 stroke-teal-400 dark:fill-zinc-900 dark:text-teal-400 dark:hover:fill-zinc-300 dark:group-hover:stroke-zinc-300"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-teal-40 dark:stroke-zinc-900"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, text, ...props }) {
  return (
    <Link className="group" {...props}>
      <span className="group flex gap-1 text-sm font-medium text-zinc-800 transition hover:text-teal-700 dark:text-teal-400 dark:hover:text-zinc-300">
        <Icon className="h-6 w-6 fill-teal-700 transition group-hover:fill-zinc-600 dark:fill-teal-400 dark:group-hover:fill-zinc-300" />
        {text}
      </span>
    </Link>
  )
}

export default function Socials() {
  return (
    <div className="mt-6 flex flex-wrap gap-6">
      <SocialLink
        href="https://www.linkedin.com/in/galit-weinfeld/"
        aria-label="Follow on LinkedIn"
        icon={LinkedInIcon}
        target="_blank"
        text="LinkedIn"
      />
      <SocialLink
        href="https://github.com/Galitie"
        aria-label="Follow on GitHub"
        icon={GitHubIcon}
        target="_blank"
        text="GitHub"
      />
      <SocialLink
        href="mailto:gsweinfeld@gmail.com"
        icon={MailIcon}
        target="_blank"
        text="E-mail"
      />
    </div>
  )
}
