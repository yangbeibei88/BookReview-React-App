import { motion, AnimatePresence } from "framer-motion";
import { ReviewItem } from "./ReviewItem.jsx";
export const ReviewList = ({ reviews, handleDelete }) => {
  if (reviews.length === 0) {
    return <p>No feedback yet.</p>;
  } else {
    return (
      <div className="review-list">
        <AnimatePresence>
          {reviews.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ReviewItem
                  key={item.id}
                  item={item}
                  handleDelete={handleDelete}
                />
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
