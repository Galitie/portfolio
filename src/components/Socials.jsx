import Link from 'next/link'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

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
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
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
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
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

function SocialLink({ icon: Icon, text, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <span className="group flex gap-1 text-sm font-medium text-zinc-800 transition hover:text-teal-700 dark:text-teal-400 dark:hover:text-zinc-300">
        <Icon className="h-6 w-6 fill-teal-700 transition group-hover:fill-zinc-600 dark:fill-teal-400 dark:group-hover:fill-zinc-300" />
        {text}
      </span>
    </Link>
  )
}

export default function Socials() {
  return (
    <div className=" mt-6 flex flex-wrap gap-6">
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
        href="https://twitter.com/galit_ie"
        aria-label="Follow on Twitter"
        icon={TwitterIcon}
        target="_blank"
        text="Twitter"
      />
      <SocialLink
        href="https://www.instagram.com/galit_ie/"
        aria-label="Follow on Instagram"
        icon={InstagramIcon}
        target="_blank"
        text="Instagram"
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
