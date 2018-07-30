import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { updateText, reset } from "./duck";
import Search from "./Search";

const mapStateToProps = ({ search }) => ({ text: search });

const enhance = compose(
  connect(mapStateToProps, { updateText, reset }),
  withHandlers({
    handleTextUpdate: (props) => (event) => {
      props.updateText(event.target.value);
    }
  })
);

export default enhance(Search);
