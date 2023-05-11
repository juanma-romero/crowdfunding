import logo from '/logo.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <img src={logo} className='py-12 pl-40'/>
        <ol className='text-white flex pr-40'>
            <li className='pt-12 pr-8'>About</li>
            <li className='pt-12 pr-8'>Discover</li>
            <li className='pt-12'>Get Started</li>
        </ol>
    </div>
  )
}

export default Navbar