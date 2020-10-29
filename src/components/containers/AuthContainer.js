import React, {useState, useEffect, useCallback} from 'react';
import { checkToken } from "../../lib/api";

const AuthContainer = () => {

  const [token, setToken] = useState("");

  const getToken = useCallback(() => {
    // api 실행 후 셋토큰
    setToken( checkToken(window.localStorage.getItem("Bearer_access_token")) );
  }, [token]);

  useEffect(() => {
    getToken();
  }, [])

  return (
    <> </>
  );
}

export default AuthContainer;
