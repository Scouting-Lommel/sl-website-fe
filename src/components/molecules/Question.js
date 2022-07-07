import { useState } from "react";
import { Markup } from 'interweave';

export default function Question({ info }) {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="accordion-item bg-white border border-gray-200">
      <h2 className="accordion-header mb-0" id="headingOne">
        <button
          className="
          accordion-button
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-left
          bg-white
          text-black
          border-0
          rounded-none
          transition
          focus:outline-none
        "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
          onClick={() => setVisible(!isVisible)}
        >
          {info.Question}
        </button>
      </h2>
      {isVisible && 
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body py-4 px-5">
          <Markup content={info.Answer}/>
        </div>
      </div>
      }
    </div>
  );
}
