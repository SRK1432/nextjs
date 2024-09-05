import Link from 'next/link';
function NewsPage(){
    return(
        <>
         <h2>The News Page</h2>
         <ul>
            <li><Link href='/news/nextjs-is-a-great-framework'>Nextjs is a great framework</Link></li>
            <li>something else</li>
         </ul>
        </>

)
}
export default NewsPage;