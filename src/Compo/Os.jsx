import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="bg-green-500 text-white p-6 rounded-full shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
      >
        ✅
      </motion.div>
      <h2 className="mt-4 text-2xl font-bold">Order Successful!</h2>
      <p className="text-gray-600">Thank you for your purchase.</p>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
        onClick={handleGoHome}
      >
        Go to Home
      </button>
    </motion.div>
  );
}