import { useState } from 'react'

const NavBar = () => {

  const [ showNavbar, setShowNavbar ] = useState('hidden')
  const [ showLanguageSelector, setShowLanguageSelector ] = useState(false)
  const toggleNavbar = ()=>{
    if ( showNavbar === 'hidden') setShowNavbar('')
    if ( showNavbar === '' ) setShowNavbar('hidden')
  }

  return (
    <div className='h-16 px-7'>
      <nav className='z-50 w-full h-16 bg-white text-gray-500 text-lg fixed'>
        <div className='flex items-center justify-between w-full h-16 max-w-screen-xl mx-auto px-7'>
          <a href='/' className='flex items-center md:mr-3'>
            <img id='logo' src='src\assets\1_invgate-logo.png' alt='InvGate Logo' width='140'/>
          </a>
          <div className='flex items-center gap-4 lg:order-2'>
            <a id='contact-header' className='hidden font-medium sm:block text-gray-light-600 whitespace-nowrap hover:text-gray-500 hover:cursor-pointer lg:hover:text-gray-light-500'>Contact us</a>
            <a id='subscribe-header' className='hidden button button--small text-lg sm:block hover:cursor-pointer hover:bg-sky-900 text-white bg-sky-500 py-2 px-4 rounded-lg'>Subscribe</a>
            <div className='relative menu-item' tabIndex='0' role='menu-item'>
              <button className='p-2' onClick={()=>setShowLanguageSelector(!showLanguageSelector)}>
                🌐
              </button>
              { showLanguageSelector && (
                <div className='absolute right-0 z-20 mt-4 bg-white border border-gray-200 shadow-lg rounded-xl ' role='menu' >
                  <div className='p-2' data-menu='language'>
                    <a className='flex px-3 py-2 text-sm font-medium text-gray-light-600 hover:text-gray-light-600 hover:bg-pink-50 hover:cursor-pointer lg:rounded-lg'>
                      {/*<svg>Agregar banderas de idioma</svg>*/}
                      <span>English</span>
                    </a>
                    <a className='flex px-3 py-2 text-sm font-medium text-gray-light-600 hover:text-gray-light-600 hover:bg-pink-50 hover:cursor-pointer lg:rounded-lg '>
                      {/*<svg>Agregar banderas de idioma</svg>*/}
                      <span>Español</span>
                    </a>
                    <a className='flex px-3 py-2 text-sm font-medium text-gray-light-600 hover:text-gray-light-600 hover:bg-pink-50 hover:cursor-pointer lg:rounded-lg'>
                      {/*<svg>Agregar banderas de idioma</svg>*/}
                      <span>Português</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div data-target='menu-mobile' className='p-2 rounded-lg cursor-pointer text-body lg:hidden menu-toggler' onClick={toggleNavbar}>
              <span className='bg-black block my-1' style={{width:'20px', height:'3px'}}></span>
              <span className='bg-black block my-1' style={{width:'20px', height:'3px'}}></span>
              <span className='bg-black block my-1' style={{width:'20px', height:'3px'}}></span>
            </div>
          </div>
          <div id='menu-mobile'  className={' grow w-full h-[calc(100vh_-_60px)] max-h-screen px-4 pb-6 left-0 overflow-y-auto bg-white top-16 z-10 fixed lg:block lg:top-20 lg:p-0 lg:overflow-visible lg:w-auto lg:h-auto lg:static menu-mobile ' + showNavbar}>
            <ul className='flex flex-col w-full lg:flex-row px-5' role='menu'>
              <li className='relative menu-item hover:bg-pink-50 rounded-lg'>
                <div className=' text-base flex items-center justify-center gap-2 px-3 py-3 font-medium border-t cursor-pointer border-gray-light-200 lg:py-2 text-gray-light-600 lg:rounded-lg lg:border-none lg:justify-start menu-text'>Products</div>
              </li>
              <li className='relative menu-item hover:bg-pink-50 rounded-lg'>
                <div className=' text-base flex items-center justify-center gap-2 px-3 py-3 font-medium border-t cursor-pointer border-gray-light-200 lg:py-2 text-gray-light-600 lg:rounded-lg lg:border-none lg:justify-start menu-text'>Solutions</div>
              </li>
              <li className='relative menu-item hover:bg-pink-50 rounded-lg'>
                <div className=' text-base flex items-center justify-center gap-2 px-3 py-3 font-medium border-t cursor-pointer border-gray-light-200 lg:py-2 text-gray-light-600 lg:rounded-lg lg:border-none lg:justify-start menu-text'>Pricing</div>
              </li>
              <li className='relative menu-item hover:bg-pink-50 rounded-lg'>
                <div className=' text-base flex items-center justify-center gap-2 px-3 py-3 font-medium border-t cursor-pointer border-gray-light-200 lg:py-2 text-gray-light-600 lg:rounded-lg lg:border-none lg:justify-start menu-text'>Resources</div>
              </li>
              <li className='relative menu-item hover:bg-pink-50 rounded-lg'>
                <div className='flex items-center justify-center gap-2 px-3 py-3 text-base font-medium border-t border-b cursor-pointer border-gray-light-200 lg:py-2 text-gray-light-600 hover:text-gray-light-600 lg:hover:bg-gray-light-200 lg:rounded-lg lg:border-none lg:justify-start'>Blogs</div>
              </li>
            </ul>
            <div>
              <div className='flex flex-col py-12 sm:hidden gap-y-5'>
                <a id='contact-header' className='text-lg text-center sm:block hover:cursor-pointer hover:bg-pink-50 py-2 border-2 rounded-lg border-gray'>Contact Us</a>
                <a id='subscribe-header' className='text-lg text-center sm:block hover:cursor-pointer hover:bg-sky-900 text-white bg-sky-500 py-2 rounded-lg'>Subscribe</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar