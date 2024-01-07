import { articleData } from "../data";
import Article from "../components/ui/Article";

const page = () => {
  return (
    <section className="px-4">
      <p className="text-center text-2xl md:text-3xl font-serif mt-20 mb-8">
        I like to write about tech, heres all i have written.
      </p>
      <>
        {articleData.map((item) => (
          <Article
            link={item.link}
            description={item.description}
            time={item.time}
            title={item.title}
            key={item.link}
          />
        ))}
      </>
    </section>
  );
};

export default page;
