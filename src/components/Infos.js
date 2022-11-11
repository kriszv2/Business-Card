import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Infos() {
  return (
    <>
      <img src="https://picsum.photos/400" alt="profile" />
      <h1 className="business-card-name">Krisztian Valyi</h1>
      <h2 className="business-card-occupation">Full stack developer</h2>
      <div className="contact-buttons">
        <a href="1" alt="email">
          <button>
            <EmailIcon className="email-icon" /> Email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/krisztian-valyi/"
          alt="Linkedin profile link"
        >
          <button className="linkedin-button">
            <LinkedInIcon className="linkedin-icon" /> LinkedIn
          </button>
        </a>
      </div>
    </>
  );
}
