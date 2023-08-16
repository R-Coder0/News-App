import React from 'react'

const NewsItem =(props) => {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl ? "https://dtnext-prod.s3.ap-south-1.amazonaws.com/h-upload/2023/07/29/752461-img-20230729-wa0039.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...  <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style = {{left:'90%', zIndex:'1'}}>
                            {source}
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? 'Uknown' : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
