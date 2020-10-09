const initialState = {
  companies: []
};

const ScheduleTypes = {
  SET_COMPANIES: "SET_COMPANIES"
};

export const setCompanies = companies => ({
  type: ScheduleTypes.SET_COMPANIES,
  payload: {
    companies
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ScheduleTypes.SET_COMPANIES:
      return { ...state, companies: { ...action.payload.companies } };
    default:
      return state;
  }
};
