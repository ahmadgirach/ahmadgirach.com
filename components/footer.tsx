import SocialLinks from "./social-links";

const Footer = () => {
  return (
    <footer className="text-sm py-2 my-10">
      <div className="flex justify-between items-center gap-2 md:gap-0">
        <div>
          <span>&copy; {new Date().getFullYear()}. Ahmad Girach.</span>
          <br />
          <span className="text-sm text-balance">
            This website is open source. You can access the source code{" "}
            <a
              href="https://github.com/ahmadgirach/ahmadgirach.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-800 font-semibold italic"
            >
              here.
            </a>
          </span>
        </div>
        <div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
