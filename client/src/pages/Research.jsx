import React from 'react';
import { motion } from 'framer-motion';

function Research() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="section-container">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-left"
      >
        <span className="font-mono text-accent text-xs tracking-wider uppercase mb-2 block">// academic.notebook</span>
        <h1 className="font-display text-[44px] text-white font-bold tracking-tight mb-4">Research</h1>
        <p className="text-body-md text-body max-w-[600px] leading-relaxed font-sans">
          Applied AI research papers detailing model architectures, performance, and computer vision methodologies.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Paper 1 */}
        <motion.div 
          variants={itemVariants}
          className="border border-hairline bg-surface-soft p-8 rounded-sm glow-card relative overflow-hidden"
        >
          <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
            <h2 className="font-display text-[22px] font-bold text-white leading-snug max-w-[650px]">
              ESkinNetBD: Dual-Attention EfficientNet for Transparent Skin Disease Diagnosis
            </h2>
            <span className="font-mono text-[10px] text-accent bg-card-bg px-2.5 py-1 border border-hairline rounded-sm">
              Computer Vision
            </span>
          </div>
          <div className="text-caption-md text-mute font-mono mb-6 pb-4 border-b border-hairline">
            Status: Published | Area: Medical AI
          </div>
          
          <div className="mb-6 font-sans">
            <div className="font-mono text-xs text-white mb-2 uppercase font-bold tracking-wider">Abstract:</div>
            <p className="text-body-md text-body leading-relaxed">
              Constructed a CNN framework using EfficientNetB2 and CBAM to classify dermatological conditions across six categories using the SkinDisNet Bangladeshi dataset. Mitigated dataset imbalances through focal loss, label smoothing, and augmentation, attaining a 96.9% macro-F1 score on evaluation sets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-canvas/50 p-6 rounded-sm border border-hairline font-sans">
            <div>
              <div className="font-mono text-xs text-white mb-3 flex items-center uppercase font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 inline-block"></span>
                Methodology
              </div>
              <ul className="space-y-2 text-caption-md text-body">
                <li><span className="text-accent mr-2 font-mono font-bold">[o]</span> EfficientNetB2 backbone</li>
                <li><span className="text-accent mr-2 font-mono font-bold">[o]</span> CBAM dual-attention</li>
                <li><span className="text-accent mr-2 font-mono font-bold">[o]</span> Focal loss & Label smoothing</li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-xs text-white mb-3 flex items-center uppercase font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 inline-block"></span>
                Explainability
              </div>
              <ul className="space-y-2 text-caption-md text-body">
                <li><span className="text-accent mr-2 font-mono font-bold">[o]</span> Grad-CAM integration</li>
                <li><span className="text-accent mr-2 font-mono font-bold">[o]</span> Grad-CAM++ for visual explanations</li>
                <li><span className="text-accent mr-2 font-mono font-bold">[o]</span> Enhanced clinical transparency</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Paper 2 */}
        <motion.div 
          variants={itemVariants}
          className="border border-hairline bg-surface-soft p-8 rounded-sm glow-card relative overflow-hidden"
        >
          <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
            <h2 className="font-display text-[22px] font-bold text-white leading-snug max-w-[650px]">
              Chlorophyll Detection via CalCOFI Data: Marine Ecosystem Insights
            </h2>
            <span className="font-mono text-[10px] text-accent bg-card-bg px-2.5 py-1 border border-hairline rounded-sm">
              Environmental AI
            </span>
          </div>
          <div className="text-caption-md text-mute font-mono mb-6 pb-4 border-b border-hairline">
            Status: Published | Area: Machine Learning
          </div>
          
          <div className="mb-6 font-sans">
            <div className="font-mono text-xs text-white mb-2 uppercase font-bold tracking-wider">Abstract:</div>
            <p className="text-body-md text-body leading-relaxed">
              Architected a predictive model for chlorophyll quantification utilizing an optimized Random Forest Regressor. Executed advanced feature engineering and Optuna-driven tuning, outperforming ten baseline models in predictive precision for oceanic monitoring.
            </p>
          </div>

          <div className="bg-canvas/50 p-6 rounded-sm border border-hairline font-sans">
            <div className="font-mono text-xs text-white mb-3 flex items-center uppercase font-bold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 inline-block"></span>
              Key Results
            </div>
            <ul className="space-y-2 text-caption-md text-body">
              <li><span className="text-accent mr-2 font-mono font-bold">[+]</span> Verified R² of 0.7889 achieved.</li>
              <li><span className="text-accent mr-2 font-mono font-bold">[+]</span> Outperformed 10 alternative baseline models.</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Research;
