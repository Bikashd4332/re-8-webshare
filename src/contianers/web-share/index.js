import React  from 'react';
import Template from './components/template';
import { ShareButton, DownloadButton } from './components/ShareButton';

const WebShare = (props) => {
    return (
        <div className="lg:max-w-screen-lg max-w-full  mx-auto relative">
            <Template />
          <div className="absolute top-5 right-5">
            <ShareButton elementId="pdf-doc" />
          </div>
          <div className="absolute top-5 right-24">
            <DownloadButton elementId="pdf-doc" />
          </div>
        </div>
    )
};

export default WebShare;
