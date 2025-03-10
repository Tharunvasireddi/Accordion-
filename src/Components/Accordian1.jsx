import React, { useState } from "react";
import accordionData from "../data";

function Accordian1() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(presentId) {
    setSelected(presentId === selected ? null : presentId);
  }

  function handleMultipleSelection(presentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfPresentId = cpyMultiple.indexOf(presentId);

    if (findIndexOfPresentId === -1) {
      cpyMultiple.push(presentId);
    } else {
      cpyMultiple.splice(findIndexOfPresentId, 1);
    }

    setMultiple(cpyMultiple);
  }

  return (
    <div className="flex flex-col items-center bg-slate-400 p-4 gap-3 rounded-sm">
      <button
        className="bg-green-600 text-center  p-2 rounded-lg text-white"
        onClick={() => setMulti(!enableMulti)}
      >
        {enableMulti
          ? "Disable multiple selection"
          : "Enable multiple selection"}
      </button>

      <div className="w-full">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((dataItem) => (
            <div key={dataItem.id}>
              <div
                onClick={() =>
                  enableMulti
                    ? handleMultipleSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                className="flex justify-center gap-2 p-2 bg-slate-100 mt-1"
              >
                <h3 className="text-xl font-serif p-1">{dataItem.title}</h3>
                <span>+</span>
              </div>

              {selected === dataItem.id || multiple.includes(dataItem.id) ? (
                <div className="flex-wrap mb-1 bg-slate-100">
                  {dataItem.content}
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian1;
