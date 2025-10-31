import { motion } from "framer-motion"


export const HomePage = () => {
    return (
        <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: 'center', marginTop: '50px' }}
    >
      <h1>Welcome to Our Website!</h1>
      <p>Your one-stop destination for amazing Users,Products and Recipes.</p>
    </motion.div>
    )
}