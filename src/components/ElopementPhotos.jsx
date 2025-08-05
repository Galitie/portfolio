import Image from 'next/image'
import clsx from 'clsx'

export function ElopementPhotos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  const [image1, image2, image3, image4, image5] = [
    'https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/518206395_10237229809834141_8763346305111480296_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=X9zNkFOt9VMQ7kNvwGJFNqx&_nc_oc=Adl4ZeHZPlcCQIdvwg2JzZ3BWhjtTQK4Y9g_ebY06nWHDUwEk03EsvTdJYqbRV6dPxIZwN6WzA2UjKw0yftLRZrk&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=nFyuasg6HfakLiIw1qC_Fg&oh=00_AfVeikpLlAAYi_Diryz0q40zcLQot3fNeG5GNYKxvZBdaw&oe=689602A8',
    'https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/502377731_10236361282401498_8364494746685559745_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Yu3tlGljCZsQ7kNvwEh7ZQe&_nc_oc=AdnUhcZAXS5W0jNJX2lP5gEKuPh6EPuHgRP4D9eTXeoeqaZnHIRh6wa1xtcC67AzfY5RzndOZDD6j-9JOKN95Uc7&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=FUiEYYydZieLyY_M2AUeHA&oh=00_AfUoqhU4Ox02g68MRVpXSZIkcb8NBYZxGu85TjzsaS-MQg&oe=6895E979',
    'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/498645253_10236361282041489_6876123818077847866_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3PXp3uY14pQQ7kNvwE3FzWI&_nc_oc=AdkBau54clGbNRTy1dkz9x0qbyxJLcP3CErRI_kWpXOny1G6vY_DZHinOgjzL5qm7RRfZuYYK83VWMPcwM08-Hvi&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=AofGKF-Oz3zv9oAN5YwYsg&oh=00_AfWeTAYN4iQ1zj6iVpb2iFJkneRLLHoWGuhDcFgqM9LmBw&oe=6895F848',
    'https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/506494822_10236361283641529_5927635205028431349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EySLjouGUkoQ7kNvwHiEiqr&_nc_oc=AdnROb_BQukVo43vyzzWGuVyU9qC_jYmTEuFEWBruSkKx1DC4q-yAc7fQKRBPWOavFtQPBlQvactzkTTjgPwo2ou&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=cUabo05Tx7bALRWHZ6zZwA&oh=00_AfVprN_AvmO8wb4qLuwzBVaWG3LDDNZBeDEgFUexzYCbqA&oe=68960CBA',
    'https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/502576663_10236361282721506_5855853892158384731_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GELWoiHNgiAQ7kNvwG1EZDz&_nc_oc=AdlhShPQpGz1moCSLwo8mK15X7gS8WNf_Ir1RaYB4qRDqNTwrxDz0XeFSKyyDo_h8gzLollnqezTYa8UCDRnFQ5S&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=hpGndSRWIFFbooD_BWMfbQ&oh=00_AfUPjVwmNPPX6dY67GnHmJZhe4NwLC-5esM9kpSM2a3JUA&oe=6895FBF9',
  ]
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 duration-500 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              width="0"
              height="0"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
