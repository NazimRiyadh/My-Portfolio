import React from 'react';

function Research() {
  return (
    <div className="section-container">
      <h1 className="text-display-xl mb-4 text-ink font-bold">Research Papers</h1>
      <p className="text-body-md mb-12 text-mute max-w-[600px]">
        Applied AI research focusing on computer vision, predictive modeling, and addressing real-world domain challenges.
      </p>

      <div className="space-y-16">
        {/* Paper 1 */}
        <div className="border border-hairline bg-canvas p-6 rounded-none">
          <h2 className="text-heading-md mb-2">ESkinNetBD: Dual-Attention EfficientNet for Transparent Skin Disease Diagnosis</h2>
          <div className="text-caption-md text-mute mb-6 pb-4 border-b border-hairline">Status: Published | Area: Computer Vision / Medical AI</div>
          
          <div className="mb-6">
            <div className="text-body-strong mb-1 text-ink">Abstract / Summary:</div>
            <p className="text-body-md text-body">
              Constructed a CNN framework using EfficientNetB2 and CBAM to classify dermatological conditions across six categories using the SkinDisNet Bangladeshi dataset. Mitigated dataset imbalances through focal loss, label smoothing, and augmentation, attaining a 96.9% macro-F1 score on evaluation sets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-soft p-4 rounded-sm border border-hairline">
            <div>
              <div className="text-body-strong mb-2 text-ink">Methodology:</div>
              <ul className="space-y-1 text-body-md">
                <li><span className="text-mute mr-2">[-]</span> EfficientNetB2 backbone</li>
                <li><span className="text-mute mr-2">[-]</span> CBAM dual-attention</li>
                <li><span className="text-mute mr-2">[-]</span> Focal loss & Label smoothing</li>
              </ul>
            </div>
            <div>
              <div className="text-body-strong mb-2 text-ink">Explainability:</div>
              <ul className="space-y-1 text-body-md">
                <li><span className="text-mute mr-2">[-]</span> Grad-CAM integration</li>
                <li><span className="text-mute mr-2">[-]</span> Grad-CAM++ for visual explanations</li>
                <li><span className="text-mute mr-2">[-]</span> Enhanced clinical transparency</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Paper 2 */}
        <div className="border border-hairline bg-canvas p-6 rounded-none">
          <h2 className="text-heading-md mb-2">Chlorophyll Detection via CalCOFI Data: Marine Ecosystem Insights</h2>
          <div className="text-caption-md text-mute mb-6 pb-4 border-b border-hairline">Status: Published | Area: Environmental AI</div>
          
          <div className="mb-6">
            <div className="text-body-strong mb-1 text-ink">Abstract / Summary:</div>
            <p className="text-body-md text-body">
              Architected a predictive model for chlorophyll quantification utilizing an optimized Random Forest Regressor. Executed advanced feature engineering and Optuna-driven tuning, outperforming ten baseline models in predictive precision for oceanic monitoring.
            </p>
          </div>

          <div className="bg-surface-soft p-4 rounded-sm border border-hairline">
            <div className="text-body-strong mb-2 text-ink">Key Results:</div>
            <ul className="space-y-2 text-body-md">
              <li><span className="text-mute mr-2">[+]</span> Verified R² of 0.7889 achieved.</li>
              <li><span className="text-mute mr-2">[+]</span> Outperformed 10 alternative baseline models.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
