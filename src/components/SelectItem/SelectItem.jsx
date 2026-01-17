import styles from "./SelectItem.module.css";
const vnExpressRSS = [
  {
    id: 1,
    name: "Trang chủ",
    url: "https://vnexpress.net/rss/tin-moi-nhat.rss",
  },
  { id: 2, name: "Thời sự", url: "https://vnexpress.net/rss/thoi-su.rss" },
  { id: 3, name: "Thế giới", url: "https://vnexpress.net/rss/the-gioi.rss" },
  {
    id: 4,
    name: "Kinh doanh",
    url: "https://vnexpress.net/rss/kinh-doanh.rss",
  },
  { id: 5, name: "Giải trí", url: "https://vnexpress.net/rss/giai-tri.rss" },
  { id: 6, name: "Thể thao", url: "https://vnexpress.net/rss/the-thao.rss" },
  { id: 7, name: "Pháp luật", url: "https://vnexpress.net/rss/phap-luat.rss" },
  { id: 8, name: "Giáo dục", url: "https://vnexpress.net/rss/giao-duc.rss" },
  { id: 9, name: "Sức khỏe", url: "https://vnexpress.net/rss/suc-khoe.rss" },
  { id: 10, name: "Đời sống", url: "https://vnexpress.net/rss/gia-dinh.rss" },
  { id: 11, name: "Du lịch", url: "https://vnexpress.net/rss/du-lich.rss" },
  {
    id: 12,
    name: "Khoa học công nghệ",
    url: "https://vnexpress.net/rss/khoa-hoc.rss",
  },
  { id: 13, name: "Xe", url: "https://vnexpress.net/rss/oto-xe-may.rss" },
  { id: 14, name: "Ý kiến", url: "https://vnexpress.net/rss/y-kien.rss" },
  { id: 15, name: "Tâm sự", url: "https://vnexpress.net/rss/tam-su.rss" },
  { id: 16, name: "Cười", url: "https://vnexpress.net/rss/cuoi.rss" },
];

function SelectItem({ setSelected }) {
  return (
    <div className={styles.wrapper}>
      <select onChange={(e) => setSelected(e.target.value)}>
        {vnExpressRSS.map((ojb) => (
          <option key={ojb.id} value={ojb.url}>
            {ojb.name}
          </option>
        ))}
      </select>
      <div>{}</div>
    </div>
  );
}
export default SelectItem;
