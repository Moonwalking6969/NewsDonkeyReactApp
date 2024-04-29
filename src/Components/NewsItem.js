import React, {Component} from "react";

export class NewsItem extends Component{

    render(){
       let {title,description,imageUrl,newsUrl,author,date,source}= this.props



        return(<>
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <span className="badge rounded-pill bg-dark">{source}</span>
                    <p className="card-text"><small
                        className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toDateString()}</small>
                    </p>
                    <a href={newsUrl} className="btn btn-dark">Go somewhere</a>
                </div>
            </div>
            </>
        )
    }
}

export default NewsItem