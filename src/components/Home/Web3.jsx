import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import Steps from './Web3/Steps'

function Web3() {
  return (
    <div className='web3'>
      <div>
        <h1>Web3</h1>
        <div className="web3-card1">
          <h2>Rens x The Sandbox</h2>
          <div className="card1-flex">
            <div className="card1-left">
              <p>The collection offers a total of 333 unique NFTs natively on 3 blockchains - Avalanche (111 NFTs), Ethereum (Ill NFTs), and Polygon (111 NFTs).</p>
              <p>Each unique NFT comes with a FREE real-life physical #Rens Coffee Hoodie and an exclusive playable character in The Sandbox.</p>
              <p>SOLD OUT</p>
            </div>
            <div className="card1-right">
              <div className='twit'>
                <TwitterTweetEmbed
                  tweetId={'1592925762482368513'}
                  options={{theme: 'dark'}}
                />
              </div>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <p>Check Website</p>
              </a>
            </div>
          </div>
        </div>
        <div>
          <Steps />
        </div>
      </div>
    </div>
  )
}

export default Web3