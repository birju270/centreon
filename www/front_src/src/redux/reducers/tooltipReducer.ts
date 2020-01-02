import * as actions from '../actions/tooltipActions.ts';

interface TooltipState {
  toggled: boolean;
  label: string;
  x: number;
  y: number;
}

const initialState = {
  toggled: false,
  label: '',
  x: 0,
  y: 0,
};

const tooltipReducer = (
  state: TooltipState = initialState,
  action: object,
): object => {
  // to be remplaced by ReduxState when when types definition will be included
  const { data } = action;
  switch (action.type) {
    case actions.UPDATE_TOOLTIP:
      return {
        ...state,
        ...data,
      };
    default:
      return state;
  }
};

export default tooltipReducer;