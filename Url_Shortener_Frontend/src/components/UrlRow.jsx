import "../style/UrlRow.css";
import ClickCount from "./clickCounter";

function UrlRow({ url }) {
  return (
    <tr>
      <td className="url-td">
        <a
          href={url.long_url}
          target="_blank"
          rel="noreferrer"
          className="url-link"
        >
          {url.long_url.length > 40
            ? url.long_url.substring(0, 40) + "..."
            : url.long_url}
        </a>
      </td>

      <td className="url-td">
        <a
          href={`http://localhost:3000/api/${url.short_code}`}
          target="_blank"
          rel="noreferrer"
        >
          {`http://localhost:3000/api/${url.short_code}`}
        </a>
      </td>

      <td className="url-td">
        <ClickCount count={url.click_count} />
      </td>
    </tr>
  );
}

export default UrlRow;
