function GuessBar({ guessHandler }) {
  
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    guessHandler(e.target.value);
  };

  return (
    <div className="mb-6 w-96 justify-center">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default GuessBar;
