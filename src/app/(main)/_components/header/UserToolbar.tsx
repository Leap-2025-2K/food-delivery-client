import { useUser } from "@/providers/UserProvider";
import { HeaderAddressSelectButton } from ".././header/HeaderAddressSelectButton";
import { HeaderCartButton } from "..//header/HeaderCartButton";
import { HeaderUserProfileIcon } from "..//header/HeaderUserProfileIcon";
import { toast } from "sonner";

type UserToolbarProps = {
  openSidebar: () => void;
};

export const UserToolbar = ({ openSidebar }: UserToolbarProps) => {
  const { user } = useUser();

  if (!user) {
    console.log("Login хийнэ үү!");
    toast.error(user);
  }
  return (
    <>
      <HeaderAddressSelectButton />
      <HeaderCartButton openSidebar={openSidebar} />
      <HeaderUserProfileIcon />
    </>
  );
};
