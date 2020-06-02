// import React from 'react'
// import { useStaticQuery, graphql, Link } from 'gatsby'
// import Img from 'gatsby-image'
// import { FaInstagram } from 'react-icons/fa'

// import './styles.css'

// export default function InstagramFeed() {
//   const data = useStaticQuery(graphql`
//     query MyQuery {
//       allInstaNode {
//         edges {
//           node {
//             id
//             likes
//             original
//             timestamp
//             caption
//             localFile {
//               childImageSharp {
//                 fluid(maxWidth: 400) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   const dataIG = data.allInstaNode.edges

//   return (
//     <div
//       className="instagram"
//       data-sal="slide-up"
//       data-sal-delay="200"
//       data-sal-easing="ease"
//       data-sal-duration="1000"
//     >
//       <div>
//         <FaInstagram />
//         <h3>SIGA A HAWK</h3>
//       </div>
//       <div className="igFeed">
//         {dataIG.map(igPhoto => (
//           <a
//             data-sal="zoom-in"
//             data-sal-delay="200"
//             data-sal-easing="ease"
//             data-sal-duration="1000"
//             key={igPhoto.node.id}
//             href={`https://www.instagram.com/p/${igPhoto.node.id}`}
//           >
//             <div className="igPhoto">
//               <Img
//                 fluid={igPhoto.node.localFile.childImageSharp.fluid}
//                 alt="Instagram feed"
//               />
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   )
// }
