import React from 'react'

const Project = (props) => {
    return (
            <div className="project-card">
                <h4>Name:{props.name}<br /></h4>
                <div className="description">Description:{props.description}</div>
            </div>
    )
}

export default Project;
