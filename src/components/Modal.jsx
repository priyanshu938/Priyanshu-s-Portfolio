import React, { useState } from "react";

const Modal = ({ link, modalOpen, setModalOpen }) => {
  const [modal, setModal] = useState(modalOpen);
  return (
    <>
      {modal && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-400 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-blue border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setModal(false);
                      setModalOpen(!modalOpen);
                    }}
                  >
                    <span className="bg-blue text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-0 flex-auto">
                  <iframe
                    className="iframeSet"
                    src={link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
    </>
  );
};

export default Modal;
