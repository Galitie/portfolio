import Image from 'next/image'
import clsx from 'clsx'

export function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  const [image1, image2, image3, image4, image5] = [
    'https://res.cloudinary.com/driui30ox/image/upload/f_auto,q_auto/v1/website/vabvk7c4lezbyb36flul',
    'https://res.cloudinary.com/driui30ox/image/upload/f_auto,q_auto/v1/website/rpjze0waodp7zfeg1jlq',
    'https://res.cloudinary.com/driui30ox/image/upload/f_auto,q_auto/v1/website/d10pv5e9nzg9kxqin7ns',
    'https://res.cloudinary.com/driui30ox/image/upload/f_auto,q_auto/v1/website/eyuepnap25c6w4kwnbrp',
    'https://res.cloudinary.com/driui30ox/image/upload/f_auto,q_auto/v1/website/snlnelz09qyzgwyqdnf7',
  ]
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 duration-500 hover:rotate-3 hover:scale-125 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
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
