import { Calendar } from './Calendar';
import styled from '@emotion/styled';
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { PickerType } from '../types';

export type InputRowProps = {
  label: string;
  index: number;
  pickerType: PickerType;
};

const StyledGrid = styled(Grid)({
  padding: '0.5rem',
  [`& .MuiTypography-root`]: {
    paddingRight: '2rem',
  },
}) as typeof Grid;

export const InputRow: React.FC<InputRowProps> = (props: InputRowProps) => {
  return (
    <StyledGrid
      item
      container
      xl={12}
      lg={12}
      md={12}
      sm={12}
      xs={12}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography>{props.label}</Typography>
      <Box flexGrow={1}>
        <Calendar index={props.index} pickerType={props.pickerType} />
      </Box>
    </StyledGrid>
  );
};
