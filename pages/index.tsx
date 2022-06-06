import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, {useEffect,useState} from 'react';

import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";





const Home: NextPage = () => {

  let web3Modal: Web3Modal;

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        rpc: { 42: process.env.NEXT_PUBLIC_RPC_URL }, // required
      },
    },
  };

  const [hasMetamask, setHasMetamask] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner] = useState(undefined);
  const [myaddress, setMyAddress] = useState();

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web3ModalProvider = await web3Modal.connect();
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(web3ModalProvider);
        const signer = provider.getSigner();
        setSigner(signer);
        setMyAddress(await signer.getAddress())
      
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  useEffect(() => {
    const init = async () => {
      if(myaddress) {
      
     
     
      


  
   


     
      }

    }

    init()
},[myaddress])

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });


  return (
    <div className="min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background ">
    

    <div id="full" className="  w-full h-full flex flex-col  justify-center max-w-3xl">

    <div>
        
    {hasMetamask ? (
 isConnected ? (
  <div>
      <div className="flex justify-end py-4">
      <div className="text-xs">  <b>My Wallet Address:  </b>  </div>
     <div className="text-xs"> {myaddress}</div>
      </div>

     <div>
     <div id="top_section" className="flex justify-between">

<div id="top_left_section" className="flex flex-col py-2">
<div><b>Total KG of your roast</b></div>
<div className="text-red-600"><b>{myFishTotalTon} kg</b></div>
<br/>
<div><b>Total Kg in barn</b></div>
<div className="text-red-600"><b>{totalTon} kg</b></div>
</div>

<div id="top_middle_section" className=" flex flex-col"> 

<div id="genel">
<div>
<div className="flex justify-start">
<div className="text-red-600 flex items-center"><b>{totalClaimable}</b></div>
<div>
 <img 
      className=""
       width="35px"
       height="35px"
       src="/images/egg.svg"
   />
 </div>
 

</div>
<div className="text-sm"><b>EGG TO CLAIM</b></div>
<div>est 2.25 egg a day</div>
<div className="py-5">
 <button 
 onClick={claimFishFunc}
 className="bg-red-600 text-white rounded-full px-10 py-1 text-center text-xs">Egg Claim</button>
</div>
</div>
</div>





</div>

<div id="top_middle_section" className=" flex flex-col"> 
<div className="flex justify-start">
<div className="text-red-600 flex items-center"><b>{totalYardClaimAmount}</b></div>
<div>
 <img 
      className=""
       width="35px"
       height="35px"
       src="/images/feed.svg"
   />
 </div>

</div>

<div className="text-sm"><b>FEED TO CLAIM</b></div>
<div className="py-3"></div>
<div className="py-5">
 <button 
 onClick={claimYardFunc}
 className="bg-red-600 text-white rounded-full px-10 py-1 text-center text-xs">Feed Claim</button>
</div>

</div>


<div id="top_right_section" className=" flex justify-end">

<div className="flex flex-col ">
<div> 
 <div className="flex flex-col items-end">
 
         <div className="flex">
             <div className="text-red-600 flex items-center"><b>{fishBalance}</b></div>
                         <div>
                     <img 
                     className=""
                     width="35px"
                     height="35px"
                     src="/images/egg.svg"
                 />
                 </div>
      
     </div>
     <div className="flex  text-xs"><b>YOUR TOTAL EGG</b></div>
 </div>
</div>
<div className="py-2"></div>
<div> 
 <div className="flex flex-col items-end">
     <div>
         <div className="flex">
             <div className="text-red-700 flex items-center"><b>{Number(stakedFish.amount)}</b></div>
         <div>
 <img 
      className=""
       width="35px"
       height="35px"
       src="/images/egg.svg"
   />
 </div>
         </div>
     </div>
     <div className="flex justify-around text-xs"><b>YOUR STAKED EGG</b></div>
 </div>
</div>
<div className="py-2"></div>
<div> 
 <div className="flex flex-col items-end">
     <div>
         <div className="flex">
             <div className="text-red-700 flex items-center "><b> {Number(estDailyFeed)}</b></div>
         <div>
 <img 
      className=""
       width="35px"
       height="35px"
       src="/images/feed.svg"
   />
 </div>
         </div>
     </div>
     <div className="flex text-xs"><b>EST DAILY FEED</b></div>
 </div>
</div>
<div className="py-2"></div>
</div>
</div>

</div>
     </div>
     <div id="medium" className="flex justify-between">
        <div id="medium_left" className="">
            <div className="flex justify-center bg-green-500 text-white">Captain Staked List</div>
            <div className="flex flex-col">{captainStakeDetails?.length > 0 &&
                    captainStakeDetails.map((item:any,index:number) => (
                          <div className="flex border border-gray-400" key={index}>
                              <div className="py-2">
                              <img 
                       width="50px"
                       height="50px"
                       src={"/images/" + item.tokenId + ".png"}
                     
                   />
                              </div>
                              <div className="py-2 px-2 text-xs">
                         <div>{item.ton} Ton</div>
                         <div>captain #{item.tokenId}</div>
                         <div>est {item.estEgg } egg per day</div>
                         </div>
                         <div className="px-2 text-xs">
                      
                         <div className="flex">
             
                             <div>
                                 <div className="py-3.5">Level Up: {item.levelUp}</div>
                                 <div>SkipTime: {item.skipTime} </div>
                                    <div className="py-3">Level: {item.ton/100} </div>
                             </div>
                        
                      
                           
                         </div>
                     </div>
                     <div className="text-xs px-2">
                                 <div className="py-2">    
                                 <button className="bg-red-600 text-white rounded px-6 py-1 "
                                 onClick={() => feedYardFunc(item.tokenId ,item.levelUp)}
                                 >Feed</button>
                                 </div>
                                 <div>       <button className="bg-red-600 text-white rounded px-6 py-1 "
                                 onClick={() => skipTimeForLevelFunc(item.tokenId,item.skipTime)}
                                 >Skip</button></div>
                                    <div className="py-1">       <button className="bg-red-600 text-white rounded px-3 py-1 "
                                 onClick={() => levelUpCaptainFunc(item.tokenId)}
                                 >Level Up</button></div>
                                         <div className="py-1">       <button className="bg-red-600 text-white rounded px-3 py-1 "
                                 onClick={() => unstakeCaptainFunc([item.tokenId])}
                                 >Unstake</button></div>
                             
                          
                                 </div>
                                
                          </div>
                            
                    ))}</div>

             <div className="py-6">
                 <div className="flex justify-center bg-green-500 text-white">Captain Unstaked List</div>   
                 <div className="flex flex-col">{captainUnstakeDetails?.length > 0 &&
                    captainUnstakeDetails.map((item:any,index:number) => (
                          <div className="flex border border-gray-400" key={index}>
                              <div className="py-2">
                              <img 
                       width="50px"
                       height="50px"
                       src={"/images/" + item + ".png"}
                     
                   />
                              </div>
                              <div className="py-2 px-2 text-xs">
                         <div></div>
                         <div className="py-3 flex justify-center">captain #{item}</div>
                         <div></div>
                         </div>
                         <div className="px-2 text-xs">
                      
                         <div className="flex">
             
                             <div>
                                 <div className="py-3.5"></div>
                                 <div></div>
                                    <div className="py-3"> </div>
                             </div>
                        
                      
                           
                         </div>
                     </div>
                     <div className="text-xs px-2">
                                 <div className="py-2">    
                                
                                 </div>
                                 <div>       <button className="bg-red-600 text-white rounded px-6 py-1 "
                                 onClick={() => stakeCaptainFunc([item])}
                                 >Stake</button></div>
                                    <div className="py-1">     </div>
                             
                          
                                 </div>
                                
                          </div>
                            
                    ))}</div>
             </div>

             <div className="py-6">
                 <div className="flex justify-center bg-green-500 text-white">Mint Operations</div>   
                 <div className="flex flex-col">
                 
                 <div className="flex justify-center py-3">
                    <div className="flex justify-center px-3">
                     <input type='number' className="border-2 border-gray-400-500" 
                     onChange={handleCaptainMint } 
                     value={captainMintAmount}></input>
                     </div>
                     <div><button className="bg-red-600 px-5 rounded-full text-white text-xs  py-3"
                     onClick={() => mintCaptainFunc(captainMintAmount)}
                     >
                       Captain Mint
                       </button></div>
                 </div>
                 <div className="flex justify-center py-3">
                    <div className="flex justify-center px-3">
                     <input type='number' className="border-2 border-gray-400-500" 
                     onChange={handleFishMint } 
                     value={fishMintAmount}></input>
                     </div>
                     <div><button className="bg-red-600 px-5 rounded-full text-white text-xs  py-3"
                        onClick={() => mintFishFunc(myaddress,fishMintAmount)}>
                       Fish Mint
                       </button></div>
                 </div>
                 <div className="flex justify-center py-3">
                    <div className="flex justify-center px-3">
                     <input type='number' className="border-2 border-gray-400-500" 
                     onChange={handleFeedMint } 
                     value={feedMintAmount}></input>
                     </div>
                     <div><button className="bg-red-600 px-5 rounded-full text-white text-xs  py-3"
                     onClick={() => mintFeedFunc(myaddress,feedMintAmount)}
                     >
                       Feed Mint
                       </button></div>
                 </div>
             
                 
                 </div>
             </div>

             
                 
    

        </div>
        <div id="medium_right">
      
            <div>
            <div className="border-2">
                 
     
                 <div className="flex flex-col">
             

                         <div>
                             <div className="bg-green-500 text-white text-center">Stake/Unstake</div>
                             
                         </div>
                         <div className="py-1"></div>
            
               
                    <div className="bg-red-600 text-white text-center">2x MULTIPLIER</div>
                    <div className="py-2"></div>
                   
                   
            
                 </div>
                     <div className="flex justify-center text-xs" >WHEN YOU STAKE</div>
                     <div className="flex">
                     <div>
                     <img 
                          className="border-2"
                           width="30px"
                           height="30px"
                           src="/images/egg.svg"
                       />
                     </div>
                     <div className="flex">
                     <input type='number' className="border-2 border-gray-400-500" 
                     onChange={handleEggStake } 
                     value={stakeEggInput}></input>
                     </div>

                     <div className="flex">
                     <button className="bg-gray-400 rounded px-4 py-0.5 text-xs" onClick={putStakeEggMax} >Max</button>
                     </div>

                     </div>
                    
                     <div className="flex justify-center">
                 <img 
                          className="align-bottom"
                           width="8px"
                           height="10px"
                           src="/images/downarrow.svg"
                       />
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="text-xs">YOUR EST. DAILY FEED</div>
                    <div className="flex">

                    <div>
                     <img 
                          className="border-2"
                           width="30px"
                           height="30px"
                           src="/images/feed.svg"
                       />
                     </div>
            
                    <div className="flex">
                     <input type='number' className="border-2 border-gray-400-500" 
                
                     value={  (Number(stakeEggInput)*Number(2)) }
                       ></input>
                     </div>

                  
                 </div>
                 <div className="py-2"></div>
                 <div> 
                     <button
                     onClick={async() => {await stakeEggForFeedFunc(stakeEggInput); }}
                     className="bg-red-600 px-20 rounded-full text-white text-xs  py-3"
                   
                      >Stake Egg</button>
                 </div>

                 </div>
                 <div className="py-3"></div>
              

                 <div>
                 <div className="flex flex-col items-center">
     
                    <div className="py-2"></div>
   

            
                 </div>
                     <div className="flex justify-center text-xs" >WHEN YOU UNSTAKE</div>
                     <div className="flex justify-center">
                     <div>
                     <img 
                          className="border-2"
                           width="30px"
                           height="30px"
                           src="/images/egg.svg"
                       />
                     </div>
                     <div className="flex">
                     <input type='text' className="border-2 border-gray-400-500"
                     onChange={handleEggUnstake}
                     value={unstakeEggInput}
                     ></input>
                     </div>
                     <div className="flex">
                     <button 
                     onClick={putUnstakeEggMax}
                     className="bg-gray-400 rounded px-4 py-0.5 text-xs">Max</button>
                     </div>
                     </div>
                    
                     <div className="flex justify-center">
                 <img 
                          className="align-bottom"
                           width="8px"
                           height="10px"
                           src="/images/downarrow.svg"
                       />
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="text-xs">EST. REDUCTION FEED</div>
                    <div className="flex">
                 <div>
                     <img 
                          className="border-2"
                           width="30px"
                           height="30px"
                           src="/images/feed.svg"
                       />
                     </div>
                  
                     <div className="flex">
                     <input type='number' className="border-2 border-gray-400-500" 
                
                     value={  (Number(unstakeEggInput)*Number(2)) }
                       ></input>
                     </div>

                  
                 </div>
                 <div className="py-2"></div>
                 <div> 
                     <button 
                     onClick={async() => {await unstakeEggForFeedFunc(unstakeEggInput); }}
                     className="bg-red-600 px-20 rounded-full text-white text-xs  py-3">Unstake Egg</button>
                 </div>

                 </div>

                 </div>
                    
             
                 </div>
            </div>
            <div className="py-5"></div>

            <div>
            <div className="border-2">
                 
     
                 <div className="flex flex-col">
             

                         <div>
                             <div className="bg-green-500 text-white text-center">Swap</div>
                             
                         </div>
                         <div className="py-1"></div>
            
               
                    <div className="bg-red-600 text-white text-center">450x MULTIPLIER</div>
                    <div className="py-2"></div>
                   
                   
            
                 </div>
                     <div className="flex justify-center text-xs" >WHEN YOU SWAP</div>
                     <div className="flex">
                     <div>
                     <img 
                          className="border-2"
                           width="30px"
                           height="30px"
                           src="/images/egg.svg"
                       />
                     </div>
                     <div className="flex">
                     <input type='text' className="border-2 border-gray-400-500"
                     onChange={handleEggSwap}
                     value={swapEggInput}></input>
                     </div>
                     <div className="flex">
                     <button className="bg-gray-400 rounded px-4 py-0.5 text-xs"
                     onClick={putSwapEggMax}>Max</button>
                     </div>
                     </div>
                    
                     <div className="flex justify-center">
                 <img 
                          className="align-bottom"
                           width="8px"
                           height="10px"
                           src="/images/downarrow.svg"
                       />
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="text-xs">YOU WILL RECEIVE</div>
                    <div className="flex">
                 <div>
                     <img 
                          className="border-2"
                           width="30px"
                           height="30px"
                           src="/images/feed.svg"
                       />
                     </div>
                     <div className="flex">
                     <input type='number' className="border-2 border-gray-400-500" 
                
                     value={  (Number(swapEggInput)*Number(450)) }
                       ></input>
                     </div>

                  
                 </div>
                 <div className="py-2"></div>
                 <div> 
                     <button 
                     onClick={async() => {await swapFishForFeed(swapEggInput); }}
                     className="bg-red-600 px-20 rounded-full text-white text-xs  py-3">Swap Egg</button>
                 </div>

                 </div>
                 <div className="py-3"></div>
              

               
                    
             
                 </div>
            </div>

        </div>
    </div>

   
  </div>
 ) : (
     <div className="flex justify-center">
<button className="bg-green-600 text-white rounded-full px-40 py-10" onClick={() => connect()}>Connect</button>
     </div>

 )
) : (
 "Please install metamask"
)}


        </div>





    <div id="footer">

    </div>
 

        
    </div>

</div>
  )
}

export default Home
