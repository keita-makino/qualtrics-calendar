import React, { useEffect } from 'react';
import { ClearButton } from './ClearButton';
import { useUpdate } from '../store';
import { InputForm } from './InputForm';
import { Grid } from '@mui/material';
import { PickerType } from '../types';

type Props = {
  directionContainer: HTMLElement;
  pickerType: PickerType;
};

export const Container: React.FC<Props> = (props) => {
  const update = useUpdate();

  const inputHTMLElements =
    props.directionContainer.getElementsByTagName('input');
  const labelHTMLElements =
    props.directionContainer.getElementsByTagName('label');

  useEffect(() => {
    if ([...labelHTMLElements].length > 0) {
      update({
        type: 'ADD_INPUTS',
        inputs: [...labelHTMLElements].map((item, index) => ({
          label: item.children[0].textContent
            ? item.children[0].textContent
            : '',
          htmlElement: inputHTMLElements[index],
        })),
      });
    }
  }, []);

  return (
    <Grid container>
      <InputForm pickerType={props.pickerType} />
      <ClearButton />
    </Grid>
  );
};
