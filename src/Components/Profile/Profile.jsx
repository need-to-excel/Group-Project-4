import React from "react";
import { Form, useLoaderData } from "react-router-dom";
import { getProfile } from "./profiles_fn";
import './Profile.css'

export async function loader({ params }) {
  const profile = await getProfile(params.profileId);
  return { profile };
}

export default function Profile() {
	const { profile } = useLoaderData(); 

  return (
    <div className="profile">
      <div>
        <img key={profile.avatar} src={profile.avatar || null} />
      </div>

      <div>
        <h1>
          {profile.first || profile.last ? (
            <>
              {profile.first} {profile.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
        </h1>      

				{profile.linkedin && (
          <p>
            <a
              target="_blank"
              href={`${profile.linkedin}`}
            >
              {profile.linkedin}
            </a>
          </p>
        )}

        {profile.notes && <p>{profile.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>			
      </div>
    </div>
  );
}
