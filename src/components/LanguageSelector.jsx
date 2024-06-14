const LanguageSelector = () => {
  return (
    <div className='absolute right-0 z-20 mt-4 bg-white border border-gray-200 shadow-lg rounded-xl min-w-max ' role='menu' >
      <div className='p-2' data-menu='language'>
        <a className='flex px-3 py-2 text-sm font-medium text-gray-light-600 hover:text-gray-light-600 hover:bg-pink-50 hover:cursor-pointer lg:rounded-lg gap-1'>
          <img src='src\assets\united-kingdom-flag-icon.svg' width={'24px'}/>
          <span>English</span>
        </a>
        <a className='flex px-3 py-2 text-sm font-medium text-gray-light-600 hover:text-gray-light-600 hover:bg-pink-50 hover:cursor-pointer lg:rounded-lg gap-1'>
          <img src='src\assets\spain-country-flag-icon.svg' width={'24px'}/>
          <span>Español</span>
        </a>
        <a className='flex px-3 py-2 text-sm font-medium text-gray-light-600 hover:text-gray-light-600 hover:bg-pink-50 hover:cursor-pointer lg:rounded-lg gap-1'>
          <img src='src\assets\brazil-flag-icon.svg' width={'24px'}/>
          <span>Português</span>
        </a>
      </div>
    </div>
  )
}

export default LanguageSelector