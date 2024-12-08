import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';


export const ToDo = ({task}) => {
  return (
    <div className="Todo">
      <p>{task}</p>
      <div className="Todo">
        <FontAwesomeIcon icon={faPenToSquare} className="edit"/>
        <FontAwesomeIcon icon={faTrash} className="delete"/>
      </div>
    </div>
  )
};

ToDo.propTypes = {
  task: PropTypes.string.isRequired
}