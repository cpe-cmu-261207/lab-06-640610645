import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import axios from "axios";
import { useState } from "react";
import UserCard from "../components/UserCard";

export default function Home() {
  const [genAmount, setGenAmount] = useState(1);

  const [users, setUsers] = useState([]);

  const genUsers = async () => {
    if (genAmount < 1) {
      alert("Invalid number of user");
      return;
    }
    const resp = await axios.get(
      `https://randomuser.me/api/?results=${genAmount}`
    );
    const newUsers = [];
    for (x of resp.data.results) {
      newUsers.push({
        name: x.name.first + " " + x.name.last,
        email: x.email,
        imgUrk: x.picture.large,
        address: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
      });
    }
    setUsers(newUsers);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {/* Example of folded UserCard */}
      <div className="border-bottom">
        {/* main section */}
        <div className="d-flex align-items-center p-3">
          <img
            src="/profile-placeholder.jpeg"
            width="90px"
            class="rounded-circle me-4"
          />
          <span className="text-center display-6 me-auto">Name...</span>
          <IconChevronDown />
        </div>

        {/* UserCardDetail is hidden */}
      </div>

      {/* Example of expanded UserCard */}
      <div className="border-bottom">
        {/* main section */}
        <div className="d-flex align-items-center p-3">
          <img
            src="/profile-placeholder.jpeg"
            width="90px"
            class="rounded-circle me-4"
          />
          <span className="text-center display-6 me-auto">Name...</span>
          <IconChevronUp />
        </div>

        {/* UserCardDetail*/}
        <div className="text-center">
          <p>
            <IconMailForward /> Email...
          </p>
          <p>
            <IconMapPins /> Address...
          </p>
        </div>
      </div>

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Nontapan Chanadee 640610645
      </p>
    </div>
  );
}
