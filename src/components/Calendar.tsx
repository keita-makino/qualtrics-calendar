import { Grid, TextField, ThemeProvider } from '@mui/material';
import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import React, { useEffect, useState } from 'react';
import { useTrackedState, useUpdate } from '../store';
import { PickerType } from '../types';
import { theme } from '../themes';

type CalendarProps = {
  index: number;
  pickerType: PickerType;
};

export const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
  const update = useUpdate();
  const state = useTrackedState();
  const [moment, setMoment] = useState<Date | null>(null);

  const handleChange = (newMoment: any) => {
    setMoment(newMoment ? new Date(newMoment._d) : null);
    update({
      type: 'EDIT_INPUT',
      input: {
        ...state.inputs[props.index],
        moment: newMoment,
        value: newMoment ? newMoment._d.toString() : undefined,
      },
      index: props.index,
    });
  };

  useEffect(() => {
    if (state.inputs[props.index].moment === undefined) {
      setMoment(null);
    }
  }, [state.inputs[props.index].moment]);

  return (
    <ThemeProvider theme={theme}>
      <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
        {props.pickerType === 'date' ? (
          <DatePicker
            label={`Type or select the date`}
            value={moment}
            onChange={(newMoment) => handleChange(newMoment)}
            slotProps={{ textField: { variant: 'outlined' } }}
          />
        ) : props.pickerType === 'time' ? (
          <TimePicker
            label={`Type or select the date`}
            value={moment}
            onChange={(newMoment) => handleChange(newMoment)}
            slotProps={{ textField: { variant: 'outlined' } }}
          />
        ) : (
          <DateTimePicker
            label={`Type or select the date and time`}
            value={moment}
            onChange={(newMoment) => handleChange(newMoment)}
            slotProps={{ textField: { variant: 'outlined' } }}
          />
        )}
      </Grid>
    </ThemeProvider>
  );
};
