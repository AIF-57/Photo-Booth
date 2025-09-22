import React from "react";
import Field from "../common/Field";
import { FormProvider } from "react-hook-form";

export default function ProfileInfo({ formMethods }) {
  const { register } = formMethods;

  return (
    <FormProvider {...formMethods}>
      {/* <!-- Website Section --> */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <Field label="Website">
          <input
            {...register("website")}
            id="website"
            type="text"
            className="form-input mb-2"
          />
        </Field>
        <p className="text-gray-500 text-xs">
          Editing your links is only available on mobile. Visit the PhotoBooth
          app and edit your profile to change the websites in your bio.
        </p>
      </div>

      {/* <!-- Bio Section --> */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <Field label="Bio">
          <textarea
            {...register("bio")}
            id="bio"
            className="form-input resize-none h-24 mb-1"
          >
            {/* Pain Demands to be Felt */}
          </textarea>
        </Field>
        <div className="flex justify-end">
          <span className="text-gray-500 text-xs">23 / 150</span>
        </div>
      </div>

      {/* <!-- Gender Section --> */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <Field label="Gender">
          <div className="relative">
            <select
              {...register("gender")}
              id="gender"
              className="form-input appearance-none pr-8"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
              <option>Custom</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </Field>

        <p className="text-gray-500 text-xs mt-2">
          This won't be part of your public profile.
        </p>
      </div>
    </FormProvider>
  );
}
