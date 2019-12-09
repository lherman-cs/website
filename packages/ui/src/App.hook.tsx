import { useEffect, useState } from "react";
import firebase from "plugins/firebase";
import { useDispatch, actions } from "store";

export function useAuth() {
  const [initialized, setInitialized] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        await dispatch(actions.user.fetchUser(user.uid));
      }

      setInitialized(true);
    });

    return unsubscribe;
  }, [dispatch]);

  return { initialized };
}
