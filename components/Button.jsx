const Button = ({ text }) => {
    return (
      <button
        className="btn btn-primary"
        onClick={event => event.target.innerText = 'Clicked!'}
      >
        {text}
      </button>
    )
  }
  
  export default Button