import donate from '../../assets/Vector (9).png'

const Banner = () => {
    return (
        <div className='bg-origin-content bg-cover h-screen bg-no-repeat  bg-[url("https://i.ibb.co/S33KTPJ/Property-1-Component-8.png")] flex justify-end items-center'>
            <div className="bg-[#FFFFFFAB] p-11 rounded-2xl text-[#424242] w-1/3 space-y-3">
                <p>নোটিশ বোর্ড:</p>
                <ul className='list-disc '>
                    <li>জরুরী নোটিশ : ২০২০-২১ সেশনে ভর্তিচ্ছুদের সহযোগিতায় করণীয়</li>
                    <li>ব্যবহার বিধি : সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতির ওয়েবসাইটে সকলকে অভিনন্দন ! আমাদের অনেকদিনের কাঙ্খিত আনকোরা</li>
                    <li>ব্যবহার বিধি : সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতির ওয়েবসাইটে সকলকে অভিনন্দন ! আমাদের অনেকদিনের কাঙ্খিত আনকোরা</li>
                    <li>জরুরী নোটিশ : ২০২০-২১ সেশনে ভর্তিচ্ছুদের সহযোগিতায় করণীয়</li>

                </ul>
            </div>
            <h1 className="uppercase flex gap-3 rounded-md text-white bg-[#49C70D] py-4 px-8 -rotate-90">donate <img className='rotate-90' src={donate} alt="" /></h1>
        </div>
    );
};

export default Banner;