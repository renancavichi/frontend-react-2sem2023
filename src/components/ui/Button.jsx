import './Button.css'

const Button = ({children, variant, ...rest}) => {
  return (
    <button {...rest} className={variant}>{children}</button>
  )
}

export default Button