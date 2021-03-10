import React from 'react'
import Button from './Button'

const Header = ( {onAddShow,onShowText}) => {
    return (
        
            <header className='header' onClick={onAddShow}>
                <h1 style={headingStyle}>TASK TRACKER</h1>
                <Button  color={onShowText ?'red':'blue'} text={onShowText ? 'Close': 'Add'} />  
                
                        </header>
       
    )
}
// CSS in JavaScript 
const headingStyle = {
    fontSize: '20px',
    borderBox: '1px solid',
    backgroundColor: 'lightgrey'


}
export default Header
