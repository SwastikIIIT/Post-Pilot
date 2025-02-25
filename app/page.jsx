import Feed from "@/components/Feed";

export default function Home() {
  return (
      <section className="w-full flex flex-col justify-center items-center">
        
        <h1 className="head_text text-center">Real time blogs at your fingerprint
        <br/>
        <span className="orange_gradient text-center">Stay Updated,Stay connected</span>
        </h1>
 
       <p className="desc text-center">This is a real-time and open source blogging platform that enables instant content updates and seamless reader engagement</p>
       <Feed/>
      </section>
  );
}
