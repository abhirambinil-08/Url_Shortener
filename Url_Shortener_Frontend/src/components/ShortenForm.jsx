import { useState } from "react";
import { shortenUrl } from "../api/url";

import "../style/ShortenForm.css";

function ShortenForm({ user, onShorten }) {
  const [longUrl, setLongUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleShorten() {
    if (!longUrl) return alert("Enter a URL first");
    try {
      setLoading(true);
      const res = await shortenUrl(user.id, longUrl);
      alert("Short URL: " + res.data.shortUrl);
      setLongUrl("");
      onShorten();
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="shorten-card">
      <h4 className="shorten-label">Shorten a new URL</h4>
      <div className="shorten-row">
        <input
          type="text"
          placeholder="Paste your long URL here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="shorten-input"
        />
        <button onClick={handleShorten} className="shorten-btn" disabled={loading}>
          {loading ? "Shortening..." : "Shorten"}
        </button>
      </div>
    </div>
  );
}

export default ShortenForm;