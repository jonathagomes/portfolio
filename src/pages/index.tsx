import { motion } from "framer-motion";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useSidebarContext } from "../contexts/SidebarContext";
import Homepage from "../components/Homepage";

export default function Home() {
  const { isOpenMobileMenu } = useSidebarContext()
  
  return (
    <>
      <motion.div animate={{ x: 0 }}  initial={{ x: -1000 }} transition={{ duration: 1 }}>
        <Header />
      </motion.div>
      { isOpenMobileMenu && (
        <motion.div animate={{ x: 0 }} initial={{ x: -500 }} transition={{ duration: 1 }} >
          <Sidebar />
        </motion.div>
      )}
      <motion.div animate={{ x: 0 }} initial={{ x: -1000 }} transition={{ duration: 1.5 }}>
        <Homepage />
      </motion.div>
    </>
  );
}