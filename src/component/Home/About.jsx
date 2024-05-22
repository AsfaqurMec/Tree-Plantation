import im1 from '../../assets/im1.png'
import im2 from '../../assets/im2.png'
import im3 from '../../assets/Vector (10).png'

const About = () => {
    return (
        <div className='bg-[#2a2a4a] '>
            <div className='hero min-h-screen  bg-[url("https://i.ibb.co/VYpK1hw/Group-281.png")]'>
            <div className="hero-content flex-col lg:flex-row justify-center items-center">
                <div className='lg:w-1/2 relative'>
                    <img src={im1} className="w-3/4 rounded-sm shadow-2xl border-8 border-[#ffffff42]" />
                    <img src={im2} className="w-1/2 rounded-sm absolute right-5 top-1/2 border-8 border-[#ffffff42] shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5  text-white'>
                    <h3 className='text-3xl  font-bold'>মাসুয়া ফাউন্ডেশন সম্পর্কে</h3>
                    <h1 className="text-5xl font-bold">সাহায্য করা প্রতিটি মানুষের <br /> জন্য মহান গুণ</h1>
                    <p className="py-6">মাসুয়া ফাউন্ডেশন একটি অরাজনৈতিক, অলাভজনক শিক্ষা, দাওয়াহ ও পূর্ণত মানবকল্যাণে নিবেদিত সেবামূলক প্রতিষ্ঠান এই প্রতিষ্ঠান মানবতার শিক্ষক, মানুষের মুক্তি ও শান্তির দূত, মানবসেবার আদর্শ, মহানবী মুহাম্মদ সা.-এর পদাঙ্ক অনুসরণ করে আর্তমানবতার সেবা, সমাজ সংস্কার, মহত্তম নীতিচেতনার সঞ্চার, কর্মসংস্থান তৈরি, দারিদ্র্য বিমোচন, ইসলামী তমদ্দুনের প্রসার, বহুমুখী শিক্ষায়ন প্রকল্প ।</p>
                    <div className='grid grid-cols-2 gap-4'>
                        <p className='flex gap-2'><img src={im3} alt="" />সাধারণ দান প্রকল্প</p>
                        <p className='flex gap-2'><img src={im3} alt="" />বৃক্ষরোপণ প্রকল্প</p>
                        <p className='flex gap-2'><img src={im3} alt="" />কম্পিউটার প্রশিক্ষণ প্রকল্প</p>
                        <p className='flex gap-2'><img src={im3} alt="" />হস্তশিল্প প্রকল্প</p>
                    </div>
                    <button className="btn bg-[#49C70D] px-7 py-3 border-none">আরো দেখুন</button>
                </div>
            </div>
        </div>
            </div>
        
    );
};

export default About;