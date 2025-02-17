import Feed from "@/components/Feed";

export default function Home() {
  return (
      <section className="w-full flex flex-col justify-center items-center">
        
        <h1 className="head_text text-center">Discover and share Prompts
        <br/>
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
 
       <p className="desc text-center">This is an open source tool that orovides useful prompts for chatgGPT and other ai tools.</p>
       <Feed/>
      </section>
  );
}
