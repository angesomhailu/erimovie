"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "@/components/navbar";
import MediaRow from "@/components/media-row";
import Banner from "@/components/banner";

export default function CommonLayout({ mediaData }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Erimovie</title>
      </Head>
      <>
        <Navbar />
        <div className="relative pl-4 pb-24 lg:space-y-24">
          <Banner
            medias={mediaData && mediaData.length ? mediaData[0].medias : []}
          />
          <section className="md:space-y-16">
            {mediaData && mediaData.length
              ? mediaData.map((item) => (
                  <MediaRow
                    key={item.title}
                    title={item.title}
                    medias={item.medias}
                  />
                ))
              : null}
          </section>
        </div>
      </>
    </motion.div>
  );
}
