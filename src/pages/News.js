import React from 'react'
import Loading from '../Loading'
import { useNewsContext } from '../NewsComponents/NewsContext'
const News = () => {
    const {loading,news,query,country,category,change,submitNews}=useNewsContext()
  console.log(news);
  return (
    <div className='newsContainer'>
        <div className='newsHeader'>
            <h1>Top Headline News</h1>
            <form onSubmit={submitNews}>
                 <input type='text' value={query} name='query' onChange={change}/>
                 <select value={category} name='category' onChange={change}>
                     <option value='business'>business</option>
                     <option value='entertainment'>entertainment</option>
                     <option value='general'>general</option>
                     <option value='health'>health</option>
                     <option value='science'>science</option>
                     <option value='sports'>sports</option>
                     <option value='technology'>technology</option>
                 </select>
                 <select value={country} name='country' onChange={change}>
                     <option value='us'>usa</option>
                     <option value='de'>germany</option>
                     <option value='rs'>serbia</option>
                     <option value='gb'>united kingdom</option>
                 </select>
                 <button type='submit'>Search</button>
            </form>
        </div>
        {loading && <Loading/>}
        <div className='newsList'>
            
            {news.map((singleNews,i)=>{
                const {title,author,description,source,url,urlToImage}=singleNews
                return <div className='singleNews' key={i}>
                    <img src={urlToImage}/>
                    <div className='newsInfo'>
                        <h3>{title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: description }}/>
                        <div className='newsDetails'>
                            Source:<a href={url}>{source.name}</a>
                            {author && <p>Author: <b>{author}</b></p>}
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default News