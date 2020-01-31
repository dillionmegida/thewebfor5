import React from "react";      
import Styles from '../Styles/Posts.module.scss';

import Layout from '../../../containers/Layout/Layout';
import Brand from '../../Brand/Details';
import allCategories from '../../../hooks/allCategories';

export default props => {
    
    const categories = allCategories();
    const categoryPage = props.CategoryPage;

    let category = categories.filter(cat => (
        cat.name === categoryPage
    ))

    const numOfPosts = category[0]["numOfPosts"];

    const CategoryHeader = (
        <React.Fragment>
            <h2>
                Category - {props.CategoryPage}
            </h2>
            <p className={Styles.HeaderExtraDetails}>
                {numOfPosts} post{numOfPosts === 1 ? "": "s"} published
            </p>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <Layout

                PageTitle={`${props.CategoryPage} Category - ${Brand.name}`}
                PageDescription={`Group of topics under ${props.CategoryPage} section in ${Brand.name}`}
                PageLink={`/category/${props.CategoryPage}`}
                PageKeywords={`categories, ${props.CategoryPage} category, ${props.CategoryPage} topics`}

                FirstSection={
                    <div className={Styles.LeftContents}>
                        {CategoryHeader}
                    </div>
                }

                SecondSection={
                    <React.Fragment>
                        <div className={Styles.PageHeader}>
                            {CategoryHeader}
                        </div>
                        {props.children}
                    </React.Fragment>
                }
            />
        </React.Fragment>
    )
}