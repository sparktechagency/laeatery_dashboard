import { FaArrowLeft, FaSearch } from "react-icons/fa";
import UserTable from "../components/user/UserTable";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  // getUsers
  const users = [
    {
      "SL No": 1,
      fullName: "Ava Thompson",
      image: "https://i.pravatar.cc/150?img=1",
      email: "ava.thompson@example.com",
      phone: "+1 555-123-4567",
      address: "123 Maple St, Austin, TX",
    },
    {
      "SL No": 2,
      fullName: "Liam Walker",
      // "image": "https://i.pravatar.cc/150?img=2",
      image: "gfg",
      email: "liam.walker@example.com",
      phone: "+1 555-234-5678",
      address: "456 Oak Ave, Denver, CO",
    },
    {
      "SL No": 3,
      fullName: "Emma Harris",
      image: "https://i.pravatar.cc/150?img=3",
      email: "emma.harris@example.com",
      phone: "+1 555-345-6789",
      address: "789 Pine Rd, Miami, FL",
    },
    {
      "SL No": 4,
      fullName: "Noah Wright",
      image: "https://i.pravatar.cc/150?img=4",
      email: "noah.wright@example.com",
      phone: "+1 555-456-7890",
      address: "321 Elm St, Portland, OR",
    },
    {
      "SL No": 5,
      fullName: "Olivia Hall",
      image: "https://i.pravatar.cc/150?img=5",
      email: "olivia.hall@example.com",
      phone: "+1 555-567-8901",
      address: "654 Cedar Ln, Atlanta, GA",
    },
    {
      "SL No": 6,
      fullName: "Elijah Scott",
      image: "https://i.pravatar.cc/150?img=6",
      email: "elijah.scott@example.com",
      phone: "+1 555-678-9012",
      address: "987 Spruce Dr, Chicago, IL",
    },
    {
      "SL No": 7,
      fullName: "Isabella Green",
      image: "https://i.pravatar.cc/150?img=7",
      email: "isabella.green@example.com",
      phone: "+1 555-789-0123",
      address: "159 Birch Blvd, Seattle, WA",
    },
    {
      "SL No": 8,
      fullName: "James Young",
      image: "https://i.pravatar.cc/150?img=8",
      email: "james.young@example.com",
      phone: "+1 555-890-1234",
      address: "753 Willow Pkwy, Phoenix, AZ",
    },
    {
      "SL No": 9,
      fullName: "Mia King",
      image: "https://i.pravatar.cc/150?img=9",
      email: "mia.king@example.com",
      phone: "+1 555-901-2345",
      address: "951 Redwood Ct, San Diego, CA",
    },
    {
      "SL No": 10,
      fullName: "Benjamin Lewis",
      image: "https://i.pravatar.cc/150?img=10",
      email: "benjamin.lewis@example.com",
      phone: "+1 555-012-3456",
      address: "135 Poplar Ln, Salt Lake City, UT",
    },
    // {
    //   "SL No": 11,
    //   "fullName": "Charlotte Adams",
    //   "image": "https://i.pravatar.cc/150?img=11",
    //   "email": "charlotte.adams@example.com",
    //   "phone": "+1 555-111-2222",
    //   "address": "246 Magnolia St, Nashville, TN"
    // },
    // {
    //   "SL No": 12,
    //   "fullName": "William Perez",
    //   "image": "https://i.pravatar.cc/150?img=12",
    //   "email": "william.perez@example.com",
    //   "phone": "+1 555-222-3333",
    //   "address": "357 Aspen Ave, Kansas City, MO"
    // },
    // {
    //   "SL No": 13,
    //   "fullName": "Amelia Baker",
    //   "image": "https://i.pravatar.cc/150?img=13",
    //   "email": "amelia.baker@example.com",
    //   "phone": "+1 555-333-4444",
    //   "address": "468 Chestnut Dr, Madison, WI"
    // },
    // {
    //   "SL No": 14,
    //   "fullName": "Lucas Rivera",
    //   "image": "https://i.pravatar.cc/150?img=14",
    //   "email": "lucas.rivera@example.com",
    //   "phone": "+1 555-444-5555",
    //   "address": "579 Walnut Way, Columbus, OH"
    // },
    // {
    //   "SL No": 15,
    //   "fullName": "Harper Morgan",
    //   "image": "https://i.pravatar.cc/150?img=15",
    //   "email": "harper.morgan@example.com",
    //   "phone": "+1 555-555-6666",
    //   "address": "680 Cottonwood Pl, Charlotte, NC"
    // },
    // {
    //   "SL No": 16,
    //   "fullName": "Henry Cox",
    //   "image": "https://i.pravatar.cc/150?img=16",
    //   "email": "henry.cox@example.com",
    //   "phone": "+1 555-666-7777",
    //   "address": "791 Cypress Ln, Omaha, NE"
    // },
    // {
    //   "SL No": 17,
    //   "fullName": "Evelyn Ward",
    //   "image": "https://i.pravatar.cc/150?img=17",
    //   "email": "evelyn.ward@example.com",
    //   "phone": "+1 555-777-8888",
    //   "address": "802 Hickory Rd, Orlando, FL"
    // },
    // {
    //   "SL No": 18,
    //   "fullName": "Alexander Price",
    //   "image": "https://i.pravatar.cc/150?img=18",
    //   "email": "alexander.price@example.com",
    //   "phone": "+1 555-888-9999",
    //   "address": "913 Maplewood Ct, Tulsa, OK"
    // },
    // {
    //   "SL No": 19,
    //   "fullName": "Abigail Jenkins",
    //   "image": "https://i.pravatar.cc/150?img=19",
    //   "email": "abigail.jenkins@example.com",
    //   "phone": "+1 555-999-0000",
    //   "address": "1021 Fir St, Sacramento, CA"
    // },
    // {
    //   "SL No": 20,
    //   "fullName": "Daniel Murphy",
    //   "image": "https://i.pravatar.cc/150?img=20",
    //   "email": "daniel.murphy@example.com",
    //   "phone": "+1 555-000-1111",
    //   "address": "1132 Larch Blvd, Des Moines, IA"
    // }
  ];

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <>
      <section className="bg-white rounded-lg">
        <div className="flex justify-between items-center h-[74px] px-6 py-4 shadow">
          {/* Left side - Back icon and title */}
          <div className="flex items-center space-x-4">
            <button onClick={handleGoBack} className="hover:text-black">
              <FaArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">
              User Management
            </h1>
          </div>

          {/* Right side - Search bar */}
          <div className="relative w-72">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-700">
              <FaSearch size={16} />
            </span>
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <UserTable users={users} />

          <div className="flex justify-center items-center p-4">
            <Pagination total={20} itemRender={itemRender} />
          </div>
        </div>
      </section>
    </>
  );
};

export default UsersPage;
