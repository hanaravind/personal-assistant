import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../../global/globalReducer";
import MessagePopup from "./component/MessagePopup";

const Popup = () => {
    const dispatch = useDispatch();
    const popup = useSelector((state) => state.global.popup);
    const [component, setComponent] = useState(null);

    const closePopup = async (e) => {
        await dispatch(setPopup({ show: false, type: "" }));
      };

    useEffect(() => {
        setComponent(popup.type);
    }, [popup.type]);

  const list = {
    'message-popup': <MessagePopup onClose={closePopup}/>
  }

  return (
    <div className="popup-container">
    {popup?.show && <div className="fixed inset-0 bg-black opacity-50 z-[999]" onClick={closePopup}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        </div>
    </div>}
    {(popup?.show && list[component]) && <div
      className="absolute top-1/2 w-[600px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-300 z-[9999]"
    >
      {list[component]}
      <div onClick={closePopup} className="bg-black absolute sm:cursor-pointer rounded-[50%] -top-[12px] -right-[14px] py-1 px-[10px] text-white">X</div>
    </div>}
    </div>
  );
};

export default Popup;