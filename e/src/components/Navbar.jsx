import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Lama chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/15115627/pexels-photo-15115627.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar