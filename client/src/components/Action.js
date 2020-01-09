import React from 'react'

const Project = (props) => {
    return (
            <div className="action-card">
                <h4>Description:{props.description}<br /></h4>
                <div className="description">Notes:{props.notes}</div>
            </div>
    )
}

export default Project;
