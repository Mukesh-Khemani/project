import { FormWrapper } from "./FormWrapper";

interface AccountData {
  bio: string;
  experience: string;
  noticePeriod: string;
  skills: string;
  resumeLink: string;
  linkedInLink: string;
  portfolioLink: string;
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({
  bio,
  experience,
  noticePeriod,
  skills,
  resumeLink,
  linkedInLink,
  portfolioLink,
  updateFields,
}: AccountFormProps) {
  return (
    <div>
      <div className=" flex text-white text-4xl text-bold justify-center m-3 ">
        Account Details
      </div>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="bio"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Bio
            </label>
            <input
              type="text"
              //id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="I am a Fullstack Developer"
              required
              value={bio}
              onChange={(e) => updateFields({ bio: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="experience"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Experience (in Months)
            </label>
            <input
              type="number"
              //id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="12"
              required
              value={experience}
              onChange={(e) => updateFields({ experience: e.target.value })}
            />
          </div>

          <div>
            <label
              htmlFor="noticePeriod"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Notice Period (in Days)
            </label>
            <input
              type="number"
              //id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
              value={noticePeriod}
              onChange={(e) => updateFields({ noticePeriod: e.target.value })}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="skills"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Skills
          </label>
          <input
            type="text"
            //id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="React, TypeScript, Python"
            required
            value={skills}
            onChange={(e) => updateFields({ skills: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="resumeLink"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Resume Link
          </label>
          <input
            type="url"
            //id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://www.linkedin.com/in/mukesh-khemani-462aaa201/"
            required
            value={resumeLink}
            onChange={(e) => updateFields({ resumeLink: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="resumeLink"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            LinkedIn
          </label>
          <input
            type="url"
            //id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://www.linkedin.com/in/mukesh-khemani-462aaa201/"
            required
            value={linkedInLink}
            onChange={(e) => updateFields({ linkedInLink: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="portfolioLink"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Portfolio Link
          </label>
          <input
            type="url"
            //id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://www.linkedin.com/in/mukesh-khemani-462aaa201/"
            required
            value={portfolioLink}
            onChange={(e) => updateFields({ portfolioLink: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
  {
    /* <FormWrapper title="Account Details">
    //   <label>Bio</label>
    //   <input
    //     autoFocus
    //     required
    //     type="text"
    //     value={bio}
    //     onChange={(e) => updateFields({ bio: e.target.value })}
    //   />
    //   <label>Experience(in Months)</label>
    //   <input
    //     required
    //     type="number"
    //     value={experience}
    //     onChange={(e) => updateFields({ experience: e.target.value })}
    //   />
    //   <label>Notice Period(in days)</label>
    //   <input
    //     required
    //     type="number"
    //     value={noticePeriod}
    //     onChange={(e) => updateFields({ noticePeriod: e.target.value })}
    //   />
    //   <label>Skills</label>
    //   <input
    //     required
    //     type="text"
    //     value={skills}
    //     onChange={(e) => updateFields({ skills: e.target.value })}
    //   />
    //   <label>Resume Link</label>
    //   <input
    //     required
    //     type="url"
    //     value={resumeLink}
    //     onChange={(e) => updateFields({ resumeLink: e.target.value })}
    //   />
    //   <label>LinkedIn</label>
    //   <input
    //     required
    //     type="url"
    //     value={linkedInLink}
    //     onChange={(e) => updateFields({ linkedInLink: e.target.value })}
    //   />
    //   <label>Portfolio</label>
    //   <input
    //     required
    //     type="url"
    //     value={portfolioLink}
    //     onChange={(e) => updateFields({ portfolioLink: e.target.value })}
    //   />
    // </FormWrapper>
  );*/
  }
}
