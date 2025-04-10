"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../../components/navBar/NavBar";
import ImageModal from "../../../../components/ui/ImageModal";

const brandAssets = {
  "la-erotique": {
    name: "La Erotique",
    logo: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742224871/laerotique_lpsgep.svg",
    description: "A sensual and luxurious brand identity that embodies sophistication and seduction.",
    brandKit: [
      {
        type: "Logo",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742224871/laerotique_lpsgep.svg",
        label: "Primary Logo",
      },
      {
        type: "Logo",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1743527256/laerotique2_ohafmk.webp",
        label: "secondary Logo",
      },
      {
        type: "Business Card",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1743527432/BC_d098yn.png",
        label: "Business Card Mockup",
      },
      {
        type: "Letterhead",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1743527704/laerotique.header_kkugfl.png",
        label: "Letterhead",
      },
      {
        type: "uniform",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1743527257/chica-laerotique_x00dms.png",
        label: "uniform",
      },
      {
        type: "Mockup",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1743527257/erotik_cjpijs.png",
        label: "Brand in Action",
      },
    ],
  },
  "planto": {
    name: "Planto",
    logo: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744037321/logo-planto_skgroj.png",
    description: "A modern and eco-conscious identity for a plant-care brand focused on sustainability.",
    brandKit: [
      {
        type: "Logo",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744037321/logo-planto_skgroj.png",
        label: "Primary Logo",
      },
      {
        type: "Logo",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744037321/logo-planto2_xdvran.png",
        label: "Secondary Logo",
      },
      {
        type: "Business Card",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744037242/BC-planto_rvilxl.png",
        label: "Business Card",
      },
      {
        type: "uniform",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744037242/uniform-planto_mv1pbv.png",
        label: "Uniform",
      },
      {
        type: "Letterhead",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744037241/headletter-planto_qhlna5.svg",
        label: "Letterhead",
      },
      {
        type: "Mockup",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744039950/stationery_mockup_converted_mymywc.png",
        label: "Packaging Mockup",
      },
    ],
  },
  "pixeltrend": {
    name: "PixelTrend Studio",
    logo: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742047306/pixel_yyiprj.svg",
    description: "A sleek, futuristic, and modern logo design for PixelTrend Studio, a cutting-edge tech startup focused on innovation and digital trends.",
    brandKit: [
      {
        type: "Logo",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742047306/pixel_yyiprj.svg",
        label: "Primary Logo",
      },
      {
        type: "Logo",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742047306/logo-pixeltrend_seihwa.svg",
        label: "Secondary Logo",
      },
      {
        type: "Business Card",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1743352277/business_obgabx.png",
        label: "Business Card Mockup",
      },
      {
        type: "Letterhead",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1743352080/header_odlfxb.png",
        label: "Letterhead",
      },
      {
        type: "Uniform",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1743352086/chico_back3_bbixfr.png",
        label: "Uniform",
      },
      {
        type: "Mockup",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1743352095/stationary_a3yorq.png",
        label: "Brand in Action",
      },
    ],
  },
  "waleska": {
    name: "Waleska",
    logo: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742047306/logowale2_chgci5.svg",
    description: "A glamorous and elegant brand for a high-end beauty and lifestyle service.",
    brandKit: [
      {
        type: "Logo",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742047306/logowale2_chgci5.svg",
        label: "Primary Logo",
      },
      {
        type: "Logo",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744220312/logowale_amqiwc.png",
        label: "Secondary Logo",
      },
      {
        type: "Business Card",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744220400/BC_drsn8w.png",
        label: "Business Card Mockup",
      },
      {
        type: "Letterhead",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744219277/header_pl7spk.png",
        label: "Letterhead",
      },
      {
        type: "Uniform",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744219444/uniform_t0p4a0.png",
        label: "Uniform",
      },
      {
        type: "Mockup",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744219278/wale-stationary_vk4sai.png",
        label: "Brand in Action",
      },
      {
        type: "use",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744219278/use_zh9hd7.png",
        label: "Brand color use",
      },
    ],
  },
  "sweatmate": {
    name: "sweatmate",
    logo: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742047304/logo_sweatMate_ezmkqq.svg",
    description: "A fitness brand focused on performance, motivation, and physical excellence.",
    brandKit: [
      {
        type: "Logo",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1742047304/logo_sweatMate_ezmkqq.svg",
        label: "Primary Logo",
      },
      {
        type: "Logo",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744295233/logo_sweatMate2_sfpelp.png",
        label: "Secondary Logo",
      },
      {
        type: "Business Card",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744295011/bc_sweatMate_bhj88l.png",
        label: "Business Card",
      },
      {
        type: "Letterhead",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744295010/letter_sweatMate_mnpq0j.png",
        label: "Letterhead",
      },
      {
        type: "Uniform",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744295482/uniform_kpyoah.png",
        label: "Uniform",
      },
      {
        type: "Mockup",
        file: "https://res.cloudinary.com/da6il8qmv/image/upload/v1744295011/stationary_e1cfr8.png",
        label: "Brand in Action",
      },
     
    ],
  },
};

export default function BrandGuidelines() {
  const { brand } = useParams();
  const data = brandAssets[brand];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState(null);

  if (!data) {
    return <p className="text-center text-white pt-32">Brand not found.</p>;
  }

  return (
    <section className="pt-32 min-h-screen bg-gray-900 text-white text-center relative z-20">
      <Navbar />

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-5xl font-display font-bold mb-12"
      >
        {data.name} Brand Guidelines
      </motion.h2>

      <p className="max-w-xl mx-auto text-lg text-gray-400 mb-10">{data.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {data.brandKit.map((asset, index) => (
          <motion.div
            key={index}
            onClick={() => {
              setSelectedImage(asset.file);
              setSelectedLabel(asset.label);
              setIsModalOpen(true);
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-4 text-center cursor-pointer hover:scale-105 transition"
          >
            <img
              src={asset.file}
              alt={asset.label}
              className="w-full h-48 object-contain mb-4 bg-white p-2 rounded-md"
            />
            <p className="text-sm text-gray-800 dark:text-gray-200 font-semibold">{asset.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-primary-light text-white rounded-full shadow-lg hover:bg-primary-dark transition-all"
        >
          Back to Corporate Design
        </button>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={selectedImage}
        label={selectedLabel}
      />
    </section>
  );
}
