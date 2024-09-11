import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const Logo: React.FC = () => {
  return (
    <motion.div className='flex items-center justify-center mt-2'>
      <MotionLink
        href='/'
        className='w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent'
        whileHover={{
          background: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        AS
      </MotionLink>
    </motion.div>
  );
};

export default Logo;
