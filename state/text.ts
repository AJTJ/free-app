import { proxy } from "valtio";
import { derive } from "valtio/utils";

type TextState = string;

export const textStore = proxy<{ text?: TextState }>({ text: "defaultText" });

export const setText = (newText: string) => {
  textStore.text = newText;
};

export const derivedText = derive({
  textLength: (get) => {
    let { text } = get(textStore);
    return text?.length || 0;
  },
});
