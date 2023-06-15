import * as React from 'react'
import { motion, useScroll } from 'framer-motion'

type Props = {
  animateIn?: boolean
  animateOut?: boolean
  children: React.ReactNode
}

const SliderItem: React.FC<Props> = (props) => {
  const {
    animateIn = true,
    // animateOut = true,
    children,
  } = props

  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 50vh", "end 50vh"]
  })
  const [opacity, setOpacity] = React.useState(1)

  React.useEffect(() => {
    scrollYProgress.onChange(value => {
      setOpacity(value === 1 ? 0.5 : 1)
    })
  }, [])

  return (
    <motion.div
      initial={animateIn ? { y: '50vh' } : false}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      ref={ref}
      className="bg-black"
    >
      <motion.div
        animate={{ opacity }}
        transition={{ type: 'tween', duration: 1 }}
        className="bg-white"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default SliderItem
