import { faFileEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Logo = () => {
    return ( 
        <div className="text-2xl text-center py-4 font-heading">
            ContentCraftSEO
            <FontAwesomeIcon icon={faFileEdit} className="text-2xl text-slate-100 ml-1" />
            </div>
     );
}
 
