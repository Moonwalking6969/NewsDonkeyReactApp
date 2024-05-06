import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import NewsItem from "./NewsItem";

import PropTypes from "prop-types";

const News =(props)=> {
    const [articles,setArticles]=useState([])
    const [loading,setloading]=useState(true)
    const [totalResults,setTotalResults]=useState(0)

     const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    document.title = `${capitalizeFirstLetter(props.category)} - NewsDonkey`;


     const  updateNews = async()=> {
        props.setProgress(0);
         const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=81bec0473c6a4db99ce9197cfee3ff81&pageSize=${props.pageSize}`;
         setloading(true);
         props.setProgress(25);
         let data = await fetch(url);
         props.setProgress(50);
         let parsedData = await data.json();
         props.setProgress(75);
         setTotalResults(parsedData.totalResults);
         setArticles(parsedData.articles);
         setloading(false);
         props.setProgress(100);
    }

    useEffect(()=>{
        updateNews();
    },[])




        return (<>

                <h1 className="text-center" style={{margin: '35px 0px', marginTop: '90px'}}>NewsDonkey -
                    Top {capitalizeFirstLetter(props.category)} Headlines</h1>


                        <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>

                                    <NewsItem title={element.title ? element.title : ""}
                                              description={element.title ? element.description : ""}
                                              imageUrl={element.urlToImage ? element.urlToImage : "https://techcrunch.com/wp-content/uploads/2024/04/airchat-pattern-v1.jpg?resize=1200,675"}
                                              newsUrl={element.url} author={element.author} date={element.publishedAt}
                                              source={element.source.name ? element.source.name : ""}></NewsItem>
                                </div>
                            })}
                        </div>
                        </div>
                </>
    )
}
News.propTypes = {
    country: PropTypes.string,

    category: PropTypes.string
}
export default News