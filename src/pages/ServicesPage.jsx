import React from 'react';
import { FiArrowRight, FiCheck, FiTruck, FiShield, FiClock, FiDollarSign, FiPhone } from 'react-icons/fi';
import Setup from '../components/Setup';

const services = [
    {
        slug: 'dry-van',
        title: 'Dry Van Dispatching',
        image: '/images/dryvan.png',
        description: 'We dispatch dry van owner-operators on the highest-paying loads across all 48 states. Our dispatchers negotiate the best rates and keep your wheels turning with consistent freight.',
        features: [
            'Rate negotiation for top dollar per mile',
            'Consistent lane coverage nationwide',
            'Broker and shipper relationship management',
            'Back-haul optimization to reduce deadhead',
        ],
        tag: 'MOST POPULAR',
        tagColor: 'bg-red-500',
    },
    {
        slug: 'box-truck',
        title: 'Box Truck Dispatching',
        image: '/images/boxtruck.png',
        description: 'Specialized dispatching for 26ft box truck operators. We find the best local and regional loads that fit your equipment and maximize your daily earnings.',
        features: [
            'Local & regional load sourcing',
            'Last-mile delivery contracts',
            'Amazon Relay & FedEx Ground loads',
            'Multi-stop route optimization',
        ],
        tag: 'HIGH DEMAND',
        tagColor: 'bg-blue-500',
    },
    {
        slug: 'flatbed',
        title: 'Flatbed Dispatching',
        image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Expert dispatching for flatbed carriers hauling construction materials, steel, lumber, and oversized freight. We specialize in premium flatbed rates.',
        features: [
            'Premium rate negotiation for heavy haul',
            'Permit & escort coordination support',
            'Construction & manufacturing lanes',
            'Oversized / overweight load booking',
        ],
        tag: 'PREMIUM',
        tagColor: 'bg-amber-500',
    },
    {
        slug: 'reefer',
        title: 'Reefer Dispatching',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Temperature-controlled freight dispatching for reefer operators. We keep your trailer loaded with high-paying produce, frozen food, and pharmaceutical shipments year-round.',
        features: [
            'Produce & frozen food lane specialists',
            'Temperature monitoring coordination',
            'Seasonal rate maximization',
            'FSMA compliance support',
        ],
        tag: 'SPECIALIZED',
        tagColor: 'bg-emerald-500',
    },
    {
        slug: 'step-deck',
        title: 'Step Deck Dispatching',
        image: '/images/stepdeck.png',
        description: 'We dispatch step deck trailers on high-paying loads for oversized and tall equipment. Our team handles all the logistics so you focus on hauling.',
        features: [
            'Oversized cargo load matching',
            'Heavy machinery transport lanes',
            'Rate negotiation above market average',
            'Permit coordination for oversize loads',
        ],
        tag: null,
        tagColor: '',
    },
    {
        slug: 'hotshot',
        title: 'Hotshot Dispatching',
        image: '/images/hotshot.png',
        description: 'Fast-paced dispatching for hotshot carriers running gooseneck and bumper-pull trailers. We find urgent, time-sensitive loads that pay the highest rates.',
        features: [
            'Expedited & time-critical freight',
            'Oil field & construction site loads',
            'Partial and LTL load matching',
            'Fast turnaround load booking',
        ],
        tag: 'FAST',
        tagColor: 'bg-orange-500',
    },
    {
        slug: 'conestoga',
        title: 'Conestoga Dispatching',
        image: '/images/contegesa.png',
        description: 'Specialized dispatching for Conestoga trailers that combine the versatility of a flatbed with enclosed protection. We find loads that pay a premium for this equipment type.',
        features: [
            'Premium rates for specialty equipment',
            'Weather-sensitive cargo loads',
            'Manufacturing & industrial freight',
            'Side & top-load accessible shipments',
        ],
        tag: 'SPECIALTY',
        tagColor: 'bg-purple-500',
    },
    {
        slug: 'power-only',
        title: 'Power Only Dispatching',
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Power Only dispatching for owner-operators who want to haul broker or shipper-owned trailers. Low overhead, high flexibility, maximum earning potential.',
        features: [
            'Trailer-provided load sourcing',
            'Drop & hook opportunities',
            'Reduced equipment maintenance costs',
            'Flexible scheduling & lane choices',
        ],
        tag: 'FLEXIBLE',
        tagColor: 'bg-cyan-500',
    },
];

const whyChooseUs = [
    {
        icon: <FiDollarSign className="w-7 h-7" />,
        title: 'Top Dollar Rates',
        description: 'We never settle for low rates. Our dispatchers negotiate aggressively to get you the highest paying loads on every trip.',
    },
    {
        icon: <FiClock className="w-7 h-7" />,
        title: '24/7 Dispatch Support',
        description: 'Our dispatch team is available around the clock. No matter the time zone or day of the week, we have your back.',
    },
    {
        icon: <FiShield className="w-7 h-7" />,
        title: 'No Forced Dispatch',
        description: 'You choose which loads to take. We present the best options and you make the final call — your truck, your rules.',
    },
    {
        icon: <FiTruck className="w-7 h-7" />,
        title: 'Paperwork Handled',
        description: 'Rate confirmations, BOLs, invoicing, and broker packets — we handle all the paperwork so you can focus on driving.',
    },
];

