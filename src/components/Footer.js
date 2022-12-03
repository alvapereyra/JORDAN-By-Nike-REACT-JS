import logofb from "../assets/img/icons/FB.png"
import logoig from "../assets/img/icons/IG.png"
import logolk from "../assets/img/icons/Linkedin.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerIcon">
        <a href="https://www.facebook.com/" target="blank"><img src={logofb} alt="fb" width={30} height={30}/></a>
        <a href="https://www.instagram.com/" target="blank"><img src={logoig} alt="ig" width={30} height={30}/></a>
        <a href="https://www.linkedin.com/" target="blank"><img src={logolk} alt="lk" width={30} height={30}/></a>
      </div>
    </footer>
  )
}

export default Footer