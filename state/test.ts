import { atom, selector } from "recoil";

// atom just holds the thing, you give it
export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

// derives state from something else
export const textLengthState = selector({
  key: "textLengthState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
