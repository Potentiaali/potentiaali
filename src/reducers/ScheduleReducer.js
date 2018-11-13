const scheduleData = require("../data/schedule.json");

const initialState = {
  schedule: scheduleData,
  selectedSchedule: "all",
  start: "11:00",
  end: "20:00",
  type: "all",
  modalId: null
};

const ScheduleTypes = {
  CHANGE_SCHEDULE: "CHANGE_SCHEDULE",
  SET_MODAL_ID: "SET_MODAL_ID",
  CLOSE_MODAL: "CLOSE_MODAL"
};

export const changeSchedule = selected => {
  return {
    type: ScheduleTypes.CHANGE_SCHEDULE,
    selected
  };
};

export const setModalId = modalId => {
  return {
    type: ScheduleTypes.SET_MODAL_ID,
    modalId
  };
};

export const closeModal = () => {
  return {
    type: ScheduleTypes.CLOSE_MODAL
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ScheduleTypes.CHANGE_SCHEDULE:
      return {
        ...state,
        ...{
          selectedSchedule: action.selected,
          type: action.selected
        }
      };
    case ScheduleTypes.CLOSE_MODAL:
      return {
        ...state,
        ...{
          modalId: null
        }
      };
    case ScheduleTypes.SET_MODAL_ID:
      return {
        ...state,
        ...{
          modalId: action.modalId
        }
      };
    default:
      return state;
  }
};
