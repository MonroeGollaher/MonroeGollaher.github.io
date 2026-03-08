"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
import type { Photo } from "@/data/photos";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

function cloudinaryUrl(publicId: string, width?: number) {
  const transforms = width ? `w_${width},f_auto,q_auto` : "f_auto,q_auto";
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}

const breakpointColumns = {
  default: 3,
  1024: 2,
  640: 1,
};

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-4 -ml-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {photos.map((photo) => (
          <div
            key={photo.publicId}
            className="mb-4 cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => setSelected(photo)}
          >
            <img
              src={cloudinaryUrl(photo.publicId, 600)}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </Masonry>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={cloudinaryUrl(selected.publicId, 1400)}
                alt={selected.alt}
                className="max-h-[90vh] w-auto rounded-lg"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              >
                &times;
              </button>
              <p className="text-center text-zinc-400 text-sm mt-3">
                {selected.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
