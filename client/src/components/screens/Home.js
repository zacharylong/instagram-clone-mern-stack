import React from 'react'

const Home = ()=>{
return (
    <div className="home">
        <div className="card home-card">
            <h5>Zac</h5>
            <div className="card-image">
                <img 
                src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                />
            </div>
            <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                <h6>Title</h6>
                <p>This is a post</p>
                <input type="text" placeholder="add a comment"/>
            </div>

        </div>
    </div>
)
}

export default Home