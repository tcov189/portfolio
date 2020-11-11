import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faTwitter, faHtml5, faCss3, faJs, faVuejs, faSass, faLaravel, faPhp, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from '@/plugins/FontAwesomeIcon.vue'

library.add(fas, faLinkedinIn, faGithub, faTwitter,faHtml5, faCss3, faJs, faVuejs, faSass, faLaravel, faPhp, faGitAlt)

export {
  FontAwesomeIcon
}