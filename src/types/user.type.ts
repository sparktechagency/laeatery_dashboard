export type IUserStatus = "active" | "inactive" | "banned";

export type TUser = {
  _id: string;
  name: string;
  email: string;
  profile_image: string | null;
  phone_number: string;
  isPhoneNumberVerified: boolean;
  address: string;
  amount: number;
  authId: {
    _id: string,
    is_block: boolean
  },
  subscription_status: "None" | "Active" | "Expired"; // adjust if needed
  status: IUserStatus; // adjust if needed
  createdAt: string; // or Date if you're converting it
  updatedAt: string; // or Date if you're converting it
};

  