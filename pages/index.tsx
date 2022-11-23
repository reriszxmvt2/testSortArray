import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  const collection_1: number[] = [2, 4, 6, 8]
  const collection_2: number[] = [1, 3, 5, 7]

  let collection: any = collection_1.concat(collection_2)

  // let collectionSort: any = collection.forEach((item: any, index: any) => {
  //   if (item < collection[index - 1]) {
  //     collection[index] = collection[index - 1]
  //     collection[index - 1] = item
  //   }
  // })
  // console.log('------------------------------------')

  // console.log(collectionSort)

  function sortArray (collection: any) {
    for (var i = 0; i < collection.length; ++i) {
      for (var j = 0; j < collection.length - 1 - i; ++j) {
        if (collection[j] > collection[j + 1]) {
          ;[collection[j], collection[j + 1]] = [
            collection[j + 1],
            collection[j]
          ]
        }
      }
    }
    return collection
  }

  console.log(sortArray(collection))

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'></main>

      <footer className='flex h-24 w-full items-center justify-center border-t'>
        <a
          className='flex items-center justify-center gap-2'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
