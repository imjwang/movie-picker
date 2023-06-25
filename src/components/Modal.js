import { useContext, useState } from "react";
import { GlobalContext } from "@/context/globalStore";
import Sheet from "./Sheet";

const Modal = ({ children }) => {
  const {
    state: { showModal },
    dispatch,
  } = useContext(GlobalContext);

  return (
    <>
      <input
        checked={showModal}
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
        onChange={() => {
          dispatch({ type: "SET_MODAL", payload: !showModal });
        }}
      />
      <label htmlFor="my-modal-4" className="modal cursor-pointer modal-open bg-cream">
        <label className="modal-box relative">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <Sheet prose>{children}</Sheet>
        </label>
      </label>
    </>
  );
};

export default Modal;