import React, { useEffect } from 'react'
import { getAllActions } from '../actions/actionActions'
import { connect } from 'react-redux'
import Project from './Project'

const Actions = (props) => {
    useEffect(() => {
        props.getAllActions(props.actions)
      }, [props])

    return (
        <div>
        {props.actions &&
            props.actions.map(action =>{
                return(
                    <Project
                        key={action.id}
                        name={action.name} 
                        description={action.description}
                    />
                )
            })
        }
        </div>
    )
}

const mapStateToProps = ({ actionReducer }) => ({
    actions: actionReducer.actions
  })

export default connect(mapStateToProps, { getAllActions })(Actions);