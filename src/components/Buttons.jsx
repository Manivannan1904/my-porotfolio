const Button = ({ children, ...props }) => {
  console.log('props', props);
  console.log('children', children);

  return (
    <button {...props} >
      {children}
    </button>
  );
};

export default Button;
