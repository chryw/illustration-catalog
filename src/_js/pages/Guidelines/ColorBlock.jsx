import * as React from 'react';
import PropTypes from 'prop-types';

const ColorBlock = (props) => {
  const colorBlockStyles = {
    backgroundColor: props.background,
    color: props.foreground,
  };
  return (
    <div
      className="color-block"
      style={colorBlockStyles}
    >
      <div className="color-block-label">{props.background}</div>
    </div>
  );
};

ColorBlock.propTypes = {
  background: PropTypes.string,
  foreground: PropTypes.string,
};

ColorBlock.defaultProps = {
  background: '#CCCCCC',
  foreground: '#000000',
};

export default ColorBlock;
