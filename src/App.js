import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./components/item";
import "./App.css";

function App() {
  const [newsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl =
          " https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8040cc3829fe453497ac472a132141d8";
        const response = await axios.get(apiUrl);
        setNewsItems(response.data?.articles || []);
        console.log("news", response.data?.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container pt-5">
      <div className="row">
        <h1 className="heading">Latest News</h1>
        <div className="col-md-12 order-md-2 col-lg-12">
          <div className="container-fluid">
            <div className="row">
              {newsItems.map((item, index) => (
                <Item key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
