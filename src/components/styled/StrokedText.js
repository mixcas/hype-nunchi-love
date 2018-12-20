import styled from 'styled-components';

import { colorYellow } from 'styl/constants';

const hoverTransition = 300

const StrokedText = styled.span`
  font-family: 'Rubik', sans-serif;
  font-style: ${ props => props.italic ? 'italic' : 'normal' };
  -moz-text-fill-color: ${ props => props.fill ? props.fill : '#00000000'};
  -webkit-text-fill-color: ${ props => props.fill ? props.fill : '#00000000'};
  -moz-text-stroke-color: ${ props => props.stroke ? props.stroke : '#000'};
  -webkit-text-stroke-color: ${ props => props.stroke ? props.stroke : '#000'};
  -moz-text-stroke-width: ${ props => props.strokeWidth ? props.strokeWidth : '2px' };
  -webkit-text-stroke-width: ${ props => props.strokeWidth ? props.strokeWidth : '2px' };
  transition: -webkit-text-fill-color ${hoverTransition}ms, -moz-text-fill-color ${hoverTransition}ms, -webkit-text-stroke-color ${hoverTransition}ms, -moz-text-stroke-color ${hoverTransition}ms;
  &:hover {
    -moz-text-stroke-color: ${ props => props.hover ? props.hover : colorYellow };
    -webkit-text-stroke-color: ${ props => props.hover ? props.hover : colorYellow };
  }
`;

export default StrokedText;
