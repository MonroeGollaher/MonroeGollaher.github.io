"use client";

import { motion } from "framer-motion";
import PhotoGrid from "@/components/PhotoGrid";
import { photos } from "@/data/photos";

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg mb-12 max-w-2xl"
        >
          Photography is how I like to slow down and see the world differently.
          <br />
          <br />
          My main camera is a FujiFilm X100V, but I also shoot on my iPhone and
          an old Canon T5i.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <PhotoGrid photos={photos} />
        </motion.div>
      </div>
    </div>
  );
}
