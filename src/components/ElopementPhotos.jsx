import Image from 'next/image'
import clsx from 'clsx'

export function ElopementPhotos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  const [image1, image2, image3, image4, image5] = [
    'https://res.cloudinary.com/driui30ox/image/upload/v1756740837/elope/20240621_Carson_Galit_MironaPhotographie-38_tnau6i.jpg',
    'https://res.cloudinary.com/driui30ox/image/upload/v1756740803/elope/20240621_Carson_Galit_MironaPhotographie-149_uaucft.jpg',
    'https://res.cloudinary.com/driui30ox/image/upload/v1756740776/elope/20240621_Carson_Galit_MironaPhotographie-17_qcxiv1.jpg',
    'https://res.cloudinary.com/driui30ox/image/upload/v1756740823/elope/20240621_Carson_Galit_MironaPhotographie-137_cpxlzo.jpg',
    'https://res.cloudinary.com/driui30ox/image/upload/v1756740780/elope/20240621_Carson_Galit_MironaPhotographie-23_rrhn3f.jpg',
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
