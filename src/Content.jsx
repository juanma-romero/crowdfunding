import React from 'react'
import logo from '/logo-mastercraft.svg'
import book from '/icon-bookmark.svg'
import barra from '../src/assets/Rectangle.png'
import lineaVer from '../src/assets/lineaHorVerde.png'

const Content = () => {
  return (
    <div className='flex flex-col items-center'>
      {/* First card */}
      <div id='primerCard' className='bg-white w-720 rounded-lg mt-48 pt-14 border-gray-200 border border-solid '>
        <div className='flex flex-col items-center' >
          <img src={logo} className='w-14 h-14 mt-[-90px]'/>
          <h1 className='text-3xl font-bold text-black pt-7'>Mastercraft Bamboo Monitor Riser</h1>
          <p className='text-gray-500 mt-4'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className='flex pt-10 w-full justify-around items-center mb-12'>
            <button className='text-white font-bold bg-[#3CB3AB] h-14 w-52 rounded-[33px] hover:bg-[#147A73]'>Back this project</button>
            <div className='flex items-center '>
              <img src={book} className='w-14 h-14'/>
              <p className='text-[#7A7A7A] font-bold pl-4'>Bookmark</p>
            </div>
            
          </div>
        </div>
      </div>
      {/* Second card */}
      <div id='segundaCard' className='flex flex-col border-gray-200 border border-solid bg-white w-720 rounded-lg mt-6  '>
        <div className='flex justify-around'>
        <div className='pt-12 mb-12'>
          <div className='text-3xl font-bold'>$89,914 </div>
          <div className='text-[#7A7A7A]'>of $100,000 backed</div>
        </div>
        <img src={barra} className='py-12 ' />
        <div>
          <div className='text-3xl font-bold pt-12 '>5,007</div>
          <div className='text-[#7A7A7A]'>total backers</div>
        </div>
        <img src={barra} className='py-12' />
        <div>
          <div className='text-3xl font-bold pt-12'>56</div>
          <div className='text-[#7A7A7A]'>days left</div>
        </div>
        </div>
        <img src={lineaVer} className=''/>
        {/*  hacer bien la linea de arriba de acuerdo a compras  */}
      </div>
      {/* Third card */}
      <div className='bg-white w-720 rounded-lg border-gray-200 border border-solid mt-6'>        
          <h2 className='pt-12 pl-12 font-bold text-xl'>About this project</h2>
          <p className='text-[#7A7A7A] px-12 pt-9 leading-loose'>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>
          <p className='text-[#7A7A7A] px-12 pt-9 leading-loose'>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
            to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>
            {/* sub-card-1 */}
          <div id='sub-card-1' className='flex flex-col rounded-lg border-gray-200 border border-solid w-634 mx-12 px-8 mt-10'>
            <div className='flex mt-9 justify-between '>
              <h3 className='text-lg font-bold'>Bamboo Stand</h3>
              <p className='font-medium text-[#3CB3AB] '>Pledge $25 or more</p>
            </div>
            <div>
              <p className='text-[#7A7A7A] mt-6 leading-loose'>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                you’ll be added to a special Backer member list.
              </p>
            </div>
            <div className='flex justify-between mt-6 mb-8'>
              <p className='font-bold text-3xl'>101 <span className='text-base text-[#7A7A7A]'>left</span></p>
              <button className='bg-[#3CB3AB] text-white font-bold rounded-[33px] h-12 w-40 hover:bg-[#147A73]'>Select Reward</button>
            </div>
          </div>
          {/* sub-card-2 */}
          <div id='sub-card-1' className='flex flex-col rounded-lg border-gray-200 border border-solid w-634 mx-12 px-8 mt-10'>
            <div className='flex mt-9 justify-between '>
              <h3 className='text-lg font-bold'>Black Edition Stand</h3>
              <p className='font-medium text-[#3CB3AB] '>Pledge $75 or more</p>
            </div>
            <div>
              <p className='text-[#7A7A7A] mt-6 leading-loose'>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
              member list. Shipping is included.
              </p>
            </div>
            <div className='flex justify-between mt-6 mb-8'>
              <p className='font-bold text-3xl'>64 <span className='text-base text-[#7A7A7A]'>left</span></p>
              <button className='bg-[#3CB3AB] text-white font-bold rounded-[33px] h-12 w-40 hover:bg-[#147A73]'>Select Reward</button>
            </div>
          </div>
          
          {/* sub-card-3 */}
          <div id='sub-card-1' className='flex flex-col rounded-lg border-gray-200 border border-solid w-634 mx-12 px-8 mt-10'>
            <div className='flex mt-9 justify-between '>
              <h3 className='text-lg font-bold'>Mahogany Special Edition</h3>
              <p className='font-medium text-[#3CB3AB] '>Pledge $200 or more</p>
            </div>
            <div>
              <p className='text-[#7A7A7A] mt-6 leading-loose'>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
              to our Backer member list. Shipping is included.
              </p>
            </div>
            <div className='flex justify-between mt-6 mb-8'>
              <p className='font-bold text-3xl'>0 <span className='text-base text-[#7A7A7A]'>left</span></p>
              <button className='bg-[#2F2F2F] text-white font-bold rounded-[33px] h-12 w-40'>Out of stock</button>
            {/* hacer ultima subcard inhabilitado */}
            
            </div>
          </div>
       
      </div>   
    </div>    
  )
}

export default Content