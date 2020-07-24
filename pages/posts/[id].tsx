import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({postData} : {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
    )
}
export async function getStaticPaths() {
    // // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()
  
    // // Get the paths we want to pre-render based on posts
    // const paths = posts.map((post) => `/posts/${post.id}`)
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
  // This function gets called at build time
  export async function getStaticProps({ params }) {
  //     // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // // By returning { props: posts }, the Blog component
  // // will receive `posts` as a prop at build time
  // return {
  //   props: {
  //     posts,
  //   },
  // }
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }