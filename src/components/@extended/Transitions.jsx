import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { Collapse, Fade, Box, Grow, Slide, Zoom } from '@mui/material';

// ==============================|| TRANSITIONS ||============================== //

const Transitions = forwardRef(({ children, position = 'top-left', sx, type = 'grow', direction = 'up', ...others }, ref) => {
  let positionSX = {
    transformOrigin: '0 0 0'
  };

  switch (position) {
    case 'top-right':
      positionSX = {
        transformOrigin: 'top right'
      };
      break;
    case 'top':
      positionSX = {
        transformOrigin: 'top'
      };
      break;
    case 'bottom-left':
      positionSX = {
        transformOrigin: 'bottom left'
      };
      break;
    case 'bottom-right':
      positionSX = {
        transformOrigin: 'bottom right'
      };
      break;
    case 'bottom':
      positionSX = {
        transformOrigin: 'bottom'
      };
      break;
    case 'top-left':
    default:
      positionSX = {
        transformOrigin: '0 0 0'
      };
      break;
  }

  return (
    <Box ref={ref} {...sx}>
      {type === 'grow' && (
        <Grow
          {...others}
          timeout={{
            appear: 0,
            enter: 150,
            exit: 150
          }}
        >
          <Box sx={positionSX}>{children}</Box>
        </Grow>
      )}

      {type === 'collapse' && (
        <Collapse {...others} sx={positionSX}>
          {children}
        </Collapse>
      )}

      {type === 'fade' && (
        <Fade
          {...others}
          timeout={{
            appear: 0,
            enter: 300,
            exit: 150
          }}
        >
          <Box sx={positionSX}>{children}</Box>
        </Fade>
      )}

      {type === 'slide' && (
        <Slide
          {...others}
          timeout={{
            appear: 0,
            enter: 150,
            exit: 150
          }}
          direction={direction}
        >
          <Box sx={positionSX}>{children}</Box>
        </Slide>
      )}

      {type === 'zoom' && (
        <Zoom {...others}>
          <Box sx={positionSX}>{children}</Box>
        </Zoom>
      )}
    </Box>
  );
});

Transitions.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  type: PropTypes.oneOf(['grow', 'fade', 'collapse', 'slide', 'zoom']),
  position: PropTypes.oneOf(['top-left', 'top-right', 'top', 'bottom-left', 'bottom-right', 'bottom']),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right'])
};

export default Transitions;

export const PopupTransition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} timeout={200} {...props} />;
});
