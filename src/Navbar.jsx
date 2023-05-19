import logo from '/logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
 
  return (
    <>
      {!isMobile ?
            <div className='flex justify-between'>
              <img src={logo} className='py-12 pl-40 cursor-pointer hover:scale-125'/>        
              <ul className= 'text-white flex pr-40 '>
                <li className='pt-12 pr-8 hover:underline cursor-pointer'>About</li>
                <li className='pt-12 pr-8 hover:underline cursor-pointer'>Discover</li>
                <li className='pt-12 hover:underline cursor-pointer'>Get Started</li>
              </ul>
            </div>
          :
            <div className='flex justify-between'>
              <img src={logo} className='py-12 cursor-pointer hover:scale-125'/>
              <GiHamburgerMenu className='text-white text-3xl mr-6 mt-12 cursor-pointer' />
            </div>
      }     
    </>
  )
}

export default Navbar