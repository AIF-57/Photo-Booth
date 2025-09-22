import React from "react";

export default function Field({ children, label, htmlFor, error }) {
  const id = htmlFor || getChildId(children);

  return (
    <>
      {label && (
        <label className="block mb-2 font-medium" htmlFor={id}>
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

const typeOfChildren = ["input", "textarea", "select"];
const getChildId = (children) => {
  let ids = [];

  const findIds = (child) => {
    // Check if the element type is in our list
    if (typeOfChildren.includes(child.type)) {
      ids.push(child.props.id);
    }

    // Recursively check its children
    if (child.props?.children) {
      React.Children.forEach(child.props.children, findIds);
    }
  };

  React.Children.forEach(children, findIds);

  return ids.toString();
};
