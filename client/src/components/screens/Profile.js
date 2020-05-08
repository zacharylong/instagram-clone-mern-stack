import React from 'react'

const Profile = ()=>{
return (
    <div style={{maxWidth:"550px", margin:"0px auto"}}>
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px ",
            borderBottom:"1px solid grey"
        }}>
            {/* Profile Photo Div */}
            <div>
                <img style={{widt:"160px",height:"160px",borderRadius:"80px"}}
                src="https://images.unsplash.com/photo-1502780594606-0b26bd114c4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                />
            </div>
            {/* Name div */}
            <div>
                <h4>Stock User</h4>
                <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                    <h6>40 posts</h6>
                    <h6>40 followers</h6>
                    <h6>40f ollowing</h6>
                </div>
            </div>
        </div>
        <div className="gallery">
            <img className="item"
            src="https://images.unsplash.com/photo-1502780594606-0b26bd114c4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
            <img className="item"
            src="https://images.unsplash.com/photo-1502780594606-0b26bd114c4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
            <img className="item"
            src="https://images.unsplash.com/photo-1502780594606-0b26bd114c4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />

        </div>
    </div>
)
}

export default Profile