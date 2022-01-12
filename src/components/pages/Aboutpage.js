import React from 'react'
import './Aboutpage.css'

const Aboutpage = () => {
    return (
        <div className='textContainer'>
            <div className='content'>

                <h1>What is this all about?</h1>
                <p>This NFT marketplace prototype has been made with Rinkeby's test network. Rinkeby is an Ethereum test 
                    network that allows for blockchain development testing before deployment on Mainnet, 
                    the main Ethereum network. The pictures you can see on this website are minted in the Rinkeby's testnet
                    and by using API calls from opensea, you can see the pictures in this site.</p>
                
                <p><br></br>Rinkeby's testnet opensea link: </p>
        
            <a href='https://testnets.opensea.io/collection/nft-landscapes-1080p'> NFT collection here</a>
            </div>
        </div>
    )
}

export default Aboutpage
