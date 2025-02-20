import Link from "next/link";

const Form = ({handlesubmit, setPost}) => {
  return (
    <section className="w-full flex  flex-col justify-start items-start">
      <h1 className="head_text blue_gradient text-left">Create Post</h1>
      <p className="desc text-left">
        Create and share amazing prompts with the world, and let your
        imagination run wild with any AI powered apps{" "}
      </p>

      <form
        onSubmit={handlesubmit}
        className="mt-10 w-full flex flex-col max-w-2xl gap-7 glassmorphism"
      >
        <label className="font-satoshi font-semibold text-gray-500 text-base">
          Your Ai Prompt
        </label>
        <textarea
          onChange={(e) =>
            setPost((post)=>({ ...post, prompt: e.target.value }))
          }
          className="form_textarea"
          placeholder="Write your prompt here...."
          required
        />

        <label className="font-satoshi font-semibold text-gray-500 text-base">
         Tags
        </label>
        <input
          onChange={(e) =>
            setPost((post)=>({ ...post, tag:e.target.value }))
          }
          className="form_input"
          placeholder="Add the tags here.."
          required
        />

        <div className="flex justify-end items-center mx-3 mb-5 gap-4 mt-6">
            <Link href="/" className="text-sm text-gray-500">Cancel</Link>
            <button
             type='submit' 
             className="px-5 py-1.5 text-sm rounded-full text-white bg-orange-400">Create</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
