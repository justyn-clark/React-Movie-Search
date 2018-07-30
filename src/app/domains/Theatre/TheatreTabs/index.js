import { connect } from "react-redux";
import { compose, lifecycle, withHandlers } from "recompose";
import { setActiveTab, getTheatres } from "../duck";
import TheatreTabs from "./TheatreTabs";

const mapStateToProps = ({ theatre }) => ({
  activeTab: theatre.activeTab,
  theatres: theatre.theatres
});

const enhance = compose(
  connect(mapStateToProps, { setActiveTab, getTheatres }),
  withHandlers({
    handleTabClick: (props) => (event) => {
      props.setActiveTab(event.target.getAttribute('data-name'));
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.getTheatres();
    }
  })
);

export default enhance(TheatreTabs);
