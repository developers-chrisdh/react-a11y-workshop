import { useState } from 'react';
import Button from '../button/Button';
import './Collapsible.scss';

const Collapsible = ({ title, children}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function collapse () {
    setIsCollapsed(!isCollapsed)
  }

  return  (
    <div>
      <h2 onClick={collapse}>{ title } <span>{ isCollapsed ? <>&darr;</> : <>&uarr;</>}</span></h2>
      { !isCollapsed && <p>{ children }</p> }
    </div>
  )
}

export default Collapsible;