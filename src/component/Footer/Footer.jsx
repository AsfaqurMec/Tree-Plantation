 

const Footer = () => {
    return (
        <div className="bg-green-200 px-4">
       
<footer className="footer p-10 mt-6  text-base-content">
  <aside >
    <div className="flex gap-4">
        <h1 className="text-3xl font-semibold px-4 py-3 rounded-md text-[#49C70D] bg-white">M</h1>
    <p className="font-semibold text-xl uppercase">mausa<br />
foundation</p>
</div>
    <p>অরাজনৈতিক, অলাভজনক শিক্ষা, দাওয়াহ ও পূর্ণত মানবকল্যাণে নিবেদিত সেবামূলক <br /> সরকার-নিবন্ধিত প্রতিষ্ঠান।</p>
  </aside> 
  <nav>
  <h6 className="footer-title text-lg text-cyan-900">কুইক লিংক</h6> 
    <a className="link link-hover font-medium text-gray-600">হোম</a>
    <a className="link link-hover font-medium text-gray-600">আমাদের সম্পর্কে</a>
    <a className="link link-hover font-medium text-gray-600">সম্প্রতি কার্যক্রম</a>
    <a className="link link-hover font-medium text-gray-600">গ্যালারি</a>
  </nav> 
  <nav>
    <h6 className="footer-title">গ্যালারি</h6> 
    <a className="link link-hover font-medium text-gray-600">বৃক্ষরোপণ প্রকল্প</a>
    <a className="link link-hover font-medium text-gray-600">কম্পিউটার ট্রেনিং প্রকল্প</a>
    <a className="link link-hover font-medium text-gray-600">সাধারণ দান (আদান-প্রদান)</a>
    <a className="link link-hover font-medium text-gray-600">হস্ত শিল্প</a>
  </nav> 
  <nav>
    <h6 className="footer-title">যোগাযোগ</h6> 
    <a className="link link-hover font-medium text-gray-600">০১৭৭২-৫৫৮৪৩২</a>
    <a className="link link-hover font-medium text-gray-600">২২০ নং রোড মিরপুর-২ ঢাকা<br/>বাংলাদেশে</a>
    <a className="link link-hover font-medium text-gray-600">অনুসরণ করুন</a>
  </nav>
  
</footer>
<div className="mt-6 border-white border-t-2 text-center py-7">
    <h1>স্বত্ব © 2024 মাউসা ফাউন্ডেশন - সর্ব স্বত্ব সংরক্ষিত।</h1>
  </div>
</div>
    );
};

export default Footer;