import './MyInput.scss';

function MyInput({
  ...props
}) {
  console.log(props);
  return (
    <input {...props} />
  );
}

export default MyInput;
