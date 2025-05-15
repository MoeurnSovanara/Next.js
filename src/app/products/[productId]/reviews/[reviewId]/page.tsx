export default async function  ProductReviewPage({
  params,
}: {
  params: Promise <{ productId: string; reviewId: string }>;
}) {
    const { productId, reviewId } =await params;
  return (
    <div>
      <h1>Product Review</h1>
        <h2>Review {reviewId} for Product {productId}</h2>
    </div>
  );
}