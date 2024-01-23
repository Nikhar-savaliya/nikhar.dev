import { Mail } from "lucide-react";
import Badge from "./ui/Badge";
import { Link } from "react-router-dom";
import Button from "./ui/Button";

const Contact = () => {
  return (
    <section className="flex flex-col gap-2 items-center justify-center max-w-6xl mt-36 mb-24 px-4 mx-auto">
      <Badge variant="success">Open for full-time jobs or freelance</Badge>

      <p className="font-serif text-3xl md:text-4xl max-w-lg text-center">
        Feel free to contact me anytime!
      </p>
      <p className="max-w-md text-xs md:text-sm py-4 text-center text-zinc-600">
        I am eagerly searching for fresh opportunities to level up my skills. If
        you're interested, let's have a chat!
      </p>
      <Link to="mailto:nikhar663@gmail.com" target="_blank">
        <div title="Mail To: nikhar663@gmail.com">
          <Button variant="default">
            <Mail />
            Get in Touch
          </Button>
        </div>
      </Link>
    </section>
  );
};

export default Contact;
