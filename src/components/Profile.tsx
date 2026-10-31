import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { philosophy, site, socialLinks } from "../data/content";

const socialIcons = {
  X: FaXTwitter,
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  WhatsApp: FaWhatsapp,
} as const;

export function Profile() {
  return (
    <aside className="profile">
      <div className="avatar-ring">
        <div className="avatar">
          <img src={site.avatar} alt="" decoding="async" />
        </div>
      </div>

      <h1 className="profile-name">{site.name}</h1>
      <p className="profile-bio">{site.bio}</p>

      <div className="profile-philosophy">
        <h2 className="profile-section-label">Philosophy</h2>
        {philosophy.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <nav className="profile-social" aria-label="Social links">
        {socialLinks.map((link) => {
          const Icon = socialIcons[link.label];
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
