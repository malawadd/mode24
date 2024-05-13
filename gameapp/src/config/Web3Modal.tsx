'use client'

import {createWeb3Modal, defaultConfig} from '@web3modal/ethers/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'f25128b8bcfc64fb5c124705aa9442b8'

let mainnet = {
  chainId: 919,
  name: 'MODE',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.explorer.mode.network/',
  rpcUrl: 'https://sepolia.mode.network'
}
if (process.env.NEXT_PUBLIC_NETWORK === "local") {
  mainnet = {
    chainId: 1337,
    name: 'MODE',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.explorer.mode.network/',
    rpcUrl: 'http://127.0.0.1:8545'
  }
}


// 3. Create modal
const metadata = {
  name: "Behmoth",
  description: "On-chain RPG game",
  url: "", // origin must match your domain & subdomain
  icons: []
}

createWeb3Modal({
  ethersConfig: defaultConfig({metadata}),
  chains: [mainnet],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export function Web3ModalProvider({children}: any) {
  return children
}