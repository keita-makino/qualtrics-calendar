import { useReducer, useState } from 'react';
import { createContainer } from 'react-tracked';
import { Input } from '../types/Input';
import { editInput } from './editInput';

export type GlobalState = {
  inputs: Input[];
};

const initialState: GlobalState = {
  inputs: [],
};

export type Action =
  | {
      type: 'ADD_INPUTS';
      inputs: Input[];
    }
  | {
      type: 'EDIT_INPUT';
      input: Input;
      index: number;
    }
  | {
      type: 'CLEAR_INPUT';
    };

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case 'ADD_INPUTS':
      return {
        ...state,
        inputs: [...state.inputs, ...action.inputs],
      };
    case 'EDIT_INPUT':
      return editInput(state, action.input, action.index);
    case 'CLEAR_INPUT':
      return {
        ...state,
        inputs: state.inputs.map((item) => ({
          label: item.label,
          htmlElement: item.htmlElement,
        })),
      };
    default:
      return state;
  }
};

const useGlobalState = () => useReducer(reducer, initialState);

export const { Provider, useTrackedState, useUpdate } =
  createContainer(useGlobalState);
