const Botao = ({ onClick, children }) => {
  const buttonStyle = {
    backgroundColor: '#FFA15D',
    color: 'white',
    border: 'none',
    borderRadius: '1.5em',
    padding: '0.2em 1.9em',
    fontSize: '1em',
    fontFamily: 'Baloo, sans-serif',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const hoverStyle = {
    backgroundColor: '#FF7D1E',
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={(e) => {e.target.style.backgroundColor = hoverStyle.backgroundColor}}
      onMouseLeave={(e) => {e.target.style.backgroundColor = buttonStyle.backgroundColor}}
    >
      {children}
    </button>
  );
};

export default Botao;
