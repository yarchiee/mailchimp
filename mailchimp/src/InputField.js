export default function InputField({ inputText, setInputText }) {
  return (
    <>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
    </>
  );
}
