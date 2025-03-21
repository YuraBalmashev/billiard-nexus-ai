
import React from 'react';

const TrustSignals = () => {
  // These would be replaced with actual partner logos
  const partners = [
    { name: "Elite Billiards Club", id: 1 },
    { name: "Pro Cue Academy", id: 2 },
    { name: "International Pool Association", id: 3 },
    { name: "Master Billiards League", id: 4 },
    { name: "Precision Cue Sports", id: 5 },
    { name: "Global Pool Championships", id: 6 }
  ];

  return (
    <section className="py-20 bg-billman-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-medium text-white">
            Trusted by Leading Clubs and Organizations
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div key={partner.id} className="group">
              <div className="h-12 flex items-center justify-center px-6 grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100">
                {/* In a real implementation, this would be an image */}
                {/* <img src={`/logos/${partner.id}.svg`} alt={partner.name} className="max-h-full" /> */}
                <div className="glassmorphism rounded-md px-4 py-2 text-billman-lightGray group-hover:text-billman-green transition-colors duration-300">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-billman-lightGray max-w-2xl mx-auto">
            Join the growing network of clubs and organizations that are transforming the billiards experience with BILLMAN's cutting-edge technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
