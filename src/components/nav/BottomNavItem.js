import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const BottomNavItemStyle = styled.div`
  
`

function BottomNavItem({to, name}) {
  return (
    <li>
      <Link to={to}> {name} </Link>
    </li>
  )
}

export default BottomNavItem
