import React from 'react';
import styled from 'styled-components';

const StrokedText = styled.h1`
  font-family: 'Rubik', sans-serif;
  font-style: ${ props => props.italic ? 'italic' : 'normal' };
  -moz-text-fill-color: ${ props => props.fill ? props.fill : '#00000000'};
  -webkit-text-fill-color: ${ props => props.fill ? props.fill : '#00000000'};
  -moz-text-stroke-color: ${ props => props.stroke ? props.stroke : '#000'};
  -webkit-text-stroke-color: ${ props => props.stroke ? props.stroke : '#000'};
  -moz-text-stroke-width: ${ props => props.strokeWidth ? props.strokeWidth : '2px' };
  -webkit-text-stroke-width: ${ props => props.strokeWidth ? props.strokeWidth : '2px' };
`;

export default StrokedText;
