import { useEffect, useState } from "react";
import Searbar from "../components/Searbar";

interface Article {
  title: string;
}

const AllArticles = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {

    const fetchArticles = async () => {

      const res =  await fetch('http://localhost:3000/articles');

      if(res.ok) {
        const data = await res.json();
        setArticles(data);
      }
    };

    fetchArticles();
  }, []);

  console.log('articles', articles);
  

  return (
    <div className="container">
    <h1 className="text-center mt-4 mb-5">All blogs</h1>
    <Searbar />

    <div>{articles.map((article: Article, index: number)  => (<li key={index}>{article?.title}</li>))}</div>
    
    <div className="row gap-5 w-100">
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
    </div>
</div>
  )
}

export default AllArticles;