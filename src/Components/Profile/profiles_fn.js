import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getProfiles(query) {
  await fakeNetwork(`getProfiles:${query}`);
  let profiles = await localforage.getItem("profiles");
  if (!profiles) profiles = [];
  if (query) {
    profiles = matchSorter(profiles, query, { keys: ["first", "last"] });
  }
  return profiles.sort(sortBy("last", "createdAt"));
}

export async function createProfile() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let profile = { id, createdAt: Date.now() };
  let profiles = await getProfiles();
  profiles.unshift(profile);
  await set(profiles);
  return profile;
}

export async function getProfile(id) {
  await fakeNetwork(`profile:${id}`);
  let profiles = await localforage.getItem("profiles");
  let profile = profiles.find(profile => profile.id === id);
  return profile ?? null;
}

export async function updateProfile(id, updates) {
  await fakeNetwork();
  let profiles = await localforage.getItem("profiles");
  let profile = profiles.find(profile => profile.id === id);
  if (!profile) throw new Error("No profile found for", id);
  Object.assign(profile, updates);
  await set(profiles);
  return profile;
}

export async function deleteProfile(id) {
  let profiles = await localforage.getItem("profiles");
  let index = profiles.findIndex(profile => profile.id === id);
  if (index > -1) {
    profiles.splice(index, 1);
    await set(profiles);
    return true;
  }
  return false;
}

function set(profiles) {
  return localforage.setItem("profiles", profiles);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}
