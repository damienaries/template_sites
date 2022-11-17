import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}>
            <footer
            className="w-full h-12 bg-green-100 flex justify-between items-center px-8 mt-12">
            <div className="text-black capitalize text-sm">
                &copy; Alex Budman, 2022
            </div>
            <div className="text-black capitalize text-sm">
                Website by <a href="https://damienaries.com">Damien Aries</a>
            </div>
            </footer>
        </motion.div>
    )
}   

export default Footer;