import './MyInput.scss';

function MyInput({
  ...props
}) {
  return (
    <input {...props} />
  );
}

export default MyInput;
