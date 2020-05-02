import React from 'react';

let skeletons = []
for (let index = 0; index < 20; index++) {
    skeletons.push(index+1);   
}

const SingleSkeletonCard = () => (
    <div className="skeleton-inner-character">
        {
           !!skeletons.length && 
           skeletons.map((element,i) => 
                (<div key={`skeleton-${i}`} className="skeleton-card-container">
                    <div className="skeleton-container">
                        <div className="skeleton"></div>
                    </div>
                </div>)
           )
        }
    </div>
);

export default SingleSkeletonCard;