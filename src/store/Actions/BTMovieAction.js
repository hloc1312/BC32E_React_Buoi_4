import { DAT_VE, HUY_VE } from "../Types/BTMovieType";

export const handleGhe = (ghe) => {
  return {
    type: DAT_VE,
    payload: ghe,
  };
};

export const removeGhe = (soGhe) => {
  return {
    type: HUY_VE,
    payload: soGhe,
  };
};
