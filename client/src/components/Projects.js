import React, { useEffect } from 'react'
import { getAllProjects } from '../actions/projectActions'
import { connect } from 'react-redux'
import Project from './Project'
import Actions from './Actions'

const Projects = (props) => {
    useEffect(() => {
        props.getAllProjects(props.projects)
      }, [])

    return (
        <div>
        {props.projects &&
            props.projects.map(project =>{
                return(
                    <div>
                    <Project
                        key={project.id}
                        name={project.name} 
                        description={project.description}
                    />
                    <Actions />
                    </div>
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