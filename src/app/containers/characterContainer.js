import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import { newId } from '../../ducks/characterContainer/actions';
import {
  selectId,
  selectCharData,
} from '../../ducks/characterContainer/selectors';

class CharacterContainer extends Component {
  _handleClick = () => {
    this.props.setNewId(this.props.id + 1);
  };

  render() {
    return (
      <div>
        character
        <button onClick={this._handleClick}>Button</button>
      </div>
    );
  }
}

CharacterContainer.propTypes = {
  id: PropTypes.number,
  setNewId: PropTypes.func,
  charData: PropTypes.object,
};

const mapStateToProps = () =>
  createStructuredSelector({
    id: selectId(),
    charData: selectCharData(),
  });

const mapDispatchToProps = dispatch => ({
  setNewId(id) {
    dispatch(newId(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);
