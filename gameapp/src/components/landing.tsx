"use client"

import {useState} from "react"
import {RunExplorer} from "@/components/explorer/runExplorer";
import {FONT} from "@/fonts/fonts";
import {useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider} from '@web3modal/ethers/react'
import Addresses from "./addresses";
import MusicPlayer from "./MusicPlayer";
import {BrowserProvider, Contract, ethers} from "ethers";
import {ABI} from "@/types/network";


export function Landing() {
  const {open} = useWeb3Modal()
  const {walletProvider} = useWeb3ModalProvider()

  const {address} = useWeb3ModalAccount()

  const [isGameStartLoading, setIsGameStartLoading] = useState<boolean>(false)

  const [gameId, setGameId] = useState<number | undefined>()


  const onStartGame = async (): Promise<void> => {
    if (!address || !walletProvider) {
      console.log("Not connected")
      return
    }
    setIsGameStartLoading(true)
    const ethersProvider = new BrowserProvider(walletProvider)
    const signer = await ethersProvider.getSigner()
    const contract = new Contract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "", ABI, signer)
    const tx = await contract.startGame()
    const receipt = await tx.wait()
    let newGameId
    for (const log of receipt.logs) {
      try {
        const parsedLog = contract.interface.parseLog(log)
        if (parsedLog && parsedLog.name === "GameCreated") {
          newGameId = ethers.toNumber(parsedLog.args[1])
        }
      } catch (error) {
        // This log might not have been from your contract, or it might be an anonymous log
        console.log("Could not parse log:", log);
      }
    }
    if (newGameId !== undefined && !gameId) {
      setGameId(newGameId)
    }
    setIsGameStartLoading(false)
  }

  return (
    <>
      {!address &&
        <div
          className="absolute z-0"
          style={{width: "100%", height: "100%"}}
        />
      }
      <main className="flex min-h-screen flex-col items-center gap-20 p-2 lg:p-12 justify-between z-2 relative bg-brand-blue">

        {!address ?
          <>
            <div
              className={"flex flex-col gap-6 text-center text-xl " + FONT.className}
            >
              <div className="text-7xl">
                <div>
                  Battle with on-chain AI “Behmoth”
                </div>
              </div>
              <div className="pt-[100px]">
                <button
                  onClick={() => open()}
                  className={"p-4 bg-[#f9b043] text-3xl text-black hover:bg-[#9b6b28] duration-200 " + FONT.className}
                >
                  Connect wallet to Battle
                </button>
              </div>
            </div>
          </>
          :
          <>
            {gameId === undefined ?
              <>
                <div
                  className="bg-brand-bluedark p-5 lg:p-10 border-t-2 border-white"
                >
                  <div className="max-w-[1000px]">
                    <div className="">
                      <div className={"text-4xl " + FONT.className}>
                        
                      Prepare yourself, valiant hero, for you&#39;ve breached the threshold into my dominion! 
                      </div>
                      <div className={"p-2 pt-6"}>
                        <div>
                         
                        </div>
                        <img
                          className="w-full h-auto md:float-right md:w-1/3 md:pl-2"
                          src="/og.png"
                          alt="pixels"
                        />
                        <div className="md:w-2/3">
                          <div className="my-5">
                          I stand as the unyielding AI Behmoth of the Web3 universe,
                          </div>
                          <div className="my-5">
                          your ultimate adversary on this battlefield! Your mission: to obliterate my 10,000 life points before I lay waste to yours. Conquer me, and your residual life points will elevate your glory on the leaderboards.
                          </div>
                          <div className="my-5">
                          You&#39;re granted a quartet of strategic choices each cycle; however, tread with caution! Each decision is laden with peril, a potent force that can sway the conflict to extremes of triumph or catastrophe. Every strike you deliver is fraught with danger.
                          </div>
                          <div className="my-5">
                          Hear the crowd&#39;s fevered cries as they crescendo around us. Arm yourself, bold warrior. The epic saga unfolds now—let the combat ensue!                          </div>
                        </div>
                        <div className="text-center pt-6">
                          <button
                            onClick={() => {
                              if (!isGameStartLoading) {
                                onStartGame()
                              }
                            }}
                            className={"pl-12 pr-12 p-4 bg-[#00FF66] text-3xl text-black hover:bg-[#00b548] duration-200 " + FONT.className}
                          >
                            {isGameStartLoading ? "Loading" : "GO!"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              :
              <>
                <div className={"text-7xl text-center " + FONT.className}>
                  <div>
                    
Clash with the Blockchain Behemoth
                  </div>
                  <MusicPlayer/>
                </div>
                <div
                  className="flex flex-col grow gap-4 max-w-8xl w-full relative place-items-center h-full">

                  {gameId !== undefined &&
                    <RunExplorer
                      gameId={gameId}
                      connectedAccount={address}
                    />
                  }
                </div>
              </>
            }
          </>
        }
        <div
          className={"flex w-full flex-col lg:flex-row lg:justify-between items-end text-xl p-4 lg:p-0"}>
          <Addresses/>
        </div>
      </main>
    </>
  )
}
