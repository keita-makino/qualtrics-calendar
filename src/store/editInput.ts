import { stepButtonClasses } from '@mui/material';
import { Input } from '../types/Input';
import { GlobalState } from './index';

export const editInput = (_state: GlobalState, input: Input, index: number) => {
  const state = { ..._state };
  console.log(state);
  if (index < state.inputs.length) {
    state.inputs[index].moment = input.moment;
    state.inputs[index].value = input.value;
    if (state.inputs[index].htmlElement) {
      state.inputs[index].htmlElement!.value = input.value || '';
    }
  }
  return state;
};
