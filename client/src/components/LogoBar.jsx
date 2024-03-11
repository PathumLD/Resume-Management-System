import React from 'react'

const  LogoBar = () => {

    const backgroundStyle = {
        position: 'fixed',
        width: '100%',
        height: '8vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Adjust this if needed
        color: '#ffffff',
        backgroundColor: 'transparent',
        backdropFilter: 'blur(10px)',
        zIndex: 20,
      };

  return (
    <>
       <div style={backgroundStyle} className=' py-auto'>
      <nav className='flex items-center justify-between mx-6 my-auto'>
        <a href='/' className='text-3xl font-bold text-white '>TalentFolio</a>
        
      </nav>
    </div>
    </>
  )
}

export default LogoBar;
