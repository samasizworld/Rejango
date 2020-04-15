import React,{Fragment} from 'react'
import LeadForm from './LeadForm'
import LeadsList from './LeadsList'

export default function Dashboard() {
    return (
        <Fragment>
            <LeadForm />
            <LeadsList/>
        </Fragment>
    )
}
