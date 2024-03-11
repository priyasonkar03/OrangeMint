import React from 'react'
import Fruit1 from"../../assets/Fruits/Fruit1.webp"
import Fruit2 from"../../assets/Fruits/Fruit2.png"
import Fruit3 from"../../assets/Fruits/Fruit3.png"
const SecvicesData =[
    {
        id:1,
        image: Fruit1,
        title:"Fresh Fruits",
        subtitle:`lorem ipsum dolor sit amet,
         consectetur  adipiscing elit.`,
         aosDelay:"300"
    },
    {
        id:2,
        image: Fruit2,
        title:"Fresh Fruits",
        subtitle:`lorem ipsum dolor sit amet,
         consectetur  adipiscing elit.`,
         aosDelay:"300"
    },
    {
        id:3,
        image: Fruit3,
        title:"Orange Juice",
        subtitle:`lorem ipsum dolor sit amet,
         consectetur  adipiscing elit.`,
        aosDelay:"300"
    }
]
const Services = () => {
  return (
    <div className='container my-16 space-y-4'>
        {/* header section  */}
        <div className='text-center max-w-lg mx-auto space-y-2'>
            <h1 data-aos="fade-up" className='text-3xl font-bold text-dark'>
                Fresh and <span
                className='text-primary'
                >Tasty Fruits</span>{" "}
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className='text-sm opacity-50'>Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Ratione rem placeat enim, 
            enetur laboriosam temporibus in facere error similique fugit.</p>
        </div>

        {/* card section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {SecvicesData.map(({id, image, title, subtitle,aosDelay}) =>(
                <div key={id} data-aos="fade-up" data-aos-delay={aosDelay}
                className='p-4 text-center space-y-6'>
                    <img src={image} alt="" 
                    className='max-w-[200px] mx-auto hover:scale-110 duration-300
                    img-shadow2'/>
                <div className='space-y-2'>
                    <h1 className='text-2xl font-bold text-primary'>{title}</h1>
                    <p className='text-dark'>{subtitle}</p>
                </div>
                </div>
            
            ))}

        </div>
    </div>
  )
}

export default Services
