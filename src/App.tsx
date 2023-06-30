import { FormEvent, useState } from "react";
import { ExperienceForm } from "./ExperienceForm";
import { AccountForm } from "./AccountForm";
import { useMultistepForm } from "./useMultistepForm";
import { BasicForm } from "./BasicForm";

interface FormData {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  bio: string;
  experience: string;
  noticePeriod: string;
  skills: string;
  resumeLink: string;
  linkedInLink: string;
  portfolioLink: string;
  company: string;
  companyLinkedIn: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  password: string;
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  contactNumber: "",
  bio: "",
  experience: "",
  noticePeriod: "",
  skills: "",
  resumeLink: "",
  linkedInLink: "",
  portfolioLink: "",
  email: "",
  company: "",
  companyLinkedIn: "",
  position: "",
  startDate: "",
  endDate: "",
  description: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <BasicForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
      <ExperienceForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }

  return (
    // <div className="items-center bg-black border-2 border-solid border-black p-2 m-1 w-3/4">
    //   <form onSubmit={onSubmit}>
    //     <div className="flex text-white text-xl justify-between">
    //       <span>
    //         Page {currentStepIndex + 1} / {steps.length}
    //       </span>
    //       <img
    //         className="w-5 h-5"
    //         src="https://cdn-icons-png.flaticon.com/512/66/66847.png"
    //         alt=""
    //       />
    //     </div>
    //     <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
    //       {steps.map((step, index) => (
    //         <li
    //           key={index}
    //           className={`flex md:w-full items-center ${
    //             index === currentStepIndex
    //               ? "text-blue-600 dark:text-blue-500"
    //               : ""
    //           } sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
    //         >
    //           <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
    //             {index + 1 === currentStepIndex && (
    //               <svg
    //                 aria-hidden="true"
    //                 className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
    //                 fill="currentColor"
    //                 viewBox="0 0 20 20"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
    //                   clipRule="evenodd"
    //                 ></path>
    //               </svg>
    //             )}
    //             {step}
    //             Personal
    //             <span className="hidden sm:inline-flex sm:ml-2">Info</span>
    //           </span>
    //         </li>
    //       ))}
    //       <li className="flex items-center">
    //         <span className="mr-2">{steps.length + 1}</span>
    //         Confirmation
    //       </li>
    //     </ol>
    //     {step}
    //     <div className="flex gap-1 justify-end">
    //       {!isFirstStep && (
    //         <button
    //           className="bg-black text-white hover:bg-white hover:text-black m-2 px-2 py-1 rounded-xl"
    //           type="button"
    //           onClick={back}
    //         >
    //           Back
    //         </button>
    //       )}
    //       <button
    //         className="bg-black text-white hover:bg-white hover:text-black m-2 px-2 py-1 rounded-xl"
    //         type="submit"
    //       >
    //         {isLastStep ? "Finish" : "Next"}
    //       </button>
    //     </div>
    //   </form>
    // </div>

    <div className="items-center border-2 border-solid border-black p-2 m-1 w-3/4">
      <form onSubmit={onSubmit}>
        <div className="flex text-white text-xl justify-between">
          <span>
            Page {currentStepIndex + 1} / {steps.length}
          </span>
          <img
            className="w-5 h-5"
            src="https://cdn-icons-png.flaticon.com/512/66/66847.png"
            alt=""
          />
        </div>
        {step}
        <div className="flex gap-1 justify-end">
          {!isFirstStep && (
            <button
              className="bg-black text-white hover:bg-white hover:text-black m-2 px-2 py-1 rounded-xl "
              type="button"
              onClick={back}
            >
              Back
            </button>
          )}
          <button
            className="bg-black text-white hover:bg-white hover:text-black m-2 px-2 py-1 rounded-xl "
            type="submit"
          >
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
