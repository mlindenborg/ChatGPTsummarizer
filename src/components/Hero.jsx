import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 p-3">
        <img src={logo} alt="sumz_logo" className="w-16 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/mlindenborg")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summerize blog posts with <br className="max-md:hidden" />
        <span className="orange_gradient">SummerizerAI</span>
      </h1>
      <h2 className="desc">
        Simplyfy your reading with SummerizerAI, an AI open-source blog post
        summarizer that transforms long blog posts into clear and concise
        summeries
      </h2>
    </header>
  );
};

export default Hero;
