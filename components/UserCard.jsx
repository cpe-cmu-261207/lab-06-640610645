import React from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

export default function UserCard(props) {
  return (
    <div>
      <div className="border-bottom">
        <div className="d-flex align-items-center p-3">
          <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
          <span className="text-center display-6 me-auto">{props.name}</span>
          <IconChevronDown />
        </div>
      </div>
    </div>
  );
}
