import { FormProvider } from "react-hook-form";
import Field from "../../common/Field";
import useAuth from "../../../hooks/useAuth";

export default function PostDetailsAddComment({ formMethods, onComment }) {
  const {auth} = useAuth()
  const { register, handleSubmit } = formMethods;

  return (
    <div className="p-3 flex items-center">
      <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 mr-2">
        <img
          src={`${import.meta.env.VITE_SERVER_BASE_URL_IMG}/${
            auth?.user?.avatar
          }`}
          alt="User avatar"
          className="w-full h-full object-cover"
        />
      </div>
      <FormProvider {...formMethods}>
        <div className="flex-1 flex items-center justify-between">
          <Field>
            <input
              {...register("text")}
              id="comment"
              type="text"
              placeholder="Add a comment..."
              className="text-sm w-full outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit(onComment)();
                }
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Field>
        </div>
      </FormProvider>
    </div>
  );
}
