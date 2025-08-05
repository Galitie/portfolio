import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ElopementPhotos } from '@/components/elopementPhotos'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  name: 'robots',
  content: 'noindex',
}

export default async function Elopement() {
  return (
    <>
      <Container className="mt-16 lg:mt-24">
        <div className="max-w-2xl">
          <h2 className="mt-6 text-4xl font-bold text-zinc-600 dark:text-zinc-400">
            CARSON & GALIT'S
          </h2>
          <h1 className="text-4xl font-bold uppercase tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            elopement page 💍
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Folks have been asking where they can send us a gift for our
            elopement trip so we whipped up a page with some links and photos.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            If you would like to buy us dinner for one night of our trip (~$60)
            please feel free to use the links below!
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            - xo Galit & Carson
          </p>
        </div>
        <div className="flex gap-8">
          <Button
            href="https://www.paypal.com/paypalme/galitdances"
            variant="primary"
            className="group mt-6 dark:text-teal-300"
            target="_blank"
          >
            ❤️ Paypal Link
          </Button>
          <Button
            href="https://venmo.com/u/Galit-Weinfeld"
            variant="primary"
            className="group mt-6 dark:text-teal-300"
            target="_blank"
          >
            ❤️ Venmo Link
          </Button>
        </div>
      </Container>
      <ElopementPhotos />

      <Container className="mt-24 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src="https://www.datocms-assets.com/101439/1700902043-icons-of-japan.jpg?auto=format&fit=crop&h=800&w=1200"
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
              GOING TO JAPAN
            </h1>
            <h2 className="text-4xl font-bold uppercase text-zinc-600 dark:text-zinc-400">
              Tokyo, Hakone, Kyoto, Osaka
            </h2>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                We're so excited to see Japan! We will be staying in a Ryokan,
                viewing the cherry blossoms, taking the bullet train, visiting
                museums, eating lots of good food and visiting many castles and
                temples.
              </p>
              <p>
                With photos taken by our wonderful friend{' '}
                <Link
                  href="https://lucyschultzphotography.com/"
                  className="text-teal-700 underline dark:text-teal-400 dark:hover:text-zinc-300"
                  target="_blank"
                >
                  Lucy Schultz Photography
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src="https://static.toiimg.com/thumb/111258523/Seoul-South-Korea.jpg?width=1200&height=900"
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square -rotate-3 rounded-2xl bg-zinc-100 object-cover duration-500 hover:scale-125 dark:bg-zinc-800"
                width="450"
                height="450"
              />
            </div>
          </div>
          <div className="lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              VISITING KOREA
            </h1>
            <h2 className="text-4xl font-bold text-zinc-600 dark:text-zinc-400">
              SEOUL
            </h2>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                We are planning on doing a tea ceremony, visiting museums and
                eating lots of good food!
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/502579348_10235975562038730_3383069361052283471_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UO0xBYfXkF0Q7kNvwFH-GpB&_nc_oc=AdnAMOZfOqEBkG99PUPDVZibvZm1UDX3euBE3SBJ1Ng0PWO4GWH3y8adAlADRsS8BwUJG0s5zoAOHvo7cDenFNMg&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=DZHoRb5HE0PjddK6iz3bzQ&oh=00_AfW15JnSyZ2qFQxZIJQpHBr3YmP_jzn_5z9vK-C-zox8Kg&oe=68960AA6"
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
              MISSING CLEO
            </h1>
            <h2 className="text-4xl font-bold uppercase text-zinc-600 dark:text-zinc-400">
              Like, a lot
            </h2>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Our 5 year old baby, Cleo, will be in the very capable and
                loving hands of Michael and Jolie. {'<3'}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
