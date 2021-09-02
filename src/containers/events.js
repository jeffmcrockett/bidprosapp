import { connect } from "react-redux";
import events from "../components/events";
import { getEvents } from "../redux/actions/actions";

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

const dispatchStateToProps = {
  getEvents
};

export default connect(mapStateToProps, dispatchStateToProps)(events);