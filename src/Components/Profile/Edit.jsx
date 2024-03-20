import { Form, useLoaderData, redirect, useNavigate, } from "react-router-dom";
import { updateProfile } from "./profiles_fn";
import './Profile.css'

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateProfile(params.profileId, updates);
  return redirect(`/profiles/${params.profileId}`);
}

export default function EditProfile() {
  const { profile } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" className ="profile-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={profile.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={profile.last}
        />
      </p>
      <label>
        <span>Linkedin</span>
        <input
          type="text"
          name="linkedin"
          placeholder="https://www.linkedin.com/in/name/"
          defaultValue={profile.linkedin}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={profile.avatar}
        />
      </label>
      <label>
        <span>Notes</span>        
        <textarea
          name="notes"
          defaultValue={profile.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button 
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}