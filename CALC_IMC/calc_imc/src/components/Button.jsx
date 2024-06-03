import './Button.css'

const Button = ({name}) => {
  return (
    <div className='button-container'>
        <button className='button'>{name}</button>
    </div>
  )
}

export default Button