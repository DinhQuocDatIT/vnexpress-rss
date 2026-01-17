import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styles from "./App.module.css";
import SelectItem from "./components/SelectItem/SelectItem";
import axios from "axios";
function App() {
  const API = "http://localhost:3000/rss";
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [news, setNews] = useState([]);
  const [activeNews, setActiveNews] = useState(null);
  useEffect(() => {
    if (selected == null) return;

    const fetchRSS = async () => {
      try {
        const res = await axios.get("http://localhost:3000/rss", {
          params: { url: selected },
        });

        const parser = new DOMParser();
        const xml = parser.parseFromString(res.data, "text/xml");

        const items = Array.from(xml.querySelectorAll("item"));

        const data = items.map((item) => ({
          title: item.querySelector("title")?.textContent,
          description: item.querySelector("description")?.textContent,
          pubDate: item.querySelector("pubDate")?.textContent,
          link: item.querySelector("link")?.textContent,
          image: item.querySelector("enclosure")?.getAttribute("url"),
        }));

        setNews(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRSS();
  }, [selected]);
  return (
    <div className={styles.wrapper}>
      {/* Thanh chọn */}
      <div className={styles.search}>
        <SelectItem setSelected={setSelected} />
      </div>

      {/* Nội dung */}
      <div className={styles.main}>
        {/* LEFT: DANH SÁCH */}
        <div className={styles.left}>
          <table>
            <thead>
              <tr>
                <th>Hình ảnh</th>
                <th>Tiêu đề</th>
                <th>Mô tả</th>
                <th>Ngày đăng</th>
              </tr>
            </thead>
            <tbody>
              {news.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => setActiveNews(item)}
                  className={
                    activeNews?.link === item.link ? styles.active : ""
                  }
                >
                  <td>{item.image && <img src={item.image} alt="" />}</td>
                  <td className={styles.title}>{item.title}</td>
                  <td className={styles.desc}>
                    {item.description.replace(/<[^>]+>/g, "").slice(0, 120)}...
                  </td>
                  <td>{item.pubDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT: CHI TIẾT */}
        <div className={styles.right}>
          {activeNews ? (
            <>
              <h2>{activeNews.title}</h2>
              <p className={styles.date}>{activeNews.pubDate}</p>

              {activeNews.image && (
                <img src={activeNews.image} className={styles.bigImage} />
              )}

              <div
                dangerouslySetInnerHTML={{
                  __html: activeNews.description,
                }}
              />

              <a href={activeNews.link} target="_blank" className={styles.link}>
                Mở trong trình duyệt
              </a>
            </>
          ) : (
            <p>Chọn một tin để xem chi tiết</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
