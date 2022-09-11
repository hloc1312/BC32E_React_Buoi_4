import { DAT_VE, HUY_VE } from "../Types/BTMovieType";

const stateDefault = {
  dsGhe: [],
};

export const BTMovie = (state = stateDefault, { type, payload }) => {
  switch (type) {
    case DAT_VE: {
      const data = [...state.dsGhe];
      const index = data.findIndex((item) => item.soGhe === payload.soGhe);
      if (index !== -1) {
        data.splice(index, 1);
      } else {
        data.push(payload);
      }
      return { ...state, dsGhe: data };
    }
    case HUY_VE: {
      const data = [...state.dsGhe];
      const index = data.findIndex((item) => item.soGhe === payload);
      if (index !== -1) {
        data.splice(index, 1);
      }
      return { ...state, dsGhe: data };
    }
    default:
      return { ...state };
  }
};
