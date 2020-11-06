import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from '@/plugins/FontAwesomeIcon.vue'

library.add(fas, faLinkedinIn, faGithub, faTwitter)

export {
  FontAwesomeIcon
}