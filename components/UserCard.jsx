import React from "react";
import UserCardDetail from "./UserCardDetail";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";

export default function UserCard(props) {
  const onClickedHandler = () => {
    <div className="border-bottom">
      <div className="d-flex align-items-center p-3">
        <img
          src="/profile-placeholder.jpeg"
          width="90px"
          class="rounded-circle me-4"
        />
        <span className="text-center display-6 me-auto">Name...</span>
        <IconChevronUp />
        <UserCardDetail />
      </div>
    </div>;
  };
  return (
    <div>
      <div className="border-bottom">
        <div
          onClick={onClickedHandler}
          className="d-flex align-items-center p-3"
        >
          <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
          <span className="text-center display-6 me-auto">{props.name}</span>
          <IconChevronDown />
        </div>
      </div>
    </div>
  );
}
