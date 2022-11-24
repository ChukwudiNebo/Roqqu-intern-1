import React, {Fragment} from 'react'
import {Link, useLocation, useRouteMatch} from 'react-router-dom'

import '../css files/sideFaq.css'



const SideNavBarFaq = (path) =>
{
    
    function CustomLink({ children, to,path}){
        let match = useRouteMatch(to !== "" ? `/${path}/` + to : '/');
        
        // console.log(children)
        return (
            // <Link to={`faqs/${to}/`} className={`${match ? "text-primary" : ""} fix`}>
            <Link to={to} className={`${match ? "text-primary" : ""} fix`}>
                {children}
            </Link>
        )
    }
    


    const CustomLinkName = [
        {
            name: "Categories",
            id: "categories",
            to: 'categories'
        },
        {
            name: "Latest Releases",
            id: "latest-releases",
            to:  "latest-releases"
        },
        {
            name: "Trading(17)",
            id: "Trading",
            to: "trading"
        },
        {
            name: "Blockchain(17)",
            id: "blockchain",
            to:  "blockchain"
        },
        {
            name: "Cryptocurrency(17)",
            id: "cryptocurrency",
            to:  "cryptocurrency"
        },
        {
            name: "Beginner(17)",
            id: "beginner",
            to:  "beginner"
        },
        {
            name: "Defi(17)",
            id: "defi",
            to:  "defi"
        },
    ]




  return (
    <Fragment>
            <div>
                {CustomLinkName.map(({name,children,to,id,path}) => (
                    <CustomLink to={to} key={id}>
                        <div>{name}</div>
                        <div>
                            {children}
                        </div>
                        {/* <Link to={to}>{to}</Link> */}
                        {/* <div>
                            {children}
                        </div> */}
                    </CustomLink>
                ))}
            </div>
        </Fragment>
  )
}

export default SideNavBarFaq


  