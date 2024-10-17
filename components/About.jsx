
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import {motion} from 'framer-motion'



const About = () => {
  return (
    <section className='relative pt-12 pb-24' id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              
              <div className="w-[160px] h-[160px] bg-tertiary absolute -left-5 -top-5 -z-10">

              </div>

              <div className='rounded-tl-[8px] rounded-tr-[120px] w-full bg-accent min-h-[480px] flex items-end justify-center'>
                <Image
                  src="/assets/about/img.png"
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt=""
                  />
              </div>

              <div className='absolute top-2/4 -right-[65px] flex items-center justify-center'>
              <motion.div
                animate={{
                  rotate:[0,360]
                }}
                transition={{
                  duration:10,
                  ease:"linear",
                  repeat: Infinity
                }}
              >
                <Image
                src="/assets/about/shape-1.svg"
                width={160}
                height={160}
                alt=""
                />
                </motion.div>
                <div className='absolute text-center text-white'>
                  <div className='text-5xl font-bold leading-none'>10+</div>
                  <div className='leading-none text-center'>
                    Years of<br/> Experience 
                  </div>
                </div>


              </div>


            </div>
          </div>

          <div className='text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6'>
            <div>
              &nbsp;
            <TypeAnimation
                    preRenderFirstString={true}
                    sequence={["Itamar Gouveia",2000,"Desenvolvedor WEB",2000]}
                    speed={50}
                    repeat={Infinity}
                    wrapper='span'
                    cursor={false}
                    className='h1 mb-2'
                    />
            </div>
            <p className='max-w-[680px] mx-auto xl:mx-0 mb-2'>
              flasjfl jfl ljasl lkjafdsf jfdl ljfsdllfsa f fds fsafhkash kksda fahskfh aks
            </p>

            <div className='flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center'>

            <div className='max-w-max'>
              <div className='uppercase font-bold text-primary'>Age</div>
                <p>40 Years</p>      
            </div>

            <div className='max-w-max'>
              <div className='uppercase font-bold text-primary'>Age</div>
                <p>40 Years</p>      
            </div>

            <div className='max-w-max'>
              <div className='uppercase font-bold text-primary'>Age</div>
                <p>40 Years</p>      
            </div>

            <div className='max-w-max'>
              <div className='uppercase font-bold text-primary'>Age</div>
                <p>40 Years</p>      
            </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
