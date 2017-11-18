import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { ListItem } from '../components/listItem';

import { newId } from '../../ducks/planetContainer/actions';
import {
  selectId,
  selectCharData,
} from '../../ducks/planetContainer/selectors';

class PlanetContainer extends Component {
  _handleClick = () => {
    this.props.setNewId(this.props.id + 1);
  };

  render() {
    return (
      <div>
        planet
        <ListItem data={this.props.planetData} />
        <button onClick={this._handleClick}>Button</button>
      </div>
    );
  }
}

PlanetContainer.propTypes = {
  id: PropTypes.number,
  setNewId: PropTypes.func,
  planetData: PropTypes.object,
};

const mapStateToProps = () =>
  createStructuredSelector({
    id: selectId(),
    planetData: selectCharData(),
  });

const mapDispatchToProps = dispatch => ({
  setNewId(id) {
    dispatch(newId(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetContainer);
