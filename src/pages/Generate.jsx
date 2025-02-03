const Generate = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const prompt = e.target.prompt.value;
    const form = new FormData();
    form.append("prompt", prompt);

    fetch('https://clipdrop-api.co/text-to-image/v1', {
        method: 'POST',
        headers: {
          'x-api-key': import.meta.env.VITE_CD_KEY,
        },
        body: form,
      })
  };
  return (
    <div className="w-11/12 mx-auto pt-10">
      <h2 className="text-center text-2xl font-bold">Generate an Image</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex justify-center items-center pt-5"
      >
        <div className="join">
          <input
            type="text"
            name="prompt"
            placeholder="username@site.com"
            className="input input-bordered join-item"
          />
          <button type="submit" className="btn btn-primary join-item">
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Generate;
