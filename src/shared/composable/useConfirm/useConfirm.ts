import { inject, type InjectionKey } from "vue";
import type { ConfirmState } from "./types";

export const confirmKey: InjectionKey<ConfirmState> = Symbol("confirm");

export const useConfirm = () => {
  const confirm = inject<ConfirmState>(confirmKey);

  if (!confirm) {
    throw new Error("useConfirm должен быть использован с ConfirmProvider");
  }

  const openConfirm = (state: Omit<ConfirmState, "open">) => {
    Object.assign(confirm, state);

    confirm.open = true;
  };

  return { openConfirm };
};
