import React, { FunctionComponent } from 'react'

type Props = {
  color?: String
}

const AppBar: FunctionComponent<Props> = (props) => {
  return (
    <nav className='app-bar'>Deru</nav>
  )
}

export default AppBar;