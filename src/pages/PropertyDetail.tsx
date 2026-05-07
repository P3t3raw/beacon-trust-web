import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useSEO } from '../hooks/useSEO';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
  Phone,
  Mail,
  ArrowLeft,
  CheckCircle,
  Star,
  Camera,
  Video,
  Heart,
  Share2
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

// Import images
import kenyaResidential from "../assets/kenya-residential-1.jpg";
import kenyaCommercial from "../assets/kenya-commercial-1.jpg";
import kenyaTownhouse from "../assets/kenya-townhouse-1.jpg";
import kenyaLandscape from "../assets/kenya-landscape-1.jpg";
import kenyaVilla from "../assets/kenya-villa-1.jpg";
import kenyaWildlife from "../assets/kenya-wildlife-1.jpg";

const PropertyDetail = () => {
  const { id } = useParams();
  const heroAnimation = useScrollAnimation();

  // Mock data - in real app this would come from API/database
  const propertyData = {
    "1": {
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
      images: [kenyaResidential, kenyaTownhouse, kenyaVilla],
      description: "Modern residential apartments with stunning lake views and premium amenities. This development offers contemporary living in one of Kisumu's most sought-after neighborhoods.",
      features: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Garden", "Lake View", "Modern Kitchen", "Air Conditioning"],
      amenities: [
        "State-of-the-art fitness center",
        "Olympic-size swimming pool",
        "Children's playground",
        "24/7 security with CCTV",
        "Backup generator",
        "High-speed internet ready",
        "Landscaped gardens",
        "Visitor parking"
      ],
      floorPlans: ["2BR - 120 sqm", "3BR - 150 sqm", "4BR - 200 sqm"],
      paymentOptions: [
        "Cash payment with 15% discount",
        "Mortgage financing available",
        "Flexible payment plans up to 24 months",
        "Construction milestone payments"
      ]
    },
    // Add more properties as needed
  };

  const property = propertyData[id as keyof typeof propertyData];

  useSEO({
    title: property ? `${property.title} - Property Details` : 'Property Not Found',
    description: property ? property.description : 'Property details not available',
    keywords: `property details, ${property?.location}, ${property?.type}, real estate Kenya`
  });

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-8">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/ongoing-projects" className="text-blue-600 hover:text-blue-700">
            ← Back to Properties
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative">
        <div className="h-96 bg-gray-900 relative overflow-hidden">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          <div className="absolute bottom-8 left-8 text-white">
            <Link 
              to="/ongoing-projects" 
              className="inline-flex items-center text-white/80 hover:text-white mb-4 text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Properties
            </Link>
            <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{property.location}</span>
              </div>
              <Badge className="bg-white/20 text-white">
                {property.status}
              </Badge>
            </div>
          </div>

          <div className="absolute top-8 right-8 flex space-x-2">
            <Button size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Bed className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                    <p className="text-sm text-gray-600">Bedrooms</p>
                    <p className="font-semibold">{property.bedrooms}</p>
                  </div>
                  <div className="text-center">
                    <Bath className="h-8 w-8 mx-auto text-green-600 mb-2" />
                    <p className="text-sm text-gray-600">Bathrooms</p>
                    <p className="font-semibold">{property.bathrooms}</p>
                  </div>
                  <div className="text-center">
                    <Square className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                    <p className="text-sm text-gray-600">Area</p>
                    <p className="font-semibold">{property.area}</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="h-8 w-8 mx-auto text-orange-600 mb-2" />
                    <p className="text-sm text-gray-600">Completion</p>
                    <p className="font-semibold">{property.completion}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Property Description</h3>
                    <p className="text-gray-700 mb-6">{property.description}</p>
                    
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="amenities" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Building Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-500 mr-3" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gallery" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Photo Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.images.map((image, index) => (
                        <div key={index} className="relative group">
                          <img 
                            src={image} 
                            alt={`${property.title} - Image ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                            <Camera className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payment" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Payment Options</h3>
                    <div className="space-y-4">
                      {property.paymentOptions.map((option, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                          <span>{option}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card className="border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-green-600">{property.price}</p>
                  <p className="text-gray-600">Starting Price</p>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open('tel:+254700000000', '_self')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('mailto:info@beacontrust.co.ke?subject=Property Inquiry - ' + property.title, '_self')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="outline" className="w-full">
                    Schedule Viewing
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Agent Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Property Agent</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    BT
                  </div>
                  <div>
                    <p className="font-semibold">BeaconTrust Team</p>
                    <p className="text-sm text-gray-600">Licensed Real Estate Agent</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <span>+254 700 000 000</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    <span>info@beacontrust.co.ke</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
