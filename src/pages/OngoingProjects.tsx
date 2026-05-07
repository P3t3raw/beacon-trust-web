import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useSEO } from "../hooks/useSEO";
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
  Phone,
  Home,
  Landmark,
} from "lucide-react";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Images
import kenyaResidential from "../assets/kenya-residential-1.jpg";
import kenyaCommercial from "../assets/kenya-commercial-1.jpg";
import kenyaTownhouse from "../assets/kenya-townhouse-1.jpg";
import kenyaLandscape from "../assets/kenya-landscape-1.jpg";
import kenyaVilla from "../assets/kenya-villa-1.jpg";
import kenyaWildlife from "../assets/kenya-wildlife-1.jpg";
import cbdkisumu1 from "../assets/cbdkisumu1.jpg";
import chaberahbay from "../assets/chaberahbay.jpg";
import nyawarakisian1 from "../assets/nyawarakisian1.jpg";
import Ojolakisian1 from "../assets/Ojolakisian1.jpg";

const OngoingProjects = () => {
  useSEO({
    title: "Ongoing Projects & Properties",
    description:
      "Explore BeaconTrust ongoing projects and available properties in Kisumu, Kenya.",
    keywords:
      "ongoing projects Kenya, property listings Kisumu, houses for sale, plots for sale",
  });

  const { elementRef: heroRef, isVisible: heroVisible } =
    useScrollAnimation();

  const { elementRef: listingsRef, isVisible: listingsVisible } =
    useScrollAnimation();

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
          "Contemporary 3-bedroom townhouse in a gated community.",
        features: [
          "Gated Community",
          "Swimming Pool",
          "Gym",
          "Children's Play Area",
        ],
      },
    ],

    plots: [
      {
        id: 3,
        title: "Prime Residential Plot",
        location: "Nyawara-Kisian, Kisumu",
        type: "Residential Plot",
        status: "For Sale",
        area: "0.07Ha - 0.1Ha",
        price: "KSh 700,000 - 1.5M",
        image: nyawarakisian1,
        description:
          "Affordable prime residential plot with ready title deed.",
        features: [
          "Title Deed",
          "Water",
          "Electricity",
          "Good Access Road",
        ],
      },

      {
        id: 4,
        title: "Prime Residential Plot",
        location: "Ojola-Kisian, Kisumu",
        type: "Residential Plot",
        status: "For Sale",
        area: "0.045Ha - 0.07Ha",
        price: "KSh 700,000 - 1.4M",
        image: Ojolakisian1,
        description:
          "Affordable prime residential plot with ready title deed.",
        features: [
          "Secure Location",
          "High Traffic",
          "Mixed Use",
          "Investment Grade",
        ],
      },

      {
        id: 5,
        title: "Commercial/Residential Plot",
        location: "Chabera, Homa Bay County",
        type: "Commercial Plot",
        status: "For Sale",
        area: "3 Acres",
        price: "KSh 1.5M",
        image: chaberahbay,
        description:
          "Commercial/residential plot touching the main highway.",
        features: [
          "Secure Location",
          "High Traffic",
          "Mixed Use",
          "Investment Grade",
        ],
      },

      {
        id: 6,
        title: "Prime Residential Plot",
        location: "Milimani, Kisumu",
        type: "Residential Plot",
        status: "For Sale",
        area: "0.07Ha",
        price: "KSh 20M",
        image: cbdkisumu1,
        description:
          "Prime residential plot opposite Impala Sanctuary.",
        features: [
          "Title Deed",
          "Water",
          "Electricity",
          "Good Access Road",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section
        ref={heroRef}
        className={`bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white py-20 transition-all duration-1000 ${
          heroVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ongoing Projects & Properties
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Discover our current developments and available properties across
            Kisumu.
          </p>
        </div>
      </section>

      {/* Listings */}
      <section
        ref={listingsRef}
        className={`py-16 bg-gray-50 transition-all duration-1000 ${
          listingsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="houses" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="houses">
                <Home className="h-4 w-4 mr-2" />
                Houses
              </TabsTrigger>

              <TabsTrigger value="plots">
                <Landmark className="h-4 w-4 mr-2" />
                Plots
              </TabsTrigger>
            </TabsList>

            {/* Houses */}
            <TabsContent value="houses">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {propertyListings.houses.map((house) => (
                  <Card
                    key={house.id}
                    className="overflow-hidden hover:shadow-xl transition"
                  >
                    <img
                      src={house.image}
                      alt={house.title}
                      className="w-full h-48 object-cover"
                    />

                    <CardHeader>
                      <CardTitle>{house.title}</CardTitle>

                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {house.location}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm text-gray-700 mb-4">
                        {house.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Bed className="h-4 w-4 text-blue-600" />
                          {house.bedrooms} Bedrooms
                        </div>

                        <div className="flex items-center gap-2">
                          <Bath className="h-4 w-4 text-green-600" />
                          {house.bathrooms} Bathrooms
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-green-600">
                          {house.price}
                        </span>

                        <span className="text-sm text-gray-500">
                          {house.area}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {house.features.map((feature, index) => (
                          <Badge key={index} variant="outline">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Link to={`/property/${house.id}`}>
                          <Button>View Details</Button>
                        </Link>

                        <Button variant="outline">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Plots */}
            <TabsContent value="plots">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {propertyListings.plots.map((plot) => (
                  <Card
                    key={plot.id}
                    className="overflow-hidden hover:shadow-xl transition"
                  >
                    <img
                      src={plot.image}
                      alt={plot.title}
                      className="w-full h-48 object-cover"
                    />

                    <CardHeader>
                      <CardTitle>{plot.title}</CardTitle>

                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {plot.location}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm text-gray-700 mb-4">
                        {plot.description}
                      </p>

                      <div className="flex items-center gap-2 mb-4 text-sm">
                        <Square className="h-4 w-4 text-blue-600" />
                        {plot.area}
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-green-600">
                          {plot.price}
                        </span>

                        <span className="text-sm text-gray-500">
                          {plot.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {plot.features.map((feature, index) => (
                          <Badge key={index} variant="outline">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <Button className="w-full">
                        Contact Agent
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OngoingProjects;
