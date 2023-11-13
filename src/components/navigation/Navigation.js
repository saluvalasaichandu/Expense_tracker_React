import React from 'react'
import {NavLink} from 'react-router-dom'


const Navigation = () => {
  return (
    <div>
      <header>
        <nav>
            <ul>
                <div>
                    <li>
                        <NavLink to="/login">
                            < div className='btn' style={{textDecoration:'none'}}>
                            Login
                            </div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/profile">
                            < div>
                            Profile
                            </div>
                        </NavLink>
                    </li>
                </div>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navigation;