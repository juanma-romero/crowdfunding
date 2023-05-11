import React from 'react'
import logo from '/logo-mastercraft.svg'
import book from '/icon-bookmark.svg'

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
            <button className='text-white font-bold bg-[#3CB3AB] h-14 w-52 rounded-[33px]'>Back this project</button>
            <div className='flex items-center '>
              <img src={book} className='w-14 h-14'/>
              <p className='text-[#7A7A7A] font-bold pl-4'>Bookmark</p>
            </div>
          </div>
        </div>
      </div>
      {/* Second card */}
      <div id='segundaCard' className='flex border-gray-200 border border-solid bg-white w-720 rounded-lg mt-6 justify-around '>
        <div className=''>
          <div className='text-3xl font-bold'>$89,914 </div>
          <div>of $100,000 backed</div>
        </div>
        <div>
          <div className='text-3xl font-bold'>5,007</div>
          <div>total backers</div>
        </div>
        <div>
          <div className='text-3xl font-bold'>56</div>
          <div>days left</div>
        </div>
      </div>
      {/* Third card */}
      <div className='bg-white w-720 rounded-lg mt-48 pt-14 border-gray-200 border border-solid'>        
          <h2>About this project</h2>
          <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>
          <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
            to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>

          <div id='sub-card-1'>
            <h3>Bamboo Stand</h3>
            <p>Pledge $25 or more</p>
            <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
              you’ll be added to a special Backer member list.
            </p>
            <p>101 left</p>
            <p>Select Reward</p>
          </div>
          <div id='sub-card-2'>
            <h3>Black Edition Stand</h3>
            <p>Pledge $75 or more</p>
            <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
              member list. Shipping is included.
            </p>
            <p>64 left</p>
            <p>Select Reward</p>

          </div>
          <div id='sub-card-3'>
            <h3>Mahogany Special Edition</h3>
            <p>Pledge $200 or more</p>
            <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
              to our Backer member list. Shipping is included.
            </p>
            <p>0 left</p>
            <p>Out of Stock</p>
          </div>        
      </div>   
    </div>    
  )
}

export default Content