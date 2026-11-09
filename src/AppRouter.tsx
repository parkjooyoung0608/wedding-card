import { useEffect, useState } from "react";
import App from "@/App";
import Admin from "@/pages/Admin";

/** 해시(#admin) 기반 경량 라우팅. 정적 호스팅에서도 서버 설정 없이 동작. */
function getRoute() {
  return window.location.hash.replace(/^#\/?/, "");
}

export default function AppRouter() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route === "admin" ? <Admin /> : <App />;
}
