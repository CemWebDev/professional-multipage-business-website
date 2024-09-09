import { Link } from "react-router-dom";
import { resourcesLinks, platformLinks, communityLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="max-w-[1100px] mx-auto xl:max-w-full py-4 px-8">
      <div className="flex items-center sm:items-start flex-wrap gap-8 justify-between mt-10 border-t border-neutral-500 py-4">
        <div className="text-3xl uppercase font-bold tracking-wider text-fuchsia-600">
          <Link>Logo</Link>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h1>Resources</h1>
          <ul className="flex flex-col items-start gap-2">
            {resourcesLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="hover:text-fuchsia-500"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h1>Platforms</h1>
          <ul className="flex flex-col items-start gap-2">
            {platformLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="hover:text-fuchsia-500"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h1>Community</h1>
          <ul className="flex flex-col items-start gap-2">
            {communityLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="hover:text-fuchsia-500"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
