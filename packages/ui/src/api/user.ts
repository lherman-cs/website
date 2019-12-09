import { User } from "model/user";
import { Result } from "model/result";
import { Error } from "model/error";

import firebase from "plugins/firebase";

const db = firebase.firestore();
const usersRef = db.collection("users");

// TODO: Probably ask for provider instead of hard coding it
const provider = new firebase.auth.GoogleAuthProvider();

function transformFirebaseUser(user: firebase.User): User {
  return {
    email: user.email || "",
    uid: user.uid
  };
}

export async function login(): Promise<Result<null, Error>> {
  try {
    await firebase.auth().signInWithPopup(provider);
    return { status: "success", data: null };
  } catch (e) {
    return { status: "error", data: e.message };
  }
}

export async function fetchUser(uid: string): Promise<Result<User, Error>> {
  const _fetch = async (): Promise<Result<User | null, Error>> => {
    try {
      const doc = await usersRef.doc(uid).get();

      if (!doc.exists) {
        return { status: "success", data: null };
      }

      const user = doc.data() as User;
      return { status: "success", data: user };
    } catch (e) {
      return { status: "error", data: { reason: e.message } };
    }
  };

  const fetchResult = await _fetch();
  if (fetchResult.status === "error") {
    return fetchResult;
  }

  if (fetchResult.status === "success" && fetchResult.data) {
    return fetchResult as Result<User, Error>;
  }

  // try to infer current user information from firebase
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) {
    return {
      status: "error",
      data: { reason: "user doesn't exist and can't infer user data" }
    };
  }

  const user = transformFirebaseUser(currentUser);
  const createResult = await createUser(user);
  if (createResult.status === "error") {
    return createResult;
  }

  return { status: "success", data: user };
}

export async function updateUser(user: User): Promise<Result<null, Error>> {
  try {
    await usersRef.doc(user.uid).update(user);
    return { status: "success", data: null };
  } catch (e) {
    return { status: "error", data: { reason: e.message } };
  }
}

export async function createUser(user: User): Promise<Result<null, Error>> {
  try {
    await usersRef.doc(user.uid).set(user);
    return { status: "success", data: null };
  } catch (e) {
    return { status: "error", data: { reason: e.message } };
  }
}
