import React, { useEffect } from 'react'
import { getAllProjects } from '../actions/projectActions'
import { connect } from 'react-redux'
import Project from './Project'

const Projects = (props) => {
    useEffect(() => {
        props.getAllProjects(props.projects)
      }, [props])

    return (
        <div>
        {props.projects &&
            props.projects.map(project =>{
                return(
                    <Project
                        key={project.id}
                        name={project.name} 
                        description={project.description}
                    />
                )
            })
        }
        </div>
    )
}

const mapStateToProps = ({ projectReducer }) => ({
    projects: projectReducer.projects
  })

export default connect(mapStateToProps, { getAllProjects })(Projects);