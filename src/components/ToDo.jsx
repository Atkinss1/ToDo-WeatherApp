import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


export const ToDo = () => {
  return (
    <div className="Todo">
      <p>Write More Code</p>
      <div className="Todo">
        <FontAwesomeIcon icon={faPenToSquare} className="edit"/>
        <FontAwesomeIcon icon={faTrash} className="delete"/>
      </div>
    </div>
  )
};

