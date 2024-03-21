import { redirect } from "react-router-dom";
import { deleteProfile } from "./profiles_fn";

export async function action({ params }) {
  await deleteProfile(params.profileId);
  return redirect("/profiles");
}