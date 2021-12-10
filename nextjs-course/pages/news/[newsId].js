import { useRouter } from 'next/router';

const DetailPage = () => {
    const router = useRouter();

    const newsId = router.query.newsId;

    //send a request to the backed API to fetch the news item with newsId
    return (
        <div>
            <h1>The News Page</h1>
            <p></p>
        </div>
    );
};

export default DetailPage;
