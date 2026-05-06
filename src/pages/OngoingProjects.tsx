import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useSEO } from '../hooks/useSEO';
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
  Phone,
  Home,
  Landmark,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Import Kenyan images
import kenyaResidential from "../assets/kenya-residential-1.jpg";
import kenyaCommercial from "../assets/kenya-commercial-1.jpg";
import kenyaTownhouse from "../assets/kenya-townhouse-1.jpg";
import kenyaLandscape from "../assets/kenya-landscape-1.jpg";
import kenyaVilla from "../assets/kenya-villa-1.jpg";
import kenyaWildlife from "../assets/kenya-wildlife-1.jpg";

const OngoingProjects = () => {
  useSEO({
    title: 'Ongoing Projects & Properties',
    description: 'Explore BeaconTrust\'s ongoing projects and available properties in Kisumu, Kenya. Houses, plots, commercial spaces, and residential developments.',
    keywords: 'ongoing projects Kenya, property listings Kisumu, houses for sale, plots for sale, real estate development, residential projects, commercial properties'
  });

  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: projectsRef, isVisible: projectsVisible } =
    useScrollAnimation();
  const { elementRef: listingsRef, isVisible: listingsVisible } =
    useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "Beacon Heights Residential",
      location: "Kisumu East, Kenya",
      type: "Residential Development",
      status: "Under Construction",
      completion: "December 2024",
      units: 24,
      bedrooms: "2-4",
      bathrooms: "2-3",
      area: "120-200 sqm",
      price: "From KSh 4.5M",
      image: kenyaResidential,
      description:
        "Modern residential apartments with stunning lake views and premium amenities.",
      features: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Garden"],
    },
    {
      id: 2,
      title: "Lakeside Commercial Plaza",
      location: "Milimani, Kisumu",
      type: "Commercial Development",
      status: "Planning Phase",
      completion: "June 2025",
      units: 12,
      area: "50-150 sqm",
      price: "From KSh 8M",
      image: kenyaCommercial,
      description:
        "Prime commercial spaces perfect for retail and office use in the heart of Kisumu.",
      features: [
        "Prime Location",
        "High Foot Traffic",
        "Modern Design",
        "Ample Parking",
      ],
    },
    {
      id: 3,
      title: "Garden View Townhouses",
      location: "Nyamasaria, Kisumu",
      type: "Townhouse Development",
      status: "Available Now",
      completion: "Completed",
      units: 8,
      bedrooms: "3-4",
      bathrooms: "3-4",
      area: "180-250 sqm",
      price: "From KSh 6.2M",
      image: kenyaTownhouse,
      description:
        "Spacious townhouses with private gardens and modern finishes.",
      features: [
        "Private Garden",
        "Garage",
        "Modern Kitchen",
        "Master En-suite",
      ],
    },
    {
      id: 4,
      title: "Sunset Ridge Apartments",
      location: "Tom Mboya Estate, Kisumu",
      type: "Apartment Complex",
      status: "Under Construction",
      completion: "March 2025",
      units: 36,
      bedrooms: "1-3",
      bathrooms: "1-2",
      area: "65-140 sqm",
      price: "From KSh 2.8M",
      image: kenyaLandscape,
      description:
        "Affordable modern apartments with excellent connectivity to the city center.",
      features: [
        "Affordable Housing",
        "Good Transport Links",
        "Community Center",
        "Playground",
      ],
    },
    {
      id: 5,
      title: "Executive Villas Phase II",
      location: "Riat Hills, Kisumu",
      type: "Villa Development",
      status: "Pre-Launch",
      completion: "September 2025",
      units: 6,
      bedrooms: "4-5",
      bathrooms: "4-5",
      area: "300-400 sqm",
      price: "From KSh 12M",
      image: kenyaVilla,
      description:
        "Luxury villas with panoramic views and premium specifications.",
      features: [
        "Panoramic Views",
        "Luxury Finishes",
        "Large Compound",
        "Staff Quarters",
      ],
    },
    {
      id: 6,
      title: "Central Business Suites",
      location: "CBD, Kisumu",
      type: "Office Development",
      status: "Under Construction",
      completion: "August 2024",
      units: 20,
      area: "40-120 sqm",
      price: "From KSh 5.5M",
      image: kenyaWildlife,
      description:
        "Modern office suites in the central business district with premium amenities.",
      features: [
        "CBD Location",
        "High-Speed Internet",
        "Conference Facilities",
        "Reception Services",
      ],
    },
  ];

  const propertyListings = {
    houses: [
      {
        id: 1,
        title: "Luxury Family Home",
        location: "Milimani, Kisumu",
        type: "Detached House",
        status: "For Sale",
        bedrooms: 4,
        bathrooms: 3,
        area: "250 sqm",
        price: "KSh 8.5M",
        image: kenyaVilla,
        description:
          "Beautiful 4-bedroom family home with modern amenities and spacious compound.",
        features: [
          "Private Garden",
          "Garage",
          "Modern Kitchen",
          "Security System",
          "Generator",
        ],
      },
      {
        id: 2,
        title: "Modern Townhouse",
        location: "Nyamasaria, Kisumu",
        type: "Townhouse",
        status: "For Sale",
        bedrooms: 3,
        bathrooms: 2,
        area: "180 sqm",
        price: "KSh 5.2M",
        image: kenyaTownhouse,
        description:
          "Contemporary 3-bedroom townhouse in a gated community with excellent amenities.",
        features: [
          "Gated Community",
          "Swimming Pool",
          "Gym",
          "Children's Play Area",
        ],
      },
      {
        id: 3,
        title: "Executive Bungalow",
        location: "Riat Hills, Kisumu",
        type: "Bungalow",
        status: "For Sale",
        bedrooms: 5,
        bathrooms: 4,
        area: "320 sqm",
        price: "KSh 12.8M",
        image: kenyaResidential,
        description:
          "Spacious executive bungalow with panoramic lake views and premium finishes.",
        features: [
          "Lake View",
          "Master En-suite",
          "Study Room",
          "Staff Quarters",
          "CCTV",
        ],
      },
    ],
    plots: [
      {
        id: 4,
        title: "Prime Residential Plot",
        location: "Nyawara-Kisian, Kisumu",
        type: "Residential Plot",
        status: "For Sale",
        area: "0.07Ha - 0.1Ha",
        price: "KSh 700,000 - 1.5M",
        image: nyawarakisian1,
        description:
          "Affordable prime residential plot with ready title deed and access to utilities, Secure neighborhood and paved murram road perfect for family residential. 1km off Kisian junction - Bondo tarmac road, 15km from Kisumu CBD. Lipa pole pole accepted.",
        features: [
          "Title Deed",
          "Water",
          "Electricity",
          "Good Access Road",
          "Fenced",
        ],
      },
      {
        id: 5,
        title: "Prime Residential Plot",
        location: "Ojola-Kisian, Kisumu",
        type: "Residential Plot",
        status: "For Sale",
        area: "0.045Ha - 0.07Ha",
        price: "KSh 700,000 - 1.4M",
        image: Ojolakisian1,
        description:
          "Affordable prime residential plot with ready title deed and access to utilities, Secure neighborhood and paved murram road perfect for family residential. 1km off Kisian junction - Bondo tarmac road, 15km from Kisumu CBD. Lipa pole pole accepted.",
        features: [
          "Secure Location",
          "High Traffic",
          "Mixed Use",
          "Investment Grade",
          "Prime Corner",
        ],
      },
      {
        id: 6,
        title: "Commercial/Residential Plot",
        location: "Chabera, Homa Bay County",
        type: "Commercial Plot",
        status: "For Sale",
        area: "3 Acres",
        price: "KSh 1.5M",
        image: chaberahbay,
        description:
          "Commercial/residential plot with ready titles for TRANSFER ONLY, locate along Kisumu-Kisii road, 500m from Chabera town and touching the main Highway. Ideal for Petrol Station, Hotel, Hospital or Warehouse.",
        features: [
          "Secure Location",
          "High Traffic",
          "Mixed Use",
          "Investment Grade",
          "Prime Corner",
        ],
      },
        {
        id: 7,
        title: "Prime Residential Plot",
        location: "Milimani, Kisumu",
        type: "Residential Plot",
        status: "For Sale",
        area: "0.07Ha",
        price: "KSh 20M",
        image: cbdkisumu1,
        description:
          "Prime residential plot, 0.07ha, Milimani, Kisumu, Opposite Impala Sanctuary, adjacent to KIWASCO. Asking price Ksh20m",
        features: [
          "Title Deed",
          "Water",
          "Electricity",
          "Good Access Road",
        ],
      },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available Now":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Under Construction":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "Planning Phase":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "Pre-Launch":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white py-20 transition-all duration-1000 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Ongoing Projects & Properties
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            Discover our current developments and available properties across
            Kisumu. From residential apartments to commercial spaces, find your
            perfect investment opportunity.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base lg:text-lg">
            <div className="flex items-center space-x-2">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white hover:bg-white/30 text-xs sm:text-sm"
              >
                6 Active Projects
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white hover:bg-white/30 text-xs sm:text-sm"
              >
                130+ Units Available
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={listingsRef}
        className={`py-16 bg-gray-50 transition-all duration-1000 delay-500 ${
          listingsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="houses" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger
                value="houses"
                className="flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>Houses</span>
              </TabsTrigger>
              <TabsTrigger
                value="plots"
                className="flex items-center space-x-2"
              >
                <Landmark className="h-4 w-4" />
                <span>Plots</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="houses">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {propertyListings.houses.map((house, index) => (
                  <Card
                    key={house.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative">
                      <img
                        src={house.image}
                        alt={house.title}
                        className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 text-xs sm:text-sm bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-200">
                        {house.status}
                      </Badge>
                    </div>

                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-base sm:text-lg font-semibold text-blue-900 hover:text-green-600 transition-colors duration-200">
                        {house.title}
                      </CardTitle>
                      <CardDescription className="flex items-center space-x-1 text-gray-600 text-sm">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span>{house.location}</span>
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                      <p className="text-xs sm:text-sm text-gray-700">
                        {house.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                        <div className="space-y-1 sm:space-y-2">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <Bed className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
                            <span className="font-medium">Bedrooms:</span>
                          </div>
                          <span className="text-gray-600 text-xs sm:text-sm">
                            {house.bedrooms}
                          </span>
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <Bath className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                            <span className="font-medium">Bathrooms:</span>
                          </div>
                          <span className="text-gray-600 text-xs sm:text-sm">
                            {house.bathrooms}
                          </span>
                        </div>
                      </div>

                      <div className="border-t pt-3 sm:pt-4">
                        <div className="flex justify-between items-center mb-2 sm:mb-3">
                          <span className="text-base sm:text-lg font-bold text-green-600">
                            {house.price}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-500">
                            {house.area}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                          {house.features.slice(0, 3).map((feature, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs hover:bg-blue-50 transition-colors duration-200"
                            >
                              {feature}
                            </Badge>
                          ))}
                          {house.features.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{house.features.length - 3} more
                            </Badge>
                          )}
                        </div>

                        <div className="flex space-x-2">
                          <Link to={`/property/${house.id}`}>
                            <Button
                              className="flex-1 bg-blue-900 hover:bg-blue-800 transition-colors duration-200 text-xs sm:text-sm"
                              size="sm"
                            >
                              <span className="hidden sm:inline">
                                View Details
                              </span>
                              <span className="sm:hidden">Details</span>
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:bg-green-50 hover:border-green-600 hover:text-green-600 transition-all duration-200 px-2 sm:px-3"
                          >
                            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="plots">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {propertyListings.plots.map((plot, index) => (
                  <Card
                    key={plot.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative">
                      <img
                        src={plot.image}
                        alt={plot.title}
                        className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 text-xs sm:text-sm bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-200">
                        {plot.status}
                      </Badge>
                    </div>

                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-base sm:text-lg font-semibold text-blue-900 hover:text-green-600 transition-colors duration-200">
                        {plot.title}
                      </CardTitle>
                      <CardDescription className="flex items-center space-x-1 text-gray-600 text-sm">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span>{plot.location}</span>
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                      <p className="text-xs sm:text-sm text-gray-700">
                        {plot.description}
                      </p>

                      <div className="grid grid-cols-1 gap-3 sm:gap-4 text-xs sm:text-sm">
                        <div className="space-y-1 sm:space-y-2">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <Square className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
                            <span className="font-medium">Area:</span>
                          </div>
                          <span className="text-gray-600 text-xs sm:text-sm">
                            {plot.area}
                          </span>
                        </div>
                      </div>

                      <div className="border-t pt-3 sm:pt-4">
                        <div className="flex justify-between items-center mb-2 sm:mb-3">
                          <span className="text-base sm:text-lg font-bold text-green-600">
                            {plot.price}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-500">
                            {plot.type}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                          {plot.features.slice(0, 3).map((feature, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs hover:bg-blue-50 transition-colors duration-200"
                            >
                              {feature}
                            </Badge>
                          ))}
                          {plot.features.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{plot.features.length - 3} more
                            </Badge>
                          )}
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            className="flex-1 bg-blue-900 hover:bg-blue-800 transition-colors duration-200 text-xs sm:text-sm"
                            size="sm"
                          >
                            <span className="hidden sm:inline">
                              Contact Agent
                            </span>
                            <span className="sm:hidden">Contact</span>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:bg-green-50 hover:border-green-600 hover:text-green-600 transition-all duration-200 px-2 sm:px-3"
                          >
                            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">
            Ready to Invest in Your Future?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
            Get in touch with our property experts to learn more about these
            exciting projects and find the perfect property that matches your
            investment goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 transition-colors duration-200 hover:scale-105 transform text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Schedule a Site Visit</span>
              <span className="sm:hidden">Site Visit</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-blue-900 hover:text-white transition-all duration-200 hover:scale-105 transform text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Download Brochure</span>
              <span className="sm:hidden">Brochure</span>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OngoingProjects;
