import UrlRow from "../components/UrlRow";
import "../style/UrlTables.css";

function UrlTable({ urls, fetchUrls, onRefresh }) {
  return (
    <div className="table-card">
      <div className="table-header">
        <h4 className="table-label">Your URLs</h4>
        <button className="refresh-btn" onClick={onRefresh}>
          Refresh Clicks
        </button>
      </div>
      {urls.length === 0 ? (
        <p className="empty-text">No URLs yet. Create one above!</p>
      ) : (
        <table className="url-table">
          <thead>
            <tr>
              <th className="url-th">Original URL</th>
              <th className="url-th">Short URL</th>
              <th className="url-th">Clicks</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url) => (
              <UrlRow key={url.id} url={url} fetchUrls={fetchUrls} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UrlTable;
