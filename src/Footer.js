import React from "react";
import "./Footer.css"
  
const FooterTwo = () => {
    return (
        <div class="footer-basic">
            <footer>
                <div class="social">
                        <a class="social-icon" href="https://www.linkedin.com/in/aurelienrabet/"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="https://www.root-me.org/Neska?inc=score&lang=fr" src="../rootme.jpg">
                        <i class="	fas fa-user-secret"></i>
                        </a>
                        <a class="social-icon" href="https://snowball.gg/fr/rainbow-six-siege/coach/neska">
                        <i class="	fas fa-gamepad"></i>
                        </a>
                        <a class="social-icon" href="https://twitter.com/NeskaR6S"><i class="fab fa-twitter"></i></a>
                </div>
                <p class="copyright"><a href="mentions">Mentions Legales</a></p>
                <p class="copyright">Copyright © 2022 A.RABET. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

  export default FooterTwo;
  