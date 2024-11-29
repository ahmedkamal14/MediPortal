/* eslint-disable react/prop-types */
import { MdErrorOutline } from "react-icons/md";

export default function InputField({
  Validate,
  mykey,
  user,
  setUser,
  placeholder,
  errorMsg,
  isRequired = false,
  Maxwidth = "max-w-52",
}) {
  return (
    <span className={`${Maxwidth} flex flex-col items-center`}>
      <span className="flex items-center gap-2 w-full">
        <input
          className={`border border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5 w-full 
                      ${
                        Validate(user[mykey])
                          ? "bg-gray-50 "
                          : "bg-darkRed bg-opacity-40"
                      }`}
          type="text"
          placeholder={placeholder}
          value={user[mykey]}
          onChange={(e) =>
            setUser((prevState) => ({
              ...prevState,
              [mykey]: e.target.value,
            }))
          }
          required={isRequired}
        />
        <MdErrorOutline
          className={`text-xl text-darkRed
                      ${Validate(user[mykey]) ? "opacity-0" : "opacity-100"}`}
        />
      </span>
      <p
        className={`text-xs  text-darkRed 
          ${Validate(user[mykey]) ? "hidden" : ""}`}
      >
        {errorMsg}
      </p>
    </span>
  );
}
