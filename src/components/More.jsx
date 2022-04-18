import React from "react";

const More = ({
  changeOpenMore,
  changeOpenAddAdminForm,
  changeOpenAddOwnerForm,
  changeOpenInvitePeopleForm,
  changeOpenCreateRoleForm,
  changeOpenALertLeaveServer
}) => {
  const renderedOption = (title, func) => {
    return (
      <div
        className="more__option"
        onClick={() => {
            console.log({title})
          changeOpenMore(false);
          func(true)
        }}
      >
        {title}
      </div>
    );
  };

  return (
    <div className="more__wrapper">
      <div className="more__options">
        {renderedOption("create a new role", changeOpenCreateRoleForm)}
        {renderedOption("add admin", changeOpenAddAdminForm)}
        {renderedOption("add owner", changeOpenAddOwnerForm)}
        {renderedOption("invite people", changeOpenInvitePeopleForm)}
        {renderedOption("leave server", changeOpenALertLeaveServer)}
      </div>
    </div>
  );
};

export default More;
