import { articleData } from "../data";
import Article from "../components/ui/Article";

const page = () => {
  return (
    <section className="px-4">
      <p className="text-center text-lg w-full md:text-2xl font-serif mt-20 mb-8">
        ✏️ Passionate about technology, I write to share my work. Explore my
        collection, with more to come.
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
