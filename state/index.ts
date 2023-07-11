export * from "./text";
export * from "./form";
import "valtio";
import { useSnapshot } from "valtio";

export const useLooseSnapshot = <T extends object>(state: T) =>
  useSnapshot(state) as T;
