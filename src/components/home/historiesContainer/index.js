import React, { Component } from "react";

// redux
import { bindActionCreators } from "redux";
import * as historyActions from "../../../redux/actions/historyActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// children
import HistoryItem from "../historyItem";

class HistoriesContainer extends Component {
  componentDidMount() {
    const { actions, histories } = this.props;

    if (histories.length === 0) {
      actions.loadHistories().catch(error => {
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
  actions: PropTypes.object.isRequired,
  histories: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    histories: state.histories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadHistories: bindActionCreators(historyActions.loadHistories, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoriesContainer);
