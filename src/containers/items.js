import { connect } from "react-redux";
import items from "../components/items";
import { getItems } from "../redux/actions/actions";

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

const dispatchStateToProps = {
  getItems
};

export default connect(mapStateToProps, dispatchStateToProps)(items);