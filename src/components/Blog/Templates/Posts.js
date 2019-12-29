// import React from 'react'
// import Styles from '../Styles/Posts.module.scss';

// import { Link } from 'gatsby'
// import Post from './Post';
// import formatBlogDate from '../../../functions/dateFormatter';

// const BlogList = ({ pageContext }) => {
//     const { index: pageIndex, pageCount } = pageContext
//     const isFirst = pageIndex === 1
//     const isLast = pageContext.last
//     const prevPage = !isFirst && pageIndex - 1 === 1 ? '/' : pageIndex - 1
//     const nextPage = !isLast && pageIndex+ 1

//     return (
//        /* your code to display a list of posts */
//        <React.Fragment>
//            <section className={Styles.Posts}>
//                 {
//                     pageContext.group.map(({ node }, index) => {
//                         // return (
//                         //     <Post
//                         //         key={node.id}
//                         //         PostPosition={index}
                                
//                         //         // FirstPostSpecialStyle is applied conditionally 
//                         //         // FirstPostSpecialStyle={props.FirstPostSpecialStyle}

//                         //         href={node.fields.slug}

//                         //         title={node.frontmatter.title}

//                         //         CoverSource={node.frontmatter.cover}
//                         //         CoverAlt=''

//                         //         excerpt={node.frontmatter.pageDescription}
//                         //         extraInfo={`${formatBlogDate(node.frontmatter.date)} | ${node.timeToRead} min${node.timeToRead > 1 ? 's' : ''} read`}
//                         //     />
//                         // )
//                         return (
//                             <h1>hey</h1>
//                         )
//                     })
//                 }
//             </section>

//       {!isFirst && (
//         <Link to={`/${prevPage}`} rel="prev">
//           ← Previous Page
//         </Link>
//       )}
//       {
//         Array.from({ length: pageCount }, (_, i) => (
//             <Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? "" : i + 1}`}>
//                 {i + 1}
//             </Link>
//         ))}
//       }
//       {!isLast && (
//             <Link to={`/${nextPage}`} rel="next">
//                  Next Page →
//             </Link>
//       )}
//       </React.Fragment>
//     )
// }

// export default BlogList;