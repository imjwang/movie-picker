import { useContext, useState } from "react";
import { GlobalContext } from "@/context/globalStore";

const Modal = () => {
  const {
    state: { showModal },
    dispatch,
  } = useContext(GlobalContext);

  return (
    <>
      <input
        initialChecked={showModal}
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
        onChange={() => {
          dispatch({ type: "SET_MODAL", payload: !showModal });
        }}
      />
      <label htmlFor="my-modal-4" className="modal cursor-pointer modal-open">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You&apos;ve been selected for a chance to get one year of
            subscription to use Wikipedia for free!
          </p>
        </label>
      </label>
    </>
  );
};

export default Modal;
