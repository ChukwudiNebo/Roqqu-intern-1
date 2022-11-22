import React, {Fragment} from 'react'
import {Link, useRouteMatch} from 'react-router-dom'

const SideNavBarFaq = () =>
{
    
    function CustomLink({ children, to}){
        let match = useRouteMatch(to !== "" ? `/roqqu/faqs/` + to : '/home');
        
        return(
            <Link to={to} className={`${match ? "text-primary fix" : ""}`}>
                {children}
            </Link>
        )
    }


    const CustomLinkName = [
        {
            name: "All Product",
            id: "all-product",
            to: 'all-product'
            // resource: [
            //     {
            //         url: '/ecommerce/product/all-product'
            //     }
            //]
        },
        {
            name: "Banners & Large Format",
            id: "banners-large-format",
            to:  "banners"
            // to:  "/ecommerce/product/banners"
        },
        {
            name: "Brochures",
            id: "brochures",
            to: "brochures"
            // to: "/ecommerce/product/brochures"
        }
    ]




  return (
    <Fragment>
            <div>
                {CustomLinkName.map(({name,children, to}) => (
                    <CustomLink to={to}>
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


  