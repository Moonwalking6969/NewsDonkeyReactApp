import React, {Component} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        pageSize: 6,
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults:0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsDonkey`;
    }

    // async updateNews() {
    //     const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=81bec0473c6a4db99ce9197cfee3ff81&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
    // }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=81bec0473c6a4db99ce9197cfee3ff81&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
    }

     fetchMoreData = async () => {
        this.setState({page:this.state.page+1})
         const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=81bec0473c6a4db99ce9197cfee3ff81&page=${this.state.page}&pageSize=${this.props.pageSize}`;
         this.setState({loading: true})
         let data = await fetch(url);
         let parsedData = await data.json();
         this.setState({articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults })
    };

    render() {
        return (<>

                <h1 className="text-center my-5">NewsDonkey -
                    Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner/>}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        inverse={true} //
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner/>}
                        >
                        <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
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
                    </InfiniteScroll>
                </>
    )
    }
}

export default News