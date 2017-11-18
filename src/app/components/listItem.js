import React from 'react';
import PropTypes from 'prop-types';

export const ListItem = ({ data }) => (
  <ul>
    {Object.keys(data).map((item, index) => (
      <li key={index}>
        {item}&nbsp;{data[item]}
      </li>
    ))}
  </ul>
);

ListItem.propTypes = {
  data: PropTypes.object,
};
