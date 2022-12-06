import { Grid } from '@mui/material';
import React from 'react';
import { useTrackedState } from '../store';
import { PickerType } from '../types';
import { InputRow } from './InputFormRow';

type Props = {
  pickerType: PickerType;
};

export const InputForm: React.FC<Props> = (props) => {
  const state = useTrackedState();

  return (
    <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
      {state.inputs.map((item: { label: string }, index: number) => {
        return (
          <InputRow
            label={item.label}
            index={index}
            pickerType={props.pickerType}
          />
        );
      })}
    </Grid>
  );
};
