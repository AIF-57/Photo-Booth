import React from "react";

export default function Field({ children, label, htmlFor, error }) {
  const id = htmlFor || getChildId(children);

  return (
    <>
      {label && (
        <label className="auth-label" htmlFor={id}>
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div role="alert" className="text-red-500">
          {error?.message}
        </div>
      )}
    </>
  );
}

const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
};
