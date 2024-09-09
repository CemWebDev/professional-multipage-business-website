const CustomButton = ({ onClick, children, className }) => {
  return (
    <button className={`${className} rounded-sm`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
