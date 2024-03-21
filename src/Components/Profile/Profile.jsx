import React from "react";
import { Form, useLoaderData, useNavigate, } from "react-router-dom";
import { getProfile } from "./profiles_fn";
import './Profile.css'

export async function loader({ params }) {
  const profile = await getProfile(params.profileId);
  return { profile };
}

export default function Profile() {
	const { profile } = useLoaderData(); 
  const navigate = useNavigate();  

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

        <h4>
          My Linkedin: {profile.linkedin && (
            <b>
              <a
                target="_blank"
                href={`${profile.linkedin}`}
              >
                {profile.linkedin}
              </a>
            </b>
          )}
        </h4>        

        <h4>
          Tel: {profile.tel && 
          <i>
            <a href={`tel:${profile.tel}`}>
              {profile.tel}
            </a>
          </i>} 
        </h4>

        <h4>
          Email: {profile.email && 
          <i>
            <a href={`mailto:${profile.email}`}>
              {profile.email}
            </a>            
          </i>} 
        </h4>

        <h4>
          Age: {profile.age && <i>{profile.age}</i>} 
        </h4>

        <h4>
          City: {profile.city && <i>{profile.city}</i>} 
        </h4>

        <h4>
          Country: {profile.country && <i>{profile.country}</i>}
        </h4> 

        {profile.notes && <p>{profile.notes}</p>}

        <div>
        <button 
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
        </button>

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
            <button type="submit" className="btn-delete">Delete</button>
          </Form>

        </div>			
      </div>
    </div>
  );
}