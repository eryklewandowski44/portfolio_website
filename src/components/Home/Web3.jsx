import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

function Web3() {
  return (
    <div className='card-1'>
      <div className='web3-heading'>
        <img src="images/web3-heading.png" alt="" />
      </div>
      <div className='card-1-flex'>
        <div className='card1-lft'>
          <p>The collection offers a total of 333 Unique NFTs natively on 3 blockchains - Avalanche, Ethereum, and Polygon.</p>
          <p>Each unique NFT comes with a free real-life physical #Rens Coffee merchandise and an exclusive playable character in The Sandbox.</p>
          <p className='btn'><a href="https://nft.rensoriginal.com/" target="_blank" rel="noopener noreferrer">Check The Website</a></p>
        </div>
        <div className='twit'>
          <TwitterTweetEmbed
            tweetId={'1592925762482368513'}
            options={{ theme: "dark" }} />
        </div>
      </div>
      <div className='pixel-man'>
        <img src="images/pic-1.png" alt="" />
      </div>
    </div>
  )
}

export default Web3