// src/pages/OAuthSuccess.jsx
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../store/auth";

export function OAuthSuccess() {
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();
  const { search } = useLocation(); // e.g. "?token=eyJhbGciO..."

  useEffect(() => {
    const params = new URLSearchParams(search);
    const token = params.get("token");
    if (token) {
      storeTokenInLS(token);
      // now navigate wherever you want (home page, dashboard, etc.)
      navigate("/");
    } else {
      // no token? send user to login 
      navigate("/login");
    }
  }, [search, storeTokenInLS, navigate]);

  return <p>Logging you in… please wait.</p>;
}
