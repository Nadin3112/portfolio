import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';

type SkillPropsType = {
  iconId: string
  title: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <SKillItem>
      <Icon iconId = {props.iconId} viewBox={"-15 0 150 150"}/>
      <SKillTitle>{props.title}</SKillTitle>
    </SKillItem>
  );
};
const SKillItem = styled.li`
  align-items: center;
  background-color: ${theme.colors.secondaryBg};
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 150px;
  justify-content: center;
  position: relative;
  padding: 20px;
  border: 5px solid transparent;
  border-image: linear-gradient(to left top,#adf2f7 10%,  transparent 30%, transparent 70%, #adf2f7 90%);
  border-image-slice: 1;
`
const SKillTitle = styled.h3`

`

