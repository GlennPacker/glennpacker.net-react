import React, { Component } from "react";

// redux
import { loadHistories } from "../../../redux/actions/historyActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// children
import HistoryItem from "../historyItem";

class HistoriesContainer extends Component {
  componentDidMount() {
    const { loadHistories, histories } = this.props;

    if (histories.length === 0) {
      loadHistories().catch(error => {
        alert("Loading history failed" + error);
      });
    }
  }

  render() {
    return (
      <ul>
        {this.props.histories.map((item, i) => {
          return <HistoryItem key={i} historyItem={item} />;
        })}
      </ul>
    );
  }
}

HistoriesContainer.propTypes = {
  loadHistories: PropTypes.func.isRequired,
  histories: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    histories: state.histories
  };
}

const mapDispatchToProps = {
  loadHistories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoriesContainer);
