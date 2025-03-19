import { useAttriMedia, useMediaQuery } from "./index.js";
import { globalContext, pawa, state ,setPlugin} from "./node_modules/pawajs/index.js";

setPlugin(useAttriMedia)
const sm=useMediaQuery('(max-width:678px)')
const allwell=state({name:'allwell'})
globalContext({allwell})
pawa(document.querySelector('#app'))
