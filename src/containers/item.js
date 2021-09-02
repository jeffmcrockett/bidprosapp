import { connect } from "react-redux";
import newItem from "../components/newItem";
import { addItem } from "../redux/actions/actions";

const dispatchStateToProps = {
  addItem,
};

export default connect(null, dispatchStateToProps)(newItem);