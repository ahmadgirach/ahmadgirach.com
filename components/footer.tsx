import SocialLinks from "./social-links";

const Footer = () => {
  return (
    <footer className="text-sm text-gray-700 py-2">
      <div className="flex justify-between items-center">
        <div>
          <span>&copy; {new Date().getFullYear()}. Ahmad Girach.</span>
        </div>
        <div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
