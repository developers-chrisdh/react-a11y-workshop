import { useState } from 'react';
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