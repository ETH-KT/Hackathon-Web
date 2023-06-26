import Image from 'next/image'
import { KeynoteButton, UseCaseCard } from '@/components'
import { UseCardProps } from '@/types'
import { demoUseCardsCollection } from '@/constants'
import React from 'react'

export default function Home() {
  return (
    <main className="main"> 
      <header className="flex justify-between items-end w-full px-[72px] pt-[42px] ">
        <div className="flex">
          <Image src="/Logo.svg" alt="Logo" width={98} height={92} />
        </div>
        <div className="flex space-x-[60px] items-center">
          <div className='flex justify-between space-x-[42px] text-[18px] text-[#333333]'>
            <div>
              <a href='/fauce'>Faucet</a>
            </div>
            <div>
              <a href='https://github.com'>Github</a>
            </div>
            <div>
              <a href='/'>Polkadot.js</a>
            </div>
          </div>
          <KeynoteButton />
        </div>
      </header>

      <div className='px-24 pt-[69px]'>
        <div className='text-[36px] text-black leading-[2.75rem]'>What’s Cybros?</div>
        <div className='whitespace-pre-wrap pr-[232px] pt-[27px]'>
          {`Generate NFT arts with distributed AI compute power on Cybros and mint them on Ethereum. Generate NFT arts with distributed AI compute power on Cybros and mint them on Ethereum. Generate NFT arts with distributed AI compute power on Cybros and mint them on Ethereum. Generate NFT arts with distributed AI compute power on Cybros and mint them on Ethereum. Generate NFT arts with distributed AI compute power on Cybros and mint them on Ethereum.

Generate NFT arts with distributed AI compute power on Cybros and mint them on Ethereum. Generate NFT arts with distributed AI compute power on Cybros and mint them on Ethereum.`}
        </div>
        <div className='pt-[36px]'>
          <KeynoteButton />
        </div>
        <p className='text-[24px] text-black pt-[48px]'>Playground</p>
        <p className='text=[15px] text-black pt-[12px]'>Discover the power of Cybros through playful use-case demonstrations.</p>
        <div>
        <div className='flex flex-wrap gap-[21px] mt-4'>
          {
          demoUseCardsCollection.map((card: UseCardProps) => (
            <UseCaseCard key={card.title} {...card} />
          ))
          }
        </div>
        </div>
      </div>
    </main>
  )
}
