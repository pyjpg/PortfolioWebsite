import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: 'Email',
    href: 'mailto:titas.r@outlook.com',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/titas-r/',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/pyjpg',
  },
  {
    title: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~017fd5c096fa165974',
  },
]

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(link => (
              <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5">
                <span className="font-semibold">{link.title}</span>
                <ArrowRightIcon className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
