import { useRouter } from "next/router";

function DetailPage(){
    const router = useRouter();
    const newsId = router.query.newsId;
    return<h2>The Details Page</h2>
}
export default DetailPage;