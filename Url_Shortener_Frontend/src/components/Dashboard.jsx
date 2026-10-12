import { useState, useEffect } from "react";
import { getUrls, updateClickCount } from "../api/url";
import ShortenForm from "../components/ShortenForm";
import UrlTable from "../components/UrlTables";
import "../style/Dashboard.css";

function Dashboard({ user, setUser }) {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetchUrls();
  }, []);

  useEffect(() => {
    function handleVisible() {
      if (document.visibilityState === "visible") {
        handleRefresh();
      }
    }

    document.addEventListener("visibilitychange", handleVisible);
    window.addEventListener("focus", handleRefresh);

    const intervalId = setInterval(handleRefresh, 20000);

    return () => {
      document.removeEventListener("visibilitychange", handleVisible);
      window.removeEventListener("focus", handleRefresh);
      clearInterval(intervalId);
    };
  }, [user.id]);

  async function fetchUrls() {
    try {
      const res = await getUrls(user.id);
      setUrls(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleRefresh() {
    try {
      await updateClickCount(user.id);
      await fetchUrls();
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-navbar">
        <h2 className="dashboard-heading">Welcome, {user.name}</h2>

        <div className="dashboard-buttons">
          <button className="log-out-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <ShortenForm user={user} onShorten={fetchUrls} />

      <UrlTable urls={urls} onRefresh={handleRefresh} />
    </div>
  );
}

export default Dashboard;
