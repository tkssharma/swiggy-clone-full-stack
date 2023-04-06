import { motion, useScroll, useSpring } from "framer-motion";

export default function TopLoading() {
	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<motion.div
			style={{
				scaleX,
				height: "8px",
				background: "tomato",
				width: "100%",
			}}
		/>
	);
}
