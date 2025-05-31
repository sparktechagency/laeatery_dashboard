import { FaArrowLeft, FaSearch } from "react-icons/fa";
import UserTable from "../components/user/UserTable";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import { useNavigate } from "react-router-dom";
import UserList from "../components/user/UserList";

const UsersPage = () => {
 

  // getUsers
  const users = [
    {
      "SL No": 1,
      fullName: "Ava Thompson",
      image: "https://i.pravatar.cc/150?img=1",
      email: "ava.thompson@example.com",
      phone: "+1 555-123-4567",
      address: "123 Maple St, Austin, TX",
      status: "unblocked",
    },
    {
      "SL No": 2,
      fullName: "Liam Walker",
      image: "gfg",
      email: "liam.walker@example.com",
      phone: "+1 555-234-5678",
      address: "456 Oak Ave, Denver, CO",
      status: "blocked",
    },
    {
      "SL No": 3,
      fullName: "Emma Harris",
      image: "https://i.pravatar.cc/150?img=3",
      email: "emma.harris@example.com",
      phone: "+1 555-345-6789",
      address: "789 Pine Rd, Miami, FL",
      status: "unblocked",
    },
    {
      "SL No": 4,
      fullName: "Noah Wright",
      image: "https://i.pravatar.cc/150?img=4",
      email: "noah.wright@example.com",
      phone: "+1 555-456-7890",
      address: "321 Elm St, Portland, OR",
      status: "blocked",
    },
    {
      "SL No": 5,
      fullName: "Olivia Hall",
      image: "https://i.pravatar.cc/150?img=5",
      email: "olivia.hall@example.com",
      phone: "+1 555-567-8901",
      address: "654 Cedar Ln, Atlanta, GA",
      status: "unblocked",
    },
    {
      "SL No": 6,
      fullName: "Elijah Scott",
      image: "https://i.pravatar.cc/150?img=6",
      email: "elijah.scott@example.com",
      phone: "+1 555-678-9012",
      address: "987 Spruce Dr, Chicago, IL",
      status: "blocked",
    },
    {
      "SL No": 7,
      fullName: "Isabella Green",
      image: "https://i.pravatar.cc/150?img=7",
      email: "isabella.green@example.com",
      phone: "+1 555-789-0123",
      address: "159 Birch Blvd, Seattle, WA",
      status: "unblocked",
    },
    {
      "SL No": 8,
      fullName: "James Young",
      image: "https://i.pravatar.cc/150?img=8",
      email: "james.young@example.com",
      phone: "+1 555-890-1234",
      address: "753 Willow Pkwy, Phoenix, AZ",
      status: "blocked",
    },
    {
      "SL No": 9,
      fullName: "Mia King",
      image: "https://i.pravatar.cc/150?img=9",
      email: "mia.king@example.com",
      phone: "+1 555-901-2345",
      address: "951 Redwood Ct, San Diego, CA",
      status: "unblocked",
    },
    {
      "SL No": 10,
      fullName: "Benjamin Lewis",
      image: "https://i.pravatar.cc/150?img=10",
      email: "benjamin.lewis@example.com",
      phone: "+1 555-012-3456",
      address: "135 Poplar Ln, Salt Lake City, UT",
      status: "blocked",
    },
  ];



  return (
    <>
      <section className="bg-white rounded-lg h-full relative">
        <UserList/>
      </section>
    </>
  );
};

export default UsersPage;
