import React from "react";

export default function HomeFeatures() {
  return (
    <>
      <section className="relative py-12 md:py-24 lg:py-32 bg-blue-800 bg-body overflow-hidden">
        <div className="relative container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/3 xl:w-2/5 px-4 mb-8 lg:mb-0">
            </div>
            <div className="w-full lg:w-3/5 xl:w-1/2 px-4">
              <div className="relative overflow-hidden">
                <div className="slider">
                  <div className="slider-container">
                    <div className="slide flex mb-16 items-start">
                      <div className="flex-shrink-0 flex mr-8 items-center justify-center w-16 h-16 rounded-full bg-red-500">
                      </div>
                      <div className="max-w-lg">
                        <h4 className="text-3xl font-medium text-white mb-8">
                        High-Quality Content Generation
                        </h4>
                        <p className="text-xl text-gray-300">
                        Our AI-powered content generator produces premium-quality content 
                        that is indistinguishable from human-written text.
                        </p>
                      </div>
                    </div>
                    <div className="slide flex mb-16 items-start">
                      <div className="flex-shrink-0 flex mr-8 items-center justify-center w-16 h-16 rounded-full bg-green-500">
                        {/* Icon or image */}
                      </div>
                      <div className="max-w-lg">
                        <h4 className="text-3xl font-medium text-white mb-8">
                        Time and Cost Efficiency
                        </h4>
                        <p className="text-xl text-gray-300">
                        Reduce the need for hiring additional writers or freelancers, 
                        making content production more cost-effective and scalable. Also,
                        VPN FREE
                        </p>
                      </div>
                    </div>
                    <div className="slide flex items-start">
                      <div className="flex-shrink-0 flex mr-8 items-center justify-center w-16 h-16 rounded-full bg-orange-500">
                        {/* Icon or image */}
                      </div>
                      <div className="max-w-lg">
                        <h4 className="text-3xl font-medium text-white mb-8">
                        Customization and Personalization
                        </h4>
                        <p className="text-xl text-gray-300">
                        Generate personalized content for different audience segments, 
                        enhancing engagement and relevance to your target audience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