const ServicesPage = () => {
    return (
        <div className="w-full bg-white">
            {/* Hero Banner */}
            <section className="relative bg-gray-900 pt-32 pb-24 px-4 sm:px-8 lg:px-12 xl:px-20 overflow-hidden">
                {/* BG Pattern */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="inline-block bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-1.5 mb-6">
                        <span className="text-primary-400 text-[13px] font-bold tracking-wide uppercase">Our Services</span>
                    </div>
                    <h1 className="text-[44px] sm:text-[56px] lg:text-[68px] font-black text-white leading-[1.05] tracking-tight mb-6">
                        Truck Dispatching <br className="hidden sm:block" />
                        <span className="text-primary-500">Services</span>
                    </h1>
                    <p className="text-gray-400 text-[18px] sm:text-[20px] font-medium leading-relaxed max-w-2xl mb-10">
                        We dispatch all types of trucks. From dry vans to flatbeds, reefers to hotshots — Lane Star Dispatch keeps your truck loaded and earning top dollar. Based in San Francisco, California, serving owner-operators nationwide.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#services-list" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-[10px] transition-all shadow-lg text-[15px]">
                            View All Services <FiArrowRight className="w-5 h-5" />
                        </a>
                        <a href="tel:+15106033758" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-[10px] transition-all border border-white/10 text-[15px]">
                            <FiPhone className="w-5 h-5" /> Call Us Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-[#f8fbff] py-20 px-4 sm:px-8 lg:px-12 xl:px-20 border-b border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-[36px] sm:text-[44px] font-black text-[#1a1a1a] tracking-tight mb-3">
                            Why Owner-Operators <span className="text-primary-600">Choose Us</span>
                        </h2>
                        <p className="text-gray-500 font-medium text-[16px] max-w-xl mx-auto">
                            Lane Star Dispatch is built by truckers, for truckers. Here's what sets us apart.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="bg-white rounded-[16px] border border-gray-100 p-8 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-[12px] bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-[17px] font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-[14px] text-gray-500 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24 px-4 sm:px-8 lg:px-12 xl:px-20" id="services-list">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[36px] sm:text-[48px] font-black text-[#1a1a1a] tracking-tight mb-4">
                            Dispatching For <span className="text-primary-600">Every Truck Type</span>
                        </h2>
                        <p className="text-gray-500 font-medium text-[16px] max-w-2xl mx-auto">
                            No matter what you drive, we find the loads. Click on any service to learn more or request a quote.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <a
                                key={index}
                                href={`#truck/${service.slug}`}
                                className="group relative bg-white border border-gray-100 rounded-[20px] overflow-hidden hover:shadow-xl hover:border-primary-300/40 transition-all duration-300 flex flex-col"
                            >
                                {/* Tag */}
                                {service.tag && (
                                    <div className="absolute top-5 right-5 z-20">
                                        <span className={`text-white text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full ${service.tagColor}`}>
                                            {service.tag}
                                        </span>
                                    </div>
                                )}

                                {/* Top Image Area */}
                                <div className="relative h-[200px] bg-[#f4f6f9] flex items-center justify-center overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6 sm:p-8 flex flex-col">
                                    <h3 className="text-[20px] sm:text-[22px] font-black text-gray-900 tracking-tight mb-3 group-hover:text-primary-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-[14px] text-gray-500 leading-relaxed mb-5">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                                        {service.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <FiCheck className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-[13px] text-gray-600 font-medium leading-snug">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-auto flex items-center gap-2 text-primary-600 font-bold text-[14px] group-hover:gap-3 transition-all">
                                        Learn More <FiArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Percentage Stats Bar */}
            <section className="bg-gray-900 py-16 px-4 sm:px-8 lg:px-12 xl:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-[40px] sm:text-[52px] font-black text-white leading-none mb-2">95<span className="text-primary-500">%</span></div>
                        <div className="text-[12px] sm:text-[13px] text-gray-400 font-bold uppercase tracking-wider">On-Time Dispatch Rate</div>
                    </div>
                    <div>
                        <div className="text-[40px] sm:text-[52px] font-black text-white leading-none mb-2">500<span className="text-primary-500">+</span></div>
                        <div className="text-[12px] sm:text-[13px] text-gray-400 font-bold uppercase tracking-wider">Active Carriers</div>
                    </div>
                    <div>
                        <div className="text-[40px] sm:text-[52px] font-black text-white leading-none mb-2">48</div>
                        <div className="text-[12px] sm:text-[13px] text-gray-400 font-bold uppercase tracking-wider">States Covered</div>
                    </div>
                    <div>
                        <div className="text-[40px] sm:text-[52px] font-black text-white leading-none mb-2">24<span className="text-primary-500">/7</span></div>
                        <div className="text-[12px] sm:text-[13px] text-gray-400 font-bold uppercase tracking-wider">Dispatch Support</div>
                    </div>
                </div>
            </section>

            {/* Setup / Quote CTA */}
            <Setup />
        </div>
    );
};

export default ServicesPage;
