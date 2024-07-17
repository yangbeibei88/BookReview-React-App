import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { ReviewItem } from "./ReviewItem.jsx";
import { ReviewContext } from "../context/ReviewContext.jsx";
import { Spinner } from "./shared/Spinner.jsx";

export const ReviewList = () => {
  const { reviews, isLoading } = useContext(ReviewContext);

  if (reviews.length === 0 && !isLoading) {
    return <p>No feedback yet.</p>;
  } else {
    return isLoading ? (
      <Spinner />
    ) : (
      <div className="review-list">
        <AnimatePresence>
          {reviews.map((item) => {
            return (
              <motion.div
                key={item._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ReviewItem key={item._id} item={item} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    );
    // return (
    //   <div className="review-list">
    //     {reviews.map((item) => {
    //       return (
    //         <ReviewItem key={item.id} item={item} handleDelete={handleDelete} />
    //       );
    //     })}
    //   </div>
    // );
  }
};
