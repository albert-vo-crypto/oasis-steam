import './Footer.scss';

import Text from 'antd/lib/typography/Text';
import React, { useEffect, useState } from 'react';

export const Footer = () => {
  const [recentAd, setRecentAd] = useState<any>();

  useEffect(() => {
    fetchRecentAd();
  }, []);

  const fetchRecentAd = async () => {
    const res = await fetch('http://localhost:3001/getAdvertisements');
    const json = await res.json();

    const publishedAds = json.filter((ad: any) => ad.advertisementStatus === 'Published');

    setRecentAd(publishedAds[publishedAds.length - 1]);
  };

  return (
    <div className="Footer">
      <Text> </Text>

      {recentAd && (
        <div className="oasis-ad" style={{ textAlign: 'center' }}>
          <h3 style={{ fontWeight: 600 }}>{recentAd.advertisementDescription}</h3>
          <a
            href={recentAd.advertisementUrl}
            title={recentAd.advertisementUrl}
            target="_blank"
            className="ant-btn button-fancy"
            rel="noreferrer"
          >
            Click to explore
          </a>
        </div>
      )}
      <Text>2022 © TILE Games</Text>
    </div>
  );
};
