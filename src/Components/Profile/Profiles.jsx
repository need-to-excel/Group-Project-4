import {Link, useLoaderData, Form, redirect,} from "react-router-dom";
import { getProfiles, createProfile } from "./profiles_fn";
import './Profile.css'

export async function action() {
  const profile = await createProfile();
  return redirect(`/profiles/${profile.id}/edit`);
}

export async function loader() {
  const profiles = await getProfiles();
  return { profiles };
}

export default function Profiles() {
  const { profiles } = useLoaderData();

  return (
    <>
      <div className="profiles">
        <h1>Profiles</h1>
        <div>          
          <Form method="post">
            <button type="submit">Add New</button>
          </Form>
        </div>
        <nav>
        {profiles.length ? (
            <ul>
              {profiles.map((profile) => (
                <li key={profile.id}>
                  <Link to={`${profile.id}`}>
                    {profile.first || profile.last ? (
                      <>
                        {profile.first} {profile.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}                    
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No profiles</i>
            </p>
          )}
        </nav>
      </div>      
    </>
  );
}

